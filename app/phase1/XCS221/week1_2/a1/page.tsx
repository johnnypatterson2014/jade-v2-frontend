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
                <div><span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">batch_linear_projection</span>(<span
                                style="color:rgb(156,220,254)">x</span>: <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">ndarray</span>, <span
                                style="color:rgb(156,220,254)">W</span>: <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">ndarray</span>, <span
                                style="color:rgb(156,220,254)">b</span>: <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">ndarray</span>) -&gt; <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">ndarray</span>:</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"""</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; Compute a batched linear projection using einsum
                                from einops.</span></div><br>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; Shapes:</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - x: (batch, d_in)</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - W: (d_in, d_out)</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - b: (d_out,)</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; Returns:</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - y: (batch, d_out) where y = x * W + b</span>
                </div><br>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; Implementation notes:</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - Use einsum from einops for the matrix
                                multiplication (no @ operator).</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - Use NumPy broadcasting for the bias
                                addition.</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - No Python loops.</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; """</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">pass</span></div>
                
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(220,220,170)">einsum</span>(<span
                                style="color:rgb(156,220,254)">x</span>, <span style="color:rgb(156,220,254)">W</span>,
                        <span style="color:rgb(206,145,120)">'b d_in, d_in d_out -&gt; b d_out'</span>) <span
                                style="color:rgb(220,220,170)">+</span> <span style="color:rgb(156,220,254)">b</span>
                </div>
                <br />
                
                <div><span style="color:rgb(156,220,254)">y</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(220,220,170)">batch_linear_projection</span>(<span
                                style="color:rgb(156,220,254)">x</span>, <span style="color:rgb(79,193,255)">W</span>,
                        <span style="color:rgb(156,220,254)">b</span>)</div>
        </div>
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
                                                Assignment 1
                                        </div>


                                        <Tabs>
                                                <Tab2 title="Assignment 1" isChecked={true}>
                                                        <TileRowCell0>

                                                                <div className="jade-h11 mt-[15px]">
                                                                        1. Linear Algebra
                                                                </div>

                                                                <CardDrawer id='1' name='1a. Learn basic NumPy operations'>
                                                                        NumPy chat session transcript: <br />
                                                                        https://chatgpt.com/share/69b0fd44-61e8-8005-957f-ed073172e429
                                                                </CardDrawer>

                                                                <CardDrawer id='1' name='1b. Linear Algebra Complexity'>
                                                                        coming soon...
                                                                </CardDrawer>

                                                                <CardDrawer id='1' name='1e. Batch Linear Projection (einsum)'>
                                                                        <div dangerouslySetInnerHTML={createMarkup(html1)} />
                                                                </CardDrawer>

                                                        </TileRowCell0>
                                                </Tab2>


                                        </Tabs>


                                </div>
                        </MathJaxContext>
                </>
        );
}
