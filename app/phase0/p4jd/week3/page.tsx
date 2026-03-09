'use client';

import Image from "next/image";
import Tabs from '@/components/client/Tabs';
import Tab2 from '@/components/client/Tab2';
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

        const html = `
<div dir="ltr">
    <div style="color:rgb(204,204,204);font-family:monospace;font-size:13px;line-height:17px;">
        <div class="adM"><br></div>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ---------- numpy
                arrays "</span>)</div><br><br>
        <div><span style="color:rgb(197,134,192)">import</span> <span style="color:rgb(78,201,176)">numpy</span> <span
                style="color:rgb(197,134,192)">as</span> <span style="color:rgb(78,201,176)">np</span></div>
        <div><span style="color:rgb(197,134,192)">import</span> <span style="color:rgb(78,201,176)">pandas</span> <span
                style="color:rgb(197,134,192)">as</span> <span style="color:rgb(78,201,176)">pd</span></div><br>
        <div><span style="color:rgb(156,220,254)">df</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">pd</span>.<span style="color:rgb(220,220,170)">read_csv</span>(<span
                style="color:rgb(206,145,120)">'exercises.csv'</span>, <span
                style="color:rgb(156,220,254)">sep</span><span style="color:rgb(212,212,212)">=</span><span
                style="color:rgb(206,145,120)">'\s*,\s*'</span>, <span
                style="color:rgb(156,220,254)">index_col</span><span style="color:rgb(212,212,212)">=</span><span
                style="color:rgb(181,206,168)">0</span>)</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">df</span>.<span
                style="color:rgb(156,220,254)">columns</span>)</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">df</span>.<span
                style="color:rgb(220,220,170)">head</span>())</div><br><br>
        <div><span style="color:rgb(156,220,254)">values1</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">array</span>([<span
                style="color:rgb(181,206,168)">1</span>, <span style="color:rgb(181,206,168)">2</span>, <span
                style="color:rgb(181,206,168)">3</span>], <span style="color:rgb(156,220,254)">dtype</span><span
                style="color:rgb(212,212,212)">=</span><span style="color:rgb(78,201,176)">np</span>.<span
                style="color:rgb(156,220,254)">int32</span>)</div><br>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">values1</span>[<span
                style="color:rgb(181,206,168)">2</span>])</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">values1</span>.<span
                style="color:rgb(156,220,254)">shape</span>) &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># output:
                (3,) - 3 rows, no columns</span></div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">values1</span>.<span
                style="color:rgb(156,220,254)">ndim</span>) &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># number
                of dimensions (1 dimension in our case)</span></div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">values1</span>.<span
                style="color:rgb(156,220,254)">dtype</span>) &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># data
                type</span></div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(220,220,170)">len</span>(<span
                style="color:rgb(156,220,254)">values1</span>))</div><br>
        <div><span style="color:rgb(106,153,85)"># behind the scenes numpy will pack/store these numbers very
                efficiently especially</span></div>
        <div><span style="color:rgb(106,153,85)"># if there are a large number of values</span></div><br>
        <div><span style="color:rgb(106,153,85)"># example of a multi-dimensional array</span></div>
        <div><span style="color:rgb(156,220,254)">values2</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">array</span>([[<span
                style="color:rgb(181,206,168)">1.0</span>, <span style="color:rgb(181,206,168)">2.1</span>], [<span
                style="color:rgb(181,206,168)">2.0</span>, <span style="color:rgb(181,206,168)">3.1</span>], [<span
                style="color:rgb(181,206,168)">4.0</span>, <span style="color:rgb(181,206,168)">2.5</span>]], <span
                style="color:rgb(156,220,254)">dtype</span><span style="color:rgb(212,212,212)">=</span><span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(78,201,176)">float64</span>)</div><br>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">values2</span>[<span
                style="color:rgb(181,206,168)">2</span>])</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">values2</span>.<span
                style="color:rgb(156,220,254)">shape</span>) &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># output:
                (3, 2) &nbsp;- 3 rows, 2 columns</span></div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">values2</span>.<span
                style="color:rgb(156,220,254)">ndim</span>) &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># 2
                dimensions</span></div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">values2</span>.<span
                style="color:rgb(156,220,254)">dtype</span>)</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(220,220,170)">len</span>(<span
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
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ----------
                creating numpy arrays "</span>)</div><br>
        <div><span style="color:rgb(156,220,254)">values1</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(156,220,254)">zeros</span>((<span
                style="color:rgb(181,206,168)">2</span>, <span style="color:rgb(181,206,168)">3</span>))</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">values1</span>)
        </div><br>
        <div><span style="color:rgb(156,220,254)">values2</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">arange</span>(<span
                style="color:rgb(181,206,168)">5</span>, <span style="color:rgb(181,206,168)">10</span>, <span
                style="color:rgb(181,206,168)">0.5</span>) &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># a range;
                5 up to (but not including) 10; step size 0.5</span></div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">values2</span>)
        </div><br>
        <div><span style="color:rgb(156,220,254)">values3</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">linspace</span>(<span
                style="color:rgb(181,206,168)">3</span>, <span style="color:rgb(181,206,168)">6</span>, <span
                style="color:rgb(181,206,168)">4</span>) &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># start
                range; end range (includes end of range); number of values to create that are evenly spaced</span></div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">values3</span>)
        </div><br>
        <div><span style="color:rgb(206,145,120)">"""</span></div>
        <div><span style="color:rgb(206,145,120)">output:</span></div>
        <div><span style="color:rgb(206,145,120)">[[0. 0. 0.]</span></div>
        <div><span style="color:rgb(206,145,120)">&nbsp;[0. 0. 0.]]</span></div>
        <div><span style="color:rgb(206,145,120)">[5. &nbsp;5.5 6. &nbsp;6.5 7. &nbsp;7.5 8. &nbsp;8.5 9.
                &nbsp;9.5]</span></div>
        <div><span style="color:rgb(206,145,120)">[3. 4. 5. 6.]</span></div>
        <div><span style="color:rgb(206,145,120)">"""</span></div><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ---------- random
                numpy arrays "</span>)</div><br><br>
        <div><span style="color:rgb(156,220,254)">values1</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(78,201,176)">random</span>.<span
                style="color:rgb(156,220,254)">rand</span>(<span style="color:rgb(181,206,168)">2</span>, <span
                style="color:rgb(181,206,168)">3</span>) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span
                style="color:rgb(106,153,85)"># 2 rows, 3 columns, random numbers</span></div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">values1</span>)
        </div><br>
        <div><span style="color:rgb(156,220,254)">rng</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(78,201,176)">random</span>.<span
                style="color:rgb(220,220,170)">default_rng</span>() &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                style="color:rgb(106,153,85)"># default random generator</span></div><br>
        <div><span style="color:rgb(156,220,254)">values2</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(156,220,254)">rng</span>.<span
                style="color:rgb(220,220,170)">standard_normal</span>((<span style="color:rgb(181,206,168)">4</span>,
            <span style="color:rgb(181,206,168)">3</span>)) &nbsp; <span style="color:rgb(106,153,85)"># normally
                distributed values: </span>
        </div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">values2</span>)
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span
                style="color:rgb(106,153,85)"># &nbsp; the average over all values will be 0</span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># &nbsp; the variance will be
                1</span></div><br>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">values2</span>.<span
                style="color:rgb(220,220,170)">reshape</span>(<span style="color:rgb(181,206,168)">2</span>, <span
                style="color:rgb(181,206,168)">6</span>)) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span
                style="color:rgb(106,153,85)"># change the structure to 2 rows, 6 cols</span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># (values do not change, just the
                structure of the rows/cols)</span></div><br>
        <div><span style="color:rgb(206,145,120)">"""</span></div>
        <div><span style="color:rgb(206,145,120)">[[0.15634549 0.14511228 0.25770791]</span></div>
        <div><span style="color:rgb(206,145,120)">&nbsp;[0.50625265 0.22797054 0.65992225]]</span></div>
        <div><span style="color:rgb(206,145,120)">[[-0.6636178 &nbsp;-0.13549338 -0.00604821]</span></div>
        <div><span style="color:rgb(206,145,120)">&nbsp;[ 0.67119468 -1.75489791 -0.44523161]</span></div>
        <div><span style="color:rgb(206,145,120)">&nbsp;[-2.13258157 &nbsp;1.25948878 &nbsp;0.27569191]</span></div>
        <div><span style="color:rgb(206,145,120)">&nbsp;[ 1.56143934 -0.80494539 -0.61166042]]</span></div>
        <div><span style="color:rgb(206,145,120)">[[-0.6636178 &nbsp;-0.13549338 -0.00604821 &nbsp;0.67119468
                -1.75489791 -0.44523161]</span></div>
        <div><span style="color:rgb(206,145,120)">&nbsp;[-2.13258157 &nbsp;1.25948878 &nbsp;0.27569191 &nbsp;1.56143934
                -0.80494539 -0.61166042]]</span></div>
        <div><span style="color:rgb(206,145,120)">"""</span></div><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ---------- numpy
                arithmetic "</span>)</div><br><br>
        <div><span style="color:rgb(156,220,254)">values</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">arange</span>(<span
                style="color:rgb(181,206,168)">0</span>, <span style="color:rgb(181,206,168)">10</span>, <span
                style="color:rgb(181,206,168)">1</span>) &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># create a
                numpy array using a range (list) of values</span></div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">values</span>)</div>
        <br>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">values</span> <span
                style="color:rgb(220,220,170)">+</span> <span style="color:rgb(181,206,168)">2</span>) &nbsp; &nbsp;
            &nbsp; <span style="color:rgb(106,153,85)"># add 2 to every value in the array</span></div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">values</span> <span
                style="color:rgb(220,220,170)">*</span> <span style="color:rgb(181,206,168)">3</span>) &nbsp; &nbsp;
            &nbsp; <span style="color:rgb(106,153,85)"># multiply by 3 (for every value in the array)</span></div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">values</span> <span
                style="color:rgb(220,220,170)">**</span> <span style="color:rgb(181,206,168)">2</span>) &nbsp; &nbsp;
            &nbsp;<span style="color:rgb(106,153,85)"># square each value</span></div><br>
        <div><span style="color:rgb(106,153,85)"># note: the original array was not changed. But we will change it now.
            </span></div>
        <div><span style="color:rgb(156,220,254)">values</span> <span style="color:rgb(220,220,170)">-=</span> <span
                style="color:rgb(181,206,168)">20</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span
                style="color:rgb(106,153,85)"># subtract 20</span></div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">values</span>)</div>
        <br>
        <div><span style="color:rgb(206,145,120)">"""</span></div>
        <div><span style="color:rgb(206,145,120)">[0 1 2 3 4 5 6 7 8 9]</span></div>
        <div><span style="color:rgb(206,145,120)">[ 2 &nbsp;3 &nbsp;4 &nbsp;5 &nbsp;6 &nbsp;7 &nbsp;8 &nbsp;9 10
                11]</span></div>
        <div><span style="color:rgb(206,145,120)">[ 0 &nbsp;3 &nbsp;6 &nbsp;9 12 15 18 21 24 27]</span></div>
        <div><span style="color:rgb(206,145,120)">[ 0 &nbsp;1 &nbsp;4 &nbsp;9 16 25 36 49 64 81]</span></div>
        <div><span style="color:rgb(206,145,120)">[-20 -19 -18 -17 -16 -15 -14 -13 -12 -11]</span></div>
        <div><span style="color:rgb(206,145,120)">"""</span></div><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ---------- numpy
                functions "</span>)</div><br><br>
        <div><span style="color:rgb(156,220,254)">values</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">arange</span>(<span
                style="color:rgb(181,206,168)">0</span>, <span style="color:rgb(181,206,168)">10</span>, <span
                style="color:rgb(181,206,168)">1</span>)</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">values</span>)</div>
        <br>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(78,201,176)">np</span>.<span
                style="color:rgb(156,220,254)">sin</span>(<span style="color:rgb(156,220,254)">values</span>))</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(78,201,176)">np</span>.<span
                style="color:rgb(156,220,254)">min</span>(<span style="color:rgb(156,220,254)">values</span>))</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(78,201,176)">np</span>.<span
                style="color:rgb(156,220,254)">max</span>(<span style="color:rgb(156,220,254)">values</span>))</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(78,201,176)">np</span>.<span
                style="color:rgb(220,220,170)">mean</span>(<span style="color:rgb(156,220,254)">values</span>))
            &nbsp;<span style="color:rgb(106,153,85)"># mean</span></div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(78,201,176)">np</span>.<span
                style="color:rgb(220,220,170)">std</span>(<span style="color:rgb(156,220,254)">values</span>)) &nbsp;
            <span style="color:rgb(106,153,85)"># std deviation</span>
        </div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(78,201,176)">np</span>.<span
                style="color:rgb(220,220,170)">var</span>(<span style="color:rgb(156,220,254)">values</span>)) &nbsp;
            <span style="color:rgb(106,153,85)"># variance (square of std dev)</span>
        </div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(78,201,176)">np</span>.<span
                style="color:rgb(220,220,170)">sum</span>(<span style="color:rgb(156,220,254)">values</span>)) &nbsp;
            <span style="color:rgb(106,153,85)"># sum</span>
        </div><br>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">values</span>.<span
                style="color:rgb(220,220,170)">min</span>()) &nbsp; &nbsp; <span style="color:rgb(106,153,85)">#
                alternate way</span></div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">values</span>.<span
                style="color:rgb(220,220,170)">mean</span>())</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">values</span>.<span
                style="color:rgb(220,220,170)">sum</span>())</div><br>
        <div><span style="color:rgb(206,145,120)">"""</span></div>
        <div><span style="color:rgb(206,145,120)">[0 1 2 3 4 5 6 7 8 9]</span></div>
        <div><span style="color:rgb(206,145,120)">[ 0. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;0.84147098 &nbsp;0.90929743
                &nbsp;0.14112001 -0.7568025 &nbsp;-0.95892427</span></div>
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
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ---------- numpy
                slicing "</span>)</div><br>
        <div><span style="color:rgb(156,220,254)">values</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">arange</span>(<span
                style="color:rgb(181,206,168)">0</span>, <span style="color:rgb(181,206,168)">16</span>, <span
                style="color:rgb(181,206,168)">1</span>).<span style="color:rgb(220,220,170)">reshape</span>(<span
                style="color:rgb(181,206,168)">4</span>, <span style="color:rgb(181,206,168)">4</span>) &nbsp;<span
                style="color:rgb(106,153,85)"># create a 4x4 array with values from 0 - 15</span></div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">values</span>)</div>
        <div><span style="color:rgb(220,220,170)">print</span>()</div><br>
        <div><span style="color:rgb(106,153,85)"># values[:2] &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;# take a slice;
                start from beginning, go up to the row at index 2 (but not including)</span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                style="color:rgb(106,153,85)"># eg. will get the first 2 rows</span></div><br>
        <div><span style="color:rgb(220,220,170)">print</span>(<span
                style="color:rgb(156,220,254)">values</span>[::<span style="color:rgb(181,206,168)">2</span>]) &nbsp;
            &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># slice: start is default (0), end is default (last index),
                step size 2</span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                style="color:rgb(106,153,85)"># eg. will get the first row, skip second row, get the third row</span>
        </div>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span
                style="color:rgb(156,220,254)">values</span>[::<span style="color:rgb(181,206,168)">2</span>,<span
                style="color:rgb(181,206,168)">1</span>:<span style="color:rgb(181,206,168)">3</span>]) &nbsp;<span
                style="color:rgb(106,153,85)"># can slice columns; get first 2 rows, then slice columns 1:3 (ie. get 2nd
                and 3rd columns only)</span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                style="color:rgb(106,153,85)"># if have multi-dimensions, can add a comma ',' to slice each
                dimension</span></div><br>
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
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ---------- numpy
                views "</span>)</div><br>
        <div><span style="color:rgb(156,220,254)">values</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">arange</span>(<span
                style="color:rgb(181,206,168)">16</span>).<span style="color:rgb(220,220,170)">reshape</span>(<span
                style="color:rgb(181,206,168)">4</span>,<span style="color:rgb(181,206,168)">4</span>) <span
                style="color:rgb(220,220,170)">*</span> <span style="color:rgb(181,206,168)">10</span> &nbsp; <span
                style="color:rgb(106,153,85)"># create a 4x4 array, and multiply by 10</span></div><br>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">values</span>)</div>
        <br>
        <div><span style="color:rgb(156,220,254)">view</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(156,220,254)">values</span>[:, <span style="color:rgb(181,206,168)">1</span>:<span
                style="color:rgb(181,206,168)">3</span>] &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># get
                all rows, but only columns 2, 3</span></div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">view</span>) &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># this is a view;
                original array still exists; if you modify the view you will modify the original array</span></div><br>
        <div><span style="color:rgb(156,220,254)">view</span> <span style="color:rgb(220,220,170)">*=</span> <span
                style="color:rgb(181,206,168)">0</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <span style="color:rgb(106,153,85)"># modify view to have all zeros</span>
        </div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">view</span>) &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </div><br>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">values</span>)
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># shows that the
                original array has been modified</span></div><br>
        <div><span style="color:rgb(106,153,85)"># allows you to easily modify just specific columns/rows in an array
                (which could be large)</span></div><br>
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
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ---------- numpy:
                advanced indexing with lists "</span>)</div><br><br>
        <div><span style="color:rgb(156,220,254)">values</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">arange</span>(<span
                style="color:rgb(181,206,168)">16</span>).<span style="color:rgb(220,220,170)">reshape</span>(<span
                style="color:rgb(181,206,168)">4</span>, <span style="color:rgb(181,206,168)">4</span>)</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">values</span>)</div>
        <div><span style="color:rgb(220,220,170)">print</span>()</div><br>
        <div><span style="color:rgb(106,153,85)"># get row at index 0 and 2</span></div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">values</span>[[<span
                style="color:rgb(181,206,168)">0</span>,<span style="color:rgb(181,206,168)">2</span>]])</div>
        <div><span style="color:rgb(220,220,170)">print</span>()</div><br>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">values</span>[[<span
                style="color:rgb(181,206,168)">0</span>, <span style="color:rgb(181,206,168)">2</span>, <span
                style="color:rgb(181,206,168)">2</span>, <span style="color:rgb(181,206,168)">3</span>],[<span
                style="color:rgb(181,206,168)">0</span>, <span style="color:rgb(181,206,168)">0</span>, <span
                style="color:rgb(181,206,168)">2</span>, <span style="color:rgb(181,206,168)">1</span>]]) &nbsp;
            &nbsp;<span style="color:rgb(106,153,85)"># use lists to index numpy arrays</span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># first list is the row
                index, second list is the column index</span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># each pair allows you
                to select a specific value by row/column</span></div><br>
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
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ---------- numpy:
                using comparison operators "</span>)</div><br>
        <div><span style="color:rgb(156,220,254)">values</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">arange</span>(<span
                style="color:rgb(181,206,168)">16</span>).<span style="color:rgb(220,220,170)">reshape</span>(<span
                style="color:rgb(181,206,168)">4</span>, <span style="color:rgb(181,206,168)">4</span>)</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">values</span>)</div>
        <div><span style="color:rgb(220,220,170)">print</span>()</div><br>
        <div><span style="color:rgb(106,153,85)"># use comparison operator 'less than'</span></div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">values</span> <span
                style="color:rgb(220,220,170)">&lt;</span> <span style="color:rgb(181,206,168)">8</span>) &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># we get back an array where you have boolean
                values based on the comparison</span></div>
        <div><span style="color:rgb(220,220,170)">print</span>()</div><br>
        <div><span style="color:rgb(106,153,85)"># use mod to get true/false for items in the array that are divisible
                by 2 (ie. all even numbers)</span></div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">values</span> <span
                style="color:rgb(220,220,170)">%</span> <span style="color:rgb(181,206,168)">2</span> <span
                style="color:rgb(220,220,170)">==</span> <span style="color:rgb(181,206,168)">0</span>)</div><br>
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
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ---------- numpy:
                boolean indexing "</span>)</div><br>
        <div><span style="color:rgb(156,220,254)">values</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">arange</span>(<span
                style="color:rgb(181,206,168)">16</span>).<span style="color:rgb(220,220,170)">reshape</span>(<span
                style="color:rgb(181,206,168)">4</span>, <span style="color:rgb(181,206,168)">4</span>)</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">values</span>)</div>
        <div><span style="color:rgb(220,220,170)">print</span>()</div><br>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">values</span>[<span
                style="color:rgb(156,220,254)">values</span> <span style="color:rgb(220,220,170)">%</span> <span
                style="color:rgb(181,206,168)">5</span> <span style="color:rgb(220,220,170)">==</span> <span
                style="color:rgb(181,206,168)">0</span>]) &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># get
                a list of values that are divisible by 5</span></div><br>
        <div><span style="color:rgb(156,220,254)">rng</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(78,201,176)">random</span>.<span
                style="color:rgb(220,220,170)">default_rng</span>()</div><br>
        <div><span style="color:rgb(156,220,254)">numbers</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(156,220,254)">rng</span>.<span
                style="color:rgb(220,220,170)">standard_normal</span>(<span style="color:rgb(181,206,168)">50</span>)
            &nbsp; <span style="color:rgb(106,153,85)"># get a normal distribution of 50 values</span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># &nbsp;- normal distribution: average over all
                values should be zero with a std deviation of 1</span></div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">numbers</span>.<span
                style="color:rgb(220,220,170)">mean</span>()) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                style="color:rgb(106,153,85)"># get the avg value</span></div><br>
        <div><span style="color:rgb(156,220,254)">negatives</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(156,220,254)">numbers</span>[<span style="color:rgb(156,220,254)">numbers</span> <span
                style="color:rgb(220,220,170)">&lt;</span> <span style="color:rgb(181,206,168)">0</span>] &nbsp;
            &nbsp;<span style="color:rgb(106,153,85)"># get a list of the values that are less than zero</span></div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span
                style="color:rgb(156,220,254)">negatives</span>.<span style="color:rgb(220,220,170)">mean</span>())
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># get the avg value of this
                new list </span></div><br>
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
            <div id=":tc" class="ajR" role="button" tabindex="0" data-tooltip="Show trimmed content"
                aria-label="Show trimmed content" aria-expanded="false"><img class="ajT"
                    src="//ssl.gstatic.com/ui/v1/icons/mail/images/cleardot.gif"></div>
        </div>
        <div class="adL"><br></div>
    </div>
</div>
  `

        const html2 = `
  <div dir="ltr">
    <div style="color:rgb(204,204,204);font-family:monospace;font-size:13px;line-height:17px;">
        <div class="adM"><br></div>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ----------
                loading pandas frames "</span>)</div><br>
        <div><span style="color:rgb(106,153,85)"># Pandas is like working with a spreadsheet but in python</span></div>
        <div><span style="color:rgb(106,153,85)"># load csv files into a pandas dataframe</span></div><br>
        <div><span style="color:rgb(197,134,192)">import</span> <span style="color:rgb(78,201,176)">pandas</span> <span
                style="color:rgb(197,134,192)">as</span> <span style="color:rgb(78,201,176)">pd</span></div>
        <div><span style="color:rgb(197,134,192)">import</span> <span style="color:rgb(78,201,176)">numpy</span> <span
                style="color:rgb(197,134,192)">as</span> <span style="color:rgb(78,201,176)">np</span></div><br>
        <div><span style="color:rgb(106,153,85)"># df = pd.read_csv('exercises.csv', sep='\s*,\s*', index_col=0)</span>
        </div><br>
        <div><span style="color:rgb(106,153,85)"># print(df.columns)</span></div>
        <div><span style="color:rgb(106,153,85)"># print(df.head())</span></div><br><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ----------
                pandas: setting column names "</span>)</div><br>
        <div><span style="color:rgb(156,220,254)">df</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">pd</span>.<span style="color:rgb(220,220,170)">read_csv</span>(<span
                style="color:rgb(206,145,120)">'exercises.csv'</span>, <span
                style="color:rgb(156,220,254)">sep</span><span style="color:rgb(212,212,212)">=</span><span
                style="color:rgb(206,145,120)">','</span>, <span style="color:rgb(156,220,254)">index_col</span><span
                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">0</span>)</div>
        <div><span style="color:rgb(156,220,254)">df</span>.<span style="color:rgb(156,220,254)">columns</span> <span
                style="color:rgb(212,212,212)">=</span> <span style="color:rgb(156,220,254)">df</span>.<span
                style="color:rgb(156,220,254)">columns</span>.<span style="color:rgb(156,220,254)">str</span>.<span
                style="color:rgb(220,220,170)">strip</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">df</span>.<span
                style="color:rgb(156,220,254)">columns</span>)</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">df</span>.<span
                style="color:rgb(220,220,170)">head</span>())</div><br>
        <div><span style="color:rgb(206,145,120)">"""</span></div>
        <div><span style="color:rgb(206,145,120)">Index(['Pullups', 'Pushups', 'Squats'], dtype='str')</span></div>
        <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp;Pullups &nbsp;Pushups &nbsp;Squats</span></div>
        <div><span style="color:rgb(206,145,120)">Day</span></div>
        <div><span style="color:rgb(206,145,120)">Mon &nbsp; &nbsp; &nbsp; 20 &nbsp; &nbsp; &nbsp; 10 &nbsp; &nbsp;
                &nbsp; 5</span></div>
        <div><span style="color:rgb(206,145,120)">Tue &nbsp; &nbsp; &nbsp; 10 &nbsp; &nbsp; &nbsp; 15 &nbsp; &nbsp;
                &nbsp; 0</span></div>
        <div><span style="color:rgb(206,145,120)">Wed &nbsp; &nbsp; &nbsp; 25 &nbsp; &nbsp; &nbsp; 18 &nbsp; &nbsp;
                &nbsp; 4</span></div>
        <div><span style="color:rgb(206,145,120)">Thu &nbsp; &nbsp; &nbsp; 14 &nbsp; &nbsp; &nbsp; &nbsp;6 &nbsp; &nbsp;
                &nbsp; 0</span></div>
        <div><span style="color:rgb(206,145,120)">Fri &nbsp; &nbsp; &nbsp; 12 &nbsp; &nbsp; &nbsp; &nbsp;7 &nbsp; &nbsp;
                &nbsp; 6</span></div>
        <div><span style="color:rgb(206,145,120)">"""</span></div><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ----------
                pandas: referencing cells "</span>)</div><br>
        <div><span style="color:rgb(156,220,254)">df</span>.<span style="color:rgb(156,220,254)">at</span>[<span
                style="color:rgb(206,145,120)">'Tue'</span>, <span style="color:rgb(206,145,120)">'Pushups'</span>]
            <span style="color:rgb(212,212,212)">=</span> <span style="color:rgb(181,206,168)">40</span> &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># set value in a cell; df at ['tue',
                'pushups'] </span>
        </div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"Monday
                squats"</span>, <span style="color:rgb(156,220,254)">df</span>.<span
                style="color:rgb(156,220,254)">iat</span>[<span style="color:rgb(181,206,168)">0</span>, <span
                style="color:rgb(181,206,168)">2</span>]) &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># iat (index
                at) [0,2]</span></div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">df</span>)</div><br>
        <div><span style="color:rgb(206,145,120)">"""</span></div>
        <div><span style="color:rgb(206,145,120)">Monday squats 5</span></div>
        <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp;Pullups &nbsp;Pushups &nbsp;Squats</span></div>
        <div><span style="color:rgb(206,145,120)">Day</span></div>
        <div><span style="color:rgb(206,145,120)">Mon &nbsp; &nbsp; &nbsp; 20 &nbsp; &nbsp; &nbsp; 10 &nbsp; &nbsp;
                &nbsp; 5</span></div>
        <div><span style="color:rgb(206,145,120)">Tue &nbsp; &nbsp; &nbsp; 10 &nbsp; &nbsp; &nbsp; 40 &nbsp; &nbsp;
                &nbsp; 0</span></div>
        <div><span style="color:rgb(206,145,120)">Wed &nbsp; &nbsp; &nbsp; 25 &nbsp; &nbsp; &nbsp; 18 &nbsp; &nbsp;
                &nbsp; 4</span></div>
        <div><span style="color:rgb(206,145,120)">Thu &nbsp; &nbsp; &nbsp; 14 &nbsp; &nbsp; &nbsp; &nbsp;6 &nbsp; &nbsp;
                &nbsp; 0</span></div>
        <div><span style="color:rgb(206,145,120)">Fri &nbsp; &nbsp; &nbsp; 12 &nbsp; &nbsp; &nbsp; &nbsp;7 &nbsp; &nbsp;
                &nbsp; 6</span></div>
        <div><span style="color:rgb(206,145,120)">Sat &nbsp; &nbsp; &nbsp; 16 &nbsp; &nbsp; &nbsp; 17 &nbsp; &nbsp;
                &nbsp; 0</span></div>
        <div><span style="color:rgb(206,145,120)">Sun &nbsp; &nbsp; &nbsp; 10 &nbsp; &nbsp; &nbsp; &nbsp;9 &nbsp; &nbsp;
                &nbsp; 0</span></div>
        <div><span style="color:rgb(206,145,120)">"""</span></div><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ----------
                pandas: numpy style referencing "</span>)</div><br>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">df</span>.<span
                style="color:rgb(156,220,254)">loc</span>[<span style="color:rgb(206,145,120)">"Mon"</span>:<span
                style="color:rgb(206,145,120)">"Sun"</span>:<span style="color:rgb(181,206,168)">2</span>]) &nbsp;
            &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># step size = 2</span></div><br>
        <div><span style="color:rgb(206,145,120)">"""</span></div>
        <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp;Pullups &nbsp;Pushups &nbsp;Squats</span></div>
        <div><span style="color:rgb(206,145,120)">Day</span></div>
        <div><span style="color:rgb(206,145,120)">Mon &nbsp; &nbsp; &nbsp; 20 &nbsp; &nbsp; &nbsp; 10 &nbsp; &nbsp;
                &nbsp; 5 &nbsp; &nbsp; &nbsp; # tue, thu, sat are skipped</span></div>
        <div><span style="color:rgb(206,145,120)">Wed &nbsp; &nbsp; &nbsp; 25 &nbsp; &nbsp; &nbsp; 18 &nbsp; &nbsp;
                &nbsp; 4</span></div>
        <div><span style="color:rgb(206,145,120)">Fri &nbsp; &nbsp; &nbsp; 12 &nbsp; &nbsp; &nbsp; &nbsp;7 &nbsp; &nbsp;
                &nbsp; 6</span></div>
        <div><span style="color:rgb(206,145,120)">Sun &nbsp; &nbsp; &nbsp; 10 &nbsp; &nbsp; &nbsp; &nbsp;9 &nbsp; &nbsp;
                &nbsp; 0</span></div>
        <div><span style="color:rgb(206,145,120)">"""</span></div><br>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">df</span>.<span
                style="color:rgb(156,220,254)">loc</span>[[<span style="color:rgb(206,145,120)">"Fri"</span>, <span
                style="color:rgb(206,145,120)">"Mon"</span>], <span
                style="color:rgb(206,145,120)">"Pushups"</span>:<span style="color:rgb(206,145,120)">"Squats"</span>])
            &nbsp; <span style="color:rgb(106,153,85)"># specify the rows and columns wanted</span></div><br>
        <div><span style="color:rgb(206,145,120)">"""</span></div>
        <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp;Pushups &nbsp;Squats</span></div>
        <div><span style="color:rgb(206,145,120)">Day</span></div>
        <div><span style="color:rgb(206,145,120)">Fri &nbsp; &nbsp; &nbsp; &nbsp;7 &nbsp; &nbsp; &nbsp; 6</span></div>
        <div><span style="color:rgb(206,145,120)">Mon &nbsp; &nbsp; &nbsp; 10 &nbsp; &nbsp; &nbsp; 5</span></div>
        <div><span style="color:rgb(206,145,120)">"""</span></div><br>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">df</span>.<span
                style="color:rgb(156,220,254)">loc</span>[:, <span style="color:rgb(206,145,120)">"Pushups"</span>:<span
                style="color:rgb(206,145,120)">"Squats"</span>]) &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># all
                rows, only these columns</span></div><br>
        <div><span style="color:rgb(206,145,120)">"""</span></div>
        <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp;Pushups &nbsp;Squats</span></div>
        <div><span style="color:rgb(206,145,120)">Day</span></div>
        <div><span style="color:rgb(206,145,120)">Mon &nbsp; &nbsp; &nbsp; 10 &nbsp; &nbsp; &nbsp; 5</span></div>
        <div><span style="color:rgb(206,145,120)">Tue &nbsp; &nbsp; &nbsp; 40 &nbsp; &nbsp; &nbsp; 0</span></div>
        <div><span style="color:rgb(206,145,120)">Wed &nbsp; &nbsp; &nbsp; 18 &nbsp; &nbsp; &nbsp; 4</span></div>
        <div><span style="color:rgb(206,145,120)">Thu &nbsp; &nbsp; &nbsp; &nbsp;6 &nbsp; &nbsp; &nbsp; 0</span></div>
        <div><span style="color:rgb(206,145,120)">Fri &nbsp; &nbsp; &nbsp; &nbsp;7 &nbsp; &nbsp; &nbsp; 6</span></div>
        <div><span style="color:rgb(206,145,120)">Sat &nbsp; &nbsp; &nbsp; 17 &nbsp; &nbsp; &nbsp; 0</span></div>
        <div><span style="color:rgb(206,145,120)">Sun &nbsp; &nbsp; &nbsp; &nbsp;9 &nbsp; &nbsp; &nbsp; 0</span></div>
        <div><span style="color:rgb(206,145,120)">"""</span></div><br>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">df</span>.<span
                style="color:rgb(156,220,254)">iloc</span>[:, <span style="color:rgb(181,206,168)">1</span>:<span
                style="color:rgb(181,206,168)">3</span>]) &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># iloc
                uses index values instead of the row/column names, doesn't include the end index (eg. 3)</span></div>
        <br>
        <div><span style="color:rgb(206,145,120)">"""</span></div>
        <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp;Pushups &nbsp;Squats</span></div>
        <div><span style="color:rgb(206,145,120)">Day</span></div>
        <div><span style="color:rgb(206,145,120)">Mon &nbsp; &nbsp; &nbsp; 10 &nbsp; &nbsp; &nbsp; 5</span></div>
        <div><span style="color:rgb(206,145,120)">Tue &nbsp; &nbsp; &nbsp; 40 &nbsp; &nbsp; &nbsp; 0</span></div>
        <div><span style="color:rgb(206,145,120)">Wed &nbsp; &nbsp; &nbsp; 18 &nbsp; &nbsp; &nbsp; 4</span></div>
        <div><span style="color:rgb(206,145,120)">Thu &nbsp; &nbsp; &nbsp; &nbsp;6 &nbsp; &nbsp; &nbsp; 0</span></div>
        <div><span style="color:rgb(206,145,120)">Fri &nbsp; &nbsp; &nbsp; &nbsp;7 &nbsp; &nbsp; &nbsp; 6</span></div>
        <div><span style="color:rgb(206,145,120)">Sat &nbsp; &nbsp; &nbsp; 17 &nbsp; &nbsp; &nbsp; 0</span></div>
        <div><span style="color:rgb(206,145,120)">Sun &nbsp; &nbsp; &nbsp; &nbsp;9 &nbsp; &nbsp; &nbsp; 0</span></div>
        <div><span style="color:rgb(206,145,120)">"""</span></div><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ----------
                pandas: loading data from dictionaries "</span>)</div><br>
        <div><span style="color:rgb(156,220,254)">data</span> <span style="color:rgb(212,212,212)">=</span> {</div>
        <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"Mon"</span>:[<span
                style="color:rgb(181,206,168)">1</span>, <span style="color:rgb(181,206,168)">2</span>, <span
                style="color:rgb(181,206,168)">3</span>], &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span
                style="color:rgb(106,153,85)"># specify row values as a list (must be the same length for all
                columns)</span></div>
        <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"Tue"</span>:[<span
                style="color:rgb(181,206,168)">0.1</span>, <span style="color:rgb(181,206,168)">0.2</span>, <span
                style="color:rgb(181,206,168)">0.3</span>],</div>
        <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"Wed"</span>:[<span
                style="color:rgb(181,206,168)">5</span>, <span style="color:rgb(181,206,168)">6</span>, <span
                style="color:rgb(181,206,168)">7</span>],</div>
        <div>}</div><br>
        <div><span style="color:rgb(156,220,254)">df</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">pd</span>.<span style="color:rgb(78,201,176)">DataFrame</span>(<span
                style="color:rgb(156,220,254)">data</span>)</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">df</span>)</div><br>
        <div><span style="color:rgb(206,145,120)">"""</span></div>
        <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp;Mon &nbsp;Tue &nbsp;Wed</span></div>
        <div><span style="color:rgb(206,145,120)">0 &nbsp; &nbsp;1 &nbsp;0.1 &nbsp; &nbsp;5</span></div>
        <div><span style="color:rgb(206,145,120)">1 &nbsp; &nbsp;2 &nbsp;0.2 &nbsp; &nbsp;6</span></div>
        <div><span style="color:rgb(206,145,120)">2 &nbsp; &nbsp;3 &nbsp;0.3 &nbsp; &nbsp;7</span></div>
        <div><span style="color:rgb(206,145,120)">"""</span></div><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ----------
                pandas: modifying data "</span>)</div><br><br>
        <div><span style="color:rgb(156,220,254)">data</span> <span style="color:rgb(212,212,212)">=</span> {</div>
        <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"Mon"</span>:[<span
                style="color:rgb(181,206,168)">1</span>, <span style="color:rgb(181,206,168)">2</span>, <span
                style="color:rgb(181,206,168)">3</span>],</div>
        <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"Tue"</span>:[<span
                style="color:rgb(181,206,168)">0.1</span>, <span style="color:rgb(181,206,168)">0.2</span>, <span
                style="color:rgb(181,206,168)">0.3</span>],</div>
        <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"Wed"</span>:[<span
                style="color:rgb(181,206,168)">5</span>, <span style="color:rgb(181,206,168)">6</span>, <span
                style="color:rgb(181,206,168)">7</span>],</div>
        <div>}</div><br>
        <div><span style="color:rgb(156,220,254)">df</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">pd</span>.<span style="color:rgb(78,201,176)">DataFrame</span>(<span
                style="color:rgb(156,220,254)">data</span>, <span style="color:rgb(156,220,254)">index</span><span
                style="color:rgb(212,212,212)">=</span>[<span style="color:rgb(206,145,120)">"Coffee"</span>, <span
                style="color:rgb(206,145,120)">"Tea"</span>, <span style="color:rgb(206,145,120)">"Water"</span>])
            &nbsp; <span style="color:rgb(106,153,85)"># create row namesfor the dictionary data</span></div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">df</span>)</div>
        <div><span style="color:rgb(220,220,170)">print</span>()</div><br>
        <div><span style="color:rgb(156,220,254)">df</span> <span style="color:rgb(212,212,212)">*=</span> <span
                style="color:rgb(181,206,168)">3.0</span> &nbsp; <span style="color:rgb(106,153,85)"># multiply all
                cells by 3 (df is being modified)</span></div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">df</span>)</div><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(156,220,254)">df</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(156,220,254)">sin</span>(<span
                style="color:rgb(156,220,254)">df</span>) &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># calculate
                the sin() of each cell</span></div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">df</span>)</div><br>
        <div><span style="color:rgb(156,220,254)">df</span>.loc[<span
                style="color:rgb(206,145,120)">"Coffee"</span>:<span style="color:rgb(206,145,120)">"Tea"</span>] <span
                style="color:rgb(212,212,212)">-=</span> <span style="color:rgb(181,206,168)">100</span> &nbsp; <span
                style="color:rgb(106,153,85)"># select rows 'coffee' to 'tea' and subtract 100; can also use iloc too
                (index instead of names)</span></div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">df</span>)</div><br>
        <div><span style="color:rgb(206,145,120)">"""</span></div>
        <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp; Mon &nbsp;Tue &nbsp;Wed</span></div>
        <div><span style="color:rgb(206,145,120)">Coffee &nbsp; &nbsp;1 &nbsp;0.1 &nbsp; &nbsp;5</span></div>
        <div><span style="color:rgb(206,145,120)">Tea &nbsp; &nbsp; &nbsp; 2 &nbsp;0.2 &nbsp; &nbsp;6</span></div>
        <div><span style="color:rgb(206,145,120)">Water &nbsp; &nbsp; 3 &nbsp;0.3 &nbsp; &nbsp;7</span></div><br>
        <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp; Mon &nbsp;Tue &nbsp; Wed</span></div>
        <div><span style="color:rgb(206,145,120)">Coffee &nbsp;3.0 &nbsp;0.3 &nbsp;15.0</span></div>
        <div><span style="color:rgb(206,145,120)">Tea &nbsp; &nbsp; 6.0 &nbsp;0.6 &nbsp;18.0</span></div>
        <div><span style="color:rgb(206,145,120)">Water &nbsp; 9.0 &nbsp;0.9 &nbsp;21.0</span></div><br>
        <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Mon &nbsp; &nbsp;
                &nbsp; Tue &nbsp; &nbsp; &nbsp; Wed</span></div>
        <div><span style="color:rgb(206,145,120)">Coffee &nbsp;0.141120 &nbsp;0.295520 &nbsp;0.650288</span></div>
        <div><span style="color:rgb(206,145,120)">Tea &nbsp; &nbsp;-0.279415 &nbsp;0.564642 -0.750987</span></div>
        <div><span style="color:rgb(206,145,120)">Water &nbsp; 0.412118 &nbsp;0.783327 &nbsp;0.836656</span></div><br>
        <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Mon &nbsp;
                &nbsp; &nbsp; &nbsp;Tue &nbsp; &nbsp; &nbsp; &nbsp; Wed</span></div>
        <div><span style="color:rgb(206,145,120)">Coffee &nbsp;-99.858880 -99.704480 &nbsp;-99.349712</span></div>
        <div><span style="color:rgb(206,145,120)">Tea &nbsp; &nbsp;-100.279415 -99.435358 -100.750987</span></div>
        <div><span style="color:rgb(206,145,120)">Water &nbsp; &nbsp; 0.412118 &nbsp; 0.783327 &nbsp;
                &nbsp;0.836656</span></div>
        <div><span style="color:rgb(206,145,120)">"""</span></div><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ----------
                pandas: functions "</span>)</div><br><br>
        <div><span style="color:rgb(156,220,254)">df</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">pd</span>.<span style="color:rgb(78,201,176)">DataFrame</span>(</div>
        <div>&nbsp; &nbsp; [[<span style="color:rgb(181,206,168)">1</span>, <span
                style="color:rgb(181,206,168)">2</span>, <span style="color:rgb(181,206,168)">3</span>], [<span
                style="color:rgb(181,206,168)">4</span>, <span style="color:rgb(181,206,168)">5</span>, <span
                style="color:rgb(181,206,168)">6</span>], [<span style="color:rgb(181,206,168)">7</span>, <span
                style="color:rgb(181,206,168)">8</span>, <span style="color:rgb(181,206,168)">9</span>]], &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># specify 2 dimensional array</span></div>
        <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">columns</span><span
                style="color:rgb(212,212,212)">=</span>[<span style="color:rgb(206,145,120)">'Dogs'</span>, <span
                style="color:rgb(206,145,120)">'Cats'</span>, <span style="color:rgb(206,145,120)">'Mice'</span>],
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># specify columns</span></div>
        <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">index</span><span
                style="color:rgb(212,212,212)">=</span>[<span style="color:rgb(206,145,120)">'Meat'</span>, <span
                style="color:rgb(206,145,120)">'Fish'</span>, <span style="color:rgb(206,145,120)">'Vegetables'</span>],
            &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># specify row/index names</span></div>
        <div>)</div><br>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">df</span>)</div>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">df</span>.<span
                style="color:rgb(220,220,170)">sum</span>()) &nbsp; &nbsp; &nbsp; &nbsp; <span
                style="color:rgb(106,153,85)"># add all row values as a sum for each column; return value is a
                pandas.series</span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                style="color:rgb(106,153,85)"># can use other statistics functions such as: std deviation, variance,
                etc.</span></div><br>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(78,201,176)">type</span>(<span
                style="color:rgb(156,220,254)">df</span>.<span style="color:rgb(220,220,170)">sum</span>())) &nbsp;
            <span style="color:rgb(106,153,85)"># each column in a pandas dataframe is a pandas data series</span>
        </div>
        <br>
        <div><span style="color:rgb(206,145,120)">"""</span></div>
        <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dogs &nbsp;Cats
                &nbsp;Mice</span></div>
        <div><span style="color:rgb(206,145,120)">Meat &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1 &nbsp; &nbsp; 2 &nbsp;
                &nbsp; 3</span></div>
        <div><span style="color:rgb(206,145,120)">Fish &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 4 &nbsp; &nbsp; 5 &nbsp;
                &nbsp; 6</span></div>
        <div><span style="color:rgb(206,145,120)">Vegetables &nbsp; &nbsp; 7 &nbsp; &nbsp; 8 &nbsp; &nbsp; 9</span>
        </div><br>
        <div><span style="color:rgb(206,145,120)">Dogs &nbsp; &nbsp;12</span></div>
        <div><span style="color:rgb(206,145,120)">Cats &nbsp; &nbsp;15</span></div>
        <div><span style="color:rgb(206,145,120)">Mice &nbsp; &nbsp;18</span></div>
        <div><span style="color:rgb(206,145,120)">dtype: int64</span></div><br>
        <div><span style="color:rgb(206,145,120)">&lt;class 'pandas.Series'&gt;</span></div>
        <div><span style="color:rgb(206,145,120)">"""</span></div><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ----------
                pandas: data series "</span>)</div><br>
        <div><span style="color:rgb(156,220,254)">cats</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(156,220,254)">df</span>[<span style="color:rgb(206,145,120)">'Cats'</span>] &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># get a column from the
                dataframe</span></div><br>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">cats</span>)</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(78,201,176)">list</span>(<span
                style="color:rgb(156,220,254)">cats</span>.<span style="color:rgb(156,220,254)">index</span>)) &nbsp;
            &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># get a list of the row names</span></div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(78,201,176)">type</span>(<span
                style="color:rgb(156,220,254)">cats</span>.<span style="color:rgb(156,220,254)">values</span>)) &nbsp;
            &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># the column values types is a kind of numpy
                array</span></div><br>
        <div><span style="color:rgb(206,145,120)">"""</span></div>
        <div><span style="color:rgb(206,145,120)">Meat &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;2</span></div>
        <div><span style="color:rgb(206,145,120)">Fish &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;5</span></div>
        <div><span style="color:rgb(206,145,120)">Vegetables &nbsp; &nbsp;8</span></div>
        <div><span style="color:rgb(206,145,120)">Name: Cats, dtype: int64</span></div><br>
        <div><span style="color:rgb(206,145,120)">['Meat', 'Fish', 'Vegetables']</span></div><br>
        <div><span style="color:rgb(206,145,120)">&lt;class 'numpy.ndarray'&gt;</span></div>
        <div><span style="color:rgb(206,145,120)">"""</span></div><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ----------
                pandas: random dataframes "</span>)</div><br><br>
        <div><span style="color:rgb(156,220,254)">df</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">pd</span>.<span style="color:rgb(78,201,176)">DataFrame</span>(</div>
        <div>&nbsp; &nbsp; <span style="color:rgb(78,201,176)">np</span>.<span
                style="color:rgb(78,201,176)">random</span>.<span style="color:rgb(156,220,254)">randint</span>(<span
                style="color:rgb(181,206,168)">0</span>, <span style="color:rgb(181,206,168)">4</span>, <span
                style="color:rgb(181,206,168)">60</span>).<span style="color:rgb(220,220,170)">reshape</span>(<span
                style="color:rgb(181,206,168)">20</span>, <span style="color:rgb(181,206,168)">3</span>), &nbsp; &nbsp;
            <span style="color:rgb(106,153,85)"># random integers; value is between 0 - 3; generate 60 values; reshape
                to 20 rows x 3 cols</span>
        </div>
        <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">columns</span><span
                style="color:rgb(212,212,212)">=</span>[<span style="color:rgb(206,145,120)">"One"</span>, <span
                style="color:rgb(206,145,120)">"Two"</span>, <span style="color:rgb(206,145,120)">"Three"</span>],
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># specify col
                names</span></div>
        <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">index</span><span
                style="color:rgb(212,212,212)">=</span>[<span style="color:rgb(220,220,170)">chr</span>(<span
                style="color:rgb(156,220,254)">x</span>) <span style="color:rgb(197,134,192)">for</span> <span
                style="color:rgb(156,220,254)">x</span> <span style="color:rgb(197,134,192)">in</span> <span
                style="color:rgb(78,201,176)">range</span>(<span style="color:rgb(181,206,168)">65</span>, <span
                style="color:rgb(181,206,168)">85</span>)] &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                style="color:rgb(106,153,85)"># specify row/index names using a list comprehension</span></div>
        <div>)</div><br>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">df</span>)</div><br>
        <div><span style="color:rgb(206,145,120)">"""</span></div>
        <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp;One &nbsp;Two &nbsp;Three</span></div>
        <div><span style="color:rgb(206,145,120)">A &nbsp; &nbsp;2 &nbsp; &nbsp;2 &nbsp; &nbsp; &nbsp;1</span></div>
        <div><span style="color:rgb(206,145,120)">B &nbsp; &nbsp;2 &nbsp; &nbsp;1 &nbsp; &nbsp; &nbsp;0</span></div>
        <div><span style="color:rgb(206,145,120)">C &nbsp; &nbsp;1 &nbsp; &nbsp;0 &nbsp; &nbsp; &nbsp;2</span></div>
        <div><span style="color:rgb(206,145,120)">D &nbsp; &nbsp;0 &nbsp; &nbsp;2 &nbsp; &nbsp; &nbsp;1</span></div>
        <div><span style="color:rgb(206,145,120)">E &nbsp; &nbsp;0 &nbsp; &nbsp;1 &nbsp; &nbsp; &nbsp;2</span></div>
        <div><span style="color:rgb(206,145,120)">F &nbsp; &nbsp;1 &nbsp; &nbsp;2 &nbsp; &nbsp; &nbsp;0</span></div>
        <div><span style="color:rgb(206,145,120)">G &nbsp; &nbsp;3 &nbsp; &nbsp;3 &nbsp; &nbsp; &nbsp;2</span></div>
        <div><span style="color:rgb(206,145,120)">H &nbsp; &nbsp;3 &nbsp; &nbsp;3 &nbsp; &nbsp; &nbsp;3</span></div>
        <div><span style="color:rgb(206,145,120)">I &nbsp; &nbsp;1 &nbsp; &nbsp;3 &nbsp; &nbsp; &nbsp;3</span></div>
        <div><span style="color:rgb(206,145,120)">J &nbsp; &nbsp;1 &nbsp; &nbsp;2 &nbsp; &nbsp; &nbsp;1</span></div>
        <div><span style="color:rgb(206,145,120)">K &nbsp; &nbsp;3 &nbsp; &nbsp;1 &nbsp; &nbsp; &nbsp;1</span></div>
        <div><span style="color:rgb(206,145,120)">L &nbsp; &nbsp;1 &nbsp; &nbsp;2 &nbsp; &nbsp; &nbsp;3</span></div>
        <div><span style="color:rgb(206,145,120)">M &nbsp; &nbsp;2 &nbsp; &nbsp;2 &nbsp; &nbsp; &nbsp;0</span></div>
        <div><span style="color:rgb(206,145,120)">N &nbsp; &nbsp;3 &nbsp; &nbsp;2 &nbsp; &nbsp; &nbsp;2</span></div>
        <div><span style="color:rgb(206,145,120)">O &nbsp; &nbsp;1 &nbsp; &nbsp;3 &nbsp; &nbsp; &nbsp;0</span></div>
        <div><span style="color:rgb(206,145,120)">P &nbsp; &nbsp;0 &nbsp; &nbsp;3 &nbsp; &nbsp; &nbsp;1</span></div>
        <div><span style="color:rgb(206,145,120)">Q &nbsp; &nbsp;3 &nbsp; &nbsp;0 &nbsp; &nbsp; &nbsp;1</span></div>
        <div><span style="color:rgb(206,145,120)">R &nbsp; &nbsp;1 &nbsp; &nbsp;3 &nbsp; &nbsp; &nbsp;2</span></div>
        <div><span style="color:rgb(206,145,120)">S &nbsp; &nbsp;3 &nbsp; &nbsp;3 &nbsp; &nbsp; &nbsp;2</span></div>
        <div><span style="color:rgb(206,145,120)">T &nbsp; &nbsp;0 &nbsp; &nbsp;1 &nbsp; &nbsp; &nbsp;0</span></div>
        <div><span style="color:rgb(206,145,120)">"""</span></div><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ----------
                pandas: sorting "</span>)</div><br>
        <div><span style="color:rgb(156,220,254)">df1</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(156,220,254)">df</span>.<span style="color:rgb(220,220,170)">sort_values</span>(<span
                style="color:rgb(156,220,254)">by</span><span style="color:rgb(212,212,212)">=</span>[<span
                style="color:rgb(206,145,120)">"One"</span>, <span style="color:rgb(206,145,120)">"Two"</span>, <span
                style="color:rgb(206,145,120)">"Three"</span>], <span
                style="color:rgb(156,220,254)">ascending</span><span style="color:rgb(212,212,212)">=</span><span
                style="color:rgb(86,156,214)">False</span>) &nbsp; <span style="color:rgb(106,153,85)"># sort by col 1
                first, then col 2, col 3; in desc order</span></div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">df1</span>) &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span
                style="color:rgb(106,153,85)"># sort axis by default is axis 0 (rows), axis 1 is cols</span></div>
        <div><span style="color:rgb(220,220,170)">print</span>() &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># ie. sort the rows
                (move them around) but keep the cols the same</span></div>
        <div><span style="color:rgb(156,220,254)">df2</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(156,220,254)">df</span>.<span style="color:rgb(220,220,170)">transpose</span>() &nbsp;
            &nbsp;<span style="color:rgb(106,153,85)"># flip columns to rows</span></div>
        <div><span style="color:rgb(156,220,254)">df2</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(156,220,254)">df2</span>.<span style="color:rgb(220,220,170)">sort_values</span>(<span
                style="color:rgb(156,220,254)">by</span><span style="color:rgb(212,212,212)">=</span>[<span
                style="color:rgb(206,145,120)">"One"</span>, <span style="color:rgb(206,145,120)">"Two"</span>, <span
                style="color:rgb(206,145,120)">"Three"</span>], <span style="color:rgb(156,220,254)">axis</span><span
                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">1</span>, <span
                style="color:rgb(156,220,254)">ascending</span><span style="color:rgb(212,212,212)">=</span><span
                style="color:rgb(86,156,214)">False</span>) &nbsp;<span style="color:rgb(106,153,85)"># sort by row 1
                first, then row 2, row 3; in desc order</span></div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">df2</span>) &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># sort by axis 1 (columns)</span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># ie. sort the
                columns, but keep the rows in place</span></div>
        <div><span style="color:rgb(206,145,120)">"""</span></div>
        <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp;One &nbsp;Two &nbsp;Three</span></div>
        <div><span style="color:rgb(206,145,120)">G &nbsp; &nbsp;3 &nbsp; &nbsp;1 &nbsp; &nbsp; &nbsp;1</span></div>
        <div><span style="color:rgb(206,145,120)">C &nbsp; &nbsp;3 &nbsp; &nbsp;1 &nbsp; &nbsp; &nbsp;0</span></div>
        <div><span style="color:rgb(206,145,120)">L &nbsp; &nbsp;3 &nbsp; &nbsp;0 &nbsp; &nbsp; &nbsp;3</span></div>
        <div><span style="color:rgb(206,145,120)">F &nbsp; &nbsp;2 &nbsp; &nbsp;3 &nbsp; &nbsp; &nbsp;2</span></div>
        <div><span style="color:rgb(206,145,120)">D &nbsp; &nbsp;2 &nbsp; &nbsp;2 &nbsp; &nbsp; &nbsp;3</span></div>
        <div><span style="color:rgb(206,145,120)">T &nbsp; &nbsp;2 &nbsp; &nbsp;2 &nbsp; &nbsp; &nbsp;3</span></div>
        <div><span style="color:rgb(206,145,120)">J &nbsp; &nbsp;2 &nbsp; &nbsp;2 &nbsp; &nbsp; &nbsp;1</span></div>
        <div><span style="color:rgb(206,145,120)">O &nbsp; &nbsp;2 &nbsp; &nbsp;2 &nbsp; &nbsp; &nbsp;0</span></div>
        <div><span style="color:rgb(206,145,120)">I &nbsp; &nbsp;2 &nbsp; &nbsp;1 &nbsp; &nbsp; &nbsp;2</span></div>
        <div><span style="color:rgb(206,145,120)">S &nbsp; &nbsp;2 &nbsp; &nbsp;0 &nbsp; &nbsp; &nbsp;3</span></div>
        <div><span style="color:rgb(206,145,120)">R &nbsp; &nbsp;1 &nbsp; &nbsp;3 &nbsp; &nbsp; &nbsp;1</span></div>
        <div><span style="color:rgb(206,145,120)">N &nbsp; &nbsp;1 &nbsp; &nbsp;3 &nbsp; &nbsp; &nbsp;0</span></div>
        <div><span style="color:rgb(206,145,120)">H &nbsp; &nbsp;1 &nbsp; &nbsp;2 &nbsp; &nbsp; &nbsp;3</span></div>
        <div><span style="color:rgb(206,145,120)">E &nbsp; &nbsp;0 &nbsp; &nbsp;3 &nbsp; &nbsp; &nbsp;3</span></div>
        <div><span style="color:rgb(206,145,120)">B &nbsp; &nbsp;0 &nbsp; &nbsp;3 &nbsp; &nbsp; &nbsp;2</span></div>
        <div><span style="color:rgb(206,145,120)">Q &nbsp; &nbsp;0 &nbsp; &nbsp;3 &nbsp; &nbsp; &nbsp;1</span></div>
        <div><span style="color:rgb(206,145,120)">K &nbsp; &nbsp;0 &nbsp; &nbsp;1 &nbsp; &nbsp; &nbsp;3</span></div>
        <div><span style="color:rgb(206,145,120)">M &nbsp; &nbsp;0 &nbsp; &nbsp;1 &nbsp; &nbsp; &nbsp;1</span></div>
        <div><span style="color:rgb(206,145,120)">A &nbsp; &nbsp;0 &nbsp; &nbsp;1 &nbsp; &nbsp; &nbsp;0</span></div>
        <div><span style="color:rgb(206,145,120)">P &nbsp; &nbsp;0 &nbsp; &nbsp;0 &nbsp; &nbsp; &nbsp;0</span></div><br>
        <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp;G &nbsp;C &nbsp;L &nbsp;F &nbsp;D &nbsp;T
                &nbsp;J &nbsp;O &nbsp;I &nbsp;S &nbsp;R &nbsp;N &nbsp;H &nbsp;E &nbsp;B &nbsp;Q &nbsp;K &nbsp;M &nbsp;A
                &nbsp;P</span></div>
        <div><span style="color:rgb(206,145,120)">One &nbsp; &nbsp;3 &nbsp;3 &nbsp;3 &nbsp;2 &nbsp;2 &nbsp;2 &nbsp;2
                &nbsp;2 &nbsp;2 &nbsp;2 &nbsp;1 &nbsp;1 &nbsp;1 &nbsp;0 &nbsp;0 &nbsp;0 &nbsp;0 &nbsp;0 &nbsp;0
                &nbsp;0</span></div>
        <div><span style="color:rgb(206,145,120)">Two &nbsp; &nbsp;1 &nbsp;1 &nbsp;0 &nbsp;3 &nbsp;2 &nbsp;2 &nbsp;2
                &nbsp;2 &nbsp;1 &nbsp;0 &nbsp;3 &nbsp;3 &nbsp;2 &nbsp;3 &nbsp;3 &nbsp;3 &nbsp;1 &nbsp;1 &nbsp;1
                &nbsp;0</span></div>
        <div><span style="color:rgb(206,145,120)">Three &nbsp;1 &nbsp;0 &nbsp;3 &nbsp;2 &nbsp;3 &nbsp;3 &nbsp;1 &nbsp;0
                &nbsp;2 &nbsp;3 &nbsp;1 &nbsp;0 &nbsp;3 &nbsp;3 &nbsp;2 &nbsp;1 &nbsp;3 &nbsp;1 &nbsp;0 &nbsp;0</span>
        </div>
        <div><span style="color:rgb(206,145,120)">"""</span></div><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ---------- mall
                customers database "</span>)</div><br><br>
        <div><span style="color:rgb(156,220,254)">df</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">pd</span>.<span style="color:rgb(220,220,170)">read_csv</span>(<span
                style="color:rgb(206,145,120)">"mall_customers.<wbr>csv"</span>, <span
                style="color:rgb(156,220,254)">index_col</span><span style="color:rgb(212,212,212)">=</span><span
                style="color:rgb(181,206,168)">0</span>) &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># use the
                first column as a unique id</span></div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">df</span>.<span
                style="color:rgb(156,220,254)">columns</span>)</div><br>
        <div><span style="color:rgb(156,220,254)">df</span>.<span style="color:rgb(156,220,254)">columns</span> <span
                style="color:rgb(212,212,212)">=</span> [<span style="color:rgb(206,145,120)">"Gender"</span>, <span
                style="color:rgb(206,145,120)">"Age"</span>, <span style="color:rgb(206,145,120)">"Income"</span>, <span
                style="color:rgb(206,145,120)">"Spending"</span>] &nbsp; &nbsp;<span style="color:rgb(106,153,85)">#
                rename columns</span></div><br>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">df</span>.<span
                style="color:rgb(156,220,254)">columns</span>)</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">df</span>.<span
                style="color:rgb(220,220,170)">head</span>())</div><br>
        <div><span style="color:rgb(206,145,120)">"""</span></div>
        <div><span style="color:rgb(206,145,120)">Index(['Gender', 'Age', 'Annual Income (k$)', 'Spending Score
                (1-100)'], dtype='str')</span></div><br>
        <div><span style="color:rgb(206,145,120)">Index(['Gender', 'Age', 'Income', 'Spending'], dtype='str')</span>
        </div>
        <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Gender &nbsp;Age
                &nbsp;Income &nbsp;Spending</span></div>
        <div><span style="color:rgb(206,145,120)">CustomerID</span></div>
        <div><span style="color:rgb(206,145,120)">1 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Male &nbsp; 19 &nbsp;
                &nbsp; &nbsp;15 &nbsp; &nbsp; &nbsp; &nbsp;39</span></div>
        <div><span style="color:rgb(206,145,120)">2 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Male &nbsp; 21 &nbsp;
                &nbsp; &nbsp;15 &nbsp; &nbsp; &nbsp; &nbsp;81</span></div>
        <div><span style="color:rgb(206,145,120)">3 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 20 &nbsp; &nbsp;
                &nbsp;16 &nbsp; &nbsp; &nbsp; &nbsp; 6</span></div>
        <div><span style="color:rgb(206,145,120)">4 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 23 &nbsp; &nbsp;
                &nbsp;16 &nbsp; &nbsp; &nbsp; &nbsp;77</span></div>
        <div><span style="color:rgb(206,145,120)">5 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 31 &nbsp; &nbsp;
                &nbsp;17 &nbsp; &nbsp; &nbsp; &nbsp;40</span></div>
        <div><span style="color:rgb(206,145,120)">"""</span></div><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ----------
                pandas: grouping "</span>)</div><br><br>
        <div><span style="color:rgb(156,220,254)">gp</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(156,220,254)">df</span>.<span style="color:rgb(220,220,170)">groupby</span>(<span
                style="color:rgb(206,145,120)">"Gender"</span>) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># can group by a single column or a list of columns</span>
        </div><br>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"Number of
                groups:"</span>, <span style="color:rgb(156,220,254)">gp</span>.<span
                style="color:rgb(156,220,254)">ngroups</span>) &nbsp; &nbsp; &nbsp; <span
                style="color:rgb(106,153,85)"># ngroups = number of groups = 2</span></div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"Groups:"</span>,
            <span style="color:rgb(156,220,254)">gp</span>.<span style="color:rgb(156,220,254)">groups</span>) &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># return obj is a
                dict with the group name as a key and the list of row ids in a list</span>
        </div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"Group
                keys:"</span>, <span style="color:rgb(156,220,254)">gp</span>.<span
                style="color:rgb(156,220,254)">groups</span>.<span style="color:rgb(220,220,170)">keys</span>()) &nbsp;
            &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># names of the group keys</span></div><br>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">gp</span>.<span
                style="color:rgb(220,220,170)">get_group</span>(<span style="color:rgb(206,145,120)">"Female"</span>))
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># return obj is a
                dataframe; an array with only the rows that are female</span></div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(78,201,176)">type</span>(<span
                style="color:rgb(156,220,254)">gp</span>.<span style="color:rgb(220,220,170)">get_group</span>(<span
                style="color:rgb(206,145,120)">"<wbr>Female"</span>)))</div><br>
        <div><span style="color:rgb(206,145,120)">"""</span></div>
        <div><span style="color:rgb(206,145,120)">Number of groups: 2</span></div>
        <div><span style="color:rgb(206,145,120)">Groups: {'Female': [3, 4, 5, 6, 7, 8, 10, 12, 13, 14, 17, 20, 23, 25,
                27, 29, 30, 32, 35, 36, 37, 38, 39, 40, 41, 44, 45, 46, 47, 48, 49, 50, 51, 53, 55, 57, 59, 63, 64, 67,
                68, 70, 72, 73, 74, 77, 79, 80, 84, 85, 87, 88, 89, 90, 91, 94, 95, 97, 98, 101, 102, 106, 107, 112,
                113, 115, 116, 117, 118, 119, 120, 122, 123, 125, 126, 133, 134, 136, 137, 140, 141, 143, 144, 148, 149,
                153, 154, 155, 156, 158, 160, 161, 162, 164, 166, 168, 169, 175, 176, 181, ...], 'Male': [1, 2, 9, 11,
                15, 16, 18, 19, 21, 22, 24, 26, 28, 31, 33, 34, 42, 43, 52, 54, 56, 58, 60, 61, 62, 65, 66, 69, 71, 75,
                76, 78, 81, 82, 83, 86, 92, 93, 96, 99, 100, 103, 104, 105, 108, 109, 110, 111, 114, 121, 124, 127, 128,
                129, 130, 131, 132, 135, 138, 139, 142, 145, 146, 147, 150, 151, 152, 157, 159, 163, 165, 167, 170, 171,
                172, 173, 174, 177, 178, 179, 180, 183, 186, 188, 193, 198, 199, 200]}</span></div>
        <div><span style="color:rgb(206,145,120)">Group keys: dict_keys(['Female', 'Male'])</span></div>
        <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Gender &nbsp;Age
                &nbsp;Income &nbsp;Spending</span></div>
        <div><span style="color:rgb(206,145,120)">CustomerID</span></div>
        <div><span style="color:rgb(206,145,120)">3 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 20 &nbsp; &nbsp;
                &nbsp;16 &nbsp; &nbsp; &nbsp; &nbsp; 6</span></div>
        <div><span style="color:rgb(206,145,120)">4 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 23 &nbsp; &nbsp;
                &nbsp;16 &nbsp; &nbsp; &nbsp; &nbsp;77</span></div>
        <div><span style="color:rgb(206,145,120)">5 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 31 &nbsp; &nbsp;
                &nbsp;17 &nbsp; &nbsp; &nbsp; &nbsp;40</span></div>
        <div><span style="color:rgb(206,145,120)">6 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 22 &nbsp; &nbsp;
                &nbsp;17 &nbsp; &nbsp; &nbsp; &nbsp;76</span></div>
        <div><span style="color:rgb(206,145,120)">7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 35 &nbsp; &nbsp;
                &nbsp;18 &nbsp; &nbsp; &nbsp; &nbsp; 6</span></div>
        <div><span style="color:rgb(197,134,192)">... </span><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp;... &nbsp;... &nbsp; &nbsp; ... &nbsp; &nbsp; &nbsp; ...</span></div>
        <div><span style="color:rgb(206,145,120)">192 &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 32 &nbsp; &nbsp; 103
                &nbsp; &nbsp; &nbsp; &nbsp;69</span></div>
        <div><span style="color:rgb(206,145,120)">194 &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 38 &nbsp; &nbsp; 113
                &nbsp; &nbsp; &nbsp; &nbsp;91</span></div>
        <div><span style="color:rgb(206,145,120)">195 &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 47 &nbsp; &nbsp; 120
                &nbsp; &nbsp; &nbsp; &nbsp;16</span></div>
        <div><span style="color:rgb(206,145,120)">196 &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 35 &nbsp; &nbsp; 120
                &nbsp; &nbsp; &nbsp; &nbsp;79</span></div>
        <div><span style="color:rgb(206,145,120)">197 &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 45 &nbsp; &nbsp; 126
                &nbsp; &nbsp; &nbsp; &nbsp;28</span></div><br>
        <div><span style="color:rgb(206,145,120)">[112 rows x 4 columns]</span></div>
        <div><span style="color:rgb(206,145,120)">&lt;class 'pandas.DataFrame'&gt;</span></div>
        <div><span style="color:rgb(206,145,120)">"""</span></div><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ----------
                pandas: aggregate functions "</span>)</div><br>
        <div><span style="color:rgb(106,153,85)"># aggregate: calculate a statistic over a set of data. eg. std dev,
                mean, avg, variance, etc</span></div>
        <div><span style="color:rgb(106,153,85)"># note: our dataframe is not all numerical (ie. gender) so the
                aggregate functions will not work on this.</span></div>
        <div><span style="color:rgb(106,153,85)"># solution: get a dataframe for just the numerical data</span></div>
        <div><span style="color:rgb(106,153,85)"># note: will also work if we group the gender data first</span></div>
        <br>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">df</span>.<span
                style="color:rgb(156,220,254)">loc</span>[:, <span style="color:rgb(206,145,120)">"Age"</span>:<span
                style="color:rgb(206,145,120)">"Spending"</span>].<span style="color:rgb(220,220,170)">mean</span>())
            &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># using just the Age -&gt; Spending cols, calculate the
                mean value for each</span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># ie. get just
                the columns that are numerical</span></div><br>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">df</span>[<span
                style="color:rgb(206,145,120)">"Age"</span>].<span style="color:rgb(220,220,170)">mean</span>()) <span
                style="color:rgb(106,153,85)"># get a data series for just the age column</span></div><br>
        <div><span style="color:rgb(156,220,254)">gp</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(156,220,254)">df</span>.<span style="color:rgb(220,220,170)">groupby</span>(<span
                style="color:rgb(206,145,120)">"Gender"</span>) &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># get
                a group for the Gender col</span></div><br>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">gp</span>.<span
                style="color:rgb(220,220,170)">mean</span>()) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span
                style="color:rgb(106,153,85)"># get the mean value for each column for the 2 groups</span></div>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">gp</span>.<span
                style="color:rgb(220,220,170)">mean</span>().<span style="color:rgb(156,220,254)">loc</span>[<span
                style="color:rgb(206,145,120)">"Female"</span>, <span style="color:rgb(206,145,120)">"Age"</span>])
            &nbsp; <span style="color:rgb(106,153,85)"># get the value at cell location 'female' and 'age'</span></div>
        <br>
        <div><span style="color:rgb(206,145,120)">"""</span></div>
        <div><span style="color:rgb(206,145,120)">Age &nbsp; &nbsp; &nbsp; &nbsp; 38.85</span></div>
        <div><span style="color:rgb(206,145,120)">Income &nbsp; &nbsp; &nbsp;60.56</span></div>
        <div><span style="color:rgb(206,145,120)">Spending &nbsp; &nbsp;50.20</span></div>
        <div><span style="color:rgb(206,145,120)">dtype: float64</span></div><br>
        <div><span style="color:rgb(206,145,120)">38.85</span></div><br>
        <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Age &nbsp; &nbsp;
                Income &nbsp; Spending</span></div>
        <div><span style="color:rgb(206,145,120)">Gender</span></div>
        <div><span style="color:rgb(206,145,120)">Female &nbsp;38.098214 &nbsp;59.250000 &nbsp;51.526786</span></div>
        <div><span style="color:rgb(206,145,120)">Male &nbsp; &nbsp;39.806818 &nbsp;62.227273 &nbsp;48.511364</span>
        </div><br>
        <div><span style="color:rgb(206,145,120)">38.098214285714285</span></div>
        <div><span style="color:rgb(206,145,120)">"""</span></div><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ----------
                pandas: filtering "</span>)</div><br>
        <div><span style="color:rgb(156,220,254)">df_filtered</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(156,220,254)">df</span>[(<span style="color:rgb(156,220,254)">df</span>[<span
                style="color:rgb(206,145,120)">'Gender'</span>] <span style="color:rgb(220,220,170)">==</span> <span
                style="color:rgb(206,145,120)">'Female'</span>) <span style="color:rgb(220,220,170)">&amp;</span> (<span
                style="color:rgb(156,220,254)">df</span>[<span style="color:rgb(206,145,120)">'Age'</span>] <span
                style="color:rgb(220,220,170)">&gt;</span> <span style="color:rgb(181,206,168)">40</span>)] &nbsp;
            &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># create a new dataframe from a subset of another
                dataframe</span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># filter values to get ones that
                have:</span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># &nbsp;gender = female and age &gt;
                40</span></div><br>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">df_filtered</span>)
        </div><br>
        <div><span style="color:rgb(206,145,120)">"""</span></div>
        <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Gender &nbsp;Age
                &nbsp;Income &nbsp;Spending</span></div>
        <div><span style="color:rgb(206,145,120)">CustomerID</span></div>
        <div><span style="color:rgb(206,145,120)">13 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Female &nbsp; 58 &nbsp; &nbsp;
                &nbsp;20 &nbsp; &nbsp; &nbsp; &nbsp;15</span></div>
        <div><span style="color:rgb(206,145,120)">23 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Female &nbsp; 46 &nbsp; &nbsp;
                &nbsp;25 &nbsp; &nbsp; &nbsp; &nbsp; 5</span></div>
        <div><span style="color:rgb(206,145,120)">25 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Female &nbsp; 54 &nbsp; &nbsp;
                &nbsp;28 &nbsp; &nbsp; &nbsp; &nbsp;14</span></div>
        <div><span style="color:rgb(206,145,120)">27 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Female &nbsp; 45 &nbsp; &nbsp;
                &nbsp;28 &nbsp; &nbsp; &nbsp; &nbsp;32</span></div>
        <div><span style="color:rgb(206,145,120)">35 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Female &nbsp; 49 &nbsp; &nbsp;
                &nbsp;33 &nbsp; &nbsp; &nbsp; &nbsp;14</span></div>
        <div><span style="color:rgb(206,145,120)">37 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Female &nbsp; 42 &nbsp; &nbsp;
                &nbsp;34 &nbsp; &nbsp; &nbsp; &nbsp;17</span></div>
        <div><span style="color:rgb(206,145,120)">"""</span></div>
        <div class="yj6qo ajU">
            <div id=":151" class="ajR" role="button" tabindex="0" data-tooltip="Show trimmed content"
                aria-label="Show trimmed content" aria-expanded="false"><img class="ajT"
                    src="//ssl.gstatic.com/ui/v1/icons/mail/images/cleardot.gif"></div>
        </div>
        <div class="adL"><br><br></div>
    </div>
</div>
  `

        const html3 = `
  <div dir="ltr">
    <div style="color:rgb(204,204,204);font-family:monospace;font-size:13px;line-height:17px;">
        <div class="adM"><br></div>
        <div><span style="color:rgb(197,134,192)">import</span> <span style="color:rgb(78,201,176)">pandas</span> <span
                style="color:rgb(197,134,192)">as</span> <span style="color:rgb(78,201,176)">pd</span></div>
        <div><span style="color:rgb(197,134,192)">import</span> <span
                style="color:rgb(78,201,176)">matplotlib</span>.<span style="color:rgb(78,201,176)">pyplot</span> <span
                style="color:rgb(197,134,192)">as</span> <span style="color:rgb(78,201,176)">plt</span></div>
        <div><span style="color:rgb(197,134,192)">import</span> <span style="color:rgb(78,201,176)">seaborn</span> <span
                style="color:rgb(197,134,192)">as</span> <span style="color:rgb(78,201,176)">sn</span></div>
        <div><span style="color:rgb(197,134,192)">from</span> <span style="color:rgb(78,201,176)">sklearn</span>.<span
                style="color:rgb(78,201,176)">cluster</span> <span style="color:rgb(197,134,192)">import</span> <span
                style="color:rgb(78,201,176)">KMeans</span></div>
        <div><span style="color:rgb(197,134,192)">from</span> <span style="color:rgb(78,201,176)">sklearn</span>.<span
                style="color:rgb(78,201,176)">preprocessing</span> <span style="color:rgb(197,134,192)">import</span>
            <span style="color:rgb(78,201,176)">LabelEncoder</span>, <span
                style="color:rgb(78,201,176)">StandardScaler</span>
        </div>
        <div><span style="color:rgb(197,134,192)">from</span> <span style="color:rgb(78,201,176)">sklearn</span>.<span
                style="color:rgb(78,201,176)">model_selection</span> <span style="color:rgb(197,134,192)">import</span>
            <span style="color:rgb(220,220,170)">train_test_split</span>
        </div>
        <div><span style="color:rgb(197,134,192)">import</span> tf_keras <span style="color:rgb(197,134,192)">as</span>
            <span style="color:rgb(78,201,176)">keras</span>
        </div>
        <div><span style="color:rgb(197,134,192)">from</span> <span style="color:rgb(78,201,176)">keras</span>.<span
                style="color:rgb(78,201,176)">utils</span> <span style="color:rgb(197,134,192)">import</span> <span
                style="color:rgb(220,220,170)">to_categorical</span></div>
        <div><span style="color:rgb(197,134,192)">from</span> <span style="color:rgb(78,201,176)">keras</span>.<span
                style="color:rgb(78,201,176)">models</span> <span style="color:rgb(197,134,192)">import</span> <span
                style="color:rgb(78,201,176)">Sequential</span></div>
        <div><span style="color:rgb(197,134,192)">from</span> <span style="color:rgb(78,201,176)">keras</span>.<span
                style="color:rgb(78,201,176)">layers</span> <span style="color:rgb(197,134,192)">import</span> <span
                style="color:rgb(78,201,176)">Dense</span></div>
        <div><span style="color:rgb(197,134,192)">from</span> <span style="color:rgb(78,201,176)">keras</span>.<span
                style="color:rgb(78,201,176)">metrics</span> <span style="color:rgb(197,134,192)">import</span> <span
                style="color:rgb(78,201,176)">Accuracy</span></div>
        <div><span style="color:rgb(197,134,192)">from</span> <span style="color:rgb(78,201,176)">sklearn</span>.<span
                style="color:rgb(78,201,176)">metrics</span> <span style="color:rgb(197,134,192)">import</span> <span
                style="color:rgb(220,220,170)">accuracy_score</span></div>
        <div><span style="color:rgb(197,134,192)">import</span> <span style="color:rgb(78,201,176)">numpy</span> <span
                style="color:rgb(197,134,192)">as</span> <span style="color:rgb(78,201,176)">np</span></div><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"----------
                visualization, prediction and analysis "</span>)</div><span class="im"><br>
            <div><span style="color:rgb(156,220,254)">df</span> <span style="color:rgb(212,212,212)">=</span> <span
                    style="color:rgb(78,201,176)">pd</span>.<span style="color:rgb(220,220,170)">read_csv</span>(<span
                    style="color:rgb(206,145,120)">"mall_customers.<wbr>csv"</span>, <span
                    style="color:rgb(156,220,254)">index_col</span><span style="color:rgb(212,212,212)">=</span><span
                    style="color:rgb(181,206,168)">0</span>)</div>
            <div><span style="color:rgb(156,220,254)">df</span>.<span style="color:rgb(156,220,254)">columns</span>
                <span style="color:rgb(212,212,212)">=</span> [<span style="color:rgb(206,145,120)">"Gender"</span>,
                <span style="color:rgb(206,145,120)">"Age"</span>, <span style="color:rgb(206,145,120)">"Income"</span>,
                <span style="color:rgb(206,145,120)">"Spending"</span>]
            </div><br><br>
        </span>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"---------- plotting
                "</span>)</div><br>
        <div><span style="color:rgb(106,153,85)"># display a scatter plot of age vs. spending</span></div><br>
        <div><span style="color:rgb(106,153,85)"># example 1</span></div>
        <div><span style="color:rgb(106,153,85)"># plt.figure(figsize=(16,9))</span></div>
        <div><span style="color:rgb(106,153,85)"># plt.grid(True)</span></div>
        <div><span style="color:rgb(106,153,85)"># plt.title("Age vs Spending")</span></div>
        <div><span style="color:rgb(106,153,85)"># plt.xlabel("Age")</span></div>
        <div><span style="color:rgb(106,153,85)"># plt.ylabel("Spending")</span></div>
        <div><span style="color:rgb(106,153,85)"># plt.scatter(df["Age"].values, df["Spending"].values,
                color="green")</span></div>
        <div><span style="color:rgb(106,153,85)"># plt.show()</span></div><br><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"---------- seaborn
                plots "</span>)</div><br>
        <div><span style="color:rgb(106,153,85)"># display a seaborn pairplot for the mall_customers.csv data</span>
        </div>
        <div><span style="color:rgb(106,153,85)"># great tool to visualize correlations in your data</span></div><br>
        <div><span style="color:rgb(106,153,85)"># example 1</span></div>
        <div><span style="color:rgb(106,153,85)"># sn.pairplot(df)</span></div><br>
        <div><span style="color:rgb(106,153,85)"># example 2</span></div>
        <div><span style="color:rgb(106,153,85)"># sn.pairplot(df, height=2, aspect=1, palette="husl",
                hue="Gender")</span></div>
        <div><span style="color:rgb(106,153,85)"># 'husl' palette: will try to choose colors of the same
                intensity</span></div>
        <div><span style="color:rgb(106,153,85)"># hue=gender - normally choose a discreet column; graphs will be
                colorized based on the gender column</span></div><br>
        <div><span style="color:rgb(106,153,85)"># plt.show()</span></div><br><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"----------
                clustering with scikit-learn "</span>)</div><br>
        <div><span style="color:rgb(106,153,85)"># scikit-learn: statistical / data analysis tools/packages; useful for
                analyzing and predicting data</span></div>
        <div><span style="color:rgb(106,153,85)"># use scikit-learn to do: linear regression, polynomial regression,
                etc. </span></div>
        <div><span style="color:rgb(106,153,85)"># here we will use scikit-learn to divide the data into clusters</span>
        </div><br>
        <div><span style="color:rgb(106,153,85)"># example 1 - show scatterplot of age vs. spending</span></div>
        <div><span style="color:rgb(106,153,85)"># sn.scatterplot(df, x="Age", y="Spending", palette="husl")</span>
        </div>
        <div><span style="color:rgb(106,153,85)"># plt.show()</span></div><br>
        <div><span style="color:rgb(106,153,85)"># example 2 - use one of many tools/techniques to visualize clusters of
                data</span></div>
        <div><span style="color:rgb(106,153,85)"># KMeans clustering: </span></div>
        <div><span style="color:rgb(106,153,85)"># &nbsp;- assign each point to a different cluster based on avg values
                in each cluster and how far the value is from these averages</span></div>
        <div><span style="color:rgb(106,153,85)"># model = KMeans(n_clusters=5) &nbsp; &nbsp;# specify the num of
                clusters in advance</span></div>
        <div><span style="color:rgb(106,153,85)"># X = df[["Age", "Spending"]] &nbsp; &nbsp; # specify the dataframe
                data we are interested in</span></div>
        <div><span style="color:rgb(106,153,85)"># model.fit(X) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp;# fit() will run the kmeans algorithm on dataframe X</span></div>
        <div><span style="color:rgb(106,153,85)"># df["Cluster"] = model.labels_ &nbsp; # create a new column in our
                dataframe to store the kmeans cluster data; labels_ contains a value for each of the 5 clusters</span>
        </div>
        <div><span style="color:rgb(106,153,85)"># sn.scatterplot(df, x="Age", y="Spending", palette="husl",
                hue="Cluster") # use the cluster data to colorize the plot</span></div>
        <div><span style="color:rgb(106,153,85)"># plt.show()</span></div><br>
        <div><span style="color:rgb(106,153,85)"># example 3 - just 2 clusters</span></div>
        <div><span style="color:rgb(106,153,85)"># model = KMeans(n_clusters=2) # specify the num of clusters in
                advance</span></div>
        <div><span style="color:rgb(106,153,85)"># X = df[["Age", "Spending"]]</span></div>
        <div><span style="color:rgb(106,153,85)"># model.fit(X)</span></div>
        <div><span style="color:rgb(106,153,85)"># df["Cluster"] = model.labels_</span></div>
        <div><span style="color:rgb(106,153,85)"># sn.scatterplot(df, x="Age", y="Spending", palette="husl",
                hue="Cluster")</span></div>
        <div><span style="color:rgb(106,153,85)"># plt.show()</span></div><br><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"---------- binning
                "</span>)</div><br>
        <div><span style="color:rgb(106,153,85)"># create 3 bins to group high/med/low spending groups (will use this
                later for prediction using a neural net)</span></div>
        <div><span style="color:rgb(156,220,254)">df</span>[<span style="color:rgb(206,145,120)">"SpendingGroup"</span>]
            <span style="color:rgb(212,212,212)">=</span> <span style="color:rgb(78,201,176)">pd</span>.<span
                style="color:rgb(220,220,170)">cut</span>(<span style="color:rgb(156,220,254)">df</span>[<span
                style="color:rgb(206,145,120)">"Spending"</span>], <span style="color:rgb(156,220,254)">bins</span><span
                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">3</span>, <span
                style="color:rgb(156,220,254)">labels</span><span style="color:rgb(212,212,212)">=</span>(<span
                style="color:rgb(181,206,168)">0</span>, <span style="color:rgb(181,206,168)">1</span>, <span
                style="color:rgb(181,206,168)">2</span>))
        </div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">df</span>)</div><br>
        <div><span style="color:rgb(206,145,120)">"""</span></div>
        <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Gender &nbsp;Age
                &nbsp;Income &nbsp;Spending SpendingGroup</span></div>
        <div><span style="color:rgb(206,145,120)">CustomerID</span></div>
        <div><span style="color:rgb(206,145,120)">1 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Male &nbsp; 19 &nbsp;
                &nbsp; &nbsp;15 &nbsp; &nbsp; &nbsp; &nbsp;39 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1</span></div>
        <div><span style="color:rgb(206,145,120)">2 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Male &nbsp; 21 &nbsp;
                &nbsp; &nbsp;15 &nbsp; &nbsp; &nbsp; &nbsp;81 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2</span></div>
        <div><span style="color:rgb(206,145,120)">3 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 20 &nbsp; &nbsp;
                &nbsp;16 &nbsp; &nbsp; &nbsp; &nbsp; 6 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 0</span></div>
        <div><span style="color:rgb(206,145,120)">4 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 23 &nbsp; &nbsp;
                &nbsp;16 &nbsp; &nbsp; &nbsp; &nbsp;77 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2</span></div>
        <div><span style="color:rgb(206,145,120)">5 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 31 &nbsp; &nbsp;
                &nbsp;17 &nbsp; &nbsp; &nbsp; &nbsp;40 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1</span></div>
        <div><span style="color:rgb(197,134,192)">... </span><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp;... &nbsp;... &nbsp; &nbsp; ... &nbsp; &nbsp; &nbsp; ... &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; ...</span></div>
        <div><span style="color:rgb(206,145,120)">196 &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 35 &nbsp; &nbsp; 120
                &nbsp; &nbsp; &nbsp; &nbsp;79 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2</span></div>
        <div><span style="color:rgb(206,145,120)">197 &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 45 &nbsp; &nbsp; 126
                &nbsp; &nbsp; &nbsp; &nbsp;28 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 0</span></div>
        <div><span style="color:rgb(206,145,120)">198 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Male &nbsp; 32 &nbsp; &nbsp;
                126 &nbsp; &nbsp; &nbsp; &nbsp;74 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2</span></div>
        <div><span style="color:rgb(206,145,120)">199 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Male &nbsp; 32 &nbsp; &nbsp;
                137 &nbsp; &nbsp; &nbsp; &nbsp;18 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 0</span></div>
        <div><span style="color:rgb(206,145,120)">200 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Male &nbsp; 30 &nbsp; &nbsp;
                137 &nbsp; &nbsp; &nbsp; &nbsp;83 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2</span></div><br>
        <div><span style="color:rgb(206,145,120)">[200 rows x 5 columns]</span></div>
        <div><span style="color:rgb(206,145,120)">"""</span></div><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"----------
                categorical to numerical "</span>)</div><br>
        <div><span style="color:rgb(106,153,85)"># add a new column for gender code, a numerical representation for
                male/female</span></div>
        <div><span style="color:rgb(106,153,85)"># (we will use this later to input to a neural network)</span></div>
        <div><span style="color:rgb(156,220,254)">df</span>[<span style="color:rgb(206,145,120)">"GenderCode"</span>]
            <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">LabelEncoder</span>().<span
                style="color:rgb(220,220,170)">fit_transform</span>(<span
                style="color:rgb(156,220,254)">d<wbr>f</span>[<span style="color:rgb(206,145,120)">"Gender"</span>])
        </div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">df</span>)</div><br>
        <div><span style="color:rgb(206,145,120)">"""</span></div>
        <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Gender &nbsp;Age
                &nbsp;Income &nbsp;Spending SpendingGroup &nbsp;GenderCode</span></div>
        <div><span style="color:rgb(206,145,120)">CustomerID</span></div>
        <div><span style="color:rgb(206,145,120)">1 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Male &nbsp; 19 &nbsp;
                &nbsp; &nbsp;15 &nbsp; &nbsp; &nbsp; &nbsp;39 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1 &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; 1</span></div>
        <div><span style="color:rgb(206,145,120)">2 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Male &nbsp; 21 &nbsp;
                &nbsp; &nbsp;15 &nbsp; &nbsp; &nbsp; &nbsp;81 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2 &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; 1</span></div>
        <div><span style="color:rgb(206,145,120)">3 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 20 &nbsp; &nbsp;
                &nbsp;16 &nbsp; &nbsp; &nbsp; &nbsp; 6 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 0 &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; 0</span></div>
        <div><span style="color:rgb(206,145,120)">4 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 23 &nbsp; &nbsp;
                &nbsp;16 &nbsp; &nbsp; &nbsp; &nbsp;77 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2 &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; 0</span></div>
        <div><span style="color:rgb(206,145,120)">5 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 31 &nbsp; &nbsp;
                &nbsp;17 &nbsp; &nbsp; &nbsp; &nbsp;40 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1 &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; 0</span></div>
        <div><span style="color:rgb(197,134,192)">... </span><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp;... &nbsp;... &nbsp; &nbsp; ... &nbsp; &nbsp; &nbsp; ... &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; ... &nbsp; &nbsp; &nbsp; &nbsp; ...</span></div>
        <div><span style="color:rgb(206,145,120)">196 &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 35 &nbsp; &nbsp; 120
                &nbsp; &nbsp; &nbsp; &nbsp;79 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2 &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; 0</span></div>
        <div><span style="color:rgb(206,145,120)">197 &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 45 &nbsp; &nbsp; 126
                &nbsp; &nbsp; &nbsp; &nbsp;28 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 0 &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; 0</span></div>
        <div><span style="color:rgb(206,145,120)">198 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Male &nbsp; 32 &nbsp; &nbsp;
                126 &nbsp; &nbsp; &nbsp; &nbsp;74 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2 &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; 1</span></div>
        <div><span style="color:rgb(206,145,120)">199 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Male &nbsp; 32 &nbsp; &nbsp;
                137 &nbsp; &nbsp; &nbsp; &nbsp;18 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 0 &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; 1</span></div>
        <div><span style="color:rgb(206,145,120)">200 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Male &nbsp; 30 &nbsp; &nbsp;
                137 &nbsp; &nbsp; &nbsp; &nbsp;83 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2 &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; 1</span></div><br>
        <div><span style="color:rgb(206,145,120)">[200 rows x 6 columns]</span></div>
        <div><span style="color:rgb(206,145,120)">"""</span></div><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"---------- one hot
                encoding "</span>)</div><span class="im"><br><br>
            <div><span style="color:rgb(156,220,254)">df</span> <span style="color:rgb(212,212,212)">=</span> <span
                    style="color:rgb(78,201,176)">pd</span>.<span style="color:rgb(220,220,170)">read_csv</span>(<span
                    style="color:rgb(206,145,120)">"mall_customers.<wbr>csv"</span>, <span
                    style="color:rgb(156,220,254)">index_col</span><span style="color:rgb(212,212,212)">=</span><span
                    style="color:rgb(181,206,168)">0</span>)</div>
            <div><span style="color:rgb(156,220,254)">df</span>.<span style="color:rgb(156,220,254)">columns</span>
                <span style="color:rgb(212,212,212)">=</span> [<span style="color:rgb(206,145,120)">"Gender"</span>,
                <span style="color:rgb(206,145,120)">"Age"</span>, <span style="color:rgb(206,145,120)">"Income"</span>,
                <span style="color:rgb(206,145,120)">"Spending"</span>]
            </div><br>
        </span>
        <div><span style="color:rgb(156,220,254)">df</span>[<span style="color:rgb(206,145,120)">"SpendingGroup"</span>]
            <span style="color:rgb(212,212,212)">=</span> <span style="color:rgb(78,201,176)">pd</span>.<span
                style="color:rgb(220,220,170)">cut</span>(<span style="color:rgb(156,220,254)">df</span>[<span
                style="color:rgb(206,145,120)">"Spending"</span>], <span style="color:rgb(156,220,254)">bins</span><span
                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">3</span>, <span
                style="color:rgb(156,220,254)">labels</span><span style="color:rgb(212,212,212)">=</span>(<span
                style="color:rgb(181,206,168)">0</span>, <span style="color:rgb(181,206,168)">1</span>, <span
                style="color:rgb(181,206,168)">2</span>))
        </div>
        <div><span style="color:rgb(156,220,254)">df</span>[<span style="color:rgb(206,145,120)">"GenderCode"</span>]
            <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">LabelEncoder</span>().<span
                style="color:rgb(220,220,170)">fit_transform</span>(<span
                style="color:rgb(156,220,254)">d<wbr>f</span>[<span style="color:rgb(206,145,120)">"Gender"</span>])
        </div><br>
        <div><span style="color:rgb(156,220,254)">y</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(220,220,170)">to_categorical</span>(<span
                style="color:rgb(156,220,254)">df</span>[<span
                style="color:rgb(206,145,120)">"<wbr>SpendingGroup"</span>])</div><br><br>
        <div><span style="color:rgb(106,153,85)"># run to_categorical on the column SpendingGroup </span></div>
        <div><span style="color:rgb(106,153,85)"># returns a conversion to a 'one hot encoding' form</span></div>
        <div><span style="color:rgb(106,153,85)"># SpendingGroup has values 0, 1, 2</span></div>
        <div><span style="color:rgb(106,153,85)"># to_categorical has transformed this into the matrix below</span>
        </div>
        <div><span style="color:rgb(106,153,85)"># each row corresponds to a data sample. </span></div>
        <div><span style="color:rgb(106,153,85)"># &nbsp; if SpendingGroup = 0, this is converted to [1. 0. 0.] - the
                index/position of the 1 determines the original value</span></div>
        <div><span style="color:rgb(106,153,85)"># &nbsp; if SpendingGroup = 1, this is converted to [0. 1. 0.]</span>
        </div>
        <div><span style="color:rgb(106,153,85)"># &nbsp; if SpendingGroup = 2, this is converted to [0. 0. 1.]</span>
        </div><br>
        <div><span style="color:rgb(106,153,85)"># this encoding makes it easier to feed the data into a neural
                network</span></div>
        <div><span style="color:rgb(106,153,85)"># the neural network will be trained to predict the value of
                SpendingGroup, and will have 3 outputs</span></div>
        <div><span style="color:rgb(106,153,85)"># that will look like: [1. 0. 0.] to indicate the predicted value of
                SpendingGroup</span></div><br>
        <div><span style="color:rgb(106,153,85)"># print(y)</span></div><br>
        <div><span style="color:rgb(206,145,120)">"""</span></div>
        <div><span style="color:rgb(206,145,120)">[[0. 1. 0.]</span></div>
        <div><span style="color:rgb(206,145,120)">&nbsp;[0. 0. 1.]</span></div>
        <div><span style="color:rgb(206,145,120)">&nbsp;[1. 0. 0.] &nbsp; &nbsp; # this corresponds to a SpendingGroup
                value of zero</span></div>
        <div><span style="color:rgb(206,145,120)">&nbsp;[0. 0. 1.]</span></div>
        <div><span style="color:rgb(206,145,120)">&nbsp;[0. 1. 0.] &nbsp; &nbsp; # this corresponds to a SpendingGroup
                value of 1</span></div>
        <div><span style="color:rgb(206,145,120)">&nbsp;[0. 0. 1.] &nbsp; &nbsp; # this corresponds to a SpendingGroup
                value of 2</span></div>
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
        <div><span style="color:rgb(206,145,120)">1 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Male &nbsp; 19 &nbsp;
                &nbsp; &nbsp;15 &nbsp; &nbsp; &nbsp; &nbsp;39 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1 &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; 1</span></div>
        <div><span style="color:rgb(206,145,120)">2 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Male &nbsp; 21 &nbsp;
                &nbsp; &nbsp;15 &nbsp; &nbsp; &nbsp; &nbsp;81 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2 &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; 1</span></div>
        <div><span style="color:rgb(206,145,120)">3 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 20 &nbsp; &nbsp;
                &nbsp;16 &nbsp; &nbsp; &nbsp; &nbsp; 6 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 0 &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; 0</span></div>
        <div><span style="color:rgb(206,145,120)">4 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 23 &nbsp; &nbsp;
                &nbsp;16 &nbsp; &nbsp; &nbsp; &nbsp;77 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2 &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; 0</span></div>
        <div><span style="color:rgb(206,145,120)">5 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 31 &nbsp; &nbsp;
                &nbsp;17 &nbsp; &nbsp; &nbsp; &nbsp;40 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1 &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; 0</span></div>
        <div><span style="color:rgb(197,134,192)">... </span><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp;... &nbsp;... &nbsp; &nbsp; ... &nbsp; &nbsp; &nbsp; ... &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; ... &nbsp; &nbsp; &nbsp; &nbsp; ...</span></div>
        <div><span style="color:rgb(206,145,120)">196 &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 35 &nbsp; &nbsp; 120
                &nbsp; &nbsp; &nbsp; &nbsp;79 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2 &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; 0</span></div>
        <div><span style="color:rgb(206,145,120)">197 &nbsp; &nbsp; &nbsp; &nbsp; Female &nbsp; 45 &nbsp; &nbsp; 126
                &nbsp; &nbsp; &nbsp; &nbsp;28 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 0 &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; 0</span></div>
        <div><span style="color:rgb(206,145,120)">198 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Male &nbsp; 32 &nbsp; &nbsp;
                126 &nbsp; &nbsp; &nbsp; &nbsp;74 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2 &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; 1</span></div>
        <div><span style="color:rgb(206,145,120)">199 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Male &nbsp; 32 &nbsp; &nbsp;
                137 &nbsp; &nbsp; &nbsp; &nbsp;18 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 0 &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; 1</span></div>
        <div><span style="color:rgb(206,145,120)">200 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Male &nbsp; 30 &nbsp; &nbsp;
                137 &nbsp; &nbsp; &nbsp; &nbsp;83 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2 &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; 1</span></div><br>
        <div><span style="color:rgb(206,145,120)">[200 rows x 6 columns]</span></div>
        <div><span style="color:rgb(206,145,120)">"""</span></div><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"---------- The
                Predictor Matrix "</span>)</div><br>
        <div><span style="color:rgb(106,153,85)"># note: syntax for crating a dataframe</span></div>
        <div><span style="color:rgb(106,153,85)"># temp1 = df["Age"] &nbsp; &nbsp; &nbsp; # returns a data series</span>
        </div>
        <div><span style="color:rgb(106,153,85)"># temp2 = df[["Age"]] &nbsp; &nbsp; # returns a dataframe</span></div>
        <br>
        <div><span style="color:rgb(79,193,255)">X</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(156,220,254)">df</span>[[<span style="color:rgb(206,145,120)">"Age"</span>, <span
                style="color:rgb(206,145,120)">"Income"</span>, <span
                style="color:rgb(206,145,120)">"GenderCode"</span>]]</div><br>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(79,193,255)">X</span>)</div><br>
        <div><span style="color:rgb(206,145,120)">"""</span></div>
        <div><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Age &nbsp;Income
                &nbsp;GenderCode</span></div>
        <div><span style="color:rgb(206,145,120)">CustomerID</span></div>
        <div><span style="color:rgb(206,145,120)">1 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;19 &nbsp; &nbsp; &nbsp;15
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1</span></div>
        <div><span style="color:rgb(206,145,120)">2 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;21 &nbsp; &nbsp; &nbsp;15
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1</span></div>
        <div><span style="color:rgb(206,145,120)">3 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;20 &nbsp; &nbsp; &nbsp;16
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 0</span></div>
        <div><span style="color:rgb(206,145,120)">4 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;23 &nbsp; &nbsp; &nbsp;16
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 0</span></div>
        <div><span style="color:rgb(206,145,120)">5 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;31 &nbsp; &nbsp; &nbsp;17
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 0</span></div>
        <div><span style="color:rgb(197,134,192)">... </span><span style="color:rgb(206,145,120)">&nbsp; &nbsp; &nbsp;
                &nbsp; ... &nbsp; &nbsp; ... &nbsp; &nbsp; &nbsp; &nbsp; ...</span></div>
        <div><span style="color:rgb(206,145,120)">196 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;35 &nbsp; &nbsp; 120 &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; 0</span></div>
        <div><span style="color:rgb(206,145,120)">197 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;45 &nbsp; &nbsp; 126 &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; 0</span></div>
        <div><span style="color:rgb(206,145,120)">198 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;32 &nbsp; &nbsp; 126 &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; 1</span></div>
        <div><span style="color:rgb(206,145,120)">199 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;32 &nbsp; &nbsp; 137 &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; 1</span></div>
        <div><span style="color:rgb(206,145,120)">200 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;30 &nbsp; &nbsp; 137 &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; 1</span></div><br>
        <div><span style="color:rgb(206,145,120)">[200 rows x 3 columns]</span></div>
        <div><span style="color:rgb(206,145,120)">"""</span></div><br><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"---------- test
                train split "</span>)</div><br>
        <div><span style="color:rgb(106,153,85)"># split X and y data into testing and training segments</span></div>
        <div><span style="color:rgb(156,220,254)">X_train</span>, <span style="color:rgb(156,220,254)">X_test</span>,
            <span style="color:rgb(156,220,254)">y_train</span>, <span style="color:rgb(156,220,254)">y_test</span>
            <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(220,220,170)">train_test_split</span>(<span style="color:rgb(79,193,255)">X</span>,
            <span style="color:rgb(156,220,254)">y</span>, <span style="color:rgb(156,220,254)">shuffle</span><span
                style="color:rgb(212,212,212)">=</span><span style="color:rgb(86,156,214)">True</span>, <span
                style="color:rgb(156,220,254)">test_size</span><span style="color:rgb(212,212,212)">=</span><span
                style="color:rgb(181,206,168)">0.3</span>) &nbsp;<span style="color:rgb(106,153,85)"># test_size=0.3
                means use 1/3 of the data</span>
        </div><br>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(220,220,170)">len</span>(<span
                style="color:rgb(156,220,254)">X_train</span>)) &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># we
                have 140 rows of X data (age, income, genderCode) for training</span></div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(220,220,170)">len</span>(<span
                style="color:rgb(156,220,254)">y_train</span>)) &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># we
                have 140 rows of y data (SpendingGroup as a 1 hot encoding) for training</span></div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(220,220,170)">len</span>(<span
                style="color:rgb(156,220,254)">X_test</span>)) &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)">#
                60 X values for testing</span></div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(220,220,170)">len</span>(<span
                style="color:rgb(156,220,254)">y_test</span>)) &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)">#
                60 y values for testing</span></div><br>
        <div><span style="color:rgb(206,145,120)">"""</span></div>
        <div><span style="color:rgb(206,145,120)">140</span></div>
        <div><span style="color:rgb(206,145,120)">140</span></div>
        <div><span style="color:rgb(206,145,120)">60</span></div>
        <div><span style="color:rgb(206,145,120)">60</span></div>
        <div><span style="color:rgb(206,145,120)">"""</span></div><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"---------- scaling
                "</span>)</div><br>
        <div><span style="color:rgb(106,153,85)"># 2 reasons for scaling your data:</span></div>
        <div><span style="color:rgb(106,153,85)"># &nbsp; &nbsp;1. you may have data series that exist on wildly
                different scales. Eg. temp (values are between 0 - 100) vs. micro meters (values are between -1M -
                1M)</span></div>
        <div><span style="color:rgb(106,153,85)"># &nbsp; &nbsp;2. training a neural network may encounter issues with
                overflow (ie. dealing with huge values/numbers that don't fit in a normal size byte)</span></div>
        <div><span style="color:rgb(106,153,85)"># &nbsp; &nbsp; &nbsp; &nbsp;- for training a neural net, input values
                in the range from zero to 1 work well</span></div><br>
        <div><span style="color:rgb(156,220,254)">scaler</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">StandardScaler</span>()</div>
        <div><span style="color:rgb(156,220,254)">X_train</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(156,220,254)">scaler</span>.<span
                style="color:rgb(220,220,170)">fit_transform</span>(<span style="color:rgb(156,220,254)">X_train</span>)
            &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># the scaler will scale the x_train segment.</span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># fit_transform: setup
                the scaler (figure out the parameters) and then transform</span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># the configuration
                will scale the data such that the average is zero, variance = 1</span></div>
        <div><span style="color:rgb(156,220,254)">X_test</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(156,220,254)">scaler</span>.<span style="color:rgb(220,220,170)">transform</span>(<span
                style="color:rgb(156,220,254)">X_test</span>) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                style="color:rgb(106,153,85)"># transform: we do not need to do the setup operation anymore, just the
                transform</span></div><br>
        <div><span style="color:rgb(106,153,85)"># the testing data X_test needs to be separate (a different segment)
                than the training data, so that it is tested with</span></div>
        <div><span style="color:rgb(106,153,85)"># values it hasn't seen before. </span></div><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"---------- creating
                the neural network "</span>)</div><br><br>
        <div><span style="color:rgb(156,220,254)">model</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">Sequential</span>() &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># our model passes data
                through a sequence of layers. In reality, neurons are connected to each other in a web, but these take a
                lot longer to train.</span></div>
        <div><span style="color:rgb(156,220,254)">model</span>.<span style="color:rgb(220,220,170)">add</span>(<span
                style="color:rgb(78,201,176)">Dense</span>(<span style="color:rgb(181,206,168)">200</span>, <span
                style="color:rgb(156,220,254)">activation</span><span style="color:rgb(212,212,212)">=</span><span
                style="color:rgb(206,145,120)">"relu"</span>)) &nbsp; &nbsp; &nbsp; &nbsp;<span
                style="color:rgb(106,153,85)"># add a layer to our neural net (a dense layer - every neuron in this
                layer is densly connected to every neuron in the next and previous layers)</span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)">#
                activation="relu" - this means that every neuron will look at each of it's inputs</span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># (which
                are from other neurons, except the input layer which is our data set)</span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># each of
                these inputs will be multiplied by a weight and then added together</span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># and
                then we will run that through a non-linear function (which is vital for making a neural net
                work).</span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># In this
                example, we use a popular non-linear function called 'relu'</span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># &nbsp;-
                all it does is: if the input is &lt;0 make it 0; otherwise don't change it</span></div><br>
        <div><span style="color:rgb(156,220,254)">model</span>.<span style="color:rgb(220,220,170)">add</span>(<span
                style="color:rgb(78,201,176)">Dense</span>(<span style="color:rgb(181,206,168)">100</span>, <span
                style="color:rgb(156,220,254)">activation</span><span style="color:rgb(212,212,212)">=</span><span
                style="color:rgb(206,145,120)">"relu"</span>)) &nbsp; &nbsp; &nbsp; &nbsp;<span
                style="color:rgb(106,153,85)"># typically the output size gets smaller with each layer</span></div><br>
        <div><span style="color:rgb(156,220,254)">model</span>.<span style="color:rgb(220,220,170)">add</span>(<span
                style="color:rgb(78,201,176)">Dense</span>(<span style="color:rgb(181,206,168)">3</span>, <span
                style="color:rgb(156,220,254)">activation</span><span style="color:rgb(212,212,212)">=</span><span
                style="color:rgb(206,145,120)">"softmax"</span>)) &nbsp; &nbsp; &nbsp; <span
                style="color:rgb(106,153,85)"># we need our final output size to be 3; to predict our 3 value output to
                match out SpendingGroup category</span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># our
                final activation is softmax - this is a function that ensures that all the outputs adds up to 1</span>
        </div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># so we
                can interpret them as probabilities. We will take the largest value of these as the prediction from our
                model</span></div><br>
        <div><span style="color:rgb(156,220,254)">model</span>.<span style="color:rgb(220,220,170)">compile</span>(<span
                style="color:rgb(156,220,254)">loss</span><span style="color:rgb(212,212,212)">=</span><span
                style="color:rgb(206,145,120)">"<wbr>categorical_crossentropy"</span>, <span
                style="color:rgb(156,220,254)">optimizer</span><span style="color:rgb(212,212,212)">=</span><span
                style="color:rgb(206,145,120)">"adam"</span>, <span style="color:rgb(156,220,254)">metrics</span><span
                style="color:rgb(212,212,212)">=</span>[<span style="color:rgb(78,201,176)">Accuracy</span>()])</div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># need to
                specify a loss function</span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)">#
                categorical_crossentropy - need to go into information theory to understand this.</span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># All we
                need to know is that the loss function of categorical_crossentropy works really well with
                softmax.</span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># what is
                a loss function? It takes the output of the neural net and compares it with the desired output, </span>
        </div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># and
                boils it all down to a single figure, which ranks how well the neural net performed on that run. </span>
        </div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># The
                lower the loss, the better the result (ie. closer the fit of the predicted value with the desired
                value). </span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)">#
                optimizer="adam"; we train the network by adjusting the weights (that multiply the inputs of each
                neuron) </span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># so we
                need some technique to do that. And Adam is a variant of type 'gradient descent' (one of the oldest
                techniques)</span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)">#
                metrics=[Accuracy()] - accuracy scores just note how many correct predictions the model has made as you
                go along</span></div><br>
        <div><span style="color:rgb(156,220,254)">model</span>.<span style="color:rgb(220,220,170)">fit</span>(<span
                style="color:rgb(156,220,254)">X_train</span>, <span style="color:rgb(156,220,254)">y_train</span>,
            <span style="color:rgb(156,220,254)">epochs</span><span style="color:rgb(212,212,212)">=</span><span
                style="color:rgb(181,206,168)">30</span>) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span
                style="color:rgb(106,153,85)"># epochs - one end-to-end run is an epoch</span>
        </div><br>
        <div><span style="color:rgb(106,153,85)"># once the model is trained, you can save the neural net as a binary
                file and use it in other programs</span></div><br>
        <div><span style="color:rgb(156,220,254)">y_predicted</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(156,220,254)">model</span>.<span style="color:rgb(220,220,170)">predict</span>(<span
                style="color:rgb(156,220,254)">X_test</span>) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                style="color:rgb(106,153,85)"># we will check how our model performs on the test set</span></div>
        <br><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"----------
                evaluating accuracy "</span>)</div><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"Score:"</span>,
            <span style="color:rgb(220,220,170)">accuracy_score</span>(<span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">argmax</span>(<span
                style="color:rgb(156,220,254)">y_<wbr>test</span>, <span style="color:rgb(156,220,254)">axis</span><span
                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">1</span>), <span
                style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">argmax</span>(<span
                style="color:rgb(156,220,254)">y_predicted</span>, <span style="color:rgb(156,220,254)">axis</span><span
                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">1</span>)))
        </div><br>
        <div><span style="color:rgb(206,145,120)">"""</span></div>
        <div><span style="color:rgb(206,145,120)">Epoch 1/30</span></div>
        <div><span style="color:rgb(206,145,120)">5/5 ━━━━━━━━━━━━━━━━━━━━ 1s 6ms/step - accuracy: 0.0000e+00 - loss:
                1.0620 &nbsp;</span></div>
        <div><span style="color:rgb(206,145,120)">Epoch 2/30</span></div>
        <div><span style="color:rgb(206,145,120)">5/5 ━━━━━━━━━━━━━━━━━━━━ 0s 5ms/step - accuracy: 0.0000e+00 - loss:
                0.9777 </span></div>
        <div><span style="color:rgb(206,145,120)">Epoch 3/30</span></div>
        <div><span style="color:rgb(206,145,120)">5/5 ━━━━━━━━━━━━━━━━━━━━ 0s 5ms/step - accuracy: 0.0000e+00 - loss:
                0.9280 </span></div>
        <div><span style="color:rgb(206,145,120)">Epoch 4/30</span></div>
        <div><span style="color:rgb(206,145,120)">5/5 ━━━━━━━━━━━━━━━━━━━━ 0s 4ms/step - accuracy: 0.0000e+00 - loss:
                0.8821 </span></div>
        <div><span style="color:rgb(206,145,120)">Epoch 5/30...</span></div>
        <div><span style="color:rgb(206,145,120)">5/5 ━━━━━━━━━━━━━━━━━━━━ 0s 4ms/step - accuracy: 0.0000e+00 - loss:
                0.4909 </span></div>
        <div><span style="color:rgb(206,145,120)">Epoch 30/30</span></div>
        <div><span style="color:rgb(206,145,120)">5/5 ━━━━━━━━━━━━━━━━━━━━ 0s 5ms/step - accuracy: 0.0000e+00 - loss:
                0.4928 </span></div>
        <div><span style="color:rgb(206,145,120)">2/2 ━━━━━━━━━━━━━━━━━━━━ 0s 32ms/step</span></div><br>
        <div><span style="color:rgb(206,145,120)">---------- evaluating accuracy</span></div>
        <div><span style="color:rgb(206,145,120)">Score: 0.7666666666666667</span></div>
        <div><span style="color:rgb(206,145,120)">"""</span></div>
    </div>
</div>
  `

        return (
                <>
                        <MathJaxContext>
                                <div className='mt-[0px] ml-[40px] mr-[20px] mb-[10px]'>

                                        <div className='jade-h1'>
                                                Python for Java Developers
                                        </div>

                                        <div className='jade-h2 mb-[25px]'>
                                                Week 3: Numpy & Pandas
                                        </div>

                                        <Tabs>
                                                <Tab2 title="Numpy" isChecked={true}>
                                                        <TileRowCell0>

                                                                <div className='flex-1 jade-code min-w-[1000px] max-w-[1000px]'>
                                                                        <div dangerouslySetInnerHTML={createMarkup(html)} />
                                                                </div>

                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="Pandas" isChecked={false}>
                                                        <TileRowCell0>

                                                                <div className='flex-1 jade-code min-w-[1000px] max-w-[1000px]'>
                                                                        <div dangerouslySetInnerHTML={createMarkup(html2)} />
                                                                </div>

                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="Visualization Prediction & Analysis" isChecked={false}>
                                                        <TileRowCell0>

                                                                <div className='flex-1 jade-code min-w-[1000px] max-w-[1000px]'>
                                                                        <div dangerouslySetInnerHTML={createMarkup(html3)} />
                                                                </div>

                                                        </TileRowCell0>
                                                </Tab2>



                                        </Tabs>


                                </div>
                        </MathJaxContext>
                </>
        );
}
