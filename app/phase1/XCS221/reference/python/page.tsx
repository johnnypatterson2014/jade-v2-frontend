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
                <div><span style="color:rgb(106,153,85);font-size:18px;font-family:Consolas;"><strong>Create arrays and initialize them</strong></span></div>
                <div><span style="color:rgb(156,220,254)">b</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(220,220,170)">arange</span>(<span
                                style="color:rgb(181,206,168)">3</span>) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># creates an array with 3 integers, starting from the
                                default integer 0.</span></div>
                <div><span style="color:rgb(156,220,254)">a</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(156,220,254)">ones</span>((<span
                                style="color:rgb(181,206,168)">2</span>, <span style="color:rgb(181,206,168)">3</span>))
                        &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># create a 2x3 (2D) array with all
                                ones</span></div>
                <div><span style="color:rgb(156,220,254)">c</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(156,220,254)">zeros</span>((<span
                                style="color:rgb(181,206,168)">2</span>, <span style="color:rgb(181,206,168)">3</span>,
                        <span style="color:rgb(181,206,168)">4</span>)) &nbsp; <span style="color:rgb(106,153,85)">#
                                create a 2x3x4 (3D) array with all zeros</span>
                </div>
                <div><span style="color:rgb(156,220,254)">e</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(220,220,170)">array</span>([<span
                                style="color:rgb(181,206,168)">1</span>, <span style="color:rgb(181,206,168)">2</span>,
                        <span style="color:rgb(181,206,168)">3</span>]) &nbsp; <span style="color:rgb(106,153,85)">#
                                create a 1D array with specific values</span>
                </div>
                <div><span style="color:rgb(156,220,254)">f</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(220,220,170)">array</span>([[<span
                                style="color:rgb(181,206,168)">1</span>, <span style="color:rgb(181,206,168)">2</span>],
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [<span style="color:rgb(181,206,168)">3</span>,
                        <span style="color:rgb(181,206,168)">4</span>]]) &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># shape: (2,2)</span>
                </div><br>
                <div><span style="color:rgb(106,153,85)"># create an array initialized with values 0 - 11 and then
                                reshape it to be 2D</span></div>
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
                <div><span style="color:rgb(106,153,85)"># create an array with dimensions (batch, n, m)</span></div>
                <div><span style="color:rgb(156,220,254)">batch</span>, <span style="color:rgb(156,220,254)">n</span>,
                        <span style="color:rgb(156,220,254)">m</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(181,206,168)">1</span>, <span style="color:rgb(181,206,168)">2</span>,
                        <span style="color:rgb(181,206,168)">3</span>
                </div>
                <div><span style="color:rgb(156,220,254)">s</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(220,220,170)">arange</span>(<span
                                style="color:rgb(156,220,254)">batch</span> <span
                                style="color:rgb(212,212,212)">*</span> <span style="color:rgb(156,220,254)">n</span>
                        <span style="color:rgb(212,212,212)">*</span> <span style="color:rgb(156,220,254)">m</span>,
                        <span style="color:rgb(156,220,254)">dtype</span><span
                                style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(78,201,176)">float</span>).<span
                                style="color:rgb(220,220,170)">reshape</span>(<span
                                style="color:rgb(156,220,254)">batch</span>, <span
                                style="color:rgb(156,220,254)">n</span>, <span style="color:rgb(156,220,254)">m</span>)
                </div><br>
                <div><span style="color:rgb(106,153,85)"># get the size of the last dimension of s (ie. m = 3)</span>
                </div>
                <div><span style="color:rgb(156,220,254)">d</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(156,220,254)">s</span>.<span
                                style="color:rgb(156,220,254)">shape</span>[<span
                                style="color:rgb(212,212,212)">-</span><span style="color:rgb(181,206,168)">1</span>]
                </div>
        </div>
</div>
        `

        const html2 = `
        <div dir="ltr">
        <div style="color:rgb(204,204,204);font-family:monospace;font-size:14px;line-height:18px;">
        <div><span style="color:rgb(106,153,85);font-size:18px;font-family:Consolas;"><strong>transform a 1D vector into a 2D column matrix</strong></span></div>
                <div><span style="color:rgb(106,153,85)"># intuition: inserting a new axis in the
                                array</span></div>
                <div><span style="color:rgb(156,220,254)">vector</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(220,220,170)">array</span>([<span
                                style="color:rgb(181,206,168)">1</span>, <span style="color:rgb(181,206,168)">2</span>,
                        <span style="color:rgb(181,206,168)">3</span>]) &nbsp; <span style="color:rgb(106,153,85)"># a
                                1D array with shape: (3,)</span>
                </div>
                <div><span style="color:rgb(79,193,255)">X</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(156,220,254)">vector</span>[:, <span
                                style="color:rgb(86,156,214)">None</span>] &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp;<span style="color:rgb(106,153,85)"># X has shape: (3, 1)</span></div>
                <div><span style="color:rgb(206,145,120)">'''</span></div>
                <div><span style="color:rgb(206,145,120)">array([[1],</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp;[2],</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp;[3]])</span></div><br>
                <div><span style="color:rgb(206,145,120)">None is equivalent to np.newaxis. The : selects all elements
                                (for a 1D vector), and None adds a new </span></div>
                <div><span style="color:rgb(206,145,120)">dimension at that position, turning a row into a
                                column.</span></div><br>
                <div><span style="color:rgb(206,145,120)">This is commonly used to enable broadcasting — e.g., dividing
                                each row of a 2D matrix </span></div>
                <div><span style="color:rgb(206,145,120)">by the corresponding element of vector.</span></div>
                <div><span style="color:rgb(206,145,120)">'''</span></div><br>

                <div><span style="color:rgb(106,153,85);font-size:18px;font-family:Consolas;"><strong>outer product</strong></span></div>
                <div><span style="color:rgb(106,153,85)"># takes two 1D vectors and produces a 2D matrix where every
                                combination of their elements </span></div>
                <div><span style="color:rgb(106,153,85)"># is multiplied together. </span></div>
                <div><span style="color:rgb(106,153,85)">#</span></div>
                <div><span style="color:rgb(106,153,85)"># intuition: imagine a as a column. Then the first column is 'a
                                column' * first element of b (ie. b[0])</span></div>
                <div><span style="color:rgb(106,153,85)"># &nbsp; And the second column is 'a column' * second element
                                of b (ie. b[1]).</span></div>
                <div><span style="color:rgb(106,153,85)"># &nbsp; ie. each 'a column' is scaled by a factor b[i] for
                                each column </span></div>
                <div><span style="color:rgb(106,153,85)"># &nbsp; alternatively, you can also think of it as 'b row'
                                scaled by a factor a[i] for each row</span></div>
                <div><span style="color:rgb(106,153,85)">#</span></div>
                <div><span style="color:rgb(106,153,85)"># Example:</span></div>
                <div><span style="color:rgb(156,220,254)">a</span> <span style="color:rgb(212,212,212)">=</span> [<span
                                style="color:rgb(181,206,168)">1</span>, <span style="color:rgb(181,206,168)">2</span>,
                        <span style="color:rgb(181,206,168)">3</span>] &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># shape (3,)</span>
                </div>
                <div><span style="color:rgb(156,220,254)">b</span> <span style="color:rgb(212,212,212)">=</span> [<span
                                style="color:rgb(181,206,168)">4</span>, <span style="color:rgb(181,206,168)">5</span>]
                        &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># shape (2,)</span></div><br>
                <div><span style="color:rgb(156,220,254)">c</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(220,220,170)">outer</span>(<span
                                style="color:rgb(156,220,254)">a</span>, <span style="color:rgb(156,220,254)">b</span>)
                </div>
                <div><span style="color:rgb(206,145,120)">'''</span></div>
                <div><span style="color:rgb(206,145,120)">array([[ 4, &nbsp;5], &nbsp; # ← 1x4, 1x5 &nbsp; # row 0 = 'b'
                                multiplied by a[0] (ie. 1)</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp;[ 8, 10], &nbsp; # ← 2x4, 2x5
                                &nbsp; # row 1 = 'b' multiplied by a[1] (ie. 2)</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp;[12, 15]]) &nbsp;# ← 3x4, 3x5
                                &nbsp; </span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; # col 0 = 'a' (transposed to a
                                column) multiplied by b[0] (ie. 4)</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; # col 1 = 'a' (transposed to a
                                column) multiplied by b[1] (ie. 5)</span></div>
                <div><span style="color:rgb(206,145,120)">'''</span></div><br>

                <div><span style="color:rgb(106,153,85);font-size:18px;font-family:Consolas;"><strong>Equivalent using matrix multiply</strong></span></div>
                <div><span style="color:rgb(106,153,85)"># &nbsp; - basically you need to reshape them into 2 matricies
                                (by adding a dimension) </span></div>
                <div><span style="color:rgb(106,153,85)"># &nbsp; &nbsp; and then do a dot product (matrix
                                multiply)</span></div>
                <div><span style="color:rgb(106,153,85)"># &nbsp; - Each element [i,j] is the dot product of row i of
                                the left matrix with </span></div>
                <div><span style="color:rgb(106,153,85)"># &nbsp; &nbsp; column j of the right — but since each is a
                                single element, it's just a[i] * b[j].</span></div>
                <div><span style="color:rgb(156,220,254)">c</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(156,220,254)">a</span>[:, <span
                                style="color:rgb(86,156,214)">None</span>] <span style="color:rgb(212,212,212)">@</span>
                        <span style="color:rgb(156,220,254)">b</span>[<span style="color:rgb(86,156,214)">None</span>,
                        :] &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># (3,1) @ (1,2) → (3, 2)</span>
                </div>
        </div>
</div>
        `

        const html3 = `
        <div dir="ltr">
        <div style="color:rgb(204,204,204);font-family:monospace;font-size:14px;line-height:18px;">
                <div><span style="color:rgb(255 184 106);font-size:18px;font-family:Consolas;"><strong>for loops</strong></span></div>
                <div><span style="color:rgb(197,134,192)">for</span> <span style="color:rgb(156,220,254)">i</span> <span
                                style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(78,201,176)">range</span>(<span
                                style="color:rgb(181,206,168)">5</span>): &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># range is a built in function similar to an
                                iterator</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"For loop"</span>, <span
                                style="color:rgb(156,220,254)">i</span>) &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># better way to print in a loop</span></div><br>
                <div><span style="color:rgb(197,134,192)">for</span> <span style="color:rgb(156,220,254)">i</span> <span
                                style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(78,201,176)">range</span>(<span
                                style="color:rgb(181,206,168)">4</span>, <span style="color:rgb(181,206,168)">10</span>,
                        <span style="color:rgb(181,206,168)">2</span>): &nbsp; <span style="color:rgb(106,153,85)">#
                                equivalent to: i=4; i+2; i&lt;10 &nbsp; ie. start with 4, up to (but not </span>
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"For loop"</span>, <span
                                style="color:rgb(156,220,254)">i</span>) &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># including) 10, step size is 2</span></div><br>
                <div><span style="color:rgb(197,134,192)">for</span> <span style="color:rgb(156,220,254)">i</span> <span
                                style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(78,201,176)">range</span>(<span
                                style="color:rgb(181,206,168)">3</span>, <span
                                style="color:rgb(212,212,212)">-</span><span style="color:rgb(181,206,168)">1</span>,
                        <span style="color:rgb(212,212,212)">-</span><span style="color:rgb(181,206,168)">1</span>):
                        &nbsp;<span style="color:rgb(106,153,85)"># use step size of -1 to count backwards</span>
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"For loop"</span>, <span
                                style="color:rgb(156,220,254)">i</span>)</div>
                                
                                
                                <div>
        <div class="adM">&nbsp; &nbsp; </div><span style="color:rgb(197,134,192)">for</span> <span
                style="color:rgb(156,220,254)">value</span> <span style="color:rgb(197,134,192)">in</span> <span
                style="color:rgb(156,220,254)">args</span>: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span
                style="color:rgb(106,153,85)"># tuple can be treated as an iterable list</span>
</div>
<div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                style="color:rgb(156,220,254)">value</span>)</div>
</div>
                                
                                <br>

                                <div><span style="color:rgb(255 184 106);font-size:18px;font-family:Consolas;"><strong>while loops</strong></span></div>
                <div><span style="color:rgb(156,220,254)">value</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(181,206,168)">0</span>
                </div>
                <div><span style="color:rgb(197,134,192)">while</span> <span style="color:rgb(156,220,254)">value</span>
                        <span style="color:rgb(212,212,212)">&lt;</span> <span style="color:rgb(181,206,168)">5</span>:
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">value</span> <span
                                style="color:rgb(212,212,212)">+=</span> <span style="color:rgb(181,206,168)">1</span>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># there is no ++ operator in python</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">if</span> <span
                                style="color:rgb(156,220,254)">value</span> <span
                                style="color:rgb(212,212,212)">==</span> <span style="color:rgb(181,206,168)">2</span>:
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">continue</span> &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># can also use
                                break but note that if you use break the else</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># statement will not be executed</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"While"</span>, <span
                                style="color:rgb(156,220,254)">value</span>)</div>
                <div><span style="color:rgb(197,134,192)">else</span>:</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"Finished"</span>)</div><br>

                                <div><span style="color:rgb(255 184 106);font-size:18px;font-family:Consolas;"><strong>switch</strong></span></div>
                <div><span style="color:rgb(156,220,254)">value</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(181,206,168)">11</span>
                </div>
                <div><span style="color:rgb(197,134,192)">match</span> <span
                                style="color:rgb(156,220,254)">value</span>:</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">case</span> <span
                                style="color:rgb(181,206,168)">10</span><span
                                style="color:rgb(212,212,212)">|</span><span style="color:rgb(181,206,168)">11</span>:
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"OK"</span>)</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">case</span> <span
                                style="color:rgb(181,206,168)">15</span>:</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"Warning"</span>)</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">case</span> _: &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># use
                                underscore to match anything else (like default in java)</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"Unknown code"</span>)</div>
        </div>
</div>
        `

        const html4 = `
        <div dir="ltr">
        <div style="color:rgb(204,204,204);font-family:monospace;font-size:14px;line-height:18px;">
                <div><span style="color:rgb(255 184 106);font-size:18px;font-family:Consolas;"><strong>functions</strong></span></div>

                <div><span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">calculate_area</span>(<span
                                style="color:rgb(156,220,254)">width</span>, <span
                                style="color:rgb(156,220,254)">height</span>, <span
                                style="color:rgb(156,220,254)">length</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">1</span>):
                        &nbsp; <span style="color:rgb(106,153,85)"># args with default values must go at the end</span>
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(156,220,254)">width</span> <span
                                style="color:rgb(212,212,212)">*</span> <span
                                style="color:rgb(156,220,254)">height</span> <span
                                style="color:rgb(212,212,212)">*</span> <span
                                style="color:rgb(156,220,254)">length</span></div><br>
                <div><span style="color:rgb(106,153,85)"># cannot overload functions; it's name (and module) must be
                                unique</span></div><br>
                <div><span style="color:rgb(106,153,85)"># area = calculate_area(2, 3)</span></div>
                <div><span style="color:rgb(156,220,254)">area</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(220,220,170)">calculate_area</span>(<span
                                style="color:rgb(181,206,168)">2</span>, <span
                                style="color:rgb(156,220,254)">length</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">6</span>,
                        <span style="color:rgb(156,220,254)">height</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">8</span>)
                        <span style="color:rgb(106,153,85)"># if you supply the variable name, then they don't have to
                                be in order</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">area</span>)
                </div><br>
                <div><span style="color:rgb(106,153,85)"># variable length function</span></div>
                <div><span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">catalogue</span>(<span
                                style="color:rgb(156,220,254)">name</span>, <span
                                style="color:rgb(212,212,212)">*</span><span
                                style="color:rgb(156,220,254)">args</span>): &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># args is a variable length list (tuple)</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"Type: "</span>, <span
                                style="color:rgb(78,201,176)">type</span>(<span
                                style="color:rgb(156,220,254)">args</span>)) <span style="color:rgb(106,153,85)">#
                                built-in function type() returns the variable class type</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># output: Type: &nbsp;&lt;class
                                'tuple'&gt;</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">name</span>)</div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">if</span> <span
                                style="color:rgb(220,220,170)">len</span>(<span
                                style="color:rgb(156,220,254)">args</span>) <span
                                style="color:rgb(212,212,212)">&gt;=</span> <span
                                style="color:rgb(181,206,168)">1</span>: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># len() is a built-in function to get the length</span>
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">args</span>[<span
                                style="color:rgb(181,206,168)">0</span>]) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># tuple can be accessed like an array</span></div><span
                        class="im"><br>
                        <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">for</span> <span
                                        style="color:rgb(156,220,254)">value</span> <span
                                        style="color:rgb(197,134,192)">in</span> <span
                                        style="color:rgb(156,220,254)">args</span>: &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp;<span style="color:rgb(106,153,85)"># tuple can be treated as an iterable
                                        list</span></div>
                        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                        style="color:rgb(156,220,254)">value</span>)</div><br>
                </span>
                <div><span style="color:rgb(220,220,170)">catalogue</span>(<span
                                style="color:rgb(206,145,120)">"Trees"</span>, <span
                                style="color:rgb(206,145,120)">"oak"</span>, <span
                                style="color:rgb(206,145,120)">"ash"</span>, <span
                                style="color:rgb(206,145,120)">"linden"</span>)</div>
                <div><span style="color:rgb(220,220,170)">catalogue</span>(<span
                                style="color:rgb(206,145,120)">"Blank"</span>) <span style="color:rgb(106,153,85)">#
                                args is treated as an empty list</span></div>
                <div><span style="color:rgb(106,153,85)"># tuple is a non-modifiable list</span></div><br><br>

                <div><span style="color:rgb(255 184 106);font-size:18px;font-family:Consolas;"><strong>variable length keyword args</strong></span></div>

                <div><span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">details</span>(<span
                                style="color:rgb(156,220,254)">name</span>, <span
                                style="color:rgb(212,212,212)">**</span><span
                                style="color:rgb(156,220,254)">kwargs</span>): &nbsp; &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># kwargs = keyword args</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"Name"</span>, <span
                                style="color:rgb(156,220,254)">name</span>)</div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(78,201,176)">type</span>(<span
                                style="color:rgb(156,220,254)">kwargs</span>)) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <span style="color:rgb(106,153,85)"># kwargs type is 'dict'; similar to a hashmap in java; list
                                of key-value pairs</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">kwargs</span>) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># output looks like this: {'height':
                                170, 'age': 42}</span></div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">if</span> <span
                                style="color:rgb(206,145,120)">"height"</span> <span
                                style="color:rgb(86,156,214)">in</span> <span
                                style="color:rgb(156,220,254)">kwargs</span>: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># check if the dict has a key called 'height'</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"Height"</span>, <span
                                style="color:rgb(156,220,254)">kwargs</span>[<span
                                style="color:rgb(206,145,120)">"height"</span>])</div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">for</span> <span
                                style="color:rgb(156,220,254)">key</span> <span style="color:rgb(197,134,192)">in</span>
                        <span style="color:rgb(156,220,254)">kwargs</span>:</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">key</span>, <span
                                style="color:rgb(156,220,254)">kwargs</span>[<span
                                style="color:rgb(156,220,254)">key</span>])</div><br>
                <div><span style="color:rgb(220,220,170)">details</span>(<span
                                style="color:rgb(206,145,120)">"Sue"</span>, <span
                                style="color:rgb(156,220,254)">height</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">170</span>,
                        <span style="color:rgb(156,220,254)">age</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">42</span>)
                </div><br><br>

                <div><span style="color:rgb(255 184 106);font-size:18px;font-family:Consolas;"><strong>multiple return values</strong></span></div>

                <div><span style="color:rgb(86,156,214)">def</span> <span style="color:rgb(220,220,170)">names</span>():
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(206,145,120)">"Bob"</span>, <span
                                style="color:rgb(206,145,120)">"Sue"</span>, <span
                                style="color:rgb(206,145,120)">"Pete"</span> &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># returns a tuple; can have mixed types</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># called 'packing' a
                                tuple</span></div><br>
                <div><span style="color:rgb(156,220,254)">name1</span>, <span
                                style="color:rgb(156,220,254)">name2</span>, <span
                                style="color:rgb(156,220,254)">name3</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(220,220,170)">names</span>() &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># called 'unpacking' a tuple</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">name1</span>, <span
                                style="color:rgb(156,220,254)">name2</span>, <span
                                style="color:rgb(156,220,254)">name3</span>)</div>
                <div class="yj6qo ajU">
                        <div id=":z3" class="ajR" role="button" tabindex="0" data-tooltip="Show trimmed content"
                                aria-label="Show trimmed content" aria-expanded="false"><img class="ajT"
                                        src="//ssl.gstatic.com/ui/v1/icons/mail/images/cleardot.gif"></div>
                </div>
                
        </div>
</div>
        `

        const html5 = `
        <div dir="ltr">
        <div style="color:rgb(204,204,204);font-family:monospace;font-size:14px;line-height:18px;">
                
        <div><span style="color:rgb(255 184 106);font-size:18px;font-family:Consolas;"><strong>Containers</strong></span></div>

                <div><span style="color:rgb(106,153,85)"># containers in python is similar to collections in java</span>
                </div><br>
                <div><span style="color:rgb(106,153,85)"># create a tuple using (). &nbsp; &nbsp; &nbsp;eg. stuff =
                                ("a", 1, 2)</span></div>
                <div><span style="color:rgb(106,153,85)"># create a list &nbsp;using []. &nbsp; &nbsp; &nbsp;eg. stuff =
                                ["a", 1, 2]</span></div>
                <div><span style="color:rgb(106,153,85)"># create a set &nbsp; using {}. &nbsp; &nbsp; &nbsp;eg. stuff =
                                {1, 3, 9} </span></div><br>
                <div><span style="color:rgb(106,153,85)"># create a dictionary (similar to a map in java)</span></div>
                <div><span style="color:rgb(106,153,85)"># months = {</span></div>
                <div><span style="color:rgb(106,153,85)"># &nbsp; &nbsp; "Jan": "January",</span></div>
                <div><span style="color:rgb(106,153,85)"># &nbsp; &nbsp; "Feb": "February",</span></div>
                <div><span style="color:rgb(106,153,85)"># &nbsp; &nbsp; "Mar": "March",</span></div>
                <div><span style="color:rgb(106,153,85)"># }</span></div><br>

                <div><span style="color:rgb(255 184 106);font-size:18px;font-family:Consolas;"><strong>tuples</strong></span></div>

                <div><span style="color:rgb(156,220,254)">stuff</span> <span style="color:rgb(212,212,212)">=</span>
                        (<span style="color:rgb(206,145,120)">"Charles"</span>, <span
                                style="color:rgb(181,206,168)">7</span>, <span
                                style="color:rgb(181,206,168)">8.2</span>, <span
                                style="color:rgb(86,156,214)">True</span>, <span
                                style="color:rgb(86,156,214)">False</span>, <span
                                style="color:rgb(206,145,120)">"Cats"</span>) <span style="color:rgb(106,153,85)">#
                                packing the tuple</span></div><br>
                <div><span style="color:rgb(156,220,254)">name</span>, <span
                                style="color:rgb(156,220,254)">value1</span>, <span
                                style="color:rgb(156,220,254)">value2</span>, <span
                                style="color:rgb(156,220,254)">bool1</span>, <span
                                style="color:rgb(156,220,254)">bool2</span>, <span
                                style="color:rgb(156,220,254)">animal</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(156,220,254)">stuff</span> &nbsp; <span style="color:rgb(106,153,85)">#
                                unpacking the tuple</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">name</span>,
                        <span style="color:rgb(156,220,254)">value1</span>, <span
                                style="color:rgb(156,220,254)">value2</span>, <span
                                style="color:rgb(156,220,254)">bool1</span>, <span
                                style="color:rgb(156,220,254)">bool2</span>, <span
                                style="color:rgb(156,220,254)">animal</span>)
                </div><br>
                <div><span style="color:rgb(156,220,254)">person</span>, <span
                                style="color:rgb(156,220,254)">number1</span>, <span
                                style="color:rgb(156,220,254)">number2</span>, <span
                                style="color:rgb(212,212,212)">*</span><span style="color:rgb(156,220,254)">other</span>
                        <span style="color:rgb(212,212,212)">=</span> <span style="color:rgb(156,220,254)">stuff</span>
                        &nbsp;<span style="color:rgb(106,153,85)"># put all other values in a list</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">person</span>, <span
                                style="color:rgb(156,220,254)">number1</span>, <span
                                style="color:rgb(156,220,254)">number2</span>, <span
                                style="color:rgb(156,220,254)">other</span>)</div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(78,201,176)">type</span>(<span
                                style="color:rgb(156,220,254)">other</span>))</div><br>
                <div><span style="color:rgb(156,220,254)">animals2</span> <span style="color:rgb(212,212,212)">=</span>
                        (<span style="color:rgb(206,145,120)">"cat"</span>,) <span style="color:rgb(106,153,85)"># if
                                you want to create a tuple with one element, it needs to look like this</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">animals2</span>)</div><br><br>

                                <div><span style="color:rgb(255 184 106);font-size:18px;font-family:Consolas;"><strong>slicing</strong></span></div>

                <div><span style="color:rgb(156,220,254)">animals</span> <span style="color:rgb(212,212,212)">=</span>
                        (<span style="color:rgb(206,145,120)">"cat"</span>, <span
                                style="color:rgb(206,145,120)">"dog"</span>, <span
                                style="color:rgb(206,145,120)">"giraffe"</span>, <span
                                style="color:rgb(206,145,120)">"lion"</span>, <span
                                style="color:rgb(206,145,120)">"elephant"</span>, <span
                                style="color:rgb(206,145,120)">"badger"</span>)</div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">animals</span>[<span
                                style="color:rgb(181,206,168)">2</span>])</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">animals</span>[<span
                                style="color:rgb(181,206,168)">1</span>:<span style="color:rgb(181,206,168)">4</span>])
                        &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># returns a new tuple with items
                                in index 1 to 3</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">animals</span>[<span
                                style="color:rgb(212,212,212)">-</span><span style="color:rgb(181,206,168)">1</span>])
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># last value in the
                                tuple</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">animals</span>[<span
                                style="color:rgb(212,212,212)">-</span><span
                                style="color:rgb(181,206,168)">4</span>:<span
                                style="color:rgb(212,212,212)">-</span><span style="color:rgb(181,206,168)">1</span>])
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">animals</span>[<span
                                style="color:rgb(181,206,168)">1</span>:<span
                                style="color:rgb(212,212,212)">-</span><span
                                style="color:rgb(181,206,168)">1</span>:<span style="color:rgb(181,206,168)">2</span>])
                        &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># specify a step size of 2</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">animals</span>[:<span
                                style="color:rgb(181,206,168)">3</span>]) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># start of range is optional, default is first
                                element</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">animals</span>[::<span
                                style="color:rgb(181,206,168)">2</span>]) &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># end of range is optional, default is entire list</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">animals</span>[::]) &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp;<span style="color:rgb(106,153,85)"># entire list</span></div><br><br>

                        <div><span style="color:rgb(255 184 106);font-size:18px;font-family:Consolas;"><strong>tuple functions and methods</strong></span></div>

                <div><span style="color:rgb(156,220,254)">temp</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(181,206,168)">7</span>, <span style="color:rgb(181,206,168)">2</span>,
                        <span style="color:rgb(181,206,168)">7</span>, <span style="color:rgb(181,206,168)">4</span>,
                        <span style="color:rgb(181,206,168)">9</span>, <span style="color:rgb(181,206,168)">5</span>,
                        <span style="color:rgb(181,206,168)">4</span>
                </div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(220,220,170)">len</span>(<span
                                style="color:rgb(156,220,254)">temp</span>)) &nbsp;<span style="color:rgb(106,153,85)">#
                                number of items</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(220,220,170)">max</span>(<span
                                style="color:rgb(156,220,254)">temp</span>)) &nbsp;<span style="color:rgb(106,153,85)">#
                                max value in list</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(220,220,170)">min</span>(<span
                                style="color:rgb(156,220,254)">temp</span>)) &nbsp;<span style="color:rgb(106,153,85)">#
                                min value in list</span></div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">temp</span>.<span
                                style="color:rgb(220,220,170)">count</span>(<span
                                style="color:rgb(181,206,168)">4</span>)) &nbsp;<span style="color:rgb(106,153,85)">#
                                return the count of occurrance of "4"</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">temp</span>.<span
                                style="color:rgb(220,220,170)">index</span>(<span
                                style="color:rgb(181,206,168)">4</span>)) &nbsp;<span style="color:rgb(106,153,85)">#
                                return the index of the first occurrance of "4"</span></div><br>
                <div><span style="color:rgb(156,220,254)">text</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(206,145,120)">"It_was_the_best_of_times"</span>
                </div><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(220,220,170)">len</span>(<span
                                style="color:rgb(156,220,254)">text</span>)) &nbsp;<span style="color:rgb(106,153,85)">#
                                length of text</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(220,220,170)">max</span>(<span
                                style="color:rgb(156,220,254)">text</span>)) &nbsp;<span style="color:rgb(106,153,85)">#
                                return char that has the max unicode value</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(220,220,170)">min</span>(<span
                                style="color:rgb(156,220,254)">text</span>))</div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">text</span>.<span
                                style="color:rgb(220,220,170)">count</span>(<span
                                style="color:rgb(206,145,120)">"w"</span>))</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">text</span>.<span
                                style="color:rgb(220,220,170)">index</span>(<span
                                style="color:rgb(206,145,120)">"t"</span>))</div><br><br>

                                <div><span style="color:rgb(255 184 106);font-size:18px;font-family:Consolas;"><strong>tuple operators</strong></span></div>

                <div><span style="color:rgb(156,220,254)">fruits1</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(206,145,120)">"apple"</span>, <span
                                style="color:rgb(206,145,120)">"orange"</span>
                </div>
                <div><span style="color:rgb(156,220,254)">fruits2</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(206,145,120)">"banana"</span>, <span
                                style="color:rgb(206,145,120)">"grape"</span>
                </div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">fruits1</span> <span
                                style="color:rgb(212,212,212)">+</span> <span
                                style="color:rgb(156,220,254)">fruits2</span>) <span style="color:rgb(106,153,85)">#
                                return new tuple with both lists</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">fruits1</span> <span
                                style="color:rgb(212,212,212)">*</span> <span style="color:rgb(181,206,168)">3</span>)
                        &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># join tuple 3 times</span></div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(220,220,170)">id</span>(<span
                                style="color:rgb(156,220,254)">fruits1</span>)) &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># everything is an object in python, id is unique for each
                                object</span></div>
                <div><span style="color:rgb(156,220,254)">fruits1</span> <span style="color:rgb(212,212,212)">+=</span>
                        <span style="color:rgb(156,220,254)">fruits2</span> &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># assign new tuple to fruits1</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(220,220,170)">id</span>(<span
                                style="color:rgb(156,220,254)">fruits1</span>))</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">fruits1</span>)</div><br><br>

                                <div><span style="color:rgb(255 184 106);font-size:18px;font-family:Consolas;"><strong>lists</strong></span></div>

                <div><span style="color:rgb(106,153,85)"># lists are the same as tuples but are modifiable</span></div>
                <br>
                <div><span style="color:rgb(156,220,254)">fruits</span> <span style="color:rgb(212,212,212)">=</span>
                        [<span style="color:rgb(206,145,120)">"apple"</span>, <span
                                style="color:rgb(206,145,120)">"orange"</span>, <span
                                style="color:rgb(206,145,120)">"grape"</span>]</div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(220,220,170)">id</span>(<span
                                style="color:rgb(156,220,254)">fruits</span>))</div>
                <div><span style="color:rgb(156,220,254)">fruits</span> <span style="color:rgb(212,212,212)">+=</span>
                        [<span style="color:rgb(206,145,120)">"melon"</span>]</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(220,220,170)">id</span>(<span
                                style="color:rgb(156,220,254)">fruits</span>)) &nbsp;<span
                                style="color:rgb(106,153,85)"># id is the same</span></div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">fruits</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">fruits</span>[<span style="color:rgb(181,206,168)">0</span>]
                        <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(206,145,120)">"strawberry"</span> &nbsp;<span
                                style="color:rgb(106,153,85)"># modify element</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">fruits</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">fruits</span>.<span
                                style="color:rgb(220,220,170)">append</span>(<span
                                style="color:rgb(206,145,120)">"pear"</span>)</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">fruits</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">fruits</span>.<span
                                style="color:rgb(220,220,170)">extend</span>([<span
                                style="color:rgb(206,145,120)">"blueberry"</span>]) &nbsp;<span
                                style="color:rgb(106,153,85)"># append a collection</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">fruits</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">fruits</span>.<span
                                style="color:rgb(220,220,170)">insert</span>(<span
                                style="color:rgb(181,206,168)">2</span>, <span
                                style="color:rgb(206,145,120)">"kiwi"</span>) &nbsp;<span
                                style="color:rgb(106,153,85)"># insert new element at index 2</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">fruits</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">fruits_tuple</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">tuple</span>(<span
                                style="color:rgb(156,220,254)">fruits</span>) <span style="color:rgb(106,153,85)"># cast
                                the list to a tuple</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">fruits_tuple</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">fruits_list</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">list</span>(<span
                                style="color:rgb(156,220,254)">fruits_tuple</span>) <span
                                style="color:rgb(106,153,85)"># cast the tuple to a list</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">fruits_list</span>)</div><br><br>

                                <div><span style="color:rgb(255 184 106);font-size:18px;font-family:Consolas;"><strong>replacing slices</strong></span></div>

                <div><span style="color:rgb(156,220,254)">numbers</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">list</span>((<span style="color:rgb(181,206,168)">0</span>,
                        <span style="color:rgb(181,206,168)">1</span>, <span style="color:rgb(181,206,168)">2</span>,
                        <span style="color:rgb(181,206,168)">3</span>, <span style="color:rgb(181,206,168)">4</span>,
                        <span style="color:rgb(181,206,168)">5</span>, <span style="color:rgb(181,206,168)">6</span>,
                        <span style="color:rgb(181,206,168)">7</span>)) &nbsp;<span style="color:rgb(106,153,85)">#
                                another way to declare a list by using the built-in function</span>
                </div><br>
                <div><span style="color:rgb(156,220,254)">numbers</span>[<span
                                style="color:rgb(181,206,168)">2</span>:<span style="color:rgb(181,206,168)">4</span>]
                        <span style="color:rgb(212,212,212)">=</span> (<span style="color:rgb(181,206,168)">0</span>,
                        <span style="color:rgb(181,206,168)">0</span>, <span style="color:rgb(181,206,168)">0</span>,
                        <span style="color:rgb(181,206,168)">0</span>) &nbsp;<span style="color:rgb(106,153,85)">#
                                replace items at index 2 and index 3 with these 4 values</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">numbers</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">numbers</span>[<span
                                style="color:rgb(181,206,168)">2</span>:<span style="color:rgb(181,206,168)">6</span>]
                        <span style="color:rgb(212,212,212)">=</span> [] &nbsp;<span style="color:rgb(106,153,85)">#
                                remove values in this slice</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">numbers</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">numbers</span>[<span
                                style="color:rgb(181,206,168)">1</span>::<span style="color:rgb(181,206,168)">2</span>]
                        <span style="color:rgb(212,212,212)">=</span> [<span
                                style="color:rgb(206,145,120)">"hello"</span>, <span
                                style="color:rgb(206,145,120)">"to"</span>, <span
                                style="color:rgb(206,145,120)">"you"</span>] &nbsp;<span style="color:rgb(106,153,85)">#
                                specify a step size; called extended slice syntax; if you do this, you must provide the
                                same number of values you are replacing</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">numbers</span>) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># output is:
                                [0, 'hello', 4, 'to', 6, 'you']</span></div><br><br>

                                <div><span style="color:rgb(255 184 106);font-size:18px;font-family:Consolas;"><strong>remove items from lists</strong></span></div>

                <div><span style="color:rgb(156,220,254)">numbers</span> <span style="color:rgb(212,212,212)">=</span>
                        [<span style="color:rgb(181,206,168)">0</span>, <span style="color:rgb(181,206,168)">1</span>,
                        <span style="color:rgb(181,206,168)">2</span>, <span style="color:rgb(181,206,168)">3</span>,
                        <span style="color:rgb(181,206,168)">4</span>, <span style="color:rgb(181,206,168)">5</span>,
                        <span style="color:rgb(181,206,168)">6</span>]
                </div><br>
                <div><span style="color:rgb(156,220,254)">numbers</span>.<span
                                style="color:rgb(220,220,170)">remove</span>(<span
                                style="color:rgb(181,206,168)">4</span>) &nbsp; &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># will remove element with this value</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">numbers</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">value</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(156,220,254)">numbers</span>.<span
                                style="color:rgb(220,220,170)">pop</span>(<span style="color:rgb(181,206,168)">1</span>)
                        &nbsp; <span style="color:rgb(106,153,85)"># remove element at an index; note: pop() will remove
                                the last value</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">value</span>, <span
                                style="color:rgb(156,220,254)">numbers</span>)</div><br>
                <div><span style="color:rgb(197,134,192)">del</span> <span
                                style="color:rgb(156,220,254)">numbers</span>[<span
                                style="color:rgb(181,206,168)">2</span>] &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># remove element at an index</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">numbers</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">numbers</span>.<span
                                style="color:rgb(220,220,170)">clear</span>() &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># remove all values</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">numbers</span>)</div><br><br>

                                <div><span style="color:rgb(255 184 106);font-size:18px;font-family:Consolas;"><strong>list comprehensions</strong></span></div>

                <div><span style="color:rgb(156,220,254)">numbers</span> <span style="color:rgb(212,212,212)">=</span>
                        [<span style="color:rgb(156,220,254)">i</span> <span style="color:rgb(197,134,192)">for</span>
                        <span style="color:rgb(156,220,254)">i</span> <span style="color:rgb(197,134,192)">in</span>
                        <span style="color:rgb(78,201,176)">range</span>(<span style="color:rgb(181,206,168)">0</span>,
                        <span style="color:rgb(181,206,168)">5</span>)] &nbsp; <span style="color:rgb(106,153,85)">#
                                shortcut to populate a list with values</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">numbers</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">numbers</span> <span style="color:rgb(212,212,212)">=</span>
                        [<span style="color:rgb(156,220,254)">i</span><span
                                style="color:rgb(212,212,212)">**</span><span style="color:rgb(181,206,168)">2</span>
                        <span style="color:rgb(197,134,192)">for</span> <span style="color:rgb(156,220,254)">i</span>
                        <span style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(78,201,176)">range</span>(<span
                                style="color:rgb(181,206,168)">0</span>, <span style="color:rgb(181,206,168)">5</span>)]
                        &nbsp;<span style="color:rgb(106,153,85)"># populate using i^2</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">numbers</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">animals1</span> <span style="color:rgb(212,212,212)">=</span>
                        [<span style="color:rgb(206,145,120)">"cat"</span>, <span
                                style="color:rgb(206,145,120)">"mouse"</span>, <span
                                style="color:rgb(206,145,120)">"dog"</span>, <span
                                style="color:rgb(206,145,120)">"badger"</span>]</div><br>
                <div><span style="color:rgb(156,220,254)">animals2</span> <span style="color:rgb(212,212,212)">=</span>
                        [<span style="color:rgb(156,220,254)">animal</span> <span
                                style="color:rgb(197,134,192)">for</span> <span
                                style="color:rgb(156,220,254)">animal</span> <span
                                style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(156,220,254)">animals1</span>] &nbsp;<span
                                style="color:rgb(106,153,85)"># another way to copy the list</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">animals2</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">lengths</span> <span style="color:rgb(212,212,212)">=</span>
                        [<span style="color:rgb(220,220,170)">len</span>(<span
                                style="color:rgb(156,220,254)">animal</span>) <span
                                style="color:rgb(197,134,192)">for</span> <span
                                style="color:rgb(156,220,254)">animal</span> <span
                                style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(156,220,254)">animals1</span>] &nbsp;<span
                                style="color:rgb(106,153,85)"># create a list of the lengths of the strings in
                                animals1</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">lengths</span>)</div><br><br>

                                <div><span style="color:rgb(255 184 106);font-size:18px;font-family:Consolas;"><strong>comprehension conditions</strong></span></div>

                <div><span style="color:rgb(156,220,254)">words1</span> <span style="color:rgb(212,212,212)">=</span>
                        [<span style="color:rgb(206,145,120)">"it"</span>, <span
                                style="color:rgb(206,145,120)">"was"</span>, <span
                                style="color:rgb(206,145,120)">"the"</span>, <span
                                style="color:rgb(206,145,120)">"best"</span>, <span
                                style="color:rgb(206,145,120)">"of"</span>, <span
                                style="color:rgb(206,145,120)">"times"</span>]</div><br>
                <div><span style="color:rgb(156,220,254)">words2</span> <span style="color:rgb(212,212,212)">=</span>
                        [<span style="color:rgb(156,220,254)">w</span> <span style="color:rgb(197,134,192)">for</span>
                        <span style="color:rgb(156,220,254)">w</span> <span style="color:rgb(197,134,192)">in</span>
                        <span style="color:rgb(156,220,254)">words1</span> <span
                                style="color:rgb(197,134,192)">if</span> <span
                                style="color:rgb(220,220,170)">len</span>(<span style="color:rgb(156,220,254)">w</span>)
                        <span style="color:rgb(212,212,212)">&gt;</span> <span style="color:rgb(181,206,168)">3</span>]
                        &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># add a conditional filter</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">words2</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">words3</span> <span style="color:rgb(212,212,212)">=</span>
                        [<span style="color:rgb(156,220,254)">w</span>.<span
                                style="color:rgb(220,220,170)">upper</span>() <span
                                style="color:rgb(197,134,192)">if</span> <span
                                style="color:rgb(220,220,170)">len</span>(<span style="color:rgb(156,220,254)">w</span>)
                        <span style="color:rgb(212,212,212)">&gt;</span> <span style="color:rgb(181,206,168)">3</span>
                        <span style="color:rgb(197,134,192)">else</span> <span style="color:rgb(156,220,254)">w</span>
                        <span style="color:rgb(197,134,192)">for</span> <span style="color:rgb(156,220,254)">w</span>
                        <span style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(156,220,254)">words1</span>] &nbsp; <span
                                style="color:rgb(106,153,85)"># syntax for if/else</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">words3</span>)</div><br><br>

                                <div><span style="color:rgb(255 184 106);font-size:18px;font-family:Consolas;"><strong>sets</strong></span></div>

                <div><span style="color:rgb(106,153,85)"># sets in python are similar to sets in java:</span></div>
                <div><span style="color:rgb(106,153,85)"># &nbsp;- can only store unique items (eg. cannot put the same
                                item in twice)</span></div>
                <div><span style="color:rgb(106,153,85)"># &nbsp;- no intrinsic order </span></div><br>
                <div><span style="color:rgb(156,220,254)">numbers</span> <span style="color:rgb(212,212,212)">=</span>
                        {<span style="color:rgb(181,206,168)">1</span>, <span style="color:rgb(181,206,168)">3</span>,
                        <span style="color:rgb(181,206,168)">6</span>, <span style="color:rgb(181,206,168)">4</span>}
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">numbers</span>)</div><br>
                <div><span style="color:rgb(197,134,192)">for</span> <span style="color:rgb(156,220,254)">x</span> <span
                                style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(156,220,254)">numbers</span>: &nbsp;<span
                                style="color:rgb(106,153,85)"># iterate over all values (order is random)</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">x</span>)</div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(181,206,168)">3</span>
                        <span style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(156,220,254)">numbers</span>) &nbsp;<span
                                style="color:rgb(106,153,85)"># test if a value is in a set (returns true/false)</span>
                </div><br>
                <div><span style="color:rgb(156,220,254)">numbers</span>.<span
                                style="color:rgb(220,220,170)">add</span>(<span style="color:rgb(181,206,168)">7</span>)
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># add item to the
                                set</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">numbers</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">numbers</span>.<span
                                style="color:rgb(220,220,170)">update</span>([<span
                                style="color:rgb(181,206,168)">9</span>, <span style="color:rgb(181,206,168)">8</span>])
                        &nbsp;<span style="color:rgb(106,153,85)"># add items in a collection to a set</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">numbers</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">numbers</span>.<span
                                style="color:rgb(220,220,170)">remove</span>(<span
                                style="color:rgb(181,206,168)">8</span>) &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># remove by value; will get an error if value is not in
                                the set</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">numbers</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">numbers</span>.<span
                                style="color:rgb(220,220,170)">discard</span>(<span
                                style="color:rgb(181,206,168)">3</span>) &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># remove by value but might not exist (no error)</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">numbers</span>)</div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(78,201,176)">set</span>([<span style="color:rgb(181,206,168)">1</span>,
                        <span style="color:rgb(181,206,168)">2</span>, <span style="color:rgb(181,206,168)">3</span>]))
                        &nbsp; <span style="color:rgb(106,153,85)"># alternate way to create a set using the built-in
                                function</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>({<span style="color:rgb(156,220,254)">n</span>
                        <span style="color:rgb(197,134,192)">for</span> <span style="color:rgb(156,220,254)">n</span>
                        <span style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(78,201,176)">range</span>(<span
                                style="color:rgb(181,206,168)">5</span>, <span
                                style="color:rgb(181,206,168)">8</span>)}) &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># similar to list comprehension</span>
                </div><br><br>

                <div><span style="color:rgb(255 184 106);font-size:18px;font-family:Consolas;"><strong>set functions</strong></span></div>

                <div><span style="color:rgb(156,220,254)">numbers1</span> <span style="color:rgb(212,212,212)">=</span>
                        {<span style="color:rgb(181,206,168)">2</span>, <span style="color:rgb(181,206,168)">4</span>,
                        <span style="color:rgb(181,206,168)">6</span>, <span style="color:rgb(181,206,168)">7</span>,
                        <span style="color:rgb(181,206,168)">8</span>, <span style="color:rgb(181,206,168)">9</span>}
                </div>
                <div><span style="color:rgb(156,220,254)">numbers2</span> <span style="color:rgb(212,212,212)">=</span>
                        {<span style="color:rgb(181,206,168)">2</span>, <span style="color:rgb(181,206,168)">4</span>,
                        <span style="color:rgb(181,206,168)">6</span>, <span style="color:rgb(181,206,168)">1</span>,
                        <span style="color:rgb(181,206,168)">3</span>, <span style="color:rgb(181,206,168)">5</span>}
                </div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">numbers1</span>.<span
                                style="color:rgb(220,220,170)">union</span>(<span
                                style="color:rgb(156,220,254)">numbers2</span>)<wbr>) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <span style="color:rgb(106,153,85)"># return new set; only unique values; no duplicate
                                values</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">numbers1</span>.<span
                                style="color:rgb(220,220,170)">intersection</span>(<span
                                style="color:rgb(156,220,254)">nu<wbr>mbers2</span>)) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># common values</span></div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">numbers1</span>.<span
                                style="color:rgb(220,220,170)">difference</span>(<span
                                style="color:rgb(156,220,254)">numb<wbr>ers2</span>)) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># take set numbers1 and remove values
                                from numbers2</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">numbers1</span> <span
                                style="color:rgb(212,212,212)">-</span> <span
                                style="color:rgb(156,220,254)">numbers2</span>) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)">#
                                same result as difference</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">numbers2</span>.<span
                                style="color:rgb(220,220,170)">difference</span>(<span
                                style="color:rgb(156,220,254)">numb<wbr>ers1</span>))</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">numbers2</span> <span
                                style="color:rgb(212,212,212)">-</span> <span
                                style="color:rgb(156,220,254)">numbers1</span>)</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">numbers2</span>.<span
                                style="color:rgb(220,220,170)">symmetric_<wbr>difference</span>(<span
                                style="color:rgb(156,220,254)">numbers1</span>)) &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># return the values that only exist in one set</span>
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># output: {1, 3, 5, 7, 8, 9}</span></div><br>
                <div><span style="color:rgb(220,220,170)">print</span>({<span style="color:rgb(181,206,168)">1</span>,
                        <span style="color:rgb(181,206,168)">2</span>, <span
                                style="color:rgb(181,206,168)">3</span>}.<span
                                style="color:rgb(220,220,170)">issuperset</span>({<span
                                style="color:rgb(181,206,168)">1</span>, <span style="color:rgb(181,206,168)">2</span>,
                        <span style="color:rgb(181,206,168)">3</span>})) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp;<span style="color:rgb(106,153,85)"># superset contains all values in the other set, and
                                may contain more</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>({<span style="color:rgb(181,206,168)">1</span>,
                        <span style="color:rgb(181,206,168)">2</span>, <span style="color:rgb(181,206,168)">3</span>,
                        <span style="color:rgb(181,206,168)">4</span>, <span
                                style="color:rgb(181,206,168)">5</span>}.<span
                                style="color:rgb(220,220,170)">issuperset</span>({<span
                                style="color:rgb(181,206,168)">1</span>, <span style="color:rgb(181,206,168)">2</span>,
                        <span style="color:rgb(181,206,168)">3</span>}))
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>({<span style="color:rgb(181,206,168)">1</span>,
                        <span style="color:rgb(181,206,168)">2</span>, <span
                                style="color:rgb(181,206,168)">3</span>}.<span
                                style="color:rgb(220,220,170)">issuperset</span>({<span
                                style="color:rgb(181,206,168)">1</span>, <span style="color:rgb(181,206,168)">2</span>,
                        <span style="color:rgb(181,206,168)">3</span>, <span style="color:rgb(181,206,168)">4</span>}))
                </div><br><br>

                <div><span style="color:rgb(255 184 106);font-size:18px;font-family:Consolas;"><strong>dictionaries</strong></span></div>

                <div><span style="color:rgb(156,220,254)">months</span> <span style="color:rgb(212,212,212)">=</span> {
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"Jan"</span>: <span
                                style="color:rgb(206,145,120)">"January"</span>,</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"Feb"</span>: <span
                                style="color:rgb(206,145,120)">"February"</span>,</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"Mar"</span>: <span
                                style="color:rgb(206,145,120)">"March"</span>,</div>
                <div>}</div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">months</span>[<span
                                style="color:rgb(206,145,120)">"Jan"</span>])</div>
                <div><span style="color:rgb(156,220,254)">months</span>[<span
                                style="color:rgb(206,145,120)">"Apr"</span>] <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(206,145,120)">"April"</span> &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># adds a new key/value pair</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">months</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">months</span>.<span
                                style="color:rgb(220,220,170)">update</span>({<span
                                style="color:rgb(206,145,120)">"May"</span>: <span
                                style="color:rgb(206,145,120)">"May"</span>, <span
                                style="color:rgb(206,145,120)">"Jun"</span>: <span
                                style="color:rgb(206,145,120)">"June"</span>}) &nbsp;<span
                                style="color:rgb(106,153,85)"># add values from one dict to another</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">months</span>)</div><br>
                <div><span style="color:rgb(197,134,192)">for</span> <span style="color:rgb(156,220,254)">month</span>
                        <span style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(156,220,254)">months</span>: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># iterate over the keys</span>
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">month</span>, <span
                                style="color:rgb(156,220,254)">months</span>[<span
                                style="color:rgb(156,220,254)">month</span>])</div><br>
                <div><span style="color:rgb(197,134,192)">for</span> <span style="color:rgb(156,220,254)">month</span>
                        <span style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(156,220,254)">months</span>.<span
                                style="color:rgb(220,220,170)">keys</span>(): &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <span style="color:rgb(106,153,85)"># another way to iterate over the keys</span>
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">month</span>, <span
                                style="color:rgb(156,220,254)">months</span>[<span
                                style="color:rgb(156,220,254)">month</span>])</div><br>
                <div><span style="color:rgb(197,134,192)">for</span> <span style="color:rgb(156,220,254)">month</span>
                        <span style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(156,220,254)">months</span>.<span
                                style="color:rgb(220,220,170)">values</span>(): &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># iterate over the values</span>
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">month</span>)</div><br>
                <div><span style="color:rgb(197,134,192)">for</span> <span style="color:rgb(156,220,254)">abbrev</span>,
                        <span style="color:rgb(156,220,254)">name</span> <span style="color:rgb(197,134,192)">in</span>
                        <span style="color:rgb(156,220,254)">months</span>.<span
                                style="color:rgb(220,220,170)">items</span>(): &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># months.items() returns the tuple; unpacking the
                                tuple</span>
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">abbrev</span>, <span
                                style="color:rgb(156,220,254)">name</span>) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; </div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"Oct"</span>
                        <span style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(156,220,254)">months</span>) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># returns true/false if key is in the
                                dict</span>
                </div><br><br>

                <div><span style="color:rgb(255 184 106);font-size:18px;font-family:Consolas;"><strong>removing dictionary items</strong></span></div>

                <div><span style="color:rgb(156,220,254)">days</span> <span style="color:rgb(212,212,212)">=</span> {
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"Mon"</span>: <span
                                style="color:rgb(206,145,120)">"Monday"</span>,</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"Tue"</span>: <span
                                style="color:rgb(206,145,120)">"Tuesday"</span>,</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"Wed"</span>: <span
                                style="color:rgb(206,145,120)">"Wednesday"</span>,</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"Thur"</span>: <span
                                style="color:rgb(206,145,120)">"Thursday"</span>,</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"Fri"</span>: <span
                                style="color:rgb(206,145,120)">"Friday"</span>,</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"Sat"</span>: <span
                                style="color:rgb(206,145,120)">"Saturday"</span>,</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"Sun"</span>: <span
                                style="color:rgb(206,145,120)">"Sunday"</span>,</div>
                <div>}</div><br>
                <div><span style="color:rgb(197,134,192)">del</span> <span
                                style="color:rgb(156,220,254)">days</span>[<span
                                style="color:rgb(206,145,120)">"Mon"</span>]</div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">days</span>)
                </div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">days</span>.<span
                                style="color:rgb(220,220,170)">pop</span>(<span
                                style="color:rgb(206,145,120)">"Thur"</span>))</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">days</span>)
                </div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">days</span>.<span
                                style="color:rgb(220,220,170)">popitem</span>()) &nbsp;<span
                                style="color:rgb(106,153,85)"># returns the last tuple and removes it</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">days</span>)
                </div><br>
                <div><span style="color:rgb(156,220,254)">days</span>.<span
                                style="color:rgb(220,220,170)">clear</span>()</div>
                <div><span style="color:rgb(156,220,254)">days</span> <span style="color:rgb(212,212,212)">=</span> {}
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">days</span>)
                </div><br><br>

                <div><span style="color:rgb(255 184 106);font-size:18px;font-family:Consolas;"><strong>dictionary views</strong></span></div>

                <div><span style="color:rgb(156,220,254)">people</span> <span style="color:rgb(212,212,212)">=</span> {
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"Bob"</span>: <span
                                style="color:rgb(181,206,168)">42</span>,</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"Sue"</span>: <span
                                style="color:rgb(181,206,168)">53</span>,</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"Steve"</span>: <span
                                style="color:rgb(181,206,168)">25</span>,</div>
                <div>}</div><br>
                <div><span style="color:rgb(156,220,254)">keys</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(156,220,254)">people</span>.<span
                                style="color:rgb(220,220,170)">keys</span>() &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp;<span style="color:rgb(106,153,85)"># note: if the dict people changes, these
                                keys/values/items are also updated</span>
                </div>
                <div><span style="color:rgb(156,220,254)">values</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(156,220,254)">people</span>.<span
                                style="color:rgb(220,220,170)">values</span>()
                </div>
                <div><span style="color:rgb(156,220,254)">items</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(156,220,254)">people</span>.<span
                                style="color:rgb(220,220,170)">items</span>()
                </div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(78,201,176)">type</span>(<span
                                style="color:rgb(156,220,254)">keys</span>)) &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># these are special dict types so that they are
                                automatically updated</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(78,201,176)">type</span>(<span
                                style="color:rgb(156,220,254)">values</span>)) &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># these are views into the dict collection</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(78,201,176)">type</span>(<span
                                style="color:rgb(156,220,254)">items</span>))</div><br>
                <div><span style="color:rgb(156,220,254)">item_list</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">list</span>(<span
                                style="color:rgb(156,220,254)">items</span>) &nbsp;<span style="color:rgb(106,153,85)">#
                                if you convert to a list, it isn't auto updated anymore</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">items</span>)</div>
                <div><span style="color:rgb(197,134,192)">del</span> <span
                                style="color:rgb(156,220,254)">people</span>[<span
                                style="color:rgb(206,145,120)">"Steve"</span>]</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">items</span>)</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">item_list</span>)</div><br><br>

                                <div><span style="color:rgb(255 184 106);font-size:18px;font-family:Consolas;"><strong>default dictionaries</strong></span></div>

                <div><span style="color:rgb(197,134,192)">from</span> <span
                                style="color:rgb(78,201,176)">collections</span> <span
                                style="color:rgb(197,134,192)">import</span> <span
                                style="color:rgb(78,201,176)">defaultdict</span></div><br>
                <div><span style="color:rgb(156,220,254)">people</span> <span style="color:rgb(212,212,212)">=</span> {
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"Bob"</span>: <span
                                style="color:rgb(181,206,168)">42</span>,</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"Sue"</span>: <span
                                style="color:rgb(181,206,168)">53</span>,</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"Steve"</span>: <span
                                style="color:rgb(181,206,168)">25</span>,</div>
                <div>}</div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">people</span>.<span
                                style="color:rgb(220,220,170)">get</span>(<span
                                style="color:rgb(206,145,120)">"Ethel"</span>, <span
                                style="color:rgb(181,206,168)">99</span>)) &nbsp;<span style="color:rgb(106,153,85)">#
                                use get methods; will not throw an exception if key doesn't exist</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># can provide a default value if key is not
                                there</span></div><br>
                <div><span style="color:rgb(156,220,254)">days</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">defaultdict</span>(<span
                                style="color:rgb(78,201,176)">str</span>) &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># or can get similar behavior using a built-in
                                module</span>
                </div><br>
                <div><span style="color:rgb(156,220,254)">days</span>.<span
                                style="color:rgb(220,220,170)">update</span>({<span
                                style="color:rgb(206,145,120)">"Mon"</span>: <span
                                style="color:rgb(206,145,120)">"Monday"</span>, <span
                                style="color:rgb(206,145,120)">"Tue"</span>: <span
                                style="color:rgb(206,145,120)">"Tuesday"</span>})</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">days</span>[<span
                                style="color:rgb(206,145,120)">"Wed"</span>])</div><br><br>

                                <div><span style="color:rgb(255 184 106);font-size:18px;font-family:Consolas;"><strong>enumerate and zip</strong></span></div>

                <div><span style="color:rgb(156,220,254)">fruits</span> <span style="color:rgb(212,212,212)">=</span>
                        (<span style="color:rgb(206,145,120)">"apple"</span>, <span
                                style="color:rgb(206,145,120)">"pear"</span>, <span
                                style="color:rgb(206,145,120)">"orange"</span>)</div>
                <div><span style="color:rgb(156,220,254)">days</span> <span style="color:rgb(212,212,212)">=</span>
                        (<span style="color:rgb(206,145,120)">"Mon"</span>, <span
                                style="color:rgb(206,145,120)">"Tue"</span>, <span
                                style="color:rgb(206,145,120)">"Wed"</span>)</div><br>
                <div><span style="color:rgb(197,134,192)">for</span> <span style="color:rgb(156,220,254)">i</span>,
                        <span style="color:rgb(156,220,254)">fruit</span> <span style="color:rgb(197,134,192)">in</span>
                        <span style="color:rgb(78,201,176)">enumerate</span>(<span
                                style="color:rgb(156,220,254)">fruits</span>): &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># iterate over list</span>
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">i</span>, <span
                                style="color:rgb(156,220,254)">fruit</span>)</div><br>
                <div><span style="color:rgb(197,134,192)">for</span> <span style="color:rgb(156,220,254)">fruit</span>,
                        <span style="color:rgb(156,220,254)">day</span> <span style="color:rgb(197,134,192)">in</span>
                        <span style="color:rgb(78,201,176)">zip</span>(<span
                                style="color:rgb(156,220,254)">fruits</span>, <span
                                style="color:rgb(156,220,254)">days</span>): &nbsp; &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># allows you to iterate over 2 lists at the same
                                time</span>
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">fruit</span>, <span
                                style="color:rgb(156,220,254)">day</span>)</div><br><br>

                                <div><span style="color:rgb(255 184 106);font-size:18px;font-family:Consolas;"><strong>hashing</strong></span></div>

                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(220,220,170)">hash</span>((<span
                                style="color:rgb(181,206,168)">1</span>, <span style="color:rgb(181,206,168)">2</span>,
                        <span style="color:rgb(181,206,168)">3</span>))) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># can only use something as a key in a map/set if you can
                                generate a hash code from it</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(220,220,170)">hash</span>((<span
                                style="color:rgb(181,206,168)">1</span>, <span style="color:rgb(181,206,168)">2</span>,
                        []))) &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># use hash() function to
                                test if you can generate a hash</span></div><br>
                <div><span style="color:rgb(106,153,85)"># in python: something must be immutable in order to generate a
                                hash code from it</span></div>
                <div><span style="color:rgb(106,153,85)"># cannot use a list for the hash since it is mutable</span>
                </div><br><br>

                <div><span style="color:rgb(255 184 106);font-size:18px;font-family:Consolas;"><strong>containers summary</strong></span></div>

                <div><span style="color:rgb(156,220,254)">fruits</span> <span style="color:rgb(212,212,212)">=</span>
                        (<span style="color:rgb(206,145,120)">"apple"</span>,) &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># tuples</span></div>
                <div><span style="color:rgb(156,220,254)">days</span> <span style="color:rgb(212,212,212)">=</span>
                        [<span style="color:rgb(206,145,120)">"mon"</span>] &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp;<span style="color:rgb(106,153,85)"># lists</span></div>
                <div><span style="color:rgb(156,220,254)">names</span> <span style="color:rgb(212,212,212)">=</span>
                        {<span style="color:rgb(206,145,120)">"Bob"</span>} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <span style="color:rgb(106,153,85)"># sets</span>
                </div>
                <div><span style="color:rgb(156,220,254)">months</span> <span style="color:rgb(212,212,212)">=</span> {
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># dict; trailing commas are fine</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"Jan"</span>: <span
                                style="color:rgb(206,145,120)">"January"</span>,</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"Feb"</span>: <span
                                style="color:rgb(206,145,120)">"February"</span>,</div>
                <div>}</div><br>
                <div><span style="color:rgb(156,220,254)">something</span> <span style="color:rgb(212,212,212)">=</span>
                        [ &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># can
                                create complex combinations of these containers</span></div>
                <div>&nbsp; &nbsp; {<span style="color:rgb(181,206,168)">1</span>, <span
                                style="color:rgb(181,206,168)">2</span>, <span style="color:rgb(181,206,168)">3</span>},
                </div>
                <div>&nbsp; &nbsp; {</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(181,206,168)">8</span>: <span
                                style="color:rgb(206,145,120)">"eight"</span>,</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(181,206,168)">9</span>: (<span
                                style="color:rgb(181,206,168)">1</span>, <span style="color:rgb(181,206,168)">2</span>,
                        <span style="color:rgb(181,206,168)">3</span>)
                </div>
                <div>&nbsp; &nbsp; }</div>
                <div>]</div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">something</span>)</div>
                <div><span style="color:rgb(156,220,254)">something1</span> <span
                                style="color:rgb(212,212,212)">=</span> [{<span style="color:rgb(181,206,168)">1</span>,
                        <span style="color:rgb(181,206,168)">2</span>, <span style="color:rgb(181,206,168)">3</span>},
                        {<span style="color:rgb(181,206,168)">8</span>: <span
                                style="color:rgb(206,145,120)">'eight'</span>, <span
                                style="color:rgb(181,206,168)">9</span>: (<span style="color:rgb(181,206,168)">1</span>,
                        <span style="color:rgb(181,206,168)">2</span>, <span style="color:rgb(181,206,168)">3</span>)}]
                </div>
        </div>
</div>
        `

        const html6 = `
        <div dir="ltr">
        <div style="color:rgb(204,204,204);font-family:monospace;font-size:14px;line-height:18px;">
                
        <div><span style="color:rgb(255 184 106);font-size:18px;font-family:Consolas;"><strong>string variable interpolation</strong></span></div>

                <div><span style="color:rgb(156,220,254)">distance</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(181,206,168)">1.23</span>
                </div>
                <div><span style="color:rgb(156,220,254)">height</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(181,206,168)">2.34</span>
                </div><br>
                <div><span style="color:rgb(106,153,85)"># idea: given the 2 variables above, you want to print them out
                                like this:</span></div>
                <div><span style="color:rgb(106,153,85)"># &nbsp; print("height: " + height + ", distance: " +
                                distance)</span></div>
                <div><span style="color:rgb(106,153,85)"># there are 3 ways to do this in python:</span></div><br>
                <div><span style="color:rgb(106,153,85)"># an "f" string: you can now use the variables directly in
                                curly braces {}</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(86,156,214)">f</span><span
                                style="color:rgb(206,145,120)">"Height: </span><span
                                style="color:rgb(86,156,214)">{</span><span
                                style="color:rgb(156,220,254)">height</span><span
                                style="color:rgb(86,156,214)">}</span><span style="color:rgb(206,145,120)">, Distance:
                        </span><span style="color:rgb(86,156,214)">{</span><span
                                style="color:rgb(156,220,254)">distance</span><span
                                style="color:rgb(86,156,214)">}</span><span style="color:rgb(206,145,120)">"</span>)
                </div>
                <div><span style="color:rgb(106,153,85)"># you can also format the value with this syntax:</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(86,156,214)">f</span><span
                                style="color:rgb(206,145,120)">"Height: </span><span
                                style="color:rgb(86,156,214)">{</span><span
                                style="color:rgb(156,220,254)">height</span><span
                                style="color:rgb(86,156,214)">:.1f}</span><span style="color:rgb(206,145,120)">,
                                Distance: </span><span style="color:rgb(86,156,214)">{</span><span
                                style="color:rgb(156,220,254)">distance</span><span
                                style="color:rgb(86,156,214)">}</span><span style="color:rgb(206,145,120)">"</span>)
                </div><br>
                <div><span style="color:rgb(106,153,85)"># string format method: older way to do this. uses positional
                                reference to args</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"Height:
                        </span><span style="color:rgb(86,156,214)">{1:.1f}</span><span style="color:rgb(206,145,120)">,
                                Distance: </span><span style="color:rgb(86,156,214)">{0}</span><span
                                style="color:rgb(206,145,120)">"</span>.<span
                                style="color:rgb(220,220,170)">format</span>(<span
                                style="color:rgb(156,220,254)">distance</span>, <span
                                style="color:rgb(156,220,254)">height</span>))</div><br>
                <div><span style="color:rgb(106,153,85)"># provide the args as a tuple</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"Height:
                        </span><span style="color:rgb(86,156,214)">%.1f</span><span style="color:rgb(206,145,120)">,
                                Distance: </span><span style="color:rgb(86,156,214)">%f</span><span
                                style="color:rgb(206,145,120)">"</span> <span style="color:rgb(212,212,212)">%</span>
                        (<span style="color:rgb(156,220,254)">height</span>, <span
                                style="color:rgb(156,220,254)">distance</span>))</div><br>
                <div><span style="color:rgb(106,153,85)"># example of a raw string</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(86,156,214)">r</span><span
                                style="color:rgb(209,105,105)">"one</span><span
                                style="color:rgb(215,186,125)">\n</span><span
                                style="color:rgb(209,105,105)">two"</span>)</div><br><br>

                                <div><span style="color:rgb(255 184 106);font-size:18px;font-family:Consolas;"><strong>matching text</strong></span></div>

                <div><span style="color:rgb(106,153,85)"># import regex module</span></div>
                <div><span style="color:rgb(197,134,192)">import</span> <span style="color:rgb(78,201,176)">re</span>
                </div><br>
                <div><span style="color:rgb(156,220,254)">text</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(206,145,120)">"Once upon a time"</span>
                </div><br>
                <div><span style="color:rgb(106,153,85)"># result contains the regex match</span></div>
                <div><span style="color:rgb(106,153,85)"># result = re.match(arg1, arg2, arg3)</span></div>
                <div><span style="color:rgb(106,153,85)"># &nbsp; arg1 is the regex string</span></div>
                <div><span style="color:rgb(106,153,85)"># &nbsp; arg2 is the string to test</span></div>
                <div><span style="color:rgb(106,153,85)"># &nbsp; arg3 specifies flags (optional)</span></div>
                <div><span style="color:rgb(156,220,254)">result</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">re</span>.<span
                                style="color:rgb(220,220,170)">match</span>(<span
                                style="color:rgb(86,156,214)">r</span><span style="color:rgb(209,105,105)">"O"</span>,
                        <span style="color:rgb(156,220,254)">text</span>)
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">result</span>)</div><br>
                <div><span style="color:rgb(106,153,85)"># first arg is the regex string. You can use a regular string,
                                or use a raw string if there are escape/special chars</span></div>
                <div><span style="color:rgb(156,220,254)">result</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">re</span>.<span
                                style="color:rgb(220,220,170)">match</span>(<span
                                style="color:rgb(86,156,214)">r</span><span
                                style="color:rgb(209,105,105)">"o.</span><span
                                style="color:rgb(215,186,125)">*?</span><span
                                style="color:rgb(209,105,105)">time"</span>, <span
                                style="color:rgb(156,220,254)">text</span>, <span
                                style="color:rgb(156,220,254)">flags</span><span
                                style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(78,201,176)">re</span>.<span
                                style="color:rgb(156,220,254)">IGNORECASE</span>)
                </div><br>
                <div><span style="color:rgb(197,134,192)">if</span> <span style="color:rgb(156,220,254)">result</span>
                        <span style="color:rgb(86,156,214)">is</span> <span style="color:rgb(86,156,214)">None</span>:
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># None is a special type
                                in python; singleton</span>
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"No match"</span>) &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># 'is' checks if the object ids are the same</span></div>
                <div><span style="color:rgb(197,134,192)">else</span>:</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">result</span>.<span
                                style="color:rgb(220,220,170)">group</span>()) &nbsp; <span
                                style="color:rgb(106,153,85)"># group has the matching text </span></div><br><br>

                                <div><span style="color:rgb(255 184 106);font-size:18px;font-family:Consolas;"><strong>capture groups</strong></span></div>

                <div><span style="color:rgb(197,134,192)">import</span> <span style="color:rgb(78,201,176)">re</span>
                </div><br>
                <div><span style="color:rgb(156,220,254)">text</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(206,145,120)">"ID: 123 Some Corp. Serial: 345453"</span>
                </div><br>
                <div><span style="color:rgb(106,153,85)"># use a regex to grab just the numbers</span></div>
                <div><span style="color:rgb(156,220,254)">result</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">re</span>.<span
                                style="color:rgb(220,220,170)">match</span>(<span
                                style="color:rgb(86,156,214)">r</span><span
                                style="color:rgb(209,105,105)">".</span><span
                                style="color:rgb(215,186,125)">*?</span><span
                                style="color:rgb(206,145,120)">(</span><span
                                style="color:rgb(209,105,105)">\d</span><span
                                style="color:rgb(215,186,125)">{3}</span><span
                                style="color:rgb(206,145,120)">)</span><span
                                style="color:rgb(209,105,105)">.</span><span
                                style="color:rgb(215,186,125)">*?</span><span
                                style="color:rgb(206,145,120)">(</span><span
                                style="color:rgb(209,105,105)">\d</span><span
                                style="color:rgb(215,186,125)">*</span><span
                                style="color:rgb(206,145,120)">)</span><span
                                style="color:rgb(209,105,105)">$<wbr>"</span>, <span
                                style="color:rgb(156,220,254)">text</span>)
                </div><br>
                <div><span style="color:rgb(197,134,192)">if</span> <span style="color:rgb(156,220,254)">result</span>
                        <span style="color:rgb(86,156,214)">is</span> <span style="color:rgb(86,156,214)">None</span>:
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"No match"</span>)</div>
                <div><span style="color:rgb(197,134,192)">else</span>:</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">result</span>.<span
                                style="color:rgb(220,220,170)">group</span>(<span
                                style="color:rgb(181,206,168)">1</span>)) &nbsp;<span style="color:rgb(106,153,85)">#
                                get the first capture group</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">result</span>.<span
                                style="color:rgb(220,220,170)">group</span>(<span
                                style="color:rgb(181,206,168)">2</span>)) &nbsp;<span style="color:rgb(106,153,85)">#
                                get the second capture group</span></div><br><br>

                                <div><span style="color:rgb(255 184 106);font-size:18px;font-family:Consolas;"><strong>escaping and ternary operator</strong></span></div>

                <div><span style="color:rgb(197,134,192)">import</span> <span style="color:rgb(78,201,176)">re</span>
                </div><br>
                <div><span style="color:rgb(156,220,254)">text</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(86,156,214)">r</span><span style="color:rgb(209,105,105)">"a</span><span
                                style="color:rgb(215,186,125)">\n</span><span style="color:rgb(209,105,105)">z"</span>
                </div><br>
                <div><span style="color:rgb(156,220,254)">result</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">re</span>.<span
                                style="color:rgb(220,220,170)">match</span>(<span
                                style="color:rgb(86,156,214)">r</span><span
                                style="color:rgb(209,105,105)">"a</span><span
                                style="color:rgb(215,186,125)">\\</span><span style="color:rgb(209,105,105)">nz"</span>,
                        <span style="color:rgb(156,220,254)">text</span>) &nbsp;<span style="color:rgb(106,153,85)">#
                                need to escape it even though it is a raw string</span>
                </div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"No
                                match"</span> <span style="color:rgb(197,134,192)">if</span> <span
                                style="color:rgb(156,220,254)">result</span> <span
                                style="color:rgb(197,134,192)">is</span> <span style="color:rgb(86,156,214)">None</span>
                        <span style="color:rgb(197,134,192)">else</span> <span
                                style="color:rgb(156,220,254)">result</span>.<span
                                style="color:rgb(220,220,170)">group</span>()) <span style="color:rgb(106,153,85)">#
                                example of a ternary operator</span>
                </div><br><br>

                <div><span style="color:rgb(255 184 106);font-size:18px;font-family:Consolas;"><strong>comments in regex</strong></span></div>

                <div><span style="color:rgb(197,134,192)">import</span> <span style="color:rgb(78,201,176)">re</span>
                </div><br>
                <div><span style="color:rgb(156,220,254)">tag</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(86,156,214)">r</span><span style="color:rgb(209,105,105)">'&lt;div
                                id="123"&gt;Hello&lt;/div&gt;'</span></div>
                <div><span style="color:rgb(106,153,85)"># goal: match the id 123 and the Hello text</span></div><br>
                <div><span style="color:rgb(156,220,254)">result</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">re</span>.<span style="color:rgb(220,220,170)">match</span>(
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># use triple string """ to
                                define a multi-line string</span>
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">r</span><span
                                style="color:rgb(209,105,105)">"""</span></div>
                <div><span style="color:rgb(209,105,105)">&nbsp; &nbsp; &nbsp; &nbsp; &lt;div\s</span><span
                                style="color:rgb(215,186,125)">+</span><span style="color:rgb(209,105,105)"> &nbsp;
                                &nbsp; </span><span style="color:rgb(106,153,85)"># Match opening tag</span></div>
                <div><span style="color:rgb(209,105,105)">&nbsp; &nbsp; &nbsp; &nbsp; id="</span><span
                                style="color:rgb(206,145,120)">(</span><span
                                style="color:rgb(209,105,105)">\d</span><span
                                style="color:rgb(215,186,125)">+</span><span
                                style="color:rgb(206,145,120)">)</span><span style="color:rgb(209,105,105)">"
                                &nbsp;</span><span style="color:rgb(106,153,85)"># Match ID</span></div>
                <div><span style="color:rgb(209,105,105)">&nbsp; &nbsp; &nbsp; &nbsp; &gt; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; </span><span style="color:rgb(106,153,85)"># Closing tag bracket</span></div>
                <div><span style="color:rgb(209,105,105)">&nbsp; &nbsp; &nbsp; &nbsp; </span><span
                                style="color:rgb(206,145,120)">([^</span><span
                                style="color:rgb(209,105,105)">&lt;&gt;</span><span
                                style="color:rgb(206,145,120)">]</span><span
                                style="color:rgb(215,186,125)">+</span><span
                                style="color:rgb(206,145,120)">)</span><span style="color:rgb(209,105,105)"> &nbsp;
                                &nbsp;</span><span style="color:rgb(106,153,85)"># Get content between open and close
                                tags.</span></div>
                <div><span style="color:rgb(209,105,105)">&nbsp; &nbsp; &nbsp; &nbsp; &lt;/div&gt;</span></div>
                <div><span style="color:rgb(209,105,105)">&nbsp; &nbsp; """</span>, </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">tag</span>, <span
                                style="color:rgb(78,201,176)">re</span>.<span
                                style="color:rgb(156,220,254)">VERBOSE</span>) <span style="color:rgb(106,153,85)">#
                                re.VERBOSE means you want to allow comments in the regex</span></div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"No
                                match"</span> <span style="color:rgb(197,134,192)">if</span> <span
                                style="color:rgb(156,220,254)">result</span> <span
                                style="color:rgb(197,134,192)">is</span> <span style="color:rgb(86,156,214)">None</span>
                        <span style="color:rgb(197,134,192)">else</span> <span
                                style="color:rgb(156,220,254)">result</span>.<span
                                style="color:rgb(220,220,170)">groups</span>()) <span style="color:rgb(106,153,85)">#
                                groups(): return a tuple with all the groups</span>
                </div>
                <div><span style="color:rgb(106,153,85)"># output: ('123', 'Hello')</span></div><br><br>

                <div><span style="color:rgb(255 184 106);font-size:18px;font-family:Consolas;"><strong>search</strong></span></div>

                <div><span style="color:rgb(197,134,192)">import</span> <span style="color:rgb(78,201,176)">re</span>
                </div><br>
                <div><span style="color:rgb(156,220,254)">text</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(206,145,120)">"""</span>
                </div>
                <div><span style="color:rgb(206,145,120)">one</span></div>
                <div><span style="color:rgb(206,145,120)">two</span></div>
                <div><span style="color:rgb(206,145,120)">three</span></div>
                <div><span style="color:rgb(206,145,120)">"""</span></div><br>
                <div><span style="color:rgb(106,153,85)"># match a 't' char followed by an 'e' char. </span></div>
                <div><span style="color:rgb(156,220,254)">result</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">re</span>.<span
                                style="color:rgb(220,220,170)">search</span>(<span
                                style="color:rgb(86,156,214)">r</span><span style="color:rgb(209,105,105)">"</span><span
                                style="color:rgb(206,145,120)">(</span><span
                                style="color:rgb(209,105,105)">t.</span><span
                                style="color:rgb(215,186,125)">*</span><span
                                style="color:rgb(209,105,105)">e</span><span
                                style="color:rgb(206,145,120)">)</span><span style="color:rgb(209,105,105)">"</span>,
                        <span style="color:rgb(156,220,254)">text</span>)
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"No
                                match"</span> <span style="color:rgb(197,134,192)">if</span> <span
                                style="color:rgb(156,220,254)">result</span> <span
                                style="color:rgb(197,134,192)">is</span> <span style="color:rgb(86,156,214)">None</span>
                        <span style="color:rgb(197,134,192)">else</span> <span
                                style="color:rgb(156,220,254)">result</span>.<span
                                style="color:rgb(220,220,170)">groups</span>())
                </div>
                <div><span style="color:rgb(106,153,85)"># output: ('three',)</span></div><br>
                <div><span style="color:rgb(106,153,85)"># by default, re module will not include a newline char as a
                                match for the "."</span></div>
                <div><span style="color:rgb(106,153,85)"># if you want the "." to include all chars, use the re.DOTALL
                                flag</span></div>
                <div><span style="color:rgb(156,220,254)">result</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">re</span>.<span
                                style="color:rgb(220,220,170)">search</span>(<span
                                style="color:rgb(86,156,214)">r</span><span style="color:rgb(209,105,105)">"</span><span
                                style="color:rgb(206,145,120)">(</span><span
                                style="color:rgb(209,105,105)">t.</span><span
                                style="color:rgb(215,186,125)">*</span><span
                                style="color:rgb(209,105,105)">e</span><span
                                style="color:rgb(206,145,120)">)</span><span style="color:rgb(209,105,105)">"</span>,
                        <span style="color:rgb(156,220,254)">text</span>, <span
                                style="color:rgb(78,201,176)">re</span>.<span
                                style="color:rgb(156,220,254)">DOTALL</span>)
                </div>
                <div><span style="color:rgb(106,153,85)"># output: ('two\nthree',)</span></div>
                <div><span style="color:rgb(106,153,85)"># note: .* is a greedy match, so it will not stop at the first
                                'e' </span></div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"No
                                match"</span> <span style="color:rgb(197,134,192)">if</span> <span
                                style="color:rgb(156,220,254)">result</span> <span
                                style="color:rgb(197,134,192)">is</span> <span style="color:rgb(86,156,214)">None</span>
                        <span style="color:rgb(197,134,192)">else</span> <span
                                style="color:rgb(156,220,254)">result</span>.<span
                                style="color:rgb(220,220,170)">groups</span>())
                </div><br><br>

                <div><span style="color:rgb(255 184 106);font-size:18px;font-family:Consolas;"><strong>findall</strong></span></div>

                <div><span style="color:rgb(197,134,192)">import</span> <span style="color:rgb(78,201,176)">re</span>
                </div><br>
                <div><span style="color:rgb(156,220,254)">menu</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(206,145,120)">"""</span>
                </div>
                <div><span style="color:rgb(206,145,120)">1. Fish</span></div>
                <div><span style="color:rgb(206,145,120)">2. Bread</span></div>
                <div><span style="color:rgb(206,145,120)">3. Peppers</span></div>
                <div><span style="color:rgb(206,145,120)">4. Potatoes</span></div>
                <div><span style="color:rgb(206,145,120)">"""</span></div><br>
                <div><span style="color:rgb(106,153,85)"># goal: find all the matches for a number followed by a '.'
                                followed by some text</span></div>
                <div><span style="color:rgb(156,220,254)">result</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">re</span>.<span
                                style="color:rgb(220,220,170)">findall</span>(<span
                                style="color:rgb(86,156,214)">r</span><span style="color:rgb(209,105,105)">"</span><span
                                style="color:rgb(206,145,120)">(</span><span
                                style="color:rgb(209,105,105)">\d</span><span
                                style="color:rgb(215,186,125)">+</span><span
                                style="color:rgb(206,145,120)">)</span><span
                                style="color:rgb(215,186,125)">\.</span><span
                                style="color:rgb(209,105,105)">\s</span><span
                                style="color:rgb(215,186,125)">+</span><span
                                style="color:rgb(206,145,120)">(</span><span
                                style="color:rgb(209,105,105)">\w</span><span
                                style="color:rgb(215,186,125)">+</span><span
                                style="color:rgb(206,145,120)">)</span><span
                                style="color:rgb(215,186,125)">\n</span><span
                                style="color:rgb(209,105,105)"><wbr>"</span>, <span
                                style="color:rgb(156,220,254)">menu</span>)
                </div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">result</span>)</div>
                <div><span style="color:rgb(106,153,85)"># output: [('1', 'Fish'), ('2', 'Bread'), ('3', 'Peppers'),
                                ('4', 'Potatoes')]</span></div><br><br>

                                <div><span style="color:rgb(255 184 106);font-size:18px;font-family:Consolas;"><strong>multi-line matching</strong></span></div>

                <div><span style="color:rgb(197,134,192)">import</span> <span style="color:rgb(78,201,176)">re</span>
                </div><br>
                <div><span style="color:rgb(156,220,254)">menu</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(206,145,120)">"""</span>
                </div>
                <div><span style="color:rgb(206,145,120)">1. Fish</span></div>
                <div><span style="color:rgb(206,145,120)">2. Bread</span></div>
                <div><span style="color:rgb(206,145,120)">3. Peppers</span></div>
                <div><span style="color:rgb(206,145,120)">4. Potatoes</span></div>
                <div><span style="color:rgb(206,145,120)">"""</span></div>
                <div><span style="color:rgb(106,153,85)"># goal: grab each line in the text and return as a list</span>
                </div>
                <div><span style="color:rgb(106,153,85)"># if you do not use the re.MULTILINE flag, it will return the
                                entire string (not split into multiple lines)</span></div>
                <div><span style="color:rgb(156,220,254)">result</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">re</span>.<span
                                style="color:rgb(220,220,170)">findall</span>(<span
                                style="color:rgb(86,156,214)">r</span><span
                                style="color:rgb(209,105,105)">"^</span><span
                                style="color:rgb(206,145,120)">(</span><span
                                style="color:rgb(209,105,105)">.</span><span
                                style="color:rgb(215,186,125)">*</span><span
                                style="color:rgb(206,145,120)">)</span><span style="color:rgb(209,105,105)">$"</span>,
                        <span style="color:rgb(156,220,254)">menu</span>, <span
                                style="color:rgb(78,201,176)">re</span>.<span
                                style="color:rgb(156,220,254)">MULTILINE</span>)
                </div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">result</span>)</div>
                <div><span style="color:rgb(106,153,85)"># output: ['', '1. Fish', '2. Bread', '3. Peppers', '4.
                                Potatoes', '']</span></div><br><br>

                                <div><span style="color:rgb(255 184 106);font-size:18px;font-family:Consolas;"><strong>compile regex</strong></span></div>

                <div><span style="color:rgb(197,134,192)">import</span> <span style="color:rgb(78,201,176)">re</span>
                </div><br>
                <div><span style="color:rgb(156,220,254)">text</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(206,145,120)">"dog cat mouse"</span>
                </div><br>
                <div><span style="color:rgb(106,153,85)"># if you use the same regex more than once (or in a loop),
                                compile will be more efficient</span></div>
                <div><span style="color:rgb(156,220,254)">regex</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">re</span>.<span
                                style="color:rgb(220,220,170)">compile</span>(<span
                                style="color:rgb(86,156,214)">r</span><span
                                style="color:rgb(209,105,105)">"C.</span><span
                                style="color:rgb(215,186,125)">*</span><span style="color:rgb(209,105,105)">T"</span>,
                        <span style="color:rgb(156,220,254)">flags</span><span
                                style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(78,201,176)">re</span>.<span
                                style="color:rgb(156,220,254)">IGNORECASE</span>)
                </div><br>
                <div><span style="color:rgb(106,153,85)"># goal: replace 'cat' with 'giraffe'</span></div>
                <div><span style="color:rgb(106,153,85)"># re.sub() does a substitution</span></div>
                <div><span style="color:rgb(156,220,254)">result</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">re</span>.<span
                                style="color:rgb(220,220,170)">sub</span>(<span
                                style="color:rgb(156,220,254)">regex</span>, <span
                                style="color:rgb(206,145,120)">"giraffe"</span>, <span
                                style="color:rgb(156,220,254)">text</span>)
                </div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">result</span>)</div>
                <div><span style="color:rgb(106,153,85)"># output: dog giraffe mouse</span></div>
                <div class="yj6qo ajU">
                        <div id=":14v" class="ajR" role="button" tabindex="0" data-tooltip="Show trimmed content"
                                aria-label="Show trimmed content" aria-expanded="false"><img class="ajT"
                                        src="//ssl.gstatic.com/ui/v1/icons/mail/images/cleardot.gif"></div>
                </div><br><br>

                <div><span style="color:rgb(255 184 106);font-size:18px;font-family:Consolas;"><strong>Test Your Knowledge</strong></span></div>

                <div><span style="color:rgb(106,153,85)"># Test Your Knowledge of Regular Expressions and Containers in
                                Python</span></div>
                <div><span style="color:rgb(106,153,85)"># Write a function called 'match' that accepts a string as an
                                argument </span></div>
                <div><span style="color:rgb(106,153,85)"># and returns a dictionary in which the keys are all the words
                                in the </span></div>
                <div><span style="color:rgb(106,153,85)"># text that begin with the letter 'o' and the values are the
                                lengths of the keys.</span></div>
                <div><span style="color:rgb(106,153,85)"># </span></div>
                <div><span style="color:rgb(106,153,85)"># The function should be case insensitive.</span></div>
                <div><span style="color:rgb(106,153,85)"># For example, given the text "Oh, maybe Olly is over it", the
                                function should return:</span></div>
                <div><span style="color:rgb(106,153,85)"># {'Oh,': 3, 'Olly': 4, 'over': 4}</span></div><br>
                <div><span style="color:rgb(197,134,192)">import</span> <span style="color:rgb(78,201,176)">re</span>
                </div><br>
                <div><span style="color:rgb(156,220,254)">regex</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">re</span>.<span
                                style="color:rgb(220,220,170)">compile</span>(<span
                                style="color:rgb(86,156,214)">r</span><span
                                style="color:rgb(209,105,105)">"\b</span><span
                                style="color:rgb(206,145,120)">(</span><span
                                style="color:rgb(209,105,105)">o</span><span
                                style="color:rgb(206,145,120)">[</span><span
                                style="color:rgb(209,105,105)">a-z</span><span
                                style="color:rgb(206,145,120)">]</span><span
                                style="color:rgb(215,186,125)">*</span><span
                                style="color:rgb(206,145,120)">)</span><span style="color:rgb(209,105,105)">\b"</span>,
                        <span style="color:rgb(156,220,254)">flags</span><span
                                style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(78,201,176)">re</span>.<span
                                style="color:rgb(156,220,254)">IGNORECASE</span>)
                </div><br>
                <div><span style="color:rgb(156,220,254)">testing</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">re</span>.<span
                                style="color:rgb(220,220,170)">findall</span>(<span
                                style="color:rgb(156,220,254)">regex</span>, <span
                                style="color:rgb(206,145,120)">"Oranges of Sicily are ordinarily on form."</span>)
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">testing</span>)</div><br><br>
                <div><span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">match</span>(<span
                                style="color:rgb(156,220,254)">input</span>):</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">result</span> <span
                                style="color:rgb(212,212,212)">=</span> {}</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">matches</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">re</span>.<span
                                style="color:rgb(220,220,170)">findall</span>(<span
                                style="color:rgb(156,220,254)">regex</span>, <span
                                style="color:rgb(156,220,254)">input</span>)</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">for</span> <span
                                style="color:rgb(156,220,254)">match</span> <span
                                style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(156,220,254)">matches</span>:</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(156,220,254)">result</span>[<span
                                style="color:rgb(156,220,254)">match</span>] <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(220,220,170)">len</span>(<span
                                style="color:rgb(156,220,254)">match</span>)</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(156,220,254)">result</span></div><br>
                <div><span style="color:rgb(156,220,254)">testing</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(220,220,170)">match</span>(<span style="color:rgb(206,145,120)">"Oranges
                                of Sicily are ordinarily on form."</span>)
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">testing</span>)</div>

                
        </div>
</div>
        `

        const html7 = `
        <div dir="ltr">
        <div style="color:rgb(204,204,204);font-family:monospace;font-size:14px;line-height:18px;">
                
        <div><span style="color:rgb(255 184 106);font-size:18px;font-family:Consolas;"><strong>exceptions</strong></span></div>
        
                <div><span style="color:rgb(197,134,192)">try</span>:</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">d</span> <span
                                style="color:rgb(212,212,212)">=</span> {}</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">d</span>[<span
                                style="color:rgb(206,145,120)">'Hello'</span>]</div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(181,206,168)">1</span><span
                                style="color:rgb(212,212,212)">/</span><span style="color:rgb(181,206,168)">0</span>)
                </div>
                <div><span style="color:rgb(197,134,192)">except</span> <span
                                style="color:rgb(78,201,176)">ZeroDivisionError</span> <span
                                style="color:rgb(197,134,192)">as</span> <span
                                style="color:rgb(156,220,254)">zde</span>:</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"Failed."</span>, <span
                                style="color:rgb(156,220,254)">zde</span>)</div>
                <div><span style="color:rgb(197,134,192)">except</span> <span
                                style="color:rgb(78,201,176)">Exception</span> <span
                                style="color:rgb(197,134,192)">as</span> <span style="color:rgb(156,220,254)">e</span>:
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"Caught exception"</span>, <span
                                style="color:rgb(78,201,176)">type</span>(<span
                                style="color:rgb(156,220,254)">e</span>))</div>
                <div><span style="color:rgb(197,134,192)">finally</span>:</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"Finally!"</span>)</div><br><br>

                                <div><span style="color:rgb(255 184 106);font-size:18px;font-family:Consolas;"><strong>raising exceptions</strong></span></div>

                <div><span style="color:rgb(86,156,214)">class</span> <span
                                style="color:rgb(78,201,176)">MyException</span>(<span
                                style="color:rgb(78,201,176)">Exception</span>): &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># MyException extends Exception</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">pass</span></div><br>
                <div><span style="color:rgb(197,134,192)">try</span>:</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">raise</span> <span
                                style="color:rgb(78,201,176)">MyException</span>(<span
                                style="color:rgb(206,145,120)">"Oh no!"</span>)</div>
                <div><span style="color:rgb(197,134,192)">except</span> <span
                                style="color:rgb(78,201,176)">MyException</span> <span
                                style="color:rgb(197,134,192)">as</span> <span style="color:rgb(156,220,254)">e</span>:
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">e</span>)</div><br><br>

                                <div><span style="color:rgb(255 184 106);font-size:18px;font-family:Consolas;"><strong>assertions</strong></span></div>

                <div><span style="color:rgb(156,220,254)">value</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(181,206,168)">7</span>
                </div><br>
                <div><span style="color:rgb(197,134,192)">try</span>:</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">assert</span> <span
                                style="color:rgb(156,220,254)">value</span> <span
                                style="color:rgb(212,212,212)">&gt;</span> <span
                                style="color:rgb(181,206,168)">8</span>, <span style="color:rgb(206,145,120)">"Oh
                                no!"</span></div>
                <div><span style="color:rgb(197,134,192)">except</span> <span
                                style="color:rgb(78,201,176)">AssertionError</span> <span
                                style="color:rgb(197,134,192)">as</span> <span style="color:rgb(156,220,254)">a</span>:
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">a</span>)</div>
        </div>
</div>
        `

        const html8 = `
        <div dir="ltr">
        <div style="color:rgb(204,204,204);font-family:monospace;font-size:14px;line-height:18px;">
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ classes "</span>)</div><br>
                <div><span style="color:rgb(86,156,214)">class</span> <span style="color:rgb(78,201,176)">Person</span>:
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">eating</span>(<span
                                style="color:rgb(156,220,254)">self</span>): &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; <span style="color:rgb(106,153,85)"># best practice to pass self; similar to 'this' in
                                java</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"I'm eating!"</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">p</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">Person</span>() &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># no 'new' keyword as in java</span></div>
                <div><span style="color:rgb(156,220,254)">p</span>.<span style="color:rgb(220,220,170)">eating</span>()
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">p</span>)
                </div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ constructors "</span>)</div>
                <div><span style="color:rgb(86,156,214)">class</span> <span style="color:rgb(78,201,176)">Person</span>:
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">__init__</span>(<span
                                style="color:rgb(156,220,254)">self</span>, <span
                                style="color:rgb(156,220,254)">name</span>): &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># constructor must be called '__init__'. pass name to the
                                constructor</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(156,220,254)">self</span>.<span
                                style="color:rgb(156,220,254)">_name</span> <span
                                style="color:rgb(212,212,212)">=</span> <span style="color:rgb(156,220,254)">name</span>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># _name can
                                be called anything you want</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># python doesn't
                                enforce private/public/protected methods</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># but common
                                convention is to have '_' for protected field/method</span></div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">eating</span>(<span
                                style="color:rgb(156,220,254)">self</span>):</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(86,156,214)">f</span><span style="color:rgb(206,145,120)">"</span><span
                                style="color:rgb(86,156,214)">{</span><span
                                style="color:rgb(156,220,254)">self</span>.<span
                                style="color:rgb(156,220,254)">_name</span><span
                                style="color:rgb(86,156,214)">}</span><span style="color:rgb(206,145,120)"> is
                                eating!"</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">p</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">Person</span>(<span
                                style="color:rgb(206,145,120)">"Bob"</span>)</div>
                <div><span style="color:rgb(156,220,254)">p</span>.<span style="color:rgb(220,220,170)">eating</span>()
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">p</span>)
                </div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ convert to strings "</span>)</div>
                <div><span style="color:rgb(86,156,214)">class</span> <span style="color:rgb(78,201,176)">Person</span>:
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">__init__</span>(<span
                                style="color:rgb(156,220,254)">self</span>, <span
                                style="color:rgb(156,220,254)">name</span>):</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(156,220,254)">self</span>.<span
                                style="color:rgb(156,220,254)">_name</span> <span
                                style="color:rgb(212,212,212)">=</span> <span style="color:rgb(156,220,254)">name</span>
                </div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">eating</span>(<span
                                style="color:rgb(156,220,254)">self</span>):</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(86,156,214)">f</span><span style="color:rgb(206,145,120)">"</span><span
                                style="color:rgb(86,156,214)">{</span><span
                                style="color:rgb(156,220,254)">self</span>.<span
                                style="color:rgb(156,220,254)">_name</span><span
                                style="color:rgb(86,156,214)">}</span><span style="color:rgb(206,145,120)"> is
                                eating!"</span>)</div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">__str__</span>(<span
                                style="color:rgb(156,220,254)">self</span>): &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)">#
                                creating/overriding a 'toString()' method</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(86,156,214)">f</span><span style="color:rgb(206,145,120)">"Hello I am
                        </span><span style="color:rgb(86,156,214)">{</span><span
                                style="color:rgb(156,220,254)">self</span>.<span
                                style="color:rgb(156,220,254)">_name</span><span
                                style="color:rgb(86,156,214)">}</span><span style="color:rgb(206,145,120)">"</span>
                </div><br>
                <div><span style="color:rgb(156,220,254)">p</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">Person</span>(<span
                                style="color:rgb(206,145,120)">"Bob"</span>)</div>
                <div><span style="color:rgb(156,220,254)">p</span>.<span style="color:rgb(220,220,170)">eating</span>()
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">p</span>)
                </div><br>
                <div><span style="color:rgb(156,220,254)">text</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(220,220,170)">str</span>(<span style="color:rgb(156,220,254)">p</span>)
                        &nbsp; <span style="color:rgb(106,153,85)"># another way to call the 'toString()' method using
                                the built-in str() function</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">text</span>)
                </div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ eval and repr "</span>)</div>
                <div><span style="color:rgb(86,156,214)">class</span> <span style="color:rgb(78,201,176)">Person</span>:
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">__init__</span>(<span
                                style="color:rgb(156,220,254)">self</span>, <span
                                style="color:rgb(156,220,254)">name</span>):</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(156,220,254)">self</span>.<span
                                style="color:rgb(156,220,254)">_name</span> <span
                                style="color:rgb(212,212,212)">=</span> <span style="color:rgb(156,220,254)">name</span>
                </div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">eating</span>(<span
                                style="color:rgb(156,220,254)">self</span>):</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(86,156,214)">f</span><span style="color:rgb(206,145,120)">"</span><span
                                style="color:rgb(86,156,214)">{</span><span
                                style="color:rgb(156,220,254)">self</span>.<span
                                style="color:rgb(156,220,254)">_name</span><span
                                style="color:rgb(86,156,214)">}</span><span style="color:rgb(206,145,120)"> is
                                eating!"</span>)</div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">__str__</span>(<span
                                style="color:rgb(156,220,254)">self</span>):</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(86,156,214)">f</span><span style="color:rgb(206,145,120)">"Hello I am
                        </span><span style="color:rgb(86,156,214)">{</span><span
                                style="color:rgb(156,220,254)">self</span>.<span
                                style="color:rgb(156,220,254)">_name</span><span
                                style="color:rgb(86,156,214)">}</span><span style="color:rgb(206,145,120)">"</span>
                </div>
                <div>&nbsp; &nbsp; </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">__repr__</span>(<span
                                style="color:rgb(156,220,254)">self</span>): &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># purpose: create
                                a tostring method that is intended</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(86,156,214)">f</span><span
                                style="color:rgb(206,145,120)">'Person("</span><span
                                style="color:rgb(86,156,214)">{</span><span
                                style="color:rgb(156,220,254)">self</span>.<span
                                style="color:rgb(156,220,254)">_name</span><span
                                style="color:rgb(86,156,214)">}</span><span style="color:rgb(206,145,120)">")'</span>
                        &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># for machine comsumption (rather
                                than human).</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># Idea: be able to re-create this obj using this
                                string</span></div><br>
                <div><span style="color:rgb(156,220,254)">p</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">Person</span>(<span
                                style="color:rgb(206,145,120)">"Bob"</span>)</div>
                <div><span style="color:rgb(156,220,254)">p</span>.<span style="color:rgb(220,220,170)">eating</span>()
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">p</span>)
                </div><br>
                <div><span style="color:rgb(156,220,254)">text</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(220,220,170)">str</span>(<span style="color:rgb(156,220,254)">p</span>)
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">text</span>)
                </div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(220,220,170)">eval</span>(<span
                                style="color:rgb(220,220,170)">repr</span>(<span
                                style="color:rgb(156,220,254)">p</span>))) &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># use 'repr' to call the __repr__() method</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># use 'eval' to run a string as python code</span></div>
                <br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ inheiritance "</span>)</div>
                <div><span style="color:rgb(86,156,214)">class</span> <span style="color:rgb(78,201,176)">Person</span>:
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">__init__</span>(<span
                                style="color:rgb(156,220,254)">self</span>, <span
                                style="color:rgb(156,220,254)">name</span>):</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(156,220,254)">self</span>.<span
                                style="color:rgb(156,220,254)">_name</span> <span
                                style="color:rgb(212,212,212)">=</span> <span style="color:rgb(156,220,254)">name</span>
                </div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">eating</span>(<span
                                style="color:rgb(156,220,254)">self</span>):</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(86,156,214)">f</span><span style="color:rgb(206,145,120)">"</span><span
                                style="color:rgb(86,156,214)">{</span><span
                                style="color:rgb(156,220,254)">self</span>.<span
                                style="color:rgb(156,220,254)">_name</span><span
                                style="color:rgb(86,156,214)">}</span><span style="color:rgb(206,145,120)"> is
                                eating!"</span>)</div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">__str__</span>(<span
                                style="color:rgb(156,220,254)">self</span>):</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(86,156,214)">f</span><span style="color:rgb(206,145,120)">"Hello I am
                        </span><span style="color:rgb(86,156,214)">{</span><span
                                style="color:rgb(156,220,254)">self</span>.<span
                                style="color:rgb(156,220,254)">_name</span><span
                                style="color:rgb(86,156,214)">}</span><span style="color:rgb(206,145,120)">"</span>
                </div>
                <div>&nbsp; &nbsp; </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">__repr__</span>(<span
                                style="color:rgb(156,220,254)">self</span>):</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(86,156,214)">f</span><span
                                style="color:rgb(206,145,120)">'Person("</span><span
                                style="color:rgb(86,156,214)">{</span><span
                                style="color:rgb(156,220,254)">self</span>.<span
                                style="color:rgb(156,220,254)">_name</span><span
                                style="color:rgb(86,156,214)">}</span><span style="color:rgb(206,145,120)">")'</span>
                </div>
                <div>&nbsp; &nbsp; </div>
                <div><span style="color:rgb(86,156,214)">class</span> <span
                                style="color:rgb(78,201,176)">Employee</span>(<span
                                style="color:rgb(78,201,176)">Person</span>): &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># define a class that extends
                                the Person class</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">go_on_holiday</span>(<span
                                style="color:rgb(156,220,254)">self</span>):</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"I'm going on holiday!"</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">p</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">Person</span>(<span
                                style="color:rgb(206,145,120)">"Bob"</span>)</div>
                <div><span style="color:rgb(156,220,254)">e</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">Employee</span>(<span
                                style="color:rgb(206,145,120)">"Sue"</span>)</div>
                <div><span style="color:rgb(156,220,254)">e</span>.<span style="color:rgb(220,220,170)">eating</span>()
                </div>
                <div><span style="color:rgb(156,220,254)">e</span>.<span
                                style="color:rgb(220,220,170)">go_on_holiday</span>()</div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ overriding methods "</span>)</div>
                <div><span style="color:rgb(86,156,214)">class</span> <span style="color:rgb(78,201,176)">Animal</span>:
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">speak</span>(<span
                                style="color:rgb(156,220,254)">self</span>):</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"I'm an animal"</span>)</div><br>
                <div><span style="color:rgb(86,156,214)">class</span> <span
                                style="color:rgb(78,201,176)">Cat</span>(<span
                                style="color:rgb(78,201,176)">Animal</span>):</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">speak</span>(<span
                                style="color:rgb(156,220,254)">self</span>): &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp;<span style="color:rgb(106,153,85)"># overrides inheirited method</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"Meeouw"</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">cat</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">Cat</span>()</div>
                <div><span style="color:rgb(156,220,254)">cat</span>.<span style="color:rgb(220,220,170)">speak</span>()
                </div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ super "</span>)</div>
                <div><span style="color:rgb(86,156,214)">class</span> <span
                                style="color:rgb(78,201,176)">Machine</span>:</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">__init__</span>(<span
                                style="color:rgb(156,220,254)">self</span>):</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"Machine constructor"</span>)</div><br>
                <div><span style="color:rgb(86,156,214)">class</span> <span
                                style="color:rgb(78,201,176)">Car</span>(<span
                                style="color:rgb(78,201,176)">Machine</span>):</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">__init__</span>(<span
                                style="color:rgb(156,220,254)">self</span>):</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(78,201,176)">super</span>().<span
                                style="color:rgb(220,220,170)">__init__</span>() &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># call the parent constructor</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"Car constructor"</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">c</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">Car</span>()</div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ class attributes "</span>)</div>
                <div><span style="color:rgb(86,156,214)">class</span> <span
                                style="color:rgb(78,201,176)">Machine</span>:</div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">count</span> <span
                                style="color:rgb(212,212,212)">=</span> <span style="color:rgb(181,206,168)">0</span>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># python equivalent to static field in java; belongs to
                                the class and not an instance</span></div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">__init__</span>(<span
                                style="color:rgb(156,220,254)">self</span>):</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(78,201,176)">Machine</span>.<span
                                style="color:rgb(156,220,254)">count</span> <span
                                style="color:rgb(212,212,212)">+=</span> <span style="color:rgb(181,206,168)">1</span>
                </div><br>
                <div><span style="color:rgb(78,201,176)">Machine</span>()</div>
                <div><span style="color:rgb(78,201,176)">Machine</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(78,201,176)">Machine</span>.<span
                                style="color:rgb(156,220,254)">count</span>)</div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ multiple inheritance "</span>)</div>
                <div><span style="color:rgb(86,156,214)">class</span> <span style="color:rgb(78,201,176)">Car</span>:
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">start</span>(<span
                                style="color:rgb(156,220,254)">self</span>):</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"Car starting"</span>)</div><br>
                <div><span style="color:rgb(86,156,214)">class</span> <span style="color:rgb(78,201,176)">Alarm</span>:
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">on</span>(<span
                                style="color:rgb(156,220,254)">self</span>):</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"Alarm on"</span>)</div><br>
                <div><span style="color:rgb(86,156,214)">class</span> <span
                                style="color:rgb(78,201,176)">SafeCar</span>(<span
                                style="color:rgb(78,201,176)">Car</span>,<span
                                style="color:rgb(78,201,176)">Alarm</span>): &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># multiple inheiritance; java would use an
                                interface</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">pass</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># in python,
                                SafeCar 'is a' Car but not an Alarm</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># Alarm is considered a 'mixin': it's purpose
                                is to add behavior to another class</span></div><br>
                <div><span style="color:rgb(156,220,254)">s</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">SafeCar</span>()</div>
                <div><span style="color:rgb(156,220,254)">s</span>.<span style="color:rgb(220,220,170)">start</span>()
                </div>
                <div><span style="color:rgb(156,220,254)">s</span>.<span style="color:rgb(220,220,170)">on</span>()
                </div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ method resolution order "</span>)</div>
                <div><span style="color:rgb(86,156,214)">class</span> <span style="color:rgb(78,201,176)">A</span>:
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">run</span>(<span
                                style="color:rgb(156,220,254)">self</span>):</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"Hello A"</span>)</div><br>
                <div><span style="color:rgb(86,156,214)">class</span> <span style="color:rgb(78,201,176)">B</span>:
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">run</span>(<span
                                style="color:rgb(156,220,254)">self</span>):</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"Hello B"</span>)</div><br>
                <div><span style="color:rgb(86,156,214)">class</span> <span style="color:rgb(78,201,176)">C</span>(<span
                                style="color:rgb(78,201,176)">A</span>, <span style="color:rgb(78,201,176)">B</span>):
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">pass</span></div><br>
                <div><span style="color:rgb(156,220,254)">c</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">C</span>()</div>
                <div><span style="color:rgb(156,220,254)">c</span>.<span style="color:rgb(220,220,170)">run</span>()
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># which run() is
                                called? From class A or B? Order is same as in constructor</span></div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(78,201,176)">C</span>.<span
                                style="color:rgb(220,220,170)">mro</span>()) &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># display the method resolution order for class C</span>
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># output: [&lt;class '__main__.C'&gt;, &lt;class
                                '__main__.A'&gt;, &lt;class '__main__.B'&gt;, &lt;class 'object'&gt;]</span></div>
                <br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ implementing operators "</span>)</div>
                <div><span style="color:rgb(86,156,214)">class</span> <span style="color:rgb(78,201,176)">Word</span>:
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">__init__</span>(<span
                                style="color:rgb(156,220,254)">self</span>, <span
                                style="color:rgb(156,220,254)">text</span>):</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(156,220,254)">self</span>.<span
                                style="color:rgb(156,220,254)">_text</span> <span
                                style="color:rgb(212,212,212)">=</span> <span style="color:rgb(156,220,254)">text</span>
                </div>
                <div>&nbsp; &nbsp; </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">__str__</span>(<span
                                style="color:rgb(156,220,254)">self</span>):</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(156,220,254)">self</span>.<span
                                style="color:rgb(156,220,254)">_text</span></div>
                <div>&nbsp; &nbsp; </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">__add__</span>(<span
                                style="color:rgb(156,220,254)">self</span>, <span
                                style="color:rgb(156,220,254)">other</span>):</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(78,201,176)">Word</span>(<span
                                style="color:rgb(156,220,254)">self</span>.<span
                                style="color:rgb(156,220,254)">_text</span> <span
                                style="color:rgb(212,212,212)">+</span> <span
                                style="color:rgb(156,220,254)">other</span>._text) &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># we can decide what this method does.</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># let's return a new word object</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># there are many existing operators you can override.
                                check the python docs online</span></div>
                <div>&nbsp; &nbsp; </div>
                <div><span style="color:rgb(156,220,254)">w1</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">Word</span>(<span style="color:rgb(206,145,120)">"Hello
                                "</span>)</div>
                <div><span style="color:rgb(156,220,254)">w2</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">Word</span>(<span
                                style="color:rgb(206,145,120)">"there"</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">w</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(156,220,254)">w1</span> <span style="color:rgb(220,220,170)">+</span>
                        <span style="color:rgb(156,220,254)">w2</span> &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># the __add__() method is called</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">w</span>)
                </div><br><br>


                <div><span style="color:rgb(106,153,85)"># Practice Your Classes Knowledge</span></div><br>
                <div><span style="color:rgb(106,153,85)"># Write two classes: Word, and AddableWord</span></div>
                <div><span style="color:rgb(106,153,85)"># The constructor of Word should accept a string. When Word is
                                converted to a string, </span></div>
                <div><span style="color:rgb(106,153,85)"># it should convert to the string that you supplied to the
                                constructor.</span></div><br>
                <div><span style="color:rgb(106,153,85)"># Example: print(Word('best')) should print 'best'.</span>
                </div><br>
                <div><span style="color:rgb(106,153,85)"># AddableWord should be a subtype (derived class) of Word. It
                                should implement the '+' operator </span></div>
                <div><span style="color:rgb(106,153,85)"># so that when two AddableWord objects are added together, the
                                result is an AddableWord </span></div>
                <div><span style="color:rgb(106,153,85)"># that converts to a string that contains the words represented
                                by both of the objects, </span></div>
                <div><span style="color:rgb(106,153,85)"># separated by ':'.</span></div><br>
                <div><span style="color:rgb(106,153,85)"># For example, &nbsp;print(AddableWord('best') +
                                AddableWord('holiday')) should print 'best:holiday'.</span></div><span class="im"><br>
                        <div><span style="color:rgb(86,156,214)">class</span> <span
                                        style="color:rgb(78,201,176)">Word</span>:</div>
                        <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                                        style="color:rgb(220,220,170)">__init__</span>(<span
                                        style="color:rgb(156,220,254)">self</span>, <span
                                        style="color:rgb(156,220,254)">text</span>):</div>
                        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(156,220,254)">self</span>.<span
                                        style="color:rgb(156,220,254)">_text</span> <span
                                        style="color:rgb(212,212,212)">=</span> <span
                                        style="color:rgb(156,220,254)">text</span></div>
                        <div>&nbsp; &nbsp; </div>
                        <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                                        style="color:rgb(220,220,170)">__str__</span>(<span
                                        style="color:rgb(156,220,254)">self</span>):</div>
                        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                        style="color:rgb(156,220,254)">self</span>.<span
                                        style="color:rgb(156,220,254)">_text</span></div>
                        <div>&nbsp; &nbsp; </div><br>
                </span>
                <div><span style="color:rgb(86,156,214)">class</span> <span
                                style="color:rgb(78,201,176)">AddableWord</span>(<span
                                style="color:rgb(78,201,176)">Word</span>):</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">__add__</span>(<span
                                style="color:rgb(156,220,254)">self</span>, <span
                                style="color:rgb(156,220,254)">other</span>):</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(78,201,176)">AddableWord</span>(<span
                                style="color:rgb(156,220,254)">self</span>.<span
                                style="color:rgb(156,220,254)">_text</span> <span
                                style="color:rgb(212,212,212)">+</span> <span style="color:rgb(206,145,120)">":"</span>
                        <span style="color:rgb(212,212,212)">+</span> <span
                                style="color:rgb(156,220,254)">other</span>._text)</div>
                <div>&nbsp; &nbsp; </div>
                <div><span style="color:rgb(156,220,254)">a</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">AddableWord</span>(<span
                                style="color:rgb(206,145,120)">'best'</span>)</div>
                <div><span style="color:rgb(156,220,254)">b</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">AddableWord</span>(<span
                                style="color:rgb(206,145,120)">'holiday'</span>)</div>
                <div><span style="color:rgb(156,220,254)">c</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(156,220,254)">a</span> <span style="color:rgb(220,220,170)">+</span>
                        <span style="color:rgb(156,220,254)">b</span></div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">c</span>)
                </div>
        </div>
</div>
        `

        const html9 = `
        <div dir="ltr">
        <div style="color:rgb(204,204,204);font-family:monospace;font-size:14px;line-height:18px;">
                <div class="adM"><br></div>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ---------- modules "</span>)</div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ---------- main functions "</span>)</div>
                <div><span style="color:rgb(86,156,214)">def</span> <span style="color:rgb(220,220,170)">main</span>():
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># common convention: create a method main() to be run only
                                if</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"Hello World"</span>) &nbsp; &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># you are running this file directly</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># main() will not be called if this code is
                                imported as a module</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># in some other python code</span></div><br>
                <div><span style="color:rgb(197,134,192)">if</span> <span style="color:rgb(156,220,254)">__name__</span>
                        <span style="color:rgb(212,212,212)">==</span> <span
                                style="color:rgb(206,145,120)">'__main__'</span>: &nbsp; &nbsp;
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">main</span>()</div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ---------- loading parts of modules "</span>)</div>
                <div><span style="color:rgb(106,153,85)"># from mymodule import value1, value2 &nbsp; &nbsp; &nbsp; #
                                you can import just the fields or functions you want</span></div>
                <div><span style="color:rgb(106,153,85)"># print(value1)</span></div>
                <div><span style="color:rgb(106,153,85)"># print(value2)</span></div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ---------- packages "</span>)</div>
                <div><span style="color:rgb(106,153,85)"># import stuff.greetings as gr</span></div>
                <div><span style="color:rgb(106,153,85)"># from stuff import greetings as gr &nbsp; &nbsp; &nbsp; &nbsp;
                                # alternative</span></div>
                <div><span style="color:rgb(106,153,85)"># from stuff.greetings import greet &nbsp; &nbsp; &nbsp; &nbsp;
                                # import just one function</span></div><br>
                <div><span style="color:rgb(106,153,85)">#gr.greet()</span></div>
                <div><span style="color:rgb(106,153,85)"># greet()</span></div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ---------- package initialization "</span>)</div>
                <div><span style="color:rgb(106,153,85)"># it is recommended: if you create a module, put a __init__.py
                                file in it</span></div>
                <div><span style="color:rgb(106,153,85)"># not mandatory, but recommended</span></div>
                <div><span style="color:rgb(106,153,85)"># any code in this file will be run during package
                                initialization</span></div><br>
                <div><span style="color:rgb(106,153,85)"># __all__ is a special python variable; can set it to a list of
                                things that should be</span></div>
                <div><span style="color:rgb(106,153,85)"># part of the namespace when the package is loaded as *</span>
                </div><br>
                <div><span style="color:rgb(106,153,85)"># if have a folder called 'stuff' and the __init__.py
                                contains:</span></div>
                <div><span style="color:rgb(106,153,85)"># __all__ = ['greetings']</span></div>
                <div><span style="color:rgb(106,153,85)"># which refers to the python module/file 'greetings.py'</span>
                </div><br>
                <div><span style="color:rgb(106,153,85)"># so can now use:</span></div>
                <div><span style="color:rgb(106,153,85)"># from stuff import * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; #
                                import __all__ = ['greetings']</span></div>
                <div><span style="color:rgb(106,153,85)"># greetings.greet() &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; #
                                call a method 'greet()' defined in file greetings.py</span></div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ---------- how python locates modules "</span>)</div>
                <div><span style="color:rgb(197,134,192)">import</span> <span style="color:rgb(78,201,176)">sys</span>
                </div>
                <div><span style="color:rgb(106,153,85)"># import stuff.greetings as gr</span></div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"</span><span
                                style="color:rgb(215,186,125)">\n</span><span
                                style="color:rgb(206,145,120)">"</span>.<span
                                style="color:rgb(220,220,170)">join</span>(<span
                                style="color:rgb(78,201,176)">sys</span>.<span
                                style="color:rgb(156,220,254)">path</span>)) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp;<span style="color:rgb(106,153,85)"># use sys.path to show the list of directories
                                python</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># will use to
                                search for modules</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># tip: use .join
                                to add a newline to the start of each item</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># in the iterable
                                list sys.path</span></div><br>
                <div><span style="color:rgb(106,153,85)"># print("Greetings: ", gr.__file__) &nbsp; &nbsp; &nbsp; #
                                python variable, will print the location of this module</span></div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ---------- inspecting modules "</span>)</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(220,220,170)">dir</span>()) <span style="color:rgb(106,153,85)"># will
                                print all the fields/methods visible in this scope</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(220,220,170)">dir</span>(<span
                                style="color:rgb(78,201,176)">sys</span>)) <span style="color:rgb(106,153,85)"># will
                                print all the fields/methods visible in this module/package</span></div>
                <div><span style="color:rgb(106,153,85)"># if want to look at only local variables:</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(220,220,170)">locals</span>())</div>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"</span><span
                                style="color:rgb(215,186,125)">\n</span><span
                                style="color:rgb(206,145,120)">"</span>.<span
                                style="color:rgb(220,220,170)">join</span>(<span
                                style="color:rgb(220,220,170)">locals</span>()))</div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ---------- subpackages "</span>)</div>
                <div><span style="color:rgb(106,153,85)"># from level1.level2.mymodule import PI</span></div>
                <div><span style="color:rgb(106,153,85)"># print(PI)</span></div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ---------- package attributes "</span>)</div>
                <div><span style="color:rgb(106,153,85)"># chaining import attributes</span></div><br>
                <div><span style="color:rgb(106,153,85)"># import level1 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; # inside level1, put an __init__ file that
                        </span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># contains: from .
                                import level2</span></div><br>
                <div><span style="color:rgb(106,153,85)"># print(dir(level1.level2)) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; # inside level2, put an __init__ file that </span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># contains: from .
                                import mymodule</span></div><br>
                <div><span style="color:rgb(106,153,85)">#
                                print(level1.level2.mymodule.<wbr>PI) &nbsp; &nbsp; &nbsp;# now you can access this var with only using the import statement:</span>
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># import
                                level1</span></div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ---------- installing packages "</span>)</div>
                <div><span style="color:rgb(106,153,85)"># can use pip to install python packages</span></div>
                <div><span style="color:rgb(106,153,85)"># eg. pip install numpy</span></div><br>
                <div><span style="color:rgb(106,153,85)"># can use poetry</span></div><br>
        </div>
</div>
        `
        const html10 = `
        <div dir="ltr">
        <div style="color:rgb(204,204,204);font-family:monospace;font-size:14px;line-height:18px;">
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ iterators "</span>)</div>
                <div><span style="color:rgb(106,153,85)"># to make a class iterable, need to define 2 methods: __iter__
                                and __next__</span></div>
                <div><span style="color:rgb(86,156,214)">class</span> <span
                                style="color:rgb(78,201,176)">PowersOfTwo</span>:</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">__iter__</span>(<span
                                style="color:rgb(156,220,254)">self</span>): &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <span style="color:rgb(106,153,85)"># method is only called once before iteration starts</span>
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(156,220,254)">self</span>.<span
                                style="color:rgb(156,220,254)">_value</span> <span
                                style="color:rgb(212,212,212)">=</span> <span style="color:rgb(181,206,168)">1</span>
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(156,220,254)">self</span></div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">__next__</span>(<span
                                style="color:rgb(156,220,254)">self</span>): &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <span style="color:rgb(106,153,85)"># called each loop to determine the next value</span>
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(156,220,254)">self</span>.<span
                                style="color:rgb(156,220,254)">_value</span> <span
                                style="color:rgb(212,212,212)">*=</span> <span style="color:rgb(181,206,168)">2</span>
                </div><br>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">if</span> <span
                                style="color:rgb(156,220,254)">self</span>.<span
                                style="color:rgb(156,220,254)">_value</span> <span
                                style="color:rgb(212,212,212)">&gt;</span> <span
                                style="color:rgb(181,206,168)">10</span>:</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">raise</span> <span
                                style="color:rgb(78,201,176)">StopIteration</span> &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># prevent an infinite loop</span></div><br>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(156,220,254)">self</span>.<span
                                style="color:rgb(156,220,254)">_value</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># return next value in the sequence</span></div><br>
                <div><span style="color:rgb(197,134,192)">for</span> <span style="color:rgb(156,220,254)">i</span> <span
                                style="color:rgb(220,220,170)">in</span> <span
                                style="color:rgb(78,201,176)">PowersOfTwo</span>():</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">i</span>)</div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ passing functions to functions "</span>)</div>
                <div><span style="color:rgb(86,156,214)">def</span> <span style="color:rgb(220,220,170)">greet</span>():
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"Hello"</span>)</div><br>
                <div><span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">run</span>(<span
                                style="color:rgb(156,220,254)">func</span>):</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">func</span>()</div><br>
                <div><span style="color:rgb(106,153,85)"># example of passing a function to a function</span></div>
                <div><span style="color:rgb(220,220,170)">run</span>(<span style="color:rgb(220,220,170)">greet</span>)
                </div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ mapping "</span>)</div>
                <div><span style="color:rgb(156,220,254)">animals1</span> <span style="color:rgb(212,212,212)">=</span>
                        [<span style="color:rgb(206,145,120)">"Dog"</span>, <span
                                style="color:rgb(206,145,120)">"cat"</span>, <span
                                style="color:rgb(206,145,120)">"ELEPHANT"</span>, <span
                                style="color:rgb(206,145,120)">"Badger"</span>]</div>
                <div><span style="color:rgb(156,220,254)">animals2</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">map</span>(<span
                                style="color:rgb(78,201,176)">str</span>.<span
                                style="color:rgb(220,220,170)">lower</span>, <span
                                style="color:rgb(156,220,254)">animals1</span>) &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># first arg takes a method that takes a single item and
                                returns an item</span>
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># second arg is
                                the list to work on</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">animals2</span>)</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(78,201,176)">type</span>(<span
                                style="color:rgb(156,220,254)">animals2</span>))</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(78,201,176)">list</span>(<span
                                style="color:rgb(156,220,254)">animals2</span>))</div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ lambda expressions "</span>)</div>
                <div><span style="color:rgb(156,220,254)">animals1</span> <span style="color:rgb(212,212,212)">=</span>
                        [<span style="color:rgb(206,145,120)">"Dog"</span>, <span
                                style="color:rgb(206,145,120)">"cat"</span>, <span
                                style="color:rgb(206,145,120)">"ELEPHANT"</span>, <span
                                style="color:rgb(206,145,120)">"Badger"</span>]</div><br>
                <div><span style="color:rgb(106,153,85)"># example lambda expression</span></div>
                <div><span style="color:rgb(106,153,85)"># here we iterate over the collection and keep the first 3
                                letters (lower case) for each item</span></div>
                <div><span style="color:rgb(156,220,254)">animals2</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">map</span>(<span style="color:rgb(86,156,214)">lambda</span>
                        <span style="color:rgb(156,220,254)">s</span>: <span
                                style="color:rgb(156,220,254)">s</span>[:<span
                                style="color:rgb(181,206,168)">3</span>].<span
                                style="color:rgb(220,220,170)">lower</span>(), <span
                                style="color:rgb(156,220,254)">animals1</span>)
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(78,201,176)">list</span>(<span
                                style="color:rgb(156,220,254)">animals2</span>))</div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ lambdas in loops "</span>)</div>
                <div><span style="color:rgb(156,220,254)">funcs</span> <span style="color:rgb(212,212,212)">=</span> []
                </div>
                <div><span style="color:rgb(106,153,85)"># need to watch out when using lambda functions in
                                loops.</span></div>
                <div><span style="color:rgb(106,153,85)"># this example fixes the issue</span></div>
                <div><span style="color:rgb(197,134,192)">for</span> <span style="color:rgb(156,220,254)">i</span> <span
                                style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(78,201,176)">range</span>(<span
                                style="color:rgb(181,206,168)">5</span>):</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">funcs</span>.<span
                                style="color:rgb(220,220,170)">append</span>(<span
                                style="color:rgb(86,156,214)">lambda</span> <span
                                style="color:rgb(156,220,254)">i</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(156,220,254)">i</span>:
                        <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">i</span>))
                </div><br>
                <div><span style="color:rgb(197,134,192)">for</span> <span style="color:rgb(156,220,254)">f</span> <span
                                style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(156,220,254)">funcs</span>:</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">f</span>()</div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ sorting "</span>)</div>
                <div><span style="color:rgb(156,220,254)">animals1</span> <span style="color:rgb(212,212,212)">=</span>
                        (<span style="color:rgb(206,145,120)">"dog"</span>, <span
                                style="color:rgb(206,145,120)">"giraffe"</span>, <span
                                style="color:rgb(206,145,120)">"elephant"</span>, <span
                                style="color:rgb(206,145,120)">"tiger"</span>, <span
                                style="color:rgb(206,145,120)">"lion"</span>)</div>
                <div><span style="color:rgb(106,153,85)"># can provide a lambda function to customize how the sort is
                                done</span></div>
                <div><span style="color:rgb(156,220,254)">animals2</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(220,220,170)">sorted</span>(<span
                                style="color:rgb(156,220,254)">animals1</span>, <span
                                style="color:rgb(156,220,254)">reverse</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(86,156,214)">True</span>,
                        <span style="color:rgb(156,220,254)">key</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(86,156,214)">lambda</span>
                        <span style="color:rgb(156,220,254)">s</span>: <span
                                style="color:rgb(220,220,170)">len</span>(<span
                                style="color:rgb(156,220,254)">s</span>))
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">animals2</span>)</div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ filtering "</span>)</div>
                <div><span style="color:rgb(156,220,254)">fruits</span> <span style="color:rgb(212,212,212)">=</span>
                        [<span style="color:rgb(206,145,120)">"apple"</span>, <span
                                style="color:rgb(206,145,120)">"orange"</span>, <span
                                style="color:rgb(206,145,120)">"banana"</span>, <span
                                style="color:rgb(206,145,120)">"grape"</span>, <span
                                style="color:rgb(206,145,120)">"pear"</span>]</div>
                <div><span style="color:rgb(106,153,85)"># built-in function 'filter' takes a function as 1st arg, list
                                as second arg</span></div>
                <div><span style="color:rgb(106,153,85)"># here we provide a lambda function, if the string has an 'e'
                                then it is allowed</span></div>
                <div><span style="color:rgb(156,220,254)">fruits</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">filter</span>(<span
                                style="color:rgb(86,156,214)">lambda</span> <span
                                style="color:rgb(156,220,254)">s</span>: <span style="color:rgb(206,145,120)">"e"</span>
                        <span style="color:rgb(197,134,192)">in</span> <span style="color:rgb(156,220,254)">s</span>,
                        <span style="color:rgb(156,220,254)">fruits</span>)
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(78,201,176)">list</span>(<span
                                style="color:rgb(156,220,254)">fruits</span>))</div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ generators "</span>)</div>
                <div><span style="color:rgb(106,153,85)"># letters is a list comprehension</span></div>
                <div><span style="color:rgb(106,153,85)"># chr returns a char representation of a number</span></div>
                <div><span style="color:rgb(106,153,85)"># if use [] we get a list of chars A-Z</span></div>
                <div><span style="color:rgb(156,220,254)">letters</span> <span style="color:rgb(212,212,212)">=</span>
                        [<span style="color:rgb(220,220,170)">chr</span>(<span style="color:rgb(156,220,254)">x</span>)
                        <span style="color:rgb(197,134,192)">for</span> <span style="color:rgb(156,220,254)">x</span>
                        <span style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(78,201,176)">range</span>(<span
                                style="color:rgb(181,206,168)">65</span>, <span
                                style="color:rgb(181,206,168)">91</span>)]
                </div><br>
                <div><span style="color:rgb(106,153,85)"># if we use () the return value is actually a generator
                                object</span></div>
                <div><span style="color:rgb(106,153,85)"># makes it easier to process the values one at a time</span>
                </div>
                <div><span style="color:rgb(106,153,85)"># advantage is that the list is not created up front. They are
                                generated as you need them.</span></div>
                <div><span style="color:rgb(156,220,254)">letters</span> <span style="color:rgb(212,212,212)">=</span>
                        (<span style="color:rgb(220,220,170)">chr</span>(<span style="color:rgb(156,220,254)">x</span>)
                        <span style="color:rgb(197,134,192)">for</span> <span style="color:rgb(156,220,254)">x</span>
                        <span style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(78,201,176)">range</span>(<span
                                style="color:rgb(181,206,168)">65</span>, <span
                                style="color:rgb(181,206,168)">91</span>))
                </div><br>
                <div><span style="color:rgb(197,134,192)">for</span> <span style="color:rgb(156,220,254)">s</span> <span
                                style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(156,220,254)">letters</span>:</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">s</span>, <span
                                style="color:rgb(156,220,254)">end</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(206,145,120)">" "</span>)
                        &nbsp; <span style="color:rgb(106,153,85)"># instead of the default newline char at the end of
                                the print(), use a space instead (to get the string all in one line)</span></div>
                <br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ function generators "</span>)</div>
                <div><span style="color:rgb(106,153,85)"># to iterate over a collection (without overriding the __iter__
                                and __next__ methods)</span></div>
                <div><span style="color:rgb(106,153,85)"># can use a function generator instead.</span></div>
                <div><span style="color:rgb(106,153,85)"># 'yield' is similar to 'return' except it returns one item at
                                a time, to make it easy to iterate over the list</span></div>
                <div><span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(78,201,176)">PowersOfTwo</span>():</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">for</span> <span
                                style="color:rgb(156,220,254)">i</span> <span style="color:rgb(197,134,192)">in</span>
                        <span style="color:rgb(78,201,176)">range</span>(<span style="color:rgb(181,206,168)">8</span>):
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">yield</span> <span
                                style="color:rgb(181,206,168)">2</span><span
                                style="color:rgb(212,212,212)">**</span><span style="color:rgb(156,220,254)">i</span>
                </div><br>
                <div><span style="color:rgb(197,134,192)">for</span> <span style="color:rgb(156,220,254)">x</span> <span
                                style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(78,201,176)">PowersOfTwo</span>():</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">x</span>)</div><br>
                <div><span style="color:rgb(106,153,85)"># type is: 'generator'</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(78,201,176)">type</span>(<span
                                style="color:rgb(78,201,176)">PowersOfTwo</span>()))</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(78,201,176)">list</span>((<span
                                style="color:rgb(86,156,214)">lambda</span> <span
                                style="color:rgb(156,220,254)">y</span>: <span
                                style="color:rgb(78,201,176)">range</span>(<span
                                style="color:rgb(156,220,254)">y</span>))(<span
                                style="color:rgb(181,206,168)">4</span>)))</div><br><br>

                                <div><span style="color:rgb(106,153,85)"># ------------------------------ Functional programming</span>
                </div><br>
                <div><span style="color:rgb(106,153,85)"># Write a generator (NOT a generator function; just a
                                generator) that, when </span></div>
                <div><span style="color:rgb(106,153,85)"># iterated over, supplies the squares of all the positive
                                integers less than 20 </span></div>
                <div><span style="color:rgb(106,153,85)"># that are divisible by 3.</span></div><br>
                <div><span style="color:rgb(106,153,85)"># Assign a variable called 'numbers' to this generator.</span>
                </div><br>
                <div><span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">divisibleBy3</span>(<span
                                style="color:rgb(156,220,254)">x</span>):</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">if</span> <span
                                style="color:rgb(156,220,254)">x</span> <span style="color:rgb(212,212,212)">%</span>
                        <span style="color:rgb(181,206,168)">3</span> <span style="color:rgb(212,212,212)">==</span>
                        <span style="color:rgb(181,206,168)">0</span>:</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(86,156,214)">True</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">else</span>:</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(86,156,214)">False</span></div><br>
                <div><span style="color:rgb(156,220,254)">numbers</span> <span style="color:rgb(212,212,212)">=</span>
                        (<span style="color:rgb(156,220,254)">i</span><span
                                style="color:rgb(212,212,212)">**</span><span style="color:rgb(181,206,168)">2</span>
                        <span style="color:rgb(197,134,192)">for</span> <span style="color:rgb(156,220,254)">i</span>
                        <span style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(78,201,176)">range</span>(<span
                                style="color:rgb(181,206,168)">20</span>) <span style="color:rgb(197,134,192)">if</span>
                        <span style="color:rgb(220,220,170)">divisibleBy3</span>(<span
                                style="color:rgb(156,220,254)">i</span>))</div><br>
                <div><span style="color:rgb(106,153,85)"># print(type(numbers))</span></div>
                <div><span style="color:rgb(106,153,85)"># print(numbers)</span></div><br>
                <div><span style="color:rgb(197,134,192)">for</span> <span style="color:rgb(156,220,254)">n</span> <span
                                style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(156,220,254)">numbers</span>:</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">n</span>, <span
                                style="color:rgb(156,220,254)">end</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(206,145,120)">" "</span>)
                </div>
        </div>
</div>
        `

        const html11 = `
        <div dir="ltr">
        <div style="color:rgb(204,204,204);font-family:monospace;font-size:14px;line-height:18px;">
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ reading text files "</span>)</div>
                <div><span style="color:rgb(156,220,254)">file</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(220,220,170)">open</span>(<span
                                style="color:rgb(206,145,120)">"test.txt"</span>)
                </div>
                <div><span style="color:rgb(106,153,85)">#lines = file.readlines()</span></div>
                <div><span style="color:rgb(156,220,254)">lines</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(156,220,254)">file</span>.<span
                                style="color:rgb(220,220,170)">read</span>().<span
                                style="color:rgb(220,220,170)">splitlines</span>()
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">lines</span>)</div>
                <div><span style="color:rgb(156,220,254)">file</span>.<span
                                style="color:rgb(220,220,170)">close</span>()</div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ using with "</span>)</div>
                <div><span style="color:rgb(106,153,85)"># use 'with' to ensure the file is closed after</span></div>
                <div><span style="color:rgb(197,134,192)">with</span> <span
                                style="color:rgb(220,220,170)">open</span>(<span
                                style="color:rgb(206,145,120)">"test.txt"</span>) <span
                                style="color:rgb(197,134,192)">as</span> <span
                                style="color:rgb(156,220,254)">file</span>:</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">lines</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(156,220,254)">file</span>.<span
                                style="color:rgb(220,220,170)">readlines</span>()</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">lines</span>)</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(106,153,85)"># __enter__</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(106,153,85)"># __exit__</span></div><br>
                <div><span style="color:rgb(106,153,85)"># you can use 'with' on your custom object/class by
                                implementing the __enter__ and __exit__</span></div>
                <div><span style="color:rgb(106,153,85)"># methods (which are called upon entry and exit)</span></div>
                <br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ writing files "</span>)</div>
                <div><span style="color:rgb(197,134,192)">with</span> <span
                                style="color:rgb(220,220,170)">open</span>(<span
                                style="color:rgb(206,145,120)">"temp.txt"</span>, <span
                                style="color:rgb(206,145,120)">"wt"</span>) <span
                                style="color:rgb(197,134,192)">as</span> <span
                                style="color:rgb(156,220,254)">file</span>: &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># second arg 'wt' stands for 'write' and 'text'
                                mode</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">file</span>.<span
                                style="color:rgb(220,220,170)">write</span>(<span
                                style="color:rgb(206,145,120)">"one</span><span
                                style="color:rgb(215,186,125)">\n</span><span
                                style="color:rgb(206,145,120)">two"</span>)</div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ representing binary data "</span>)</div>
                <div><span style="color:rgb(156,220,254)">data1</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(86,156,214)">b</span><span style="color:rgb(206,145,120)">'Hello'</span>
                        &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># b is for bytes</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">data1</span>)</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(78,201,176)">type</span>(<span
                                style="color:rgb(156,220,254)">data1</span>))</div>
                <div><span style="color:rgb(156,220,254)">data2</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">bytearray</span>([<span
                                style="color:rgb(86,156,214)">0x</span><span style="color:rgb(181,206,168)">FF</span>,
                        <span style="color:rgb(181,206,168)">1</span>, <span style="color:rgb(181,206,168)">2</span>,
                        <span style="color:rgb(181,206,168)">3</span>, <span style="color:rgb(181,206,168)">4</span>])
                        <span style="color:rgb(106,153,85)"># 0x means hexadecimal so 0xFF = 255</span>
                </div>
                <div><span style="color:rgb(106,153,85)"># note: bytes are immutable but bytearray can be
                                modified</span></div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ writing binary files "</span>)</div>
                <div><span style="color:rgb(156,220,254)">data1</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(86,156,214)">b</span><span style="color:rgb(206,145,120)">'Hello'</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">data1</span>)</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(78,201,176)">type</span>(<span
                                style="color:rgb(156,220,254)">data1</span>))</div>
                <div><span style="color:rgb(156,220,254)">data2</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">bytearray</span>([<span
                                style="color:rgb(86,156,214)">0x</span><span style="color:rgb(181,206,168)">FF</span>,
                        <span style="color:rgb(181,206,168)">1</span>, <span style="color:rgb(181,206,168)">2</span>,
                        <span style="color:rgb(181,206,168)">3</span>, <span style="color:rgb(181,206,168)">4</span>])
                </div><br>
                <div><span style="color:rgb(197,134,192)">with</span> <span
                                style="color:rgb(220,220,170)">open</span>(<span
                                style="color:rgb(206,145,120)">'test1.bin'</span>, <span
                                style="color:rgb(206,145,120)">'wb'</span>) <span
                                style="color:rgb(197,134,192)">as</span> <span
                                style="color:rgb(156,220,254)">file</span>: &nbsp;<span style="color:rgb(106,153,85)">#
                                'wb' stands for 'write' and 'binary' mode</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">file</span>.<span
                                style="color:rgb(220,220,170)">write</span>(<span
                                style="color:rgb(156,220,254)">data1</span>)</div><br>
                <div><span style="color:rgb(197,134,192)">with</span> <span
                                style="color:rgb(220,220,170)">open</span>(<span
                                style="color:rgb(206,145,120)">'test2.bin'</span>, <span
                                style="color:rgb(206,145,120)">'wb'</span>) <span
                                style="color:rgb(197,134,192)">as</span> <span
                                style="color:rgb(156,220,254)">file</span>:</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">file</span>.<span
                                style="color:rgb(220,220,170)">write</span>(<span
                                style="color:rgb(156,220,254)">data2</span>)</div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ reading binary files "</span>)</div><br>
                <div><span style="color:rgb(197,134,192)">with</span> <span
                                style="color:rgb(220,220,170)">open</span>(<span
                                style="color:rgb(206,145,120)">'test2.bin'</span>, <span
                                style="color:rgb(206,145,120)">'rb'</span>) <span
                                style="color:rgb(197,134,192)">as</span> <span
                                style="color:rgb(156,220,254)">file</span>:</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">data</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(156,220,254)">file</span>.<span
                                style="color:rgb(220,220,170)">read</span>(<span
                                style="color:rgb(181,206,168)">5</span>)</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">data</span>)</div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">data</span>[<span
                                style="color:rgb(181,206,168)">0</span>])</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">data</span>[<span
                                style="color:rgb(181,206,168)">1</span>])</div>
                <div class="yj6qo"></div>
                <div class="adL"><br><br></div>
        </div>
</div>
        `

        const html12 = `
        <div dir="ltr">
        <div style="color:rgb(204,204,204);font-family:monospace;font-size:14px;line-height:18px;">
                <div class="adM"><br></div>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ numpy arrays "</span>)</div><br>
                <div><span style="color:rgb(197,134,192)">import</span> <span style="color:rgb(78,201,176)">numpy</span>
                        <span style="color:rgb(197,134,192)">as</span> <span style="color:rgb(78,201,176)">np</span>
                </div>
                <div><span style="color:rgb(197,134,192)">import</span> <span
                                style="color:rgb(78,201,176)">pandas</span> <span
                                style="color:rgb(197,134,192)">as</span> <span style="color:rgb(78,201,176)">pd</span>
                </div><br>
                <div><span style="color:rgb(156,220,254)">df</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">pd</span>.<span
                                style="color:rgb(220,220,170)">read_csv</span>(<span
                                style="color:rgb(206,145,120)">'exercises.csv'</span>, <span
                                style="color:rgb(156,220,254)">sep</span><span
                                style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(206,145,120)">'\s*,\s*'</span>, <span
                                style="color:rgb(156,220,254)">index_col</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">0</span>)
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">df</span>.<span
                                style="color:rgb(156,220,254)">columns</span>)</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">df</span>.<span
                                style="color:rgb(220,220,170)">head</span>())</div><br>
                <div><span style="color:rgb(156,220,254)">values1</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(220,220,170)">array</span>([<span
                                style="color:rgb(181,206,168)">1</span>, <span style="color:rgb(181,206,168)">2</span>,
                        <span style="color:rgb(181,206,168)">3</span>], <span
                                style="color:rgb(156,220,254)">dtype</span><span
                                style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(156,220,254)">int32</span>)
                </div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">values1</span>[<span
                                style="color:rgb(181,206,168)">2</span>])</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">values1</span>.<span
                                style="color:rgb(156,220,254)">shape</span>) &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># output: (3,) - 3 rows, no columns</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">values1</span>.<span
                                style="color:rgb(156,220,254)">ndim</span>) &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># number of dimensions (1 dimension in our case)</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">values1</span>.<span
                                style="color:rgb(156,220,254)">dtype</span>) &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># data type</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(220,220,170)">len</span>(<span
                                style="color:rgb(156,220,254)">values1</span>))</div><br>
                <div><span style="color:rgb(106,153,85)"># behind the scenes numpy will pack/store these numbers very
                                efficiently especially</span></div>
                <div><span style="color:rgb(106,153,85)"># if there are a large number of values</span></div><br>
                <div><span style="color:rgb(106,153,85)"># example of a multi-dimensional array</span></div>
                <div><span style="color:rgb(156,220,254)">values2</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(220,220,170)">array</span>([[<span
                                style="color:rgb(181,206,168)">1.0</span>, <span
                                style="color:rgb(181,206,168)">2.1</span>], [<span
                                style="color:rgb(181,206,168)">2.0</span>, <span
                                style="color:rgb(181,206,168)">3.1</span>], [<span
                                style="color:rgb(181,206,168)">4.0</span>, <span
                                style="color:rgb(181,206,168)">2.5</span>]], <span
                                style="color:rgb(156,220,254)">dtype</span><span
                                style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">float64</span>)
                </div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">values2</span>[<span
                                style="color:rgb(181,206,168)">2</span>])</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">values2</span>.<span
                                style="color:rgb(156,220,254)">shape</span>) &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># output: (3, 2) &nbsp;- 3 rows, 2 columns</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">values2</span>.<span
                                style="color:rgb(156,220,254)">ndim</span>) &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># 2 dimensions</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">values2</span>.<span
                                style="color:rgb(156,220,254)">dtype</span>)</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(220,220,170)">len</span>(<span
                                style="color:rgb(156,220,254)">values2</span>))</div><br>
                <div><span style="color:rgb(206,145,120)">"""</span></div>
                <div><span style="color:rgb(206,145,120)">output:</span></div>
                <div><span style="color:rgb(206,145,120)">3</span></div>
                <div><span style="color:rgb(206,145,120)">(3,)</span></div>
                <div><span style="color:rgb(206,145,120)">1</span></div>
                <div><span style="color:rgb(206,145,120)">int32</span></div>
                <div><span style="color:rgb(206,145,120)">3</span></div>
                <div><span style="color:rgb(206,145,120)">[4. &nbsp;2.5]</span></div>
                <div><span style="color:rgb(206,145,120)">(3, 2)</span></div>
                <div><span style="color:rgb(206,145,120)">2</span></div>
                <div><span style="color:rgb(206,145,120)">float64</span></div>
                <div><span style="color:rgb(206,145,120)">3</span></div>
                <div><span style="color:rgb(206,145,120)">"""</span></div><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ creating numpy arrays "</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">values1</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(156,220,254)">zeros</span>((<span
                                style="color:rgb(181,206,168)">2</span>, <span style="color:rgb(181,206,168)">3</span>))
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">values1</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">values2</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(220,220,170)">arange</span>(<span
                                style="color:rgb(181,206,168)">5</span>, <span style="color:rgb(181,206,168)">10</span>,
                        <span style="color:rgb(181,206,168)">0.5</span>) &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># a range; 5 up to (but not including) 10; step size
                                0.5</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">values2</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">values3</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(220,220,170)">linspace</span>(<span
                                style="color:rgb(181,206,168)">3</span>, <span style="color:rgb(181,206,168)">6</span>,
                        <span style="color:rgb(181,206,168)">4</span>) &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># start range; end range (includes end of range); number
                                of values to create that are evenly spaced</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">values3</span>)</div><br>
                <div><span style="color:rgb(206,145,120)">"""</span></div>
                <div><span style="color:rgb(206,145,120)">output:</span></div>
                <div><span style="color:rgb(206,145,120)">[[0. 0. 0.]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[0. 0. 0.]]</span></div>
                <div><span style="color:rgb(206,145,120)">[5. &nbsp;5.5 6. &nbsp;6.5 7. &nbsp;7.5 8. &nbsp;8.5 9.
                                &nbsp;9.5]</span></div>
                <div><span style="color:rgb(206,145,120)">[3. 4. 5. 6.]</span></div>
                <div><span style="color:rgb(206,145,120)">"""</span></div><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ random numpy arrays "</span>)</div>
                <div><span style="color:rgb(156,220,254)">values1</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">random</span>.<span
                                style="color:rgb(156,220,254)">rand</span>(<span
                                style="color:rgb(181,206,168)">2</span>, <span style="color:rgb(181,206,168)">3</span>)
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># 2 rows, 3 columns,
                                random numbers</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">values1</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">rng</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">random</span>.<span
                                style="color:rgb(220,220,170)">default_rng</span>() &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <span style="color:rgb(106,153,85)"># default random generator</span>
                </div><br>
                <div><span style="color:rgb(156,220,254)">values2</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(156,220,254)">rng</span>.<span
                                style="color:rgb(220,220,170)">standard_normal</span>((<span
                                style="color:rgb(181,206,168)">4</span>, <span style="color:rgb(181,206,168)">3</span>))
                        &nbsp; <span style="color:rgb(106,153,85)"># normally distributed values: </span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">values2</span>) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># &nbsp; the
                                average over all values will be 0</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># &nbsp; the
                                variance will be 1</span></div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">values2</span>.<span
                                style="color:rgb(220,220,170)">reshape</span>(<span
                                style="color:rgb(181,206,168)">2</span>, <span style="color:rgb(181,206,168)">6</span>))
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># change the
                                structure to 2 rows, 6 cols</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># (values do not
                                change, just the structure of the rows/cols)</span></div><br>
                <div><span style="color:rgb(206,145,120)">"""</span></div>
                <div><span style="color:rgb(206,145,120)">[[0.15634549 0.14511228 0.25770791]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[0.50625265 0.22797054 0.65992225]]</span></div>
                <div><span style="color:rgb(206,145,120)">[[-0.6636178 &nbsp;-0.13549338 -0.00604821]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[ 0.67119468 -1.75489791 -0.44523161]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[-2.13258157 &nbsp;1.25948878 &nbsp;0.27569191]</span>
                </div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[ 1.56143934 -0.80494539 -0.61166042]]</span></div>
                <div><span style="color:rgb(206,145,120)">[[-0.6636178 &nbsp;-0.13549338 -0.00604821 &nbsp;0.67119468
                                -1.75489791 -0.44523161]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[-2.13258157 &nbsp;1.25948878 &nbsp;0.27569191
                                &nbsp;1.56143934 -0.80494539 -0.61166042]]</span></div>
                <div><span style="color:rgb(206,145,120)">"""</span></div><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ numpy arithmetic "</span>)</div><br><br>
                <div><span style="color:rgb(156,220,254)">values</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(220,220,170)">arange</span>(<span
                                style="color:rgb(181,206,168)">0</span>, <span style="color:rgb(181,206,168)">10</span>,
                        <span style="color:rgb(181,206,168)">1</span>) &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># create a numpy array using a range (list) of
                                values</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">values</span>)</div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">values</span> <span
                                style="color:rgb(220,220,170)">+</span> <span style="color:rgb(181,206,168)">2</span>)
                        &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># add 2 to every value in the
                                array</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">values</span> <span
                                style="color:rgb(220,220,170)">*</span> <span style="color:rgb(181,206,168)">3</span>)
                        &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># multiply by 3 (for every value in the
                                array)</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">values</span> <span
                                style="color:rgb(220,220,170)">**</span> <span style="color:rgb(181,206,168)">2</span>)
                        &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># square each value</span></div><br>
                <div><span style="color:rgb(106,153,85)"># note: the original array was not changed. But we will change
                                it now. </span></div>
                <div><span style="color:rgb(156,220,254)">values</span> <span style="color:rgb(220,220,170)">-=</span>
                        <span style="color:rgb(181,206,168)">20</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># subtract 20</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">values</span>)</div><br>
                <div><span style="color:rgb(206,145,120)">"""</span></div>
                <div><span style="color:rgb(206,145,120)">[0 1 2 3 4 5 6 7 8 9]</span></div>
                <div><span style="color:rgb(206,145,120)">[ 2 &nbsp;3 &nbsp;4 &nbsp;5 &nbsp;6 &nbsp;7 &nbsp;8 &nbsp;9 10
                                11]</span></div>
                <div><span style="color:rgb(206,145,120)">[ 0 &nbsp;3 &nbsp;6 &nbsp;9 12 15 18 21 24 27]</span></div>
                <div><span style="color:rgb(206,145,120)">[ 0 &nbsp;1 &nbsp;4 &nbsp;9 16 25 36 49 64 81]</span></div>
                <div><span style="color:rgb(206,145,120)">[-20 -19 -18 -17 -16 -15 -14 -13 -12 -11]</span></div>
                <div><span style="color:rgb(206,145,120)">"""</span></div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ numpy functions "</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">values</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(220,220,170)">arange</span>(<span
                                style="color:rgb(181,206,168)">0</span>, <span style="color:rgb(181,206,168)">10</span>,
                        <span style="color:rgb(181,206,168)">1</span>)
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">values</span>)</div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(156,220,254)">sin</span>(<span
                                style="color:rgb(156,220,254)">values</span>))</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(156,220,254)">min</span>(<span
                                style="color:rgb(156,220,254)">values</span>))</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(156,220,254)">max</span>(<span
                                style="color:rgb(156,220,254)">values</span>))</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(220,220,170)">mean</span>(<span
                                style="color:rgb(156,220,254)">values</span>)) &nbsp;<span
                                style="color:rgb(106,153,85)"># mean</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(220,220,170)">std</span>(<span
                                style="color:rgb(156,220,254)">values</span>)) &nbsp; <span
                                style="color:rgb(106,153,85)"># std deviation</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(220,220,170)">var</span>(<span
                                style="color:rgb(156,220,254)">values</span>)) &nbsp; <span
                                style="color:rgb(106,153,85)"># variance (square of std dev)</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(220,220,170)">sum</span>(<span
                                style="color:rgb(156,220,254)">values</span>)) &nbsp; <span
                                style="color:rgb(106,153,85)"># sum</span></div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">values</span>.<span
                                style="color:rgb(220,220,170)">min</span>()) &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># alternate way</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">values</span>.<span
                                style="color:rgb(220,220,170)">mean</span>())</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">values</span>.<span
                                style="color:rgb(220,220,170)">sum</span>())</div><br>
                <div><span style="color:rgb(206,145,120)">"""</span></div>
                <div><span style="color:rgb(206,145,120)">[0 1 2 3 4 5 6 7 8 9]</span></div>
                <div><span style="color:rgb(206,145,120)">[ 0. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;0.84147098
                                &nbsp;0.90929743 &nbsp;0.14112001 -0.7568025 &nbsp;-0.95892427</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;-0.2794155 &nbsp; 0.6569866 &nbsp; 0.98935825
                                &nbsp;0.41211849]</span></div>
                <div><span style="color:rgb(206,145,120)">0</span></div>
                <div><span style="color:rgb(206,145,120)">9</span></div>
                <div><span style="color:rgb(206,145,120)">4.5</span></div>
                <div><span style="color:rgb(206,145,120)">2.8722813232690143</span></div>
                <div><span style="color:rgb(206,145,120)">8.25</span></div>
                <div><span style="color:rgb(206,145,120)">45</span></div>
                <div><span style="color:rgb(206,145,120)">0</span></div>
                <div><span style="color:rgb(206,145,120)">4.5</span></div>
                <div><span style="color:rgb(206,145,120)">45</span></div>
                <div><span style="color:rgb(206,145,120)">"""</span></div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ numpy slicing "</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">values</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(220,220,170)">arange</span>(<span
                                style="color:rgb(181,206,168)">0</span>, <span style="color:rgb(181,206,168)">16</span>,
                        <span style="color:rgb(181,206,168)">1</span>).<span
                                style="color:rgb(220,220,170)">reshape</span>(<span
                                style="color:rgb(181,206,168)">4</span>, <span style="color:rgb(181,206,168)">4</span>)
                        &nbsp;<span style="color:rgb(106,153,85)"># create a 4x4 array with values from 0 - 15</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">values</span>)</div>
                <div><span style="color:rgb(220,220,170)">print</span>()</div><br>
                <div><span style="color:rgb(106,153,85)"># values[:2] &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;# take a
                                slice; start from beginning, go up to the row at index 2 (but not including)</span>
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># eg. will get the first 2 rows</span></div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">values</span>[::<span
                                style="color:rgb(181,206,168)">2</span>]) &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># slice: start is default (0), end is default (last
                                index), step size 2</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># eg. will get the first row, skip second row, get the
                                third row</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">values</span>[::<span
                                style="color:rgb(181,206,168)">2</span>,<span
                                style="color:rgb(181,206,168)">1</span>:<span style="color:rgb(181,206,168)">3</span>])
                        &nbsp;<span style="color:rgb(106,153,85)"># can slice columns; get first 2 rows, then slice
                                columns 1:3 (ie. get 2nd and 3rd columns only)</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># if have multi-dimensions, can add a comma ',' to slice
                                each dimension</span></div><br>
                <div><span style="color:rgb(206,145,120)">"""</span></div>
                <div><span style="color:rgb(206,145,120)">[[ 0 &nbsp;1 &nbsp;2 &nbsp;3]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[ 4 &nbsp;5 &nbsp;6 &nbsp;7]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[ 8 &nbsp;9 10 11]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[12 13 14 15]]</span></div><br>
                <div><span style="color:rgb(206,145,120)">[[ 0 &nbsp;1 &nbsp;2 &nbsp;3]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[ 8 &nbsp;9 10 11]]</span></div><br>
                <div><span style="color:rgb(206,145,120)">[[ 1 &nbsp;2]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[ 9 10]]</span></div>
                <div><span style="color:rgb(206,145,120)">"""</span></div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ numpy views "</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">values</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(220,220,170)">arange</span>(<span
                                style="color:rgb(181,206,168)">16</span>).<span
                                style="color:rgb(220,220,170)">reshape</span>(<span
                                style="color:rgb(181,206,168)">4</span>,<span style="color:rgb(181,206,168)">4</span>)
                        <span style="color:rgb(220,220,170)">*</span> <span style="color:rgb(181,206,168)">10</span>
                        &nbsp; <span style="color:rgb(106,153,85)"># create a 4x4 array, and multiply by 10</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">values</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">view</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(156,220,254)">values</span>[:, <span
                                style="color:rgb(181,206,168)">1</span>:<span style="color:rgb(181,206,168)">3</span>]
                        &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># get all rows, but only columns 2,
                                3</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">view</span>)
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)">#
                                this is a view; original array still exists; if you modify the view you will modify the
                                original array</span></div><br>
                <div><span style="color:rgb(156,220,254)">view</span> <span style="color:rgb(220,220,170)">*=</span>
                        <span style="color:rgb(181,206,168)">0</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># modify view to have all zeros</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">view</span>)
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">values</span>) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; <span style="color:rgb(106,153,85)"># shows that the original array has been
                                modified</span></div><br>
                <div><span style="color:rgb(106,153,85)"># allows you to easily modify just specific columns/rows in an
                                array (which could be large)</span></div><br>
                <div><span style="color:rgb(206,145,120)">"""</span></div>
                <div><span style="color:rgb(206,145,120)">[[ &nbsp;0 &nbsp;10 &nbsp;20 &nbsp;30]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[ 40 &nbsp;50 &nbsp;60 &nbsp;70]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[ 80 &nbsp;90 100 110]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[120 130 140 150]]</span></div>
                <div><span style="color:rgb(206,145,120)">[[ 10 &nbsp;20]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[ 50 &nbsp;60]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[ 90 100]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[130 140]]</span></div>
                <div><span style="color:rgb(206,145,120)">[[0 0]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[0 0]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[0 0]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[0 0]]</span></div>
                <div><span style="color:rgb(206,145,120)">[[ &nbsp;0 &nbsp; 0 &nbsp; 0 &nbsp;30]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[ 40 &nbsp; 0 &nbsp; 0 &nbsp;70]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[ 80 &nbsp; 0 &nbsp; 0 110]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[120 &nbsp; 0 &nbsp; 0 150]]</span></div>
                <div><span style="color:rgb(206,145,120)">"""</span></div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ numpy: advanced indexing with lists "</span>)</div>
                <div><span style="color:rgb(156,220,254)">values</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(220,220,170)">arange</span>(<span
                                style="color:rgb(181,206,168)">16</span>).<span
                                style="color:rgb(220,220,170)">reshape</span>(<span
                                style="color:rgb(181,206,168)">4</span>, <span style="color:rgb(181,206,168)">4</span>)
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">values</span>)</div>
                <div><span style="color:rgb(220,220,170)">print</span>()</div><br>
                <div><span style="color:rgb(106,153,85)"># get row at index 0 and 2</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">values</span>[[<span
                                style="color:rgb(181,206,168)">0</span>,<span style="color:rgb(181,206,168)">2</span>]])
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>()</div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">values</span>[[<span
                                style="color:rgb(181,206,168)">0</span>, <span style="color:rgb(181,206,168)">2</span>,
                        <span style="color:rgb(181,206,168)">2</span>, <span
                                style="color:rgb(181,206,168)">3</span>],[<span style="color:rgb(181,206,168)">0</span>,
                        <span style="color:rgb(181,206,168)">0</span>, <span style="color:rgb(181,206,168)">2</span>,
                        <span style="color:rgb(181,206,168)">1</span>]]) &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># use lists to index numpy arrays</span>
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)">#
                                first list is the row index, second list is the column index</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)">#
                                each pair allows you to select a specific value by row/column</span></div><br>
                <div><span style="color:rgb(206,145,120)">"""</span></div>
                <div><span style="color:rgb(206,145,120)">[[ 0 &nbsp;1 &nbsp;2 &nbsp;3]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[ 4 &nbsp;5 &nbsp;6 &nbsp;7]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[ 8 &nbsp;9 10 11]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[12 13 14 15]]</span></div><br>
                <div><span style="color:rgb(206,145,120)">&nbsp;[[ 0 &nbsp;1 &nbsp;2 &nbsp;3]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[ 8 &nbsp;9 10 11]]</span></div><br>
                <div><span style="color:rgb(206,145,120)">[ 0 &nbsp;8 10 13]</span></div>
                <div><span style="color:rgb(206,145,120)">"""</span></div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ numpy: using comparison operators "</span>)</div>
                <div><span style="color:rgb(156,220,254)">values</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(220,220,170)">arange</span>(<span
                                style="color:rgb(181,206,168)">16</span>).<span
                                style="color:rgb(220,220,170)">reshape</span>(<span
                                style="color:rgb(181,206,168)">4</span>, <span style="color:rgb(181,206,168)">4</span>)
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">values</span>)</div>
                <div><span style="color:rgb(220,220,170)">print</span>()</div><br>
                <div><span style="color:rgb(106,153,85)"># use comparison operator 'less than'</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">values</span> <span
                                style="color:rgb(220,220,170)">&lt;</span> <span
                                style="color:rgb(181,206,168)">8</span>) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># we get back an array where you have boolean values based
                                on the comparison</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>()</div><br>
                <div><span style="color:rgb(106,153,85)"># use mod to get true/false for items in the array that are
                                divisible by 2 (ie. all even numbers)</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">values</span> <span
                                style="color:rgb(220,220,170)">%</span> <span style="color:rgb(181,206,168)">2</span>
                        <span style="color:rgb(220,220,170)">==</span> <span style="color:rgb(181,206,168)">0</span>)
                </div><br>
                <div><span style="color:rgb(206,145,120)">"""</span></div>
                <div><span style="color:rgb(206,145,120)">[[ 0 &nbsp;1 &nbsp;2 &nbsp;3]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[ 4 &nbsp;5 &nbsp;6 &nbsp;7]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[ 8 &nbsp;9 10 11]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[12 13 14 15]]</span></div><br>
                <div><span style="color:rgb(206,145,120)">&nbsp;[[ True &nbsp;True &nbsp;True &nbsp;True]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[ True &nbsp;True &nbsp;True &nbsp;True]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[False False False False]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[False False False False]]</span></div><br>
                <div><span style="color:rgb(206,145,120)">[[ True False &nbsp;True False]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[ True False &nbsp;True False]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[ True False &nbsp;True False]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[ True False &nbsp;True False]]</span></div>
                <div><span style="color:rgb(206,145,120)">"""</span></div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ numpy: boolean indexing "</span>)</div>
                <div><span style="color:rgb(156,220,254)">values</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(220,220,170)">arange</span>(<span
                                style="color:rgb(181,206,168)">16</span>).<span
                                style="color:rgb(220,220,170)">reshape</span>(<span
                                style="color:rgb(181,206,168)">4</span>, <span style="color:rgb(181,206,168)">4</span>)
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">values</span>)</div>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">values</span>[<span
                                style="color:rgb(156,220,254)">values</span> <span
                                style="color:rgb(220,220,170)">%</span> <span style="color:rgb(181,206,168)">5</span>
                        <span style="color:rgb(220,220,170)">==</span> <span style="color:rgb(181,206,168)">0</span>])
                        &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># get a list of values that are
                                divisible by 5</span>
                </div><br>
                <div><span style="color:rgb(156,220,254)">rng</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">random</span>.<span
                                style="color:rgb(220,220,170)">default_rng</span>()</div>
                <div><span style="color:rgb(156,220,254)">numbers</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(156,220,254)">rng</span>.<span
                                style="color:rgb(220,220,170)">standard_normal</span>(<span
                                style="color:rgb(181,206,168)">50</span>) &nbsp; <span style="color:rgb(106,153,85)">#
                                get a normal distribution of 50 values</span>
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># &nbsp;- normal distribution:
                                average over all values should be zero with a std deviation of 1</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">numbers</span>.<span
                                style="color:rgb(220,220,170)">mean</span>()) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; <span style="color:rgb(106,153,85)"># get the avg value</span></div><br>
                <div><span style="color:rgb(156,220,254)">negatives</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(156,220,254)">numbers</span>[<span
                                style="color:rgb(156,220,254)">numbers</span> <span
                                style="color:rgb(220,220,170)">&lt;</span> <span
                                style="color:rgb(181,206,168)">0</span>] &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># get a list of the values that are less than zero</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">negatives</span>.<span
                                style="color:rgb(220,220,170)">mean</span>()) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <span style="color:rgb(106,153,85)"># get the avg value of this new list </span>
                </div><br>
                <div><span style="color:rgb(206,145,120)">"""</span></div>
                <div><span style="color:rgb(206,145,120)">[[ 0 &nbsp;1 &nbsp;2 &nbsp;3]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[ 4 &nbsp;5 &nbsp;6 &nbsp;7]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[ 8 &nbsp;9 10 11]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[12 13 14 15]]</span></div><br>
                <div><span style="color:rgb(206,145,120)">[ 0 &nbsp;5 10 15]</span></div>
                <div><span style="color:rgb(206,145,120)">-0.1360266991800539</span></div>
                <div><span style="color:rgb(206,145,120)">-0.791436061973407</span></div>
                <div><span style="color:rgb(206,145,120)">"""</span></div>
                <div class="yj6qo ajU">
                        <div id=":rc" class="ajR" role="button" tabindex="0" data-tooltip="Show trimmed content"
                                aria-label="Show trimmed content" aria-expanded="false"><img class="ajT"
                                        src="//ssl.gstatic.com/ui/v1/icons/mail/images/cleardot.gif"></div>
                </div>
                <div class="adL"><br></div>
        </div>
</div>
        `
        const html13 = `
        <div dir="ltr">
        <div style="color:rgb(204,204,204);font-family:monospace;font-size:14px;line-height:18px;">
                <div class="adM"><br></div>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ loading pandas frames "</span>)</div><br>
                <div><span style="color:rgb(106,153,85)"># Pandas is like working with a spreadsheet but in
                                python</span></div>
                <div><span style="color:rgb(106,153,85)"># load csv files into a pandas dataframe</span></div>
                <div><span style="color:rgb(197,134,192)">import</span> <span
                                style="color:rgb(78,201,176)">pandas</span> <span
                                style="color:rgb(197,134,192)">as</span> <span style="color:rgb(78,201,176)">pd</span>
                </div>
                <div><span style="color:rgb(197,134,192)">import</span> <span style="color:rgb(78,201,176)">numpy</span>
                        <span style="color:rgb(197,134,192)">as</span> <span style="color:rgb(78,201,176)">np</span>
                </div><br>
                <div><span style="color:rgb(106,153,85)"># df = pd.read_csv('exercises.csv', sep='\s*,\s*',
                                index_col=0)</span></div>
                <div><span style="color:rgb(106,153,85)"># print(df.columns)</span></div>
                <div><span style="color:rgb(106,153,85)"># print(df.head())</span></div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ pandas: setting column names "</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">df</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">pd</span>.<span
                                style="color:rgb(220,220,170)">read_csv</span>(<span
                                style="color:rgb(206,145,120)">'exercises.csv'</span>, <span
                                style="color:rgb(156,220,254)">sep</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(206,145,120)">','</span>,
                        <span style="color:rgb(156,220,254)">index_col</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">0</span>)
                </div>
                <div><span style="color:rgb(156,220,254)">df</span>.<span style="color:rgb(156,220,254)">columns</span>
                        <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(156,220,254)">df</span>.<span
                                style="color:rgb(156,220,254)">columns</span>.<span
                                style="color:rgb(156,220,254)">str</span>.<span
                                style="color:rgb(220,220,170)">strip</span>()
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">df</span>.<span
                                style="color:rgb(156,220,254)">columns</span>)</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">df</span>.<span
                                style="color:rgb(220,220,170)">head</span>())</div><br>
                <div><span style="color:rgb(206,145,120)">"""</span></div>
                <div><span style="color:rgb(206,145,120)">Index(['Pullups', 'Pushups', 'Squats'], dtype='str')</span>
                </div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp;Pullups &nbsp;Pushups &nbsp;Squats</span>
                </div>
                <div><span style="color:rgb(206,145,120)">Day</span></div>
                <div><span style="color:rgb(206,145,120)">Mon &nbsp; &nbsp; &nbsp; 20 &nbsp; &nbsp; &nbsp; 10 &nbsp;
                                &nbsp; &nbsp; 5</span></div>
                <div><span style="color:rgb(206,145,120)">Tue &nbsp; &nbsp; &nbsp; 10 &nbsp; &nbsp; &nbsp; 15 &nbsp;
                                &nbsp; &nbsp; 0</span></div>
                <div><span style="color:rgb(206,145,120)">Wed &nbsp; &nbsp; &nbsp; 25 &nbsp; &nbsp; &nbsp; 18 &nbsp;
                                &nbsp; &nbsp; 4</span></div>
                <div><span style="color:rgb(206,145,120)">Thu &nbsp; &nbsp; &nbsp; 14 &nbsp; &nbsp; &nbsp; &nbsp;6
                                &nbsp; &nbsp; &nbsp; 0</span></div>
                <div><span style="color:rgb(206,145,120)">Fri &nbsp; &nbsp; &nbsp; 12 &nbsp; &nbsp; &nbsp; &nbsp;7
                                &nbsp; &nbsp; &nbsp; 6</span></div>
                <div><span style="color:rgb(206,145,120)">"""</span></div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ pandas: referencing cells "</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">df</span>.<span style="color:rgb(156,220,254)">at</span>[<span
                                style="color:rgb(206,145,120)">'Tue'</span>, <span
                                style="color:rgb(206,145,120)">'Pushups'</span>] <span
                                style="color:rgb(212,212,212)">=</span> <span style="color:rgb(181,206,168)">40</span>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># set value in a
                                cell; df at ['tue', 'pushups'] </span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"Monday
                                squats"</span>, <span style="color:rgb(156,220,254)">df</span>.<span
                                style="color:rgb(156,220,254)">iat</span>[<span style="color:rgb(181,206,168)">0</span>,
                        <span style="color:rgb(181,206,168)">2</span>]) &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># iat (index at) [0,2]</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">df</span>)
                </div><br>
                <div><span style="color:rgb(206,145,120)">"""</span></div>
                <div><span style="color:rgb(206,145,120)">Monday squats 5</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp;Pullups &nbsp;Pushups &nbsp;Squats</span>
                </div>
                <div><span style="color:rgb(206,145,120)">Day</span></div>
                <div><span style="color:rgb(206,145,120)">Mon &nbsp; &nbsp; &nbsp; 20 &nbsp; &nbsp; &nbsp; 10 &nbsp;
                                &nbsp; &nbsp; 5</span></div>
                <div><span style="color:rgb(206,145,120)">Tue &nbsp; &nbsp; &nbsp; 10 &nbsp; &nbsp; &nbsp; 40 &nbsp;
                                &nbsp; &nbsp; 0</span></div>
                <div><span style="color:rgb(206,145,120)">Wed &nbsp; &nbsp; &nbsp; 25 &nbsp; &nbsp; &nbsp; 18 &nbsp;
                                &nbsp; &nbsp; 4</span></div>
                <div><span style="color:rgb(206,145,120)">Thu &nbsp; &nbsp; &nbsp; 14 &nbsp; &nbsp; &nbsp; &nbsp;6
                                &nbsp; &nbsp; &nbsp; 0</span></div>
                <div><span style="color:rgb(206,145,120)">Fri &nbsp; &nbsp; &nbsp; 12 &nbsp; &nbsp; &nbsp; &nbsp;7
                                &nbsp; &nbsp; &nbsp; 6</span></div>
                <div><span style="color:rgb(206,145,120)">Sat &nbsp; &nbsp; &nbsp; 16 &nbsp; &nbsp; &nbsp; 17 &nbsp;
                                &nbsp; &nbsp; 0</span></div>
                <div><span style="color:rgb(206,145,120)">Sun &nbsp; &nbsp; &nbsp; 10 &nbsp; &nbsp; &nbsp; &nbsp;9
                                &nbsp; &nbsp; &nbsp; 0</span></div>
                <div><span style="color:rgb(206,145,120)">"""</span></div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ pandas: numpy style referencing "</span>)</div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">df</span>.<span
                                style="color:rgb(156,220,254)">loc</span>[<span
                                style="color:rgb(206,145,120)">"Mon"</span>:<span
                                style="color:rgb(206,145,120)">"Sun"</span>:<span
                                style="color:rgb(181,206,168)">2</span>]) &nbsp; &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># step size = 2</span></div><br>
                <div><span style="color:rgb(206,145,120)">"""</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp;Pullups &nbsp;Pushups &nbsp;Squats</span>
                </div>
                <div><span style="color:rgb(206,145,120)">Day</span></div>
                <div><span style="color:rgb(206,145,120)">Mon &nbsp; &nbsp; &nbsp; 20 &nbsp; &nbsp; &nbsp; 10 &nbsp;
                                &nbsp; &nbsp; 5 &nbsp; &nbsp; &nbsp; # tue, thu, sat are skipped</span></div>
                <div><span style="color:rgb(206,145,120)">Wed &nbsp; &nbsp; &nbsp; 25 &nbsp; &nbsp; &nbsp; 18 &nbsp;
                                &nbsp; &nbsp; 4</span></div>
                <div><span style="color:rgb(206,145,120)">Fri &nbsp; &nbsp; &nbsp; 12 &nbsp; &nbsp; &nbsp; &nbsp;7
                                &nbsp; &nbsp; &nbsp; 6</span></div>
                <div><span style="color:rgb(206,145,120)">Sun &nbsp; &nbsp; &nbsp; 10 &nbsp; &nbsp; &nbsp; &nbsp;9
                                &nbsp; &nbsp; &nbsp; 0</span></div>
                <div><span style="color:rgb(206,145,120)">"""</span></div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">df</span>.<span
                                style="color:rgb(156,220,254)">loc</span>[[<span
                                style="color:rgb(206,145,120)">"Fri"</span>, <span
                                style="color:rgb(206,145,120)">"Mon"</span>], <span
                                style="color:rgb(206,145,120)">"Pushups"</span>:<span
                                style="color:rgb(206,145,120)">"Squats"</span>]) &nbsp; <span
                                style="color:rgb(106,153,85)"># specify the rows and columns wanted</span></div><br>
                <div><span style="color:rgb(206,145,120)">"""</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp;Pushups &nbsp;Squats</span></div>
                <div><span style="color:rgb(206,145,120)">Day</span></div>
                <div><span style="color:rgb(206,145,120)">Fri &nbsp; &nbsp; &nbsp; &nbsp;7 &nbsp; &nbsp; &nbsp; 6</span>
                </div>
                <div><span style="color:rgb(206,145,120)">Mon &nbsp; &nbsp; &nbsp; 10 &nbsp; &nbsp; &nbsp; 5</span>
                </div>
                <div><span style="color:rgb(206,145,120)">"""</span></div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">df</span>.<span
                                style="color:rgb(156,220,254)">loc</span>[:, <span
                                style="color:rgb(206,145,120)">"Pushups"</span>:<span
                                style="color:rgb(206,145,120)">"Squats"</span>]) &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># all rows, only these columns</span></div><br>
                <div><span style="color:rgb(206,145,120)">"""</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp;Pushups &nbsp;Squats</span></div>
                <div><span style="color:rgb(206,145,120)">Day</span></div>
                <div><span style="color:rgb(206,145,120)">Mon &nbsp; &nbsp; &nbsp; 10 &nbsp; &nbsp; &nbsp; 5</span>
                </div>
                <div><span style="color:rgb(206,145,120)">Tue &nbsp; &nbsp; &nbsp; 40 &nbsp; &nbsp; &nbsp; 0</span>
                </div>
                <div><span style="color:rgb(206,145,120)">Wed &nbsp; &nbsp; &nbsp; 18 &nbsp; &nbsp; &nbsp; 4</span>
                </div>
                <div><span style="color:rgb(206,145,120)">Thu &nbsp; &nbsp; &nbsp; &nbsp;6 &nbsp; &nbsp; &nbsp; 0</span>
                </div>
                <div><span style="color:rgb(206,145,120)">Fri &nbsp; &nbsp; &nbsp; &nbsp;7 &nbsp; &nbsp; &nbsp; 6</span>
                </div>
                <div><span style="color:rgb(206,145,120)">Sat &nbsp; &nbsp; &nbsp; 17 &nbsp; &nbsp; &nbsp; 0</span>
                </div>
                <div><span style="color:rgb(206,145,120)">Sun &nbsp; &nbsp; &nbsp; &nbsp;9 &nbsp; &nbsp; &nbsp; 0</span>
                </div>
                <div><span style="color:rgb(206,145,120)">"""</span></div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">df</span>.<span
                                style="color:rgb(156,220,254)">iloc</span>[:, <span
                                style="color:rgb(181,206,168)">1</span>:<span style="color:rgb(181,206,168)">3</span>])
                        &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># iloc uses index values instead of the
                                row/column names, doesn't include the end index (eg. 3)</span></div><br>
                <div><span style="color:rgb(206,145,120)">"""</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp;Pushups &nbsp;Squats</span></div>
                <div><span style="color:rgb(206,145,120)">Day</span></div>
                <div><span style="color:rgb(206,145,120)">Mon &nbsp; &nbsp; &nbsp; 10 &nbsp; &nbsp; &nbsp; 5</span>
                </div>
                <div><span style="color:rgb(206,145,120)">Tue &nbsp; &nbsp; &nbsp; 40 &nbsp; &nbsp; &nbsp; 0</span>
                </div>
                <div><span style="color:rgb(206,145,120)">Wed &nbsp; &nbsp; &nbsp; 18 &nbsp; &nbsp; &nbsp; 4</span>
                </div>
                <div><span style="color:rgb(206,145,120)">Thu &nbsp; &nbsp; &nbsp; &nbsp;6 &nbsp; &nbsp; &nbsp; 0</span>
                </div>
                <div><span style="color:rgb(206,145,120)">Fri &nbsp; &nbsp; &nbsp; &nbsp;7 &nbsp; &nbsp; &nbsp; 6</span>
                </div>
                <div><span style="color:rgb(206,145,120)">Sat &nbsp; &nbsp; &nbsp; 17 &nbsp; &nbsp; &nbsp; 0</span>
                </div>
                <div><span style="color:rgb(206,145,120)">Sun &nbsp; &nbsp; &nbsp; &nbsp;9 &nbsp; &nbsp; &nbsp; 0</span>
                </div>
                <div><span style="color:rgb(206,145,120)">"""</span></div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ pandas: loading data from dictionaries "</span>)</div>
                <br>
                <div><span style="color:rgb(156,220,254)">data</span> <span style="color:rgb(212,212,212)">=</span> {
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"Mon"</span>:[<span
                                style="color:rgb(181,206,168)">1</span>, <span style="color:rgb(181,206,168)">2</span>,
                        <span style="color:rgb(181,206,168)">3</span>], &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># specify row values as a list (must be the same length
                                for all columns)</span>
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"Tue"</span>:[<span
                                style="color:rgb(181,206,168)">0.1</span>, <span
                                style="color:rgb(181,206,168)">0.2</span>, <span
                                style="color:rgb(181,206,168)">0.3</span>],</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"Wed"</span>:[<span
                                style="color:rgb(181,206,168)">5</span>, <span style="color:rgb(181,206,168)">6</span>,
                        <span style="color:rgb(181,206,168)">7</span>],
                </div>
                <div>}</div><br>
                <div><span style="color:rgb(156,220,254)">df</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">pd</span>.<span
                                style="color:rgb(78,201,176)">DataFrame</span>(<span
                                style="color:rgb(156,220,254)">data</span>)</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">df</span>)
                </div><br>
                <div><span style="color:rgb(206,145,120)">"""</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp;Mon &nbsp;Tue &nbsp;Wed</span></div>
                <div><span style="color:rgb(206,145,120)">0 &nbsp; &nbsp;1 &nbsp;0.1 &nbsp; &nbsp;5</span></div>
                <div><span style="color:rgb(206,145,120)">1 &nbsp; &nbsp;2 &nbsp;0.2 &nbsp; &nbsp;6</span></div>
                <div><span style="color:rgb(206,145,120)">2 &nbsp; &nbsp;3 &nbsp;0.3 &nbsp; &nbsp;7</span></div>
                <div><span style="color:rgb(206,145,120)">"""</span></div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ pandas: modifying data "</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">data</span> <span style="color:rgb(212,212,212)">=</span> {
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"Mon"</span>:[<span
                                style="color:rgb(181,206,168)">1</span>, <span style="color:rgb(181,206,168)">2</span>,
                        <span style="color:rgb(181,206,168)">3</span>],
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"Tue"</span>:[<span
                                style="color:rgb(181,206,168)">0.1</span>, <span
                                style="color:rgb(181,206,168)">0.2</span>, <span
                                style="color:rgb(181,206,168)">0.3</span>],</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"Wed"</span>:[<span
                                style="color:rgb(181,206,168)">5</span>, <span style="color:rgb(181,206,168)">6</span>,
                        <span style="color:rgb(181,206,168)">7</span>],
                </div>
                <div>}</div><br>
                <div><span style="color:rgb(156,220,254)">df</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">pd</span>.<span
                                style="color:rgb(78,201,176)">DataFrame</span>(<span
                                style="color:rgb(156,220,254)">data</span>, <span
                                style="color:rgb(156,220,254)">index</span><span
                                style="color:rgb(212,212,212)">=</span>[<span
                                style="color:rgb(206,145,120)">"Coffee"</span>, <span
                                style="color:rgb(206,145,120)">"Tea"</span>, <span
                                style="color:rgb(206,145,120)">"Water"</span>]) &nbsp; <span
                                style="color:rgb(106,153,85)"># create row namesfor the dictionary data</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">df</span>)
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>()</div><br>
                <div><span style="color:rgb(156,220,254)">df</span> <span style="color:rgb(212,212,212)">*=</span> <span
                                style="color:rgb(181,206,168)">3.0</span> &nbsp; <span style="color:rgb(106,153,85)">#
                                multiply all cells by 3 (df is being modified)</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">df</span>)
                </div><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(156,220,254)">df</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(156,220,254)">sin</span>(<span
                                style="color:rgb(156,220,254)">df</span>) &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># calculate the sin() of each cell</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">df</span>)
                </div><br>
                <div><span style="color:rgb(156,220,254)">df</span>.loc[<span
                                style="color:rgb(206,145,120)">"Coffee"</span>:<span
                                style="color:rgb(206,145,120)">"Tea"</span>] <span
                                style="color:rgb(212,212,212)">-=</span> <span style="color:rgb(181,206,168)">100</span>
                        &nbsp; <span style="color:rgb(106,153,85)"># select rows 'coffee' to 'tea' and subtract 100; can
                                also use iloc too (index instead of names)</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">df</span>)
                </div><br>
                <div><span style="color:rgb(206,145,120)">"""</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp; Mon &nbsp;Tue &nbsp;Wed</span>
                </div>
                <div><span style="color:rgb(206,145,120)">Coffee &nbsp; &nbsp;1 &nbsp;0.1 &nbsp; &nbsp;5</span></div>
                <div><span style="color:rgb(206,145,120)">Tea &nbsp; &nbsp; &nbsp; 2 &nbsp;0.2 &nbsp; &nbsp;6</span>
                </div>
                <div><span style="color:rgb(206,145,120)">Water &nbsp; &nbsp; 3 &nbsp;0.3 &nbsp; &nbsp;7</span></div>
                <br>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp; Mon &nbsp;Tue &nbsp; Wed</span>
                </div>
                <div><span style="color:rgb(206,145,120)">Coffee &nbsp;3.0 &nbsp;0.3 &nbsp;15.0</span></div>
                <div><span style="color:rgb(206,145,120)">Tea &nbsp; &nbsp; 6.0 &nbsp;0.6 &nbsp;18.0</span></div>
                <div><span style="color:rgb(206,145,120)">Water &nbsp; 9.0 &nbsp;0.9 &nbsp;21.0</span></div><br>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Mon &nbsp;
                                &nbsp; &nbsp; Tue &nbsp; &nbsp; &nbsp; Wed</span></div>
                <div><span style="color:rgb(206,145,120)">Coffee &nbsp;0.141120 &nbsp;0.295520 &nbsp;0.650288</span>
                </div>
                <div><span style="color:rgb(206,145,120)">Tea &nbsp; &nbsp;-0.279415 &nbsp;0.564642 -0.750987</span>
                </div>
                <div><span style="color:rgb(206,145,120)">Water &nbsp; 0.412118 &nbsp;0.783327 &nbsp;0.836656</span>
                </div><br>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Mon
                                &nbsp; &nbsp; &nbsp; &nbsp;Tue &nbsp; &nbsp; &nbsp; &nbsp; Wed</span></div>
                <div><span style="color:rgb(206,145,120)">Coffee &nbsp;-99.858880 -99.704480 &nbsp;-99.349712</span>
                </div>
                <div><span style="color:rgb(206,145,120)">Tea &nbsp; &nbsp;-100.279415 -99.435358 -100.750987</span>
                </div>
                <div><span style="color:rgb(206,145,120)">Water &nbsp; &nbsp; 0.412118 &nbsp; 0.783327 &nbsp;
                                &nbsp;0.836656</span></div>
                <div><span style="color:rgb(206,145,120)">"""</span></div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ pandas: functions "</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">df</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">pd</span>.<span
                                style="color:rgb(78,201,176)">DataFrame</span>(</div>
                <div>&nbsp; &nbsp; [[<span style="color:rgb(181,206,168)">1</span>, <span
                                style="color:rgb(181,206,168)">2</span>, <span style="color:rgb(181,206,168)">3</span>],
                        [<span style="color:rgb(181,206,168)">4</span>, <span style="color:rgb(181,206,168)">5</span>,
                        <span style="color:rgb(181,206,168)">6</span>], [<span style="color:rgb(181,206,168)">7</span>,
                        <span style="color:rgb(181,206,168)">8</span>, <span style="color:rgb(181,206,168)">9</span>]],
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># specify 2 dimensional
                                array</span>
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">columns</span><span
                                style="color:rgb(212,212,212)">=</span>[<span
                                style="color:rgb(206,145,120)">'Dogs'</span>, <span
                                style="color:rgb(206,145,120)">'Cats'</span>, <span
                                style="color:rgb(206,145,120)">'Mice'</span>], &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># specify columns</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">index</span><span
                                style="color:rgb(212,212,212)">=</span>[<span
                                style="color:rgb(206,145,120)">'Meat'</span>, <span
                                style="color:rgb(206,145,120)">'Fish'</span>, <span
                                style="color:rgb(206,145,120)">'Vegetables'</span>], &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># specify row/index names</span></div>
                <div>)</div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">df</span>)
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">df</span>.<span
                                style="color:rgb(220,220,170)">sum</span>()) &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># add all row values as a sum for each column; return
                                value is a pandas.series</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># can use other statistics functions such as: std
                                deviation, variance, etc.</span></div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(78,201,176)">type</span>(<span
                                style="color:rgb(156,220,254)">df</span>.<span
                                style="color:rgb(220,220,170)">sum</span>())) &nbsp; <span
                                style="color:rgb(106,153,85)"># each column in a pandas dataframe is a pandas data
                                series</span></div><br>
                <div><span style="color:rgb(206,145,120)">"""</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dogs &nbsp;Cats
                                &nbsp;Mice</span></div>
                <div><span style="color:rgb(206,145,120)">Meat &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1 &nbsp; &nbsp; 2
                                &nbsp; &nbsp; 3</span></div>
                <div><span style="color:rgb(206,145,120)">Fish &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 4 &nbsp; &nbsp; 5
                                &nbsp; &nbsp; 6</span></div>
                <div><span style="color:rgb(206,145,120)">Vegetables &nbsp; &nbsp; 7 &nbsp; &nbsp; 8 &nbsp; &nbsp;
                                9</span></div><br>
                <div><span style="color:rgb(206,145,120)">Dogs &nbsp; &nbsp;12</span></div>
                <div><span style="color:rgb(206,145,120)">Cats &nbsp; &nbsp;15</span></div>
                <div><span style="color:rgb(206,145,120)">Mice &nbsp; &nbsp;18</span></div>
                <div><span style="color:rgb(206,145,120)">dtype: int64</span></div><br>
                <div><span style="color:rgb(206,145,120)">&lt;class 'pandas.Series'&gt;</span></div>
                <div><span style="color:rgb(206,145,120)">"""</span></div><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ pandas: data series "</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">cats</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(156,220,254)">df</span>[<span
                                style="color:rgb(206,145,120)">'Cats'</span>] &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; <span style="color:rgb(106,153,85)"># get a column from the dataframe</span>
                </div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">cats</span>)
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(78,201,176)">list</span>(<span
                                style="color:rgb(156,220,254)">cats</span>.<span
                                style="color:rgb(156,220,254)">index</span>)) &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># get a list of the row names</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(78,201,176)">type</span>(<span
                                style="color:rgb(156,220,254)">cats</span>.<span
                                style="color:rgb(156,220,254)">values</span>)) &nbsp; &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># the column values types is a kind of numpy array</span>
                </div><br>
                <div><span style="color:rgb(206,145,120)">"""</span></div>
                <div><span style="color:rgb(206,145,120)">Meat &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;2</span></div>
                <div><span style="color:rgb(206,145,120)">Fish &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;5</span></div>
                <div><span style="color:rgb(206,145,120)">Vegetables &nbsp; &nbsp;8</span></div>
                <div><span style="color:rgb(206,145,120)">Name: Cats, dtype: int64</span></div><br>
                <div><span style="color:rgb(206,145,120)">['Meat', 'Fish', 'Vegetables']</span></div><br>
                <div><span style="color:rgb(206,145,120)">&lt;class 'numpy.ndarray'&gt;</span></div>
                <div><span style="color:rgb(206,145,120)">"""</span></div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ pandas: random dataframes "</span>)</div><br><br>
                <div><span style="color:rgb(156,220,254)">df</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">pd</span>.<span
                                style="color:rgb(78,201,176)">DataFrame</span>(</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">random</span>.<span
                                style="color:rgb(156,220,254)">randint</span>(<span
                                style="color:rgb(181,206,168)">0</span>, <span style="color:rgb(181,206,168)">4</span>,
                        <span style="color:rgb(181,206,168)">60</span>).<span
                                style="color:rgb(220,220,170)">reshape</span>(<span
                                style="color:rgb(181,206,168)">20</span>, <span
                                style="color:rgb(181,206,168)">3</span>), &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># random integers; value is between 0 - 3; generate 60
                                values; reshape to 20 rows x 3 cols</span>
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">columns</span><span
                                style="color:rgb(212,212,212)">=</span>[<span
                                style="color:rgb(206,145,120)">"One"</span>, <span
                                style="color:rgb(206,145,120)">"Two"</span>, <span
                                style="color:rgb(206,145,120)">"Three"</span>], &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># specify col names</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">index</span><span
                                style="color:rgb(212,212,212)">=</span>[<span
                                style="color:rgb(220,220,170)">chr</span>(<span style="color:rgb(156,220,254)">x</span>)
                        <span style="color:rgb(197,134,192)">for</span> <span style="color:rgb(156,220,254)">x</span>
                        <span style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(78,201,176)">range</span>(<span
                                style="color:rgb(181,206,168)">65</span>, <span
                                style="color:rgb(181,206,168)">85</span>)] &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># specify row/index names using a list
                                comprehension</span>
                </div>
                <div>)</div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">df</span>)
                </div><br>
                <div><span style="color:rgb(206,145,120)">"""</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp;One &nbsp;Two &nbsp;Three</span></div>
                <div><span style="color:rgb(206,145,120)">A &nbsp; &nbsp;2 &nbsp; &nbsp;2 &nbsp; &nbsp; &nbsp;1</span>
                </div>
                <div><span style="color:rgb(206,145,120)">B &nbsp; &nbsp;2 &nbsp; &nbsp;1 &nbsp; &nbsp; &nbsp;0</span>
                </div>
                <div><span style="color:rgb(206,145,120)">C &nbsp; &nbsp;1 &nbsp; &nbsp;0 &nbsp; &nbsp; &nbsp;2</span>
                </div>
                <div><span style="color:rgb(206,145,120)">D &nbsp; &nbsp;0 &nbsp; &nbsp;2 &nbsp; &nbsp; &nbsp;1</span>
                </div>
                <div><span style="color:rgb(206,145,120)">E &nbsp; &nbsp;0 &nbsp; &nbsp;1 &nbsp; &nbsp; &nbsp;2</span>
                </div>
                <div><span style="color:rgb(206,145,120)">F &nbsp; &nbsp;1 &nbsp; &nbsp;2 &nbsp; &nbsp; &nbsp;0</span>
                </div>
                <div><span style="color:rgb(206,145,120)">G &nbsp; &nbsp;3 &nbsp; &nbsp;3 &nbsp; &nbsp; &nbsp;2</span>
                </div>
                <div><span style="color:rgb(206,145,120)">H &nbsp; &nbsp;3 &nbsp; &nbsp;3 &nbsp; &nbsp; &nbsp;3</span>
                </div>
                <div><span style="color:rgb(206,145,120)">I &nbsp; &nbsp;1 &nbsp; &nbsp;3 &nbsp; &nbsp; &nbsp;3</span>
                </div>
                <div><span style="color:rgb(206,145,120)">J &nbsp; &nbsp;1 &nbsp; &nbsp;2 &nbsp; &nbsp; &nbsp;1</span>
                </div>
                <div><span style="color:rgb(206,145,120)">K &nbsp; &nbsp;3 &nbsp; &nbsp;1 &nbsp; &nbsp; &nbsp;1</span>
                </div>
                <div><span style="color:rgb(206,145,120)">L &nbsp; &nbsp;1 &nbsp; &nbsp;2 &nbsp; &nbsp; &nbsp;3</span>
                </div>
                <div><span style="color:rgb(206,145,120)">M &nbsp; &nbsp;2 &nbsp; &nbsp;2 &nbsp; &nbsp; &nbsp;0</span>
                </div>
                <div><span style="color:rgb(206,145,120)">N &nbsp; &nbsp;3 &nbsp; &nbsp;2 &nbsp; &nbsp; &nbsp;2</span>
                </div>
                <div><span style="color:rgb(206,145,120)">O &nbsp; &nbsp;1 &nbsp; &nbsp;3 &nbsp; &nbsp; &nbsp;0</span>
                </div>
                <div><span style="color:rgb(206,145,120)">P &nbsp; &nbsp;0 &nbsp; &nbsp;3 &nbsp; &nbsp; &nbsp;1</span>
                </div>
                <div><span style="color:rgb(206,145,120)">Q &nbsp; &nbsp;3 &nbsp; &nbsp;0 &nbsp; &nbsp; &nbsp;1</span>
                </div>
                <div><span style="color:rgb(206,145,120)">R &nbsp; &nbsp;1 &nbsp; &nbsp;3 &nbsp; &nbsp; &nbsp;2</span>
                </div>
                <div><span style="color:rgb(206,145,120)">S &nbsp; &nbsp;3 &nbsp; &nbsp;3 &nbsp; &nbsp; &nbsp;2</span>
                </div>
                <div><span style="color:rgb(206,145,120)">T &nbsp; &nbsp;0 &nbsp; &nbsp;1 &nbsp; &nbsp; &nbsp;0</span>
                </div>
                <div><span style="color:rgb(206,145,120)">"""</span></div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ pandas: sorting "</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">df1</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(156,220,254)">df</span>.<span
                                style="color:rgb(220,220,170)">sort_values</span>(<span
                                style="color:rgb(156,220,254)">by</span><span
                                style="color:rgb(212,212,212)">=</span>[<span
                                style="color:rgb(206,145,120)">"One"</span>, <span
                                style="color:rgb(206,145,120)">"Two"</span>, <span
                                style="color:rgb(206,145,120)">"Three"</span>], <span
                                style="color:rgb(156,220,254)">ascending</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(86,156,214)">False</span>)
                        &nbsp; <span style="color:rgb(106,153,85)"># sort by col 1 first, then col 2, col 3; in desc
                                order</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">df1</span>)
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># sort axis by default is axis 0 (rows),
                                axis 1 is cols</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>() &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># ie. sort the rows (move them around) but keep the cols
                                the same</span></div>
                <div><span style="color:rgb(156,220,254)">df2</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(156,220,254)">df</span>.<span
                                style="color:rgb(220,220,170)">transpose</span>() &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># flip columns to rows</span></div>
                <div><span style="color:rgb(156,220,254)">df2</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(156,220,254)">df2</span>.<span
                                style="color:rgb(220,220,170)">sort_values</span>(<span
                                style="color:rgb(156,220,254)">by</span><span
                                style="color:rgb(212,212,212)">=</span>[<span
                                style="color:rgb(206,145,120)">"One"</span>, <span
                                style="color:rgb(206,145,120)">"Two"</span>, <span
                                style="color:rgb(206,145,120)">"Three"</span>], <span
                                style="color:rgb(156,220,254)">axis</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">1</span>,
                        <span style="color:rgb(156,220,254)">ascending</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(86,156,214)">False</span>)
                        &nbsp;<span style="color:rgb(106,153,85)"># sort by row 1 first, then row 2, row 3; in desc
                                order</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">df2</span>)
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># sort by
                                axis 1 (columns)</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># ie. sort the columns, but keep the rows in place</span>
                </div>
                <div><span style="color:rgb(206,145,120)">"""</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp;One &nbsp;Two &nbsp;Three</span></div>
                <div><span style="color:rgb(206,145,120)">G &nbsp; &nbsp;3 &nbsp; &nbsp;1 &nbsp; &nbsp; &nbsp;1</span>
                </div>
                <div><span style="color:rgb(206,145,120)">C &nbsp; &nbsp;3 &nbsp; &nbsp;1 &nbsp; &nbsp; &nbsp;0</span>
                </div>
                <div><span style="color:rgb(206,145,120)">L &nbsp; &nbsp;3 &nbsp; &nbsp;0 &nbsp; &nbsp; &nbsp;3</span>
                </div>
                <div><span style="color:rgb(206,145,120)">F &nbsp; &nbsp;2 &nbsp; &nbsp;3 &nbsp; &nbsp; &nbsp;2</span>
                </div>
                <div><span style="color:rgb(206,145,120)">D &nbsp; &nbsp;2 &nbsp; &nbsp;2 &nbsp; &nbsp; &nbsp;3</span>
                </div>
                <div><span style="color:rgb(206,145,120)">T &nbsp; &nbsp;2 &nbsp; &nbsp;2 &nbsp; &nbsp; &nbsp;3</span>
                </div>
                <div><span style="color:rgb(206,145,120)">J &nbsp; &nbsp;2 &nbsp; &nbsp;2 &nbsp; &nbsp; &nbsp;1</span>
                </div>
                <div><span style="color:rgb(206,145,120)">O &nbsp; &nbsp;2 &nbsp; &nbsp;2 &nbsp; &nbsp; &nbsp;0</span>
                </div>
                <div><span style="color:rgb(206,145,120)">I &nbsp; &nbsp;2 &nbsp; &nbsp;1 &nbsp; &nbsp; &nbsp;2</span>
                </div>
                <div><span style="color:rgb(206,145,120)">S &nbsp; &nbsp;2 &nbsp; &nbsp;0 &nbsp; &nbsp; &nbsp;3</span>
                </div>
                <div><span style="color:rgb(206,145,120)">R &nbsp; &nbsp;1 &nbsp; &nbsp;3 &nbsp; &nbsp; &nbsp;1</span>
                </div>
                <div><span style="color:rgb(206,145,120)">N &nbsp; &nbsp;1 &nbsp; &nbsp;3 &nbsp; &nbsp; &nbsp;0</span>
                </div>
                <div><span style="color:rgb(206,145,120)">H &nbsp; &nbsp;1 &nbsp; &nbsp;2 &nbsp; &nbsp; &nbsp;3</span>
                </div>
                <div><span style="color:rgb(206,145,120)">E &nbsp; &nbsp;0 &nbsp; &nbsp;3 &nbsp; &nbsp; &nbsp;3</span>
                </div>
                <div><span style="color:rgb(206,145,120)">B &nbsp; &nbsp;0 &nbsp; &nbsp;3 &nbsp; &nbsp; &nbsp;2</span>
                </div>
                <div><span style="color:rgb(206,145,120)">Q &nbsp; &nbsp;0 &nbsp; &nbsp;3 &nbsp; &nbsp; &nbsp;1</span>
                </div>
                <div><span style="color:rgb(206,145,120)">K &nbsp; &nbsp;0 &nbsp; &nbsp;1 &nbsp; &nbsp; &nbsp;3</span>
                </div>
                <div><span style="color:rgb(206,145,120)">M &nbsp; &nbsp;0 &nbsp; &nbsp;1 &nbsp; &nbsp; &nbsp;1</span>
                </div>
                <div><span style="color:rgb(206,145,120)">A &nbsp; &nbsp;0 &nbsp; &nbsp;1 &nbsp; &nbsp; &nbsp;0</span>
                </div>
                <div><span style="color:rgb(206,145,120)">P &nbsp; &nbsp;0 &nbsp; &nbsp;0 &nbsp; &nbsp; &nbsp;0</span>
                </div><br>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp;G &nbsp;C &nbsp;L &nbsp;F &nbsp;D
                                &nbsp;T &nbsp;J &nbsp;O &nbsp;I &nbsp;S &nbsp;R &nbsp;N &nbsp;H &nbsp;E &nbsp;B &nbsp;Q
                                &nbsp;K &nbsp;M &nbsp;A &nbsp;P</span></div>
                <div><span style="color:rgb(206,145,120)">One &nbsp; &nbsp;3 &nbsp;3 &nbsp;3 &nbsp;2 &nbsp;2 &nbsp;2
                                &nbsp;2 &nbsp;2 &nbsp;2 &nbsp;2 &nbsp;1 &nbsp;1 &nbsp;1 &nbsp;0 &nbsp;0 &nbsp;0 &nbsp;0
                                &nbsp;0 &nbsp;0 &nbsp;0</span></div>
                <div><span style="color:rgb(206,145,120)">Two &nbsp; &nbsp;1 &nbsp;1 &nbsp;0 &nbsp;3 &nbsp;2 &nbsp;2
                                &nbsp;2 &nbsp;2 &nbsp;1 &nbsp;0 &nbsp;3 &nbsp;3 &nbsp;2 &nbsp;3 &nbsp;3 &nbsp;3 &nbsp;1
                                &nbsp;1 &nbsp;1 &nbsp;0</span></div>
                <div><span style="color:rgb(206,145,120)">Three &nbsp;1 &nbsp;0 &nbsp;3 &nbsp;2 &nbsp;3 &nbsp;3 &nbsp;1
                                &nbsp;0 &nbsp;2 &nbsp;3 &nbsp;1 &nbsp;0 &nbsp;3 &nbsp;3 &nbsp;2 &nbsp;1 &nbsp;3 &nbsp;1
                                &nbsp;0 &nbsp;0</span></div>
                <div><span style="color:rgb(206,145,120)">"""</span></div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ mall customers database "</span>)</div><br><br>
                <div><span style="color:rgb(156,220,254)">df</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">pd</span>.<span
                                style="color:rgb(220,220,170)">read_csv</span>(<span
                                style="color:rgb(206,145,120)">"mall_customers.<wbr>csv"</span>, <span
                                style="color:rgb(156,220,254)">index_col</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">0</span>)
                        &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># use the first column as a unique id</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">df</span>.<span
                                style="color:rgb(156,220,254)">columns</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">df</span>.<span style="color:rgb(156,220,254)">columns</span>
                        <span style="color:rgb(212,212,212)">=</span> [<span
                                style="color:rgb(206,145,120)">"Gender"</span>, <span
                                style="color:rgb(206,145,120)">"Age"</span>, <span
                                style="color:rgb(206,145,120)">"Income"</span>, <span
                                style="color:rgb(206,145,120)">"Spending"</span>] &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># rename columns</span>
                </div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">df</span>.<span
                                style="color:rgb(156,220,254)">columns</span>)</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">df</span>.<span
                                style="color:rgb(220,220,170)">head</span>())</div><br>
                <div><span style="color:rgb(206,145,120)">"""</span></div>
                <div><span style="color:rgb(206,145,120)">Index(['Gender', 'Age', 'Annual Income (k$)', 'Spending Score
                                (1-100)'], dtype='str')</span></div><br>
                <div><span style="color:rgb(206,145,120)">Index(['Gender', 'Age', 'Income', 'Spending'],
                                dtype='str')</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Gender &nbsp;Age
                                &nbsp;Income &nbsp;Spending</span></div>
                <div><span style="color:rgb(206,145,120)">CustomerID</span></div>
                <div><span style="color:rgb(206,145,120)">1 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Male &nbsp; 19
                                &nbsp; &nbsp; &nbsp;15 &nbsp; &nbsp; &nbsp; &nbsp;39</span></div>
                <div><span style="color:rgb(206,145,120)">2 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Male &nbsp; 21
                                &nbsp; &nbsp; &nbsp;15 &nbsp; &nbsp; &nbsp; &nbsp;81</span></div>
                <div><span style="color:rgb(206,145,120)">3 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 20 &nbsp;
                                &nbsp; &nbsp;16 &nbsp; &nbsp; &nbsp; &nbsp; 6</span></div>
                <div><span style="color:rgb(206,145,120)">4 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 23 &nbsp;
                                &nbsp; &nbsp;16 &nbsp; &nbsp; &nbsp; &nbsp;77</span></div>
                <div><span style="color:rgb(206,145,120)">5 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 31 &nbsp;
                                &nbsp; &nbsp;17 &nbsp; &nbsp; &nbsp; &nbsp;40</span></div>
                <div><span style="color:rgb(206,145,120)">"""</span></div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ pandas: grouping "</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">gp</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(156,220,254)">df</span>.<span
                                style="color:rgb(220,220,170)">groupby</span>(<span
                                style="color:rgb(206,145,120)">"Gender"</span>) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># can group by a single
                                column or a list of columns</span></div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"Number of
                                groups:"</span>, <span style="color:rgb(156,220,254)">gp</span>.<span
                                style="color:rgb(156,220,254)">ngroups</span>) &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># ngroups = number of groups = 2</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"Groups:"</span>, <span
                                style="color:rgb(156,220,254)">gp</span>.<span
                                style="color:rgb(156,220,254)">groups</span>) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># return obj is a dict with the group
                                name as a key and the list of row ids in a list</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"Group
                                keys:"</span>, <span style="color:rgb(156,220,254)">gp</span>.<span
                                style="color:rgb(156,220,254)">groups</span>.<span
                                style="color:rgb(220,220,170)">keys</span>()) &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># names of the group keys</span></div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">gp</span>.<span
                                style="color:rgb(220,220,170)">get_group</span>(<span
                                style="color:rgb(206,145,120)">"Female"</span>)) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># return obj is a dataframe; an array
                                with only the rows that are female</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(78,201,176)">type</span>(<span
                                style="color:rgb(156,220,254)">gp</span>.<span
                                style="color:rgb(220,220,170)">get_group</span>(<span
                                style="color:rgb(206,145,120)">"<wbr>Female"</span>)))</div><br>
                <div><span style="color:rgb(206,145,120)">"""</span></div>
                <div><span style="color:rgb(206,145,120)">Number of groups: 2</span></div>
                <div><span style="color:rgb(206,145,120)">Groups: {'Female': [3, 4, 5, 6, 7, 8, 10, 12, 13, 14, 17, 20,
                                23, 25, 27, 29, 30, 32, 35, 36, 37, 38, 39, 40, 41, 44, 45, 46, 47, 48, 49, 50, 51, 53,
                                55, 57, 59, 63, 64, 67, 68, 70, 72, 73, 74, 77, 79, 80, 84, 85, 87, 88, 89, 90, 91, 94,
                                95, 97, 98, 101, 102, 106, 107, 112, 113, 115, 116, 117, 118, 119, 120, 122, 123, 125,
                                126, 133, 134, 136, 137, 140, 141, 143, 144, 148, 149, 153, 154, 155, 156, 158, 160,
                                161, 162, 164, 166, 168, 169, 175, 176, 181, ...], 'Male': [1, 2, 9, 11, 15, 16, 18, 19,
                                21, 22, 24, 26, 28, 31, 33, 34, 42, 43, 52, 54, 56, 58, 60, 61, 62, 65, 66, 69, 71, 75,
                                76, 78, 81, 82, 83, 86, 92, 93, 96, 99, 100, 103, 104, 105, 108, 109, 110, 111, 114,
                                121, 124, 127, 128, 129, 130, 131, 132, 135, 138, 139, 142, 145, 146, 147, 150, 151,
                                152, 157, 159, 163, 165, 167, 170, 171, 172, 173, 174, 177, 178, 179, 180, 183, 186,
                                188, 193, 198, 199, 200]}</span></div>
                <div><span style="color:rgb(206,145,120)">Group keys: dict_keys(['Female', 'Male'])</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Gender &nbsp;Age
                                &nbsp;Income &nbsp;Spending</span></div>
                <div><span style="color:rgb(206,145,120)">CustomerID</span></div>
                <div><span style="color:rgb(206,145,120)">3 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 20 &nbsp;
                                &nbsp; &nbsp;16 &nbsp; &nbsp; &nbsp; &nbsp; 6</span></div>
                <div><span style="color:rgb(206,145,120)">4 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 23 &nbsp;
                                &nbsp; &nbsp;16 &nbsp; &nbsp; &nbsp; &nbsp;77</span></div>
                <div><span style="color:rgb(206,145,120)">5 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 31 &nbsp;
                                &nbsp; &nbsp;17 &nbsp; &nbsp; &nbsp; &nbsp;40</span></div>
                <div><span style="color:rgb(206,145,120)">6 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 22 &nbsp;
                                &nbsp; &nbsp;17 &nbsp; &nbsp; &nbsp; &nbsp;76</span></div>
                <div><span style="color:rgb(206,145,120)">7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 35 &nbsp;
                                &nbsp; &nbsp;18 &nbsp; &nbsp; &nbsp; &nbsp; 6</span></div>
                <div><span style="color:rgb(197,134,192)">... </span><span style="color:rgb(206,145,120)">&nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp;... &nbsp;... &nbsp; &nbsp; ... &nbsp; &nbsp; &nbsp;
                                ...</span></div>
                <div><span style="color:rgb(206,145,120)">192 &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 32 &nbsp; &nbsp;
                                103 &nbsp; &nbsp; &nbsp; &nbsp;69</span></div>
                <div><span style="color:rgb(206,145,120)">194 &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 38 &nbsp; &nbsp;
                                113 &nbsp; &nbsp; &nbsp; &nbsp;91</span></div>
                <div><span style="color:rgb(206,145,120)">195 &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 47 &nbsp; &nbsp;
                                120 &nbsp; &nbsp; &nbsp; &nbsp;16</span></div>
                <div><span style="color:rgb(206,145,120)">196 &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 35 &nbsp; &nbsp;
                                120 &nbsp; &nbsp; &nbsp; &nbsp;79</span></div>
                <div><span style="color:rgb(206,145,120)">197 &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 45 &nbsp; &nbsp;
                                126 &nbsp; &nbsp; &nbsp; &nbsp;28</span></div><br>
                <div><span style="color:rgb(206,145,120)">[112 rows x 4 columns]</span></div>
                <div><span style="color:rgb(206,145,120)">&lt;class 'pandas.DataFrame'&gt;</span></div>
                <div><span style="color:rgb(206,145,120)">"""</span></div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ pandas: aggregate functions "</span>)</div><br>
                <div><span style="color:rgb(106,153,85)"># aggregate: calculate a statistic over a set of data. eg. std
                                dev, mean, avg, variance, etc</span></div>
                <div><span style="color:rgb(106,153,85)"># note: our dataframe is not all numerical (ie. gender) so the
                                aggregate functions will not work on this.</span></div>
                <div><span style="color:rgb(106,153,85)"># solution: get a dataframe for just the numerical data</span>
                </div>
                <div><span style="color:rgb(106,153,85)"># note: will also work if we group the gender data first</span>
                </div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">df</span>.<span
                                style="color:rgb(156,220,254)">loc</span>[:, <span
                                style="color:rgb(206,145,120)">"Age"</span>:<span
                                style="color:rgb(206,145,120)">"Spending"</span>].<span
                                style="color:rgb(220,220,170)">mean</span>()) &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># using just the Age -&gt; Spending cols, calculate the
                                mean value for each</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># ie. get just the columns that are numerical</span></div>
                <br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">df</span>[<span
                                style="color:rgb(206,145,120)">"Age"</span>].<span
                                style="color:rgb(220,220,170)">mean</span>()) <span style="color:rgb(106,153,85)"># get
                                a data series for just the age column</span></div><br>
                <div><span style="color:rgb(156,220,254)">gp</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(156,220,254)">df</span>.<span
                                style="color:rgb(220,220,170)">groupby</span>(<span
                                style="color:rgb(206,145,120)">"Gender"</span>) &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># get a group for the Gender col</span></div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">gp</span>.<span
                                style="color:rgb(220,220,170)">mean</span>()) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp;<span style="color:rgb(106,153,85)"># get the mean value for each column for the 2
                                groups</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">gp</span>.<span
                                style="color:rgb(220,220,170)">mean</span>().<span
                                style="color:rgb(156,220,254)">loc</span>[<span
                                style="color:rgb(206,145,120)">"Female"</span>, <span
                                style="color:rgb(206,145,120)">"Age"</span>]) &nbsp; <span
                                style="color:rgb(106,153,85)"># get the value at cell location 'female' and 'age'</span>
                </div><br>
                <div><span style="color:rgb(206,145,120)">"""</span></div>
                <div><span style="color:rgb(206,145,120)">Age &nbsp; &nbsp; &nbsp; &nbsp; 38.85</span></div>
                <div><span style="color:rgb(206,145,120)">Income &nbsp; &nbsp; &nbsp;60.56</span></div>
                <div><span style="color:rgb(206,145,120)">Spending &nbsp; &nbsp;50.20</span></div>
                <div><span style="color:rgb(206,145,120)">dtype: float64</span></div><br>
                <div><span style="color:rgb(206,145,120)">38.85</span></div><br>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Age &nbsp;
                                &nbsp; Income &nbsp; Spending</span></div>
                <div><span style="color:rgb(206,145,120)">Gender</span></div>
                <div><span style="color:rgb(206,145,120)">Female &nbsp;38.098214 &nbsp;59.250000 &nbsp;51.526786</span>
                </div>
                <div><span style="color:rgb(206,145,120)">Male &nbsp; &nbsp;39.806818 &nbsp;62.227273
                                &nbsp;48.511364</span></div><br>
                <div><span style="color:rgb(206,145,120)">38.098214285714285</span></div>
                <div><span style="color:rgb(206,145,120)">"""</span></div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ------------------------------ pandas: filtering "</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">df_filtered</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(156,220,254)">df</span>[(<span
                                style="color:rgb(156,220,254)">df</span>[<span
                                style="color:rgb(206,145,120)">'Gender'</span>] <span
                                style="color:rgb(220,220,170)">==</span> <span
                                style="color:rgb(206,145,120)">'Female'</span>) <span
                                style="color:rgb(220,220,170)">&amp;</span> (<span
                                style="color:rgb(156,220,254)">df</span>[<span
                                style="color:rgb(206,145,120)">'Age'</span>] <span
                                style="color:rgb(220,220,170)">&gt;</span> <span
                                style="color:rgb(181,206,168)">40</span>)] &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># create a new dataframe from a subset of another
                                dataframe</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)">#
                                filter values to get ones that have:</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)">#
                                &nbsp;gender = female and age &gt; 40</span></div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">df_filtered</span>)</div><br>
                <div><span style="color:rgb(206,145,120)">"""</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Gender &nbsp;Age
                                &nbsp;Income &nbsp;Spending</span></div>
                <div><span style="color:rgb(206,145,120)">CustomerID</span></div>
                <div><span style="color:rgb(206,145,120)">13 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Female &nbsp; 58 &nbsp;
                                &nbsp; &nbsp;20 &nbsp; &nbsp; &nbsp; &nbsp;15</span></div>
                <div><span style="color:rgb(206,145,120)">23 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Female &nbsp; 46 &nbsp;
                                &nbsp; &nbsp;25 &nbsp; &nbsp; &nbsp; &nbsp; 5</span></div>
                <div><span style="color:rgb(206,145,120)">25 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Female &nbsp; 54 &nbsp;
                                &nbsp; &nbsp;28 &nbsp; &nbsp; &nbsp; &nbsp;14</span></div>
                <div><span style="color:rgb(206,145,120)">27 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Female &nbsp; 45 &nbsp;
                                &nbsp; &nbsp;28 &nbsp; &nbsp; &nbsp; &nbsp;32</span></div>
                <div><span style="color:rgb(206,145,120)">35 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Female &nbsp; 49 &nbsp;
                                &nbsp; &nbsp;33 &nbsp; &nbsp; &nbsp; &nbsp;14</span></div>
                <div><span style="color:rgb(206,145,120)">37 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Female &nbsp; 42 &nbsp;
                                &nbsp; &nbsp;34 &nbsp; &nbsp; &nbsp; &nbsp;17</span></div>
                <div><span style="color:rgb(206,145,120)">"""</span></div>
                <div class="yj6qo ajU">
                        <div id=":sg" class="ajR" role="button" tabindex="0" data-tooltip="Show trimmed content"
                                aria-label="Show trimmed content" aria-expanded="false"><img class="ajT"
                                        src="//ssl.gstatic.com/ui/v1/icons/mail/images/cleardot.gif"></div>
                </div>
                <div class="adL"><br></div>
        </div>
</div>
        `

        const html14 = `
        <div dir="ltr">
        <div style="color:rgb(204,204,204);font-family:monospace;font-size:14px;line-height:18px;">
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"-----------------------<wbr>------- visualization, prediction and analysis "</span>)
                </div><span class="im"><br>
                        <div><span style="color:rgb(156,220,254)">df</span> <span
                                        style="color:rgb(212,212,212)">=</span> <span
                                        style="color:rgb(78,201,176)">pd</span>.<span
                                        style="color:rgb(220,220,170)">read_csv</span>(<span
                                        style="color:rgb(206,145,120)">"mall_customers.<wbr>csv"</span>, <span
                                        style="color:rgb(156,220,254)">index_col</span><span
                                        style="color:rgb(212,212,212)">=</span><span
                                        style="color:rgb(181,206,168)">0</span>)</div>
                        <div><span style="color:rgb(156,220,254)">df</span>.<span
                                        style="color:rgb(156,220,254)">columns</span> <span
                                        style="color:rgb(212,212,212)">=</span> [<span
                                        style="color:rgb(206,145,120)">"Gender"</span>, <span
                                        style="color:rgb(206,145,120)">"Age"</span>, <span
                                        style="color:rgb(206,145,120)">"Income"</span>, <span
                                        style="color:rgb(206,145,120)">"Spending"</span>]</div><br><br>
                </span>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"-----------------------<wbr>------- plotting "</span>)
                </div><br>
                <div><span style="color:rgb(106,153,85)"># display a scatter plot of age vs. spending</span></div>
                <div><span style="color:rgb(106,153,85)"># example 1</span></div>
                <div><span style="color:rgb(78,201,176)">plt</span>.<span
                                style="color:rgb(220,220,170)">figure</span>(<span
                                style="color:rgb(156,220,254)">figsize</span><span
                                style="color:rgb(212,212,212)">=</span>(<span
                                style="color:rgb(181,206,168)">16</span>,<span style="color:rgb(181,206,168)">9</span>))
                </div>
                <div><span style="color:rgb(78,201,176)">plt</span>.<span
                                style="color:rgb(220,220,170)">grid</span>(<span
                                style="color:rgb(86,156,214)">True</span>)</div>
                <div><span style="color:rgb(78,201,176)">plt</span>.<span
                                style="color:rgb(220,220,170)">title</span>(<span style="color:rgb(206,145,120)">"Age vs
                                Spending"</span>)</div>
                <div><span style="color:rgb(78,201,176)">plt</span>.<span
                                style="color:rgb(220,220,170)">xlabel</span>(<span
                                style="color:rgb(206,145,120)">"Age"</span>)</div>
                <div><span style="color:rgb(78,201,176)">plt</span>.<span
                                style="color:rgb(220,220,170)">ylabel</span>(<span
                                style="color:rgb(206,145,120)">"Spending"</span>)</div>
                <div><span style="color:rgb(78,201,176)">plt</span>.<span
                                style="color:rgb(220,220,170)">scatter</span>(<span
                                style="color:rgb(156,220,254)">df</span>[<span
                                style="color:rgb(206,145,120)">"Age"</span>].<span
                                style="color:rgb(156,220,254)">values</span>, <span
                                style="color:rgb(156,220,254)">df</span>[<span
                                style="color:rgb(206,145,120)">"Spending"</span>].<span
                                style="color:rgb(156,220,254)">values</span>, <span
                                style="color:rgb(156,220,254)">color</span><span
                                style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(206,145,120)">"green"</span>)</div>
                <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">show</span>()
                </div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"-----------------------<wbr>------- seaborn plots "</span>)
                </div><br>
                <div><span style="color:rgb(106,153,85)"># display a seaborn pairplot for the mall_customers.csv
                                data</span></div>
                <div><span style="color:rgb(106,153,85)"># great tool to visualize correlations in your data</span>
                </div><br>
                <div><span style="color:rgb(106,153,85)"># example 1</span></div>
                <div><span style="color:rgb(78,201,176)">sn</span>.<span
                                style="color:rgb(220,220,170)">pairplot</span>(<span
                                style="color:rgb(156,220,254)">df</span>)</div><br>
                <div><span style="color:rgb(106,153,85)"># example 2</span></div>
                <div><span style="color:rgb(78,201,176)">sn</span>.<span
                                style="color:rgb(220,220,170)">pairplot</span>(<span
                                style="color:rgb(156,220,254)">df</span>, <span
                                style="color:rgb(156,220,254)">height</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">2</span>,
                        <span style="color:rgb(156,220,254)">aspect</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">1</span>,
                        <span style="color:rgb(156,220,254)">palette</span><span
                                style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(206,145,120)">"husl"</span>, <span
                                style="color:rgb(156,220,254)">hue</span><span
                                style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(206,145,120)">"Gender"</span>)</div>
                <div><span style="color:rgb(106,153,85)"># 'husl' palette: will try to choose colors of the same
                                intensity</span></div>
                <div><span style="color:rgb(106,153,85)"># hue=gender - normally choose a discreet column; graphs will
                                be colorized based on the gender column</span></div>
                <div><span style="color:rgb(106,153,85)"># plt.show()</span></div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"-----------------------<wbr>------- clustering with scikit-learn "</span>)
                </div><br>
                <div><span style="color:rgb(106,153,85)"># scikit-learn: statistical / data analysis tools/packages;
                                useful for analyzing and predicting data</span></div>
                <div><span style="color:rgb(106,153,85)"># use scikit-learn to do: linear regression, polynomial
                                regression, etc. </span></div>
                <div><span style="color:rgb(106,153,85)"># here we will use scikit-learn to divide the data into
                                clusters</span></div><br>
                <div><span style="color:rgb(106,153,85)"># example 1 - show scatterplot of age vs. spending</span></div>
                <div><span style="color:rgb(78,201,176)">sn</span>.<span
                                style="color:rgb(220,220,170)">scatterplot</span>(<span
                                style="color:rgb(156,220,254)">df</span>, <span
                                style="color:rgb(156,220,254)">x</span><span
                                style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(206,145,120)">"Age"</span>, <span
                                style="color:rgb(156,220,254)">y</span><span
                                style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(206,145,120)">"Spending"</span>, <span
                                style="color:rgb(156,220,254)">palette</span><span
                                style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(206,145,120)">"husl"</span>)</div>
                <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">show</span>()
                </div><br>
                <div><span style="color:rgb(106,153,85)"># example 2 - use one of many tools/techniques to visualize
                                clusters of data</span></div>
                <div><span style="color:rgb(106,153,85)"># KMeans clustering: </span></div>
                <div><span style="color:rgb(106,153,85)"># &nbsp;- assign each point to a different cluster based on avg
                                values in each cluster and how far the value is from these averages</span></div>
                <div><span style="color:rgb(156,220,254)">model</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">KMeans</span>(<span
                                style="color:rgb(156,220,254)">n_clusters</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">5</span>)
                        &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># specify the num of clusters in advance</span>
                </div>
                <div><span style="color:rgb(79,193,255)">X</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(156,220,254)">df</span>[[<span
                                style="color:rgb(206,145,120)">"Age"</span>, <span
                                style="color:rgb(206,145,120)">"Spending"</span>]] &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># specify the dataframe data we are interested in</span>
                </div>
                <div><span style="color:rgb(156,220,254)">model</span>.<span
                                style="color:rgb(220,220,170)">fit</span>(<span style="color:rgb(79,193,255)">X</span>)
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># fit() will run the kmeans algorithm on dataframe
                                X</span></div>
                <div><span style="color:rgb(156,220,254)">df</span>[<span
                                style="color:rgb(206,145,120)">"Cluster"</span>] <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(156,220,254)">model</span>.<span
                                style="color:rgb(156,220,254)">labels_</span> &nbsp; <span
                                style="color:rgb(106,153,85)"># create a new column in our dataframe to store the kmeans
                                cluster data; labels_ contains a value for each of the 5 clusters</span></div>
                <div><span style="color:rgb(78,201,176)">sn</span>.<span
                                style="color:rgb(220,220,170)">scatterplot</span>(<span
                                style="color:rgb(156,220,254)">df</span>, <span
                                style="color:rgb(156,220,254)">x</span><span
                                style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(206,145,120)">"Age"</span>, <span
                                style="color:rgb(156,220,254)">y</span><span
                                style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(206,145,120)">"Spending"</span>, <span
                                style="color:rgb(156,220,254)">palette</span><span
                                style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(206,145,120)">"husl"</span>, <span
                                style="color:rgb(156,220,254)">hue</span><span
                                style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(206,145,120)">"Cluster"</span>) <span style="color:rgb(106,153,85)">#
                                use the cluster data to colorize the plot</span></div>
                <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">show</span>()
                </div><br>
                <div><span style="color:rgb(106,153,85)"># example 3 - just 2 clusters</span></div>
                <div><span style="color:rgb(156,220,254)">model</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">KMeans</span>(<span
                                style="color:rgb(156,220,254)">n_clusters</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">2</span>)
                        <span style="color:rgb(106,153,85)"># specify the num of clusters in advance</span></div>
                <div><span style="color:rgb(79,193,255)">X</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(156,220,254)">df</span>[[<span
                                style="color:rgb(206,145,120)">"Age"</span>, <span
                                style="color:rgb(206,145,120)">"Spending"</span>]]</div>
                <div><span style="color:rgb(156,220,254)">model</span>.<span
                                style="color:rgb(220,220,170)">fit</span>(<span style="color:rgb(79,193,255)">X</span>)
                </div>
                <div><span style="color:rgb(156,220,254)">df</span>[<span
                                style="color:rgb(206,145,120)">"Cluster"</span>] <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(156,220,254)">model</span>.<span
                                style="color:rgb(156,220,254)">labels_</span></div>
                <div><span style="color:rgb(78,201,176)">sn</span>.<span
                                style="color:rgb(220,220,170)">scatterplot</span>(<span
                                style="color:rgb(156,220,254)">df</span>, <span
                                style="color:rgb(156,220,254)">x</span><span
                                style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(206,145,120)">"Age"</span>, <span
                                style="color:rgb(156,220,254)">y</span><span
                                style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(206,145,120)">"Spending"</span>, <span
                                style="color:rgb(156,220,254)">palette</span><span
                                style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(206,145,120)">"husl"</span>, <span
                                style="color:rgb(156,220,254)">hue</span><span
                                style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(206,145,120)">"Cluster"</span>)</div>
                <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">show</span>()
                </div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"-----------------------<wbr>------- binning "</span>)
                </div><br>
                <div><span style="color:rgb(106,153,85)"># create 3 bins to group high/med/low spending groups (will use
                                this later for prediction using a neural net)</span></div>
                <div><span style="color:rgb(156,220,254)">df</span>[<span
                                style="color:rgb(206,145,120)">"SpendingGroup"</span>] <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">pd</span>.<span
                                style="color:rgb(220,220,170)">cut</span>(<span
                                style="color:rgb(156,220,254)">df</span>[<span
                                style="color:rgb(206,145,120)">"Spending"</span>], <span
                                style="color:rgb(156,220,254)">bins</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">3</span>,
                        <span style="color:rgb(156,220,254)">labels</span><span
                                style="color:rgb(212,212,212)">=</span>(<span style="color:rgb(181,206,168)">0</span>,
                        <span style="color:rgb(181,206,168)">1</span>, <span style="color:rgb(181,206,168)">2</span>))
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">df</span>)
                </div><br>
                <div><span style="color:rgb(206,145,120)">"""</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Gender &nbsp;Age
                                &nbsp;Income &nbsp;Spending SpendingGroup</span></div>
                <div><span style="color:rgb(206,145,120)">CustomerID</span></div>
                <div><span style="color:rgb(206,145,120)">1 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Male &nbsp; 19
                                &nbsp; &nbsp; &nbsp;15 &nbsp; &nbsp; &nbsp; &nbsp;39 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; 1</span></div>
                <div><span style="color:rgb(206,145,120)">2 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Male &nbsp; 21
                                &nbsp; &nbsp; &nbsp;15 &nbsp; &nbsp; &nbsp; &nbsp;81 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; 2</span></div>
                <div><span style="color:rgb(206,145,120)">3 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 20 &nbsp;
                                &nbsp; &nbsp;16 &nbsp; &nbsp; &nbsp; &nbsp; 6 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                0</span></div>
                <div><span style="color:rgb(206,145,120)">4 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 23 &nbsp;
                                &nbsp; &nbsp;16 &nbsp; &nbsp; &nbsp; &nbsp;77 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                2</span></div>
                <div><span style="color:rgb(206,145,120)">5 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 31 &nbsp;
                                &nbsp; &nbsp;17 &nbsp; &nbsp; &nbsp; &nbsp;40 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                1</span></div>
                <div><span style="color:rgb(197,134,192)">... </span><span style="color:rgb(206,145,120)">&nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp;... &nbsp;... &nbsp; &nbsp; ... &nbsp; &nbsp; &nbsp; ...
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ...</span></div>
                <div><span style="color:rgb(206,145,120)">196 &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 35 &nbsp; &nbsp;
                                120 &nbsp; &nbsp; &nbsp; &nbsp;79 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2</span>
                </div>
                <div><span style="color:rgb(206,145,120)">197 &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 45 &nbsp; &nbsp;
                                126 &nbsp; &nbsp; &nbsp; &nbsp;28 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 0</span>
                </div>
                <div><span style="color:rgb(206,145,120)">198 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Male &nbsp; 32 &nbsp;
                                &nbsp; 126 &nbsp; &nbsp; &nbsp; &nbsp;74 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                2</span></div>
                <div><span style="color:rgb(206,145,120)">199 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Male &nbsp; 32 &nbsp;
                                &nbsp; 137 &nbsp; &nbsp; &nbsp; &nbsp;18 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                0</span></div>
                <div><span style="color:rgb(206,145,120)">200 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Male &nbsp; 30 &nbsp;
                                &nbsp; 137 &nbsp; &nbsp; &nbsp; &nbsp;83 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                2</span></div><br>
                <div><span style="color:rgb(206,145,120)">[200 rows x 5 columns]</span></div>
                <div><span style="color:rgb(206,145,120)">"""</span></div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"-----------------------<wbr>------- categorical to numerical "</span>)
                </div><br>
                <div><span style="color:rgb(106,153,85)"># add a new column for gender code, a numerical representation
                                for male/female</span></div>
                <div><span style="color:rgb(106,153,85)"># (we will use this later to input to a neural network)</span>
                </div>
                <div><span style="color:rgb(156,220,254)">df</span>[<span
                                style="color:rgb(206,145,120)">"GenderCode"</span>] <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">LabelEncoder</span>().<span
                                style="color:rgb(220,220,170)">fit_transform</span>(<span
                                style="color:rgb(156,220,254)">d<wbr>f</span>[<span
                                style="color:rgb(206,145,120)">"Gender"</span>])</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">df</span>)
                </div><br>
                <div><span style="color:rgb(206,145,120)">"""</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Gender &nbsp;Age
                                &nbsp;Income &nbsp;Spending SpendingGroup &nbsp;GenderCode</span></div>
                <div><span style="color:rgb(206,145,120)">CustomerID</span></div>
                <div><span style="color:rgb(206,145,120)">1 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Male &nbsp; 19
                                &nbsp; &nbsp; &nbsp;15 &nbsp; &nbsp; &nbsp; &nbsp;39 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; 1 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1</span></div>
                <div><span style="color:rgb(206,145,120)">2 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Male &nbsp; 21
                                &nbsp; &nbsp; &nbsp;15 &nbsp; &nbsp; &nbsp; &nbsp;81 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; 2 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1</span></div>
                <div><span style="color:rgb(206,145,120)">3 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 20 &nbsp;
                                &nbsp; &nbsp;16 &nbsp; &nbsp; &nbsp; &nbsp; 6 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                0 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 0</span></div>
                <div><span style="color:rgb(206,145,120)">4 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 23 &nbsp;
                                &nbsp; &nbsp;16 &nbsp; &nbsp; &nbsp; &nbsp;77 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                2 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 0</span></div>
                <div><span style="color:rgb(206,145,120)">5 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 31 &nbsp;
                                &nbsp; &nbsp;17 &nbsp; &nbsp; &nbsp; &nbsp;40 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                1 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 0</span></div>
                <div><span style="color:rgb(197,134,192)">... </span><span style="color:rgb(206,145,120)">&nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp;... &nbsp;... &nbsp; &nbsp; ... &nbsp; &nbsp; &nbsp; ...
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ... &nbsp; &nbsp; &nbsp; &nbsp; ...</span></div>
                <div><span style="color:rgb(206,145,120)">196 &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 35 &nbsp; &nbsp;
                                120 &nbsp; &nbsp; &nbsp; &nbsp;79 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2 &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; 0</span></div>
                <div><span style="color:rgb(206,145,120)">197 &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 45 &nbsp; &nbsp;
                                126 &nbsp; &nbsp; &nbsp; &nbsp;28 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 0 &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; 0</span></div>
                <div><span style="color:rgb(206,145,120)">198 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Male &nbsp; 32 &nbsp;
                                &nbsp; 126 &nbsp; &nbsp; &nbsp; &nbsp;74 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1</span></div>
                <div><span style="color:rgb(206,145,120)">199 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Male &nbsp; 32 &nbsp;
                                &nbsp; 137 &nbsp; &nbsp; &nbsp; &nbsp;18 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 0
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1</span></div>
                <div><span style="color:rgb(206,145,120)">200 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Male &nbsp; 30 &nbsp;
                                &nbsp; 137 &nbsp; &nbsp; &nbsp; &nbsp;83 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1</span></div><br>
                <div><span style="color:rgb(206,145,120)">[200 rows x 6 columns]</span></div>
                <div><span style="color:rgb(206,145,120)">"""</span></div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"-----------------------<wbr>------- one hot encoding "</span>)
                </div><span class="im"><br>
                        <div><span style="color:rgb(156,220,254)">df</span> <span
                                        style="color:rgb(212,212,212)">=</span> <span
                                        style="color:rgb(78,201,176)">pd</span>.<span
                                        style="color:rgb(220,220,170)">read_csv</span>(<span
                                        style="color:rgb(206,145,120)">"mall_customers.<wbr>csv"</span>, <span
                                        style="color:rgb(156,220,254)">index_col</span><span
                                        style="color:rgb(212,212,212)">=</span><span
                                        style="color:rgb(181,206,168)">0</span>)</div>
                        <div><span style="color:rgb(156,220,254)">df</span>.<span
                                        style="color:rgb(156,220,254)">columns</span> <span
                                        style="color:rgb(212,212,212)">=</span> [<span
                                        style="color:rgb(206,145,120)">"Gender"</span>, <span
                                        style="color:rgb(206,145,120)">"Age"</span>, <span
                                        style="color:rgb(206,145,120)">"Income"</span>, <span
                                        style="color:rgb(206,145,120)">"Spending"</span>]</div><br>
                </span>
                <div><span style="color:rgb(156,220,254)">df</span>[<span
                                style="color:rgb(206,145,120)">"SpendingGroup"</span>] <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">pd</span>.<span
                                style="color:rgb(220,220,170)">cut</span>(<span
                                style="color:rgb(156,220,254)">df</span>[<span
                                style="color:rgb(206,145,120)">"Spending"</span>], <span
                                style="color:rgb(156,220,254)">bins</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">3</span>,
                        <span style="color:rgb(156,220,254)">labels</span><span
                                style="color:rgb(212,212,212)">=</span>(<span style="color:rgb(181,206,168)">0</span>,
                        <span style="color:rgb(181,206,168)">1</span>, <span style="color:rgb(181,206,168)">2</span>))
                </div>
                <div><span style="color:rgb(156,220,254)">df</span>[<span
                                style="color:rgb(206,145,120)">"GenderCode"</span>] <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">LabelEncoder</span>().<span
                                style="color:rgb(220,220,170)">fit_transform</span>(<span
                                style="color:rgb(156,220,254)">d<wbr>f</span>[<span
                                style="color:rgb(206,145,120)">"Gender"</span>])</div><br>
                <div><span style="color:rgb(156,220,254)">y</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(220,220,170)">to_categorical</span>(<span
                                style="color:rgb(156,220,254)">df</span>[<span
                                style="color:rgb(206,145,120)">"<wbr>SpendingGroup"</span>])</div><br>
                <div><span style="color:rgb(106,153,85)"># run to_categorical on the column SpendingGroup </span></div>
                <div><span style="color:rgb(106,153,85)"># returns a conversion to a 'one hot encoding' form</span>
                </div>
                <div><span style="color:rgb(106,153,85)"># SpendingGroup has values 0, 1, 2</span></div>
                <div><span style="color:rgb(106,153,85)"># to_categorical has transformed this into the matrix
                                below</span></div>
                <div><span style="color:rgb(106,153,85)"># each row corresponds to a data sample. </span></div>
                <div><span style="color:rgb(106,153,85)"># &nbsp; if SpendingGroup = 0, this is converted to [1. 0. 0.]
                                - the index/position of the 1 determines the original value</span></div>
                <div><span style="color:rgb(106,153,85)"># &nbsp; if SpendingGroup = 1, this is converted to [0. 1.
                                0.]</span></div>
                <div><span style="color:rgb(106,153,85)"># &nbsp; if SpendingGroup = 2, this is converted to [0. 0.
                                1.]</span></div><br>
                <div><span style="color:rgb(106,153,85)"># this encoding makes it easier to feed the data into a neural
                                network</span></div>
                <div><span style="color:rgb(106,153,85)"># the neural network will be trained to predict the value of
                                SpendingGroup, and will have 3 outputs</span></div>
                <div><span style="color:rgb(106,153,85)"># that will look like: [1. 0. 0.] to indicate the predicted
                                value of SpendingGroup</span></div><br>
                <div><span style="color:rgb(106,153,85)"># print(y)</span></div><br>
                <div><span style="color:rgb(206,145,120)">"""</span></div>
                <div><span style="color:rgb(206,145,120)">[[0. 1. 0.]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[0. 0. 1.]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[1. 0. 0.] &nbsp; &nbsp; # this corresponds to a
                                SpendingGroup value of zero</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[0. 0. 1.]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[0. 1. 0.] &nbsp; &nbsp; # this corresponds to a
                                SpendingGroup value of 1</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[0. 0. 1.] &nbsp; &nbsp; # this corresponds to a
                                SpendingGroup value of 2</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[1. 0. 0.]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[0. 0. 1.]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;...</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[0. 0. 1.]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[1. 0. 0.]</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp;[0. 0. 1.]]</span></div>
                <div><span style="color:rgb(206,145,120)">"""</span></div><br>
                <div><span style="color:rgb(106,153,85)"># print(df)</span></div><br>
                <div><span style="color:rgb(206,145,120)">"""</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Gender &nbsp;Age
                                &nbsp;Income &nbsp;Spending SpendingGroup &nbsp;GenderCode</span></div>
                <div><span style="color:rgb(206,145,120)">CustomerID</span></div>
                <div><span style="color:rgb(206,145,120)">1 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Male &nbsp; 19
                                &nbsp; &nbsp; &nbsp;15 &nbsp; &nbsp; &nbsp; &nbsp;39 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; 1 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1</span></div>
                <div><span style="color:rgb(206,145,120)">2 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Male &nbsp; 21
                                &nbsp; &nbsp; &nbsp;15 &nbsp; &nbsp; &nbsp; &nbsp;81 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; 2 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1</span></div>
                <div><span style="color:rgb(206,145,120)">3 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 20 &nbsp;
                                &nbsp; &nbsp;16 &nbsp; &nbsp; &nbsp; &nbsp; 6 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                0 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 0</span></div>
                <div><span style="color:rgb(206,145,120)">4 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 23 &nbsp;
                                &nbsp; &nbsp;16 &nbsp; &nbsp; &nbsp; &nbsp;77 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                2 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 0</span></div>
                <div><span style="color:rgb(206,145,120)">5 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 31 &nbsp;
                                &nbsp; &nbsp;17 &nbsp; &nbsp; &nbsp; &nbsp;40 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                1 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 0</span></div>
                <div><span style="color:rgb(197,134,192)">... </span><span style="color:rgb(206,145,120)">&nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp;... &nbsp;... &nbsp; &nbsp; ... &nbsp; &nbsp; &nbsp; ...
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ... &nbsp; &nbsp; &nbsp; &nbsp; ...</span></div>
                <div><span style="color:rgb(206,145,120)">196 &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 35 &nbsp; &nbsp;
                                120 &nbsp; &nbsp; &nbsp; &nbsp;79 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2 &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; 0</span></div>
                <div><span style="color:rgb(206,145,120)">197 &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 45 &nbsp; &nbsp;
                                126 &nbsp; &nbsp; &nbsp; &nbsp;28 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 0 &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; 0</span></div>
                <div><span style="color:rgb(206,145,120)">198 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Male &nbsp; 32 &nbsp;
                                &nbsp; 126 &nbsp; &nbsp; &nbsp; &nbsp;74 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1</span></div>
                <div><span style="color:rgb(206,145,120)">199 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Male &nbsp; 32 &nbsp;
                                &nbsp; 137 &nbsp; &nbsp; &nbsp; &nbsp;18 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 0
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1</span></div>
                <div><span style="color:rgb(206,145,120)">200 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Male &nbsp; 30 &nbsp;
                                &nbsp; 137 &nbsp; &nbsp; &nbsp; &nbsp;83 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1</span></div><br>
                <div><span style="color:rgb(206,145,120)">[200 rows x 6 columns]</span></div>
                <div><span style="color:rgb(206,145,120)">"""</span></div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"-----------------------<wbr>------- The Predictor Matrix "</span>)
                </div><br>
                <div><span style="color:rgb(106,153,85)"># note: syntax for crating a dataframe</span></div>
                <div><span style="color:rgb(156,220,254)">temp1</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(156,220,254)">df</span>[<span
                                style="color:rgb(206,145,120)">"Age"</span>] &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># returns a data series</span></div>
                <div><span style="color:rgb(156,220,254)">temp2</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(156,220,254)">df</span>[[<span
                                style="color:rgb(206,145,120)">"Age"</span>]] &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># returns a dataframe</span></div><br>
                <div><span style="color:rgb(79,193,255)">X</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(156,220,254)">df</span>[[<span
                                style="color:rgb(206,145,120)">"Age"</span>, <span
                                style="color:rgb(206,145,120)">"Income"</span>, <span
                                style="color:rgb(206,145,120)">"GenderCode"</span>]]</div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(79,193,255)">X</span>)
                </div><br>
                <div><span style="color:rgb(206,145,120)">"""</span></div>
                <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Age &nbsp;Income
                                &nbsp;GenderCode</span></div>
                <div><span style="color:rgb(206,145,120)">CustomerID</span></div>
                <div><span style="color:rgb(206,145,120)">1 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;19 &nbsp; &nbsp;
                                &nbsp;15 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1</span></div>
                <div><span style="color:rgb(206,145,120)">2 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;21 &nbsp; &nbsp;
                                &nbsp;15 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1</span></div>
                <div><span style="color:rgb(206,145,120)">3 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;20 &nbsp; &nbsp;
                                &nbsp;16 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 0</span></div>
                <div><span style="color:rgb(206,145,120)">4 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;23 &nbsp; &nbsp;
                                &nbsp;16 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 0</span></div>
                <div><span style="color:rgb(206,145,120)">5 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;31 &nbsp; &nbsp;
                                &nbsp;17 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 0</span></div>
                <div><span style="color:rgb(197,134,192)">... </span><span style="color:rgb(206,145,120)">&nbsp; &nbsp;
                                &nbsp; &nbsp; ... &nbsp; &nbsp; ... &nbsp; &nbsp; &nbsp; &nbsp; ...</span></div>
                <div><span style="color:rgb(206,145,120)">196 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;35 &nbsp; &nbsp; 120
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 0</span></div>
                <div><span style="color:rgb(206,145,120)">197 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;45 &nbsp; &nbsp; 126
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 0</span></div>
                <div><span style="color:rgb(206,145,120)">198 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;32 &nbsp; &nbsp; 126
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1</span></div>
                <div><span style="color:rgb(206,145,120)">199 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;32 &nbsp; &nbsp; 137
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1</span></div>
                <div><span style="color:rgb(206,145,120)">200 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;30 &nbsp; &nbsp; 137
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1</span></div><br>
                <div><span style="color:rgb(206,145,120)">[200 rows x 3 columns]</span></div>
                <div><span style="color:rgb(206,145,120)">"""</span></div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"-----------------------<wbr>------- test train split "</span>)
                </div><br>
                <div><span style="color:rgb(106,153,85)"># split X and y data into testing and training segments</span>
                </div>
                <div><span style="color:rgb(156,220,254)">X_train</span>, <span
                                style="color:rgb(156,220,254)">X_test</span>, <span
                                style="color:rgb(156,220,254)">y_train</span>, <span
                                style="color:rgb(156,220,254)">y_test</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(220,220,170)">train_test_split</span>(<span
                                style="color:rgb(79,193,255)">X</span>, <span style="color:rgb(156,220,254)">y</span>,
                        <span style="color:rgb(156,220,254)">shuffle</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(86,156,214)">True</span>,
                        <span style="color:rgb(156,220,254)">test_size</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">0.3</span>)
                        &nbsp;<span style="color:rgb(106,153,85)"># test_size=0.3 means use 1/3 of the data</span></div>
                <br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(220,220,170)">len</span>(<span
                                style="color:rgb(156,220,254)">X_train</span>)) &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># we have 140 rows of X data (age, income, genderCode) for
                                training</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(220,220,170)">len</span>(<span
                                style="color:rgb(156,220,254)">y_train</span>)) &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># we have 140 rows of y data (SpendingGroup as a 1 hot
                                encoding) for training</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(220,220,170)">len</span>(<span
                                style="color:rgb(156,220,254)">X_test</span>)) &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># 60 X values for testing</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(220,220,170)">len</span>(<span
                                style="color:rgb(156,220,254)">y_test</span>)) &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># 60 y values for testing</span></div><br>
                <div><span style="color:rgb(206,145,120)">"""</span></div>
                <div><span style="color:rgb(206,145,120)">140</span></div>
                <div><span style="color:rgb(206,145,120)">140</span></div>
                <div><span style="color:rgb(206,145,120)">60</span></div>
                <div><span style="color:rgb(206,145,120)">60</span></div>
                <div><span style="color:rgb(206,145,120)">"""</span></div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"-----------------------<wbr>------- scaling "</span>)
                </div><br>
                <div><span style="color:rgb(106,153,85)"># 2 reasons for scaling your data:</span></div>
                <div><span style="color:rgb(106,153,85)"># &nbsp; &nbsp;1. you may have data series that exist on wildly
                                different scales. Eg. temp (values are between 0 - 100) </span></div>
                <div><span style="color:rgb(106,153,85)"># &nbsp; &nbsp; &nbsp; vs. micro meters (values are between -1M
                                - 1M)</span></div>
                <div><span style="color:rgb(106,153,85)"># &nbsp; &nbsp;2. training a neural network may encounter
                                issues with overflow (ie. dealing with huge values/numbers that </span></div>
                <div><span style="color:rgb(106,153,85)"># &nbsp; &nbsp; &nbsp; don't fit in a normal size byte)</span>
                </div>
                <div><span style="color:rgb(106,153,85)"># &nbsp; &nbsp; &nbsp; &nbsp;- for training a neural net, input
                                values in the range from zero to 1 work well</span></div><br>
                <div><span style="color:rgb(156,220,254)">scaler</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">StandardScaler</span>()</div>
                <div><span style="color:rgb(156,220,254)">X_train</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(156,220,254)">scaler</span>.<span
                                style="color:rgb(220,220,170)">fit_transform</span>(<span
                                style="color:rgb(156,220,254)">X_train</span>) &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># the scaler will scale the x_train segment.</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)">#
                                fit_transform: setup the scaler (figure out the parameters) and then transform</span>
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)">#
                                the configuration will scale the data such that the average is zero, variance = 1</span>
                </div>
                <div><span style="color:rgb(156,220,254)">X_test</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(156,220,254)">scaler</span>.<span
                                style="color:rgb(220,220,170)">transform</span>(<span
                                style="color:rgb(156,220,254)">X_test</span>) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># transform: we do not need to do the setup operation
                                anymore, just the transform</span></div><br>
                <div><span style="color:rgb(106,153,85)"># the testing data X_test needs to be separate (a different
                                segment) than the training data, so that it is tested with</span></div>
                <div><span style="color:rgb(106,153,85)"># values it hasn't seen before. </span></div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"-----------------------<wbr>------- creating the neural network "</span>)
                </div><br>
                <div><span style="color:rgb(106,153,85)"># our model passes data through a sequence of layers. In
                                reality, neurons are connected </span></div>
                <div><span style="color:rgb(106,153,85)"># to each other in a web, but these take a lot longer to
                                train.</span></div>
                <div><span style="color:rgb(106,153,85)"># add a layer to our neural net (a dense layer - every neuron
                                in this layer is densly </span></div>
                <div><span style="color:rgb(106,153,85)"># connected to every neuron in the next and previous
                                layers)</span></div>
                <div><span style="color:rgb(106,153,85)"># activation="relu" - this means that every neuron will look at
                                each of it's inputs</span></div>
                <div><span style="color:rgb(106,153,85)"># (which are from other neurons, except the input layer which
                                is our data set)</span></div>
                <div><span style="color:rgb(106,153,85)"># each of these inputs will be multiplied by a weight and then
                                added together</span></div>
                <div><span style="color:rgb(106,153,85)"># and then we will run that through a non-linear function
                                (which is vital for making a neural net work).</span></div>
                <div><span style="color:rgb(106,153,85)"># In this example, we use a popular non-linear function called
                                'relu'</span></div>
                <div><span style="color:rgb(106,153,85)"># &nbsp;- all it does is: if the input is &lt;0 make it 0;
                                otherwise don't change it</span></div>
                <div><span style="color:rgb(156,220,254)">model</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">Sequential</span>() &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
                <div><span style="color:rgb(156,220,254)">model</span>.<span
                                style="color:rgb(220,220,170)">add</span>(<span
                                style="color:rgb(78,201,176)">Dense</span>(<span
                                style="color:rgb(181,206,168)">200</span>, <span
                                style="color:rgb(156,220,254)">activation</span><span
                                style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(206,145,120)">"relu"</span>)) &nbsp; &nbsp; &nbsp; &nbsp;</div><br>
                <div><span style="color:rgb(156,220,254)">model</span>.<span
                                style="color:rgb(220,220,170)">add</span>(<span
                                style="color:rgb(78,201,176)">Dense</span>(<span
                                style="color:rgb(181,206,168)">100</span>, <span
                                style="color:rgb(156,220,254)">activation</span><span
                                style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(206,145,120)">"relu"</span>)) &nbsp; &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># typically the output size gets smaller with each
                                layer</span></div><br>
                <div><span style="color:rgb(106,153,85)"># we need our final output size to be 3; to predict our 3 value
                                output to match out SpendingGroup category</span></div>
                <div><span style="color:rgb(106,153,85)"># our final activation is softmax - this is a function that
                                ensures that all the outputs adds up to 1</span></div>
                <div><span style="color:rgb(106,153,85)"># so we can interpret them as probabilities. We will take the
                                largest value of these as the prediction from our model</span></div>
                <div><span style="color:rgb(156,220,254)">model</span>.<span
                                style="color:rgb(220,220,170)">add</span>(<span
                                style="color:rgb(78,201,176)">Dense</span>(<span
                                style="color:rgb(181,206,168)">3</span>, <span
                                style="color:rgb(156,220,254)">activation</span><span
                                style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(206,145,120)">"softmax"</span>)) &nbsp; &nbsp; &nbsp; </div><br>
                <div><span style="color:rgb(156,220,254)">model</span>.<span
                                style="color:rgb(220,220,170)">compile</span>(<span
                                style="color:rgb(156,220,254)">loss</span><span
                                style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(206,145,120)">"<wbr>categorical_crossentropy"</span>, <span
                                style="color:rgb(156,220,254)">optimizer</span><span
                                style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(206,145,120)">"adam"</span>, <span
                                style="color:rgb(156,220,254)">metrics</span><span
                                style="color:rgb(212,212,212)">=</span>[<span
                                style="color:rgb(78,201,176)">Accuracy</span>()])</div>
                <div><span style="color:rgb(106,153,85)"># need to specify a loss function</span></div>
                <div><span style="color:rgb(106,153,85)"># categorical_crossentropy - need to go into information theory
                                to understand this.</span></div>
                <div><span style="color:rgb(106,153,85)"># All we need to know is that the loss function of
                                categorical_crossentropy works really well with softmax.</span></div>
                <div><span style="color:rgb(106,153,85)"># what is a loss function? It takes the output of the neural
                                net and compares it with the desired output, </span></div>
                <div><span style="color:rgb(106,153,85)"># and boils it all down to a single figure, which ranks how
                                well the neural net performed on that run. </span></div>
                <div><span style="color:rgb(106,153,85)"># The lower the loss, the better the result (ie. closer the fit
                                of the predicted value with the desired value). </span></div>
                <div><span style="color:rgb(106,153,85)"># optimizer="adam"; we train the network by adjusting the
                                weights (that multiply the inputs of each neuron) </span></div>
                <div><span style="color:rgb(106,153,85)"># so we need some technique to do that. And Adam is a variant
                                of type 'gradient descent' (one of the oldest techniques)</span></div>
                <div><span style="color:rgb(106,153,85)"># metrics=[Accuracy()] - accuracy scores just note how many
                                correct predictions the model has made as you go along</span></div><br>
                <div><span style="color:rgb(156,220,254)">model</span>.<span
                                style="color:rgb(220,220,170)">fit</span>(<span
                                style="color:rgb(156,220,254)">X_train</span>, <span
                                style="color:rgb(156,220,254)">y_train</span>, <span
                                style="color:rgb(156,220,254)">epochs</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">30</span>)
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># epochs - one end-to-end
                                run is an epoch</span></div><br>
                <div><span style="color:rgb(106,153,85)"># once the model is trained, you can save the neural net as a
                                binary file and use it in other programs</span></div><br>
                <div><span style="color:rgb(156,220,254)">y_predicted</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(156,220,254)">model</span>.<span
                                style="color:rgb(220,220,170)">predict</span>(<span
                                style="color:rgb(156,220,254)">X_test</span>) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <span style="color:rgb(106,153,85)"># we will check how our model performs on the test
                                set</span></div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"-----------------------<wbr>------- evaluating accuracy "</span>)
                </div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"Score:"</span>, <span
                                style="color:rgb(220,220,170)">accuracy_score</span>(<span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(220,220,170)">argmax</span>(<span
                                style="color:rgb(156,220,254)">y_<wbr>test</span>, <span
                                style="color:rgb(156,220,254)">axis</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">1</span>),
                        <span style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(220,220,170)">argmax</span>(<span
                                style="color:rgb(156,220,254)">y_predicted</span>, <span
                                style="color:rgb(156,220,254)">axis</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">1</span>)))
                </div><br>
                <div><span style="color:rgb(206,145,120)">"""</span></div>
                <div><span style="color:rgb(206,145,120)">Epoch 1/30</span></div>
                <div><span style="color:rgb(206,145,120)">5/5 ━━━━━━━━━━━━━━━━━━━━ 1s 6ms/step - accuracy: 0.0000e+00 -
                                loss: 1.0620 &nbsp;</span></div>
                <div><span style="color:rgb(206,145,120)">Epoch 2/30</span></div>
                <div><span style="color:rgb(206,145,120)">5/5 ━━━━━━━━━━━━━━━━━━━━ 0s 5ms/step - accuracy: 0.0000e+00 -
                                loss: 0.9777 </span></div>
                <div><span style="color:rgb(206,145,120)">Epoch 3/30</span></div>
                <div><span style="color:rgb(206,145,120)">5/5 ━━━━━━━━━━━━━━━━━━━━ 0s 5ms/step - accuracy: 0.0000e+00 -
                                loss: 0.9280 </span></div>
                <div><span style="color:rgb(206,145,120)">Epoch 4/30</span></div>
                <div><span style="color:rgb(206,145,120)">5/5 ━━━━━━━━━━━━━━━━━━━━ 0s 4ms/step - accuracy: 0.0000e+00 -
                                loss: 0.8821 </span></div>
                <div><span style="color:rgb(206,145,120)">Epoch 28/30</span></div>
                <div><span style="color:rgb(206,145,120)">5/5 ━━━━━━━━━━━━━━━━━━━━ 0s 5ms/step - accuracy: 0.0000e+00 -
                                loss: 0.4983 </span></div>
                <div><span style="color:rgb(206,145,120)">Epoch 29/30</span></div>
                <div><span style="color:rgb(206,145,120)">5/5 ━━━━━━━━━━━━━━━━━━━━ 0s 4ms/step - accuracy: 0.0000e+00 -
                                loss: 0.4909 </span></div>
                <div><span style="color:rgb(206,145,120)">Epoch 30/30</span></div>
                <div><span style="color:rgb(206,145,120)">5/5 ━━━━━━━━━━━━━━━━━━━━ 0s 5ms/step - accuracy: 0.0000e+00 -
                                loss: 0.4928 </span></div>
                <div><span style="color:rgb(206,145,120)">2/2 ━━━━━━━━━━━━━━━━━━━━ 0s 32ms/step</span></div><br>
                <div><span style="color:rgb(206,145,120)">------------------------------ evaluating accuracy</span>
                </div>
                <div><span style="color:rgb(206,145,120)">Score: 0.7666666666666667</span></div>
                <div><span style="color:rgb(206,145,120)">"""</span></div>
        </div>
</div>
        `

        const chapter1 = `
  <div dir="ltr">
    <div style="color:rgb(204,204,204);font-family:monospace;font-size:14px;line-height:18px;">
        <div><span style="color:rgb(197,134,192)">import</span> <span style="color:rgb(78,201,176)">numpy</span> <span
                style="color:rgb(197,134,192)">as</span> <span style="color:rgb(78,201,176)">np</span></div>
        <div><span style="color:rgb(197,134,192)">import</span> <span
                style="color:rgb(78,201,176)">matplotlib</span>.<span style="color:rgb(78,201,176)">pyplot</span> <span
                style="color:rgb(197,134,192)">as</span> <span style="color:rgb(78,201,176)">plt</span></div>
        <div><span style="color:rgb(197,134,192)">from</span> <span style="color:rgb(78,201,176)">scipy</span> <span
                style="color:rgb(197,134,192)">import</span> <span style="color:rgb(78,201,176)">stats</span></div><br>
        <div><span style="color:rgb(106,153,85)"># create data: house sizes and prices</span></div>
        <div><span style="color:rgb(156,220,254)">sizes</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">array</span>([<span
                style="color:rgb(181,206,168)">1000</span>,<span style="color:rgb(181,206,168)">1500</span>,<span
                style="color:rgb(181,206,168)">2000</span>,<span style="color:rgb(181,206,168)">2500</span>]<wbr>)</div>
        <div><span style="color:rgb(156,220,254)">prices</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">array</span>([<span
                style="color:rgb(181,206,168)">200000</span>, <span style="color:rgb(181,206,168)">300000</span>, <span
                style="color:rgb(181,206,168)">400000</span>, <span style="color:rgb(181,206,168)">500000</span>])</div>
        <br>
        <div><span style="color:rgb(106,153,85)"># plot</span></div>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">scatter</span>(<span
                style="color:rgb(156,220,254)">sizes</span>, <span style="color:rgb(156,220,254)">prices</span>, <span
                style="color:rgb(156,220,254)">colorizer</span><span style="color:rgb(212,212,212)">=</span><span
                style="color:rgb(206,145,120)">'blue'</span>)</div>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">xlabel</span>(<span
                style="color:rgb(206,145,120)">'size'</span>)</div>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">ylabel</span>(<span
                style="color:rgb(206,145,120)">'price'</span>)</div>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">title</span>(<span
                style="color:rgb(206,145,120)">'house prices vs. size'</span>)</div>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">show</span>()</div><br>
        <div><span style="color:rgb(106,153,85)"># linear regression with scipy</span></div>
        <div><span style="color:rgb(156,220,254)">slope</span>, <span style="color:rgb(156,220,254)">intercept</span>,
            <span style="color:rgb(156,220,254)">r_value</span>, <span style="color:rgb(156,220,254)">p_value</span>,
            <span style="color:rgb(156,220,254)">std_err</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">stats</span>.<span style="color:rgb(220,220,170)">linregress</span>(<span
                style="color:rgb(156,220,254)">sizes</span>, <span style="color:rgb(156,220,254)">prices</span>)
        </div>
        <br>
        <div><span style="color:rgb(106,153,85)"># create line for plotting</span></div>
        <div><span style="color:rgb(156,220,254)">line</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(156,220,254)">slope</span> <span style="color:rgb(220,220,170)">*</span> <span
                style="color:rgb(156,220,254)">sizes</span> <span style="color:rgb(212,212,212)">+</span> <span
                style="color:rgb(156,220,254)">intercept</span></div><br>
        <div><span style="color:rgb(106,153,85)"># example 1</span></div>
        <div><span style="color:rgb(106,153,85)"># plot</span></div>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">scatter</span>(<span
                style="color:rgb(156,220,254)">sizes</span>, <span style="color:rgb(156,220,254)">prices</span>, <span
                style="color:rgb(156,220,254)">colorizer</span><span style="color:rgb(212,212,212)">=</span><span
                style="color:rgb(206,145,120)">'blue'</span>, <span style="color:rgb(156,220,254)">label</span><span
                style="color:rgb(212,212,212)">=</span><span style="color:rgb(206,145,120)">'data'</span>)</div>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">plot</span>(<span
                style="color:rgb(156,220,254)">sizes</span>, <span style="color:rgb(156,220,254)">line</span>, <span
                style="color:rgb(156,220,254)">color</span><span style="color:rgb(212,212,212)">=</span><span
                style="color:rgb(206,145,120)">'red'</span>, <span style="color:rgb(156,220,254)">label</span><span
                style="color:rgb(212,212,212)">=</span><span style="color:rgb(206,145,120)">'fit line'</span>)</div>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">xlabel</span>(<span
                style="color:rgb(206,145,120)">'size'</span>)</div>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">ylabel</span>(<span
                style="color:rgb(206,145,120)">'price'</span>)</div>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">title</span>(<span
                style="color:rgb(206,145,120)">'house prices vs. size'</span>)</div>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">legend</span>()</div>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">savefig</span>(<span
                style="color:rgb(206,145,120)">'math-stats/plot1.<wbr>png'</span>)</div>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">show</span>()</div><br>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(86,156,214)">f</span><span
                style="color:rgb(206,145,120)">"slope: </span><span style="color:rgb(86,156,214)">{</span><span
                style="color:rgb(156,220,254)">slope</span><span style="color:rgb(86,156,214)">}</span><span
                style="color:rgb(206,145,120)">, intercept: </span><span style="color:rgb(86,156,214)">{</span><span
                style="color:rgb(156,220,254)">intercept</span><span style="color:rgb(86,156,214)">}</span><span
                style="color:rgb(206,145,120)">, r-squared: </span><span style="color:rgb(86,156,214)">{</span><span
                style="color:rgb(156,220,254)">r_value</span><span style="color:rgb(212,212,212)">**</span><span
                style="color:rgb(181,206,168)">2</span><span style="color:rgb(86,156,214)">}</span><span
                style="color:rgb(206,145,120)">"</span>)</div>
        <div><span style="color:rgb(156,220,254)">statistics</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">stats</span>.<span style="color:rgb(220,220,170)">describe</span>(<span
                style="color:rgb(156,220,254)">prices</span>)</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">statistics</span>)
        </div><br><br>
        <div><span style="color:rgb(106,153,85)"># example 2</span></div>
        <div><span style="color:rgb(156,220,254)">engine_sizes</span> <span style="color:rgb(212,212,212)">=</span>
            <span style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">array</span>([<span
                style="color:rgb(181,206,168)">1.5</span>,<span style="color:rgb(181,206,168)">2.0</span>,<span
                style="color:rgb(181,206,168)">2.5</span>,<span style="color:rgb(181,206,168)">3.0</span>,<span
                style="color:rgb(181,206,168)">3.5</span>]<wbr>)
        </div>
        <div><span style="color:rgb(156,220,254)">prices</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">array</span>([<span
                style="color:rgb(181,206,168)">15000</span>,<span style="color:rgb(181,206,168)">20000</span>,<span
                style="color:rgb(181,206,168)">25000</span>,<span style="color:rgb(181,206,168)">30<wbr>000</span>,<span
                style="color:rgb(181,206,168)">35000</span>])</div><br>
        <div><span style="color:rgb(86,156,214)">def</span> <span
                style="color:rgb(220,220,170)">calculate_price</span>(<span
                style="color:rgb(156,220,254)">engine_size</span>):</div>
        <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                style="color:rgb(156,220,254)">engine_size</span> <span style="color:rgb(212,212,212)">*</span> <span
                style="color:rgb(181,206,168)">10000</span> <span style="color:rgb(212,212,212)">+</span> <span
                style="color:rgb(181,206,168)">5000</span></div><br>
        <div><span style="color:rgb(156,220,254)">mean_price</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">mean</span>(<span
                style="color:rgb(156,220,254)">prices</span>)</div>
        <div><span style="color:rgb(156,220,254)">std_price</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">std</span>(<span
                style="color:rgb(156,220,254)">prices</span>)</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(86,156,214)">f</span><span
                style="color:rgb(206,145,120)">"mean price: $</span><span style="color:rgb(86,156,214)">{</span><span
                style="color:rgb(156,220,254)">mean_price</span><span style="color:rgb(86,156,214)">:.2f}</span><span
                style="color:rgb(206,145,120)">, standard deviation: </span><span
                style="color:rgb(86,156,214)">{</span><span style="color:rgb(156,220,254)">std_price</span><span
                style="color:rgb(86,156,214)">:.2f}</span><span style="color:rgb(206,145,120)">"</span>)</div><br>
        <div><span style="color:rgb(156,220,254)">predicted_prices</span> <span style="color:rgb(212,212,212)">=</span>
            <span style="color:rgb(220,220,170)">calculate_price</span>(<span
                style="color:rgb(156,220,254)">engine_sizes</span>)
        </div>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">scatter</span>(<span
                style="color:rgb(156,220,254)">engine_sizes</span>, <span style="color:rgb(156,220,254)">prices</span>,
            <span style="color:rgb(156,220,254)">colorizer</span><span style="color:rgb(212,212,212)">=</span><span
                style="color:rgb(206,145,120)">'blue'</span>, <span style="color:rgb(156,220,254)">label</span><span
                style="color:rgb(212,212,212)">=</span><span style="color:rgb(206,145,120)">'actual prices'</span>)
        </div>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">plot</span>(<span
                style="color:rgb(156,220,254)">engine_sizes</span>, <span
                style="color:rgb(156,220,254)">predicted_prices</span>, <span
                style="color:rgb(156,220,254)">color</span><span style="color:rgb(212,212,212)">=</span><span
                style="color:rgb(206,145,120)">'red'</span>, <span style="color:rgb(156,220,254)">label</span><span
                style="color:rgb(212,212,212)">=</span><span style="color:rgb(206,145,120)">'predicted prices'</span>)
        </div>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">xlabel</span>(<span
                style="color:rgb(206,145,120)">'engine size'</span>)</div>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">ylabel</span>(<span
                style="color:rgb(206,145,120)">'price'</span>)</div>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">title</span>(<span
                style="color:rgb(206,145,120)">'car price vs. engine size'</span>)</div>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">legend</span>()</div>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">savefig</span>(<span
                style="color:rgb(206,145,120)">'math-stats/plot2.<wbr>png'</span>)</div>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">show</span>()</div>
        <div class="yj6qo"></div>
        <div class="adL"><br><br></div>
    </div>
</div>
  `

        const chapter2 = `
  <div dir="ltr">
  <div style="color:rgb(204,204,204);font-family:monospace;font-size:14px;line-height:18px;">
        <span class="im">
            <div><span style="color:rgb(197,134,192)">import</span> <span style="color:rgb(78,201,176)">numpy</span>
                <span style="color:rgb(197,134,192)">as</span> <span style="color:rgb(78,201,176)">np</span>
            </div>
            <div><span style="color:rgb(197,134,192)">import</span> <span
                    style="color:rgb(78,201,176)">matplotlib</span>.<span style="color:rgb(78,201,176)">pyplot</span>
                <span style="color:rgb(197,134,192)">as</span> <span style="color:rgb(78,201,176)">plt</span>
            </div>
            <div><span style="color:rgb(197,134,192)">from</span> <span style="color:rgb(78,201,176)">scipy</span> <span
                    style="color:rgb(197,134,192)">import</span> <span style="color:rgb(78,201,176)">stats</span></div>
            <br>
        </span>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span
                style="color:rgb(206,145,120)">"-----------------------<wbr>------------------------------<wbr>---------------------"</span>)
        </div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"Linear
                algebra"</span>)</div><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"---------- define
                vectors "</span>)</div>
        <div><span style="color:rgb(156,220,254)">v1</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">array</span>([<span
                style="color:rgb(181,206,168)">2</span>, <span style="color:rgb(181,206,168)">3</span>])</div>
        <div><span style="color:rgb(156,220,254)">v2</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">array</span>([<span
                style="color:rgb(181,206,168)">4</span>, <span style="color:rgb(181,206,168)">1</span>])</div><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"---------- dot
                product "</span>)</div>
        <div><span style="color:rgb(156,220,254)">dot_product</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">dot</span>(<span
                style="color:rgb(156,220,254)">v1</span>, <span style="color:rgb(156,220,254)">v2</span>)</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(86,156,214)">f</span><span
                style="color:rgb(206,145,120)">"dot product: </span><span style="color:rgb(86,156,214)">{</span><span
                style="color:rgb(156,220,254)">dot_product</span><span style="color:rgb(86,156,214)">}</span><span
                style="color:rgb(206,145,120)">"</span>)</div>
        <div><span style="color:rgb(206,145,120)">"""</span></div>
        <div><span style="color:rgb(206,145,120)">dot product: 11</span></div>
        <div><span style="color:rgb(206,145,120)">"""</span></div><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"---------- norm
                (length of a vector) "</span>)</div>
        <div><span style="color:rgb(156,220,254)">norm_v1</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(78,201,176)">linalg</span>.<span
                style="color:rgb(220,220,170)">norm</span>(<span style="color:rgb(156,220,254)">v1</span>)</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(86,156,214)">f</span><span
                style="color:rgb(206,145,120)">"norm v1: </span><span style="color:rgb(86,156,214)">{</span><span
                style="color:rgb(156,220,254)">norm_v1</span><span style="color:rgb(86,156,214)">}</span><span
                style="color:rgb(206,145,120)">"</span>)</div>
        <div><span style="color:rgb(206,145,120)">"""</span></div>
        <div><span style="color:rgb(206,145,120)">norm v1: 3.605551275463989</span></div>
        <div><span style="color:rgb(206,145,120)">"""</span></div><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span
                style="color:rgb(206,145,120)">"-----------------------<wbr>------------------------------<wbr>---------------------"</span>)
        </div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"matrix
                algebra"</span>)</div><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"---------- define
                matricies "</span>)</div>
        <div><span style="color:rgb(79,193,255)">A</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">array</span>([[<span
                style="color:rgb(181,206,168)">1</span>,<span style="color:rgb(181,206,168)">2</span>], [<span
                style="color:rgb(181,206,168)">3</span>,<span style="color:rgb(181,206,168)">4</span>]])</div>
        <div><span style="color:rgb(79,193,255)">B</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">array</span>([[<span
                style="color:rgb(181,206,168)">5</span>,<span style="color:rgb(181,206,168)">6</span>], [<span
                style="color:rgb(181,206,168)">7</span>,<span style="color:rgb(181,206,168)">8</span>]])</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(86,156,214)">f</span><span
                style="color:rgb(206,145,120)">"A: </span><span style="color:rgb(86,156,214)">{</span><span
                style="color:rgb(79,193,255)">A</span><span style="color:rgb(86,156,214)">}</span><span
                style="color:rgb(206,145,120)">, B: </span><span style="color:rgb(86,156,214)">{</span><span
                style="color:rgb(79,193,255)">B</span><span style="color:rgb(86,156,214)">}</span><span
                style="color:rgb(206,145,120)">"</span>)</div><br>
        <div><span style="color:rgb(106,153,85)"># addition</span></div>
        <div><span style="color:rgb(156,220,254)">sum_AB</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(79,193,255)">A</span> <span style="color:rgb(220,220,170)">+</span> <span
                style="color:rgb(79,193,255)">B</span></div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(86,156,214)">f</span><span
                style="color:rgb(206,145,120)">"A + B: </span><span style="color:rgb(86,156,214)">{</span><span
                style="color:rgb(156,220,254)">sum_AB</span><span style="color:rgb(86,156,214)">}</span><span
                style="color:rgb(206,145,120)">"</span>)</div><br>
        <div><span style="color:rgb(106,153,85)"># multiplication</span></div>
        <div><span style="color:rgb(156,220,254)">prod_AB</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">dot</span>(<span
                style="color:rgb(79,193,255)">A</span>, <span style="color:rgb(79,193,255)">B</span>)</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(86,156,214)">f</span><span
                style="color:rgb(206,145,120)">"A x B: </span><span style="color:rgb(86,156,214)">{</span><span
                style="color:rgb(156,220,254)">prod_AB</span><span style="color:rgb(86,156,214)">}</span><span
                style="color:rgb(206,145,120)">"</span>)</div><br>
        <div><span style="color:rgb(106,153,85)"># transpose</span></div>
        <div><span style="color:rgb(156,220,254)">A_transpose</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(79,193,255)">A</span>.<span style="color:rgb(156,220,254)">T</span></div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(86,156,214)">f</span><span
                style="color:rgb(206,145,120)">"A transpose: </span><span style="color:rgb(86,156,214)">{</span><span
                style="color:rgb(156,220,254)">A_transpose</span><span style="color:rgb(86,156,214)">}</span><span
                style="color:rgb(206,145,120)">"</span>)</div><br>
        <div><span style="color:rgb(106,153,85)"># inverse</span></div>
        <div><span style="color:rgb(156,220,254)">A_inverse</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(78,201,176)">linalg</span>.<span
                style="color:rgb(220,220,170)">inv</span>(<span style="color:rgb(79,193,255)">A</span>)</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(86,156,214)">f</span><span
                style="color:rgb(206,145,120)">"A inverse: </span><span style="color:rgb(86,156,214)">{</span><span
                style="color:rgb(156,220,254)">A_inverse</span><span style="color:rgb(86,156,214)">}</span><span
                style="color:rgb(206,145,120)">"</span>)</div><br>
        <div><span style="color:rgb(206,145,120)">"""</span></div>
        <div><span style="color:rgb(206,145,120)">A: [[1 2]</span></div>
        <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; [3 4]]</span></div><br>
        <div><span style="color:rgb(206,145,120)">B: [[5 6]</span></div>
        <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; [7 8]]</span></div><br>
        <div><span style="color:rgb(206,145,120)">A + B: [[ 6 &nbsp;8]</span></div>
        <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp; [10 12]]</span></div><br>
        <div><span style="color:rgb(206,145,120)">A x B: [[19 22]</span></div>
        <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp; [43 50]]</span></div><br>
        <div><span style="color:rgb(206,145,120)">A transpose: [[1 3]</span></div>
        <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [2 4]]</span></div>
        <br>
        <div><span style="color:rgb(206,145,120)">A inverse: [[-2. &nbsp; 1. ]</span></div>
        <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [ 1.5 -0.5]]</span></div>
        <div><span style="color:rgb(206,145,120)">"""</span></div><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span
                style="color:rgb(206,145,120)">"-----------------------<wbr>------------------------------<wbr>---------------------"</span>)
        </div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"systems of linear
                equations and gaussian elimination"</span>)</div><br>
        <div><span style="color:rgb(79,193,255)">A</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">array</span>([[<span
                style="color:rgb(181,206,168)">2</span>,<span style="color:rgb(181,206,168)">1</span>], [<span
                style="color:rgb(181,206,168)">1</span>,<span style="color:rgb(181,206,168)">3</span>]])</div>
        <div><span style="color:rgb(79,193,255)">B</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">array</span>([<span
                style="color:rgb(181,206,168)">5</span>,<span style="color:rgb(181,206,168)">4</span>])</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(86,156,214)">f</span><span
                style="color:rgb(206,145,120)">"A: </span><span style="color:rgb(86,156,214)">{</span><span
                style="color:rgb(79,193,255)">A</span><span style="color:rgb(86,156,214)">}</span><span
                style="color:rgb(206,145,120)">, B: </span><span style="color:rgb(86,156,214)">{</span><span
                style="color:rgb(79,193,255)">B</span><span style="color:rgb(86,156,214)">}</span><span
                style="color:rgb(206,145,120)">"</span>)</div><br>
        <div><span style="color:rgb(106,153,85)"># solve</span></div>
        <div><span style="color:rgb(156,220,254)">solution</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(78,201,176)">linalg</span>.<span
                style="color:rgb(220,220,170)">solve</span>(<span style="color:rgb(79,193,255)">A</span>, <span
                style="color:rgb(79,193,255)">B</span>)</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(86,156,214)">f</span><span
                style="color:rgb(206,145,120)">"solution: x = </span><span style="color:rgb(86,156,214)">{</span><span
                style="color:rgb(156,220,254)">solution</span>[<span style="color:rgb(181,206,168)">0</span>]<span
                style="color:rgb(86,156,214)">:.2f}</span><span style="color:rgb(206,145,120)">, y = </span><span
                style="color:rgb(86,156,214)">{</span><span style="color:rgb(156,220,254)">solution</span>[<span
                style="color:rgb(181,206,168)">1</span>]<span style="color:rgb(86,156,214)">:.2f}</span><span
                style="color:rgb(206,145,120)">"</span>)</div><br>
        <div><span style="color:rgb(106,153,85)"># verify</span></div>
        <div><span style="color:rgb(156,220,254)">result</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">dot</span>(<span
                style="color:rgb(79,193,255)">A</span>, <span style="color:rgb(156,220,254)">solution</span>)</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(86,156,214)">f</span><span
                style="color:rgb(206,145,120)">"verification: </span><span style="color:rgb(86,156,214)">{</span><span
                style="color:rgb(156,220,254)">result</span><span style="color:rgb(86,156,214)">}</span><span
                style="color:rgb(206,145,120)">, should be [5,4]"</span>)</div><br>
        <div><span style="color:rgb(206,145,120)">"""</span></div>
        <div><span style="color:rgb(206,145,120)">A: [[2 1]</span></div>
        <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; [1 3]] </span></div><br>
        <div><span style="color:rgb(206,145,120)">B: [5 4]</span></div><br>
        <div><span style="color:rgb(206,145,120)">solution: x = 2.20, y = 0.60</span></div><br>
        <div><span style="color:rgb(206,145,120)">verification: [5. 4.], should be [5,4]</span></div>
        <div><span style="color:rgb(206,145,120)">"""</span></div><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span
                style="color:rgb(206,145,120)">"-----------------------<wbr>------------------------------<wbr>---------------------"</span>)
        </div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"dimensionality
                reduction preview with vector projections"</span>)</div><br><br>
        <div><span style="color:rgb(106,153,85)"># data</span></div>
        <div><span style="color:rgb(156,220,254)">vectors</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">array</span>([[<span
                style="color:rgb(181,206,168)">2</span>,<span style="color:rgb(181,206,168)">1</span>], [<span
                style="color:rgb(181,206,168)">1</span>,<span style="color:rgb(181,206,168)">2</span>], [<span
                style="color:rgb(181,206,168)">3</span>,<span style="color:rgb(181,206,168)">4</span>]])</div>
        <div><span style="color:rgb(156,220,254)">u</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">array</span>([<span
                style="color:rgb(181,206,168)">1</span>,<span style="color:rgb(181,206,168)">1</span>]) <span
                style="color:rgb(106,153,85)"># projection line</span></div><br>
        <div><span style="color:rgb(106,153,85)"># prjection function</span></div>
        <div><span style="color:rgb(86,156,214)">def</span> <span style="color:rgb(220,220,170)">project</span>(<span
                style="color:rgb(156,220,254)">v</span>, <span style="color:rgb(156,220,254)">u</span>):</div>
        <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> (<span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">dot</span>(<span
                style="color:rgb(156,220,254)">v</span>, <span style="color:rgb(156,220,254)">u</span>) <span
                style="color:rgb(212,212,212)">/</span> <span style="color:rgb(78,201,176)">np</span>.<span
                style="color:rgb(220,220,170)">dot</span>(<span style="color:rgb(156,220,254)">u</span>, <span
                style="color:rgb(156,220,254)">u</span>)) <span style="color:rgb(212,212,212)">*</span> <span
                style="color:rgb(156,220,254)">u</span></div><br>
        <div><span style="color:rgb(106,153,85)"># compute projections</span></div>
        <div><span style="color:rgb(156,220,254)">projections</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">array</span>([<span
                style="color:rgb(220,220,170)">project</span>(<span style="color:rgb(156,220,254)">v</span>, <span
                style="color:rgb(156,220,254)">u</span>) <span style="color:rgb(197,134,192)">for</span> <span
                style="color:rgb(156,220,254)">v</span> <span style="color:rgb(197,134,192)">in</span> <span
                style="color:rgb(156,220,254)">vectors</span>])</div><br>
        <div><span style="color:rgb(106,153,85)"># plot</span></div>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">scatter</span>(<span
                style="color:rgb(156,220,254)">vectors</span>[:,<span style="color:rgb(181,206,168)">0</span>], <span
                style="color:rgb(156,220,254)">vectors</span>[:,<span style="color:rgb(181,206,168)">1</span>], <span
                style="color:rgb(156,220,254)">colorizer</span><span style="color:rgb(212,212,212)">=</span><span
                style="color:rgb(206,145,120)">'blue'</span>, <span style="color:rgb(156,220,254)">label</span><span
                style="color:rgb(212,212,212)">=</span><span style="color:rgb(206,145,120)">'original'</span>)</div>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">scatter</span>(<span
                style="color:rgb(156,220,254)">projections</span>[:,<span style="color:rgb(181,206,168)">0</span>],
            <span style="color:rgb(156,220,254)">projections</span>[:,<span style="color:rgb(181,206,168)">1</span>],
            <span style="color:rgb(156,220,254)">colorizer</span><span style="color:rgb(212,212,212)">=</span><span
                style="color:rgb(206,145,120)">'red'</span>, <span style="color:rgb(156,220,254)">label</span><span
                style="color:rgb(212,212,212)">=</span><span style="color:rgb(206,145,120)">'projected'</span>)
        </div>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">plot</span>([<span
                style="color:rgb(181,206,168)">0</span>, <span style="color:rgb(156,220,254)">u</span>[<span
                style="color:rgb(181,206,168)">0</span>]], [<span style="color:rgb(181,206,168)">0</span>, <span
                style="color:rgb(156,220,254)">u</span>[<span style="color:rgb(181,206,168)">1</span>]], <span
                style="color:rgb(206,145,120)">'g-'</span>, <span style="color:rgb(156,220,254)">label</span><span
                style="color:rgb(212,212,212)">=</span><span style="color:rgb(206,145,120)">'projection line'</span>)
        </div>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">xlabel</span>(<span
                style="color:rgb(206,145,120)">'X'</span>)</div>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">ylabel</span>(<span
                style="color:rgb(206,145,120)">'Y'</span>)</div>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">title</span>(<span
                style="color:rgb(206,145,120)">'vector projections'</span>)</div>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">legend</span>()</div>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">grid</span>(<span
                style="color:rgb(86,156,214)">True</span>)</div>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">axis</span>(<span
                style="color:rgb(206,145,120)">'equal'</span>)</div>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">savefig</span>(<span
                style="color:rgb(206,145,120)">'math-stats/plot3.<wbr>png'</span>)</div>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">show</span>()</div><br>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">'vectors:'</span>,
            <span style="color:rgb(156,220,254)">vectors</span>)
        </div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">'projection line,
                u:'</span>, <span style="color:rgb(156,220,254)">u</span>)</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span
                style="color:rgb(206,145,120)">'projections:'</span>, <span
                style="color:rgb(156,220,254)">projections</span>)</div><br>
        <div><span style="color:rgb(206,145,120)">"""</span></div>
        <div><span style="color:rgb(206,145,120)">vectors: [[2 1]</span></div>
        <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [1 2]</span></div>
        <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [3 4]]</span></div><br>
        <div><span style="color:rgb(206,145,120)">projection line, u: [1 1]</span></div><br>
        <div><span style="color:rgb(206,145,120)">projections: [[1.5 1.5]</span></div>
        <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [1.5 1.5]</span>
        </div>
        <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [3.5 3.5]]</span>
        </div>
        <div><span style="color:rgb(206,145,120)">"""</span></div><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span
                style="color:rgb(206,145,120)">"-----------------------<wbr>------------------------------<wbr>---------------------"</span>)
        </div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"practice
                exercises"</span>)</div><br>
        <div><span style="color:rgb(106,153,85)"># dot product and norms</span></div>
        <div><span style="color:rgb(156,220,254)">v1</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">array</span>([<span
                style="color:rgb(181,206,168)">5</span>, <span style="color:rgb(181,206,168)">2</span>])</div>
        <div><span style="color:rgb(156,220,254)">v2</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">array</span>([<span
                style="color:rgb(181,206,168)">1</span>, <span style="color:rgb(181,206,168)">3</span>])</div><br>
        <div><span style="color:rgb(156,220,254)">dot_prod</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">dot</span>(<span
                style="color:rgb(156,220,254)">v1</span>, <span style="color:rgb(156,220,254)">v2</span>)</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"dot product:
                "</span>, <span style="color:rgb(156,220,254)">dot_prod</span>)</div><br>
        <div><span style="color:rgb(156,220,254)">norm_v1</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(78,201,176)">linalg</span>.<span
                style="color:rgb(220,220,170)">norm</span>(<span style="color:rgb(156,220,254)">v1</span>)</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(86,156,214)">f</span><span
                style="color:rgb(206,145,120)">"norm v1: </span><span style="color:rgb(86,156,214)">{</span><span
                style="color:rgb(156,220,254)">norm_v1</span><span style="color:rgb(86,156,214)">}</span><span
                style="color:rgb(206,145,120)">"</span>)</div><br>
        <div><span style="color:rgb(156,220,254)">norm_v2</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(78,201,176)">linalg</span>.<span
                style="color:rgb(220,220,170)">norm</span>(<span style="color:rgb(156,220,254)">v2</span>)</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(86,156,214)">f</span><span
                style="color:rgb(206,145,120)">"norm v2: </span><span style="color:rgb(86,156,214)">{</span><span
                style="color:rgb(156,220,254)">norm_v2</span><span style="color:rgb(86,156,214)">}</span><span
                style="color:rgb(206,145,120)">"</span>)</div><br>
        <div><span style="color:rgb(206,145,120)">"""</span></div>
        <div><span style="color:rgb(206,145,120)">dot product: &nbsp;11</span></div>
        <div><span style="color:rgb(206,145,120)">norm v1: 5.385164807134504</span></div>
        <div><span style="color:rgb(206,145,120)">norm v2: 3.1622776601683795</span></div>
        <div><span style="color:rgb(206,145,120)">"""</span></div><br>
        <div><span style="color:rgb(106,153,85)"># matricies</span></div>
        <div><span style="color:rgb(79,193,255)">A</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">array</span>([[<span
                style="color:rgb(181,206,168)">1</span>,<span style="color:rgb(181,206,168)">0</span>], [<span
                style="color:rgb(181,206,168)">0</span>,<span style="color:rgb(181,206,168)">1</span>]])</div>
        <div><span style="color:rgb(79,193,255)">B</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">array</span>([[<span
                style="color:rgb(181,206,168)">2</span>,<span style="color:rgb(181,206,168)">3</span>], [<span
                style="color:rgb(181,206,168)">4</span>,<span style="color:rgb(181,206,168)">5</span>]])</div><br>
        <div><span style="color:rgb(156,220,254)">sum</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(79,193,255)">A</span> <span style="color:rgb(220,220,170)">+</span> <span
                style="color:rgb(79,193,255)">B</span></div>
        <div><span style="color:rgb(156,220,254)">prod</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(79,193,255)">A</span><span style="color:rgb(220,220,170)">*</span><span
                style="color:rgb(79,193,255)">B</span></div>
        <div><span style="color:rgb(156,220,254)">transpose</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(79,193,255)">A</span>.<span style="color:rgb(156,220,254)">T</span></div><br>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"sum: "</span>,
            <span style="color:rgb(156,220,254)">sum</span>, <span style="color:rgb(206,145,120)">"prod:"</span>, <span
                style="color:rgb(156,220,254)">prod</span>, <span style="color:rgb(206,145,120)">"transpose:"</span>,
            <span style="color:rgb(156,220,254)">transpose</span>)
        </div><br>
        <div><span style="color:rgb(206,145,120)">"""</span></div>
        <div><span style="color:rgb(206,145,120)">sum: &nbsp;[[3 3]</span></div>
        <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp;[4 6]] </span></div>
        <div><span style="color:rgb(206,145,120)">&nbsp;</span></div>
        <div><span style="color:rgb(206,145,120)">prod: [[2 0]</span></div>
        <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp;[0 5]] </span></div>
        <div><span style="color:rgb(206,145,120)">&nbsp;</span></div>
        <div><span style="color:rgb(206,145,120)">transpose: [[1 0]</span></div>
        <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [0 1]]</span></div>
        <div><span style="color:rgb(206,145,120)">"""</span></div><br>
        <div><span style="color:rgb(106,153,85)"># system solving</span></div>
        <div><span style="color:rgb(106,153,85)"># solve: </span></div>
        <div><span style="color:rgb(106,153,85)"># &nbsp; 4x + y = 10; </span></div>
        <div><span style="color:rgb(106,153,85)"># &nbsp; 2x - y = 2</span></div>
        <div><span style="color:rgb(79,193,255)">A</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">array</span>([[<span
                style="color:rgb(181,206,168)">4</span>,<span style="color:rgb(181,206,168)">1</span>], [<span
                style="color:rgb(181,206,168)">2</span>,<span style="color:rgb(212,212,212)">-</span><span
                style="color:rgb(181,206,168)">1</span>]])</div>
        <div><span style="color:rgb(79,193,255)">B</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">array</span>([<span
                style="color:rgb(181,206,168)">10</span>,<span style="color:rgb(181,206,168)">2</span>])</div><br>
        <div><span style="color:rgb(106,153,85)"># solve</span></div>
        <div><span style="color:rgb(156,220,254)">solution</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(78,201,176)">linalg</span>.<span
                style="color:rgb(220,220,170)">solve</span>(<span style="color:rgb(79,193,255)">A</span>, <span
                style="color:rgb(79,193,255)">B</span>)</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(86,156,214)">f</span><span
                style="color:rgb(206,145,120)">"solution: x = </span><span style="color:rgb(86,156,214)">{</span><span
                style="color:rgb(156,220,254)">solution</span>[<span style="color:rgb(181,206,168)">0</span>]<span
                style="color:rgb(86,156,214)">:.2f}</span><span style="color:rgb(206,145,120)">, y = </span><span
                style="color:rgb(86,156,214)">{</span><span style="color:rgb(156,220,254)">solution</span>[<span
                style="color:rgb(181,206,168)">1</span>]<span style="color:rgb(86,156,214)">:.2f}</span><span
                style="color:rgb(206,145,120)">"</span>)</div><br>
        <div><span style="color:rgb(206,145,120)">"""</span></div>
        <div><span style="color:rgb(206,145,120)">solution: x = 2.00, y = 2.00</span></div>
        <div><span style="color:rgb(206,145,120)">"""</span></div><br>
        <div><span style="color:rgb(106,153,85)"># projection</span></div>
        <div><span style="color:rgb(106,153,85)"># project vectors [1,1], [2,0] onto u = [0,1]</span></div>
        <div><span style="color:rgb(106,153,85)"># what does projecting onto the y-axis mean? You get to see how much
                each vector is pointing in the y-direction (y-component)</span></div><br>
        <div><span style="color:rgb(156,220,254)">vectors</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">array</span>([[<span
                style="color:rgb(181,206,168)">1</span>,<span style="color:rgb(181,206,168)">1</span>], [<span
                style="color:rgb(181,206,168)">2</span>,<span style="color:rgb(181,206,168)">0</span>]])</div>
        <div><span style="color:rgb(156,220,254)">u</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">array</span>([<span
                style="color:rgb(181,206,168)">0</span>,<span style="color:rgb(181,206,168)">1</span>]) <span
                style="color:rgb(106,153,85)"># projection line</span></div><br>
        <div><span style="color:rgb(106,153,85)"># projection function</span></div>
        <div><span style="color:rgb(86,156,214)">def</span> <span style="color:rgb(220,220,170)">project</span>(<span
                style="color:rgb(156,220,254)">v</span>, <span style="color:rgb(156,220,254)">u</span>):</div>
        <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> (<span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">dot</span>(<span
                style="color:rgb(156,220,254)">v</span>, <span style="color:rgb(156,220,254)">u</span>) <span
                style="color:rgb(212,212,212)">/</span> <span style="color:rgb(78,201,176)">np</span>.<span
                style="color:rgb(220,220,170)">dot</span>(<span style="color:rgb(156,220,254)">u</span>, <span
                style="color:rgb(156,220,254)">u</span>)) <span style="color:rgb(212,212,212)">*</span> <span
                style="color:rgb(156,220,254)">u</span></div><br>
        <div><span style="color:rgb(106,153,85)"># compute projections</span></div>
        <div><span style="color:rgb(156,220,254)">projections</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">array</span>([<span
                style="color:rgb(220,220,170)">project</span>(<span style="color:rgb(156,220,254)">v</span>, <span
                style="color:rgb(156,220,254)">u</span>) <span style="color:rgb(197,134,192)">for</span> <span
                style="color:rgb(156,220,254)">v</span> <span style="color:rgb(197,134,192)">in</span> <span
                style="color:rgb(156,220,254)">vectors</span>])</div><br>
        <div><span style="color:rgb(106,153,85)"># plot</span></div>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">scatter</span>(<span
                style="color:rgb(156,220,254)">vectors</span>[:,<span style="color:rgb(181,206,168)">0</span>], <span
                style="color:rgb(156,220,254)">vectors</span>[:,<span style="color:rgb(181,206,168)">1</span>], <span
                style="color:rgb(156,220,254)">colorizer</span><span style="color:rgb(212,212,212)">=</span><span
                style="color:rgb(206,145,120)">'blue'</span>, <span style="color:rgb(156,220,254)">label</span><span
                style="color:rgb(212,212,212)">=</span><span style="color:rgb(206,145,120)">'original'</span>)</div>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">scatter</span>(<span
                style="color:rgb(156,220,254)">projections</span>[:,<span style="color:rgb(181,206,168)">0</span>],
            <span style="color:rgb(156,220,254)">projections</span>[:,<span style="color:rgb(181,206,168)">1</span>],
            <span style="color:rgb(156,220,254)">colorizer</span><span style="color:rgb(212,212,212)">=</span><span
                style="color:rgb(206,145,120)">'red'</span>, <span style="color:rgb(156,220,254)">label</span><span
                style="color:rgb(212,212,212)">=</span><span style="color:rgb(206,145,120)">'projected'</span>)
        </div>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">plot</span>([<span
                style="color:rgb(181,206,168)">0</span>, <span style="color:rgb(156,220,254)">u</span>[<span
                style="color:rgb(181,206,168)">0</span>]], [<span style="color:rgb(181,206,168)">0</span>, <span
                style="color:rgb(156,220,254)">u</span>[<span style="color:rgb(181,206,168)">1</span>]], <span
                style="color:rgb(206,145,120)">'g-'</span>, <span style="color:rgb(156,220,254)">label</span><span
                style="color:rgb(212,212,212)">=</span><span style="color:rgb(206,145,120)">'projection line'</span>)
        </div>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">xlabel</span>(<span
                style="color:rgb(206,145,120)">'X'</span>)</div>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">ylabel</span>(<span
                style="color:rgb(206,145,120)">'Y'</span>)</div>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">title</span>(<span
                style="color:rgb(206,145,120)">'vector projections'</span>)</div>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">legend</span>()</div>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">grid</span>(<span
                style="color:rgb(86,156,214)">True</span>)</div>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">axis</span>(<span
                style="color:rgb(206,145,120)">'equal'</span>)</div>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">savefig</span>(<span
                style="color:rgb(206,145,120)">'math-stats/plot4.<wbr>png'</span>)</div>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">show</span>()</div><br>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">'vectors:'</span>,
            <span style="color:rgb(156,220,254)">vectors</span>)
        </div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">'projection line,
                u:'</span>, <span style="color:rgb(156,220,254)">u</span>)</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span
                style="color:rgb(206,145,120)">'projections:'</span>, <span
                style="color:rgb(156,220,254)">projections</span>)</div><br>
        <div><span style="color:rgb(206,145,120)">"""</span></div>
        <div><span style="color:rgb(206,145,120)">vectors: [[1 1]</span></div>
        <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [2 0]]</span></div><br>
        <div><span style="color:rgb(206,145,120)">projection line, u: [0 1]</span></div><br>
        <div><span style="color:rgb(206,145,120)">projections: [[0. 1.]</span></div>
        <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [0. 0.]]</span></div>
        <div><span style="color:rgb(206,145,120)">"""</span></div>
    </div>
</div>
  `

        const chapter3 = `
  <div dir="ltr">
  <div style="color:rgb(204,204,204);font-family:monospace;font-size:14px;line-height:18px;">
        <span class="im">
            <div><span style="color:rgb(197,134,192)">import</span> <span style="color:rgb(78,201,176)">numpy</span>
                <span style="color:rgb(197,134,192)">as</span> <span style="color:rgb(78,201,176)">np</span>
            </div>
            <div><span style="color:rgb(197,134,192)">import</span> <span
                    style="color:rgb(78,201,176)">matplotlib</span>.<span style="color:rgb(78,201,176)">pyplot</span>
                <span style="color:rgb(197,134,192)">as</span> <span style="color:rgb(78,201,176)">plt</span>
            </div>
        </span>
        <div><span style="color:rgb(197,134,192)">import</span> <span style="color:rgb(78,201,176)">sympy</span> <span
                style="color:rgb(197,134,192)">as</span> <span style="color:rgb(78,201,176)">sp</span></div><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span
                style="color:rgb(206,145,120)">"-----------------------<wbr>------------------------------<wbr>---------------------"</span>)
        </div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"Calculus
                basics"</span>)</div><br>
        <div><span style="color:rgb(106,153,85)"># step 1: define a single-variable function f(x)</span></div>
        <div><span style="color:rgb(156,220,254)">x</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">sp</span>.<span style="color:rgb(78,201,176)">Symbol</span>(<span
                style="color:rgb(206,145,120)">'x'</span>)</div>
        <div><span style="color:rgb(156,220,254)">f</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(156,220,254)">x</span><span style="color:rgb(220,220,170)">**</span><span
                style="color:rgb(181,206,168)">2</span> <span style="color:rgb(220,220,170)">+</span> <span
                style="color:rgb(181,206,168)">2</span><span style="color:rgb(212,212,212)">*</span><span
                style="color:rgb(156,220,254)">x</span> <span style="color:rgb(212,212,212)">+</span> <span
                style="color:rgb(181,206,168)">1</span></div><br>
        <div><span style="color:rgb(106,153,85)"># step 2: compute derivative f'(x)</span></div>
        <div><span style="color:rgb(156,220,254)">f_prime</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">sp</span>.<span style="color:rgb(220,220,170)">diff</span>(<span
                style="color:rgb(156,220,254)">f</span>, <span style="color:rgb(156,220,254)">x</span>)</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span
                style="color:rgb(206,145,120)">"derivative:"</span>, <span
                style="color:rgb(156,220,254)">f_prime</span>) <span style="color:rgb(106,153,85)"># should be 2*x +
                2</span></div><br>
        <div><span style="color:rgb(106,153,85)"># step 3: define a multi-var function f(x,y)</span></div>
        <div><span style="color:rgb(156,220,254)">y</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">sp</span>.<span style="color:rgb(78,201,176)">Symbol</span>(<span
                style="color:rgb(206,145,120)">'y'</span>)</div>
        <div><span style="color:rgb(156,220,254)">f_multi</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(156,220,254)">x</span><span style="color:rgb(220,220,170)">**</span><span
                style="color:rgb(181,206,168)">2</span> <span style="color:rgb(220,220,170)">+</span> <span
                style="color:rgb(156,220,254)">x</span><span style="color:rgb(220,220,170)">*</span><span
                style="color:rgb(156,220,254)">y</span></div><br>
        <div><span style="color:rgb(106,153,85)"># step 4: compute partial derivatives</span></div>
        <div><span style="color:rgb(156,220,254)">f_x</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">sp</span>.<span style="color:rgb(220,220,170)">diff</span>(<span
                style="color:rgb(156,220,254)">f_multi</span>, <span style="color:rgb(156,220,254)">x</span>)</div>
        <div><span style="color:rgb(156,220,254)">f_y</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">sp</span>.<span style="color:rgb(220,220,170)">diff</span>(<span
                style="color:rgb(156,220,254)">f_multi</span>, <span style="color:rgb(156,220,254)">y</span>)</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"partial wrt.
                x:"</span>, <span style="color:rgb(156,220,254)">f_x</span>) &nbsp;<span style="color:rgb(106,153,85)">#
                should be 2*x + y</span></div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"partial wrt.
                y:"</span>, <span style="color:rgb(156,220,254)">f_y</span>) &nbsp;<span style="color:rgb(106,153,85)">#
                should be x </span></div><br>
        <div><span style="color:rgb(106,153,85)"># step 5: compute gradient</span></div>
        <div><span style="color:rgb(156,220,254)">gradient</span> <span style="color:rgb(212,212,212)">=</span> [<span
                style="color:rgb(156,220,254)">f_x</span>, <span style="color:rgb(156,220,254)">f_y</span>]</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"gradient:"</span>,
            <span style="color:rgb(156,220,254)">gradient</span>)
        </div><br>
        <div><span style="color:rgb(206,145,120)">"""</span></div>
        <div><span style="color:rgb(206,145,120)">derivative: 2*x + 2</span></div>
        <div><span style="color:rgb(206,145,120)">partial wrt. x: 2*x + y</span></div>
        <div><span style="color:rgb(206,145,120)">partial wrt. y: x</span></div>
        <div><span style="color:rgb(206,145,120)">gradient: [2*x + y, x]</span></div>
        <div><span style="color:rgb(206,145,120)">"""</span></div><br>
        <div><span style="color:rgb(106,153,85)"># step 6: evaluate at a point</span></div>
        <div><span style="color:rgb(156,220,254)">point</span> <span style="color:rgb(212,212,212)">=</span> {<span
                style="color:rgb(156,220,254)">x</span>: <span style="color:rgb(181,206,168)">1</span>, <span
                style="color:rgb(156,220,254)">y</span>: <span style="color:rgb(181,206,168)">2</span>}</div>
        <div><span style="color:rgb(156,220,254)">grad_at_point</span> <span style="color:rgb(212,212,212)">=</span>
            [<span style="color:rgb(156,220,254)">f_x</span>.<span style="color:rgb(220,220,170)">subs</span>(<span
                style="color:rgb(156,220,254)">point</span>), <span style="color:rgb(156,220,254)">f_y</span>.<span
                style="color:rgb(220,220,170)">subs</span>(<span style="color:rgb(156,220,254)">point</span>)]</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"gradient at point
                (1,2):"</span>, <span style="color:rgb(156,220,254)">grad_at_point</span>) &nbsp; &nbsp;<span
                style="color:rgb(106,153,85)"># should be [4,1]</span></div><br>
        <div><span style="color:rgb(206,145,120)">"""</span></div>
        <div><span style="color:rgb(206,145,120)">gradient at point (1,2): [4, 1]</span></div>
        <div><span style="color:rgb(206,145,120)">"""</span></div><br>
        <div><span style="color:rgb(106,153,85)"># step 7: visualize f(x) = x**2 + 2*x + 1</span></div>
        <div><span style="color:rgb(156,220,254)">x_vals</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">linspace</span>(<span
                style="color:rgb(212,212,212)">-</span><span style="color:rgb(181,206,168)">5</span>,<span
                style="color:rgb(181,206,168)">5</span>,<span style="color:rgb(181,206,168)">100</span>)</div>
        <div><span style="color:rgb(156,220,254)">f_lamb</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">sp</span>.<span style="color:rgb(220,220,170)">lambdify</span>(<span
                style="color:rgb(156,220,254)">x</span>, <span style="color:rgb(156,220,254)">f</span>, <span
                style="color:rgb(206,145,120)">'numpy'</span>)</div>
        <div><span style="color:rgb(156,220,254)">f_prime_lamb</span> <span style="color:rgb(212,212,212)">=</span>
            <span style="color:rgb(78,201,176)">sp</span>.<span style="color:rgb(220,220,170)">lambdify</span>(<span
                style="color:rgb(156,220,254)">x</span>, <span style="color:rgb(156,220,254)">f_prime</span>, <span
                style="color:rgb(206,145,120)">'numpy'</span>)
        </div><br>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">plot</span>(<span
                style="color:rgb(156,220,254)">x_vals</span>, <span style="color:rgb(156,220,254)">f_lamb</span>(<span
                style="color:rgb(156,220,254)">x_vals</span>), <span style="color:rgb(156,220,254)">label</span><span
                style="color:rgb(212,212,212)">=</span><span style="color:rgb(206,145,120)">'f(x) = x**2 + 2*x +
                1'</span>)</div>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">plot</span>(<span
                style="color:rgb(156,220,254)">x_vals</span>, <span
                style="color:rgb(156,220,254)">f_prime_lamb</span>(<span style="color:rgb(156,220,254)">x_vals</span>),
            <span style="color:rgb(156,220,254)">label</span><span style="color:rgb(212,212,212)">=</span><span
                style="color:rgb(206,145,120)">"f'(x) = 2x + 2"</span>)
        </div><span class="im">
            <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">xlabel</span>(<span
                    style="color:rgb(206,145,120)">'X'</span>)</div>
            <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">ylabel</span>(<span
                    style="color:rgb(206,145,120)">'Y'</span>)</div>
        </span>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">title</span>(<span
                style="color:rgb(206,145,120)">'function and its derivative'</span>)</div>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">legend</span>()</div>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">grid</span>(<span
                style="color:rgb(86,156,214)">True</span>)</div>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">savefig</span>(<span
                style="color:rgb(206,145,120)">'math-stats/plot5.<wbr>png'</span>)</div>
        <div><span style="color:rgb(78,201,176)">plt</span>.<span style="color:rgb(220,220,170)">show</span>()</div>
        <div class="yj6qo ajU">
            <div id=":sf" class="ajR" role="button" tabindex="0" data-tooltip="Show trimmed content"
                aria-label="Show trimmed content" aria-expanded="false"><img class="ajT"
                    src="//ssl.gstatic.com/ui/v1/icons/mail/images/cleardot.gif"></div>
        </div>
        <div class="adL"><br><br></div>
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
                                                Python Quick Reference
                                        </div>


                                        <Tabs>
                                                <Tab2 title="numpy" isChecked={true}>
                                                        <TileRowCell0>

                                                                <div className="jade-h11 mt-[15px]">
                                                                        numpy quick reference
                                                                </div>

                                                                <CardDrawer id='1' name='create and initialize ndarrays'>

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                        <div dangerouslySetInnerHTML={createMarkup(html1)} />
                                                                                </div>
                                                                        </div>

                                                                </CardDrawer>

                                                                <CardDrawer id='1' name='outer product'>

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                        <div dangerouslySetInnerHTML={createMarkup(html2)} />
                                                                                </div>
                                                                        </div>

                                                                </CardDrawer>

                                                                <CardDrawer id='1' name='misc numpy'>

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                        <div dangerouslySetInnerHTML={createMarkup(html12)} />
                                                                                </div>
                                                                        </div>

                                                                </CardDrawer>


                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="fundamentals" isChecked={false}>
                                                        <TileRowCell0>

                                                                <div className="jade-h11 mt-[15px]">
                                                                        fundamentals
                                                                </div>

                                                                <CardDrawer id='1' name='loops'>

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                        <div dangerouslySetInnerHTML={createMarkup(html3)} />
                                                                                </div>
                                                                        </div>

                                                                </CardDrawer>

                                                                <CardDrawer id='1' name='functions'>

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                        <div dangerouslySetInnerHTML={createMarkup(html4)} />
                                                                                </div>
                                                                        </div>

                                                                </CardDrawer>

                                                                <CardDrawer id='1' name='containers'>

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                        <div dangerouslySetInnerHTML={createMarkup(html5)} />
                                                                                </div>
                                                                        </div>

                                                                </CardDrawer>

                                                                <CardDrawer id='1' name='strings and regex'>

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                        <div dangerouslySetInnerHTML={createMarkup(html6)} />
                                                                                </div>
                                                                        </div>

                                                                </CardDrawer>

                                                                <CardDrawer id='1' name='exceptions'>

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                        <div dangerouslySetInnerHTML={createMarkup(html7)} />
                                                                                </div>
                                                                        </div>

                                                                </CardDrawer>

                                                                <CardDrawer id='1' name='classes'>

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                        <div dangerouslySetInnerHTML={createMarkup(html8)} />
                                                                                </div>
                                                                        </div>

                                                                </CardDrawer>

                                                                <CardDrawer id='1' name='modules and packages'>

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                        <div dangerouslySetInnerHTML={createMarkup(html9)} />
                                                                                </div>
                                                                        </div>

                                                                </CardDrawer>

                                                                <CardDrawer id='1' name='functional programming'>

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                        <div dangerouslySetInnerHTML={createMarkup(html10)} />
                                                                                </div>
                                                                        </div>

                                                                </CardDrawer>

                                                                <CardDrawer id='1' name='file handling'>

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                        <div dangerouslySetInnerHTML={createMarkup(html11)} />
                                                                                </div>
                                                                        </div>

                                                                </CardDrawer>



                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="advanced" isChecked={false}>
                                                        <TileRowCell0>

                                                                <div className="jade-h11 mt-[15px]">
                                                                        advanced
                                                                </div>

                                                                <CardDrawer id='1' name='pandas'>

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                        <div dangerouslySetInnerHTML={createMarkup(html13)} />
                                                                                </div>
                                                                        </div>

                                                                </CardDrawer>

                                                                <CardDrawer id='1' name='neural net example from P4JD'>

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                        <div dangerouslySetInnerHTML={createMarkup(html14)} />
                                                                                </div>
                                                                        </div>

                                                                </CardDrawer>

                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="examples from PSFDS" isChecked={false}>
                                                        <TileRowCell0>

                                                                <div className="jade-h11 mt-[15px]">
                                                                        examples from PSFDS
                                                                </div>

                                                                <CardDrawer id='1' name='chapter 1'>

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                        <div dangerouslySetInnerHTML={createMarkup(chapter1)} />
                                                                                </div>
                                                                        </div>

                                                                </CardDrawer>

                                                                <CardDrawer id='1' name='chapter 2'>

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                        <div dangerouslySetInnerHTML={createMarkup(chapter2)} />
                                                                                </div>
                                                                        </div>

                                                                </CardDrawer>

                                                                <CardDrawer id='1' name='chapter 3'>

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                        <div dangerouslySetInnerHTML={createMarkup(chapter3)} />
                                                                                </div>
                                                                        </div>

                                                                </CardDrawer>



                                                        </TileRowCell0>
                                                </Tab2>

                                        </Tabs>


                                </div>
                        </MathJaxContext>
                </>
        );
}
