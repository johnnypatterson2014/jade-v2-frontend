'use client';

import Image from "next/image";
import Tabs from '@/components/client/Tabs';
import Tab2 from '@/components/client/Tab2';
import Card from '@/components/client/Card';
import CardDrawer from '@/components/client/CardDrawer';
import NavDrawer2 from '@/components/client/NavDrawer2';
import TileRowCell0 from '@/components/client/TileRowCell0';
import { MathJaxContext } from "better-react-mathjax";
import React, { useEffect } from 'react';


export default function Home() {

        useEffect(() => {
                // Check if MathJax is loaded and available in the window object
                if (typeof window?.MathJax !== "undefined") {
                        window.MathJax.typeset(); // Triggers typesetting
                }
        }, []); // Run once on component mount

        function createMarkup(content: any) {
                return { __html: content };
        }

        const html1 = `
        <div dir="ltr">
        <div style="color:rgb(204,204,204);font-family:monospace;font-size:14px;line-height:18px;">
                <div><span style="color:rgb(201,209,217)">StateT</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">Union</span>[<span style="color:rgb(78,201,176)">int</span>,
                        <span style="color:rgb(78,201,176)">float</span>, <span
                                style="color:rgb(78,201,176)">Tuple</span>[<span
                                style="color:rgb(78,201,176)">Union</span>[<span
                                style="color:rgb(78,201,176)">float</span>, <span
                                style="color:rgb(78,201,176)">int</span>]]]
                </div>
                <div><span style="color:rgb(201,209,217)">ActionT</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(201,209,217)">Any</span>
                </div><br>
                <div><span style="color:rgb(139,148,158)"># An abstract class representing a Markov Decision Process
                                (MDP).</span></div>
                <div><span style="color:rgb(255,123,114)">class</span> <span style="color:rgb(78,201,176)">MDP</span>:
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Return the start state.</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(255,123,114)">def</span> <span
                                style="color:rgb(210,168,255)">startState</span>(<span
                                style="color:rgb(201,209,217)">self</span>): <span
                                style="color:rgb(197,134,192)">raise</span> <span
                                style="color:rgb(78,201,176)">NotImplementedError</span>(<span
                                style="color:rgb(165,214,255)">"Override me"</span>)</div>
                <div>&nbsp; &nbsp; </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Property holding the set of possible actions
                                at each state.</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(210,168,255)">@</span><span
                                style="color:rgb(78,201,176)">property</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(255,123,114)">def</span> <span
                                style="color:rgb(201,209,217)">actions</span>(<span
                                style="color:rgb(201,209,217)">self</span>) -&gt; <span
                                style="color:rgb(201,209,217)">List</span>[<span
                                style="color:rgb(201,209,217)">ActionT</span>]: <span
                                style="color:rgb(197,134,192)">raise</span> <span
                                style="color:rgb(78,201,176)">NotImplementedError</span>(<span
                                style="color:rgb(165,214,255)">"Override me"</span>)</div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Property holding the discount factor</span>
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(210,168,255)">@</span><span
                                style="color:rgb(78,201,176)">property</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(255,123,114)">def</span> <span
                                style="color:rgb(201,209,217)">discount</span>(<span
                                style="color:rgb(201,209,217)">self</span>): <span
                                style="color:rgb(197,134,192)">raise</span> <span
                                style="color:rgb(78,201,176)">NotImplementedError</span>(<span
                                style="color:rgb(165,214,255)">"Override me"</span>)</div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># property holding the maximum number of steps
                                for running the simulation.</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(210,168,255)">@</span><span
                                style="color:rgb(78,201,176)">property</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(255,123,114)">def</span> <span
                                style="color:rgb(201,209,217)">timeLimit</span>(<span
                                style="color:rgb(201,209,217)">self</span>) -&gt; <span
                                style="color:rgb(78,201,176)">int</span>: <span
                                style="color:rgb(197,134,192)">raise</span> <span
                                style="color:rgb(78,201,176)">NotImplementedError</span>(<span
                                style="color:rgb(165,214,255)">"Override me"</span>)</div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Transitions the MDP</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(255,123,114)">def</span> <span
                                style="color:rgb(210,168,255)">transition</span>(<span
                                style="color:rgb(201,209,217)">self</span>, <span
                                style="color:rgb(255,166,87)">action</span>): <span
                                style="color:rgb(197,134,192)">raise</span> <span
                                style="color:rgb(78,201,176)">NotImplementedError</span>(<span
                                style="color:rgb(165,214,255)">"Override me"</span>)</div>
        </div>
</div>
        `

        const html2 = `
        <div dir="ltr">
        <div style="color:rgb(204,204,204);font-family:monospace;font-size:14px;line-height:18px;">
                <div><span style="color:rgb(255,123,114)">class</span> <span
                                style="color:rgb(78,201,176)">NumberLineMDP</span>(<span
                                style="color:rgb(78,201,176)">MDP</span>):</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(255,123,114)">def</span> <span
                                style="color:rgb(220,220,170)">__init__</span>(<span
                                style="color:rgb(201,209,217)">self</span>, <span
                                style="color:rgb(255,166,87)">leftReward</span>: <span
                                style="color:rgb(78,201,176)">float</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(181,206,168)">10</span>, <span
                                style="color:rgb(255,166,87)">rightReward</span>: <span
                                style="color:rgb(78,201,176)">float</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(181,206,168)">50</span>, <span
                                style="color:rgb(255,166,87)">penalty</span>: <span
                                style="color:rgb(78,201,176)">float</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(212,212,212)">-</span><span style="color:rgb(181,206,168)">5</span>,
                        <span style="color:rgb(255,166,87)">n</span>: <span style="color:rgb(78,201,176)">int</span>
                        <span style="color:rgb(212,212,212)">=</span> <span style="color:rgb(181,206,168)">2</span>):
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">leftReward</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(255,166,87)">leftReward</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">rightReward</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(255,166,87)">rightReward</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">penalty</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(255,166,87)">penalty</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">n</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(255,166,87)">n</span>
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">terminalStates</span> <span
                                style="color:rgb(212,212,212)">=</span> {<span
                                style="color:rgb(212,212,212)">-</span><span style="color:rgb(255,166,87)">n</span>,
                        <span style="color:rgb(255,166,87)">n</span>}
                </div>
                <div>&nbsp; &nbsp; </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(255,123,114)">def</span> <span
                                style="color:rgb(210,168,255)">startState</span>(<span
                                style="color:rgb(201,209,217)">self</span>): </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">state</span> <span
                                style="color:rgb(212,212,212)">=</span> <span style="color:rgb(181,206,168)">0</span>
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">state</span></div>
                <div>&nbsp; &nbsp; </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(210,168,255)">@</span><span
                                style="color:rgb(78,201,176)">property</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(255,123,114)">def</span> <span
                                style="color:rgb(201,209,217)">actions</span>(<span
                                style="color:rgb(201,209,217)">self</span>): </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> [<span
                                style="color:rgb(181,206,168)">1</span>, <span style="color:rgb(181,206,168)">2</span>]
                </div>
                <div>&nbsp; &nbsp; </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(255,123,114)">def</span> <span
                                style="color:rgb(210,168,255)">transition</span>(<span
                                style="color:rgb(201,209,217)">self</span>, <span
                                style="color:rgb(255,166,87)">action</span>) -&gt; <span
                                style="color:rgb(78,201,176)">Tuple</span>[<span
                                style="color:rgb(201,209,217)">StateT</span>, <span
                                style="color:rgb(78,201,176)">float</span>, <span
                                style="color:rgb(78,201,176)">bool</span>]:</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">assert</span> <span
                                style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">state</span> <span
                                style="color:rgb(86,156,214)">not</span> <span style="color:rgb(86,156,214)">in</span>
                        <span style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">terminalStates</span>, <span
                                style="color:rgb(165,214,255)">"Attempting to call transition on a terminated
                                MDP."</span>
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">if</span> <span
                                style="color:rgb(255,166,87)">action</span> <span
                                style="color:rgb(212,212,212)">==</span> <span style="color:rgb(181,206,168)">1</span>:
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">forward_prob</span>
                        <span style="color:rgb(212,212,212)">=</span> <span style="color:rgb(181,206,168)">0.2</span>
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">elif</span> <span
                                style="color:rgb(255,166,87)">action</span> <span
                                style="color:rgb(212,212,212)">==</span> <span style="color:rgb(181,206,168)">2</span>:
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">forward_prob</span>
                        <span style="color:rgb(212,212,212)">=</span> <span style="color:rgb(181,206,168)">0.3</span>
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">else</span>:</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">raise</span> <span
                                style="color:rgb(78,201,176)">ValueError</span>(<span
                                style="color:rgb(165,214,255)">"Invalid Action Provided."</span>)</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">if</span> <span
                                style="color:rgb(78,201,176)">random</span>.<span
                                style="color:rgb(201,209,217)">random</span>() <span
                                style="color:rgb(212,212,212)">&lt;</span> <span
                                style="color:rgb(201,209,217)">forward_prob</span>:</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Move the agent
                                forward</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">state</span> <span
                                style="color:rgb(212,212,212)">+=</span> <span style="color:rgb(181,206,168)">1</span>
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">else</span>:</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Move the agent
                                backward</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">state</span> <span
                                style="color:rgb(212,212,212)">-=</span> <span style="color:rgb(181,206,168)">1</span>
                </div><br>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">if</span> <span
                                style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">state</span> <span
                                style="color:rgb(212,212,212)">==</span> <span
                                style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">n</span>:</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">reward</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">rightReward</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">elif</span> <span
                                style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">state</span> <span
                                style="color:rgb(212,212,212)">==</span> <span
                                style="color:rgb(212,212,212)">-</span><span
                                style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">n</span>:</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">reward</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">leftReward</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">else</span>:</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">reward</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">penalty</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Check for termination</span>
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">terminal</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">state</span> <span
                                style="color:rgb(86,156,214)">in</span> <span
                                style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">terminalStates</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> (<span
                                style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">state</span>, <span
                                style="color:rgb(201,209,217)">reward</span>, <span
                                style="color:rgb(201,209,217)">terminal</span>)</div>
                <div>&nbsp; &nbsp; </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(210,168,255)">@</span><span
                                style="color:rgb(78,201,176)">property</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(255,123,114)">def</span> <span
                                style="color:rgb(201,209,217)">discount</span>(<span
                                style="color:rgb(201,209,217)">self</span>): </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(181,206,168)">1.0</span></div>
        </div>
</div>
        `

        const html3 = `
        <div dir="ltr">
        <div style="color:rgb(204,204,204);font-family:monospace;font-size:14px;line-height:18px;">
                <div><span style="color:rgb(165,214,255)">'''</span></div>
                <div><span style="color:rgb(165,214,255)">Given transition probabilities and rewards, computes and
                                returns V and</span></div>
                <div><span style="color:rgb(165,214,255)">the optimal policy pi for each state.</span></div>
                <div><span style="color:rgb(165,214,255)">- succAndRewardProb: Dictionary mapping tuples of (state,
                                action) to a list of (nextState, prob, reward) Tuples.</span></div>
                <div><span style="color:rgb(165,214,255)">- Returns: Dictionary mapping each state to an action.</span>
                </div>
                <div><span style="color:rgb(165,214,255)">'''</span></div>
                <div><span style="color:rgb(255,123,114)">def</span> <span
                                style="color:rgb(210,168,255)">valueIteration</span>(<span
                                style="color:rgb(255,166,87)">succAndRewardPr<wbr>ob</span>: <span
                                style="color:rgb(201,209,217)">Dict</span>[<span
                                style="color:rgb(78,201,176)">Tuple</span>[<span
                                style="color:rgb(201,209,217)">StateT</span>, <span
                                style="color:rgb(201,209,217)">ActionT</span>], <span
                                style="color:rgb(201,209,217)">List</span>[<span
                                style="color:rgb(78,201,176)">Tuple</span>[<span
                                style="color:rgb(201,209,217)">StateT</span>, <span
                                style="color:rgb(78,201,176)">float</span>, <span
                                style="color:rgb(78,201,176)">float</span>]]], <span
                                style="color:rgb(255,166,87)">discount</span>: <span
                                style="color:rgb(78,201,176)">float</span>, <span
                                style="color:rgb(255,166,87)">epsilon</span>: <span
                                style="color:rgb(78,201,176)">float</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(181,206,168)">0.001</span>):
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Define a mapping from states to Set[Actions]
                                so we can determine all the actions that can be taken from s.</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">stateActions</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">defaultdict</span>(<span
                                style="color:rgb(78,201,176)">set</span>)</div>
                <div>&nbsp; &nbsp; </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">for</span> <span
                                style="color:rgb(201,209,217)">state</span>, <span
                                style="color:rgb(201,209,217)">action</span> <span
                                style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(255,166,87)">succAndRewardProb</span>.<span
                                style="color:rgb(210,168,255)">keys</span>():</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">stateActions</span>[<span
                                style="color:rgb(201,209,217)">state</span>].<span
                                style="color:rgb(210,168,255)">add</span>(<span
                                style="color:rgb(201,209,217)">action</span><wbr>)</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(210,168,255)">print</span>()</div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(255,123,114)">def</span> <span
                                style="color:rgb(210,168,255)">computeQ</span>(<span
                                style="color:rgb(255,166,87)">V</span>: <span
                                style="color:rgb(201,209,217)">Dict</span>[<span
                                style="color:rgb(201,209,217)">StateT</span>, <span
                                style="color:rgb(78,201,176)">float</span>], <span
                                style="color:rgb(255,166,87)">state</span>: <span
                                style="color:rgb(201,209,217)">StateT</span>, <span
                                style="color:rgb(255,166,87)">action</span>: <span
                                style="color:rgb(201,209,217)">ActionT</span>) -&gt; <span
                                style="color:rgb(78,201,176)">float</span>:</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Return Q(state, action) based on
                                V(state)</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Q(s,a) = sum_{s'} T(s,a,s') * [
                                R(s,a,s') + discount * V(s') ]</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">actionText</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(165,214,255)">"(forward)"</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">if</span> (<span
                                style="color:rgb(255,166,87)">action</span> <span
                                style="color:rgb(212,212,212)">==</span><span style="color:rgb(181,206,168)">2</span>):
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">actionText</span>
                        <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(165,214,255)">"(backward)"</span>
                </div><br>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(210,168,255)">print</span>(<span
                                style="color:rgb(255,123,114)">f</span><span
                                style="color:rgb(165,214,255)">"</span><span
                                style="color:rgb(215,186,125)">\t\t</span><span style="color:rgb(165,214,255)">Calculate
                                new Q values. state: </span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(255,166,87)">state</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)">, action:
                        </span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(255,166,87)">action</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)">
                        </span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">actionText</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)">,
                        </span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(255,166,87)">succAndRewardProb</span>[(<span
                                style="color:rgb(255,166,87)">state</span>, <span
                                style="color:rgb(255,166,87)">action</span>)]<span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)">"</span>)
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">new_v_forward</span> <span
                                style="color:rgb(212,212,212)">=</span> <span style="color:rgb(181,206,168)">0</span>
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">new_v_backward</span> <span
                                style="color:rgb(212,212,212)">=</span> <span style="color:rgb(181,206,168)">0</span>
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">index</span> <span
                                style="color:rgb(212,212,212)">=</span> <span style="color:rgb(181,206,168)">1</span>
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">for</span> <span
                                style="color:rgb(201,209,217)">nextState</span>, <span
                                style="color:rgb(201,209,217)">prob</span>, <span
                                style="color:rgb(201,209,217)">reward</span> <span
                                style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(255,166,87)">succAndRewardProb</span>[(<span
                                style="color:rgb(255,166,87)">state</span>, <span
                                style="color:rgb(255,166,87)">action</span>)]:</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">if</span> (<span
                                style="color:rgb(201,209,217)">index</span> <span
                                style="color:rgb(212,212,212)">==</span> <span style="color:rgb(181,206,168)">1</span>):
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(201,209,217)">new_v_forward</span> <span
                                style="color:rgb(212,212,212)">=</span> <span style="color:rgb(201,209,217)">prob</span>
                        <span style="color:rgb(212,212,212)">*</span> (<span
                                style="color:rgb(201,209,217)">reward</span> <span
                                style="color:rgb(212,212,212)">+</span> <span
                                style="color:rgb(255,166,87)">discount</span> <span
                                style="color:rgb(212,212,212)">*</span> <span
                                style="color:rgb(255,166,87)">V</span>[<span
                                style="color:rgb(201,209,217)">nextState</span>])
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(210,168,255)">print</span>(<span
                                style="color:rgb(255,123,114)">f</span><span
                                style="color:rgb(165,214,255)">"</span><span
                                style="color:rgb(215,186,125)">\t\t\t</span><span
                                style="color:rgb(165,214,255)">forward: </span><span
                                style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">prob</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)"> *
                                (</span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">reward</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)"> +
                        </span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(255,166,87)">discount</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)"> *
                                V[</span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">nextState</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)">]) =
                        </span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">new_v_forward</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)">"</span>)
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(201,209,217)">index</span> <span
                                style="color:rgb(212,212,212)">+=</span> <span style="color:rgb(181,206,168)">1</span>
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">else</span>:</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(201,209,217)">new_v_backward</span> <span
                                style="color:rgb(212,212,212)">=</span> <span style="color:rgb(201,209,217)">prob</span>
                        <span style="color:rgb(212,212,212)">*</span> (<span
                                style="color:rgb(201,209,217)">reward</span> <span
                                style="color:rgb(212,212,212)">+</span> <span
                                style="color:rgb(255,166,87)">discount</span> <span
                                style="color:rgb(212,212,212)">*</span> <span
                                style="color:rgb(255,166,87)">V</span>[<span
                                style="color:rgb(201,209,217)">nextState</span>])
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(210,168,255)">print</span>(<span
                                style="color:rgb(255,123,114)">f</span><span
                                style="color:rgb(165,214,255)">"</span><span
                                style="color:rgb(215,186,125)">\t\t\t</span><span
                                style="color:rgb(165,214,255)">backward: </span><span
                                style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">prob</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)"> *
                                (</span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">reward</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)"> +
                        </span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(255,166,87)">discount</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)"> *
                                V[</span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">nextState</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)">]) =
                        </span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">new_v_backward</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)">"</span>)
                </div><br>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(210,168,255)">print</span>(<span
                                style="color:rgb(255,123,114)">f</span><span
                                style="color:rgb(165,214,255)">"</span><span
                                style="color:rgb(215,186,125)">\t\t</span><span style="color:rgb(165,214,255)">sum:
                        </span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">new_v_forward</span> <span
                                style="color:rgb(212,212,212)">+</span> <span
                                style="color:rgb(201,209,217)">new_v_backward</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)">"</span>)
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(210,168,255)">sum</span>(</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">prob</span> <span
                                style="color:rgb(212,212,212)">*</span> (<span
                                style="color:rgb(201,209,217)">reward</span> <span
                                style="color:rgb(212,212,212)">+</span> <span
                                style="color:rgb(255,166,87)">discount</span> <span
                                style="color:rgb(212,212,212)">*</span> <span
                                style="color:rgb(255,166,87)">V</span>[<span
                                style="color:rgb(201,209,217)">nextState</span>])</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">for</span> <span
                                style="color:rgb(201,209,217)">nextState</span>, <span
                                style="color:rgb(201,209,217)">prob</span>, <span
                                style="color:rgb(201,209,217)">reward</span> <span
                                style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(255,166,87)">succAndRewardProb</span>[(<span
                                style="color:rgb(255,166,87)">state</span>, <span
                                style="color:rgb(255,166,87)">action</span>)]</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; )</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(255,123,114)">def</span> <span
                                style="color:rgb(210,168,255)">computePolicy</span>(<span
                                style="color:rgb(255,166,87)">V</span>: <span
                                style="color:rgb(201,209,217)">Dict</span>[<span
                                style="color:rgb(201,209,217)">StateT</span>, <span
                                style="color:rgb(78,201,176)">float</span>]) -&gt; <span
                                style="color:rgb(201,209,217)">Dict</span>[<span
                                style="color:rgb(201,209,217)">StateT</span>, <span
                                style="color:rgb(201,209,217)">ActionT</span>]:</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Return the policy given
                                V.</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># pi(s) = argmax_a Q(V, s, a), for
                                every state that has actions.</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">pi</span> <span
                                style="color:rgb(212,212,212)">=</span> {}</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">for</span> <span
                                style="color:rgb(201,209,217)">state</span>, <span
                                style="color:rgb(201,209,217)">actions</span> <span
                                style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(201,209,217)">stateActions</span>.<span
                                style="color:rgb(210,168,255)">items</span>():</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">pi</span>[<span
                                style="color:rgb(201,209,217)">state</span>] <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(210,168,255)">max</span>(<span
                                style="color:rgb(201,209,217)">actions</span>, <span
                                style="color:rgb(255,166,87)">key</span><span
                                style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(255,123,114)">lambda</span> <span
                                style="color:rgb(255,166,87)">a</span>: <span
                                style="color:rgb(210,168,255)">computeQ</span>(<span
                                style="color:rgb(255,166,87)">V</span>, <span
                                style="color:rgb(201,209,217)">state</span>, <span
                                style="color:rgb(255,166,87)">a</span>))</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(201,209,217)">pi</span></div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(210,168,255)">print</span>(<span
                                style="color:rgb(165,214,255)">'Running valueIteration...'</span>)</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(121,192,255)">V</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">defaultdict</span>(<span
                                style="color:rgb(78,201,176)">float</span>) <span style="color:rgb(139,148,158)"># This
                                will return 0 for states not seen (handles terminal states)</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">numIters</span> <span
                                style="color:rgb(212,212,212)">=</span> <span style="color:rgb(181,206,168)">0</span>
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">while</span> <span
                                style="color:rgb(86,156,214)">True</span>:</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(210,168,255)">print</span>()</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(210,168,255)">print</span>(<span
                                style="color:rgb(165,214,255)">"=======================<wbr>==============================<wbr>==============================<wbr>="</span>)
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(210,168,255)">print</span>(<span
                                style="color:rgb(255,123,114)">f</span><span style="color:rgb(165,214,255)">"Main
                                valueIteration loop. numIters: </span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">numIters</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)"> "</span>)
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">newV</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">defaultdict</span>(<span
                                style="color:rgb(78,201,176)">float</span>) <span style="color:rgb(139,148,158)"># This
                                will return 0 for states not seen (handles terminal states)</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># update V values using the
                                computeQ function above.</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># repeat until the V values for
                                all states converge (changes between iterations are less than epsilon).</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Bellman optimality update:
                                V_new(s) = max_a Q(V, s, a)</span></div><br>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">q_max</span> <span
                                style="color:rgb(212,212,212)">=</span> <span style="color:rgb(181,206,168)">0</span>
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">for</span> <span
                                style="color:rgb(201,209,217)">state</span>, <span
                                style="color:rgb(201,209,217)">actions</span> <span
                                style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(201,209,217)">stateActions</span>.<span
                                style="color:rgb(210,168,255)">items</span>():</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(210,168,255)">print</span>()</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(210,168,255)">print</span>(<span
                                style="color:rgb(255,123,114)">f</span><span style="color:rgb(165,214,255)">"state:
                        </span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">state</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)">"</span>)
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">for</span> <span
                                style="color:rgb(201,209,217)">a</span> <span style="color:rgb(197,134,192)">in</span>
                        <span style="color:rgb(201,209,217)">actions</span>:
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(210,168,255)">print</span>(<span
                                style="color:rgb(255,123,114)">f</span><span
                                style="color:rgb(165,214,255)">"</span><span
                                style="color:rgb(215,186,125)">\t</span><span style="color:rgb(165,214,255)">action:
                        </span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">a</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)">"</span>)
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(201,209,217)">q_new</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(210,168,255)">computeQ</span>(<span
                                style="color:rgb(121,192,255)">V</span>, <span
                                style="color:rgb(201,209,217)">state</span>, <span
                                style="color:rgb(201,209,217)">a</span>)</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(210,168,255)">print</span>(<span
                                style="color:rgb(255,123,114)">f</span><span
                                style="color:rgb(165,214,255)">"</span><span
                                style="color:rgb(215,186,125)">\t\t</span><span style="color:rgb(165,214,255)">action
                                (</span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">a</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)">): q:
                        </span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">q_new</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)"> for
                                (</span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">state</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)">,
                        </span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">a</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)">)"</span>)
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(201,209,217)">q_max</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(210,168,255)">max</span>(<span
                                style="color:rgb(201,209,217)">q_new</span>, <span
                                style="color:rgb(201,209,217)">q_max</span>)</div><br>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(210,168,255)">print</span>()</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(210,168,255)">print</span>(<span
                                style="color:rgb(165,214,255)">"</span><span
                                style="color:rgb(215,186,125)">\t</span><span
                                style="color:rgb(165,214,255)">---------------------<wbr>------------------------------<wbr>"</span>)
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(210,168,255)">print</span>(<span
                                style="color:rgb(255,123,114)">f</span><span
                                style="color:rgb(165,214,255)">"</span><span
                                style="color:rgb(215,186,125)">\t</span><span style="color:rgb(165,214,255)">max:
                        </span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">q_max</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)">. This is
                                the new value for V for state: [</span><span
                                style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">state</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)">]."</span>)
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">newV</span>[<span
                                style="color:rgb(201,209,217)">state</span>] <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(201,209,217)">q_max</span></div><br>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(210,168,255)">print</span>()</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(210,168,255)">print</span>(<span
                                style="color:rgb(255,123,114)">f</span><span style="color:rgb(165,214,255)">"V:
                        </span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(121,192,255)">V</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)">"</span>)
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(210,168,255)">print</span>(<span
                                style="color:rgb(255,123,114)">f</span><span style="color:rgb(165,214,255)">"newV:
                        </span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">newV</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)">"</span>)
                </div><br>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Convergence check: stop when max
                                change across all updated states is below epsilon.</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(210,168,255)">print</span>(<span
                                style="color:rgb(165,214,255)">"Checking for convergence. This is when the change in
                                values of V are less than epsilon (</span><span
                                style="color:rgb(255,123,114)">{epsilon}</span><span
                                style="color:rgb(165,214,255)">)"</span>)</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">if</span> <span
                                style="color:rgb(210,168,255)">all</span>(<span
                                style="color:rgb(210,168,255)">abs</span>(<span
                                style="color:rgb(201,209,217)">newV</span>[<span
                                style="color:rgb(201,209,217)">s</span>] <span style="color:rgb(212,212,212)">-</span>
                        <span style="color:rgb(121,192,255)">V</span>[<span style="color:rgb(201,209,217)">s</span>])
                        <span style="color:rgb(212,212,212)">&lt;</span> <span
                                style="color:rgb(255,166,87)">epsilon</span> <span
                                style="color:rgb(197,134,192)">for</span> <span style="color:rgb(201,209,217)">s</span>
                        <span style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(201,209,217)">stateActions</span>):
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(121,192,255)">V</span> <span
                                style="color:rgb(212,212,212)">=</span> <span style="color:rgb(201,209,217)">newV</span>
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">numIters</span>
                        <span style="color:rgb(212,212,212)">+=</span> <span style="color:rgb(181,206,168)">1</span>
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">break</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(121,192,255)">V</span> <span
                                style="color:rgb(212,212,212)">=</span> <span style="color:rgb(201,209,217)">newV</span>
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">numIters</span> <span
                                style="color:rgb(212,212,212)">+=</span> <span style="color:rgb(181,206,168)">1</span>
                </div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">V_opt</span> <span
                                style="color:rgb(212,212,212)">=</span> <span style="color:rgb(121,192,255)">V</span>
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(210,168,255)">print</span>((<span
                                style="color:rgb(165,214,255)">"valueIteration: </span><span
                                style="color:rgb(255,123,114)">%d</span><span style="color:rgb(165,214,255)">
                                iterations"</span> <span style="color:rgb(212,212,212)">%</span> <span
                                style="color:rgb(201,209,217)">numIters</span>))</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(210,168,255)">computePolicy</span>(<span
                                style="color:rgb(201,209,217)">V_opt</span>)</div>
        </div>
</div>
        `

        const html4 = `
        <div dir="ltr">
        <div style="color:rgb(204,204,204);font-family:monospace;font-size:14px;line-height:18px;">
                <div><span style="color:rgb(255,123,114)">def</span> <span
                                style="color:rgb(210,168,255)">test_1</span>():</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">mdp</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">NumberLineMDP</span>(<span
                                style="color:rgb(181,206,168)">10</span>, <span
                                style="color:rgb(181,206,168)">50</span>, <span
                                style="color:rgb(212,212,212)">-</span><span style="color:rgb(181,206,168)">5</span>,
                        <span style="color:rgb(181,206,168)">2</span>)</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">succAndRewardProb</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(210,168,255)">getSuccessRewardProbabilityDat<wbr>a</span>(<span
                                style="color:rgb(201,209,217)">mdp</span>)</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">pi</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(210,168,255)">valueIteration</span>(<span
                                style="color:rgb(201,209,217)">succAndRewardPr<wbr>ob</span>, <span
                                style="color:rgb(201,209,217)">mdp</span>.<span
                                style="color:rgb(201,209,217)">discount</span>)</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(210,168,255)">print</span>(<span
                                style="color:rgb(201,209,217)">pi</span>)</div><br><br>
                <div><span style="color:rgb(255,123,114)">def</span> <span
                                style="color:rgb(210,168,255)">getSuccessRewardProbabilityDat<wbr>a</span>(<span
                                style="color:rgb(255,166,87)">mdp</span>: <span
                                style="color:rgb(78,201,176)">NumberLineMDP</span>):</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">succAndRewardProb</span> <span
                                style="color:rgb(212,212,212)">=</span> {</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; (<span style="color:rgb(212,212,212)">-</span><span
                                style="color:rgb(255,166,87)">mdp</span>.<span style="color:rgb(201,209,217)">n</span>
                        <span style="color:rgb(212,212,212)">+</span> <span style="color:rgb(181,206,168)">1</span>,
                        <span style="color:rgb(181,206,168)">1</span>): [(<span
                                style="color:rgb(212,212,212)">-</span><span
                                style="color:rgb(255,166,87)">mdp</span>.<span style="color:rgb(201,209,217)">n</span>
                        <span style="color:rgb(212,212,212)">+</span> <span style="color:rgb(181,206,168)">2</span>,
                        <span style="color:rgb(181,206,168)">0.2</span>, <span
                                style="color:rgb(255,166,87)">mdp</span>.<span
                                style="color:rgb(201,209,217)">penalty</span>), (<span
                                style="color:rgb(212,212,212)">-</span><span
                                style="color:rgb(255,166,87)">mdp</span>.<span style="color:rgb(201,209,217)">n</span>,
                        <span style="color:rgb(181,206,168)">0.8</span>, <span
                                style="color:rgb(255,166,87)">mdp</span>.<span
                                style="color:rgb(201,209,217)">leftReward</span>)],</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; (<span style="color:rgb(212,212,212)">-</span><span
                                style="color:rgb(255,166,87)">mdp</span>.<span style="color:rgb(201,209,217)">n</span>
                        <span style="color:rgb(212,212,212)">+</span> <span style="color:rgb(181,206,168)">1</span>,
                        <span style="color:rgb(181,206,168)">2</span>): [(<span
                                style="color:rgb(212,212,212)">-</span><span
                                style="color:rgb(255,166,87)">mdp</span>.<span style="color:rgb(201,209,217)">n</span>
                        <span style="color:rgb(212,212,212)">+</span> <span style="color:rgb(181,206,168)">2</span>,
                        <span style="color:rgb(181,206,168)">0.3</span>, <span
                                style="color:rgb(255,166,87)">mdp</span>.<span
                                style="color:rgb(201,209,217)">penalty</span>), (<span
                                style="color:rgb(212,212,212)">-</span><span
                                style="color:rgb(255,166,87)">mdp</span>.<span style="color:rgb(201,209,217)">n</span>,
                        <span style="color:rgb(181,206,168)">0.7</span>, <span
                                style="color:rgb(255,166,87)">mdp</span>.<span
                                style="color:rgb(201,209,217)">leftReward</span>)],</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; (<span style="color:rgb(255,166,87)">mdp</span>.<span
                                style="color:rgb(201,209,217)">n</span> <span style="color:rgb(212,212,212)">-</span>
                        <span style="color:rgb(181,206,168)">1</span>, <span style="color:rgb(181,206,168)">1</span>):
                        [(<span style="color:rgb(255,166,87)">mdp</span>.<span style="color:rgb(201,209,217)">n</span>
                        <span style="color:rgb(212,212,212)">-</span> <span style="color:rgb(181,206,168)">2</span>,
                        <span style="color:rgb(181,206,168)">0.8</span>, <span
                                style="color:rgb(255,166,87)">mdp</span>.<span
                                style="color:rgb(201,209,217)">penalty</span>), (<span
                                style="color:rgb(255,166,87)">mdp</span>.<span style="color:rgb(201,209,217)">n</span>,
                        <span style="color:rgb(181,206,168)">0.2</span>, <span
                                style="color:rgb(255,166,87)">mdp</span>.<span
                                style="color:rgb(201,209,217)">rightReward</span>)],</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; (<span style="color:rgb(255,166,87)">mdp</span>.<span
                                style="color:rgb(201,209,217)">n</span> <span style="color:rgb(212,212,212)">-</span>
                        <span style="color:rgb(181,206,168)">1</span>, <span style="color:rgb(181,206,168)">2</span>):
                        [(<span style="color:rgb(255,166,87)">mdp</span>.<span style="color:rgb(201,209,217)">n</span>
                        <span style="color:rgb(212,212,212)">-</span> <span style="color:rgb(181,206,168)">2</span>,
                        <span style="color:rgb(181,206,168)">0.7</span>, <span
                                style="color:rgb(255,166,87)">mdp</span>.<span
                                style="color:rgb(201,209,217)">penalty</span>), (<span
                                style="color:rgb(255,166,87)">mdp</span>.<span style="color:rgb(201,209,217)">n</span>,
                        <span style="color:rgb(181,206,168)">0.3</span>, <span
                                style="color:rgb(255,166,87)">mdp</span>.<span
                                style="color:rgb(201,209,217)">rightReward</span>)]</div>
                <div>&nbsp; &nbsp; }</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">for</span> <span
                                style="color:rgb(201,209,217)">s</span> <span style="color:rgb(197,134,192)">in</span>
                        <span style="color:rgb(78,201,176)">range</span>(<span
                                style="color:rgb(212,212,212)">-</span><span
                                style="color:rgb(255,166,87)">mdp</span>.<span style="color:rgb(201,209,217)">n</span>
                        <span style="color:rgb(212,212,212)">+</span> <span style="color:rgb(181,206,168)">2</span>,
                        <span style="color:rgb(255,166,87)">mdp</span>.<span style="color:rgb(201,209,217)">n</span>
                        <span style="color:rgb(212,212,212)">-</span> <span style="color:rgb(181,206,168)">1</span>):
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">succAndRewardProb</span>[(<span
                                style="color:rgb(201,209,217)">s</span>, <span style="color:rgb(181,206,168)">1</span>)]
                        <span style="color:rgb(212,212,212)">=</span> [(<span
                                style="color:rgb(201,209,217)">s</span><span
                                style="color:rgb(212,212,212)">+</span><span style="color:rgb(181,206,168)">1</span>,
                        <span style="color:rgb(181,206,168)">0.2</span>, <span
                                style="color:rgb(255,166,87)">mdp</span>.<span
                                style="color:rgb(201,209,217)">penalty</span>), (<span
                                style="color:rgb(201,209,217)">s</span> <span style="color:rgb(212,212,212)">-</span>
                        <span style="color:rgb(181,206,168)">1</span>, <span style="color:rgb(181,206,168)">0.8</span>,
                        <span style="color:rgb(255,166,87)">mdp</span>.<span
                                style="color:rgb(201,209,217)">penalty</span>)]</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">succAndRewardProb</span>[(<span
                                style="color:rgb(201,209,217)">s</span>, <span style="color:rgb(181,206,168)">2</span>)]
                        <span style="color:rgb(212,212,212)">=</span> [(<span
                                style="color:rgb(201,209,217)">s</span><span
                                style="color:rgb(212,212,212)">+</span><span style="color:rgb(181,206,168)">1</span>,
                        <span style="color:rgb(181,206,168)">0.3</span>, <span
                                style="color:rgb(255,166,87)">mdp</span>.<span
                                style="color:rgb(201,209,217)">penalty</span>), (<span
                                style="color:rgb(201,209,217)">s</span> <span style="color:rgb(212,212,212)">-</span>
                        <span style="color:rgb(181,206,168)">1</span>, <span style="color:rgb(181,206,168)">0.7</span>,
                        <span style="color:rgb(255,166,87)">mdp</span>.<span
                                style="color:rgb(201,209,217)">penalty</span>)]</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(210,168,255)">print</span>()</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(210,168,255)">print</span>(<span
                                style="color:rgb(165,214,255)">"(state, action) = [forward: (nextState, prob, reward),
                                backward: (nextState, prob, reward)]"</span>)</div><span class="im">
                        <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">for</span> <span
                                        style="color:rgb(201,209,217)">state</span>, <span
                                        style="color:rgb(201,209,217)">action</span> <span
                                        style="color:rgb(197,134,192)">in</span> <span
                                        style="color:rgb(201,209,217)">succAndRewardProb</span>.<span
                                        style="color:rgb(210,168,255)">keys</span>():</div>
                </span>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(210,168,255)">print</span>(<span
                                style="color:rgb(255,123,114)">f</span><span
                                style="color:rgb(165,214,255)">"</span><span
                                style="color:rgb(215,186,125)">\t</span><span
                                style="color:rgb(165,214,255)">(</span><span
                                style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">state</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)">,
                        </span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">action</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)">) =
                        </span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">succAndRewardProb</span>[(<span
                                style="color:rgb(201,209,217)">state</span>, <span
                                style="color:rgb(201,209,217)">action</span>)]<span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)">"</span>)
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(201,209,217)">succAndRewardProb</span></div>
        </div>
</div>
        `

        const html5 = `
<pre>

(state, action) = [forward: (nextState, prob, reward), backward: (nextState, prob, reward)]
  (-1, 1) = [(0, 0.2, -5), (-2, 0.8, 10)]
  (-1, 2) = [(0, 0.3, -5), (-2, 0.7, 10)]
  (1, 1) = [(0, 0.8, -5), (2, 0.2, 50)]
  (1, 2) = [(0, 0.7, -5), (2, 0.3, 50)]
  (0, 1) = [(1, 0.2, -5), (-1, 0.8, -5)]
  (0, 2) = [(1, 0.3, -5), (-1, 0.7, -5)]

Running valueIteration...

====================================================================================
Main valueIteration loop. numIters: 0 

state: -1
  action: 1
    Calculate new Q values. state: -1, action: 1 (forward), [(0, 0.2, -5), (-2, 0.8, 10)]
      forward: 0.2 * (-5 + 1.0 * V[0]) = -1.0
      backward: 0.8 * (10 + 1.0 * V[-2]) = 8.0
    sum: 7.0
    action (1): q: 7.0 for (-1, 1)
  action: 2
    Calculate new Q values. state: -1, action: 2 (backward), [(0, 0.3, -5), (-2, 0.7, 10)]
      forward: 0.3 * (-5 + 1.0 * V[0]) = -1.5
      backward: 0.7 * (10 + 1.0 * V[-2]) = 7.0
    sum: 5.5
    action (2): q: 5.5 for (-1, 2)

  ---------------------------------------------------
  max: 7.0. This is the new value for V for state: [-1].

state: 1
  action: 1
    Calculate new Q values. state: 1, action: 1 (forward), [(0, 0.8, -5), (2, 0.2, 50)]
      forward: 0.8 * (-5 + 1.0 * V[0]) = -4.0
      backward: 0.2 * (50 + 1.0 * V[2]) = 10.0
    sum: 6.0
    action (1): q: 6.0 for (1, 1)
  action: 2
    Calculate new Q values. state: 1, action: 2 (backward), [(0, 0.7, -5), (2, 0.3, 50)]
      forward: 0.7 * (-5 + 1.0 * V[0]) = -3.5
      backward: 0.3 * (50 + 1.0 * V[2]) = 15.0
    sum: 11.5
    action (2): q: 11.5 for (1, 2)

  ---------------------------------------------------
  max: 11.5. This is the new value for V for state: [1].

state: 0
  action: 1
    Calculate new Q values. state: 0, action: 1 (forward), [(1, 0.2, -5), (-1, 0.8, -5)]
      forward: 0.2 * (-5 + 1.0 * V[1]) = -1.0
      backward: 0.8 * (-5 + 1.0 * V[-1]) = -4.0
    sum: -5.0
    action (1): q: -5.0 for (0, 1)
  action: 2
    Calculate new Q values. state: 0, action: 2 (backward), [(1, 0.3, -5), (-1, 0.7, -5)]
      forward: 0.3 * (-5 + 1.0 * V[1]) = -1.5
      backward: 0.7 * (-5 + 1.0 * V[-1]) = -3.5
    sum: -5.0
    action (2): q: -5.0 for (0, 2)

  ---------------------------------------------------
  max: 11.5. This is the new value for V for state: [0].

V: defaultdict(<class 'float'>, {0: 0.0, -2: 0.0, 2: 0.0, 1: 0.0, -1: 0.0})
newV: defaultdict(<class 'float'>, {-1: 7.0, 1: 11.5, 0: 11.5})
Checking for convergence. This is when the change in values of V are less than epsilon ({epsilon})

====================================================================================
Main valueIteration loop. numIters: 1 

state: -1
  action: 1
    Calculate new Q values. state: -1, action: 1 (forward), [(0, 0.2, -5), (-2, 0.8, 10)]
      forward: 0.2 * (-5 + 1.0 * V[0]) = 1.3
      backward: 0.8 * (10 + 1.0 * V[-2]) = 8.0
    sum: 9.3
    action (1): q: 9.3 for (-1, 1)
  action: 2
    Calculate new Q values. state: -1, action: 2 (backward), [(0, 0.3, -5), (-2, 0.7, 10)]
      forward: 0.3 * (-5 + 1.0 * V[0]) = 1.95
      backward: 0.7 * (10 + 1.0 * V[-2]) = 7.0
    sum: 8.95
    action (2): q: 8.95 for (-1, 2)

  ---------------------------------------------------
  max: 9.3. This is the new value for V for state: [-1].

state: 1
  action: 1
    Calculate new Q values. state: 1, action: 1 (forward), [(0, 0.8, -5), (2, 0.2, 50)]
      forward: 0.8 * (-5 + 1.0 * V[0]) = 5.2
      backward: 0.2 * (50 + 1.0 * V[2]) = 10.0
    sum: 15.2
    action (1): q: 15.2 for (1, 1)
  action: 2
    Calculate new Q values. state: 1, action: 2 (backward), [(0, 0.7, -5), (2, 0.3, 50)]
      forward: 0.7 * (-5 + 1.0 * V[0]) = 4.55
      backward: 0.3 * (50 + 1.0 * V[2]) = 15.0
    sum: 19.55
    action (2): q: 19.55 for (1, 2)

  ---------------------------------------------------
  max: 19.55. This is the new value for V for state: [1].

state: 0
  action: 1
    Calculate new Q values. state: 0, action: 1 (forward), [(1, 0.2, -5), (-1, 0.8, -5)]
      forward: 0.2 * (-5 + 1.0 * V[1]) = 1.3
      backward: 0.8 * (-5 + 1.0 * V[-1]) = 1.6
    sum: 2.9000000000000004
    action (1): q: 2.9000000000000004 for (0, 1)
  action: 2
    Calculate new Q values. state: 0, action: 2 (backward), [(1, 0.3, -5), (-1, 0.7, -5)]
      forward: 0.3 * (-5 + 1.0 * V[1]) = 1.95
      backward: 0.7 * (-5 + 1.0 * V[-1]) = 1.4
    sum: 3.3499999999999996
    action (2): q: 3.3499999999999996 for (0, 2)

  ---------------------------------------------------
  max: 19.55. This is the new value for V for state: [0].

V: defaultdict(<class 'float'>, {-1: 7.0, 1: 11.5, 0: 11.5, -2: 0.0, 2: 0.0})
newV: defaultdict(<class 'float'>, {-1: 9.3, 1: 19.55, 0: 19.55})
Checking for convergence. This is when the change in values of V are less than epsilon ({epsilon})

====================================================================================
...

</pre>
        `

        const html6 = `
<pre>
Given inputs: an MDP with these properties:
 - number of states
 - the reward at each state
 - a set of actions you can do in each state, with their probabilities
 - a discount factor (penalizes rewards that require many steps)
 - a value for epsilon: stop when all states converge (changes between iterations are less than epsilon). 

Goal:
 - find the optimal policy (which action to take at each step) which will maximize the return value

Algorithm:
 - initialize values (note: q value for each state, V(s), is initialized to zero)
 - main loop: for each state:
    - for each action at this state:
        - compute the new Q value (the new return value): q_new = prob(s') * [R(s') + gamma * V(s') ]
          eg. if at state 3, compute the return for the forward action (to go to state 4):
              - forward action has a succsss_prob and a fail_prob (0.3 and 0.7 respectfully)
              - q_new_action_1 = return_forward * prob_forward + return_backward * prob_backward
                  - where return = gamma * current q value at the next state (forward or backward)
        - calculate q_new_action_n for each action at this state
        - keep the highest q_new out of all the q_new_action_n (the action with the highest q_new 
          is the best policy at this state for this iteration)
        - this is now the new Q value for this state

    - repeat for each state

  - once q_new is calculated for each state:
    - compare the change in value from q to q_new for each state
    - if the change is &lt; epsilon for all q values, we can stop. Or else repeat main loop.
    - if we can stop, the optimal policy for each state is determined by which action was used
      to get the max q_new from the last iteration

</pre>
        `


        return (
                <>
                        <MathJaxContext>
                                <div className='mt-[0px] ml-[40px] mr-[20px] mb-[12px]'>

                                        <div className='jade-h1'>
                                                XCS221 - AI Principles & Techniques
                                        </div>

                                        <div className='jade-h2 mt-[5px] mb-[20px]'>
                                                Assignment 4
                                        </div>


                                        <Tabs>
                                                <Tab2 title="MDP" isChecked={true}>
                                                        <TileRowCell0>

                                                                <div className="jade-h11 mt-[15px]">
                                                                        Markov Decision Process
                                                                </div>

                                                                <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                        <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                <div dangerouslySetInnerHTML={createMarkup(html1)} />
                                                                        </div>
                                                                </div>

                                                                <div className="jade-h11 mt-[15px]">
                                                                        Number Line MDP
                                                                </div>

                                                                <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                        <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                <div dangerouslySetInnerHTML={createMarkup(html2)} />
                                                                        </div>
                                                                </div>


                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="Value Iteration" isChecked={false}>
                                                        <TileRowCell0>

                                                                <div className="jade-h11 mt-[15px]">
                                                                        Value Iteration Algorithm
                                                                </div>

                                                                <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                        <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                <div dangerouslySetInnerHTML={createMarkup(html6)} />
                                                                        </div>
                                                                </div>

                                                                <p>
                                                                        <img src="/images/A4_001.png" />
                                                                </p>
                                                                <p>
                                                                        <img src="/images/A4_002.png" />
                                                                </p>
                                                                <p>
                                                                        <img src="/images/A4_003.png" />
                                                                </p>


                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="Value Iteration Example" isChecked={false}>
                                                        <TileRowCell0>

                                                                <div className="jade-h11 mt-[15px]">
                                                                        Value Iteration Example
                                                                </div>

                                                                <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                        <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                <div dangerouslySetInnerHTML={createMarkup(html3)} />
                                                                        </div>
                                                                </div>

                                                                <div className="jade-h11 mt-[15px]">
                                                                        Run the example
                                                                </div>

                                                                <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                        <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                <div dangerouslySetInnerHTML={createMarkup(html4)} />
                                                                        </div>
                                                                </div>

                                                                <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                        <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                <div dangerouslySetInnerHTML={createMarkup(html5)} />
                                                                        </div>
                                                                </div>

                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="Assignment 4 PDF" isChecked={false}>
                                                        <TileRowCell0>

                                                                <div className='lab-links'>
                                                                        <ul>
                                                                                <li><a href="/A4_Solutions.pdf" target="_blank">Assignment 4</a></li>
                                                                        </ul>
                                                                </div>

                                                        </TileRowCell0>
                                                </Tab2>


                                        </Tabs>


                                </div>
                        </MathJaxContext>
                </>
        );
}
