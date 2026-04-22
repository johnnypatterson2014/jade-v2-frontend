'use client';

import Button from '@/components/client/Button';
import React, { useState } from 'react';

type Status = 'idle' | 'running' | 'done';

type CurrentLocation = { location: string; past_cost: number };
type NeighborRow = { location: string; cost: number };
type FrontierRow = { location: string; past_cost: number };
type WaypointsInfo = { tags: string[]; covered: string[] };
type CurrentPathInfo = { steps: string[]; tags_covered: string[] };
type DoneInfo = { cost: number; path: string[] };

type SearchTables = {
  step?: number;
  current_location?: CurrentLocation;
  neighbors?: NeighborRow[];
  frontier?: FrontierRow[];
  waypoints?: WaypointsInfo;
  current_path?: CurrentPathInfo;
  done_info?: DoneInfo;
};

const fmt2 = (v: number): string => v.toFixed(2);

const parseGrid = (text: string): [number, number] => {
  const parts = text.split(',').map((s) => s.trim());
  if (parts.length !== 2) throw new Error('grid must be "W, H"');
  const w = parseInt(parts[0], 10);
  const h = parseInt(parts[1], 10);
  if (!Number.isFinite(w) || !Number.isFinite(h) || w <= 0 || h <= 0) {
    throw new Error('grid must be two positive integers, e.g. "3, 5"');
  }
  return [w, h];
};

const normalizeStart = (text: string): string => {
  const parts = text.split(',').map((s) => s.trim());
  if (parts.length !== 2) throw new Error('start must be "x, y"');
  const x = parseInt(parts[0], 10);
  const y = parseInt(parts[1], 10);
  if (!Number.isFinite(x) || !Number.isFinite(y) || x < 0 || y < 0) {
    throw new Error('start must be two non-negative integers, e.g. "0, 0"');
  }
  return `${x},${y}`;
};

const ShortestPathDemo = () => {
  const [gridInput, setGridInput] = useState<string>('3, 5');
  const [startInput, setStartInput] = useState<string>('0, 0');
  const [endTagInput, setEndTagInput] = useState<string>('label=2,2');
  const [waypointsInput, setWaypointsInput] = useState<string>('');
  const [heuristicInput, setHeuristicInput] = useState<string>('none');

  const [sessionId, setSessionId] = useState<string>('');
  const [imageSrc, setImageSrc] = useState<string>('');
  const [tables, setTables] = useState<SearchTables>({});
  const [status, setStatus] = useState<Status>('idle');
  const [stepCount, setStepCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handleStart = async () => {
    setErrorMsg('');
    let grid: [number, number];
    let startLocation: string;
    try {
      grid = parseGrid(gridInput);
      startLocation = normalizeStart(startInput);
    } catch (e: any) {
      setErrorMsg(e?.message || 'invalid input');
      return;
    }
    const endTag = endTagInput.trim();
    if (!endTag) {
      setErrorMsg('end tag must not be empty');
      return;
    }

    const waypointTags = waypointsInput
      .split(',')
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    setIsLoading(true);
    try {
      if (sessionId) {
        await fetch(`/api/search/cancel/${sessionId}`, { method: 'DELETE' });
      }
      const response = await fetch('/api/search/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          grid_w: grid[0],
          grid_h: grid[1],
          start_location: startLocation,
          end_tag: endTag,
          ...(waypointTags.length > 0 ? { waypoint_tags: waypointTags } : {}),
          ...(heuristicInput && heuristicInput !== 'none' ? { heuristic: heuristicInput } : {}),
        }),
      });
      if (!response.ok) {
        const msg = await response.text();
        setErrorMsg(msg || `start failed: ${response.status}`);
        return;
      }
      const data = await response.json();
      setSessionId(data.session_id);
      setImageSrc('');
      setTables({});
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
    if (data.tables) setTables(data.tables as SearchTables);
    setStepCount((n) => n + 1);
    setStatus(serverStatus);
  };

  const handleStep = async () => {
    if (!sessionId || status === 'done') return;
    setIsLoading(true);
    try {
      const response = await fetch(`/api/search/step/${sessionId}`, { method: 'POST' });
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
      const response = await fetch(`/api/search/run_to_end/${sessionId}`, { method: 'POST' });
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
      await fetch(`/api/search/cancel/${sessionId}`, { method: 'DELETE' });
      setSessionId('');
      setImageSrc('');
      setTables({});
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
  const labelStyle: React.CSSProperties = { display: 'inline-block', minWidth: 110 };
  const rowStyle: React.CSSProperties = { marginBottom: 6 };

  return (
    <>

      <div className='flex'>
        <div className='flex-none'>


          <div className="m-[20px]">
            <div style={rowStyle}>
              <label style={labelStyle}>grid (W, H):</label>
              <input
                type="text"
                value={gridInput}
                onChange={(e) => setGridInput(e.target.value)}
                placeholder="3, 5"
                style={inputStyle}
              />
            </div>
            <div style={rowStyle}>
              <label style={labelStyle}>start (x, y):</label>
              <input
                type="text"
                value={startInput}
                onChange={(e) => setStartInput(e.target.value)}
                placeholder="0, 0"
                style={inputStyle}
              />
            </div>
            <div style={rowStyle}>
              <label style={labelStyle}>end tag:</label>
              <input
                type="text"
                value={endTagInput}
                onChange={(e) => setEndTagInput(e.target.value)}
                placeholder="label=2,2 or x=5"
                style={inputStyle}
              />
            </div>
            <div style={rowStyle}>
              <label style={labelStyle}>waypoint tags:</label>
              <input
                type="text"
                value={waypointsInput}
                onChange={(e) => setWaypointsInput(e.target.value)}
                placeholder="optional — e.g. y=4 or y=3, x=1"
                style={{ ...inputStyle, minWidth: 175 }}
              />
            </div>
            <div style={rowStyle}>
              <label style={labelStyle}>heuristic:</label>
              <select
                value={heuristicInput}
                onChange={(e) => setHeuristicInput(e.target.value)}
                style={inputStyle}
              >
                <option value="none">none</option>
                <option value="StraightLineHeuristic">StraightLineHeuristic</option>
                <option value="NoWaypointsHeuristic">NoWaypointsHeuristic</option>
              </select>
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


              {tables.current_location && (
                <DemoTable
                  title="Current Location"
                  headerColor="cornflowerblue"
                  columns={['location', 'past cost']}
                  rows={[[tables.current_location.location, fmt2(tables.current_location.past_cost)]]}
                />
              )}

              {tables.neighbors && tables.neighbors.length > 0 && (
                <DemoTable
                  title="Neighbors"
                  headerColor="yellow"
                  columns={['location', 'edge cost']}
                  rows={tables.neighbors.map((n) => [n.location, fmt2(n.cost)])}
                />
              )}

              {tables.frontier && tables.frontier.length > 0 && (
                <DemoTable
                  title="Frontier"
                  headerColor="orange"
                  columns={['location', 'past cost']}
                  rows={tables.frontier.map((f) => [f.location, fmt2(f.past_cost)])}
                />
              )}

              {tables.waypoints && (
                <DemoTable
                  title="Waypoints"
                  headerColor="lightgreen"
                  columns={['tag', 'covered']}
                  rows={tables.waypoints.tags.map((t) => [
                    t,
                    tables.waypoints!.covered.includes(t) ? 'yes' : 'no',
                  ])}
                />
              )}

            </div>
          </div>


        </div>
        <div className='grow'>

          <div className="flex gap-2 mt-[20px]">
            <Button>
              <a onClick={handleStart}>start new search</a>
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

          {!isLoading && tables.done_info && (
            <div
              className="m-[20px]"
              style={{
                border: '1px solid #6bf288',
                borderRadius: 4,
                padding: '8px 12px',
                fontFamily: 'monospace',
                fontSize: 13,
              }}
            >
              <div style={{ fontWeight: 'bold' }}>Done!</div>
              <div>cost: {tables.done_info.cost}</div>
              <div>path: {JSON.stringify(tables.done_info.path)}</div>
            </div>
          )}


          {tables.current_path && (
            <div
              className="m-[20px]"
              style={{
                fontFamily: 'monospace',
                fontSize: 13,
              }}
            >
              <span style={{ fontWeight: 'bold' }}>Current path:</span> &nbsp;
              <span>steps: {JSON.stringify(tables.current_path.steps)}</span> &nbsp;
              <span>tags covered: {JSON.stringify(tables.current_path.tags_covered)}</span>
            </div>
          )}

          {!isLoading && imageSrc && (
            <div className="m-[20px]">
              <img
                src={imageSrc}
                alt="search step"
                style={{ width: '100%', height: 'auto', maxWidth: '100%', display: 'block' }}
              />
            </div>
          )}



        </div>

      </div>






    </>
  );
};

const DemoTable = ({
  title,
  headerColor,
  columns,
  rows,
}: {
  title: string;
  headerColor: string;
  columns: string[];
  rows: (string | number)[][];
}) => (
  <div className='mt-[20px]'>
    <div style={{ fontWeight: 'bold', marginBottom: 4 }}>{title}</div>
    <table
      style={{
        borderCollapse: 'collapse',
        width: '100%',
        fontSize: 13,
        fontFamily: 'monospace',
      }}
    >
      <thead>
        <tr>
          {columns.map((c) => (
            <th
              key={c}
              style={{
                background: headerColor,
                border: '1px solid #555',
                padding: '4px 8px',
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#000000'
              }}
            >
              {c}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td
                key={j}
                style={{
                  border: '1px solid #555',
                  padding: '3px 8px',
                  textAlign: 'center',
                }}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ShortestPathDemo;
