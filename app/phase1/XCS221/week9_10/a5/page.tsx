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
        <div
        style="color: rgb(187, 190, 191); background-color: rgb(18, 19, 20); font-family: Consolas, 'Courier New', monospace; font-weight: normal; font-size: 14px; line-height: 19px; margin: auto; width: fit-content; overflow: auto; white-space: nowrap;">
        <div><span style="color: #c586c0;">from</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #4ec9b0;">typing</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #c586c0;">import</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #c9d1d9;">Any</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #4ec9b0;">Callable</span></div>
        <div><span style="color: #c586c0;">from</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #4ec9b0;">dataclasses</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #c586c0;">import</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d2a8ff;">dataclass</span></div>
        <div><span style="color: #c586c0;">import</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #4ec9b0;">numpy</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #c586c0;">as</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #4ec9b0;">np</span></div>
        <div><span style="color: #c586c0;">from</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #4ec9b0;">util</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #c586c0;">import</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d2a8ff;">sample_dict</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #d2a8ff;">set_random_seed</span></div>
        <div><span style="color: #c9d1d9;">Policy</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">=</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #4ec9b0;">Callable</span><span style="color: #bbbebf;">[[</span><span
                        style="color: #c9d1d9;">Any</span><span style="color: #bbbebf;">],&nbsp;</span><span
                        style="color: #c9d1d9;">Any</span><span style="color: #bbbebf;">]</span></div>
        <div><span style="color: #c9d1d9;">State</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">=</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #c9d1d9;">Any</span></div>
        <div><span style="color: #c9d1d9;">Action</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">=</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #4ec9b0;">str</span></div>
        <div><br></div>
        <div><span
                        style="color: #8b949e;">#&nbsp;MDPs:&nbsp;agent&nbsp;tries&nbsp;to&nbsp;maximize&nbsp;utility,&nbsp;environment&nbsp;is&nbsp;random&nbsp;and&nbsp;known</span>
        </div>
        <div><span
                        style="color: #8b949e;">#&nbsp;Games:&nbsp;agent&nbsp;tries&nbsp;to&nbsp;maximize&nbsp;utility,&nbsp;opponent&nbsp;strategy&nbsp;is&nbsp;unknown</span>
        </div>
        <div><br></div>
        <div><span
                        style="color: #8b949e;">#&nbsp;the&nbsp;value&nbsp;(expected&nbsp;utility)&nbsp;of&nbsp;a&nbsp;game&nbsp;over&nbsp;all&nbsp;possible&nbsp;rollouts</span>
        </div>
        <div><br></div>
        <div><span style="color: #ff7b72;">class</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #4ec9b0;">Game</span><span style="color: #bbbebf;">:</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #ff7b72;">def</span><span
                        style="color: #bbbebf;">&nbsp;</span><span style="color: #d2a8ff;">start_state</span><span
                        style="color: #bbbebf;">(</span><span style="color: #c9d1d9;">self</span><span
                        style="color: #bbbebf;">)&nbsp;-&gt;&nbsp;</span><span style="color: #c9d1d9;">Any</span><span
                        style="color: #bbbebf;">:</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #a5d6ff;">"""Where&nbsp;the&nbsp;game&nbsp;starts."""</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c586c0;">raise</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #4ec9b0;">NotImplementedError</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #ff7b72;">def</span><span
                        style="color: #bbbebf;">&nbsp;</span><span style="color: #d2a8ff;">successors</span><span
                        style="color: #bbbebf;">(</span><span style="color: #c9d1d9;">self</span><span
                        style="color: #bbbebf;">,&nbsp;</span><span style="color: #ffa657;">state</span><span
                        style="color: #bbbebf;">:&nbsp;</span><span style="color: #c9d1d9;">Any</span><span
                        style="color: #bbbebf;">)&nbsp;-&gt;&nbsp;</span><span style="color: #4ec9b0;">dict</span><span
                        style="color: #bbbebf;">[</span><span style="color: #4ec9b0;">str</span><span
                        style="color: #bbbebf;">,&nbsp;</span><span style="color: #c9d1d9;">Any</span><span
                        style="color: #bbbebf;">]:</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #a5d6ff;">"""What&nbsp;are&nbsp;the&nbsp;possible&nbsp;successor&nbsp;states?"""</span>
        </div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c586c0;">raise</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #4ec9b0;">NotImplementedError</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #ff7b72;">def</span><span
                        style="color: #bbbebf;">&nbsp;</span><span style="color: #d2a8ff;">player</span><span
                        style="color: #bbbebf;">(</span><span style="color: #c9d1d9;">self</span><span
                        style="color: #bbbebf;">,&nbsp;</span><span style="color: #ffa657;">state</span><span
                        style="color: #bbbebf;">:&nbsp;</span><span style="color: #c9d1d9;">Any</span><span
                        style="color: #bbbebf;">)&nbsp;-&gt;&nbsp;</span><span style="color: #4ec9b0;">str</span><span
                        style="color: #bbbebf;">:</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #a5d6ff;">"""Which&nbsp;player&nbsp;should&nbsp;move&nbsp;in&nbsp;'state'?"""</span>
        </div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c586c0;">raise</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #4ec9b0;">NotImplementedError</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #ff7b72;">def</span><span
                        style="color: #bbbebf;">&nbsp;</span><span style="color: #d2a8ff;">is_end</span><span
                        style="color: #bbbebf;">(</span><span style="color: #c9d1d9;">self</span><span
                        style="color: #bbbebf;">,&nbsp;</span><span style="color: #ffa657;">state</span><span
                        style="color: #bbbebf;">:&nbsp;</span><span style="color: #c9d1d9;">Any</span><span
                        style="color: #bbbebf;">)&nbsp;-&gt;&nbsp;</span><span style="color: #4ec9b0;">bool</span><span
                        style="color: #bbbebf;">:</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #a5d6ff;">"""Is&nbsp;the&nbsp;game&nbsp;over?"""</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c586c0;">raise</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #4ec9b0;">NotImplementedError</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #ff7b72;">def</span><span
                        style="color: #bbbebf;">&nbsp;</span><span style="color: #d2a8ff;">utility</span><span
                        style="color: #bbbebf;">(</span><span style="color: #c9d1d9;">self</span><span
                        style="color: #bbbebf;">,&nbsp;</span><span style="color: #ffa657;">state</span><span
                        style="color: #bbbebf;">:&nbsp;</span><span style="color: #c9d1d9;">Any</span><span
                        style="color: #bbbebf;">)&nbsp;-&gt;&nbsp;</span><span style="color: #4ec9b0;">float</span><span
                        style="color: #bbbebf;">:</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #a5d6ff;">"""What&nbsp;is&nbsp;the&nbsp;utility&nbsp;of&nbsp;the&nbsp;game&nbsp;(for&nbsp;the&nbsp;agent)."""</span>
        </div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c586c0;">raise</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #4ec9b0;">NotImplementedError</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
        <div><span style="color: #ff7b72;">class</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #4ec9b0;">Game1</span><span style="color: #bbbebf;">(</span><span
                        style="color: #4ec9b0;">Game</span><span style="color: #bbbebf;">):</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #ff7b72;">def</span><span
                        style="color: #bbbebf;">&nbsp;</span><span style="color: #d2a8ff;">start_state</span><span
                        style="color: #bbbebf;">(</span><span style="color: #c9d1d9;">self</span><span
                        style="color: #bbbebf;">)&nbsp;-&gt;&nbsp;</span><span style="color: #c9d1d9;">Any</span><span
                        style="color: #bbbebf;">:</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c586c0;">return</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #a5d6ff;">"root"</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #ff7b72;">def</span><span
                        style="color: #bbbebf;">&nbsp;</span><span style="color: #d2a8ff;">successors</span><span
                        style="color: #bbbebf;">(</span><span style="color: #c9d1d9;">self</span><span
                        style="color: #bbbebf;">,&nbsp;</span><span style="color: #ffa657;">state</span><span
                        style="color: #bbbebf;">:&nbsp;</span><span style="color: #4ec9b0;">str</span><span
                        style="color: #bbbebf;">)&nbsp;-&gt;&nbsp;</span><span style="color: #4ec9b0;">dict</span><span
                        style="color: #bbbebf;">[</span><span style="color: #4ec9b0;">str</span><span
                        style="color: #bbbebf;">,&nbsp;</span><span style="color: #4ec9b0;">str</span><span
                        style="color: #bbbebf;">]:</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #8b949e;">#&nbsp;state&nbsp;-&gt;&nbsp;action&nbsp;-&gt;&nbsp;next&nbsp;state</span>
        </div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c9d1d9;">mapping</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">=</span><span style="color: #bbbebf;">&nbsp;{</span></div>
        <div><span
                        style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #a5d6ff;">"root"</span><span style="color: #bbbebf;">:&nbsp;{</span><span
                        style="color: #a5d6ff;">"A"</span><span style="color: #bbbebf;">:&nbsp;</span><span
                        style="color: #a5d6ff;">"A"</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #a5d6ff;">"B"</span><span style="color: #bbbebf;">:&nbsp;</span><span
                        style="color: #a5d6ff;">"B"</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #a5d6ff;">"C"</span><span style="color: #bbbebf;">:&nbsp;</span><span
                        style="color: #a5d6ff;">"C"</span><span style="color: #bbbebf;">},</span></div>
        <div><span
                        style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #a5d6ff;">"A"</span><span style="color: #bbbebf;">:&nbsp;{</span><span
                        style="color: #a5d6ff;">"1"</span><span style="color: #bbbebf;">:&nbsp;</span><span
                        style="color: #a5d6ff;">"A1"</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #a5d6ff;">"2"</span><span style="color: #bbbebf;">:&nbsp;</span><span
                        style="color: #a5d6ff;">"A2"</span><span style="color: #bbbebf;">},</span></div>
        <div><span
                        style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #a5d6ff;">"B"</span><span style="color: #bbbebf;">:&nbsp;{</span><span
                        style="color: #a5d6ff;">"1"</span><span style="color: #bbbebf;">:&nbsp;</span><span
                        style="color: #a5d6ff;">"B1"</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #a5d6ff;">"2"</span><span style="color: #bbbebf;">:&nbsp;</span><span
                        style="color: #a5d6ff;">"B2"</span><span style="color: #bbbebf;">},</span></div>
        <div><span
                        style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #a5d6ff;">"C"</span><span style="color: #bbbebf;">:&nbsp;{</span><span
                        style="color: #a5d6ff;">"1"</span><span style="color: #bbbebf;">:&nbsp;</span><span
                        style="color: #a5d6ff;">"C1"</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #a5d6ff;">"2"</span><span style="color: #bbbebf;">:&nbsp;</span><span
                        style="color: #a5d6ff;">"C2"</span><span style="color: #bbbebf;">},</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c586c0;">return</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #c9d1d9;">mapping</span><span style="color: #bbbebf;">[</span><span
                        style="color: #ffa657;">state</span><span style="color: #bbbebf;">]</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #ff7b72;">def</span><span
                        style="color: #bbbebf;">&nbsp;</span><span style="color: #d2a8ff;">player</span><span
                        style="color: #bbbebf;">(</span><span style="color: #c9d1d9;">self</span><span
                        style="color: #bbbebf;">,&nbsp;</span><span style="color: #ffa657;">state</span><span
                        style="color: #bbbebf;">:&nbsp;</span><span style="color: #c9d1d9;">Any</span><span
                        style="color: #bbbebf;">)&nbsp;-&gt;&nbsp;</span><span style="color: #4ec9b0;">str</span><span
                        style="color: #bbbebf;">:</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c586c0;">if</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #ffa657;">state</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">==</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #a5d6ff;">"root"</span><span style="color: #bbbebf;">:</span></div>
        <div><span
                        style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c586c0;">return</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #a5d6ff;">"agent"</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c586c0;">if</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #ffa657;">state</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #569cd6;">in</span><span style="color: #bbbebf;">&nbsp;[</span><span
                        style="color: #a5d6ff;">"A"</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #a5d6ff;">"B"</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #a5d6ff;">"C"</span><span style="color: #bbbebf;">]:</span></div>
        <div><span
                        style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c586c0;">return</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #a5d6ff;">"opp"</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c586c0;">raise</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #4ec9b0;">ValueError</span><span style="color: #bbbebf;">(</span><span
                        style="color: #ff7b72;">f</span><span
                        style="color: #a5d6ff;">"Invalid&nbsp;state:&nbsp;</span><span
                        style="color: #ff7b72;">{</span><span style="color: #ffa657;">state</span><span
                        style="color: #ff7b72;">}</span><span style="color: #a5d6ff;">"</span><span
                        style="color: #bbbebf;">)</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #ff7b72;">def</span><span
                        style="color: #bbbebf;">&nbsp;</span><span style="color: #d2a8ff;">is_end</span><span
                        style="color: #bbbebf;">(</span><span style="color: #c9d1d9;">self</span><span
                        style="color: #bbbebf;">,&nbsp;</span><span style="color: #ffa657;">state</span><span
                        style="color: #bbbebf;">:&nbsp;</span><span style="color: #c9d1d9;">Any</span><span
                        style="color: #bbbebf;">)&nbsp;-&gt;&nbsp;</span><span style="color: #4ec9b0;">bool</span><span
                        style="color: #bbbebf;">:</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c586c0;">return</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #ffa657;">state</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #569cd6;">in</span><span style="color: #bbbebf;">&nbsp;[</span><span
                        style="color: #a5d6ff;">"A1"</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #a5d6ff;">"A2"</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #a5d6ff;">"B1"</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #a5d6ff;">"B2"</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #a5d6ff;">"C1"</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #a5d6ff;">"C2"</span><span style="color: #bbbebf;">]</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #ff7b72;">def</span><span
                        style="color: #bbbebf;">&nbsp;</span><span style="color: #d2a8ff;">utility</span><span
                        style="color: #bbbebf;">(</span><span style="color: #c9d1d9;">self</span><span
                        style="color: #bbbebf;">,&nbsp;</span><span style="color: #ffa657;">state</span><span
                        style="color: #bbbebf;">:&nbsp;</span><span style="color: #c9d1d9;">Any</span><span
                        style="color: #bbbebf;">)&nbsp;-&gt;&nbsp;</span><span style="color: #4ec9b0;">float</span><span
                        style="color: #bbbebf;">:</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c9d1d9;">utilities</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">=</span><span style="color: #bbbebf;">&nbsp;{</span></div>
        <div><span
                        style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #a5d6ff;">"A1"</span><span style="color: #bbbebf;">:&nbsp;</span><span
                        style="color: #d4d4d4;">-</span><span style="color: #b5cea8;">50</span><span
                        style="color: #bbbebf;">,</span></div>
        <div><span
                        style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #a5d6ff;">"A2"</span><span style="color: #bbbebf;">:&nbsp;</span><span
                        style="color: #b5cea8;">50</span><span style="color: #bbbebf;">,</span></div>
        <div><span
                        style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #a5d6ff;">"B1"</span><span style="color: #bbbebf;">:&nbsp;</span><span
                        style="color: #b5cea8;">1</span><span style="color: #bbbebf;">,</span></div>
        <div><span
                        style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #a5d6ff;">"B2"</span><span style="color: #bbbebf;">:&nbsp;</span><span
                        style="color: #b5cea8;">3</span><span style="color: #bbbebf;">,</span></div>
        <div><span
                        style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #a5d6ff;">"C1"</span><span style="color: #bbbebf;">:&nbsp;</span><span
                        style="color: #d4d4d4;">-</span><span style="color: #b5cea8;">5</span><span
                        style="color: #bbbebf;">,</span></div>
        <div><span
                        style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #a5d6ff;">"C2"</span><span style="color: #bbbebf;">:&nbsp;</span><span
                        style="color: #b5cea8;">15</span><span style="color: #bbbebf;">,</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c586c0;">return</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #c9d1d9;">utilities</span><span style="color: #bbbebf;">[</span><span
                        style="color: #ffa657;">state</span><span style="color: #bbbebf;">]</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
        <div><span style="color: #d2a8ff;">@</span><span style="color: #d2a8ff;">dataclass</span><span
                        style="color: #bbbebf;">(</span><span style="color: #ffa657;">frozen</span><span
                        style="color: #d4d4d4;">=</span><span style="color: #569cd6;">True</span><span
                        style="color: #bbbebf;">)</span></div>
        <div><span style="color: #ff7b72;">class</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #4ec9b0;">HalvingState</span><span style="color: #bbbebf;">:</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #c9d1d9;">n</span><span
                        style="color: #bbbebf;">:&nbsp;</span><span style="color: #4ec9b0;">int</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c9d1d9;">player</span><span style="color: #bbbebf;">:&nbsp;</span><span
                        style="color: #4ec9b0;">str</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #ff7b72;">def</span><span
                        style="color: #bbbebf;">&nbsp;</span><span style="color: #dcdcaa;">__str__</span><span
                        style="color: #bbbebf;">(</span><span style="color: #c9d1d9;">self</span><span
                        style="color: #bbbebf;">)&nbsp;-&gt;&nbsp;</span><span style="color: #4ec9b0;">str</span><span
                        style="color: #bbbebf;">:</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c586c0;">return</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #ff7b72;">f</span><span style="color: #a5d6ff;">"(</span><span
                        style="color: #ff7b72;">{</span><span style="color: #c9d1d9;">self</span><span
                        style="color: #bbbebf;">.</span><span style="color: #c9d1d9;">n</span><span
                        style="color: #ff7b72;">}</span><span style="color: #a5d6ff;">,&nbsp;</span><span
                        style="color: #ff7b72;">{</span><span style="color: #c9d1d9;">self</span><span
                        style="color: #bbbebf;">.</span><span style="color: #c9d1d9;">player</span><span
                        style="color: #ff7b72;">}</span><span style="color: #a5d6ff;">)"</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
        <div><span style="color: #ff7b72;">class</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #4ec9b0;">HalvingGame</span><span style="color: #bbbebf;">(</span><span
                        style="color: #4ec9b0;">Game</span><span style="color: #bbbebf;">):</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #a5d6ff;">"""</span></div>
        <div><span style="color: #a5d6ff;">&nbsp;&nbsp;&nbsp;&nbsp;Halving&nbsp;game:</span></div>
        <div><span
                        style="color: #a5d6ff;">&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;Two&nbsp;players&nbsp;take&nbsp;turns&nbsp;halving&nbsp;or&nbsp;decrementing&nbsp;a&nbsp;number.</span>
        </div>
        <div><span
                        style="color: #a5d6ff;">&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;The&nbsp;player&nbsp;that&nbsp;is&nbsp;left&nbsp;with&nbsp;0&nbsp;wins.</span>
        </div>
        <div><span style="color: #a5d6ff;">&nbsp;&nbsp;&nbsp;&nbsp;"""</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #ff7b72;">def</span><span
                        style="color: #bbbebf;">&nbsp;</span><span style="color: #dcdcaa;">__init__</span><span
                        style="color: #bbbebf;">(</span><span style="color: #c9d1d9;">self</span><span
                        style="color: #bbbebf;">,&nbsp;</span><span style="color: #ffa657;">n</span><span
                        style="color: #bbbebf;">:&nbsp;</span><span style="color: #4ec9b0;">int</span><span
                        style="color: #bbbebf;">):</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c9d1d9;">self</span><span style="color: #bbbebf;">.</span><span
                        style="color: #c9d1d9;">n</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">=</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #ffa657;">n</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #ff7b72;">def</span><span
                        style="color: #bbbebf;">&nbsp;</span><span style="color: #d2a8ff;">start_state</span><span
                        style="color: #bbbebf;">(</span><span style="color: #c9d1d9;">self</span><span
                        style="color: #bbbebf;">)&nbsp;-&gt;&nbsp;</span><span style="color: #c9d1d9;">Any</span><span
                        style="color: #bbbebf;">:</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c586c0;">return</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #4ec9b0;">HalvingState</span><span style="color: #bbbebf;">(</span><span
                        style="color: #c9d1d9;">n</span><span style="color: #d4d4d4;">=</span><span
                        style="color: #c9d1d9;">self</span><span style="color: #bbbebf;">.</span><span
                        style="color: #c9d1d9;">n</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #c9d1d9;">player</span><span style="color: #d4d4d4;">=</span><span
                        style="color: #a5d6ff;">"agent"</span><span style="color: #bbbebf;">)</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #ff7b72;">def</span><span
                        style="color: #bbbebf;">&nbsp;</span><span style="color: #d2a8ff;">successors</span><span
                        style="color: #bbbebf;">(</span><span style="color: #c9d1d9;">self</span><span
                        style="color: #bbbebf;">,&nbsp;</span><span style="color: #ffa657;">state</span><span
                        style="color: #bbbebf;">:&nbsp;</span><span style="color: #4ec9b0;">HalvingState</span><span
                        style="color: #bbbebf;">)&nbsp;-&gt;&nbsp;</span><span style="color: #4ec9b0;">dict</span><span
                        style="color: #bbbebf;">[</span><span style="color: #4ec9b0;">str</span><span
                        style="color: #bbbebf;">,&nbsp;</span><span style="color: #c9d1d9;">Any</span><span
                        style="color: #bbbebf;">]:</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c9d1d9;">next_player</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">=</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #a5d6ff;">"opp"</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #c586c0;">if</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #ffa657;">state</span><span style="color: #bbbebf;">.</span><span
                        style="color: #c9d1d9;">player</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">==</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #a5d6ff;">"agent"</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #c586c0;">else</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #a5d6ff;">"agent"</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c586c0;">return</span><span style="color: #bbbebf;">&nbsp;{</span></div>
        <div><span
                        style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #a5d6ff;">"decrement"</span><span style="color: #bbbebf;">:&nbsp;</span><span
                        style="color: #4ec9b0;">HalvingState</span><span style="color: #bbbebf;">(</span><span
                        style="color: #c9d1d9;">n</span><span style="color: #d4d4d4;">=</span><span
                        style="color: #ffa657;">state</span><span style="color: #bbbebf;">.</span><span
                        style="color: #c9d1d9;">n</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">-</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #b5cea8;">1</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #c9d1d9;">player</span><span style="color: #d4d4d4;">=</span><span
                        style="color: #c9d1d9;">next_player</span><span style="color: #bbbebf;">),</span></div>
        <div><span
                        style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #a5d6ff;">"half"</span><span style="color: #bbbebf;">:&nbsp;</span><span
                        style="color: #4ec9b0;">HalvingState</span><span style="color: #bbbebf;">(</span><span
                        style="color: #c9d1d9;">n</span><span style="color: #d4d4d4;">=</span><span
                        style="color: #ffa657;">state</span><span style="color: #bbbebf;">.</span><span
                        style="color: #c9d1d9;">n</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">//</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #b5cea8;">2</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #c9d1d9;">player</span><span style="color: #d4d4d4;">=</span><span
                        style="color: #c9d1d9;">next_player</span><span style="color: #bbbebf;">),</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #ff7b72;">def</span><span
                        style="color: #bbbebf;">&nbsp;</span><span style="color: #d2a8ff;">player</span><span
                        style="color: #bbbebf;">(</span><span style="color: #c9d1d9;">self</span><span
                        style="color: #bbbebf;">,&nbsp;</span><span style="color: #ffa657;">state</span><span
                        style="color: #bbbebf;">:&nbsp;</span><span style="color: #4ec9b0;">HalvingState</span><span
                        style="color: #bbbebf;">)&nbsp;-&gt;&nbsp;</span><span style="color: #4ec9b0;">str</span><span
                        style="color: #bbbebf;">:</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c586c0;">return</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #ffa657;">state</span><span style="color: #bbbebf;">.</span><span
                        style="color: #c9d1d9;">player</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #ff7b72;">def</span><span
                        style="color: #bbbebf;">&nbsp;</span><span style="color: #d2a8ff;">is_end</span><span
                        style="color: #bbbebf;">(</span><span style="color: #c9d1d9;">self</span><span
                        style="color: #bbbebf;">,&nbsp;</span><span style="color: #ffa657;">state</span><span
                        style="color: #bbbebf;">:&nbsp;</span><span style="color: #4ec9b0;">HalvingState</span><span
                        style="color: #bbbebf;">)&nbsp;-&gt;&nbsp;</span><span style="color: #4ec9b0;">bool</span><span
                        style="color: #bbbebf;">:</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c586c0;">return</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #ffa657;">state</span><span style="color: #bbbebf;">.</span><span
                        style="color: #c9d1d9;">n</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">==</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #b5cea8;">0</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #ff7b72;">def</span><span
                        style="color: #bbbebf;">&nbsp;</span><span style="color: #d2a8ff;">utility</span><span
                        style="color: #bbbebf;">(</span><span style="color: #c9d1d9;">self</span><span
                        style="color: #bbbebf;">,&nbsp;</span><span style="color: #ffa657;">state</span><span
                        style="color: #bbbebf;">:&nbsp;</span><span style="color: #4ec9b0;">HalvingState</span><span
                        style="color: #bbbebf;">)&nbsp;-&gt;&nbsp;</span><span style="color: #4ec9b0;">float</span><span
                        style="color: #bbbebf;">:</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c586c0;">assert</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #ffa657;">state</span><span style="color: #bbbebf;">.</span><span
                        style="color: #c9d1d9;">n</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">==</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #b5cea8;">0</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c586c0;">if</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #ffa657;">state</span><span style="color: #bbbebf;">.</span><span
                        style="color: #c9d1d9;">player</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">==</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #a5d6ff;">"agent"</span><span style="color: #bbbebf;">:</span></div>
        <div><span
                        style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c586c0;">return</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">+</span><span style="color: #b5cea8;">1</span><span
                        style="color: #bbbebf;">&nbsp;&nbsp;</span><span
                        style="color: #8b949e;">#&nbsp;Agent&nbsp;wins</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c586c0;">else</span><span style="color: #bbbebf;">:</span></div>
        <div><span
                        style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c586c0;">return</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">-</span><span style="color: #b5cea8;">1</span><span
                        style="color: #bbbebf;">&nbsp;&nbsp;</span><span
                        style="color: #8b949e;">#&nbsp;Opponent&nbsp;wins</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
        <div><span style="color: #d2a8ff;">@</span><span style="color: #d2a8ff;">dataclass</span><span
                        style="color: #bbbebf;">(</span><span style="color: #ffa657;">frozen</span><span
                        style="color: #d4d4d4;">=</span><span style="color: #569cd6;">True</span><span
                        style="color: #bbbebf;">)</span></div>
        <div><span style="color: #ff7b72;">class</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #4ec9b0;">Step</span><span style="color: #bbbebf;">:</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #a5d6ff;">"""Represents&nbsp;a&nbsp;step&nbsp;in&nbsp;a&nbsp;game&nbsp;(action&nbsp;and&nbsp;resulting&nbsp;state)."""</span>
        </div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c9d1d9;">action</span><span style="color: #bbbebf;">:&nbsp;</span><span
                        style="color: #c9d1d9;">Any</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c9d1d9;">state</span><span style="color: #bbbebf;">:&nbsp;</span><span
                        style="color: #c9d1d9;">Any</span></div>
        <div><br></div>
        <div><span style="color: #d2a8ff;">@</span><span style="color: #d2a8ff;">dataclass</span><span
                        style="color: #bbbebf;">(</span><span style="color: #ffa657;">frozen</span><span
                        style="color: #d4d4d4;">=</span><span style="color: #569cd6;">True</span><span
                        style="color: #bbbebf;">)</span></div>
        <div><span style="color: #ff7b72;">class</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #4ec9b0;">Rollout</span><span style="color: #bbbebf;">:</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #a5d6ff;">"""Represents&nbsp;a&nbsp;rollout&nbsp;of&nbsp;a&nbsp;game&nbsp;(sequence&nbsp;of&nbsp;actions&nbsp;that&nbsp;produces&nbsp;a&nbsp;utility)."""</span>
        </div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c9d1d9;">steps</span><span style="color: #bbbebf;">:&nbsp;</span><span
                        style="color: #4ec9b0;">list</span><span style="color: #bbbebf;">[</span><span
                        style="color: #4ec9b0;">Step</span><span style="color: #bbbebf;">]</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c9d1d9;">utility</span><span style="color: #bbbebf;">:&nbsp;</span><span
                        style="color: #4ec9b0;">float</span></div>
        <div><br></div>
        <div><span style="color: #ff7b72;">def</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d2a8ff;">simulate</span><span style="color: #bbbebf;">(</span><span
                        style="color: #ffa657;">game</span><span style="color: #bbbebf;">:&nbsp;</span><span
                        style="color: #4ec9b0;">Game</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #ffa657;">policies</span><span style="color: #bbbebf;">:&nbsp;</span><span
                        style="color: #4ec9b0;">dict</span><span style="color: #bbbebf;">[</span><span
                        style="color: #4ec9b0;">str</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #c9d1d9;">Policy</span><span
                        style="color: #bbbebf;">])&nbsp;-&gt;&nbsp;</span><span
                        style="color: #4ec9b0;">Rollout</span><span style="color: #bbbebf;">:</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #a5d6ff;">"""Simulate&nbsp;the&nbsp;game&nbsp;from&nbsp;the&nbsp;start&nbsp;state&nbsp;using&nbsp;the&nbsp;policy."""</span>
        </div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c9d1d9;">state</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">=</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #ffa657;">game</span><span style="color: #bbbebf;">.</span><span
                        style="color: #d2a8ff;">start_state</span><span style="color: #bbbebf;">()&nbsp;&nbsp;</span>
        </div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c9d1d9;">steps</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">=</span><span style="color: #bbbebf;">&nbsp;[]</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c586c0;">while</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #569cd6;">not</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #ffa657;">game</span><span style="color: #bbbebf;">.</span><span
                        style="color: #d2a8ff;">is_end</span><span style="color: #bbbebf;">(</span><span
                        style="color: #c9d1d9;">state</span><span style="color: #bbbebf;">):&nbsp;&nbsp;</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #8b949e;">#&nbsp;Player&nbsp;whose&nbsp;turn&nbsp;it&nbsp;is&nbsp;chooses&nbsp;an&nbsp;action</span>
        </div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c9d1d9;">player</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">=</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #ffa657;">game</span><span style="color: #bbbebf;">.</span><span
                        style="color: #d2a8ff;">player</span><span style="color: #bbbebf;">(</span><span
                        style="color: #c9d1d9;">state</span><span style="color: #bbbebf;">)&nbsp;&nbsp;</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c9d1d9;">actions</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">=</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #ffa657;">policies</span><span style="color: #bbbebf;">[</span><span
                        style="color: #c9d1d9;">player</span><span style="color: #bbbebf;">](</span><span
                        style="color: #c9d1d9;">state</span><span style="color: #bbbebf;">)&nbsp;&nbsp;</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c9d1d9;">action</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">=</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d2a8ff;">sample_dict</span><span style="color: #bbbebf;">(</span><span
                        style="color: #c9d1d9;">actions</span><span style="color: #bbbebf;">)&nbsp;&nbsp;</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #8b949e;">#&nbsp;Advance&nbsp;the&nbsp;game&nbsp;state</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c9d1d9;">state</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">=</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #ffa657;">game</span><span style="color: #bbbebf;">.</span><span
                        style="color: #d2a8ff;">successors</span><span style="color: #bbbebf;">(</span><span
                        style="color: #c9d1d9;">state</span><span style="color: #bbbebf;">)[</span><span
                        style="color: #c9d1d9;">action</span><span style="color: #bbbebf;">]&nbsp;&nbsp;</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c9d1d9;">steps</span><span style="color: #bbbebf;">.</span><span
                        style="color: #d2a8ff;">append</span><span style="color: #bbbebf;">(</span><span
                        style="color: #4ec9b0;">Step</span><span style="color: #bbbebf;">(</span><span
                        style="color: #c9d1d9;">action</span><span style="color: #d4d4d4;">=</span><span
                        style="color: #c9d1d9;">action</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #c9d1d9;">state</span><span style="color: #d4d4d4;">=</span><span
                        style="color: #c9d1d9;">state</span><span style="color: #bbbebf;">))&nbsp;&nbsp;</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #8b949e;">#&nbsp;See&nbsp;who&nbsp;wins?</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c9d1d9;">utility</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">=</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #ffa657;">game</span><span style="color: #bbbebf;">.</span><span
                        style="color: #d2a8ff;">utility</span><span style="color: #bbbebf;">(</span><span
                        style="color: #c9d1d9;">state</span><span style="color: #bbbebf;">)&nbsp;&nbsp;</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c586c0;">return</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #4ec9b0;">Rollout</span><span style="color: #bbbebf;">(</span><span
                        style="color: #c9d1d9;">steps</span><span style="color: #d4d4d4;">=</span><span
                        style="color: #c9d1d9;">steps</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #c9d1d9;">utility</span><span style="color: #d4d4d4;">=</span><span
                        style="color: #c9d1d9;">utility</span><span style="color: #bbbebf;">)</span></div>
        <div><br></div>
        <div><br></div>
        <div><span
                        style="color: #8b949e;">#&nbsp;--------------------&nbsp;game_evaluation()&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        </div>
        <div><span
                        style="color: #8b949e;">#&nbsp;#&nbsp;Play&nbsp;the&nbsp;game&nbsp;and&nbsp;see&nbsp;who&nbsp;wins</span>
        </div>
        <div><br></div>
        <div><span style="color: #ff7b72;">def</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d2a8ff;">always_choose_a_policy</span><span style="color: #bbbebf;">(</span><span
                        style="color: #ffa657;">state</span><span style="color: #bbbebf;">:&nbsp;</span><span
                        style="color: #c9d1d9;">State</span><span style="color: #bbbebf;">)&nbsp;-&gt;&nbsp;</span><span
                        style="color: #4ec9b0;">dict</span><span style="color: #bbbebf;">[</span><span
                        style="color: #c9d1d9;">Action</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #4ec9b0;">float</span><span style="color: #bbbebf;">]:</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c586c0;">return</span><span style="color: #bbbebf;">&nbsp;{</span><span
                        style="color: #a5d6ff;">"A"</span><span style="color: #bbbebf;">:&nbsp;</span><span
                        style="color: #b5cea8;">1</span><span style="color: #bbbebf;">}</span></div>
        <div><br></div>
        <div><span
                        style="color: #8b949e;">#&nbsp;Opponent&nbsp;chooses&nbsp;randomly&nbsp;between&nbsp;1&nbsp;and&nbsp;2</span>
        </div>
        <div><span style="color: #ff7b72;">def</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d2a8ff;">random_policy</span><span style="color: #bbbebf;">(</span><span
                        style="color: #ffa657;">state</span><span style="color: #bbbebf;">:&nbsp;</span><span
                        style="color: #c9d1d9;">State</span><span style="color: #bbbebf;">)&nbsp;-&gt;&nbsp;</span><span
                        style="color: #4ec9b0;">dict</span><span style="color: #bbbebf;">[</span><span
                        style="color: #c9d1d9;">Action</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #4ec9b0;">float</span><span style="color: #bbbebf;">]:</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c586c0;">return</span><span style="color: #bbbebf;">&nbsp;{</span><span
                        style="color: #a5d6ff;">"1"</span><span style="color: #bbbebf;">:&nbsp;</span><span
                        style="color: #b5cea8;">0.5</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #a5d6ff;">"2"</span><span style="color: #bbbebf;">:&nbsp;</span><span
                        style="color: #b5cea8;">0.5</span><span style="color: #bbbebf;">}</span></div>
        <div><br></div>
        <div><span style="color: #c9d1d9;">policies</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">=</span><span style="color: #bbbebf;">&nbsp;{</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #a5d6ff;">"agent"</span><span style="color: #bbbebf;">:&nbsp;</span><span
                        style="color: #d2a8ff;">always_choose_a_policy</span><span style="color: #bbbebf;">,</span>
        </div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #a5d6ff;">"opp"</span><span style="color: #bbbebf;">:&nbsp;</span><span
                        style="color: #d2a8ff;">random_policy</span><span style="color: #bbbebf;">,</span></div>
        <div><span style="color: #bbbebf;">}</span></div>
        <div><span style="color: #c9d1d9;">game</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">=</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #4ec9b0;">Game1</span><span style="color: #bbbebf;">()</span></div>
        <div><br></div>
        <div><span style="color: #d2a8ff;">set_random_seed</span><span style="color: #bbbebf;">(</span><span
                        style="color: #b5cea8;">1</span><span style="color: #bbbebf;">)</span></div>
        <div><span style="color: #c9d1d9;">utility</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">=</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d2a8ff;">simulate</span><span style="color: #bbbebf;">(</span><span
                        style="color: #c9d1d9;">game</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #c9d1d9;">policies</span><span style="color: #bbbebf;">)</span></div>
        <div><br></div>
        <div><br></div>
        <div><span
                        style="color: #8b949e;">#&nbsp;---------------------------------&nbsp;instead&nbsp;of&nbsp;simulate,&nbsp;calculate&nbsp;the&nbsp;expected&nbsp;value&nbsp;(ie.&nbsp;game&nbsp;evaluation)</span>
        </div>
        <div><br></div>
        <div><span
                        style="color: #8b949e;">#&nbsp;V_eval(s)&nbsp;-&nbsp;calculate&nbsp;expected&nbsp;value&nbsp;at&nbsp;leaf&nbsp;nodes&nbsp;and&nbsp;work&nbsp;backward&nbsp;to&nbsp;root</span>
        </div>
        <div><span
                        style="color: #8b949e;">#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;note:&nbsp;This&nbsp;computation&nbsp;is&nbsp;exact,&nbsp;but&nbsp;could&nbsp;take&nbsp;exponential&nbsp;time!</span>
        </div>
        <div><br></div>
        <div><span style="color: #ff7b72;">def</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d2a8ff;">V_eval</span><span style="color: #bbbebf;">(</span><span
                        style="color: #ffa657;">game</span><span style="color: #bbbebf;">:&nbsp;</span><span
                        style="color: #4ec9b0;">Game</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #ffa657;">policies</span><span style="color: #bbbebf;">:&nbsp;</span><span
                        style="color: #4ec9b0;">dict</span><span style="color: #bbbebf;">[</span><span
                        style="color: #4ec9b0;">str</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #c9d1d9;">Policy</span><span style="color: #bbbebf;">],&nbsp;</span><span
                        style="color: #ffa657;">state</span><span style="color: #bbbebf;">:&nbsp;</span><span
                        style="color: #c9d1d9;">Any</span><span style="color: #bbbebf;">)&nbsp;-&gt;&nbsp;</span><span
                        style="color: #4ec9b0;">float</span><span style="color: #bbbebf;">:</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #a5d6ff;">"""Return&nbsp;the&nbsp;value&nbsp;of&nbsp;the&nbsp;game."""</span>
        </div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #8b949e;">#&nbsp;At&nbsp;the&nbsp;end&nbsp;of&nbsp;the&nbsp;game?</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #c586c0;">if</span><span
                        style="color: #bbbebf;">&nbsp;</span><span style="color: #ffa657;">game</span><span
                        style="color: #bbbebf;">.</span><span style="color: #d2a8ff;">is_end</span><span
                        style="color: #bbbebf;">(</span><span style="color: #ffa657;">state</span><span
                        style="color: #bbbebf;">):&nbsp;&nbsp;</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c586c0;">return</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #ffa657;">game</span><span style="color: #bbbebf;">.</span><span
                        style="color: #d2a8ff;">utility</span><span style="color: #bbbebf;">(</span><span
                        style="color: #ffa657;">state</span><span style="color: #bbbebf;">)&nbsp;&nbsp;</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #8b949e;">#&nbsp;Whose&nbsp;turn&nbsp;is&nbsp;it?</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c9d1d9;">player</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">=</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #ffa657;">game</span><span style="color: #bbbebf;">.</span><span
                        style="color: #d2a8ff;">player</span><span style="color: #bbbebf;">(</span><span
                        style="color: #ffa657;">state</span><span style="color: #bbbebf;">)&nbsp;&nbsp;</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c9d1d9;">policy</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">=</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #ffa657;">policies</span><span style="color: #bbbebf;">[</span><span
                        style="color: #c9d1d9;">player</span><span style="color: #bbbebf;">]</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #8b949e;">#&nbsp;Try&nbsp;all&nbsp;actions</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c9d1d9;">value</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">=</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #b5cea8;">0</span><span style="color: #bbbebf;">&nbsp;&nbsp;</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #c586c0;">for</span><span
                        style="color: #bbbebf;">&nbsp;</span><span style="color: #c9d1d9;">action</span><span
                        style="color: #bbbebf;">,&nbsp;</span><span style="color: #c9d1d9;">prob</span><span
                        style="color: #bbbebf;">&nbsp;</span><span style="color: #c586c0;">in</span><span
                        style="color: #bbbebf;">&nbsp;</span><span style="color: #c9d1d9;">policy</span><span
                        style="color: #bbbebf;">(</span><span style="color: #ffa657;">state</span><span
                        style="color: #bbbebf;">).items():&nbsp;&nbsp;</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c9d1d9;">next_state</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">=</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #ffa657;">game</span><span style="color: #bbbebf;">.</span><span
                        style="color: #d2a8ff;">successors</span><span style="color: #bbbebf;">(</span><span
                        style="color: #ffa657;">state</span><span style="color: #bbbebf;">)[</span><span
                        style="color: #c9d1d9;">action</span><span style="color: #bbbebf;">]&nbsp;&nbsp;</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c9d1d9;">value</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">+=</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #c9d1d9;">prob</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">*</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d2a8ff;">V_eval</span><span style="color: #bbbebf;">(</span><span
                        style="color: #ffa657;">game</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #ffa657;">policies</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #c9d1d9;">next_state</span><span style="color: #bbbebf;">)&nbsp;&nbsp;</span>
        </div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c586c0;">return</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #c9d1d9;">value</span></div>
        <div><br></div>
        <div><br></div>
        <div><span style="color: #c9d1d9;">state</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">=</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #c9d1d9;">game</span><span style="color: #bbbebf;">.</span><span
                        style="color: #d2a8ff;">start_state</span><span style="color: #bbbebf;">()</span></div>
        <div><span style="color: #c9d1d9;">value</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">=</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d2a8ff;">V_eval</span><span style="color: #bbbebf;">(</span><span
                        style="color: #c9d1d9;">game</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #c9d1d9;">policies</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #c9d1d9;">state</span><span style="color: #bbbebf;">)</span></div>
        <div><span style="color: #d2a8ff;">print</span><span style="color: #bbbebf;">(</span><span
                        style="color: #ff7b72;">f</span><span
                        style="color: #a5d6ff;">"expected&nbsp;value&nbsp;for&nbsp;agent&nbsp;using&nbsp;a&nbsp;static&nbsp;policy:&nbsp;</span><span
                        style="color: #ff7b72;">{</span><span style="color: #c9d1d9;">value</span><span
                        style="color: #ff7b72;">}</span><span style="color: #a5d6ff;">"</span><span
                        style="color: #bbbebf;">)</span></div>
        <div><br></div>
        <div><span
                        style="color: #8b949e;">#&nbsp;note:&nbsp;This&nbsp;computation&nbsp;is&nbsp;exact,&nbsp;but&nbsp;could&nbsp;take&nbsp;exponential&nbsp;time!</span>
        </div>
        <div><br></div>
        <div><span style="color: #a5d6ff;">'''</span></div>
        <div><span style="color: #a5d6ff;">Summary:</span></div>
        <div><span
                        style="color: #a5d6ff;">&nbsp;-&nbsp;Value&nbsp;is&nbsp;the&nbsp;expected&nbsp;utility&nbsp;of&nbsp;the&nbsp;game</span>
        </div>
        <div><span
                        style="color: #a5d6ff;">&nbsp;-&nbsp;Monte&nbsp;Carlo:&nbsp;we&nbsp;can&nbsp;simulate&nbsp;the&nbsp;game&nbsp;and&nbsp;average&nbsp;the&nbsp;utilities</span>
        </div>
        <div><span
                        style="color: #a5d6ff;">&nbsp;-&nbsp;Recurrence&nbsp;to&nbsp;compute&nbsp;value&nbsp;exactly&nbsp;(but&nbsp;could&nbsp;take&nbsp;exponential&nbsp;time!)</span>
        </div>
        <div><span
                        style="color: #a5d6ff;">&nbsp;-&nbsp;Analogous&nbsp;to&nbsp;policy&nbsp;evaluation&nbsp;in&nbsp;MDPs</span>
        </div>
        <div><br></div>
        <div><span style="color: #a5d6ff;">'''</span></div>
        <div><br></div>
        <div><span style="color: #8b949e;">#&nbsp;-----------------------------</span></div>
        <div><span
                        style="color: #8b949e;">#&nbsp;expectimax()&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        </div>
        <div><span
                        style="color: #8b949e;">#&nbsp;#&nbsp;Assume&nbsp;the&nbsp;opponent&nbsp;is&nbsp;playing&nbsp;a&nbsp;fixed&nbsp;strategy</span>
        </div>
        <div><br></div>
        <div><span
                        style="color: #8b949e;">#&nbsp;Previously:&nbsp;we&nbsp;can&nbsp;evaluate&nbsp;a&nbsp;fixed&nbsp;agent&nbsp;policy&nbsp;-&nbsp;previously&nbsp;always&nbsp;chose&nbsp;A</span>
        </div>
        <div><span
                        style="color: #8b949e;">#&nbsp;Now:&nbsp;find&nbsp;the&nbsp;optimal&nbsp;agent&nbsp;policy&nbsp;-&nbsp;agent&nbsp;chooses&nbsp;the&nbsp;max&nbsp;return&nbsp;value</span>
        </div>
        <div><span style="color: #8b949e;">#&nbsp;opponent&nbsp;still&nbsp;uses&nbsp;a&nbsp;random&nbsp;policy</span>
        </div>
        <div><br></div>
        <div><span style="color: #ff7b72;">def</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d2a8ff;">V_exptmax</span><span style="color: #bbbebf;">(</span><span
                        style="color: #ffa657;">game</span><span style="color: #bbbebf;">:&nbsp;</span><span
                        style="color: #4ec9b0;">Game</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #ffa657;">opp_policy</span><span style="color: #bbbebf;">:&nbsp;</span><span
                        style="color: #c9d1d9;">Policy</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #ffa657;">state</span><span style="color: #bbbebf;">:&nbsp;</span><span
                        style="color: #c9d1d9;">Any</span><span style="color: #bbbebf;">)&nbsp;-&gt;&nbsp;</span><span
                        style="color: #4ec9b0;">float</span><span style="color: #bbbebf;">:</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #a5d6ff;">"""Return&nbsp;the&nbsp;value&nbsp;of&nbsp;the&nbsp;game."""</span>
        </div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #8b949e;">#&nbsp;At&nbsp;the&nbsp;end&nbsp;of&nbsp;the&nbsp;game?</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #c586c0;">if</span><span
                        style="color: #bbbebf;">&nbsp;</span><span style="color: #ffa657;">game</span><span
                        style="color: #bbbebf;">.</span><span style="color: #d2a8ff;">is_end</span><span
                        style="color: #bbbebf;">(</span><span style="color: #ffa657;">state</span><span
                        style="color: #bbbebf;">):&nbsp;&nbsp;</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c586c0;">return</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #ffa657;">game</span><span style="color: #bbbebf;">.</span><span
                        style="color: #d2a8ff;">utility</span><span style="color: #bbbebf;">(</span><span
                        style="color: #ffa657;">state</span><span style="color: #bbbebf;">)&nbsp;&nbsp;</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #8b949e;">#&nbsp;Whose&nbsp;turn&nbsp;is&nbsp;it?</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c9d1d9;">player</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">=</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #ffa657;">game</span><span style="color: #bbbebf;">.</span><span
                        style="color: #d2a8ff;">player</span><span style="color: #bbbebf;">(</span><span
                        style="color: #ffa657;">state</span><span style="color: #bbbebf;">)&nbsp;&nbsp;</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #c586c0;">if</span><span
                        style="color: #bbbebf;">&nbsp;</span><span style="color: #c9d1d9;">player</span><span
                        style="color: #bbbebf;">&nbsp;</span><span style="color: #d4d4d4;">==</span><span
                        style="color: #bbbebf;">&nbsp;</span><span style="color: #a5d6ff;">"agent"</span><span
                        style="color: #bbbebf;">:</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #8b949e;">#&nbsp;Choose&nbsp;the&nbsp;action&nbsp;(next&nbsp;state)&nbsp;that&nbsp;maximizes&nbsp;utility</span>
        </div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c9d1d9;">next_states</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">=</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #4ec9b0;">list</span><span style="color: #bbbebf;">(</span><span
                        style="color: #ffa657;">game</span><span style="color: #bbbebf;">.</span><span
                        style="color: #d2a8ff;">successors</span><span style="color: #bbbebf;">(</span><span
                        style="color: #ffa657;">state</span><span style="color: #bbbebf;">).</span><span
                        style="color: #d2a8ff;">values</span><span style="color: #bbbebf;">())&nbsp;&nbsp;</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c9d1d9;">values</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">=</span><span style="color: #bbbebf;">&nbsp;[</span><span
                        style="color: #d2a8ff;">V_exptmax</span><span style="color: #bbbebf;">(</span><span
                        style="color: #ffa657;">game</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #ffa657;">opp_policy</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #c9d1d9;">next_state</span><span style="color: #bbbebf;">)&nbsp;</span><span
                        style="color: #c586c0;">for</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #c9d1d9;">next_state</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #c586c0;">in</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #c9d1d9;">next_states</span><span style="color: #bbbebf;">]&nbsp;&nbsp;</span>
        </div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c9d1d9;">value</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">=</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #4ec9b0;">np</span><span style="color: #bbbebf;">.</span><span
                        style="color: #c9d1d9;">max</span><span style="color: #bbbebf;">(</span><span
                        style="color: #c9d1d9;">values</span><span style="color: #bbbebf;">)&nbsp;&nbsp;</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c586c0;">return</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #c9d1d9;">value</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #c586c0;">elif</span><span
                        style="color: #bbbebf;">&nbsp;</span><span style="color: #c9d1d9;">player</span><span
                        style="color: #bbbebf;">&nbsp;</span><span style="color: #d4d4d4;">==</span><span
                        style="color: #bbbebf;">&nbsp;</span><span style="color: #a5d6ff;">"opp"</span><span
                        style="color: #bbbebf;">:</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #8b949e;">#&nbsp;Follow&nbsp;the&nbsp;opponent's&nbsp;policy</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c9d1d9;">successors</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">=</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #ffa657;">game</span><span style="color: #bbbebf;">.</span><span
                        style="color: #d2a8ff;">successors</span><span style="color: #bbbebf;">(</span><span
                        style="color: #ffa657;">state</span><span style="color: #bbbebf;">)&nbsp;&nbsp;</span><span
                        style="color: #8b949e;">#&nbsp;action&nbsp;-&gt;&nbsp;next&nbsp;state</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c9d1d9;">values</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">=</span><span style="color: #bbbebf;">&nbsp;[</span><span
                        style="color: #c9d1d9;">prob</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">*</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d2a8ff;">V_exptmax</span><span style="color: #bbbebf;">(</span><span
                        style="color: #ffa657;">game</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #ffa657;">opp_policy</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #c9d1d9;">successors</span><span style="color: #bbbebf;">[</span><span
                        style="color: #c9d1d9;">action</span><span style="color: #bbbebf;">])&nbsp;</span><span
                        style="color: #c586c0;">for</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #c9d1d9;">action</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #c9d1d9;">prob</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #c586c0;">in</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #ffa657;">opp_policy</span><span style="color: #bbbebf;">(</span><span
                        style="color: #ffa657;">state</span><span style="color: #bbbebf;">).items()]&nbsp;&nbsp;</span>
        </div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c9d1d9;">value</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">=</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #4ec9b0;">np</span><span style="color: #bbbebf;">.</span><span
                        style="color: #d2a8ff;">sum</span><span style="color: #bbbebf;">(</span><span
                        style="color: #c9d1d9;">values</span><span style="color: #bbbebf;">)&nbsp;&nbsp;</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c586c0;">return</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #c9d1d9;">value</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #c586c0;">else</span><span
                        style="color: #bbbebf;">:</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c586c0;">raise</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #4ec9b0;">ValueError</span><span style="color: #bbbebf;">(</span><span
                        style="color: #ff7b72;">f</span><span
                        style="color: #a5d6ff;">"Invalid&nbsp;player:&nbsp;</span><span
                        style="color: #ff7b72;">{</span><span style="color: #c9d1d9;">player</span><span
                        style="color: #ff7b72;">}</span><span style="color: #a5d6ff;">"</span><span
                        style="color: #bbbebf;">)</span></div>
        <div><br></div>
        <div><br></div>
        <div><span style="color: #c9d1d9;">state</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">=</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #c9d1d9;">game</span><span style="color: #bbbebf;">.</span><span
                        style="color: #d2a8ff;">start_state</span><span style="color: #bbbebf;">()&nbsp;&nbsp;</span>
        </div>
        <div><span style="color: #c9d1d9;">value</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">=</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d2a8ff;">V_exptmax</span><span style="color: #bbbebf;">(</span><span
                        style="color: #c9d1d9;">game</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #d2a8ff;">random_policy</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #c9d1d9;">state</span><span style="color: #bbbebf;">)</span></div>
        <div><span style="color: #d2a8ff;">print</span><span style="color: #bbbebf;">(</span><span
                        style="color: #ff7b72;">f</span><span
                        style="color: #a5d6ff;">"expected&nbsp;value&nbsp;for&nbsp;agent&nbsp;using&nbsp;expectimax&nbsp;policy:&nbsp;</span><span
                        style="color: #ff7b72;">{</span><span style="color: #c9d1d9;">value</span><span
                        style="color: #ff7b72;">}</span><span style="color: #a5d6ff;">"</span><span
                        style="color: #bbbebf;">)</span></div>
        <div><br></div>
        <div><span style="color: #a5d6ff;">'''</span></div>
        <div><span style="color: #a5d6ff;">Summary:</span></div>
        <div><span
                        style="color: #a5d6ff;">&nbsp;-&nbsp;Expectimax:&nbsp;find&nbsp;the&nbsp;optimal&nbsp;agent&nbsp;policy&nbsp;with&nbsp;respect&nbsp;to&nbsp;a&nbsp;fixed&nbsp;opponent&nbsp;policy</span>
        </div>
        <div><span
                        style="color: #a5d6ff;">&nbsp;-&nbsp;Analogous&nbsp;to&nbsp;value&nbsp;iteration&nbsp;in&nbsp;MDPs</span>
        </div>
        <div><br></div>
        <div><span style="color: #a5d6ff;">'''</span></div>
        <div><br></div>
        <div><br></div>
        <div><span style="color: #8b949e;">#&nbsp;-----------------------------</span></div>
        <div><span style="color: #8b949e;">#&nbsp;minimax()&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        </div>
        <div><span
                        style="color: #8b949e;">#&nbsp;#&nbsp;Assume&nbsp;the&nbsp;opponent&nbsp;is&nbsp;playing&nbsp;the&nbsp;best&nbsp;possible&nbsp;strategy</span>
        </div>
        <div><span
                        style="color: #8b949e;">#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;agent&nbsp;will&nbsp;choose&nbsp;the&nbsp;max&nbsp;value</span>
        </div>
        <div><span
                        style="color: #8b949e;">#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;opponent&nbsp;will&nbsp;choose&nbsp;the&nbsp;min&nbsp;value</span>
        </div>
        <div><br></div>
        <div><br></div>
        <div><span style="color: #ff7b72;">def</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d2a8ff;">V_minmax</span><span style="color: #bbbebf;">(</span><span
                        style="color: #ffa657;">game</span><span style="color: #bbbebf;">:&nbsp;</span><span
                        style="color: #4ec9b0;">Game</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #ffa657;">state</span><span style="color: #bbbebf;">:&nbsp;</span><span
                        style="color: #c9d1d9;">Any</span><span style="color: #bbbebf;">)&nbsp;-&gt;&nbsp;</span><span
                        style="color: #4ec9b0;">tuple</span><span style="color: #bbbebf;">[</span><span
                        style="color: #4ec9b0;">float</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #c9d1d9;">Action</span><span style="color: #bbbebf;">]:</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #a5d6ff;">"""Return&nbsp;the&nbsp;value&nbsp;of&nbsp;the&nbsp;game&nbsp;and&nbsp;the&nbsp;optimal&nbsp;action."""</span>
        </div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #8b949e;">#&nbsp;At&nbsp;the&nbsp;end&nbsp;of&nbsp;the&nbsp;game?</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #c586c0;">if</span><span
                        style="color: #bbbebf;">&nbsp;</span><span style="color: #ffa657;">game</span><span
                        style="color: #bbbebf;">.</span><span style="color: #d2a8ff;">is_end</span><span
                        style="color: #bbbebf;">(</span><span style="color: #ffa657;">state</span><span
                        style="color: #bbbebf;">):&nbsp;&nbsp;</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c586c0;">return</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #ffa657;">game</span><span style="color: #bbbebf;">.</span><span
                        style="color: #d2a8ff;">utility</span><span style="color: #bbbebf;">(</span><span
                        style="color: #ffa657;">state</span><span style="color: #bbbebf;">),&nbsp;</span><span
                        style="color: #569cd6;">None</span><span style="color: #bbbebf;">&nbsp;&nbsp;</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #8b949e;">#&nbsp;Whose&nbsp;turn&nbsp;is&nbsp;it?</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c9d1d9;">player</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">=</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #ffa657;">game</span><span style="color: #bbbebf;">.</span><span
                        style="color: #d2a8ff;">player</span><span style="color: #bbbebf;">(</span><span
                        style="color: #ffa657;">state</span><span style="color: #bbbebf;">)&nbsp;&nbsp;</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #8b949e;">#&nbsp;Recurse&nbsp;on&nbsp;all&nbsp;possible&nbsp;next&nbsp;states</span>
        </div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c9d1d9;">successors</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">=</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #ffa657;">game</span><span style="color: #bbbebf;">.</span><span
                        style="color: #d2a8ff;">successors</span><span style="color: #bbbebf;">(</span><span
                        style="color: #ffa657;">state</span><span style="color: #bbbebf;">)&nbsp;&nbsp;</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c9d1d9;">values</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">=</span><span style="color: #bbbebf;">&nbsp;{</span><span
                        style="color: #c9d1d9;">action</span><span style="color: #bbbebf;">:&nbsp;</span><span
                        style="color: #d2a8ff;">V_minmax</span><span style="color: #bbbebf;">(</span><span
                        style="color: #ffa657;">game</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #c9d1d9;">next_state</span><span style="color: #bbbebf;">)[</span><span
                        style="color: #b5cea8;">0</span><span style="color: #bbbebf;">]&nbsp;</span><span
                        style="color: #c586c0;">for</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #c9d1d9;">action</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #c9d1d9;">next_state</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #c586c0;">in</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #c9d1d9;">successors</span><span style="color: #bbbebf;">.</span><span
                        style="color: #d2a8ff;">items</span><span style="color: #bbbebf;">()}&nbsp;&nbsp;</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #c586c0;">if</span><span
                        style="color: #bbbebf;">&nbsp;</span><span style="color: #c9d1d9;">player</span><span
                        style="color: #bbbebf;">&nbsp;</span><span style="color: #d4d4d4;">==</span><span
                        style="color: #bbbebf;">&nbsp;</span><span style="color: #a5d6ff;">"agent"</span><span
                        style="color: #bbbebf;">:&nbsp;&nbsp;</span><span
                        style="color: #8b949e;">#&nbsp;Agent&nbsp;maximizes&nbsp;utility</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c9d1d9;">action</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #c9d1d9;">value</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">=</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d2a8ff;">max</span><span style="color: #bbbebf;">(</span><span
                        style="color: #c9d1d9;">values</span><span style="color: #bbbebf;">.</span><span
                        style="color: #d2a8ff;">items</span><span style="color: #bbbebf;">(),&nbsp;</span><span
                        style="color: #ffa657;">key</span><span style="color: #d4d4d4;">=</span><span
                        style="color: #ff7b72;">lambda</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #ffa657;">x</span><span style="color: #bbbebf;">:&nbsp;</span><span
                        style="color: #ffa657;">x</span><span style="color: #bbbebf;">[</span><span
                        style="color: #b5cea8;">1</span><span style="color: #bbbebf;">])&nbsp;&nbsp;</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #c586c0;">elif</span><span
                        style="color: #bbbebf;">&nbsp;</span><span style="color: #c9d1d9;">player</span><span
                        style="color: #bbbebf;">&nbsp;</span><span style="color: #d4d4d4;">==</span><span
                        style="color: #bbbebf;">&nbsp;</span><span style="color: #a5d6ff;">"opp"</span><span
                        style="color: #bbbebf;">:&nbsp;&nbsp;</span><span
                        style="color: #8b949e;">#&nbsp;Opponent&nbsp;minimizes&nbsp;utility</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c9d1d9;">action</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #c9d1d9;">value</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">=</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d2a8ff;">min</span><span style="color: #bbbebf;">(</span><span
                        style="color: #c9d1d9;">values</span><span style="color: #bbbebf;">.</span><span
                        style="color: #d2a8ff;">items</span><span style="color: #bbbebf;">(),&nbsp;</span><span
                        style="color: #ffa657;">key</span><span style="color: #d4d4d4;">=</span><span
                        style="color: #ff7b72;">lambda</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #ffa657;">x</span><span style="color: #bbbebf;">:&nbsp;</span><span
                        style="color: #ffa657;">x</span><span style="color: #bbbebf;">[</span><span
                        style="color: #b5cea8;">1</span><span style="color: #bbbebf;">])&nbsp;&nbsp;</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: #c586c0;">else</span><span
                        style="color: #bbbebf;">:</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c586c0;">raise</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #4ec9b0;">ValueError</span><span style="color: #bbbebf;">(</span><span
                        style="color: #ff7b72;">f</span><span
                        style="color: #a5d6ff;">"Invalid&nbsp;player:&nbsp;</span><span
                        style="color: #ff7b72;">{</span><span style="color: #c9d1d9;">player</span><span
                        style="color: #ff7b72;">}</span><span style="color: #a5d6ff;">"</span><span
                        style="color: #bbbebf;">)</span></div>
        <div><span style="color: #bbbebf;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                        style="color: #c586c0;">return</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #c9d1d9;">value</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #c9d1d9;">action</span></div>
        <div><br></div>
        <div><span style="color: #c9d1d9;">state</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">=</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #c9d1d9;">game</span><span style="color: #bbbebf;">.</span><span
                        style="color: #d2a8ff;">start_state</span><span style="color: #bbbebf;">()&nbsp;&nbsp;</span>
        </div>
        <div><span style="color: #c9d1d9;">value</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">=</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d2a8ff;">V_minmax</span><span style="color: #bbbebf;">(</span><span
                        style="color: #c9d1d9;">game</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #c9d1d9;">state</span><span style="color: #bbbebf;">)&nbsp;</span></div>
        <div><span style="color: #d2a8ff;">print</span><span style="color: #bbbebf;">(</span><span
                        style="color: #ff7b72;">f</span><span
                        style="color: #a5d6ff;">"expected&nbsp;value&nbsp;for&nbsp;agent:max,&nbsp;opp:min&nbsp;(ie.&nbsp;minimax):&nbsp;</span><span
                        style="color: #ff7b72;">{</span><span style="color: #c9d1d9;">value</span><span
                        style="color: #ff7b72;">}</span><span style="color: #a5d6ff;">"</span><span
                        style="color: #bbbebf;">)</span></div>
        <div><br></div>
        <div><span style="color: #a5d6ff;">'''</span></div>
        <div><span style="color: #a5d6ff;">Summary:</span></div>
        <div><span
                        style="color: #a5d6ff;">&nbsp;-&nbsp;Agent&nbsp;maximizes&nbsp;utility,&nbsp;opponent&nbsp;minimizes&nbsp;utility</span>
        </div>
        <div><span
                        style="color: #a5d6ff;">&nbsp;-&nbsp;Unlike&nbsp;expectimax,&nbsp;no&nbsp;fixed&nbsp;policies&nbsp;given</span>
        </div>
        <div><span style="color: #a5d6ff;">&nbsp;-&nbsp;No&nbsp;analogy&nbsp;in&nbsp;MDPs</span></div>
        <div><br></div>
        <div><span style="color: #a5d6ff;">'''</span></div>
        <div><br></div>
        <div><span style="color: #8b949e;">#&nbsp;-------------------------------</span></div>
        <div><span style="color: #8b949e;">#&nbsp;face_off()</span></div>
        <div><span style="color: #8b949e;">#&nbsp;Relationships&nbsp;between&nbsp;values</span></div>
        <div><br></div>
        <div><span
                        style="color: #8b949e;">#&nbsp;Minimax&nbsp;provides&nbsp;both&nbsp;optimality&nbsp;and&nbsp;a&nbsp;lower&nbsp;bound&nbsp;against&nbsp;any&nbsp;(unknown)&nbsp;opponent</span>
        </div>
        <div><br></div>
        <div><br></div>
        <div><br></div>
        <div><span style="color: #8b949e;">#&nbsp;-------------------------------</span></div>
        <div><span style="color: #8b949e;">#&nbsp;expectiminimax()</span></div>
        <div><span
                        style="color: #8b949e;">#&nbsp;...and&nbsp;there&nbsp;is&nbsp;randomness&nbsp;in&nbsp;the&nbsp;game</span>
        </div>
        <div><br></div>
        <div><br></div>
        <div><br></div>
        <div><br></div>
        <div><br></div>
</div>
        `

        const html2 = `
        <div
        style="color: rgb(187, 190, 191); background-color: rgb(18, 19, 20); font-family: Consolas, 'Courier New', monospace; font-weight: normal; font-size: 14px; line-height: 19px; margin: auto; width: fit-content; overflow: auto; white-space: nowrap;">
        <div><span style="color: #c586c0;">from</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #4ec9b0;">typing</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #c586c0;">import</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #c9d1d9;">Any</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #4ec9b0;">Callable</span></div>
        <div><span style="color: #c586c0;">from</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #4ec9b0;">dataclasses</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #c586c0;">import</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d2a8ff;">dataclass</span></div>
        <div><span style="color: #c586c0;">import</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #4ec9b0;">numpy</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #c586c0;">as</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #4ec9b0;">np</span></div>
        <div><span style="color: #c586c0;">from</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #4ec9b0;">util</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #c586c0;">import</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d2a8ff;">sample_dict</span><span style="color: #bbbebf;">,&nbsp;</span><span
                        style="color: #d2a8ff;">set_random_seed</span></div>
        <div><span style="color: #c9d1d9;">Policy</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">=</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #4ec9b0;">Callable</span><span style="color: #bbbebf;">[[</span><span
                        style="color: #c9d1d9;">Any</span><span style="color: #bbbebf;">],&nbsp;</span><span
                        style="color: #c9d1d9;">Any</span><span style="color: #bbbebf;">]</span></div>
        <div><span style="color: #c9d1d9;">State</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">=</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #c9d1d9;">Any</span></div>
        <div><span style="color: #c9d1d9;">Action</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #d4d4d4;">=</span><span style="color: #bbbebf;">&nbsp;</span><span
                        style="color: #4ec9b0;">str</span></div>
        <div><br></div>
        <div><br></div>
        <div><span style="color: #8b949e;">#&nbsp;-----------------------------</span></div>
        <div><span style="color: #8b949e;">#&nbsp;td_learning_motivation()</span></div>
        <div><span style="color: #8b949e;">#&nbsp;Temporal&nbsp;Difference&nbsp;(TD)&nbsp;Learning</span></div>
        <div><br></div>
        <div><span style="color: #a5d6ff;">'''</span></div>
        <div><span style="color: #a5d6ff;">Recall&nbsp;from&nbsp;RL:</span></div>
        <div><span
                        style="color: #a5d6ff;">&nbsp;-&nbsp;Value&nbsp;Iteration:&nbsp;V_π(s):&nbsp;value&nbsp;(expected&nbsp;utility)&nbsp;of&nbsp;following&nbsp;policy&nbsp;π&nbsp;from&nbsp;state&nbsp;s</span>
        </div>
        <div><span
                        style="color: #a5d6ff;">&nbsp;-&nbsp;Q&nbsp;Values:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Q_π(s,&nbsp;a):&nbsp;value&nbsp;(expected&nbsp;utility)&nbsp;of&nbsp;taking&nbsp;action&nbsp;a&nbsp;in&nbsp;state&nbsp;s,&nbsp;<br>and&nbsp;then&nbsp;following&nbsp;policy&nbsp;π</span>
        </div>
        <div><br></div>
        <div><span style="color: #a5d6ff;">Recall&nbsp;SARSA&nbsp;from&nbsp;reinforcement&nbsp;learning:</span></div>
        <div><span
                        style="color: #a5d6ff;">&nbsp;-&nbsp;On-policy:&nbsp;estimating&nbsp;Q-values&nbsp;of&nbsp;the&nbsp;current&nbsp;policy&nbsp;Q_π(s,&nbsp;a)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;need&nbsp;to&nbsp;do&nbsp;full&nbsp;rollout?</span>
        </div>
        <div><span
                        style="color: #a5d6ff;">&nbsp;-&nbsp;Bootstrapping:&nbsp;target&nbsp;is&nbsp;immediate&nbsp;reward&nbsp;+&nbsp;estimated&nbsp;future&nbsp;reward&nbsp;&nbsp;&nbsp;-&nbsp;iteratively&nbsp;update/approximate&nbsp;Q-values&nbsp;<br>estimate&nbsp;until&nbsp;the&nbsp;change&nbsp;is&nbsp;smaller&nbsp;than&nbsp;some&nbsp;tollerance</span>
        </div>
        <div><br></div>
        <div><span style="color: #a5d6ff;">For&nbsp;games:</span></div>
        <div><span
                        style="color: #a5d6ff;">&nbsp;-&nbsp;we&nbsp;know&nbsp;the&nbsp;states&nbsp;and&nbsp;transitions&nbsp;(the&nbsp;MDP),&nbsp;why&nbsp;not&nbsp;use&nbsp;value-iteration&nbsp;to&nbsp;solve&nbsp;it?</span>
        </div>
        <div><span
                        style="color: #a5d6ff;">&nbsp;-&nbsp;because&nbsp;the&nbsp;number&nbsp;of&nbsp;states&nbsp;is&nbsp;huge&nbsp;-&nbsp;think&nbsp;chess;&nbsp;you&nbsp;would&nbsp;need&nbsp;to&nbsp;explore&nbsp;every&nbsp;possible&nbsp;move</span>
        </div>
        <div><span
                        style="color: #a5d6ff;">&nbsp;-&nbsp;motivation:&nbsp;use&nbsp;function&nbsp;approximation&nbsp;to&nbsp;help&nbsp;deal&nbsp;with&nbsp;large&nbsp;state-space</span>
        </div>
        <div><br></div>
        <div><span style="color: #a5d6ff;">So&nbsp;we'll&nbsp;use&nbsp;reinforcement&nbsp;learning...</span></div>
        <div><span
                        style="color: #a5d6ff;">&nbsp;&nbsp;&nbsp;&nbsp;...not&nbsp;due&nbsp;to&nbsp;unknown&nbsp;MDP&nbsp;(original&nbsp;motivation),</span>
        </div>
        <div><span
                        style="color: #a5d6ff;">&nbsp;&nbsp;&nbsp;&nbsp;...but&nbsp;because&nbsp;the&nbsp;number&nbsp;of&nbsp;states&nbsp;is&nbsp;exponential!</span>
        </div>
        <div><br></div>
        <div><span
                        style="color: #a5d6ff;">TD&nbsp;learning&nbsp;-&gt;&nbsp;V_π&nbsp;&nbsp;is&nbsp;analogous&nbsp;to:&nbsp;SARSA&nbsp;-&gt;&nbsp;Q_π</span>
        </div>
        <div><br></div>
        <div><span
                        style="color: #a5d6ff;">SARSA:&nbsp;Q_π(s,&nbsp;a)&nbsp;tells&nbsp;us&nbsp;how&nbsp;good&nbsp;each&nbsp;action&nbsp;is</span>
        </div>
        <div><span
                        style="color: #a5d6ff;">TD&nbsp;learning:&nbsp;V_π(s)&nbsp;tells&nbsp;us&nbsp;how&nbsp;good&nbsp;each&nbsp;state&nbsp;is&nbsp;(since&nbsp;action&nbsp;→&nbsp;next&nbsp;state&nbsp;is&nbsp;known)</span>
        </div>
        <div><br></div>
        <div><span style="color: #a5d6ff;">idea:</span></div>
        <div><span
                        style="color: #a5d6ff;">&nbsp;-&nbsp;train&nbsp;a&nbsp;neural&nbsp;net&nbsp;to&nbsp;do&nbsp;the&nbsp;function&nbsp;approximation;&nbsp;use&nbsp;gradient&nbsp;descent&nbsp;to&nbsp;update&nbsp;model&nbsp;weights/bias</span>
        </div>
        <div><br></div>
        <div><span style="color: #a5d6ff;">Basic&nbsp;idea:</span></div>
        <div><span
                        style="color: #a5d6ff;">&nbsp;-&nbsp;Get&nbsp;piece&nbsp;of&nbsp;experience&nbsp;(s,&nbsp;a,&nbsp;r,&nbsp;s')</span>
        </div>
        <div><span style="color: #a5d6ff;">&nbsp;-&nbsp;Model&nbsp;predicts&nbsp;V(s;&nbsp;w)</span></div>
        <div><span
                        style="color: #a5d6ff;">&nbsp;-&nbsp;Target&nbsp;(bootstrapping):&nbsp;r&nbsp;+&nbsp;γ&nbsp;*&nbsp;V(s';&nbsp;w)</span>
        </div>
        <div><span
                        style="color: #a5d6ff;">&nbsp;-&nbsp;Define&nbsp;squared&nbsp;loss:&nbsp;L(w)&nbsp;=&nbsp;(V(s;&nbsp;w)&nbsp;-&nbsp;(r&nbsp;+&nbsp;γ&nbsp;*&nbsp;V(s';&nbsp;w)))&nbsp;^&nbsp;2</span>
        </div>
        <div><span
                        style="color: #a5d6ff;">&nbsp;-&nbsp;Take&nbsp;a&nbsp;gradient&nbsp;step:&nbsp;w&nbsp;=&nbsp;w&nbsp;-&nbsp;α&nbsp;*&nbsp;∇_w&nbsp;L(w)</span>
        </div>
        <div><br></div>
        <div><br></div>
        <div><span style="color: #a5d6ff;">Summary:</span></div>
        <div><span
                        style="color: #a5d6ff;">&nbsp;-&nbsp;TD&nbsp;learning&nbsp;estimates&nbsp;V_π(s)&nbsp;from&nbsp;experience&nbsp;(s,&nbsp;a,&nbsp;r,&nbsp;s')</span>
        </div>
        <div><span
                        style="color: #a5d6ff;">&nbsp;-&nbsp;On&nbsp;policy&nbsp;(we're&nbsp;not&nbsp;considering&nbsp;other&nbsp;actions)</span>
        </div>
        <div><span style="color: #a5d6ff;">&nbsp;-&nbsp;Uses&nbsp;bootstrapping</span></div>
        <div><br></div>
        <div><span style="color: #a5d6ff;">&nbsp;</span></div>
        <div><span style="color: #a5d6ff;">'''</span></div>
        <div><br></div>
        <div><br></div>
</div>
        `

        return (
                <>
                        <MathJaxContext>
                                <div className='mt-[0px] ml-[40px] mr-[20px] mb-[12px]'>

                                        <div className='jade-h1'>
                                                XCS221 - AI Principles & Techniques
                                        </div>

                                        <div className='jade-h2 mt-[5px] mb-[20px]'>
                                                Assignment 5
                                        </div>


                                        <Tabs>

                                                <Tab2 title="Notes 1" isChecked={true}>
                                                        <TileRowCell0>

                                                                <div className="jade-h11 mt-[15px]">
                                                                        Notes 1
                                                                </div>

                                                                <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                        <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                <div dangerouslySetInnerHTML={createMarkup(html1)} />
                                                                        </div>
                                                                </div>

                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="Notes 2" isChecked={false}>
                                                        <TileRowCell0>

                                                                <div className="jade-h11 mt-[15px]">
                                                                        Notes 2
                                                                </div>

                                                                <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                        <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                <div dangerouslySetInnerHTML={createMarkup(html2)} />
                                                                        </div>
                                                                </div>

                                                        </TileRowCell0>
                                                </Tab2>


                                                <Tab2 title="Assignment 5 PDF" isChecked={false}>
                                                        <TileRowCell0>

                                                                <div className='lab-links'>
                                                                        <ul>
                                                                                <li><a href="/A5_Solutions.pdf" target="_blank">Assignment 5</a></li>
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
