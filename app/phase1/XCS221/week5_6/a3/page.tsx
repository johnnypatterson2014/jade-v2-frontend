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
        <p>Consider an infinite city consisting of locations <span
class="math inline">(<em>x</em>, <em>y</em>)</span> where <span
class="math inline"><em>x</em>, <em>y</em></span> are integers. From
each location <span class="math inline">(<em>x</em>, <em>y</em>)</span>,
one can go east, west, north, or south. You start at <span
class="math inline">(0, 0)</span> and want to go to <span
class="math inline">(<em>m</em>, <em>n</em>)</span>, where <span
class="math inline"><em>m</em>, <em>n</em> ≥ 0</span>. We can define the
following search problem to capture this:</p>
<ul>
<li><p><span
class="math inline"><em>s</em><sub>start</sub> = (0, 0)</span></p></li>
<li><p><span
class="math inline">Actions(<em>s</em>) = {(+1, 0), (-1, 0), (0, +1), (0, -1)}</span></p></li>
<li><p><span
class="math inline">Succ(<em>s</em>, <em>a</em>) = <em>s</em> + <em>a</em></span></p></li>
<li><p><span
class="math inline">Cost((<em>x</em>, <em>y</em>), <em>a</em>) = 1 + max (<em>x</em>, 0)</span>
(it is more expensive as <span class="math inline"><em>x</em></span>
increases)</p></li>
<li><p><span
class="math inline">IsEnd(<em>s</em>) = <strong>1</strong>[<em>s</em> = (<em>m</em>, <em>n</em>)]</span></p></li>
</ul>
        `

        const html2 = `
        <div dir="ltr">
        <div style="color:rgb(204,204,204);font-family:monospace;font-size:14px;line-height:18px;">
                <div><span style="color:rgb(255,123,114)">class</span> <span
                                style="color:rgb(78,201,176)">UniformCostSearch</span>(<span
                                style="color:rgb(78,201,176)">SearchAlgori<wbr>thm</span>):</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(255,123,114)">def</span> <span
                                style="color:rgb(220,220,170)">__init__</span>(<span
                                style="color:rgb(201,209,217)">self</span>, <span
                                style="color:rgb(255,166,87)">verbose</span>: <span
                                style="color:rgb(78,201,176)">int</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(181,206,168)">0</span>):</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(78,201,176)">super</span>().<span
                                style="color:rgb(220,220,170)">__init__</span>()</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">verbose</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(255,166,87)">verbose</span></div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(255,123,114)">def</span> <span
                                style="color:rgb(210,168,255)">solve</span>(<span
                                style="color:rgb(201,209,217)">self</span>, <span
                                style="color:rgb(255,166,87)">problem</span>: <span
                                style="color:rgb(78,201,176)">SearchProblem</span>) -&gt; <span
                                style="color:rgb(86,156,214)">None</span>:</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(165,214,255)">"""</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; Run Uniform Cost Search on the
                                specified 'problem' instance.</span></div><br>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; Sets the following instance
                                variables (see 'SearchAlgorithm' docstring).</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - self.actions:
                                List[str]</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - self.pathCost:
                                float</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -
                                self.numStatesExplored: int</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - self.pastCosts:
                                Dict[str, float]</span></div><br>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; *Hint*: Some of these might be
                                really helpful for Problem 3!</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; """</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">actions</span>: <span
                                style="color:rgb(201,209,217)">List</span>[<span
                                style="color:rgb(78,201,176)">str</span>] <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(86,156,214)">None</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">pathCost</span>: <span
                                style="color:rgb(78,201,176)">float</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(86,156,214)">None</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">numStatesExplored</span>: <span
                                style="color:rgb(78,201,176)">int</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(181,206,168)">0</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">pastCosts</span>: <span
                                style="color:rgb(201,209,217)">Dict</span>[<span
                                style="color:rgb(78,201,176)">str</span>, <span
                                style="color:rgb(78,201,176)">float</span>] <span
                                style="color:rgb(212,212,212)">=</span> {}</div><br>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Initialize data
                                structures</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">frontier</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">PriorityQueue</span>() &nbsp;<span
                                style="color:rgb(139,148,158)"># Explored states are maintained by the frontier.</span>
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">backpointers</span> <span
                                style="color:rgb(212,212,212)">=</span> {} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(139,148,158)"># Map state -&gt; previous state.</span></div><br>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Add the start state</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">startState</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(255,166,87)">problem</span>.<span
                                style="color:rgb(210,168,255)">startState</span>()</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">frontier</span>.<span
                                style="color:rgb(210,168,255)">update</span>(<span
                                style="color:rgb(201,209,217)">startState</span>, <span
                                style="color:rgb(181,206,168)">0.0</span>)</div><br>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(210,168,255)">print</span>(<span
                                style="color:rgb(255,123,114)">f</span><span
                                style="color:rgb(165,214,255)">"UniformCostSearch.<wbr>solve() started. startState:
                        </span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">startState</span>.<span
                                style="color:rgb(201,209,217)">location</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)">"</span>)
                </div><br>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">while</span> <span
                                style="color:rgb(86,156,214)">True</span>:</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(210,168,255)">print</span>()</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(210,168,255)">print</span>(<span
                                style="color:rgb(165,214,255)">"-----------------------<wbr>-------------------- main loop"</span>)
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># print(f"Starting
                                main loop. ")</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Remove the state
                                from the queue with the lowest pastCost (priority).</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(201,209,217)">frontier</span>.<span
                                style="color:rgb(210,168,255)">printPriorities</span>()</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(210,168,255)">print</span>()</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(210,168,255)">print</span>(<span
                                style="color:rgb(165,214,255)">"backpointers: "</span>)</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">for</span> <span
                                style="color:rgb(201,209,217)">s</span> <span style="color:rgb(197,134,192)">in</span>
                        <span style="color:rgb(201,209,217)">backpointers</span>:</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(201,209,217)">action</span>, <span
                                style="color:rgb(201,209,217)">prevState</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(201,209,217)">backpointers</span>[<span
                                style="color:rgb(201,209,217)">s</span>]</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(210,168,255)">print</span>(<span
                                style="color:rgb(255,123,114)">f</span><span
                                style="color:rgb(165,214,255)">"</span><span
                                style="color:rgb(215,186,125)">\t</span><span
                                style="color:rgb(165,214,255)">(</span><span
                                style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">s</span>.location<span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)">|
                                action:</span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">action</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)">
                                prevState:</span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">prevState</span>.location<span
                                style="color:rgb(255,123,114)">}</span><span
                                style="color:rgb(165,214,255)"><wbr>)"</span>)</div><br>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">state</span>, <span
                                style="color:rgb(201,209,217)">pastCost</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(201,209,217)">frontier</span>.<span
                                style="color:rgb(210,168,255)">removeMin</span>()</div><br>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">if</span> <span
                                style="color:rgb(201,209,217)">state</span> <span
                                style="color:rgb(86,156,214)">is</span> <span style="color:rgb(86,156,214)">None</span>
                        <span style="color:rgb(86,156,214)">and</span> <span
                                style="color:rgb(201,209,217)">pastCost</span> <span
                                style="color:rgb(86,156,214)">is</span> <span style="color:rgb(86,156,214)">None</span>:
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(197,134,192)">if</span> <span
                                style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">verbose</span> <span
                                style="color:rgb(212,212,212)">&gt;=</span> <span
                                style="color:rgb(181,206,168)">1</span>:</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(210,168,255)">print</span>(<span
                                style="color:rgb(165,214,255)">"Searched the entire search space!"</span>)</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(197,134,192)">return</span></div><br>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Update tracking
                                variables</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># print(f"Update
                                tracking variables. ")</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">pastCosts</span>[<span
                                style="color:rgb(201,209,217)">state</span>.location] <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(201,209,217)">pastCost</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">numStatesExplored</span> <span
                                style="color:rgb(212,212,212)">+=</span> <span style="color:rgb(181,206,168)">1</span>
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(210,168,255)">print</span>(<span
                                style="color:rgb(255,123,114)">f</span><span style="color:rgb(165,214,255)">"Exploring
                        </span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">state</span>.location<span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)"> with
                                pastCost </span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">pastCost</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)">.
                                numStatesExplored: </span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">numStatesExplored</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)">"</span>)
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">if</span> <span
                                style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">verbose</span> <span
                                style="color:rgb(212,212,212)">&gt;=</span> <span
                                style="color:rgb(181,206,168)">2</span>:</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(210,168,255)">print</span>(<span
                                style="color:rgb(255,123,114)">f</span><span style="color:rgb(165,214,255)">"Exploring
                        </span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">state</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)"> with
                                pastCost </span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">pastCost</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)">"</span>)
                </div><br>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Check if we've
                                reached an end state; if so, extract solution.</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">if</span> <span
                                style="color:rgb(255,166,87)">problem</span>.<span
                                style="color:rgb(210,168,255)">isEnd</span>(<span
                                style="color:rgb(201,209,217)">state</span>):</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(210,168,255)">print</span>()</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(210,168,255)">print</span>(<span
                                style="color:rgb(255,123,114)">f</span><span
                                style="color:rgb(165,214,255)">"======================<wbr>======= we've reached an end state! "</span>)
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">actions</span> <span
                                style="color:rgb(212,212,212)">=</span> []</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(197,134,192)">while</span> <span
                                style="color:rgb(201,209,217)">state</span> <span
                                style="color:rgb(212,212,212)">!=</span> <span
                                style="color:rgb(201,209,217)">startState</span>:</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(201,209,217)">action</span>, <span
                                style="color:rgb(201,209,217)">prevState</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(201,209,217)">backpointers</span>[<span
                                style="color:rgb(201,209,217)">state</span>]</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">actions</span>.<span
                                style="color:rgb(210,168,255)">append</span>(<span
                                style="color:rgb(201,209,217)">action</span>)</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(201,209,217)">state</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(201,209,217)">prevState</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">actions</span>.<span
                                style="color:rgb(210,168,255)">reverse</span>()</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">pathCost</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(201,209,217)">pastCost</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(210,168,255)">print</span>()</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(210,168,255)">print</span>(<span
                                style="color:rgb(255,123,114)">f</span><span
                                style="color:rgb(165,214,255)">"numStatesExplored = </span><span
                                style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">numStatesExplored</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)">"</span>)
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(210,168,255)">print</span>(<span
                                style="color:rgb(255,123,114)">f</span><span style="color:rgb(165,214,255)">"pathCost =
                        </span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">pathCost</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)">"</span>)
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(210,168,255)">print</span>(<span
                                style="color:rgb(255,123,114)">f</span><span style="color:rgb(165,214,255)">"actions =
                        </span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">actions</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)">"</span>)
                </div><br>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(197,134,192)">return</span></div><br>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Expand from
                                'state', updating the frontier with each 'newState'</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(210,168,255)">print</span>(<span
                                style="color:rgb(165,214,255)">"Not at an end state yet."</span>)</div><br>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">for</span> <span
                                style="color:rgb(201,209,217)">action</span>, <span
                                style="color:rgb(201,209,217)">newState</span>, <span
                                style="color:rgb(201,209,217)">cost</span> <span
                                style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(255,166,87)">problem</span>.<span
                                style="color:rgb(210,168,255)">successorsAndCosts</span>(<span
                                style="color:rgb(201,209,217)">sta<wbr>te</span>):</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(210,168,255)">print</span>()</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(210,168,255)">print</span>(<span style="color:rgb(165,214,255)">"For
                                loop for successorsAndCosts. "</span>)</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(210,168,255)">print</span>(<span
                                style="color:rgb(255,123,114)">f</span><span
                                style="color:rgb(165,214,255)">"</span><span
                                style="color:rgb(215,186,125)">\t</span><span
                                style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">state</span>.location<span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)"> =&gt;
                        </span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">newState</span>.<span
                                style="color:rgb(201,209,217)">location</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)"> (Cost:
                        </span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">pastCost</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)"> +
                        </span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">cost</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)">) (Memory:
                        </span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">newState</span>.<span
                                style="color:rgb(201,209,217)">memory</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)">)"</span>)
                </div><br>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(197,134,192)">if</span> <span
                                style="color:rgb(201,209,217)">frontier</span>.<span
                                style="color:rgb(210,168,255)">update</span>(<span
                                style="color:rgb(201,209,217)">newState</span>, <span
                                style="color:rgb(201,209,217)">pastCost</span> <span
                                style="color:rgb(212,212,212)">+</span> <span
                                style="color:rgb(201,209,217)">cost</span>):</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(139,148,158)"># We found better way to go to 'newState' --&gt; update
                                backpointer!</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(139,148,158)"># print("\tWe found better way to go to 'newState' --&gt;
                                update backpointer!")</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(210,168,255)">print</span>(<span
                                style="color:rgb(255,123,114)">f</span><span
                                style="color:rgb(165,214,255)">"</span><span
                                style="color:rgb(215,186,125)">\t</span><span style="color:rgb(165,214,255)">Updating
                                backpointers : backpointers[</span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">newState</span>.<span
                                style="color:rgb(201,209,217)">locatio<wbr>n</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)">] =
                                (</span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">action</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)">,
                        </span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">state</span>.location<span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)">)"</span>)
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(201,209,217)">frontier</span>.<span
                                style="color:rgb(210,168,255)">printPriorities</span>()</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(201,209,217)">backpointers</span>[<span
                                style="color:rgb(201,209,217)">newState</span>] <span
                                style="color:rgb(212,212,212)">=</span> (<span
                                style="color:rgb(201,209,217)">action</span>, <span
                                style="color:rgb(201,209,217)">state</span>)</div>
        </div>
</div>
        `

        const html3 = `
<pre>
ShortestPathProblem :: startState() :: location: 0,0
UniformCostSearch.solve() started. startState: 0,0

------------------------------------------- main loop
frontier priorities:
        (0,0|0.0)

backpointers:
Exploring 0,0 with pastCost 0.0. numStatesExplored: 1
cityMap.tags[0,0] = ['label=0,0', 'x=0', 'y=0']
ShortestPathProblem :: isEnd() :: Is 'label=2,2' in cityMap.tags[0,0]? : False
Not at an end state yet.
ShortestPathProblem :: successorsAndCosts()
        (0,1|1)
        (1,0|1)

For loop for successorsAndCosts.
        0,0 => 0,1 (Cost: 0.0 + 1) (Memory: None)
        Updating backpointers : backpointers[0,1] = (0,1, 0,0)
frontier priorities:
        (0,1|1.0)

For loop for successorsAndCosts.
        0,0 => 1,0 (Cost: 0.0 + 1) (Memory: None)
        Updating backpointers : backpointers[1,0] = (1,0, 0,0)
frontier priorities:
        (0,1|1.0)
        (1,0|1.0)

------------------------------------------- main loop
frontier priorities:
        (0,1|1.0)
        (1,0|1.0)

backpointers:
        (0,1| action:0,1 prevState:0,0)
        (1,0| action:1,0 prevState:0,0)
Exploring 0,1 with pastCost 1.0. numStatesExplored: 2
cityMap.tags[0,1] = ['label=0,1', 'x=0', 'y=1']
ShortestPathProblem :: isEnd() :: Is 'label=2,2' in cityMap.tags[0,1]? : False
Not at an end state yet.
ShortestPathProblem :: successorsAndCosts()
        (0,0|1)
        (0,2|1)
        (1,1|1)

For loop for successorsAndCosts.
        0,1 => 0,0 (Cost: 1.0 + 1) (Memory: None)

For loop for successorsAndCosts.
        0,1 => 0,2 (Cost: 1.0 + 1) (Memory: None)
        Updating backpointers : backpointers[0,2] = (0,2, 0,1)
frontier priorities:
        (1,0|1.0)
        (0,2|2.0)

For loop for successorsAndCosts.
        0,1 => 1,1 (Cost: 1.0 + 1) (Memory: None)
        Updating backpointers : backpointers[1,1] = (1,1, 0,1)
frontier priorities:
        (1,0|1.0)
        (0,2|2.0)
        (1,1|2.0)

------------------------------------------- main loop
frontier priorities:
        (1,0|1.0)
        (0,2|2.0)
        (1,1|2.0)

backpointers:
        (0,1| action:0,1 prevState:0,0)
        (1,0| action:1,0 prevState:0,0)
        (0,2| action:0,2 prevState:0,1)
        (1,1| action:1,1 prevState:0,1)
Exploring 1,0 with pastCost 1.0. numStatesExplored: 3
cityMap.tags[1,0] = ['label=1,0', 'x=1', 'y=0']
ShortestPathProblem :: isEnd() :: Is 'label=2,2' in cityMap.tags[1,0]? : False
Not at an end state yet.
ShortestPathProblem :: successorsAndCosts()
        (0,0|1)
        (1,1|1)
        (2,0|1)

For loop for successorsAndCosts.
        1,0 => 0,0 (Cost: 1.0 + 1) (Memory: None)

For loop for successorsAndCosts.
        1,0 => 1,1 (Cost: 1.0 + 1) (Memory: None)

For loop for successorsAndCosts.
        1,0 => 2,0 (Cost: 1.0 + 1) (Memory: None)
        Updating backpointers : backpointers[2,0] = (2,0, 1,0)
frontier priorities:
        (0,2|2.0)
        (1,1|2.0)
        (2,0|2.0)

------------------------------------------- main loop
frontier priorities:
        (0,2|2.0)
        (1,1|2.0)
        (2,0|2.0)

backpointers:
        (0,1| action:0,1 prevState:0,0)
        (1,0| action:1,0 prevState:0,0)
        (0,2| action:0,2 prevState:0,1)
        (1,1| action:1,1 prevState:0,1)
        (2,0| action:2,0 prevState:1,0)
Exploring 0,2 with pastCost 2.0. numStatesExplored: 4
cityMap.tags[0,2] = ['label=0,2', 'x=0', 'y=2']
ShortestPathProblem :: isEnd() :: Is 'label=2,2' in cityMap.tags[0,2]? : False
Not at an end state yet.
ShortestPathProblem :: successorsAndCosts()
        (0,1|1)
        (0,3|1)
        (1,2|1)

For loop for successorsAndCosts.
        0,2 => 0,1 (Cost: 2.0 + 1) (Memory: None)

For loop for successorsAndCosts.
        0,2 => 0,3 (Cost: 2.0 + 1) (Memory: None)
        Updating backpointers : backpointers[0,3] = (0,3, 0,2)
frontier priorities:
        (1,1|2.0)
        (2,0|2.0)
        (0,3|3.0)

For loop for successorsAndCosts.
        0,2 => 1,2 (Cost: 2.0 + 1) (Memory: None)
        Updating backpointers : backpointers[1,2] = (1,2, 0,2)
frontier priorities:
        (1,1|2.0)
        (2,0|2.0)
        (0,3|3.0)
        (1,2|3.0)

------------------------------------------- main loop
frontier priorities:
        (1,1|2.0)
        (2,0|2.0)
        (0,3|3.0)
        (1,2|3.0)

backpointers:
        (0,1| action:0,1 prevState:0,0)
        (1,0| action:1,0 prevState:0,0)
        (0,2| action:0,2 prevState:0,1)
        (1,1| action:1,1 prevState:0,1)
        (2,0| action:2,0 prevState:1,0)
        (0,3| action:0,3 prevState:0,2)
        (1,2| action:1,2 prevState:0,2)
Exploring 1,1 with pastCost 2.0. numStatesExplored: 5
cityMap.tags[1,1] = ['label=1,1', 'x=1', 'y=1']
ShortestPathProblem :: isEnd() :: Is 'label=2,2' in cityMap.tags[1,1]? : False
Not at an end state yet.
ShortestPathProblem :: successorsAndCosts()
        (0,1|1)
        (1,0|1)
        (1,2|1)
        (2,1|1)

For loop for successorsAndCosts.
        1,1 => 0,1 (Cost: 2.0 + 1) (Memory: None)

For loop for successorsAndCosts.
        1,1 => 1,0 (Cost: 2.0 + 1) (Memory: None)

For loop for successorsAndCosts.
        1,1 => 1,2 (Cost: 2.0 + 1) (Memory: None)

For loop for successorsAndCosts.
        1,1 => 2,1 (Cost: 2.0 + 1) (Memory: None)
        Updating backpointers : backpointers[2,1] = (2,1, 1,1)
frontier priorities:
        (2,0|2.0)
        (0,3|3.0)
        (1,2|3.0)
        (2,1|3.0)

------------------------------------------- main loop
frontier priorities:
        (2,0|2.0)
        (0,3|3.0)
        (1,2|3.0)
        (2,1|3.0)

backpointers:
        (0,1| action:0,1 prevState:0,0)
        (1,0| action:1,0 prevState:0,0)
        (0,2| action:0,2 prevState:0,1)
        (1,1| action:1,1 prevState:0,1)
        (2,0| action:2,0 prevState:1,0)
        (0,3| action:0,3 prevState:0,2)
        (1,2| action:1,2 prevState:0,2)
        (2,1| action:2,1 prevState:1,1)
Exploring 2,0 with pastCost 2.0. numStatesExplored: 6
cityMap.tags[2,0] = ['label=2,0', 'x=2', 'y=0']
ShortestPathProblem :: isEnd() :: Is 'label=2,2' in cityMap.tags[2,0]? : False
Not at an end state yet.
ShortestPathProblem :: successorsAndCosts()
        (1,0|1)
        (2,1|1)

For loop for successorsAndCosts.
        2,0 => 1,0 (Cost: 2.0 + 1) (Memory: None)

For loop for successorsAndCosts.
        2,0 => 2,1 (Cost: 2.0 + 1) (Memory: None)

------------------------------------------- main loop
frontier priorities:
        (0,3|3.0)
        (1,2|3.0)
        (2,1|3.0)

backpointers:
        (0,1| action:0,1 prevState:0,0)
        (1,0| action:1,0 prevState:0,0)
        (0,2| action:0,2 prevState:0,1)
        (1,1| action:1,1 prevState:0,1)
        (2,0| action:2,0 prevState:1,0)
        (0,3| action:0,3 prevState:0,2)
        (1,2| action:1,2 prevState:0,2)
        (2,1| action:2,1 prevState:1,1)
Exploring 0,3 with pastCost 3.0. numStatesExplored: 7
cityMap.tags[0,3] = ['label=0,3', 'x=0', 'y=3']
ShortestPathProblem :: isEnd() :: Is 'label=2,2' in cityMap.tags[0,3]? : False
Not at an end state yet.
ShortestPathProblem :: successorsAndCosts()
        (0,2|1)
        (0,4|1)
        (1,3|1)

For loop for successorsAndCosts.
        0,3 => 0,2 (Cost: 3.0 + 1) (Memory: None)

For loop for successorsAndCosts.
        0,3 => 0,4 (Cost: 3.0 + 1) (Memory: None)
        Updating backpointers : backpointers[0,4] = (0,4, 0,3)
frontier priorities:
        (1,2|3.0)
        (2,1|3.0)
        (0,4|4.0)

For loop for successorsAndCosts.
        0,3 => 1,3 (Cost: 3.0 + 1) (Memory: None)
        Updating backpointers : backpointers[1,3] = (1,3, 0,3)
frontier priorities:
        (1,2|3.0)
        (2,1|3.0)
        (0,4|4.0)
        (1,3|4.0)

------------------------------------------- main loop
frontier priorities:
        (1,2|3.0)
        (2,1|3.0)
        (0,4|4.0)
        (1,3|4.0)

backpointers:
        (0,1| action:0,1 prevState:0,0)
        (1,0| action:1,0 prevState:0,0)
        (0,2| action:0,2 prevState:0,1)
        (1,1| action:1,1 prevState:0,1)
        (2,0| action:2,0 prevState:1,0)
        (0,3| action:0,3 prevState:0,2)
        (1,2| action:1,2 prevState:0,2)
        (2,1| action:2,1 prevState:1,1)
        (0,4| action:0,4 prevState:0,3)
        (1,3| action:1,3 prevState:0,3)
Exploring 1,2 with pastCost 3.0. numStatesExplored: 8
cityMap.tags[1,2] = ['label=1,2', 'x=1', 'y=2']
ShortestPathProblem :: isEnd() :: Is 'label=2,2' in cityMap.tags[1,2]? : False
Not at an end state yet.
ShortestPathProblem :: successorsAndCosts()
        (0,2|1)
        (1,1|1)
        (1,3|1)
        (2,2|1)

For loop for successorsAndCosts.
        1,2 => 0,2 (Cost: 3.0 + 1) (Memory: None)

For loop for successorsAndCosts.
        1,2 => 1,1 (Cost: 3.0 + 1) (Memory: None)

For loop for successorsAndCosts.
        1,2 => 1,3 (Cost: 3.0 + 1) (Memory: None)

For loop for successorsAndCosts.
        1,2 => 2,2 (Cost: 3.0 + 1) (Memory: None)
        Updating backpointers : backpointers[2,2] = (2,2, 1,2)
frontier priorities:
        (2,1|3.0)
        (0,4|4.0)
        (1,3|4.0)
        (2,2|4.0)

------------------------------------------- main loop
frontier priorities:
        (2,1|3.0)
        (0,4|4.0)
        (1,3|4.0)
        (2,2|4.0)

backpointers:
        (0,1| action:0,1 prevState:0,0)
        (1,0| action:1,0 prevState:0,0)
        (0,2| action:0,2 prevState:0,1)
        (1,1| action:1,1 prevState:0,1)
        (2,0| action:2,0 prevState:1,0)
        (0,3| action:0,3 prevState:0,2)
        (1,2| action:1,2 prevState:0,2)
        (2,1| action:2,1 prevState:1,1)
        (0,4| action:0,4 prevState:0,3)
        (1,3| action:1,3 prevState:0,3)
        (2,2| action:2,2 prevState:1,2)
Exploring 2,1 with pastCost 3.0. numStatesExplored: 9
cityMap.tags[2,1] = ['label=2,1', 'x=2', 'y=1']
ShortestPathProblem :: isEnd() :: Is 'label=2,2' in cityMap.tags[2,1]? : False
Not at an end state yet.
ShortestPathProblem :: successorsAndCosts()
        (1,1|1)
        (2,0|1)
        (2,2|1)

For loop for successorsAndCosts.
        2,1 => 1,1 (Cost: 3.0 + 1) (Memory: None)

For loop for successorsAndCosts.
        2,1 => 2,0 (Cost: 3.0 + 1) (Memory: None)

For loop for successorsAndCosts.
        2,1 => 2,2 (Cost: 3.0 + 1) (Memory: None)

------------------------------------------- main loop
frontier priorities:
        (0,4|4.0)
        (1,3|4.0)
        (2,2|4.0)

backpointers:
        (0,1| action:0,1 prevState:0,0)
        (1,0| action:1,0 prevState:0,0)
        (0,2| action:0,2 prevState:0,1)
        (1,1| action:1,1 prevState:0,1)
        (2,0| action:2,0 prevState:1,0)
        (0,3| action:0,3 prevState:0,2)
        (1,2| action:1,2 prevState:0,2)
        (2,1| action:2,1 prevState:1,1)
        (0,4| action:0,4 prevState:0,3)
        (1,3| action:1,3 prevState:0,3)
        (2,2| action:2,2 prevState:1,2)
Exploring 0,4 with pastCost 4.0. numStatesExplored: 10
cityMap.tags[0,4] = ['label=0,4', 'x=0', 'y=4']
ShortestPathProblem :: isEnd() :: Is 'label=2,2' in cityMap.tags[0,4]? : False
Not at an end state yet.
ShortestPathProblem :: successorsAndCosts()
        (0,3|1)
        (1,4|1)

For loop for successorsAndCosts.
        0,4 => 0,3 (Cost: 4.0 + 1) (Memory: None)

For loop for successorsAndCosts.
        0,4 => 1,4 (Cost: 4.0 + 1) (Memory: None)
        Updating backpointers : backpointers[1,4] = (1,4, 0,4)
frontier priorities:
        (1,3|4.0)
        (2,2|4.0)
        (1,4|5.0)

------------------------------------------- main loop
frontier priorities:
        (1,3|4.0)
        (2,2|4.0)
        (1,4|5.0)

backpointers:
        (0,1| action:0,1 prevState:0,0)
        (1,0| action:1,0 prevState:0,0)
        (0,2| action:0,2 prevState:0,1)
        (1,1| action:1,1 prevState:0,1)
        (2,0| action:2,0 prevState:1,0)
        (0,3| action:0,3 prevState:0,2)
        (1,2| action:1,2 prevState:0,2)
        (2,1| action:2,1 prevState:1,1)
        (0,4| action:0,4 prevState:0,3)
        (1,3| action:1,3 prevState:0,3)
        (2,2| action:2,2 prevState:1,2)
        (1,4| action:1,4 prevState:0,4)
Exploring 1,3 with pastCost 4.0. numStatesExplored: 11
cityMap.tags[1,3] = ['label=1,3', 'x=1', 'y=3']
ShortestPathProblem :: isEnd() :: Is 'label=2,2' in cityMap.tags[1,3]? : False
Not at an end state yet.
ShortestPathProblem :: successorsAndCosts()
        (0,3|1)
        (1,2|1)
        (1,4|1)
        (2,3|1)

For loop for successorsAndCosts.
        1,3 => 0,3 (Cost: 4.0 + 1) (Memory: None)

For loop for successorsAndCosts.
        1,3 => 1,2 (Cost: 4.0 + 1) (Memory: None)

For loop for successorsAndCosts.
        1,3 => 1,4 (Cost: 4.0 + 1) (Memory: None)

For loop for successorsAndCosts.
        1,3 => 2,3 (Cost: 4.0 + 1) (Memory: None)
        Updating backpointers : backpointers[2,3] = (2,3, 1,3)
frontier priorities:
        (2,2|4.0)
        (1,4|5.0)
        (2,3|5.0)

------------------------------------------- main loop
frontier priorities:
        (2,2|4.0)
        (1,4|5.0)
        (2,3|5.0)

backpointers:
        (0,1| action:0,1 prevState:0,0)
        (1,0| action:1,0 prevState:0,0)
        (0,2| action:0,2 prevState:0,1)
        (1,1| action:1,1 prevState:0,1)
        (2,0| action:2,0 prevState:1,0)
        (0,3| action:0,3 prevState:0,2)
        (1,2| action:1,2 prevState:0,2)
        (2,1| action:2,1 prevState:1,1)
        (0,4| action:0,4 prevState:0,3)
        (1,3| action:1,3 prevState:0,3)
        (2,2| action:2,2 prevState:1,2)
        (1,4| action:1,4 prevState:0,4)
        (2,3| action:2,3 prevState:1,3)
Exploring 2,2 with pastCost 4.0. numStatesExplored: 12
cityMap.tags[2,2] = ['label=2,2', 'x=2', 'y=2']
ShortestPathProblem :: isEnd() :: Is 'label=2,2' in cityMap.tags[2,2]? : True

============================= we've reached an end state!

numStatesExplored = 12
pathCost = 4.0
actions = ['0,1', '0,2', '1,2', '2,2']
path: ['0,0', '0,1', '0,2', '1,2', '2,2']
cost: 4.0
</pre>
        `

        const html4 = `
        <div dir="ltr">
        <div style="color:rgb(204,204,204);font-family:monospace;font-size:14px;line-height:18px;">
                <div><span style="color:rgb(255,123,114)">class</span> <span
                                style="color:rgb(78,201,176)">ShortestPathProblem</span>(<span
                                style="color:rgb(78,201,176)">SearchProb<wbr>lem</span>):</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(165,214,255)">"""</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; Defines a search problem that corresponds to
                                finding the shortest path</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; from 'startLocation' to any location with the
                                specified 'endTag'.</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; """</span></div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(255,123,114)">def</span> <span
                                style="color:rgb(220,220,170)">__init__</span>(<span
                                style="color:rgb(201,209,217)">self</span>, <span
                                style="color:rgb(255,166,87)">startLocation</span>: <span
                                style="color:rgb(78,201,176)">str</span>, <span
                                style="color:rgb(255,166,87)">endTag</span>: <span
                                style="color:rgb(78,201,176)">str</span>, <span
                                style="color:rgb(255,166,87)">cityMap</span>: <span
                                style="color:rgb(78,201,176)">CityMap</span>):</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">startLocation</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(255,166,87)">startLocation</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">endTag</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(255,166,87)">endTag</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">cityMap</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(255,166,87)">cityMap</span></div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(255,123,114)">def</span> <span
                                style="color:rgb(210,168,255)">startState</span>(<span
                                style="color:rgb(201,209,217)">self</span>) -&gt; <span
                                style="color:rgb(78,201,176)">State</span>:</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(78,201,176)">State</span>(<span
                                style="color:rgb(201,209,217)">location</span><span
                                style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">startLocat<wbr>ion</span>)</div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(255,123,114)">def</span> <span
                                style="color:rgb(210,168,255)">isEnd</span>(<span
                                style="color:rgb(201,209,217)">self</span>, <span
                                style="color:rgb(255,166,87)">state</span>: <span
                                style="color:rgb(78,201,176)">State</span>) -&gt; <span
                                style="color:rgb(78,201,176)">bool</span>:</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">endTag</span> <span
                                style="color:rgb(86,156,214)">in</span> <span
                                style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">cityMap</span>.<span
                                style="color:rgb(201,209,217)">tags</span>[<span
                                style="color:rgb(255,166,87)">state</span>.<span
                                style="color:rgb(201,209,217)">locati<wbr>on</span>]</div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(255,123,114)">def</span> <span
                                style="color:rgb(210,168,255)">successorsAndCosts</span>(<span
                                style="color:rgb(201,209,217)">self</span>, <span
                                style="color:rgb(255,166,87)">state</span>: <span
                                style="color:rgb(78,201,176)">State</span>) -&gt; <span
                                style="color:rgb(201,209,217)">List</span>[<span
                                style="color:rgb(78,201,176)">Tuple</span>[<span
                                style="color:rgb(78,201,176)">str</span>, <span
                                style="color:rgb(78,201,176)">State</span>, <span
                                style="color:rgb(78,201,176)">float</span>]]:</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)">## debugging start</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(210,168,255)">print</span>(<span
                                style="color:rgb(255,123,114)">f</span><span
                                style="color:rgb(165,214,255)">"ShortestPathProblem :: successorsAndCosts()"</span>)
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># neighbors are nodes that are
                                connected to the current node (as defined in the cityMap)</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># edge costs is the distance to
                                the neighbor node from the current node</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">neighbors</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">cityMap</span>.<span
                                style="color:rgb(201,209,217)">distances</span>[<span
                                style="color:rgb(255,166,87)">state</span>.<span
                                style="color:rgb(201,209,217)">l<wbr>ocation</span>].<span
                                style="color:rgb(210,168,255)">items</span>()</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">for</span> <span
                                style="color:rgb(201,209,217)">location</span>, <span
                                style="color:rgb(201,209,217)">distance</span> <span
                                style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(201,209,217)">neighbors</span>:</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">neighborNode</span>
                        <span style="color:rgb(212,212,212)">=</span> <span style="color:rgb(165,214,255)">'</span><span
                                style="color:rgb(215,186,125)">\t</span><span style="color:rgb(165,214,255)">('</span>
                        <span style="color:rgb(212,212,212)">+</span> <span
                                style="color:rgb(201,209,217)">location</span> <span
                                style="color:rgb(212,212,212)">+</span> <span style="color:rgb(165,214,255)">'|'</span>
                        <span style="color:rgb(212,212,212)">+</span> <span
                                style="color:rgb(78,201,176)">str</span>(<span
                                style="color:rgb(201,209,217)">distance</span>) <span
                                style="color:rgb(212,212,212)">+</span> <span style="color:rgb(165,214,255)">')'</span>
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(210,168,255)">print</span>(<span
                                style="color:rgb(201,209,217)">neighborNode</span>)</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)">## debugging end</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> [</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; (<span style="color:rgb(201,209,217)">neighbor</span>,
                        <span style="color:rgb(78,201,176)">State</span>(<span
                                style="color:rgb(201,209,217)">location</span><span
                                style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(201,209,217)">neighbor</span>), <span
                                style="color:rgb(201,209,217)">distance</span>)</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">for</span> <span
                                style="color:rgb(201,209,217)">neighbor</span>, <span
                                style="color:rgb(201,209,217)">distance</span> <span
                                style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">cityMap</span>.<span
                                style="color:rgb(201,209,217)">distances</span>[<span
                                style="color:rgb(255,166,87)">state</span>.<span
                                style="color:rgb(201,209,217)">l<wbr>ocation</span>].<span
                                style="color:rgb(210,168,255)">items</span>()</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; ]</div>
        </div>
</div>
        `

        const html5 = `
        <div dir="ltr">
        <div style="color:rgb(204,204,204);font-family:monospace;font-size:14px;line-height:18px;">
                <div><span style="color:rgb(255,123,114)">class</span> <span
                                style="color:rgb(78,201,176)">WaypointsShortestPathProblem</span>(<span
                                style="color:rgb(78,201,176)">S<wbr>earchProblem</span>):</div><span class="im">
                        <div>&nbsp; &nbsp; <span style="color:rgb(165,214,255)">"""</span></div>
                        <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; Defines a search problem that
                                        corresponds to finding the shortest path from</span></div>
                </span>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; 'startLocation' to any location with the
                                specified 'endTag' such that the path also</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; traverses locations that cover the set of tags
                                in 'waypointTags'.</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; """</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(255,123,114)">def</span> <span
                                style="color:rgb(220,220,170)">__init__</span>(</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">self</span>, <span
                                style="color:rgb(255,166,87)">startLocation</span>: <span
                                style="color:rgb(78,201,176)">str</span>, <span
                                style="color:rgb(255,166,87)">waypointTags</span>: <span
                                style="color:rgb(201,209,217)">List</span>[<span
                                style="color:rgb(78,201,176)">str</span>], <span
                                style="color:rgb(255,166,87)">endTag</span>: <span
                                style="color:rgb(78,201,176)">str</span>, <span
                                style="color:rgb(255,166,87)">cityMap</span>: <span
                                style="color:rgb(78,201,176)">CityMap</span></div><span class="im">
                        <div>&nbsp; &nbsp; ):</div>
                        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">self</span>.<span
                                        style="color:rgb(201,209,217)">startLocation</span> <span
                                        style="color:rgb(212,212,212)">=</span> <span
                                        style="color:rgb(255,166,87)">startLocation</span></div>
                        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">self</span>.<span
                                        style="color:rgb(201,209,217)">endTag</span> <span
                                        style="color:rgb(212,212,212)">=</span> <span
                                        style="color:rgb(255,166,87)">endTag</span></div>
                        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">self</span>.<span
                                        style="color:rgb(201,209,217)">cityMap</span> <span
                                        style="color:rgb(212,212,212)">=</span> <span
                                        style="color:rgb(255,166,87)">cityMap</span></div><br>
                </span>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># We want waypointTags to be
                                consistent/canonical (sorted) and hashable (tuple)</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">waypointTags</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">tuple</span>(<span
                                style="color:rgb(210,168,255)">sorted</span>(<span
                                style="color:rgb(255,166,87)">waypointTags</span>))</div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(255,123,114)">def</span> <span
                                style="color:rgb(210,168,255)">startState</span>(<span
                                style="color:rgb(201,209,217)">self</span>) -&gt; <span
                                style="color:rgb(78,201,176)">State</span>:</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Memory = frozenset of
                                waypointTags already satisfied at the start location</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">covered</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">frozenset</span>(</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">tag</span> <span
                                style="color:rgb(197,134,192)">for</span> <span
                                style="color:rgb(201,209,217)">tag</span> <span style="color:rgb(197,134,192)">in</span>
                        <span style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">waypointTags</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">if</span> <span
                                style="color:rgb(201,209,217)">tag</span> <span style="color:rgb(197,134,192)">in</span>
                        <span style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">cityMap</span>.<span
                                style="color:rgb(201,209,217)">tags</span>[<span
                                style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">startLo<wbr>cation</span>]</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; )</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(78,201,176)">State</span>(<span
                                style="color:rgb(201,209,217)">location</span><span
                                style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">startLocat<wbr>ion</span>, <span
                                style="color:rgb(201,209,217)">memory</span><span
                                style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(201,209,217)">covered</span>)</div><span class="im"><br>
                        <div>&nbsp; &nbsp; <span style="color:rgb(255,123,114)">def</span> <span
                                        style="color:rgb(210,168,255)">isEnd</span>(<span
                                        style="color:rgb(201,209,217)">self</span>, <span
                                        style="color:rgb(255,166,87)">state</span>: <span
                                        style="color:rgb(78,201,176)">State</span>) -&gt; <span
                                        style="color:rgb(78,201,176)">bool</span>:</div>
                </span>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># End when we're at a location
                                with endTag AND all waypoints have been covered</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> (</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">endTag</span> <span
                                style="color:rgb(86,156,214)">in</span> <span
                                style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">cityMap</span>.<span
                                style="color:rgb(201,209,217)">tags</span>[<span
                                style="color:rgb(255,166,87)">state</span>.<span
                                style="color:rgb(201,209,217)">locati<wbr>on</span>]</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(86,156,214)">and</span> <span
                                style="color:rgb(255,166,87)">state</span>.<span
                                style="color:rgb(201,209,217)">memory</span> <span
                                style="color:rgb(212,212,212)">==</span> <span
                                style="color:rgb(78,201,176)">frozenset</span>(<span
                                style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">waypointTags</span>)</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; )</div><span class="im"><br>
                        <div>&nbsp; &nbsp; <span style="color:rgb(255,123,114)">def</span> <span
                                        style="color:rgb(210,168,255)">successorsAndCosts</span>(<span
                                        style="color:rgb(201,209,217)">self</span>, <span
                                        style="color:rgb(255,166,87)">state</span>: <span
                                        style="color:rgb(78,201,176)">State</span>) -&gt; <span
                                        style="color:rgb(201,209,217)">List</span>[<span
                                        style="color:rgb(78,201,176)">Tuple</span>[<span
                                        style="color:rgb(78,201,176)">str</span>, <span
                                        style="color:rgb(78,201,176)">State</span>, <span
                                        style="color:rgb(78,201,176)">float</span>]]:</div>
                </span>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">results</span> <span
                                style="color:rgb(212,212,212)">=</span> []</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">for</span> <span
                                style="color:rgb(201,209,217)">neighbor</span>, <span
                                style="color:rgb(201,209,217)">distance</span> <span
                                style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">cityMap</span>.<span
                                style="color:rgb(201,209,217)">distances</span>[<span
                                style="color:rgb(255,166,87)">state</span>.<span
                                style="color:rgb(201,209,217)">l<wbr>ocation</span>].<span
                                style="color:rgb(210,168,255)">items</span>():</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Extend covered
                                waypoints with any waypointTags satisfied at the neighbor</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">newCovered</span>
                        <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(255,166,87)">state</span>.<span
                                style="color:rgb(201,209,217)">memory</span> <span
                                style="color:rgb(212,212,212)">|</span> <span
                                style="color:rgb(78,201,176)">frozenset</span>(</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(201,209,217)">tag</span> <span
                                style="color:rgb(197,134,192)">for</span> <span
                                style="color:rgb(201,209,217)">tag</span> <span style="color:rgb(197,134,192)">in</span>
                        <span style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">waypointTags</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(197,134,192)">if</span> <span style="color:rgb(201,209,217)">tag</span>
                        <span style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">cityMap</span>.<span
                                style="color:rgb(201,209,217)">tags</span>[<span
                                style="color:rgb(201,209,217)">neighbor</span>]</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; )</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">results</span>.<span
                                style="color:rgb(210,168,255)">append</span>((<span
                                style="color:rgb(201,209,217)">neighbor</span>, <span
                                style="color:rgb(78,201,176)">State</span>(<span
                                style="color:rgb(201,209,217)">location</span><span
                                style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(201,209,217)">neighbor</span>, <span
                                style="color:rgb(201,209,217)">memory</span><span
                                style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(201,209,217)">newCovered</span>), <span
                                style="color:rgb(201,209,217)">distance</span>))</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(201,209,217)">results</span></div>
        </div>
</div>
        `

        const html6 = `
        <div dir="ltr">
        <div style="color:rgb(204,204,204);font-family:monospace;font-size:14px;line-height:18px;">
                <div><span style="color:rgb(139,148,158)"># A* to UCS reduction</span></div><br>
                <div><span style="color:rgb(139,148,158)"># Turn an existing SearchProblem ('problem') you are trying to
                                solve with a</span></div>
                <div><span style="color:rgb(139,148,158)"># Heuristic ('heuristic') into a new SearchProblem
                                ('newSearchProblem'), such</span></div>
                <div><span style="color:rgb(139,148,158)"># that running uniform cost search on 'newSearchProblem' is
                                equivalent to</span></div>
                <div><span style="color:rgb(139,148,158)"># running A* on 'problem' subject to 'heuristic'.</span></div>
                <div><span style="color:rgb(139,148,158)">#</span></div>
                <div><span style="color:rgb(139,148,158)"># This process of translating a model of a problem + extra
                                constraints into a</span></div>
                <div><span style="color:rgb(139,148,158)"># new instance of the same problem is called a reduction; it's
                                a powerful tool</span></div>
                <div><span style="color:rgb(139,148,158)"># for writing down "new" models in a language we're already
                                familiar with.</span></div><br>
                <div><span style="color:rgb(255,123,114)">def</span> <span
                                style="color:rgb(210,168,255)">aStarReduction</span>(<span
                                style="color:rgb(255,166,87)">problem</span>: <span
                                style="color:rgb(78,201,176)">SearchProblem</span>, <span
                                style="color:rgb(255,166,87)">heuristic</span>: <span
                                style="color:rgb(78,201,176)">Heuristic</span>) -&gt; <span
                                style="color:rgb(78,201,176)">SearchProblem</span>:</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(255,123,114)">class</span> <span
                                style="color:rgb(78,201,176)">NewSearchProblem</span>(<span
                                style="color:rgb(78,201,176)">SearchProblem</span><wbr>):</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(255,123,114)">def</span> <span
                                style="color:rgb(210,168,255)">startState</span>(<span
                                style="color:rgb(201,209,217)">self</span>) -&gt; <span
                                style="color:rgb(78,201,176)">State</span>:</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(255,166,87)">problem</span>.<span
                                style="color:rgb(210,168,255)">startState</span>()</div><span class="im"><br>
                        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(255,123,114)">def</span> <span
                                        style="color:rgb(210,168,255)">isEnd</span>(<span
                                        style="color:rgb(201,209,217)">self</span>, <span
                                        style="color:rgb(255,166,87)">state</span>: <span
                                        style="color:rgb(78,201,176)">State</span>) -&gt; <span
                                        style="color:rgb(78,201,176)">bool</span>:</div>
                </span>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(255,166,87)">problem</span>.<span
                                style="color:rgb(210,168,255)">isEnd</span>(<span
                                style="color:rgb(255,166,87)">state</span>)</div><span class="im"><br>
                        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(255,123,114)">def</span> <span
                                        style="color:rgb(210,168,255)">successorsAndCosts</span>(<span
                                        style="color:rgb(201,209,217)">self</span>, <span
                                        style="color:rgb(255,166,87)">state</span>: <span
                                        style="color:rgb(78,201,176)">State</span>) -&gt; <span
                                        style="color:rgb(201,209,217)">List</span>[<span
                                        style="color:rgb(78,201,176)">Tuple</span>[<span
                                        style="color:rgb(78,201,176)">str</span>, <span
                                        style="color:rgb(78,201,176)">State</span>, <span
                                        style="color:rgb(78,201,176)">float</span>]]:</div>
                </span>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Modify each edge
                                cost: c' = c + h(s') - h(s)</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># This makes UCS
                                priority = pastCost(s') + h(s') = A* priority</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> [
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; (<span
                                style="color:rgb(201,209,217)">action</span>, <span
                                style="color:rgb(201,209,217)">newState</span>, <span
                                style="color:rgb(201,209,217)">cost</span> <span style="color:rgb(212,212,212)">+</span>
                        <span style="color:rgb(255,166,87)">heuristic</span>.<span
                                style="color:rgb(210,168,255)">evaluate</span>(<span
                                style="color:rgb(201,209,217)">newState</span>) <span
                                style="color:rgb(212,212,212)">-</span> <span
                                style="color:rgb(255,166,87)">heuristic</span>.<span
                                style="color:rgb(210,168,255)">evaluate</span>(<span
                                style="color:rgb(255,166,87)">state</span>))</div><span class="im">
                        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                        style="color:rgb(197,134,192)">for</span> <span
                                        style="color:rgb(201,209,217)">action</span>, <span
                                        style="color:rgb(201,209,217)">newState</span>, <span
                                        style="color:rgb(201,209,217)">cost</span> <span
                                        style="color:rgb(197,134,192)">in</span> <span
                                        style="color:rgb(255,166,87)">problem</span>.<span
                                        style="color:rgb(210,168,255)">successorsAndCosts</span>(<span
                                        style="color:rgb(255,166,87)">sta<wbr>te</span>)</div>
                </span>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ]</div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(78,201,176)">NewSearchProblem</span>()</div>
        </div>
</div>
        `

        const html7 = `
        <div dir="ltr">
        <div style="color:rgb(204,204,204);font-family:monospace;font-size:14px;line-height:18px;">
                <div><span style="color:rgb(255,123,114)">class</span> <span
                                style="color:rgb(78,201,176)">StraightLineHeuristic</span>(<span
                                style="color:rgb(78,201,176)">Heuristi<wbr>c</span>):</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(165,214,255)">"""</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; Estimate the cost between locations as the
                                straight-line distance.</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; """</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(255,123,114)">def</span> <span
                                style="color:rgb(220,220,170)">__init__</span>(<span
                                style="color:rgb(201,209,217)">self</span>, <span
                                style="color:rgb(255,166,87)">endTag</span>: <span
                                style="color:rgb(78,201,176)">str</span>, <span
                                style="color:rgb(255,166,87)">cityMap</span>: <span
                                style="color:rgb(78,201,176)">CityMap</span>):</div><span class="im">
                        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">self</span>.<span
                                        style="color:rgb(201,209,217)">endTag</span> <span
                                        style="color:rgb(212,212,212)">=</span> <span
                                        style="color:rgb(255,166,87)">endTag</span></div>
                        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">self</span>.<span
                                        style="color:rgb(201,209,217)">cityMap</span> <span
                                        style="color:rgb(212,212,212)">=</span> <span
                                        style="color:rgb(255,166,87)">cityMap</span></div><br>
                </span>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Precompute the GeoLocations of
                                all end-tagged locations so that</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># evaluate() doesn't need to scan
                                the entire map on every call.</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">endGeoLocations</span> <span
                                style="color:rgb(212,212,212)">=</span> [</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(255,166,87)">cityMap</span>.<span
                                style="color:rgb(201,209,217)">geoLocations</span>[<span
                                style="color:rgb(201,209,217)">loc</span>]</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">for</span> <span
                                style="color:rgb(201,209,217)">loc</span>, <span
                                style="color:rgb(201,209,217)">tags</span> <span
                                style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(255,166,87)">cityMap</span>.<span
                                style="color:rgb(201,209,217)">tags</span>.<span
                                style="color:rgb(210,168,255)">items</span>()</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">if</span> <span
                                style="color:rgb(255,166,87)">endTag</span> <span
                                style="color:rgb(86,156,214)">in</span> <span style="color:rgb(201,209,217)">tags</span>
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; ]</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Compute a scale factor: metres
                                per one unit of edge cost.</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># computeDistance returns metres,
                                but grid edge costs are 1 per step.</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Dividing by this factor keeps
                                the heuristic in the same units as the</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># edge costs, ensuring
                                admissibility and avoiding negative reduced costs</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># in the A* reduction.</span>
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">sampleLoc</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(210,168,255)">next</span>(<span
                                style="color:rgb(210,168,255)">iter</span>(<span
                                style="color:rgb(255,166,87)">cityMap</span>.<span
                                style="color:rgb(201,209,217)">distances</span>))</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">sampleNbr</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(210,168,255)">next</span>(<span
                                style="color:rgb(210,168,255)">iter</span>(<span
                                style="color:rgb(255,166,87)">cityMap</span>.<span
                                style="color:rgb(201,209,217)">distances</span>[<span
                                style="color:rgb(201,209,217)">sa<wbr>mpleLoc</span>]))</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">_metres_per_step</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(210,168,255)">computeDistance</span>(</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(255,166,87)">cityMap</span>.<span
                                style="color:rgb(201,209,217)">geoLocations</span>[<span
                                style="color:rgb(201,209,217)">sampleLoc</span><wbr>],</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(255,166,87)">cityMap</span>.<span
                                style="color:rgb(201,209,217)">geoLocations</span>[<span
                                style="color:rgb(201,209,217)">sampleNbr</span><wbr>]</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; )</div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(255,123,114)">def</span> <span
                                style="color:rgb(210,168,255)">evaluate</span>(<span
                                style="color:rgb(201,209,217)">self</span>, <span
                                style="color:rgb(255,166,87)">state</span>: <span
                                style="color:rgb(78,201,176)">State</span>) -&gt; <span
                                style="color:rgb(78,201,176)">float</span>:</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Return the minimum straight-line
                                distance from the current location</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># to any end-tagged location,
                                scaled to edge-cost units so the heuristic</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># is admissible (straight-line /
                                scale &lt;= actual path cost).</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">currentGeo</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">cityMap</span>.<span
                                style="color:rgb(201,209,217)">geoLocations</span>[<span
                                style="color:rgb(255,166,87)">stat<wbr>e</span>.<span
                                style="color:rgb(201,209,217)">location</span>]</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">straight_line_metres</span> <span
                                style="color:rgb(212,212,212)">=</span> <span style="color:rgb(210,168,255)">min</span>(
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(210,168,255)">computeDistance</span>(<span
                                style="color:rgb(201,209,217)">currentGeo</span>, <span
                                style="color:rgb(201,209,217)">endGeo</span>) <span
                                style="color:rgb(197,134,192)">for</span> <span
                                style="color:rgb(201,209,217)">endGeo</span> <span
                                style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">endGeoLocations</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; )</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(201,209,217)">straight_line_metres</span> <span
                                style="color:rgb(212,212,212)">/</span> <span
                                style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">_metres_per_step</span></div>
        </div>
</div>
        `

        const html8 = `
        <div dir="ltr">
        <div style="color:rgb(204,204,204);font-family:monospace;font-size:14px;line-height:18px;">
                <div><span style="color:rgb(255,123,114)">class</span> <span
                                style="color:rgb(78,201,176)">NoWaypointsHeuristic</span>(<span
                                style="color:rgb(78,201,176)">Heuristic</span><wbr>):</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(165,214,255)">"""</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; Returns the minimum distance from
                                'startLocation' to any location with 'endTag',</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; ignoring all waypoints.</span></div><span
                        class="im">
                        <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; """</span></div>
                        <div>&nbsp; &nbsp; <span style="color:rgb(255,123,114)">def</span> <span
                                        style="color:rgb(220,220,170)">__init__</span>(<span
                                        style="color:rgb(201,209,217)">self</span>, <span
                                        style="color:rgb(255,166,87)">endTag</span>: <span
                                        style="color:rgb(78,201,176)">str</span>, <span
                                        style="color:rgb(255,166,87)">cityMap</span>: <span
                                        style="color:rgb(78,201,176)">CityMap</span>):</div>
                        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(165,214,255)">"""</span></div>
                </span>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; Precompute cost of shortest path
                                from each location to a location with the desired endTag</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; """</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Define a reversed shortest path
                                problem from a special END state</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># (which connects via 0 cost to
                                all end locations) to 'startLocation'.</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(255,123,114)">class</span> <span
                                style="color:rgb(78,201,176)">ReverseShortestPathProblem</span>(<span
                                style="color:rgb(78,201,176)">Sea<wbr>rchProblem</span>):</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(255,123,114)">def</span> <span
                                style="color:rgb(210,168,255)">startState</span>(<span
                                style="color:rgb(201,209,217)">self</span>) -&gt; <span
                                style="color:rgb(78,201,176)">State</span>:</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(165,214,255)">"""</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Return
                                special "END" state</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                """</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(78,201,176)">State</span>(<span
                                style="color:rgb(201,209,217)">location</span><span
                                style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(165,214,255)">"END"</span>)</div><span class="im"><br>
                        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(255,123,114)">def</span>
                                <span style="color:rgb(210,168,255)">isEnd</span>(<span
                                        style="color:rgb(201,209,217)">self</span>, <span
                                        style="color:rgb(255,166,87)">state</span>: <span
                                        style="color:rgb(78,201,176)">State</span>) -&gt; <span
                                        style="color:rgb(78,201,176)">bool</span>:</div>
                        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                        style="color:rgb(165,214,255)">"""</span></div>
                </span>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Return
                                False for each state.</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                Because there is *not* a valid end state ('isEnd' always returns False),</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; UCS
                                will exhaustively compute costs to *all* other states.</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                """</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(86,156,214)">False</span></div><br>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(255,123,114)">def</span> <span
                                style="color:rgb(210,168,255)">successorsAndCosts</span>(</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(201,209,217)">self</span>, <span
                                style="color:rgb(255,166,87)">state</span>: <span
                                style="color:rgb(78,201,176)">State</span></div><span class="im">
                        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ) -&gt; <span
                                        style="color:rgb(201,209,217)">List</span>[<span
                                        style="color:rgb(78,201,176)">Tuple</span>[<span
                                        style="color:rgb(78,201,176)">str</span>, <span
                                        style="color:rgb(78,201,176)">State</span>, <span
                                        style="color:rgb(78,201,176)">float</span>]]:</div>
                </span>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># If
                                current location is the special "END" state,</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)">#
                                return all the locations with the desired endTag and cost 0</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)">#
                                (i.e, we connect the special location "END" with cost 0 to all locations with
                                endTag)</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)">#
                                Else, return all the successors of current location and their corresponding distances
                                according to the cityMap</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(197,134,192)">if</span> <span
                                style="color:rgb(255,166,87)">state</span>.<span
                                style="color:rgb(201,209,217)">location</span> <span
                                style="color:rgb(212,212,212)">==</span> <span
                                style="color:rgb(165,214,255)">"END"</span>:</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(139,148,158)"># Connect virtual END node to every end-tagged location
                                at cost 0</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(197,134,192)">return</span> [</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; (<span
                                style="color:rgb(201,209,217)">loc</span>, <span
                                style="color:rgb(78,201,176)">State</span>(<span
                                style="color:rgb(201,209,217)">location</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(201,209,217)">loc</span>),
                        <span style="color:rgb(181,206,168)">0</span>)</div><span class="im">
                        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                        style="color:rgb(197,134,192)">for</span> <span
                                        style="color:rgb(201,209,217)">loc</span>, <span
                                        style="color:rgb(201,209,217)">tags</span> <span
                                        style="color:rgb(197,134,192)">in</span> <span
                                        style="color:rgb(255,166,87)">cityMap</span>.<span
                                        style="color:rgb(201,209,217)">tags</span>.<span
                                        style="color:rgb(210,168,255)">items</span>()</div>
                        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                        style="color:rgb(197,134,192)">if</span> <span
                                        style="color:rgb(255,166,87)">endTag</span> <span
                                        style="color:rgb(86,156,214)">in</span> <span
                                        style="color:rgb(201,209,217)">tags</span></div>
                        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ]</div>
                </span>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(197,134,192)">else</span>:</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(139,148,158)"># Reverse edges — since costs are symmetric this is the
                                same as forward</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(197,134,192)">return</span> [</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; (<span
                                style="color:rgb(201,209,217)">neighbor</span>, <span
                                style="color:rgb(78,201,176)">State</span>(<span
                                style="color:rgb(201,209,217)">location</span><span
                                style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(201,209,217)">neighbor</span>), <span
                                style="color:rgb(201,209,217)">distance</span>)</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(197,134,192)">for</span> <span
                                style="color:rgb(201,209,217)">neighbor</span>, <span
                                style="color:rgb(201,209,217)">distance</span> <span
                                style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(255,166,87)">cityMap</span>.<span
                                style="color:rgb(201,209,217)">distances</span>[<span
                                style="color:rgb(255,166,87)">state</span>.<span
                                style="color:rgb(201,209,217)">locati<wbr>on</span>].<span
                                style="color:rgb(210,168,255)">items</span>()</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ]</div><br>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Call UCS.solve on our
                                'ReverseShortestPathProblem' instance. Because there is</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># *not* a valid end state ('isEnd'
                                always returns False), will exhaustively</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># compute costs to *all* other
                                states.</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">ucs</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">UniformCostSearch</span>()</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">ucs</span>.<span
                                style="color:rgb(210,168,255)">solve</span>(<span
                                style="color:rgb(78,201,176)">ReverseShortestPathP<wbr>roblem</span>())</div><br>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Now that we've exhaustively
                                computed costs from any valid "end" location</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># (any location with 'endTag'), we
                                can retrieve 'ucs.pastCosts'; this stores</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># the minimum cost path to each
                                state in our state space.</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># &nbsp; &gt; Note that we're
                                making a critical assumption here: costs are symmetric!</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">pastCosts</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(201,209,217)">ucs</span>.<span
                                style="color:rgb(201,209,217)">pastCosts</span></div><span class="im"><br>
                        <div>&nbsp; &nbsp; <span style="color:rgb(255,123,114)">def</span> <span
                                        style="color:rgb(210,168,255)">evaluate</span>(<span
                                        style="color:rgb(201,209,217)">self</span>, <span
                                        style="color:rgb(255,166,87)">state</span>: <span
                                        style="color:rgb(78,201,176)">State</span>) -&gt; <span
                                        style="color:rgb(78,201,176)">float</span>:</div>
                </span>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Return precomputed min cost from
                                this location to any end-tagged location.</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Default to 0 if location is
                                already an end state (cost is 0).</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">pastCosts</span>.<span
                                style="color:rgb(210,168,255)">get</span>(<span
                                style="color:rgb(255,166,87)">state</span>.<span
                                style="color:rgb(201,209,217)">locat<wbr>ion</span>, <span
                                style="color:rgb(181,206,168)">0</span>)</div>
        </div>
</div>
        `

        const html9 = `
<pre>
Given inputs: 
 - SearchAlgorithm = UCS
 - SearchProblem = WaypointsShortestPathProblem
 - cityMap=createGridMap(3, 5)
 - startLocation=makeGridLabel(0, 0)
 - waypointTags=[makeTag("y", 4)]
 - endTag=makeTag("label", makeGridLabel(2, 2))
 ucs.solve(WaypointsShortestPathProblem())

Goal:
 - find the shortest path from start tag to end tag such that the path also traverses 
   locations that cover the set of tags in 'waypointTags' (in any order).

Algorithm:
 - initialize values: 
     - frontier contains just one node, the start node
       (note: the frontier is a priority queue of nodes where nodes are ordered
        from least cost to highest)
     - explored_nodes is an empty list initially
     - backpointers is an empty list initially
     - each node contains this data:
        - location (state)
        - past_cost (distance to node)
        - tags: a list of tags covered by the shortest path to get to this node

 - main loop: 
    - curr_node = pop the top node in the frontier
    - check if we have reached the end (defined by the searchProblem). If not, continue.
        note: SearchProblem = WaypointsShortestPathProblem which defines isEnd if you have all 
        waypoint tags and the end tag.
        note: if we have reached the end, we can use the backpointers list to figure out the
        path that got us here. 
    - using cityMap, get all the neighbors of curr_node. each neighbor contains: location (state), 
      distance (cost) and tags
       - for each neighbor, compute:
           - neighbor.past_cost = curr_node.past_cost + neighbor.distance 
           - neighbor.tags = curr_node.tags + neighbor.tags
    - given the list of neighbors:
       - if the neighbor is in the list of explored_nodes, then forget it (but check the 
         backpointers to see if we have found a shorter path to this node)
       - add the neighbor to the frontier (if it isn't already there)
       - update backpointers with the new neighbor if it was newly added to the frontier
         (we reached the neighbor from the curr_node)
    - curr_node is now explored. Add to explored list. 
    - repeat main loop (we will pop the next node to explore from the frontier list, 
      which is already sorted by lowest cost)
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
                                                Assignment 3
                                        </div>


                                        <Tabs>
                                                <Tab2 title="Search Algorithm" isChecked={true}>
                                                        <TileRowCell0>

                                                                <div className="jade-h11 mt-[15px]">
                                                                        Search Algorithm
                                                                </div>

                                                                <div className="m-[15px]">

                                                                        Let's define a generic algorithm to perform an iterative way to do a search. Our generic SearchAlgorithm
                                                                        has these instance variables:
                                                                        <ul>
                                                                                <li><strong>actions</strong>: List of "actions" that takes one from the start state to a valid end state</li>
                                                                                <li><strong>pathCost</strong>: Sum of the costs along the path</li>
                                                                                <li><strong>numStatesExplored</strong>: Number of States explored by the given search algorithm as it attempts to find a satisfying path</li>
                                                                                <li><strong>pastCosts</strong>: Dictionary mapping each State location visited by the SearchAlgorithm to the corresponding cost to get there from the starting location</li>
                                                                        </ul>
                                                                        SearchAlgorithm has one abstract method: <strong>solve(SearchProblem)</strong>: given a SearchProblem, run this SearchAlgorithm.

                                                                </div>

                                                                <div className="jade-h11 mt-[15px]">
                                                                        Search Algorithm pseudocode
                                                                </div>

                                                                <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                        <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                <div dangerouslySetInnerHTML={createMarkup(html9)} />
                                                                        </div>
                                                                </div>

                                                                <p>
                                                                        <img src="/images/A3_001.png" />
                                                                </p>
                                                                <p>
                                                                        <img src="/images/A3_002.png" />
                                                                </p>
                                                                <p>
                                                                        <img src="/images/A3_003.png" />
                                                                </p>
                                                                <p>
                                                                        <img src="/images/A3_006.png" />
                                                                </p>



                                                                <div className="jade-h11 mt-[15px]">
                                                                        SearchProblem
                                                                </div>

                                                                <div className="m-[15px]">

                                                                        SearchProblem is defined as:

                                                                </div>

                                                                <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                        <div className="assignment-answer mt-[10px] p-[15px]">

                                                                                class SearchProblem: <br />
                                                                                &nbsp;&nbsp;&nbsp;&nbsp;# Return the start state. <br />
                                                                                &nbsp;&nbsp;&nbsp;&nbsp;def startState(self) -&gt; State: <br />
                                                                                &nbsp;&nbsp;&nbsp;&nbsp; <br />
                                                                                &nbsp;&nbsp;&nbsp;&nbsp;# Return whether `state` is an end state or not. <br />
                                                                                &nbsp;&nbsp;&nbsp;&nbsp;def isEnd(self, state: State) -&gt; bool: <br />
                                                                                &nbsp;&nbsp;&nbsp;&nbsp; <br />
                                                                                &nbsp;&nbsp;&nbsp;&nbsp;# Return a list of (action: str, state: State, cost: float) tuples corresponding to <br />
                                                                                &nbsp;&nbsp;&nbsp;&nbsp;# the various edges coming out of `state` <br />
                                                                                &nbsp;&nbsp;&nbsp;&nbsp;def successorsAndCosts(self, state: State) -&gt; List[Tuple[str, State, float]]:

                                                                        </div>
                                                                </div>

                                                                <div className="jade-h11 mt-[15px]">
                                                                        State
                                                                </div>

                                                                <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                        <div className="assignment-answer mt-[10px] p-[15px]">

                                                                                @dataclass(frozen=True, order=True)<br />
                                                                                class State: <br />
                                                                                &nbsp;&nbsp;&nbsp;&nbsp;location: str <br />
                                                                                &nbsp;&nbsp;&nbsp;&nbsp;memory: Optional[Hashable] <br />
                                                                                &nbsp;&nbsp;&nbsp;&nbsp;# Note that `memory` must be a "Hashable" data type

                                                                        </div>
                                                                </div>

                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="UCS" isChecked={false}>
                                                        <TileRowCell0>

                                                                <div className="jade-h11 mt-[15px]">
                                                                        Uniform Cost Search (Dijkstra's algorithm)
                                                                </div>

                                                                <div className="m-[15px]">

                                                                        An implementation of SearchAlgorithm. It adds 2 more instance variables:

                                                                        <ul>
                                                                                <li><strong>frontier = PriorityQueue()</strong>: Explored states are maintained by the frontier.</li>
                                                                                <li><strong>backpointers</strong>: A Map to keep track of which previous state was used to get to the current state. </li>

                                                                        </ul>

                                                                </div>

                                                                <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                        <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                <div dangerouslySetInnerHTML={createMarkup(html2)} />
                                                                        </div>
                                                                </div>

                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="Shortest Path" isChecked={false}>
                                                        <TileRowCell0>

                                                                <div className="jade-h11 mt-[15px]">
                                                                        Shortest Path Problem
                                                                </div>

                                                                <div className="m-[15px]">

                                                                        An implementation of SearchProblem. Defines a search problem that corresponds to finding the shortest path
                                                                        from 'startLocation' to any location with the specified 'endTag'.

                                                                </div>

                                                                <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                        <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                <div dangerouslySetInnerHTML={createMarkup(html4)} />
                                                                        </div>
                                                                </div>

                                                                <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                        <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                <div dangerouslySetInnerHTML={createMarkup(html3)} />
                                                                        </div>
                                                                </div>

                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="Waypoints Shortest Path" isChecked={false}>
                                                        <TileRowCell0>

                                                                <div className="jade-h11 mt-[15px]">
                                                                        Waypoints Shortest Path Problem
                                                                </div>

                                                                <div className="m-[15px]">

                                                                        Defines a search problem that corresponds to finding the shortest path from
                                                                        `startLocation` to any location with the specified `endTag` such that the path also
                                                                        traverses locations that cover the set of tags in `waypointTags`.

                                                                </div>

                                                                <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                        <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                <div dangerouslySetInnerHTML={createMarkup(html5)} />
                                                                        </div>
                                                                </div>



                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="A*" isChecked={false}>
                                                        <TileRowCell0>

                                                                <div className="jade-h11 mt-[15px]">
                                                                        A* to UCS reduction
                                                                </div>

                                                                <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                        <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                <div dangerouslySetInnerHTML={createMarkup(html6)} />
                                                                        </div>
                                                                </div>



                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="Straight Line Heuristic" isChecked={false}>
                                                        <TileRowCell0>

                                                                <div className="jade-h11 mt-[15px]">
                                                                        Straight Line Heuristic
                                                                </div>

                                                                <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                        <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                <div dangerouslySetInnerHTML={createMarkup(html7)} />
                                                                        </div>
                                                                </div>



                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="No Waypoints Heuristic" isChecked={false}>
                                                        <TileRowCell0>

                                                                <div className="jade-h11 mt-[15px]">
                                                                        No Waypoints Heuristic
                                                                </div>

                                                                <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                        <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                <div dangerouslySetInnerHTML={createMarkup(html8)} />
                                                                        </div>
                                                                </div>



                                                        </TileRowCell0>
                                                </Tab2>


                                                <Tab2 title="PDF" isChecked={false}>
                                                        <TileRowCell0>

                                                                <div className='lab-links'>
                                                                        <ul>
                                                                                <li><a href="/A3_Solutions.pdf" target="_blank">Assignment 3</a></li>
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
