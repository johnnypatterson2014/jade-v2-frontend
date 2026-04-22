'use client';

import Button from '@/components/client/Button';
import React, { useState } from 'react';

type Status = 'idle' | 'running' | 'done';

type BreakdownTerm = {
  direction: 'forward' | 'backward';
  prob: number;
  reward: number;
  next_state: number;
  v_next: number;
  value: number;
};
type BreakdownAction = { action: number; terms: BreakdownTerm[]; sum: number };
type BreakdownState = {
  state: number;
  actions: BreakdownAction[];
  q_values: number[];
  new_value: number;
};

const fmt2 = (v: number): string => {
  const s = v.toFixed(2);
  return s.includes('.') ? s.replace(/0+$/, '').replace(/\.$/, '') : s;
};

const parseFloatStrict = (text: string, label: string): number => {
  const trimmed = text.trim();
  if (trimmed === '') throw new Error(`${label} must not be empty`);
  const n = Number(trimmed);
  if (!Number.isFinite(n)) throw new Error(`${label} must be a number`);
  return n;
};

const parseProbability = (text: string, label: string): number => {
  const n = parseFloatStrict(text, label);
  if (n < 0 || n > 1) throw new Error(`${label} must be in [0, 1]`);
  return n;
};

const parsePositiveInt = (text: string, label: string): number => {
  const trimmed = text.trim();
  if (trimmed === '') throw new Error(`${label} must not be empty`);
  const n = Number(trimmed);
  if (!Number.isInteger(n) || n < 1) throw new Error(`${label} must be a positive integer`);
  return n;
};

const MdpViDemo = () => {
  const [leftRewardInput, setLeftRewardInput] = useState<string>('10');
  const [rightRewardInput, setRightRewardInput] = useState<string>('50');
  const [penaltyInput, setPenaltyInput] = useState<string>('-5');
  const [nInput, setNInput] = useState<string>('2');
  const [fwdA1Input, setFwdA1Input] = useState<string>('0.2');
  const [fwdA2Input, setFwdA2Input] = useState<string>('0.3');
  const [discountInput, setDiscountInput] = useState<string>('');
  const [epsilonInput, setEpsilonInput] = useState<string>('');

  const [sessionId, setSessionId] = useState<string>('');
  const [imageSrc, setImageSrc] = useState<string>('');
  const [breakdown, setBreakdown] = useState<BreakdownState[]>([]);
  const [discount, setDiscount] = useState<number>(1);
  const [status, setStatus] = useState<Status>('idle');
  const [stepCount, setStepCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handleStart = async () => {
    setErrorMsg('');
    let body: Record<string, number>;
    try {
      body = {
        left_reward: parseFloatStrict(leftRewardInput, 'leftReward'),
        right_reward: parseFloatStrict(rightRewardInput, 'rightReward'),
        penalty: parseFloatStrict(penaltyInput, 'penalty'),
        n: parsePositiveInt(nInput, 'n'),
        forward_prob_a1: parseProbability(fwdA1Input, 'forward_prob_a1'),
        forward_prob_a2: parseProbability(fwdA2Input, 'forward_prob_a2'),
      };
      if (discountInput.trim() !== '') {
        const d = parseFloatStrict(discountInput, 'discount');
        if (d < 0 || d > 1) throw new Error('discount must be a float in [0, 1]');
        body.discount = d;
      }
      if (epsilonInput.trim() !== '') {
        const e = parseFloatStrict(epsilonInput, 'epsilon');
        if (e <= 0) throw new Error('epsilon must be positive');
        body.epsilon = e;
      }
    } catch (e: any) {
      setErrorMsg(e?.message || 'invalid input');
      return;
    }

    setIsLoading(true);
    try {
      if (sessionId) {
        await fetch(`/api/mdp/cancel/${sessionId}`, { method: 'DELETE' });
      }
      const response = await fetch('/api/mdp/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        const msg = await response.text();
        setErrorMsg(msg || `start failed: ${response.status}`);
        return;
      }
      const data = await response.json();
      setSessionId(data.session_id);
      setImageSrc('');
      setBreakdown([]);
      setStepCount(0);
      setStatus('running');
    } catch (error) {
      console.log('error in handleStart');
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const applyFrame = (data: any, serverStatus: Status) => {
    if (data.image) setImageSrc('data:image/png;base64,' + data.image);
    if (Array.isArray(data.breakdown)) setBreakdown(data.breakdown as BreakdownState[]);
    if (typeof data.discount === 'number') setDiscount(data.discount);
    setStepCount((n) => n + 1);
    setStatus(serverStatus);
  };

  const handleStep = async () => {
    if (!sessionId || status === 'done') return;
    setIsLoading(true);
    try {
      const response = await fetch(`/api/mdp/step/${sessionId}`, { method: 'POST' });
      if (!response.ok) {
        console.log('step failed', response.status);
        return;
      }
      const data = await response.json();
      applyFrame(data, data.status === 'done' ? 'done' : 'running');
    } catch (error) {
      console.log('error in handleStep');
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRunToEnd = async () => {
    if (!sessionId || status === 'done') return;
    setIsLoading(true);
    try {
      const response = await fetch(`/api/mdp/run_to_end/${sessionId}`, { method: 'POST' });
      if (!response.ok) {
        console.log('run_to_end failed', response.status);
        return;
      }
      const data = await response.json();
      applyFrame(data, 'done');
    } catch (error) {
      console.log('error in handleRunToEnd');
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = async () => {
    if (!sessionId) return;
    setIsLoading(true);
    try {
      await fetch(`/api/mdp/cancel/${sessionId}`, { method: 'DELETE' });
      setSessionId('');
      setImageSrc('');
      setBreakdown([]);
      setStepCount(0);
      setStatus('idle');
    } catch (error) {
      console.log('error in handleCancel');
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    border: '1px solid #888',
    borderRadius: 4,
    padding: '4px 8px',
    marginLeft: 8,
    minWidth: 140,
  };
  const labelStyle: React.CSSProperties = { display: 'inline-block', minWidth: 150 };
  const rowStyle: React.CSSProperties = { marginBottom: 6 };

  return (
    <>

      <div className='flex'>
        <div className='flex-none'>

          <div className="m-[20px]">
            <div style={rowStyle}>
              <label style={labelStyle}>leftReward:</label>
              <input type="text" value={leftRewardInput}
                onChange={(e) => setLeftRewardInput(e.target.value)}
                placeholder="10" style={inputStyle} />
            </div>
            <div style={rowStyle}>
              <label style={labelStyle}>rightReward:</label>
              <input type="text" value={rightRewardInput}
                onChange={(e) => setRightRewardInput(e.target.value)}
                placeholder="50" style={inputStyle} />
            </div>
            <div style={rowStyle}>
              <label style={labelStyle}>penalty:</label>
              <input type="text" value={penaltyInput}
                onChange={(e) => setPenaltyInput(e.target.value)}
                placeholder="-5" style={inputStyle} />
            </div>
            <div style={rowStyle}>
              <label style={labelStyle}>n:</label>
              <input type="text" value={nInput}
                onChange={(e) => setNInput(e.target.value)}
                placeholder="2" style={inputStyle} />
            </div>
            <div style={rowStyle}>
              <label style={labelStyle}>forward_prob_a1:</label>
              <input type="text" value={fwdA1Input}
                onChange={(e) => setFwdA1Input(e.target.value)}
                placeholder="0.2" style={inputStyle} />
            </div>
            <div style={rowStyle}>
              <label style={labelStyle}>forward_prob_a2:</label>
              <input type="text" value={fwdA2Input}
                onChange={(e) => setFwdA2Input(e.target.value)}
                placeholder="0.3" style={inputStyle} />
            </div>
            <div style={rowStyle}>
              <label style={labelStyle}>discount:</label>
              <input type="text" value={discountInput}
                onChange={(e) => setDiscountInput(e.target.value)}
                placeholder="optional — float in [0, 1], default 1"
                style={{ ...inputStyle, minWidth: 175 }} />
            </div>
            <div style={rowStyle}>
              <label style={labelStyle}>epsilon:</label>
              <input type="text" value={epsilonInput}
                onChange={(e) => setEpsilonInput(e.target.value)}
                placeholder="optional — default 0.001"
                style={{ ...inputStyle, minWidth: 175 }} />
            </div>
            {errorMsg && <div style={{ color: 'crimson', marginTop: 4 }}>{errorMsg}</div>}
          </div>

          <div className="m-[20px]">
            <div>status: {status}</div>
            {sessionId && <div>session: {sessionId}</div>}
            <div>steps rendered: {stepCount}</div>
          </div>


          <div className='justify-center grow'>
            <div className='place-items-center'>



              {!isLoading && breakdown.length > 0 && (
                <div className="mt-[25px]" style={{ fontFamily: 'monospace', fontSize: 13 }}>
                  <div style={{ fontWeight: 'bold', marginBottom: 8, fontFamily: 'sans-serif' }}>
                    Q-value breakdown
                  </div>
                  {breakdown.map((s) => (
                    <div className='mt-[20px]'
                      key={s.state}
                      style={{ border: '1px solid #888', marginBottom: 8 }}
                    >
                      <div style={{ background: '#1f1e1eab', color: '#ffffff', fontWeight: 'bold', padding: '4px 8px' }}>
                        state {s.state}
                      </div>
                      {s.actions.map((a) => (
                        <div key={a.action}>
                          <div style={{ background: '#f0f0f032', color: '#aaaaaa', fontWeight: 'bold', padding: '3px 16px' }}>
                            action {a.action}
                          </div>
                          {a.terms.map((t, i) => (
                            <div key={i} style={{ padding: '2px 28px' }}>
                              {t.direction}: {fmt2(t.prob)} * ({fmt2(t.reward)} + {fmt2(discount)} * V[
                              {t.next_state}]) = {fmt2(t.value)}
                            </div>
                          ))}
                          <div style={{ padding: '3px 28px', fontWeight: 'bold' }}>
                            sum: {fmt2(a.sum)}
                          </div>
                        </div>
                      ))}
                      <div
                        style={{
                          background: '#fffacd',
                          fontWeight: 'bold',
                          color: '#333333',
                          padding: '4px 8px',
                          borderTop: '1px solid #888',
                        }}
                      >
                        new value: V[{s.state}] = max({s.q_values.map(fmt2).join(', ')}) ={' '}
                        {fmt2(s.new_value)}
                      </div>
                    </div>
                  ))}
                </div>
              )}

            </div>
          </div>


        </div>
        <div className='grow'>

          <div className="flex gap-2 mt-[20px]">
            <Button>
              <a onClick={handleStart}>start new value iteration</a>
            </Button>
            <Button>
              <a
                onClick={handleStep}
                style={{
                  opacity: !sessionId || status === 'done' || isLoading ? 0.4 : 1,
                  pointerEvents: !sessionId || status === 'done' || isLoading ? 'none' : 'auto',
                }}
              >
                next step
              </a>
            </Button>
            <Button>
              <a
                onClick={handleRunToEnd}
                style={{
                  opacity: !sessionId || status === 'done' || isLoading ? 0.4 : 1,
                  pointerEvents: !sessionId || status === 'done' || isLoading ? 'none' : 'auto',
                }}
              >
                run to end
              </a>
            </Button>
            <Button>
              <a
                onClick={handleCancel}
                style={{
                  opacity: !sessionId ? 0.4 : 1,
                  pointerEvents: !sessionId ? 'none' : 'auto',
                }}
              >
                cancel
              </a>
            </Button>
          </div>



          {isLoading && (
            <div className="m-[20px]">
              <h2>Loading...</h2>
            </div>
          )}

          {!isLoading && imageSrc && (
            <div className="m-[20px]">
              <img
                src={imageSrc}
                alt="mdp step"
                style={{ width: '100%', height: 'auto', maxWidth: '100%', display: 'block' }}
              />
            </div>
          )}

        </div>

      </div>



    </>
  );
};

export default MdpViDemo;
