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

        const html2 = `
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

        const html3 = `
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
                                <div className='mt-[0px] ml-[40px] mr-[20px] mb-[10px]'>

                                        <div className='jade-h1'>
                                                Practical Statistics for Data Scientists
                                        </div>

                                        <div className='jade-h2 mb-[25px]'>

                                        </div>


                                        <Tabs>
                                                <Tab2 title="Chapter 1" isChecked={true}>
                                                        <TileRowCell0>

                                                                <div className='flex-1 jade-code min-w-[1000px] max-w-[1000px]'>
                                                                        <div dangerouslySetInnerHTML={createMarkup(html)} />
                                                                </div>

                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="Chapter 2" isChecked={false}>
                                                        <TileRowCell0>

                                                                <div className='flex-1 jade-code min-w-[1000px] max-w-[1000px]'>
                                                                        <div dangerouslySetInnerHTML={createMarkup(html2)} />
                                                                </div>

                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="Chapter 3" isChecked={false}>
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
