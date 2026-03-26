'use client';

import Image from "next/image";
import Tabs from '@/components/client/Tabs';
import Tab2 from '@/components/client/Tab2';
import Card from '@/components/client/Card';
import CardDrawer from '@/components/client/CardDrawer';
import NavDrawer2 from '@/components/client/NavDrawer2';
import TileRowCell0 from '@/components/client/TileRowCell0';
import { MathJaxContext } from "better-react-mathjax";
import React, { useEffect, useState } from 'react';


export default function Home() {
        const [isClient, setIsClient] = useState(false);

        useEffect(() => {
                setIsClient(true);
                // Check if MathJax is loaded and available in the window object
                if (isClient && typeof window?.MathJax !== "undefined") {
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

        const q1e = `
        <div dir="ltr">
        <div style="color:rgb(204,204,204);font-family:monospace;font-size:14px;line-height:18px;">
                <div><span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">linear_project</span>(<span
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
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(220,220,170)">einsum</span>(<span
                                style="color:rgb(156,220,254)">x</span>, <span style="color:rgb(156,220,254)">W</span>,
                        <span style="color:rgb(206,145,120)">'b d_in, d_in d_out -&gt; b d_out'</span>) <span
                                style="color:rgb(220,220,170)">+</span> <span style="color:rgb(156,220,254)">b</span>
                </div><br>
                <div><span style="color:rgb(106,153,85)"># verify using a test</span></div>
                <div><span style="color:rgb(156,220,254)">x</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(220,220,170)">array</span>([[<span
                                style="color:rgb(181,206,168)">1</span>, <span style="color:rgb(181,206,168)">2</span>],
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [<span style="color:rgb(181,206,168)">3</span>,
                        <span style="color:rgb(181,206,168)">4</span>]]) &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># (2,2)</span>
                </div><br>
                <div><span style="color:rgb(79,193,255)">W</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(220,220,170)">array</span>([[<span
                                style="color:rgb(181,206,168)">10</span>, <span
                                style="color:rgb(181,206,168)">20</span>, <span
                                style="color:rgb(181,206,168)">30</span>],</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [<span style="color:rgb(181,206,168)">40</span>,
                        <span style="color:rgb(181,206,168)">50</span>, <span
                                style="color:rgb(181,206,168)">60</span>]]) <span style="color:rgb(106,153,85)">#
                                (2,3)</span>
                </div><br>
                <div><span style="color:rgb(156,220,254)">b</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(220,220,170)">array</span>([<span
                                style="color:rgb(181,206,168)">1</span>, <span style="color:rgb(181,206,168)">1</span>,
                        <span style="color:rgb(181,206,168)">1</span>]) &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># (3,)</span>
                </div><br>
                <div><span style="color:rgb(106,153,85)"># this is the equivalent way to do this in numpy</span></div>
                <div><span style="color:rgb(106,153,85)"># we will use it to validate our function</span></div>
                <div><span style="color:rgb(156,220,254)">y</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(156,220,254)">x</span> <span style="color:rgb(220,220,170)">@</span>
                        <span style="color:rgb(79,193,255)">W</span> <span style="color:rgb(220,220,170)">+</span> <span
                                style="color:rgb(156,220,254)">b</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(86,156,214)">f</span><span
                                style="color:rgb(206,145,120)">"dot prod y:"</span>, <span
                                style="color:rgb(156,220,254)">y</span>)</div><br>
                <div><span style="color:rgb(106,153,85)"># test our function</span></div>
                <div><span style="color:rgb(156,220,254)">y</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(220,220,170)">linear_project</span>(<span
                                style="color:rgb(156,220,254)">x</span>, <span style="color:rgb(79,193,255)">W</span>,
                        <span style="color:rgb(156,220,254)">b</span>)
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(86,156,214)">f</span><span
                                style="color:rgb(206,145,120)">"einsum y:"</span>, <span
                                style="color:rgb(156,220,254)">y</span>)</div><br>
                <div><span style="color:rgb(206,145,120)">'''</span></div>
                <div><span style="color:rgb(206,145,120)">dot prod y: [[ 91 121 151]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;[191 261
                                331]]</span></div><br>
                <div><span style="color:rgb(206,145,120)">einsum y: [[ 91 121 151]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;[191 261 331]]</span>
                </div>
                <div><span style="color:rgb(206,145,120)">'''</span></div>
        </div>
</div>
        `

        const q1f = `
        <div dir="ltr">
        <div style="color:rgb(204,204,204);font-family:monospace;font-size:14px;line-height:18px;">
                <div><span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">split_last_dim_pattern</span>() -&gt; <span
                                style="color:rgb(78,201,176)">str</span>:</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"""</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; Return an einops.rearrange pattern string that
                                reshapes</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; (B, D) -&gt; (B, G, D/G), where G is provided as
                                a keyword</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; (e.g., g=num_groups) when applying
                                rearrange.</span></div><br>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; I.e., your returned string 'pattern' would be
                                used as follows:</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; </span><span
                                style="color:rgb(197,134,192)">&gt;&gt;&gt; </span><span
                                style="color:rgb(206,145,120)">y = rearrange(x, pattern, g=num_groups)</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; where x is a tensor with shape (B, D).</span>
                </div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; """</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(206,145,120)">"b (g d) -&gt; b g d"</span></div><br>
                <div><span style="color:rgb(106,153,85)"># test data</span></div>
                <div><span style="color:rgb(156,220,254)">x</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(220,220,170)">arange</span>(<span
                                style="color:rgb(181,206,168)">12</span>, <span
                                style="color:rgb(156,220,254)">dtype</span><span
                                style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(78,201,176)">float</span>).<span
                                style="color:rgb(220,220,170)">reshape</span>(<span
                                style="color:rgb(181,206,168)">2</span>, <span style="color:rgb(181,206,168)">6</span>)
                        &nbsp;<span style="color:rgb(106,153,85)"># (B=2, D=6)</span></div><br>
                <div><span style="color:rgb(156,220,254)">num_groups</span> <span
                                style="color:rgb(212,212,212)">=</span> <span style="color:rgb(181,206,168)">3</span>
                </div>
                <div><span style="color:rgb(156,220,254)">y</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(220,220,170)">rearrange</span>(<span
                                style="color:rgb(156,220,254)">x</span>, <span style="color:rgb(206,145,120)">"b (g d)
                                -&gt; b g d"</span>, <span style="color:rgb(156,220,254)">g</span><span
                                style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(156,220,254)">num_groups</span>)</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">y</span>)
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">y</span>.<span
                                style="color:rgb(156,220,254)">shape</span>)</div><br>
                <div><span style="color:rgb(206,145,120)">'''</span></div>
                <div><span style="color:rgb(206,145,120)">y: </span></div>
                <div><span style="color:rgb(206,145,120)">[[[ 0. &nbsp;1.]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; [ 2. &nbsp;3.]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; [ 4. &nbsp;5.]]</span></div><br>
                <div><span style="color:rgb(206,145,120)">&nbsp;[[ 6. &nbsp;7.]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; [ 8. &nbsp;9.]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; [10. 11.]]]</span></div><br>
                <div><span style="color:rgb(206,145,120)">y.shape: (2, 3, 2)</span></div>
                <div><span style="color:rgb(206,145,120)">'''</span></div>
        </div>
</div>
        `
        const q1g = `
        <div dir="ltr">
        <div style="color:rgb(204,204,204);font-family:monospace;font-size:14px;line-height:18px;">
                <div><span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">normalized_inner_products</span>(<span
                                style="color:rgb(156,220,254)">A</span>: <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">ndarray</span>, <span
                                style="color:rgb(156,220,254)">C</span>: <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">ndarray</span>, <span
                                style="color:rgb(156,220,254)">normalize</span>: <span
                                style="color:rgb(78,201,176)">bool</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(86,156,214)">True</span>) -&gt; <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">ndarray</span>:
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"""</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; Batched all-pairs dot products, optionally
                                scaled by 1/sqrt(d).</span></div><br>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; Board-style intro:</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - Let A in R^{B x M x D} and C in R^{B x N x
                                D}.</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - For each batch b, form S[b,i,j] =
                                &lt;A[b,i,:], C[b,j,:]&gt; giving S in R^{B x M x N}.</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - If normalize is True, scale S by 1/sqrt(D) to
                                keep magnitudes comparable across D.</span></div><br>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; Shapes:</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - A: (batch, m, d)</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - C: (batch, n, d)</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; Returns:</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - S: (batch, m, n) with S[b,i,j] = &lt;A[b,i],
                                C[b,j]&gt;.</span></div><br>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; Implementation notes:</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - Use einsum from einops for the contraction (no
                                @ operator or loops).</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - Think about the Einstein notation pattern for
                                batched dot products.</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; """</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(79,193,255)">S</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(220,220,170)">einsum</span>(<span
                                style="color:rgb(156,220,254)">A</span>, <span style="color:rgb(156,220,254)">C</span>,
                        <span style="color:rgb(206,145,120)">'b m d, b n d -&gt; b m n'</span>)
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">if</span> <span
                                style="color:rgb(156,220,254)">normalize</span>:</div>
                <div>&nbsp; &nbsp; &nbsp; <span style="color:rgb(79,193,255)">D</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(156,220,254)">A</span>.<span
                                style="color:rgb(156,220,254)">shape</span>[<span
                                style="color:rgb(212,212,212)">-</span><span style="color:rgb(181,206,168)">1</span>]
                </div>
                <div>&nbsp; &nbsp; &nbsp; <span style="color:rgb(79,193,255)">S</span> <span
                                style="color:rgb(212,212,212)">=</span> <span style="color:rgb(79,193,255)">S</span>
                        <span style="color:rgb(220,220,170)">/</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(156,220,254)">sqrt</span>(<span style="color:rgb(79,193,255)">D</span>)
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(79,193,255)">S</span></div><br>
                <div><span style="color:rgb(156,220,254)">normalize</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(86,156,214)">True</span>
                </div><br>
                <div><span style="color:rgb(79,193,255)">A</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(220,220,170)">array</span>([[[<span
                                style="color:rgb(181,206,168)">1</span>., <span
                                style="color:rgb(181,206,168)">0</span>.], [<span
                                style="color:rgb(181,206,168)">0</span>., <span
                                style="color:rgb(181,206,168)">1</span>.]]]) &nbsp;<span style="color:rgb(106,153,85)">#
                                (B=1, M=2, D=2)</span></div>
                <div><span style="color:rgb(79,193,255)">C</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(220,220,170)">array</span>([[[<span
                                style="color:rgb(181,206,168)">1</span>., <span
                                style="color:rgb(181,206,168)">2</span>.], [<span
                                style="color:rgb(181,206,168)">3</span>., <span
                                style="color:rgb(181,206,168)">4</span>.], [<span
                                style="color:rgb(181,206,168)">0</span>., <span
                                style="color:rgb(181,206,168)">1</span>.]]]) &nbsp;<span style="color:rgb(106,153,85)">#
                                (B=1, N=3, D=2)</span></div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(86,156,214)">f</span><span
                                style="color:rgb(206,145,120)">"A:"</span>, <span
                                style="color:rgb(79,193,255)">A</span>)</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(86,156,214)">f</span><span
                                style="color:rgb(206,145,120)">"C:"</span>, <span
                                style="color:rgb(79,193,255)">C</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">y</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(220,220,170)">einsum</span>(<span
                                style="color:rgb(79,193,255)">A</span>, <span style="color:rgb(79,193,255)">C</span>,
                        <span style="color:rgb(206,145,120)">'b m d, b n d -&gt; b m n'</span>)
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(86,156,214)">f</span><span
                                style="color:rgb(206,145,120)">"y:"</span>, <span
                                style="color:rgb(156,220,254)">y</span>)</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">y</span>.<span
                                style="color:rgb(156,220,254)">shape</span>)</div><br>
                <div><span style="color:rgb(197,134,192)">if</span> <span
                                style="color:rgb(156,220,254)">normalize</span>:</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(79,193,255)">D</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(79,193,255)">A</span>.<span
                                style="color:rgb(156,220,254)">shape</span>[<span
                                style="color:rgb(212,212,212)">-</span><span style="color:rgb(181,206,168)">1</span>]
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">y</span> <span
                                style="color:rgb(212,212,212)">=</span> <span style="color:rgb(156,220,254)">y</span>
                        <span style="color:rgb(220,220,170)">/</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(156,220,254)">sqrt</span>(<span style="color:rgb(79,193,255)">D</span>)
                </div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(86,156,214)">f</span><span
                                style="color:rgb(206,145,120)">"y normalized:"</span>, <span
                                style="color:rgb(156,220,254)">y</span>)</div>
                <div><span style="color:rgb(206,145,120)">'''</span></div>
                <div><span style="color:rgb(206,145,120)">A: [[[1. 0.]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp;[0. 1.]]]</span></div><br>
                <div><span style="color:rgb(206,145,120)">C: [[[1. 2.]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp;[3. 4.]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp;[0. 1.]]]</span></div><br>
                <div><span style="color:rgb(206,145,120)">y: [[[1. 3. 0.]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp;[2. 4. 1.]]]</span></div><br>
                <div><span style="color:rgb(206,145,120)">y shape: (1, 2, 3)</span></div><br>
                <div><span style="color:rgb(206,145,120)">y normalized: [[[0.70710678 2.12132034 0. &nbsp; &nbsp; &nbsp;
                                &nbsp;]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                [1.41421356 2.82842712 0.70710678]]]</span></div>
                <div><span style="color:rgb(206,145,120)">'''</span></div>
        </div>
</div>
        `
        const q1h = `
        <div dir="ltr">
        <div style="color:rgb(204,204,204);font-family:monospace;font-size:14px;line-height:18px;">
                <div><span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">mask_strictly_upper</span>(<span
                                style="color:rgb(156,220,254)">scores</span>: <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">ndarray</span>) -&gt; <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">ndarray</span>:</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"""</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; Mask strictly upper-triangular entries (j &gt;
                                i) to -np.inf via broadcasting.</span></div><br>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; Board-style intro:</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - Let scores in R^{B x L x L} be a batch of
                                square matrices.</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - For each matrix, we want to set entries with
                                column index j greater than row index i to -inf.</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - Construct the boolean mask using broadcasted
                                index grids; avoid loops.</span></div><br>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; Shapes:</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - scores: (batch, L, L)</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; Returns:</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - masked_scores: (batch, L, L) where entries
                                with column &gt; row are -inf.</span></div><br>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; Use NumPy broadcasting to construct and apply
                                the mask without loops.</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; Note that the data type should be floats.</span>
                </div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; """</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">i</span>, <span
                                style="color:rgb(156,220,254)">j</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(220,220,170)">triu_indices</span>(<span
                                style="color:rgb(156,220,254)">scores</span>.<span
                                style="color:rgb(156,220,254)">shape</span>[<span
                                style="color:rgb(181,206,168)">1</span><wbr>], <span
                                style="color:rgb(156,220,254)">k</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">1</span>)
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">scores</span>[:, <span
                                style="color:rgb(156,220,254)">i</span>, <span style="color:rgb(156,220,254)">j</span>]
                        <span style="color:rgb(212,212,212)">=</span> <span style="color:rgb(212,212,212)">-</span><span
                                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(156,220,254)">inf</span>
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(156,220,254)">scores</span></div><br>
                <div><span style="color:rgb(106,153,85)"># test data</span></div>
                <div><span style="color:rgb(79,193,255)">B</span>, <span style="color:rgb(79,193,255)">L</span> <span
                                style="color:rgb(212,212,212)">=</span> <span style="color:rgb(181,206,168)">1</span>,
                        <span style="color:rgb(181,206,168)">4</span>
                </div>
                <div><span style="color:rgb(156,220,254)">s</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(220,220,170)">arange</span>(<span
                                style="color:rgb(79,193,255)">B</span> <span style="color:rgb(212,212,212)">*</span>
                        <span style="color:rgb(79,193,255)">L</span> <span style="color:rgb(212,212,212)">*</span> <span
                                style="color:rgb(79,193,255)">L</span>, <span
                                style="color:rgb(156,220,254)">dtype</span><span
                                style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(78,201,176)">float</span>).<span
                                style="color:rgb(220,220,170)">reshape</span>(<span
                                style="color:rgb(79,193,255)">B</span>, <span style="color:rgb(79,193,255)">L</span>,
                        <span style="color:rgb(79,193,255)">L</span>)
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(86,156,214)">f</span><span
                                style="color:rgb(206,145,120)">"s:"</span>, <span
                                style="color:rgb(156,220,254)">s</span>)</div><br>
                <div><span style="color:rgb(106,153,85)"># triu_indices returns the i, j indicies for the matrix.
                        </span></div>
                <div><span style="color:rgb(106,153,85)"># &nbsp; K=1 means to shift the diagonal, since we only want to
                                mask the</span></div>
                <div><span style="color:rgb(106,153,85)"># &nbsp; upper diagonal (exluding the diagonal)</span></div>
                <div><span style="color:rgb(156,220,254)">i</span>, <span style="color:rgb(156,220,254)">j</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(220,220,170)">triu_indices</span>(<span
                                style="color:rgb(156,220,254)">s</span>.<span
                                style="color:rgb(156,220,254)">shape</span>[<span
                                style="color:rgb(181,206,168)">1</span>], <span
                                style="color:rgb(156,220,254)">k</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">1</span>)
                </div>
                <div><span style="color:rgb(156,220,254)">s</span>[:, <span style="color:rgb(156,220,254)">i</span>,
                        <span style="color:rgb(156,220,254)">j</span>] <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(212,212,212)">-</span><span style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(156,220,254)">inf</span> &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># here we provide just the indicies we want to
                                assign</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(86,156,214)">f</span><span
                                style="color:rgb(206,145,120)">"s:"</span>, <span
                                style="color:rgb(156,220,254)">s</span>) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># we ignore the batch dimension, and just set the upper
                        </span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># diagonal indicies to -inf</span></div>
                <div><span style="color:rgb(206,145,120)">''' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp;</span></div>
                <div><span style="color:rgb(206,145,120)">s: [[[ 0. &nbsp;1. &nbsp;2. &nbsp;3.]</span></div><span
                        class="im">
                        <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp;[ 4. &nbsp;5. &nbsp;6.
                                        &nbsp;7.]</span></div>
                        <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp;[ 8. &nbsp;9. 10. 11.]</span>
                        </div>
                </span>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp;[12. 13. 14. 15.]]]</span></div><br>
                <div><span style="color:rgb(206,145,120)">s: [[[ &nbsp;0. -inf -inf -inf]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp;[ &nbsp;4. &nbsp; 5. -inf -inf]</span>
                </div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp;[ &nbsp;8. &nbsp; 9. &nbsp;10.
                                -inf]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp;[ 12. &nbsp;13. &nbsp;14.
                                &nbsp;15.]]]</span></div>
                <div><span style="color:rgb(206,145,120)">'''</span></div>
        </div>
</div>
        `

        const q1i = `
        <div dir="ltr">
        <div style="color:rgb(204,204,204);font-family:monospace;font-size:14px;line-height:18px;">
                <div><span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">prob_weighted_sum_einsum</span>() -&gt; <span
                                style="color:rgb(78,201,176)">str</span>:</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"""</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; Batch probability-weighted sums over value
                                vectors using einsum.</span></div><br>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; Board-style intro:</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - Let P in R^{B x N} be per-batch probability
                                weights (each row sums to 1).</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - Let V in R^{B x N x D} be per-batch value
                                vectors aligned with P along N.</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - Compute out[b,:] = sum_{j=1..N} P[b,j] *
                                V[b,j,:] in R^{D} for each batch b.</span></div><br>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; Return a einops.einsum string that computes out
                                = sum_j P[b,j] * V[b,j,:]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; for shapes P:(B,N), V:(B,N,D) -&gt;
                                out:(B,D).</span></div><br>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; I.e., your returned string 'pattern' would be
                                used as follows:</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; </span><span
                                style="color:rgb(197,134,192)">&gt;&gt;&gt; </span><span
                                style="color:rgb(206,145,120)">out = einops.einsum(P, V, pattern)</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; where P is a tensor with shape (B, N) and V is a
                                tensor with shape (B, N, D).</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; """</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(206,145,120)">"b n, b n d -&gt; b d"</span></div>
        </div>
</div>
        `

        const q2b = `
        <div dir="ltr">
        <div style="color:rgb(204,204,204);font-family:monospace;font-size:14px;line-height:18px;">
                <div><span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">gradient_warmup</span>(<span
                                style="color:rgb(156,220,254)">w</span>: <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">ndarray</span>, <span
                                style="color:rgb(156,220,254)">c</span>: <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">ndarray</span>) -&gt; <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">ndarray</span>:</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"""</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; Compute the gradient of f(w) = sum_i (w_i -
                                c_i)^2 with respect to w.</span></div><br>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; Inputs:</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - w: (d,)</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - c: (d,)</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; Returns:</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - grad: (d,)</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; """</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(181,206,168)">2</span> <span style="color:rgb(212,212,212)">*</span>
                        (<span style="color:rgb(156,220,254)">w</span> <span style="color:rgb(220,220,170)">-</span>
                        <span style="color:rgb(156,220,254)">c</span>)
                </div><br>
                <div><span style="color:rgb(156,220,254)">w</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(220,220,170)">array</span>([<span
                                style="color:rgb(181,206,168)">1.0</span>, <span
                                style="color:rgb(212,212,212)">-</span><span style="color:rgb(181,206,168)">2.0</span>,
                        <span style="color:rgb(181,206,168)">3.0</span>])
                </div>
                <div><span style="color:rgb(156,220,254)">c</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(220,220,170)">array</span>([<span
                                style="color:rgb(181,206,168)">0.0</span>, <span
                                style="color:rgb(181,206,168)">1.0</span>, <span
                                style="color:rgb(212,212,212)">-</span><span style="color:rgb(181,206,168)">1.0</span>])
                </div><br>
                <div><span style="color:rgb(156,220,254)">grad</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(220,220,170)">gradient_warmup</span>(<span
                                style="color:rgb(156,220,254)">w</span>, <span style="color:rgb(156,220,254)">c</span>)
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(86,156,214)">f</span><span
                                style="color:rgb(206,145,120)">"grad:"</span>, <span
                                style="color:rgb(156,220,254)">grad</span>)</div>
                <div><span style="color:rgb(206,145,120)">'''</span></div>
                <div><span style="color:rgb(206,145,120)">grad: [ 2. -6. &nbsp;8.]</span></div>
                <div><span style="color:rgb(206,145,120)">'''</span></div>
        </div>
</div>
        `
        const q2d = `
        <div dir="ltr">
        <div style="color:rgb(204,204,204);font-family:monospace;font-size:14px;line-height:18px;">
                <div><span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">matrix_grad</span>(<span
                                style="color:rgb(156,220,254)">A</span>: <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">ndarray</span>, <span
                                style="color:rgb(156,220,254)">B</span>: <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">ndarray</span>) -&gt; <span
                                style="color:rgb(78,201,176)">Tuple</span>[<span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">ndarray</span>, <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">ndarray</span>]:</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"""</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; For s = sum_{i,j} (A B)_{i,j}, compute gradients
                                wrt A and B.</span></div><br>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; If A is (m, p) and B is (p, n):</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - grad_A[i, k] = sum_j B[k, j]
                                &nbsp;(independent of i)</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - grad_B[k, j] = sum_i A[i, k]
                                &nbsp;(independent of j)</span></div><br>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; Returns (grad_A, grad_B) with the same shapes as
                                A and B, respectively.</span></div><br>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; Implementation notes:</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - Consider using einsum from einops for
                                computing sums over dimensions.</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - Alternatively, NumPy sum operations are
                                acceptable for this problem.</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - Use broadcasting to replicate values to the
                                correct shapes.</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; """</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">row_sum_B</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(156,220,254)">B</span>.<span
                                style="color:rgb(220,220,170)">sum</span>(<span
                                style="color:rgb(156,220,254)">axis</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">1</span>)
                        &nbsp;<span style="color:rgb(106,153,85)"># (3,)</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">col_sum_A</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(156,220,254)">A</span>.<span
                                style="color:rgb(220,220,170)">sum</span>(<span
                                style="color:rgb(156,220,254)">axis</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">0</span>)
                        &nbsp;<span style="color:rgb(106,153,85)"># (3,)</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">grad_A</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(156,220,254)">ones</span>((<span
                                style="color:rgb(156,220,254)">A</span>.<span
                                style="color:rgb(156,220,254)">shape</span>[<span
                                style="color:rgb(181,206,168)">0</span>], <span
                                style="color:rgb(181,206,168)">1</span>)) <span style="color:rgb(220,220,170)">@</span>
                        <span style="color:rgb(156,220,254)">row_sum_B</span>[<span
                                style="color:rgb(86,156,214)">None</span>, :]</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(86,156,214)">f</span><span
                                style="color:rgb(206,145,120)">"grad_A:"</span>, <span
                                style="color:rgb(156,220,254)">grad_A</span>)</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">grad_B</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(156,220,254)">col_sum_A</span>[:, <span
                                style="color:rgb(86,156,214)">None</span>] <span style="color:rgb(220,220,170)">@</span>
                        <span style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(156,220,254)">ones</span>((<span
                                style="color:rgb(181,206,168)">1</span>, <span
                                style="color:rgb(156,220,254)">B</span>.<span
                                style="color:rgb(156,220,254)">shape</span>[<span
                                style="color:rgb(181,206,168)">1</span>]))</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(86,156,214)">f</span><span
                                style="color:rgb(206,145,120)">"grad_B:"</span>, <span
                                style="color:rgb(156,220,254)">grad_B</span>)</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> [<span
                                style="color:rgb(156,220,254)">grad_A</span>, <span
                                style="color:rgb(156,220,254)">grad_B</span>]</div><br>
                <div><span style="color:rgb(79,193,255)">A</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(220,220,170)">array</span>([[<span
                                style="color:rgb(181,206,168)">2</span>., <span
                                style="color:rgb(181,206,168)">1</span>., <span
                                style="color:rgb(181,206,168)">3</span>.],</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [<span style="color:rgb(181,206,168)">4</span>.,
                        <span style="color:rgb(181,206,168)">5</span>., <span
                                style="color:rgb(181,206,168)">6</span>.]]) &nbsp;<span style="color:rgb(106,153,85)">#
                                (m=2, p=3)</span></div>
                <div><span style="color:rgb(79,193,255)">B</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(220,220,170)">array</span>([[<span
                                style="color:rgb(181,206,168)">7</span>., <span
                                style="color:rgb(181,206,168)">8</span>.],</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [<span style="color:rgb(181,206,168)">9</span>.,
                        <span style="color:rgb(181,206,168)">0</span>.],</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [<span style="color:rgb(181,206,168)">1</span>.,
                        <span style="color:rgb(181,206,168)">2</span>.]]) &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># (p=3, n=2)</span></div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(86,156,214)">f</span><span
                                style="color:rgb(206,145,120)">"A:"</span>, <span
                                style="color:rgb(79,193,255)">A</span>)</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(86,156,214)">f</span><span
                                style="color:rgb(206,145,120)">"B:"</span>, <span
                                style="color:rgb(79,193,255)">B</span>)</div><br>
                <div><span style="color:rgb(79,193,255)">C</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(220,220,170)">einsum</span>(<span
                                style="color:rgb(79,193,255)">A</span>, <span style="color:rgb(79,193,255)">B</span>,
                        <span style="color:rgb(206,145,120)">"m p, p n -&gt; m n"</span>)</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(86,156,214)">f</span><span
                                style="color:rgb(206,145,120)">"C:"</span>, <span
                                style="color:rgb(79,193,255)">C</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">sum</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(220,220,170)">einsum</span>(<span
                                style="color:rgb(79,193,255)">C</span>, <span style="color:rgb(206,145,120)">"i j
                                -&gt;"</span>)</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(86,156,214)">f</span><span
                                style="color:rgb(206,145,120)">"sum:"</span>, <span
                                style="color:rgb(156,220,254)">sum</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">grad</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(220,220,170)">matrix_grad</span>(<span
                                style="color:rgb(79,193,255)">A</span>, <span style="color:rgb(79,193,255)">B</span>)
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(86,156,214)">f</span><span
                                style="color:rgb(206,145,120)">"grad:"</span>, <span
                                style="color:rgb(156,220,254)">grad</span>)</div><br>
                <div><span style="color:rgb(206,145,120)">'''</span></div>
                <div><span style="color:rgb(206,145,120)">A: [[2. 1. 3.]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; [4. 5. 6.]]</span></div><br>
                <div><span style="color:rgb(206,145,120)">B: [[7. 8.]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; [9. 0.]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; [1. 2.]]</span></div><br>
                <div><span style="color:rgb(206,145,120)">C: [[26. 22.]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; [79. 44.]]</span></div><br>
                <div><span style="color:rgb(206,145,120)">sum: 171.0</span></div><br>
                <div><span style="color:rgb(206,145,120)">grad_A: [[15. &nbsp;9. &nbsp;3.]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;[15. &nbsp;9.
                                &nbsp;3.]]</span></div><br>
                <div><span style="color:rgb(206,145,120)">grad_B: [[6. 6.]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;[6. 6.]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;[9. 9.]]</span></div><br>
                <div><span style="color:rgb(206,145,120)">grad: [</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; array([</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp;[15., &nbsp;9., &nbsp;3.],</span>
                </div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp;[15., &nbsp;9., &nbsp;3.]</span>
                </div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; ]), </span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp;</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; array([</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp;[6., 6.],</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp;[6., 6.],</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp;[9., 9.]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; ])]</span></div>
                <div><span style="color:rgb(206,145,120)">'''</span></div>
        </div>
</div>
        `

        const q2e = `
        <div dir="ltr">
        <div style="color:rgb(204,204,204);font-family:monospace;font-size:14px;line-height:18px;">
                <div><span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">lsq_grad</span>(<span
                                style="color:rgb(156,220,254)">w</span>: <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">ndarray</span>, <span
                                style="color:rgb(156,220,254)">A</span>: <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">ndarray</span>, <span
                                style="color:rgb(156,220,254)">b</span>: <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">ndarray</span>) -&gt; <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">ndarray</span>:</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"""</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; Analytic gradient for f(w) = 1/2 * ||A w -
                                b||_2^2 with respect to w.</span></div><br>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; Inputs:</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - w: (d,)</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - A: (n, d)</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - b: (n,)</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; Returns:</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - grad: (d,) = A^T (A w - b)</span></div><br>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; Implementation notes:</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - Consider using einsum from einops for
                                matrix-vector operations.</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - Alternatively, NumPy @ operator is acceptable
                                here for simplicity.</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - No Python loops.</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; """</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(156,220,254)">A</span>.<span style="color:rgb(156,220,254)">T</span>
                        <span style="color:rgb(220,220,170)">@</span> (<span style="color:rgb(156,220,254)">A</span>
                        <span style="color:rgb(220,220,170)">@</span> <span style="color:rgb(156,220,254)">w</span>
                        <span style="color:rgb(220,220,170)">-</span> <span style="color:rgb(156,220,254)">b</span>)
                </div><br>
                <div><span style="color:rgb(156,220,254)">rng</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">random</span>.<span
                                style="color:rgb(220,220,170)">default_rng</span>(<span
                                style="color:rgb(181,206,168)">42</span>)</div>
                <div><span style="color:rgb(156,220,254)">n</span>, <span style="color:rgb(156,220,254)">d</span> <span
                                style="color:rgb(212,212,212)">=</span> <span style="color:rgb(181,206,168)">5</span>,
                        <span style="color:rgb(181,206,168)">4</span>
                </div>
                <div><span style="color:rgb(79,193,255)">A</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(156,220,254)">rng</span>.<span
                                style="color:rgb(220,220,170)">standard_normal</span>((<span
                                style="color:rgb(156,220,254)">n</span>, <span style="color:rgb(156,220,254)">d</span>))
                </div>
                <div><span style="color:rgb(156,220,254)">b</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(156,220,254)">rng</span>.<span
                                style="color:rgb(220,220,170)">standard_normal</span>(<span
                                style="color:rgb(156,220,254)">n</span>)</div>
                <div><span style="color:rgb(156,220,254)">w</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(156,220,254)">rng</span>.<span
                                style="color:rgb(220,220,170)">standard_normal</span>(<span
                                style="color:rgb(156,220,254)">d</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">Aw</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(220,220,170)">einsum</span>(<span
                                style="color:rgb(79,193,255)">A</span>, <span style="color:rgb(156,220,254)">w</span>,
                        <span style="color:rgb(206,145,120)">"n d, d -&gt; n"</span>) <span
                                style="color:rgb(220,220,170)">-</span> <span style="color:rgb(156,220,254)">b</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(86,156,214)">f</span><span
                                style="color:rgb(206,145,120)">"Aw:"</span>, <span
                                style="color:rgb(156,220,254)">Aw</span>)</div>
                <div><span style="color:rgb(156,220,254)">At</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(220,220,170)">einsum</span>(<span
                                style="color:rgb(79,193,255)">A</span>, <span style="color:rgb(206,145,120)">"n d -&gt;
                                d n"</span>)</div>
                <div><span style="color:rgb(156,220,254)">grad</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(220,220,170)">einsum</span>(<span
                                style="color:rgb(156,220,254)">At</span>, <span
                                style="color:rgb(156,220,254)">Aw</span>, <span style="color:rgb(206,145,120)">"i j, j
                                -&gt; i"</span>)
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(86,156,214)">f</span><span
                                style="color:rgb(206,145,120)">"grad:"</span>, <span
                                style="color:rgb(156,220,254)">grad</span>)</div>
                <div><span style="color:rgb(156,220,254)">grad2</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(79,193,255)">A</span>.<span style="color:rgb(156,220,254)">T</span> <span
                                style="color:rgb(220,220,170)">@</span> (<span style="color:rgb(79,193,255)">A</span>
                        <span style="color:rgb(220,220,170)">@</span> <span style="color:rgb(156,220,254)">w</span>
                        <span style="color:rgb(220,220,170)">-</span> <span style="color:rgb(156,220,254)">b</span>)
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(86,156,214)">f</span><span
                                style="color:rgb(206,145,120)">"grad2:"</span>, <span
                                style="color:rgb(156,220,254)">grad2</span>)</div><br>
                <div><span style="color:rgb(206,145,120)">'''</span></div>
                <div><span style="color:rgb(206,145,120)">Aw: &nbsp; &nbsp; [ 0.18641783 &nbsp;0.59098727 -1.02831734
                                &nbsp;0.5475092 &nbsp; 0.08847468]</span></div>
                <div><span style="color:rgb(206,145,120)">grad: &nbsp; [-1.01017781 &nbsp;0.44609487 -0.35516438
                                -1.28626195]</span></div>
                <div><span style="color:rgb(206,145,120)">grad2: &nbsp;[-1.01017781 &nbsp;0.44609487 -0.35516438
                                -1.28626195]</span></div>
                <div><span style="color:rgb(206,145,120)">'''</span></div><br>
                <div><span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">lsq_finite_diff_grad</span>(<span
                                style="color:rgb(156,220,254)">w</span>: <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">ndarray</span>,</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(156,220,254)">A</span>: <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">ndarray</span>,</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(156,220,254)">b</span>: <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">ndarray</span>,</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(156,220,254)">epsilon</span>: <span
                                style="color:rgb(78,201,176)">float</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(181,206,168)">1e-5</span>) -&gt; <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">ndarray</span>:
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"""</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; Central-difference numerical gradient for f(w) =
                                1/2 * ||A w - b||_2^2.</span></div><br>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; Inputs:</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - w: (d,)</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - A: (n, d)</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - b: (n,)</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - epsilon: small step size for finite
                                differences</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; Returns:</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - grad_fd: (d,)</span></div><br>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; Implementation notes:</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - Compute each component using central
                                differences.</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - Vectorize the computation using NumPy
                                broadcasting.</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - Consider using einsum from einops for
                                matrix-vector operations.</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - No Python loops over gradient
                                components.</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; """</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">d</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(156,220,254)">w</span>.<span
                                style="color:rgb(156,220,254)">shape</span>[<span
                                style="color:rgb(181,206,168)">0</span>]</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(79,193,255)">I</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(220,220,170)">eye</span>(<span style="color:rgb(156,220,254)">d</span>)
                </div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(106,153,85)"># All positive and negative perturbations at
                                once:</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(106,153,85)"># W_plus[k] &nbsp;= w + epsilon * e_k</span>
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(106,153,85)"># W_minus[k] = w - epsilon * e_k</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">W_plus</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(156,220,254)">w</span>[<span style="color:rgb(86,156,214)">None</span>,
                        :] <span style="color:rgb(220,220,170)">+</span> <span
                                style="color:rgb(156,220,254)">epsilon</span> <span
                                style="color:rgb(212,212,212)">*</span> <span style="color:rgb(79,193,255)">I</span>
                        &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># shape: (d, d)</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">W_minus</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(156,220,254)">w</span>[<span style="color:rgb(86,156,214)">None</span>,
                        :] <span style="color:rgb(220,220,170)">-</span> <span
                                style="color:rgb(156,220,254)">epsilon</span> <span
                                style="color:rgb(212,212,212)">*</span> <span style="color:rgb(79,193,255)">I</span>
                        &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># shape: (d, d)</span></div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(106,153,85)"># Compute A @ W_plus[k] and A @ W_minus[k] for
                                all k at once.</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(106,153,85)"># Result shapes: (d, n)</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">AW_plus</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(220,220,170)">einsum</span>(<span
                                style="color:rgb(206,145,120)">'nd,kd-&gt;kn'</span>, <span
                                style="color:rgb(156,220,254)">A</span>, <span
                                style="color:rgb(156,220,254)">W_plus</span>)</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">AW_minus</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(220,220,170)">einsum</span>(<span
                                style="color:rgb(206,145,120)">'nd,kd-&gt;kn'</span>, <span
                                style="color:rgb(156,220,254)">A</span>, <span
                                style="color:rgb(156,220,254)">W_minus</span>)</div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(106,153,85)"># Residuals for each perturbed point</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">R_plus</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(156,220,254)">AW_plus</span> <span
                                style="color:rgb(220,220,170)">-</span> <span
                                style="color:rgb(156,220,254)">b</span>[<span style="color:rgb(86,156,214)">None</span>,
                        :] &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># shape: (d, n)</span>
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">R_minus</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(156,220,254)">AW_minus</span> <span
                                style="color:rgb(220,220,170)">-</span> <span
                                style="color:rgb(156,220,254)">b</span>[<span style="color:rgb(86,156,214)">None</span>,
                        :] &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># shape: (d, n)</span></div>
                <br>
                <div>&nbsp; &nbsp; <span style="color:rgb(106,153,85)"># f(w +/- epsilon e_k) for every k</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">f_plus</span> <span
                                style="color:rgb(212,212,212)">=</span> <span style="color:rgb(181,206,168)">0.5</span>
                        <span style="color:rgb(212,212,212)">*</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(220,220,170)">einsum</span>(<span
                                style="color:rgb(206,145,120)">'kn,kn-&gt;k'</span>, <span
                                style="color:rgb(156,220,254)">R_plus</span>, <span
                                style="color:rgb(156,220,254)">R_plus</span>) &nbsp; <span
                                style="color:rgb(106,153,85)"># shape: (d,)</span>
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">f_minus</span> <span
                                style="color:rgb(212,212,212)">=</span> <span style="color:rgb(181,206,168)">0.5</span>
                        <span style="color:rgb(212,212,212)">*</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(220,220,170)">einsum</span>(<span
                                style="color:rgb(206,145,120)">'kn,kn-&gt;k'</span>, <span
                                style="color:rgb(156,220,254)">R_minus</span>, <span
                                style="color:rgb(156,220,254)">R_minus</span>)
                </div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">grad_fd</span> <span
                                style="color:rgb(212,212,212)">=</span> (<span
                                style="color:rgb(156,220,254)">f_plus</span> <span
                                style="color:rgb(212,212,212)">-</span> <span
                                style="color:rgb(156,220,254)">f_minus</span>) <span
                                style="color:rgb(212,212,212)">/</span> (<span style="color:rgb(181,206,168)">2.0</span>
                        <span style="color:rgb(212,212,212)">*</span> <span
                                style="color:rgb(156,220,254)">epsilon</span>)
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(156,220,254)">grad_fd</span></div><br>
                <div><span style="color:rgb(156,220,254)">grad3</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(220,220,170)">lsq_finite_diff_grad</span>(<span
                                style="color:rgb(156,220,254)">w</span>, <span style="color:rgb(79,193,255)">A</span>,
                        <span style="color:rgb(156,220,254)">b</span>, <span
                                style="color:rgb(156,220,254)">epsilon</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">1e-5</span>)
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(86,156,214)">f</span><span
                                style="color:rgb(206,145,120)">"grad3:"</span>, <span
                                style="color:rgb(156,220,254)">grad3</span>)</div><br>
                <div><span style="color:rgb(206,145,120)">'''</span></div>
                <div><span style="color:rgb(206,145,120)">grad3: [-1.01017781 &nbsp;0.44609487 -0.35516438
                                -1.28626195]</span></div>
                <div><span style="color:rgb(206,145,120)">'''</span></div>
        </div>
</div>
        `
        const q3c = `
        <div dir="ltr">
        <div style="color:rgb(204,204,204);font-family:monospace;font-size:14px;line-height:18px;">
                <div><span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">gradient_descent_quadratic</span>(<span
                                style="color:rgb(156,220,254)">x</span>: <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">ndarray</span>, <span
                                style="color:rgb(156,220,254)">w</span>: <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">ndarray</span>, <span
                                style="color:rgb(156,220,254)">theta0</span>: <span
                                style="color:rgb(78,201,176)">float</span>, <span
                                style="color:rgb(156,220,254)">lr</span>: <span
                                style="color:rgb(78,201,176)">float</span>,</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp;<span style="color:rgb(156,220,254)">num_steps</span>: <span
                                style="color:rgb(78,201,176)">int</span>) -&gt; <span
                                style="color:rgb(78,201,176)">float</span>:</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"""</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; Minimize f(θ) = sum_i w_i * (θ - x_i)^2 with
                                gradient descent in 1D.</span></div><br>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; Inputs:</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - x: (n,) data values</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - w: (n,) positive weights</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - theta0: initial scalar θ</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - lr: learning rate (stepsize)</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - num_steps: number of gradient steps
                                (non-negative integer)</span></div><br>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; Returns:</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; - theta: final scalar after num_steps
                                updates</span></div><br>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; Gradient: df/dθ = 2 * sum_i w_i * (θ -
                                x_i).</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; """</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">f_of_theta</span>(<span
                                style="color:rgb(156,220,254)">theta</span>, <span
                                style="color:rgb(156,220,254)">x</span>, <span style="color:rgb(156,220,254)">w</span>):
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(220,220,170)">sum</span>(<span style="color:rgb(156,220,254)">w</span>
                        <span style="color:rgb(212,212,212)">*</span> (<span style="color:rgb(156,220,254)">theta</span>
                        <span style="color:rgb(212,212,212)">-</span> <span
                                style="color:rgb(156,220,254)">x</span>)<span
                                style="color:rgb(212,212,212)">**</span><span style="color:rgb(181,206,168)">2</span>)
                </div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">grad_f_of_theta</span>(<span
                                style="color:rgb(156,220,254)">theta</span>, <span
                                style="color:rgb(156,220,254)">x</span>, <span style="color:rgb(156,220,254)">w</span>):
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(181,206,168)">2</span> <span style="color:rgb(212,212,212)">*</span>
                        <span style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(220,220,170)">sum</span>(<span style="color:rgb(156,220,254)">w</span>
                        <span style="color:rgb(212,212,212)">*</span> (<span style="color:rgb(156,220,254)">theta</span>
                        <span style="color:rgb(212,212,212)">-</span> <span style="color:rgb(156,220,254)">x</span>))
                </div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">theta</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(156,220,254)">theta0</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">theta_star</span> <span
                                style="color:rgb(212,212,212)">=</span> (<span style="color:rgb(156,220,254)">w</span>
                        <span style="color:rgb(220,220,170)">*</span> <span
                                style="color:rgb(156,220,254)">x</span>).<span
                                style="color:rgb(220,220,170)">sum</span>() <span
                                style="color:rgb(212,212,212)">/</span> <span
                                style="color:rgb(156,220,254)">w</span>.<span
                                style="color:rgb(220,220,170)">sum</span>()
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(86,156,214)">f</span><span style="color:rgb(206,145,120)">"theta_star
                                is: </span><span style="color:rgb(86,156,214)">{</span><span
                                style="color:rgb(156,220,254)">theta_star</span><span
                                style="color:rgb(86,156,214)">}</span><span style="color:rgb(206,145,120)">"</span>)
                </div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">for</span> <span
                                style="color:rgb(156,220,254)">iteration</span> <span
                                style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(78,201,176)">range</span>(<span
                                style="color:rgb(156,220,254)">num_steps</span>):</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(156,220,254)">f</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(220,220,170)">f_of_theta</span>(<span
                                style="color:rgb(156,220,254)">theta</span>, <span
                                style="color:rgb(156,220,254)">x</span>, <span style="color:rgb(156,220,254)">w</span>)
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(86,156,214)">f</span><span style="color:rgb(206,145,120)">"theta:
                        </span><span style="color:rgb(86,156,214)">{</span><span
                                style="color:rgb(156,220,254)">theta</span><span
                                style="color:rgb(86,156,214)">}</span><span style="color:rgb(206,145,120)"> f_of_theta:
                        </span><span style="color:rgb(86,156,214)">{</span><span
                                style="color:rgb(156,220,254)">f</span><span style="color:rgb(86,156,214)">}</span><span
                                style="color:rgb(206,145,120)">"</span>)</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(156,220,254)">theta</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(156,220,254)">theta</span> <span
                                style="color:rgb(212,212,212)">-</span> <span style="color:rgb(156,220,254)">lr</span>
                        <span style="color:rgb(212,212,212)">*</span> <span
                                style="color:rgb(220,220,170)">grad_f_of_theta</span>(<span
                                style="color:rgb(156,220,254)">theta</span>, <span
                                style="color:rgb(156,220,254)">x</span>, <span style="color:rgb(156,220,254)">w</span>)
                </div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(156,220,254)">theta</span></div><br>
                <div><span style="color:rgb(156,220,254)">x</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(220,220,170)">array</span>([<span
                                style="color:rgb(181,206,168)">0.0</span>, <span
                                style="color:rgb(181,206,168)">10.0</span>])</div>
                <div><span style="color:rgb(156,220,254)">w</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(220,220,170)">array</span>([<span
                                style="color:rgb(181,206,168)">1.0</span>, <span
                                style="color:rgb(181,206,168)">3.0</span>])</div>
                <div><span style="color:rgb(156,220,254)">theta0</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(181,206,168)">100.0</span>
                </div>
                <div><span style="color:rgb(156,220,254)">lr</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(181,206,168)">0.25</span> <span style="color:rgb(212,212,212)">/</span>
                        <span style="color:rgb(156,220,254)">w</span>.<span style="color:rgb(220,220,170)">sum</span>()
                        &nbsp;<span style="color:rgb(106,153,85)"># stable stepsize (&lt; 1/(2*sum w))</span>
                </div><br>
                <div><span style="color:rgb(156,220,254)">theta</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(220,220,170)">gradient_descent_quadratic</span>(<span
                                style="color:rgb(156,220,254)">x</span>, <span style="color:rgb(156,220,254)">w</span>,
                        <span style="color:rgb(156,220,254)">theta0</span>, <span
                                style="color:rgb(156,220,254)">lr</span>, <span
                                style="color:rgb(156,220,254)">num_steps</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">200</span>)
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(86,156,214)">f</span><span
                                style="color:rgb(206,145,120)">"theta: </span><span
                                style="color:rgb(86,156,214)">{</span><span
                                style="color:rgb(156,220,254)">theta</span><span
                                style="color:rgb(86,156,214)">}</span><span style="color:rgb(206,145,120)">"</span>)
                </div><br>
                <div><span style="color:rgb(206,145,120)">'''</span></div>
                <div><span style="color:rgb(206,145,120)">theta_star is: 7.5</span></div>
                <div><span style="color:rgb(206,145,120)">theta: 100.0 f_of_theta: 34300.0</span></div>
                <div><span style="color:rgb(206,145,120)">theta: 53.75 f_of_theta: 8631.25</span></div>
                <div><span style="color:rgb(206,145,120)">theta: 30.625 f_of_theta: 2214.0625</span></div>
                <div><span style="color:rgb(206,145,120)">theta: 19.0625 f_of_theta: 609.765625</span></div>
                <div><span style="color:rgb(206,145,120)">theta: 13.28125 f_of_theta: 208.69140625</span></div>
                <div><span style="color:rgb(206,145,120)">theta: 10.390625 f_of_theta: 108.4228515625</span></div>
                <div><span style="color:rgb(206,145,120)">theta: 8.9453125 f_of_theta: 83.355712890625</span></div>
                <div><span style="color:rgb(206,145,120)">theta: 8.22265625 f_of_theta: 77.08892822265625</span></div>
                <div><span style="color:rgb(206,145,120)">theta: 7.861328125 f_of_theta: 75.52223205566406</span></div>
                <div><span style="color:rgb(206,145,120)">theta: 7.6806640625 f_of_theta: 75.13055801391602</span></div>
                <div><span style="color:rgb(206,145,120)">theta: 7.59033203125 f_of_theta: 75.032639503479</span></div>
                <div><span style="color:rgb(206,145,120)">theta: 7.545166015625 f_of_theta: 75.00815987586975</span>
                </div>
                <div><span style="color:rgb(206,145,120)">theta: 7.5225830078125 f_of_theta: 75.00203996896744</span>
                </div>
                <div><span style="color:rgb(206,145,120)">theta: 7.51129150390625 f_of_theta: 75.00050999224186</span>
                </div>
                <div><span style="color:rgb(206,145,120)">...</span></div>
                <div><span style="color:rgb(206,145,120)">theta: 7.500000000002629 f_of_theta: 75.0</span></div>
                <div><span style="color:rgb(206,145,120)">theta: 7.5000000000013145 f_of_theta: 75.0</span></div>
                <div><span style="color:rgb(206,145,120)">theta: 7.500000000000003 f_of_theta: 75.0</span></div>
                <div><span style="color:rgb(206,145,120)">theta: 7.500000000000002 f_of_theta: 75.0</span></div>
                <div><span style="color:rgb(206,145,120)">theta: 7.500000000000001 f_of_theta: 75.0</span></div>
                <div><span style="color:rgb(206,145,120)">theta: 7.5 f_of_theta: 75.0</span></div>
                <div><span style="color:rgb(206,145,120)">theta: 7.5</span></div>
                <div><span style="color:rgb(206,145,120)">'''</span></div>
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

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer p-[15px]">
                                                                                        NumPy chat session transcript: <br />
                                                                                        https://chatgpt.com/share/69b0fd44-61e8-8005-957f-ed073172e429
                                                                                </div>
                                                                        </div>

                                                                </CardDrawer>

                                                                <CardDrawer id='1' name='1b. Linear Algebra Complexity'>

                                                                        <div className="assignment-question-wrapper p-[15px] mb-[0px]">
                                                                                <div className="assignment-question">
                                                                                        Suppose you have two matrices <span className="math">{"\\[A \\in \\mathbb{R}^{m \\times n}\\]"}</span> and
                                                                                        <span className="math">{"\\[B \\in \\mathbb{R}^{n \\times p}\\]"}</span>. What is the time complexity of
                                                                                        computing their product <span className="math">{"\\[AB\\]"}</span> using the standard matrix multiplication
                                                                                        algorithm? Express your answer using big-O notation and briefly justify why.
                                                                                        <br /><br />

                                                                                        <span className="what-to-expect pl-[5px]">Expected: The time complexity in big-O notation and a 1-2 sentence explanation.</span>
                                                                                </div>
                                                                        </div>

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer mt-[10px] p-[15px]">

                                                                                        <p>We have 2 matrices, A and B where A.shape is (m, n) and B.shape is (n, p). To compute the product
                                                                                                AB, you need to calculate the dot product of A x B. The resulting matrix AB will have shape (m, p).
                                                                                        </p>
                                                                                        <p>
                                                                                                Dot product formula (for each entry in the AB matrix):
                                                                                        </p>
                                                                                        <span className="math">{"\\[(AB)_{ij} = \\sum_{k=1}^{n} A_{ik} B_{kj}\\]"}</span>

                                                                                        Using nested loops, we can write the pseudo code like this:<br /><br />

                                                                                        for i in 1..m<br />
                                                                                        &nbsp;&nbsp;for j in 1..p<br />
                                                                                        &nbsp;&nbsp;&nbsp;&nbsp;for k in 1..n<br />
                                                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="math">{"\\[(AB)_{i,j} += A_{i,k} * B_{k,j} \\]"}</span><br /><br />

                                                                                        If we ignore the summation/addition steps and only consider the number of multiplications, one entry
                                                                                        of <span className="math">{"\\[AB_{i,j}\\]"}</span> requires one multiplication
                                                                                        (<span className="math">{"\\[A_{i,k} * B_{k,j}\\]"}</span>), costing
                                                                                        <span className="math">{"\\[O(n)\\]"}</span>. This is done in a loop p times and then looped m
                                                                                        times, costing <span className="math">{"\\[O(n) * p * m\\]"}</span>, resulting in a total
                                                                                        complexity of <span className="math">{"\\[O(npm)\\]"}</span>.
                                                                                        <br /><br />
                                                                                        Answer: <span className="math">{"\\[O(npm)\\]"}</span>
                                                                                </div>
                                                                        </div>

                                                                </CardDrawer>

                                                                <CardDrawer id='1' name='1c. Learn Einsum operations'>

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer p-[15px]">
                                                                                        Einsum chat session transcript: <br />
                                                                                        https://chatgpt.com/share/69b105a2-dd00-8005-8e4e-df90849eb62f
                                                                                </div>
                                                                        </div>

                                                                </CardDrawer>

                                                                <CardDrawer id='1' name='1d. Einstein Summation'>

                                                                        <div className="assignment-question-wrapper p-[15px] mb-[0px]">
                                                                                <div className="assignment-question">
                                                                                        Given <span className="math">{"\\[X \\in \\mathbb{R}^{n\\times d}\\]"}</span> and
                                                                                        <span className="math">{"\\[\\mathbf{w} \\in \\mathbb{R}^d\\]"}</span>: <br />
                                                                                        (i) write an <span className="texttt">einsum</span> string for <span className="math">{"\\[X\\mathbf{w}\\]"}</span>;
                                                                                        <br />
                                                                                        (ii) for the pairwise dot-product matrix <span className="math">{"\\[XX^\\top\\]"}</span>;
                                                                                        <br />
                                                                                        (iii) for <span className="math">{"\\[\\operatorname{diag}(X^\\top X)\\]"}</span> (column-wise squared norms).
                                                                                        <br /><br />

                                                                                        Briefly justify each.
                                                                                        <br /><br />
                                                                                        <span className="what-to-expect pl-[5px]">Expected: Provide einsum strings (e.g., <span className="texttt">n d, d m -&gt; n m</span>).</span>
                                                                                </div>

                                                                        </div>

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                        <div className="assignment-question">
                                                                                                <ol type="i">
                                                                                                        <li>
                                                                                                                <span className="math">{"\\[Xw = einsum(X, w, 'n\\ d,\\ d \\rightarrow n')\\]"}</span>
                                                                                                                <br />Explanation: a matrix-vector multiplication - multiply and sum over d, keep n
                                                                                                                <br /><br />
                                                                                                        </li>
                                                                                                        <li>
                                                                                                                <span className="math">{"\\[XX^{T} = einsum(X, X, 'n\\ d,\\ k\\ d \\rightarrow n\\ k')\\]"}</span>
                                                                                                                <br />Explanation: pair-wise dot product (each entry is the dot product of row n with row k of X)
                                                                                                                <br /><br />
                                                                                                        </li>
                                                                                                        <li>
                                                                                                                <span className="math">{"\\[diag(X^{T}X) = einsum(X, X, 'n\\ d,\\ n\\ d \\rightarrow d')\\]"}</span>
                                                                                                                <br />Explanation: squared L2 norm of each column d (multiply X with itself elementwise and sum over rows)
                                                                                                        </li>
                                                                                                </ol>
                                                                                        </div>

                                                                                </div>
                                                                        </div>

                                                                </CardDrawer>

                                                                <CardDrawer id='1' name='1e. Batch Linear Projection (einsum)'>

                                                                        <div className="assignment-question-wrapper p-[15px] mb-[0px]">
                                                                                <div className="assignment-question">
                                                                                        Let <span className="math">{"\\[x \\in \\mathbb{R}^{B\\times D_{in}}\\]"}</span> be a batch of input
                                                                                        row-vectors, <span className="math">{"\\[W \\in \\mathbb{R}^{D_{in}\\times D_{out}}\\]"}</span> a weight
                                                                                        matrix, and <span className="math">{"\\[b \\in \\mathbb{R}^{D_{out}}\\]"}</span> a bias vector. We want
                                                                                        to compute the following linear transformation in a batched manner:
                                                                                        <span className="math">{"\\[y[i] = x[i] W + b\\]"}</span> for each batch index
                                                                                        <span className="math">{"\\[i\\]"}</span>, returning
                                                                                        <span className="math">{"\\[y \\in \\mathbb{R}^{B\\times D_{out}}\\]"}</span>.
                                                                                        Use <span className="texttt">einsum</span> (from <span className="texttt">einops</span>) without loops
                                                                                        for the matrix multiplication and NumPy broadcasting for the bias; do not use Python loops.
                                                                                        <br /><br />

                                                                                        <span className="what-to-expect pl-[5px]">Expected: Implement <span className="texttt">linear_project(x, W, b)</span> in
                                                                                                <span className="texttt"> submission.py</span> with shapes: <span className="texttt">x:(B,D_in)</span>,
                                                                                                <span className="texttt"> W:(D_in,D_out)</span>, <span className="texttt"> b:(D_out,)</span>
                                                                                                <span className="math">{"\\[\\rightarrow\\]"}</span> <span className="texttt"> (B,D_out)</span>.</span>
                                                                                </div>
                                                                        </div>

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                        <div dangerouslySetInnerHTML={createMarkup(q1e)} />
                                                                                </div>
                                                                        </div>

                                                                </CardDrawer>

                                                                <CardDrawer id='1' name='1f. Split Last Dimension (einops.rearrange pattern string)'>

                                                                        <div className="assignment-question-wrapper p-[15px] mb-[0px]">
                                                                                <div className="assignment-question">
                                                                                        Let <span className="math">{"\\[x \\in \\mathbb{R}^{B\\times D}\\]"}</span> and let
                                                                                        <span className="math">{"\\[G\\]"}</span> divide <span className="math">{"\\[D\\]"}</span> evenly. We
                                                                                        want to reshape the last axis into <span className="math">{"\\[G\\]"}</span> equal chunks, producing
                                                                                        <span className="math">{"\\[y \\in \\mathbb{R}^{B\\times G\\times (D/G)}\\]"}</span>. Write the
                                                                                        <span className="texttt">einops.rearrange</span> pattern string that performs this reshape. Do not
                                                                                        perform the reshape yourself; just return the pattern string. It is fine to assume
                                                                                        <span className="texttt">D % G == 0</span>.
                                                                                        <br /><br /><span className="what-to-expect">Expected: Implement <span className="texttt">split_last_dim_pattern()</span> in
                                                                                                <span className="texttt">submission.py</span> returning a rearrange pattern string (e.g.,
                                                                                                <span className="texttt">'b d -&gt; b g (d/g)'</span>). The autograder will apply it with the
                                                                                                appropriate <span className="texttt">g=num_groups</span>.</span>
                                                                                </div>

                                                                        </div>

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                        <div dangerouslySetInnerHTML={createMarkup(q1f)} />
                                                                                </div>
                                                                        </div>

                                                                </CardDrawer>

                                                                <CardDrawer id='1' name='1g. Normalize Inner Products (einsum)'>

                                                                        <div className="assignment-question-wrapper p-[15px] mb-[0px]">
                                                                                <div className="assignment-question">
                                                                                        Let <span className="math">{"\\[A \\in \\mathbb{R}^{B\\times M\\times D}\\]"}</span> and
                                                                                        <span className="math">{"\\[C \\in \\mathbb{R}^{B\\times N\\times D}\\]"}</span>. For each batch
                                                                                        <span className="math">{"\\[b\\]"}</span>, we want the matrix
                                                                                        <span className="math">{"\\[S[b,i,j] = \\langle A[b,i,:], C[b,j,:] \\rangle\\]"}</span> of all pairwise
                                                                                        dot products, giving <span className="math">{"\\[S \\in \\mathbb{R}^{B\\times M\\times N}\\]"}</span>.
                                                                                        Use <span className="texttt">einsum</span> (from <span className="texttt">einops</span>) without loops.
                                                                                        If <span className="texttt">normalize=True</span>, divide the result by
                                                                                        <span className="math">{"\\[\\sqrt{D}\\]"}</span>.
                                                                                        <br /><br /><span className="what-to-expect">Expected: Implement
                                                                                                <span className="texttt">normalized_inner_products(A, C, normalize=True)</span> in
                                                                                                <span className="texttt">submission.py</span> with shapes: <span className="texttt">A:(B,M,D)</span>,
                                                                                                <span className="texttt">C:(B,N,D)</span> <span className="math">{"\\[\\rightarrow\\]"}</span>
                                                                                                <span className="texttt">(B,M,N)</span>.</span>
                                                                                </div>

                                                                        </div>

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                        <div dangerouslySetInnerHTML={createMarkup(q1g)} />
                                                                                </div>
                                                                        </div>

                                                                </CardDrawer>

                                                                <CardDrawer id='1' name='1h. Mask Strictly Upper Triangle'>

                                                                        <div className="assignment-question-wrapper p-[15px] mb-[0px]">
                                                                                <div className="assignment-question">
                                                                                        Let <span className="math">{"\\[\\text{scores} \\in \\mathbb{R}^{B\\times L\\times L}\\]"}</span>. For
                                                                                        each batch, set entries with column index strictly greater than the row index (i.e., the strictly
                                                                                        upper-triangular part where <span className="math">{"\\[j>i\\]"}</span>) to
                                                                                        <span className="texttt">-np.inf</span>, leaving other entries unchanged. Construct the mask using
                                                                                        NumPy broadcasting; do not use loops. <br />
                                                                                        <br />

                                                                                        For example, if <span className="math">{"\\[L=3\\]"}</span>, transform:<br />
                                                                                        <span className="math">{"\\[\\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 9 \\end{pmatrix} \\rightarrow \\begin{pmatrix} 1 & -\\infty & -\\infty \\\\ 4 & 5 & -\\infty \\\\ 7 & 8 & 9 \\end{pmatrix}\\]"}</span>
                                                                                        <br />
                                                                                        <br />

                                                                                        <span className="what-to-expect">Expected: Implement <span className="texttt">mask_strictly_upper(scores)</span> in
                                                                                                <span className="texttt">submission.py</span> for <span className="texttt">scores:(B,L,L)</span>,
                                                                                                returning a masked array of the same shape.</span>
                                                                                </div>

                                                                        </div>

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                        <div dangerouslySetInnerHTML={createMarkup(q1h)} />
                                                                                </div>
                                                                        </div>

                                                                </CardDrawer>

                                                                <CardDrawer id='1' name='1i. Probability-Weighted Sum (einops.einsum pattern string)'>

                                                                        <div className="assignment-question-wrapper p-[15px] mb-[0px]">
                                                                                <div className="assignment-question">
                                                                                        Let <span className="math">{"\\[P \\in \\mathbb{R}^{B\\times N}\\]"}</span> be batch-wise probability
                                                                                        weights (each row sums to 1) and
                                                                                        <span className="math">{"\\[V \\in \\mathbb{R}^{B\\times N\\times D}\\]"}</span> the corresponding value
                                                                                        vectors. Provide only the <span className="texttt">numpy.einsum</span> string that computes the weighted sums
                                                                                        <span className="math">{"\\[out[b,:] = \\sum_{j=1}^N P[b,j]\\, V[b,j,:]\\]"}</span>, yielding
                                                                                        <span className="math">{"\\[out \\in \\mathbb{R}^{B\\times D}\\]"}</span>.<br /><br />

                                                                                        <span className="what-to-expect">Expected: Implement
                                                                                                <span className="texttt">prob_weighted_sum_einsum()</span> in
                                                                                                <span className="texttt">submission.py</span> that returns the einsum string; the autograder will
                                                                                                apply it to <span className="texttt">P</span> and <span className="texttt">V</span>.</span>
                                                                                </div>

                                                                        </div>

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                        <div dangerouslySetInnerHTML={createMarkup(q1i)} />
                                                                                </div>
                                                                        </div>

                                                                </CardDrawer>

                                                                <div className="jade-h11 mt-[15px]">
                                                                        2. Calculus and Gradients
                                                                </div>

                                                                <CardDrawer id='1' name='2a. Gradient Warmup'>

                                                                        <div className="assignment-question-wrapper p-[15px] mb-[0px]">
                                                                                <div className="assignment-question">
                                                                                        For <span className="math">{"\\[f(\\mathbf{w})=\\sum_{i=1}^d (w_i-c_i)^2\\]"}</span>, derive
                                                                                        <span className="math">{"\\[\\nabla f(\\mathbf{w})\\]"}</span>. Then evaluate the gradient at
                                                                                        <span className="math">{"\\[\\mathbf{w}=\\mathbf{0}\\]"}</span>.
                                                                                        <br /><br /><span className="what-to-expect">Expected: A compact vector expression (e.g.,
                                                                                                <span className="math">{"\\[(\\mathbf{w}+\\mathbf{c})\\]"}</span>) and one evaluated vector.</span>
                                                                                </div>

                                                                        </div>

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                        <div className="assignment-question">
                                                                                                For <span className="math">{"\\[f(w) = \\sum_i (w_i - c_i)^2\\]"}</span> find
                                                                                                <span className="math">{"\\[\\nabla f(w)\\]"}</span> and evaluate at w = 0.
                                                                                                <br /><br />

                                                                                                Since <span className="math">{"\\[c_i\\]"}</span> is a constant, we only need to differentiate
                                                                                                with respect to w.
                                                                                                <br /><br />

                                                                                                So for each <span className="math">{"\\[w_i\\]"}</span> the derivative with respect to
                                                                                                <span className="math">{"\\[w_i\\]"}</span> using the power rule is:
                                                                                                <span className="math">{"\\[\\frac{\\partial f}{\\partial w_i} = 2(w_i - c_i)\\]"}</span>
                                                                                                <br /><br />

                                                                                                So the gradient is:<br />
                                                                                                <span className="math">{"\\[\\nabla f(w) = 2(w - c)\\]"}</span>
                                                                                                <br /><br />

                                                                                                At w = 0, <span className="math">{"\\[\\nabla f(0) = -2c\\]"}</span>
                                                                                        </div>

                                                                                </div>
                                                                        </div>

                                                                </CardDrawer>

                                                                <CardDrawer id='1' name='2b. Gradient Warmup Implementation'>

                                                                        <div className="assignment-question-wrapper p-[15px] mb-[0px]">
                                                                                <div className="assignment-question">
                                                                                        Given a vector <span className="math">{"\\[\\mathbf{w}\\]"}</span> and constants
                                                                                        <span className="math">{"\\[\\mathbf{c}\\]"}</span>, compute the gradient
                                                                                        <span className="math">{"\\[\\nabla f(\\mathbf{w})\\]"}</span> where
                                                                                        <span className="math">{"\\[f(\\mathbf{w})=\\sum_{i=1}^d (w_i-c_i)^2\\]"}</span>.

                                                                                        <br /><br />
                                                                                        <span className="what-to-expect">Expected: Implement <span className="texttt">gradient_warmup(w, c)</span> in
                                                                                                <span className="texttt">submission.py</span> that takes vectors <span className="texttt">w</span> and
                                                                                                <span className="texttt">c</span> and returns the gradient vector.</span>
                                                                                </div>

                                                                        </div>

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                        <div dangerouslySetInnerHTML={createMarkup(q2b)} />
                                                                                </div>
                                                                        </div>

                                                                </CardDrawer>

                                                                <CardDrawer id='1' name='2c. Matrix Multiplication Gradient'>

                                                                        <div className="assignment-question-wrapper p-[15px] mb-[0px]">
                                                                                <div className="assignment-question">
                                                                                        Consider two matrices <span className="math">{"\\[A\\]"}</span> (size
                                                                                        <span className="math">{"\\[m \\times n\\]"}</span>) and <span className="math">{"\\[B\\]"}</span>
                                                                                        (size <span className="math">{"\\[n \\times p\\]"}</span>) that are multiplied together to form
                                                                                        <span className="math">{"\\[C = AB\\]"}</span>, and then all entries of
                                                                                        <span className="math">{"\\[C\\]"}</span> are summed to produce a scalar
                                                                                        <span className="math">{"\\[s = \\sum_{i,j} C_{i,j}\\]"}</span>.

                                                                                        Let <span className="math">{"\\[A = \\begin{pmatrix} 2 & 1 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix}\\]"}</span>
                                                                                        and <span className="math">{"\\[B = \\begin{pmatrix} 7 & 8 \\\\ 9 & 0 \\\\ 1 & 2 \\end{pmatrix}\\]"}</span>.

                                                                                        Compute <span className="math">{"\\[C = AB\\]"}</span> and
                                                                                        <span className="math">{"\\[s = \\sum_{i,j} C_{i,j}\\]"}</span>. Then find the gradient
                                                                                        <span className="math">{"\\[\\frac{\\partial s}{\\partial A_{i,k}}\\]"}</span> for each entry of
                                                                                        matrix <span className="math">{"\\[A\\]"}</span>, and similarly find
                                                                                        <span className="math">{"\\[\\frac{\\partial s}{\\partial B_{k,j}}\\]"}</span> for each entry of
                                                                                        matrix <span className="math">{"\\[B\\]"}</span>.

                                                                                        <br /><br /><span className="what-to-expect">Expected: The computed matrices <span className="math">{"\\[C\\]"}</span> and
                                                                                                scalar <span className="math">{"\\[s\\]"}</span>, plus the gradient matrices
                                                                                                <span className="math">{"\\[\\frac{\\partial s}{\\partial A}\\]"}</span> and
                                                                                                <span className="math">{"\\[\\frac{\\partial s}{\\partial B}\\]"}</span> with numerical values for
                                                                                                each entry.</span>
                                                                                </div>

                                                                        </div>

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer mt-[10px] p-[15px]">

                                                                                        Let <span className="math">{"\\[A = \\begin{pmatrix} 2 & 1 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix}\\]"}</span>
                                                                                        and <span className="math">{"\\[B = \\begin{pmatrix} 7 & 8 \\\\ 9 & 0 \\\\ 1 & 2 \\end{pmatrix}\\]"}</span>.
                                                                                        <br /><br />

                                                                                        Compute <span className="math">{"\\[C = AB\\]"}</span> and
                                                                                        <span className="math">{"\\[s = \\sum_{i,j} C_{i,j}\\]"}</span>. Then find the gradient
                                                                                        <span className="math">{"\\[\\frac{\\partial s}{\\partial A_{i,k}}\\]"}</span> for each entry of
                                                                                        matrix <span className="math">{"\\[A\\]"}</span>, and similarly find
                                                                                        <span className="math">{"\\[\\frac{\\partial s}{\\partial B_{k,j}}\\]"}</span> for each entry of
                                                                                        matrix <span className="math">{"\\[B\\]"}</span>.
                                                                                        <br /><br />

                                                                                        Let <span className="math">{"\\[C = AB = \\begin{pmatrix} AB_{11} & AB_{12} \\\\ AB_{21} & AB_{22} \\end{pmatrix}\\]"}</span>
                                                                                        <br /><br />

                                                                                        Where:
                                                                                        <br /><span className="math">{"\\[AB_{11} = 2*7 + 1*9 + 3*1 = 26\\]"}</span>
                                                                                        <br /><span className="math">{"\\[AB_{12} = 2*8 + 1*0 + 3*2 = 22\\]"}</span>
                                                                                        <br /><span className="math">{"\\[AB_{21} = 4*7 + 5*9 + 6*1 = 79\\]"}</span>
                                                                                        <br /><span className="math">{"\\[AB_{22} = 4*8 + 5*0 + 6*2 = 44\\]"}</span>
                                                                                        <br /><br />

                                                                                        Therefore, <span className="math">{"\\[C = AB = \\begin{pmatrix} 26 & 22 \\\\ 79 & 44 \\end{pmatrix}\\]"}</span>
                                                                                        and <span className="math">{"\\[s = \\sum_{ij} C_{ij} = 26 + 22 + 79 + 44 = 171\\]"}</span>
                                                                                        <br /><br />

                                                                                        Compute partial derivatives:
                                                                                        <br /><span className="math">{"\\[s = \\sum_{ij} C_{ij} = \\sum_{ij} (AB)_{ij}\\]"}</span>
                                                                                        <br /><br />

                                                                                        Since <span className="math">{"\\[C_{11} = (A_{11}B_{11}) + (A_{12}B_{21}) + (A_{13}B_{31})\\]"}</span>,
                                                                                        then the partial derivative:
                                                                                        <span className="math">{"\\[\\frac{\\partial C}{\\partial A_{ik}} = \\sum_j B_{kj} \\xrightarrow{}\\]"}</span>
                                                                                        which is the row sum of B (and is independent of i)
                                                                                        <br /><br />

                                                                                        And
                                                                                        <span className="math">{"\\[\\frac{\\partial C}{\\partial B_{kj}} = \\sum_i A_{ik} \\xrightarrow{}\\]"}</span>
                                                                                        which is the column sum of A (and is independent of j)<br /><br />

                                                                                        Using the chain rule:<br />
                                                                                        <span className="math">{"\\[\\frac{\\partial s}{\\partial A_{ik}} = \\frac{\\partial s}{\\partial C} \\cdot \\frac{\\partial C}{\\partial A_{ik}} = (1) \\cdot \\frac{\\partial C}{\\partial A_{ik}}\\]"}</span>
                                                                                        since <span className="math">{"\\[\\frac{\\partial s}{\\partial C} = 1\\]"}</span> (since C is a constant).
                                                                                        <br /><br />

                                                                                        And similarly,<br />
                                                                                        <span className="math">{"\\[\\frac{\\partial s}{\\partial B_{kj}} = \\frac{\\partial s}{\\partial C} \\cdot \\frac{\\partial C}{\\partial B_{kj}} = (1) \\cdot \\frac{\\partial C}{\\partial B_{kj}}\\]"}</span>
                                                                                        since <span className="math">{"\\[\\frac{\\partial s}{\\partial C} = 1\\]"}</span>
                                                                                        <br /><br />

                                                                                        So we have:<br />
                                                                                        <span className="math">{"\\[\\frac{\\partial s}{\\partial A_{ik}} =\\]"}</span> row sum of B, which is
                                                                                        <span className="math">{"\\[\\begin{pmatrix} 7+8 \\\\ 9+0 \\\\ 1+2 \\end{pmatrix} = \\begin{pmatrix} 15 \\\\ 9 \\\\ 3 \\end{pmatrix}\\]"}</span>
                                                                                        <br /><br />

                                                                                        And <span className="math">{"\\[\\frac{\\partial s}{\\partial B_{kj}} =\\]"}</span> col sum of A, which is
                                                                                        <span className="math">{"\\[\\begin{pmatrix} 2+4 \\\\ 1+5 \\\\ 3+6 \\end{pmatrix} = \\begin{pmatrix} 6 \\\\ 6 \\\\ 9 \\end{pmatrix}\\]"}</span>
                                                                                        <br /><br />

                                                                                        So finally, we have<br />
                                                                                        <span className="math">{"\\[\\frac{\\partial s}{\\partial A} = \\begin{pmatrix} 15 & 9 & 3 \\\\ 15 & 9 & 3 \\end{pmatrix}\\]"}</span>
                                                                                        <br /><br />

                                                                                        And <br />
                                                                                        <span className="math">{"\\[\\frac{\\partial s}{\\partial B} = \\begin{pmatrix} 6 & 6 \\\\ 6 & 6 \\\\ 9 & 9 \\end{pmatrix}\\]"}</span>
                                                                                </div>

                                                                        </div>


                                                                </CardDrawer>

                                                                <CardDrawer id='1' name='2d. Matrix Gradient Implementation'>

                                                                        <div className="assignment-question-wrapper p-[15px] mb-[0px]">
                                                                                <div className="assignment-question">
                                                                                        Implement a function that computes the gradients
                                                                                        <span className="math">{"\\[\\frac{\\partial s}{\\partial A}\\]"}</span> and
                                                                                        <span className="math">{"\\[\\frac{\\partial s}{\\partial B}\\]"}</span> for the scalar
                                                                                        <span className="math">{"\\[s = \\sum_{i,j} (AB)_{i,j}\\]"}</span> using NumPy operations.

                                                                                        <strong>Hint:</strong> Feel free to use the <span className="texttt">np.ones</span> or
                                                                                        <span className="texttt">np.repeat</span> functions to create the gradient matrices.

                                                                                        <br /><br /><span className="what-to-expect">Expected: Implement <span className="texttt">matrix_grad(A, B)</span> in
                                                                                                <span className="texttt">submission.py</span> that returns a tuple
                                                                                                <span className="texttt">(grad_A, grad_B)</span> where each gradient matrix has the same shape as
                                                                                                the corresponding input matrix.</span>
                                                                                </div>

                                                                        </div>

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                        <div dangerouslySetInnerHTML={createMarkup(q2d)} />
                                                                                </div>
                                                                        </div>

                                                                </CardDrawer>

                                                                <CardDrawer id='1' name='2e. Finite Differences'>

                                                                        <div className="assignment-question-wrapper p-[15px] mb-[0px]">
                                                                                <div className="assignment-question">
                                                                                        To build intuition for what gradients really are, we will implement
                                                                                        <a href="https://en.wikipedia.org/wiki/Finite_difference">finite differences</a> to numerically
                                                                                        approximate gradients. This approach helps you understand the fundamental definition of derivatives
                                                                                        and provides a valuable debugging tool for verifying analytical gradient computations.
                                                                                        <br /><br />


                                                                                        The key idea is to approximate the derivative by measuring how much the function changes when we
                                                                                        make a small perturbation along each coordinate. The central difference formula is:
                                                                                        <span className="math">{"\\[\\frac{\\partial f}{\\partial w_i} \\approx \\frac{f(\\mathbf{w} + \\epsilon \\hat{\\mathbf{u}}_i) - f(\\mathbf{w} - \\epsilon \\hat{\\mathbf{u}}_i)}{2\\epsilon}\\]"}</span>
                                                                                        where <span className="math">{"\\[\\hat{\\mathbf{u}}_i\\]"}</span> is a unit vector with 1 in the
                                                                                        <span className="math">{"\\[i\\]"}</span>-th position and 0 elsewhere, and
                                                                                        <span className="math">{"\\[\\epsilon\\]"}</span> is a small step size (like
                                                                                        <span className="math">{"\\[10^{-5}\\]"}</span>).
                                                                                        <br /><br />

                                                                                        Think of it like checking your speedometer: if you drive a tiny distance and time how long it takes,
                                                                                        you can estimate your speed. Similarly, if you move a tiny amount along each coordinate axis and see
                                                                                        how the function changes, you can estimate each component of the gradient.
                                                                                        <br /><br />

                                                                                        Now, implement two functions to compute the gradient of the least-squares objective
                                                                                        <span className="math">{"\\[f(\\mathbf{w}) = \\tfrac{1}{2}\\lVert A\\mathbf{w} - \\mathbf{b}\\rVert_2^2\\]"}</span>:
                                                                                        one using the analytical formula and one using finite differences for verification. Use NumPy
                                                                                        (optionally einsum) for vectorized implementation.
                                                                                        <br /><br />

                                                                                        <strong>Hint:</strong> You can use the <span className="texttt">np.eye(d)</span> function to create
                                                                                        the unit vectors.

                                                                                        <br /><br /><span className="what-to-expect">Expected: In <span className="texttt">submission.py</span>, implement
                                                                                                <span className="texttt">lsq_grad(w, A, b)</span> (analytic gradient) and
                                                                                                <span className="texttt">lsq_finite_diff_grad(w, A, b, epsilon=1e-5)</span> (central-difference
                                                                                                gradient). The autograder will compare them on random instances.</span>
                                                                                </div>

                                                                        </div>

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                        <div dangerouslySetInnerHTML={createMarkup(q2e)} />
                                                                                </div>
                                                                        </div>

                                                                </CardDrawer>

                                                                <div className="jade-h11 mt-[15px]">
                                                                        3. Optimization
                                                                </div>

                                                                <CardDrawer id='1' name='3a. Optimization Warmup'>

                                                                        <div className="assignment-question-wrapper p-[15px] mb-[0px]">
                                                                                <div className="assignment-question">
                                                                                        Let <span className="math">{"\\[x_1, \\dots, x_n\\]"}</span> be real numbers and
                                                                                        <span className="math">{"\\[w_1, \\dots, w_n\\]"}</span> positive weights. Consider the quadratic
                                                                                        function: <span className="math">{"\\[f(\\theta) = \\sum_{i=1}^n w_i (\\theta - x_i)^2\\]"}</span>.
                                                                                        Note that <span className="math">{"\\[\\theta\\]"}</span> is a scalar. What value of
                                                                                        <span className="math">{"\\[\\theta\\]"}</span> minimizes <span className="math">{"\\[f(\\theta)\\]"}</span>?
                                                                                        <br /><br />

                                                                                        Show that the optimum you find is indeed a minimum. What problematic issues could arise if some of
                                                                                        the <span className="math">{"\\[w_i\\]"}</span>'s are negative?
                                                                                        <br /><br />

                                                                                        <strong>Note:</strong> You can think about this problem as trying to find the point
                                                                                        <span className="math">{"\\[\\theta\\]"}</span> that's not too far away from the
                                                                                        <span className="math">{"\\[x_i\\]"}</span>'s. Over time, hopefully you'll appreciate how nice
                                                                                        quadratic functions are to minimize.

                                                                                        <br /><br /><span className="what-to-expect">Expected: An expression for the value of
                                                                                                <span className="math">{"\\[\\theta\\]"}</span> that minimizes
                                                                                                <span className="math">{"\\[f(\\theta)\\]"}</span> and how you got it. A short
                                                                                                calculation/argument to show that it is a minimum. 1-2 sentences describing a problem that could
                                                                                                arise if some of the <span className="math">{"\\[w_i\\]"}</span>'s are negative.</span>
                                                                                </div>

                                                                        </div>

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer mt-[10px] p-[15px]">

                                                                                        Given the quadratic function:<br />
                                                                                        <span className="math">{"\\[f(\\theta) = \\sum_{i=1}^n w_i (\\theta - x_i)^2\\]"}</span>.
                                                                                        What value of <span className="math">{"\\[\\theta\\]"}</span> minimizes
                                                                                        <span className="math">{"\\[f(\\theta)\\]"}</span>?
                                                                                        <br /><br />

                                                                                        Expanding the terms we get:<br />
                                                                                        <span className="math">{"\\[f(\\theta) = \\sum_{i=1}^n w_i x_i^2 -2w_i\\theta x_i + w_i\\theta^2\\]"}</span>
                                                                                        <br /><br />

                                                                                        The min value of <span className="math">{"\\[f(\\theta)\\]"}</span> will happen when the derivative
                                                                                        of <span className="math">{"\\[f(\\theta)\\]"}</span> = zero.
                                                                                        <br /><br />

                                                                                        So <span className="math">{"\\[f'(\\theta) = \\sum_{i=1}^n 2w_i(\\theta-x_i) = 2\\sum_{i=1}^n w_i\\theta - 2\\sum_{i=1}^n w_i x_i\\]"}</span>
                                                                                        <br /><br />

                                                                                        Since <span className="math">{"\\[\\theta\\]"}</span> is a scalar,
                                                                                        <span className="math">{"\\[f'(\\theta) = 2\\theta \\sum_{i=1}^n w_i - 2\\sum_{i=1}^n w_i x_i\\]"}</span>
                                                                                        <br /><br />

                                                                                        Set the derivative equal to zero:<br />
                                                                                        <span className="math">{"\\[2\\theta \\sum_{i=1}^n w_i - 2\\sum_{i=1}^n w_i x_i = 0\\]"}</span><br />

                                                                                        <span className="math">{"\\[\\theta \\sum_{i=1}^n w_i = \\sum_{i=1}^n w_i x_i\\]"}</span>
                                                                                        <br /><br />

                                                                                        Therefore, provided all the weights are positive real numbers, then the optimal value of
                                                                                        <span className="math">{"\\[\\theta\\]"}</span> is:
                                                                                        <span className="math">{"\\[\\frac{\\sum_{i=1}^n w_i x_i}{\\sum_{i=1}^n w_i}\\]"}</span>
                                                                                        <br /><br />

                                                                                        Which is the weighted average of all the <span className="math">{"\\[x_i\\]"}</span>'s.
                                                                                        <br /><br />

                                                                                        To prove that this is a minimum, we take the second derivative:<br />
                                                                                        <span className="math">{"\\[f''(\\theta) = 2\\sum_{i=1}^n w_i\\]"}</span>
                                                                                        <br /><br />

                                                                                        So if the sum of all the weights is positive, then the second derivative is positive, which means
                                                                                        the function is convex and <span className="math">{"\\[f(\\theta)\\]"}</span> is a global minimum.
                                                                                        <br /><br />

                                                                                        If the sum of all the weights is negative, then the second derivative is negative, which means the
                                                                                        function is concave and we have a global maximum, not a minimum.
                                                                                        <br /><br />

                                                                                        If the sum of all the weights is = 0 (some weights are positive and negative and perfectly cancel
                                                                                        each other out), then we cannot determine if we have a global max or min, and would need to do more
                                                                                        work to determine if we have a global max or min (or neither).
                                                                                </div>

                                                                        </div>


                                                                </CardDrawer>

                                                                <CardDrawer id='1' name='3b. Learn about gradient descent'>

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer p-[15px]">
                                                                                        gradient descent chat session: <br />
                                                                                        https://chatgpt.com/share/69b93317-8dcc-8005-925d-04a241cf8821
                                                                                </div>
                                                                        </div>

                                                                </CardDrawer>

                                                                <CardDrawer id='1' name='3c. Gradient Descent for a 1D Quadratic'>

                                                                        <div className="assignment-question-wrapper p-[15px] mb-[0px]">
                                                                                <div className="assignment-question">
                                                                                        Implement <span className="texttt">gradient_descent_quadratic(x, w, theta0, lr, num_steps)</span> in
                                                                                        <span className="texttt">submission.py</span> to minimize the scalar objective
                                                                                        <span className="math">{"\\[f(\\theta) = \\sum_{i=1}^n w_i (\\theta - x_i)^2\\]"}</span>, where
                                                                                        <span className="math">{"\\[\\theta\\in\\mathbb{R}\\]"}</span> (recall problem 3a). The function
                                                                                        should return the final scalar iterate after <span className="texttt">num_steps</span> gradient steps.

                                                                                        <br /><br /><span className="what-to-expect">Expected: Implementation of gradient descent to minimize the quadratic
                                                                                                function from problem 3a. Your function should perform <span className="texttt">num_steps</span>
                                                                                                iterations of gradient descent starting from <span className="texttt">theta0</span> with learning
                                                                                                rate <span className="texttt">lr</span>.</span>
                                                                                </div>

                                                                        </div>

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                        <div dangerouslySetInnerHTML={createMarkup(q3c)} />
                                                                                </div>
                                                                        </div>

                                                                </CardDrawer>

                                                                <div className="jade-h11 mt-[15px]">
                                                                        4. Ethical Issue Spotting
                                                                </div>

                                                                <CardDrawer id='1' name='4a. Case study 1'>

                                                                        <div className="assignment-question-wrapper p-[15px] mb-[0px]">
                                                                                <div className="assignment-question">
                                                                                        An investment firm develops a simple machine learning model to predict whether an individual is
                                                                                        likely to default on a loan from a variety of factors, including location, age, credit score, and
                                                                                        public record. After looking through their results, you find that the model predicts mainly based
                                                                                        on location and that the model mainly accepts loans from urban centers and denies loans from rural
                                                                                        applicants. Furthermore, looking at the gender and ethnicity of the applicants, you find that the
                                                                                        model has a significantly higher false positive rate for Black and male applicants than for other
                                                                                        groups. In a false positive prediction, a model misclassifies someone who does not default as
                                                                                        likely to default.
                                                                                </div>

                                                                        </div>

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                        This model has likely <u>encoded, contain, or potentially exacerbate bias against people of a certain gender,
                                                                                                race, sexuality, or who have other protected characteristics</u> since the model favors applicants from urban centers
                                                                                        over applicants from rural areas. In addition, the model has a significantly higher false positive predictions for
                                                                                        Black and male applicants than for other groups, indicating some unethical bias in the training.
                                                                                </div>
                                                                        </div>

                                                                </CardDrawer>

                                                                <CardDrawer id='1' name='4b. Case study 2'>

                                                                        <div className="assignment-question-wrapper p-[15px] mb-[0px]">
                                                                                <div className="assignment-question">
                                                                                        Stylometry is a way of predicting the author of contested or anonymous text by analyzing the
                                                                                        writing patterns in the anonymous text and other texts written by the potential authors. Recently,
                                                                                        highly accurate machine learning algorithms have been developed for this task. While these models
                                                                                        are typically used to analyze historical documents and literature, they could be used for
                                                                                        deanonymizing a wide range of texts, including code.
                                                                                </div>

                                                                        </div>

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                        This model has likely been trained on data that <u>contained information that could be deduced about individuals
                                                                                                that they have not consented to share</u> since it can be used to predict the author of code or comments that may (or may not)
                                                                                        have been intended to be annonymous, and the author has not consented to have their identity exposed. If the model can look
                                                                                        at code in github and predict who wrote the code (based on the code style) the programmer is unlikely to have consented,
                                                                                        exposing their identity.
                                                                                </div>
                                                                        </div>

                                                                </CardDrawer>

                                                                <CardDrawer id='1' name='4c. Case study 3'>

                                                                        <div className="assignment-question-wrapper p-[15px] mb-[0px]">
                                                                                <div className="assignment-question">
                                                                                        A research group scraped millions of faces of celebrities off of Google images to develop facial
                                                                                        recognition technology. The celebrities did not give permission for their images to be used in the
                                                                                        dataset and many of the images are copyrighted. For copyrighted photos, the dataset provides URL
                                                                                        links to the original image along with bounding boxes for the face.
                                                                                </div>


                                                                        </div>

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                        This technology has been trained on data/images of people who have not <u>consented to use or share the data</u>.
                                                                                        Images of regular people could be part of the dataset and could be used to identify these people, who have not
                                                                                        consented and may not wish to be identified. Even if the image is of a celebrity, and whether or not the image is
                                                                                        copyrighted, providing a url link to the original does not make it exempt from getting consent. Fake images of
                                                                                        celebrities and/or images not appropriate for minors may also be inadvertantly included in the dataset, which
                                                                                        could lead to legal action against the company who developed this technology.
                                                                                </div>
                                                                        </div>

                                                                </CardDrawer>

                                                                <CardDrawer id='1' name='4d. Case study 4'>

                                                                        <div className="assignment-question-wrapper p-[15px] mb-[0px]">
                                                                                <div className="assignment-question">
                                                                                        Researchers have recently created a machine learning model that can predict plant species
                                                                                        automatically directly from a single photo. The model was trained using photos uploaded to the
                                                                                        iNaturalist app by users who consented to use of their photos for research purposes, and the model
                                                                                        is only used within the app to help users identify plants they might come across in the wild.
                                                                                </div>

                                                                        </div>

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                        This technology to predict plant species could be used to <u>deceive people in ways that cause harm</u>. A user
                                                                                        could use this app to indicate if it is safe to eat the berries of the plant they are looking at. A false
                                                                                        positive match could decieve the user into thinking the berries are safe to eat, but in fact are poisonous,
                                                                                        causing bodily harm.
                                                                                </div>
                                                                        </div>

                                                                </CardDrawer>

                                                                <div className="jade-h11 mt-[15px]">
                                                                        5. Product Ethics Exploration: Basic Information
                                                                </div>

                                                                <CardDrawer id='1' name='5a. Product Purpose and Usage'>

                                                                        <div className="assignment-question-wrapper p-[15px] mb-[0px]">
                                                                                <div className="assignment-question">
                                                                                        <ul>
                                                                                                <li>Use your chosen product for at least 20 minutes.</li>
                                                                                                <li>Include at least two <strong>screenshots</strong> showing your interactions with the product.
                                                                                                        These should highlight its key purposes, typical task flows, and the core problems it addresses
                                                                                                        for users. Paste your screenshots into your <strong>PDF writeup for this part</strong>.</li>
                                                                                                <li>Based on your hands-on use and official resources, describe what the product is designed to
                                                                                                        do in 4-6 sentences. Identify at least two use cases and provide concrete examples (with
                                                                                                        screenshots in your PDF) where appropriate.</li>
                                                                                        </ul>

                                                                                        <span className="what-to-expect">Expected: Submit a brief description (4-6 sentences) of the product's
                                                                                                purpose and at least two concrete example user tasks. Include relevant screenshots in your PDF
                                                                                                writeup.</span>
                                                                                </div>

                                                                        </div>

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer mt-[10px] p-[15px]">

                                                                                        The AI-powered product that I have chosen to use is Claude Code from Anthropic. <br /><br />

                                                                                        Claude Code is an AI-powered coding assistant that reads your codebase, edits files, runs commands, and integrates with your
                                                                                        development tools. Available in your terminal, IDE, desktop app, and browser. <br /><br />

                                                                                        The Claude Code coding assistant can help you build features, fix bugs, and automate development
                                                                                        tasks. It understands your entire codebase and can work across multiple files and tools to get things done.<br /><br />

                                                                                        Use Case 1: Understand new codebases <br /><br />
                                                                                        Suppose you've just joined a new project and need to understand its structure quickly. This project could be
                                                                                        a newly downloaded codebase from github, or from an internal work-related repository. You can then ask
                                                                                        Claude code to analyze the codebase and answer questions like: <br /><br />
                                                                                        - 'give me an overview summary of this codebase' <br /><br />
                                                                                        - 'explain the main architecture patterns used here'  <br /><br />
                                                                                        - 'what are the key data models?' <br /><br />
                                                                                        - 'how is authentication handled?' <br /><br />
                                                                                        And Claude Code will be able to provide a summary of it's analysis of the code so that you can get up-and-running
                                                                                        quickly to work with this codebase.  <br /><br />

                                                                                        Use Case 2: Fix bugs efficiently <br /><br />
                                                                                        Suppose you've encountered an error message and need to find and fix its source. You can ask Claude code to: <br /><br />
                                                                                        - analyze the error message logs <br /><br />
                                                                                        - ask for fix recommendations <br /><br />
                                                                                        - make the fix and create a PR to merge the code to a github branch <br /><br />
                                                                                        - create unit tests to test the fix  <br /><br />

                                                                                </div>
                                                                        </div>

                                                                </CardDrawer>

                                                                <CardDrawer id='1' name='5b. Recent News and Developments'>

                                                                        <div className="assignment-question-wrapper p-[15px] mb-[0px]">
                                                                                <div className="assignment-question">
                                                                                        <ul>
                                                                                                <li>Find and read 3+ recent news articles, official announcements, or blog updates about the
                                                                                                        product and/or its parent company. These articles need to be published within the last 1-2
                                                                                                        months. Summarize your findings in 4-6 sentences, focusing on major new features, company
                                                                                                        developments, or relevant controversies.</li>
                                                                                        </ul>
                                                                                        <span className="what-to-expect">Expected: Include a 3-5 sentence well-sourced summary (with
                                                                                                links/citations) of the latest news and notable developments regarding this product or its parent
                                                                                                company.</span>
                                                                                </div>

                                                                        </div>

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                        Over the past 1-2 months, Anthropic and its developer-focused tool Claude Code have seen rapid product
                                                                                        expansion alongside rising controversy and market momentum. On the product side, Anthropic launched new
                                                                                        capabilities such as a "Code Review" (multi-agent system in Claude Code) to automatically analyze and
                                                                                        fix AI-generated code, reflecting strong enterprise demand and a surge in AI-assisted development
                                                                                        workflows (<a href="https://techcrunch.com/2026/03/09/anthropic-launches-code-review-tool-to-check-flood-of-ai-generated-code/" target="_blank">TechCrunch, Mar 2026</a>),
                                                                                        while broader platform updates like task delegation across devices ("Cowork preview") aim to turn Claude into a
                                                                                        full productivity agent (<a href="https://m.economictimes.com/tech/artificial-intelligence/claude-dispatch-anthropic-rolls-out-task-delegation-feature-for-claude-across-devices-in-cowork-preview/articleshow/129661771.cms" target="_blank">Economic Times, Mar 2026</a>).
                                                                                        These releases build on major model upgrades like Claude Opus 4.6 and Sonnet 4.6, which significantly
                                                                                        improve coding performance and long-context reasoning, and have even been used to discover real-world
                                                                                        software vulnerabilities (e.g., Firefox bugs) (<a href="https://www.reuters.com/business/retail-consumer/anthropic-releases-ai-upgrade-market-punishes-software-stocks-2026-02-05/" target="_blank">Reuters, Feb 2026</a>).
                                                                                        At the same time, Anthropic is scaling commercially at an exceptional pace, with reports of multi-billion-dollar revenue from Claude Code and a
                                                                                        valuation reaching ~ 380B dollars after a major funding round (<a href="https://www.reuters.com/technology/anthropic-valued-380-billion-latest-funding-round-2026-02-12/" target="_blank">Reuters, Feb 2026</a>),
                                                                                        alongside surging user growth and features like Projects/Artifacts and temporary usage-limit expansions to
                                                                                        attract new users (<a href="https://www.tomsguide.com/ai/a-small-thank-you-to-users-claude-extends-usage-limits-for-every-user-but-theres-a-slight-catch" target="_blank">Tom's Guide, Mar 2026</a>).
                                                                                        However, the company is also facing mounting challenges: security risks have emerged with malware campaigns impersonating "Claude Code" downloads,
                                                                                        highlighting ecosystem vulnerabilities (<a href="https://www.techradar.com/pro/security/infostealers-are-being-disguised-as-claude-code-openclaw-and-other-ai-developer-tools" target="_blank">TechRadar, Mar 2026</a>),
                                                                                        while legal pressure is intensifying via copyright lawsuits over
                                                                                        training data (<a href="https://www.reuters.com/legal/litigation/bmg-sues-anthropic-using-bruno-mars-rolling-stones-lyrics-ai-training-2026-03-18/" target="_blank">Reuters, Mar 2026</a>) and
                                                                                        geopolitical tensions, including U.S. government scrutiny and restrictions tied to national-security concerns. Overall, the latest developments
                                                                                        show Anthropic rapidly pushing Claude Code toward a multi-agent, enterprise-grade coding platform, but doing so amid escalating legal, security,
                                                                                        and regulatory pressures that could shape its trajectory in 2026.
                                                                                </div>
                                                                        </div>

                                                                </CardDrawer>

                                                                <CardDrawer id='1' name='5c. Company & Product Mission Alignment'>

                                                                        <div className="assignment-question-wrapper p-[15px] mb-[0px]">
                                                                                <div className="assignment-question">
                                                                                        <ul>
                                                                                                <li>What is the company's stated mission (quote from their website/official pages)?</li>
                                                                                                <li>What is the specific goal or intended impact of this particular product?</li>
                                                                                                <li>How does this product fit (or not fit) into the company's stated mission?</li>
                                                                                                <li>Consider the concept of <strong>alignment</strong>: how to make AI do what we want. Does the
                                                                                                        product behave consistently with its stated goals, or have you observed instances where it might
                                                                                                        "reward hack" (optimize for the wrong objective) or produce outputs misaligned with user
                                                                                                        intentions? How does the company address the challenge of ensuring the AI system's behavior
                                                                                                        matches its intended purpose?</li>
                                                                                        </ul>
                                                                                        <span className="what-to-expect">Expected: Briefly state the company's official mission and the product's
                                                                                                stated goal. Analyze, in your own words (2-3 sentences), the relationship between the two—if you
                                                                                                notice any tension, mismatch, or "mission drift," flag and explain it. Additionally, reflect on
                                                                                                alignment challenges: whether the product consistently behaves as intended, and how the company
                                                                                                addresses potential misalignment issues.</span>
                                                                                </div>

                                                                        </div>

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer mt-[10px] p-[15px]">


                                                                                        <p><strong>Company mission.</strong> <br />
                                                                                                Anthropic states its mission as: "to build reliable, interpretable, and steerable AI systems" and to ensure advanced AI systems are safe and beneficial for society.
                                                                                        </p>

                                                                                        <p><strong>Product goal (Claude Code).</strong> <br />
                                                                                                Claude Code is designed to act as an AI-powered coding assistant that can generate, review, and improve code, with a focus on reliability, safety, and usefulness for developers, including features like automated code review and multi-step task execution.
                                                                                        </p>

                                                                                        <p><strong>Relationship between mission and product.</strong> <br />
                                                                                                Claude Code closely aligns with Anthropic's mission by emphasizing safe and controllable AI in a high-impact domain (software development), where reliability and correctness are critical. However, there is some potential tension: as the product becomes more autonomous (e.g., multi-agent workflows and task delegation), ensuring interpretability and user control becomes harder, which could introduce mild mission drift if not carefully managed.
                                                                                        </p>

                                                                                        <p><strong>Alignment considerations.</strong> <br />
                                                                                                While Claude Code generally behaves consistently with its goals (e.g., producing structured, safe, and well-reasoned code), like other large language models it can still exhibit misalignment issues such as confidently generating incorrect code or optimizing for superficial correctness (a form of reward hacking). Anthropic addresses these challenges through techniques like Constitutional AI (rule-based self-critique), reinforcement learning from human feedback (RLHF), and ongoing evaluations/red-teaming to ensure outputs remain aligned with user intent and safety objectives.
                                                                                        </p>

                                                                                </div>
                                                                        </div>

                                                                </CardDrawer>

                                                                <CardDrawer id='1' name='5d. Product Pricing and Access'>

                                                                        <div className="assignment-question-wrapper p-[15px] mb-[0px]">
                                                                                <div className="assignment-question">
                                                                                        <ul>
                                                                                                <li>What are the pricing details for this product (list the main plans/tiers and their costs)?</li>
                                                                                                <li>Does the pricing follow an equitable or tiered-access model (e.g., discounts for college
                                                                                                        students)?</li>
                                                                                                <li>Beyond financial cost, are there <strong>non-financial barriers</strong> to accessing or
                                                                                                        using the product (such as device requirements, region restrictions, or mandatory
                                                                                                        integrations)?</li>
                                                                                                <li>Suggest at least one alternative pricing model. Reflect on potential pros and cons for both
                                                                                                        the company and its user base.</li>
                                                                                                <li>Consider the <strong>ecosystem view</strong> of AI: AI's impact depends on upstream factors
                                                                                                        (data, compute, labor, environment) and downstream factors (users, deployment, harm). What can
                                                                                                        you determine about the computational resources required to run this product? Does the company
                                                                                                        disclose information about the <strong>environmental impact</strong> of training or operating the
                                                                                                        system (e.g., energy consumption, carbon footprint)? How might environmental costs relate to
                                                                                                        pricing and access?</li>
                                                                                        </ul>
                                                                                        <span className="what-to-expect">Expected: In 3-4 sentences, list and describe the core pricing model, note
                                                                                                any access barriers (financial or otherwise), and discuss at least one alternative pricing approach
                                                                                                with a brief pros/cons analysis. Additionally, discuss what you can determine about the
                                                                                                computational and environmental costs of the product, and how these relate to pricing and
                                                                                                access.</span>
                                                                                </div>

                                                                        </div>

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer mt-[10px] p-[15px]">

                                                                                        <p><strong>Pricing and access.</strong><br />
                                                                                                Claude (including Claude Code capabilities) follows a tiered pricing model: a free tier with limited usage, a Pro plan (approximately $20/month) with higher usage limits and priority access, and higher-end Team/Enterprise plans with expanded limits, collaboration features, and API-based usage priced per token. The model is primarily usage- and tier-based rather than explicitly equitable (e.g., no widely advertised student discounts), and access may also be constrained by non-financial barriers such as API availability, regional rollout differences, and the need for sufficient technical infrastructure (e.g., development environments for Claude Code workflows). An alternative pricing model could be a compute-credit or pay-as-you-go system with subsidized academic tiers, which would improve accessibility for students and researchers but could reduce revenue predictability for Anthropic while increasing operational complexity.
                                                                                        </p>

                                                                                        <p><strong>Compute and environmental considerations.</strong><br />
                                                                                                Running Claude Code relies on large-scale cloud GPU/TPU infrastructure, implying high computational and energy costs, though Anthropic discloses limited detailed public data on energy usage or carbon footprint; these costs are indirectly reflected in pricing tiers and usage limits. The environmental cost of training and serving large models (e.g., energy consumption and associated emissions) likely scales with usage, meaning that pricing structures both recover infrastructure costs and implicitly regulate demand, potentially limiting access for lower-budget users while aligning usage with resource constraints.
                                                                                        </p>
                                                                                </div>
                                                                        </div>

                                                                </CardDrawer>

                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="PDF" isChecked={false}>
                                                        <TileRowCell0>

                                                                <div className='lab-links'>
                                                                        <ul>
                                                                                <li><a href="/A1_Solutions.pdf" target="_blank">Assignment 1</a></li>
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
