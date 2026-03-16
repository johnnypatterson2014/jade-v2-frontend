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

        const einsum_1 = `
        <div><span style="color:rgb(156,220,254)">out</span> <span style="color:rgb(212,212,212)">=</span> <span
              style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">einsum</span>(<span
              style="color:rgb(206,145,120)">'ik,kj-&gt;ij'</span>, <span style="color:rgb(79,193,255)">A</span>, <span
              style="color:rgb(79,193,255)">B</span>)</div>
        `
        const einsum_2 = `
        <div><span style="color:rgb(156,220,254)">out</span> <span style="color:rgb(212,212,212)">=</span> <span
              style="color:rgb(79,193,255)">A</span> <span style="color:rgb(220,220,170)">@</span> <span
              style="color:rgb(79,193,255)">B</span></div>
        `

        const einsum_3 = `
        <span style="color:rgb(106,153,85);font-size:18px"><strong>\\[C_{ij} = \\sum_k A_{ik} B_{kj}\\]</strong></span>
        `

        const einsum_4 = `
        <div><span style="color:rgb(156,220,254)">out</span> <span style="color:rgb(212,212,212)">=</span> <span
              style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">einsum</span>(<span
              style="color:rgb(206,145,120)">'ik,jk-&gt;ij'</span>, <span style="color:rgb(79,193,255)">X</span>, <span
              style="color:rgb(79,193,255)">Y</span>)</div>
        `
        const einsum_5 = `
        <div><span style="color:rgb(156,220,254)">out</span> <span style="color:rgb(212,212,212)">=</span> <span
              style="color:rgb(79,193,255)">X</span> <span style="color:rgb(220,220,170)">@</span> <span
              style="color:rgb(79,193,255)">Y</span>.<span style="color:rgb(156,220,254)">T</span></div>
        `

        const einsum_6 = `
        <span style="color:rgb(106,153,85);font-size:18px"><strong>\\[C_{ij} = \\sum_k X_{ik} Y_{jk}\\]</strong></span>
        `
        const einsum_7 = `
        <div><span style="color:rgb(156,220,254)">scores</span> <span style="color:rgb(212,212,212)">=</span> <span
              style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">einsum</span>(<span
              style="color:rgb(206,145,120)">'btd,bsd-&gt;bts'</span>, <span style="color:rgb(79,193,255)">Q</span>, <span
              style="color:rgb(79,193,255)">K</span>)</div>
        `
        const einsum_8 = `
        <div><span style="color:rgb(156,220,254)">scores</span> <span style="color:rgb(212,212,212)">=</span> <span
              style="color:rgb(79,193,255)">Q</span> <span style="color:rgb(220,220,170)">@</span> <span
              style="color:rgb(79,193,255)">K</span>.<span style="color:rgb(220,220,170)">transpose</span>(<span
              style="color:rgb(181,206,168)">0</span>, <span style="color:rgb(181,206,168)">2</span>, <span
              style="color:rgb(181,206,168)">1</span>)</div>
        `

        const einsum_9 = `
        <span style="color:rgb(106,153,85);font-size:18px"><strong>\\[S_{bts} = \\sum_d Q_{btd} K_{bsd}\\]</strong></span>
        `

        const html = `
        
        <div dir="ltr">
        <div style="color:rgb(204,204,204);font-family:monospace;font-size:14px;line-height:18px;">
          
        <div style="
        border: 1px solid rgba(204, 204, 220, 0.12);
        padding-top: 15px;
    padding-right: 15px;
    padding-left: 15px;
    padding-bottom: 0px;
    background-color: rgba(8, 8, 8, 0.175);
    border-radius: 5px;
    margin-right: 2px;
    margin-left: 0px;
    margin-top: 10px;
    margin-bottom: 2px;
        ">
          <div><span style="color:rgb(156,220,254);font-size:18px;font-family:Consolas;">Vector dot product</span></div>
          <div><span style="color:rgb(106,153,85)"># x: (d,)</span></div>
          <div><span style="color:rgb(106,153,85)"># y: (d,)</span></div>
          <div><span style="color:rgb(156,220,254)">out</span> <span style="color:rgb(212,212,212)">=</span> <span
              style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">einsum</span>(<span
              style="color:rgb(206,145,120)">'d,d-&gt;'</span>, <span style="color:rgb(156,220,254)">x</span>, <span
              style="color:rgb(156,220,254)">y</span>) &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># scalar</span>
          </div><br>
          <div><span style="color:rgb(106,153,85)"># equivalent to:</span></div>
          <div><span style="color:rgb(156,220,254)">out</span> <span style="color:rgb(212,212,212)">=</span> <span
              style="color:rgb(156,220,254)">x</span> <span style="color:rgb(220,220,170)">@</span> <span
              style="color:rgb(156,220,254)">y</span></div><br>
          <div><span style="color:rgb(106,153,85)"><strong>\\[\\sum_d x_d y_d\\]</strong></span></div><br>
</div>
          
<div style="
        border: 1px solid rgba(204, 204, 220, 0.12);
        padding-top: 15px;
    padding-right: 15px;
    padding-left: 15px;
    padding-bottom: 0px;
    background-color: rgba(8, 8, 8, 0.175);
    border-radius: 5px;
    margin-right: 2px;
    margin-left: 0px;
    margin-top: 10px;
    margin-bottom: 2px;
        ">

          <div><span style="color:rgb(156,220,254);font-size:18px;font-family:Consolas;">Matrix-vector multiply</span></div>

          <div><span style="color:rgb(106,153,85)"># A: (m, n)</span></div>
          <div><span style="color:rgb(106,153,85)"># x: (n,)</span></div>
          <div><span style="color:rgb(156,220,254)">out</span> <span style="color:rgb(212,212,212)">=</span> <span
              style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">einsum</span>(<span
              style="color:rgb(206,145,120)">'mn,n-&gt;m'</span>, <span style="color:rgb(79,193,255)">A</span>, <span
              style="color:rgb(156,220,254)">x</span>) &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># (m,)</span></div>
          <br>
          <div><span style="color:rgb(106,153,85)"># equivalent to:</span></div>
          <div><span style="color:rgb(156,220,254)">out</span> <span style="color:rgb(212,212,212)">=</span> <span
              style="color:rgb(79,193,255)">A</span> <span style="color:rgb(220,220,170)">@</span> <span
              style="color:rgb(156,220,254)">x</span></div><br>
          <div><span style="color:rgb(106,153,85)"><strong>\\[\\sum_n A_{mn} x_n\\]</strong></span></div><br>
</div>

<div style="
        border: 1px solid rgba(204, 204, 220, 0.12);
        padding-top: 15px;
    padding-right: 15px;
    padding-left: 15px;
    padding-bottom: 0px;
    background-color: rgba(8, 8, 8, 0.175);
    border-radius: 5px;
    margin-right: 2px;
    margin-left: 0px;
    margin-top: 10px;
    margin-bottom: 2px;
        ">

          
          <div><span style="color:rgb(156,220,254);font-size:18px;font-family:Consolas;">
                Matrix multiplication
          </span></div>
                   
          <div><span style="color:rgb(106,153,85)"># A: (m, n)</span></div>
          <div><span style="color:rgb(106,153,85)"># B: (n, p)</span></div>
          <div><span style="color:rgb(156,220,254)">out</span> <span style="color:rgb(212,212,212)">=</span> <span
              style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">einsum</span>(<span
              style="color:rgb(206,145,120)">'mn,np-&gt;mp'</span>, <span style="color:rgb(79,193,255)">A</span>, <span
              style="color:rgb(79,193,255)">B</span>) &nbsp;<span style="color:rgb(106,153,85)"># (m, p)</span></div><br>
          <div><span style="color:rgb(106,153,85)"># equivalent to:</span></div>
          <div><span style="color:rgb(156,220,254)">out</span> <span style="color:rgb(212,212,212)">=</span> <span
              style="color:rgb(79,193,255)">A</span> <span style="color:rgb(220,220,170)">@</span> <span
              style="color:rgb(79,193,255)">B</span></div><br>
          <div><span style="color:rgb(106,153,85)"><strong>\\[\\sum_n A_{mn} B_{np}\\]</strong></span></div><br>

</div>

<div style="
border: 1px solid rgba(204, 204, 220, 0.12);
padding-top: 15px;
padding-right: 15px;
padding-left: 15px;
padding-bottom: 0px;
background-color: rgba(8, 8, 8, 0.175);
border-radius: 5px;
margin-right: 2px;
margin-left: 0px;
margin-top: 10px;
margin-bottom: 2px;
">

          <div><span style="color:rgb(156,220,254);font-size:18px;font-family:Consolas;">
                Transpose
          </span></div>

          <div><span style="color:rgb(106,153,85)"># X: (m, n)</span></div>
          <div><span style="color:rgb(156,220,254)">out</span> <span style="color:rgb(212,212,212)">=</span> <span
              style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">einsum</span>(<span
              style="color:rgb(206,145,120)">'mn-&gt;nm'</span>, <span style="color:rgb(79,193,255)">X</span>) &nbsp; &nbsp;
            &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># (n, m)</span></div><br>
          <div><span style="color:rgb(106,153,85)"># equivalent to:</span></div>
          <div><span style="color:rgb(156,220,254)">out</span> <span style="color:rgb(212,212,212)">=</span> <span
              style="color:rgb(79,193,255)">X</span>.<span style="color:rgb(156,220,254)">T</span></div><br>

</div>
              
<div style="
        border: 1px solid rgba(204, 204, 220, 0.12);
        padding-top: 15px;
    padding-right: 15px;
    padding-left: 15px;
    padding-bottom: 0px;
    background-color: rgba(8, 8, 8, 0.175);
    border-radius: 5px;
    margin-right: 2px;
    margin-left: 0px;
    margin-top: 10px;
    margin-bottom: 2px;
        ">

              <div><span style="color:rgb(156,220,254);font-size:18px;font-family:Consolas;">
              Sum over an axis
              </span></div>

          <div><span style="color:rgb(106,153,85)"># X: (m, n)</span></div>
          <div><span style="color:rgb(156,220,254)">col_sums</span> <span style="color:rgb(212,212,212)">=</span> <span
              style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">einsum</span>(<span
              style="color:rgb(206,145,120)">'mn-&gt;n'</span>, <span style="color:rgb(79,193,255)">X</span>) &nbsp;
            &nbsp;<span style="color:rgb(106,153,85)"># (n,)</span></div>
          <div><span style="color:rgb(156,220,254)">row_sums</span> <span style="color:rgb(212,212,212)">=</span> <span
              style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">einsum</span>(<span
              style="color:rgb(206,145,120)">'mn-&gt;m'</span>, <span style="color:rgb(79,193,255)">X</span>) &nbsp;
            &nbsp;<span style="color:rgb(106,153,85)"># (m,)</span></div>
          <div><span style="color:rgb(156,220,254)">total</span> &nbsp; &nbsp;<span style="color:rgb(212,212,212)">=</span>
            <span style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">einsum</span>(<span
              style="color:rgb(206,145,120)">'mn-&gt;'</span>, <span style="color:rgb(79,193,255)">X</span>) &nbsp; &nbsp;
            <span style="color:rgb(106,153,85)"># scalar</span>
          </div><br>
          <div><span style="color:rgb(106,153,85)"># equivalent to:</span></div>
          <div><span style="color:rgb(156,220,254)">col_sums</span> <span style="color:rgb(212,212,212)">=</span> <span
              style="color:rgb(79,193,255)">X</span>.<span style="color:rgb(220,220,170)">sum</span>(<span
              style="color:rgb(156,220,254)">axis</span><span style="color:rgb(212,212,212)">=</span><span
              style="color:rgb(181,206,168)">0</span>)</div>
          <div><span style="color:rgb(156,220,254)">row_sums</span> <span style="color:rgb(212,212,212)">=</span> <span
              style="color:rgb(79,193,255)">X</span>.<span style="color:rgb(220,220,170)">sum</span>(<span
              style="color:rgb(156,220,254)">axis</span><span style="color:rgb(212,212,212)">=</span><span
              style="color:rgb(181,206,168)">1</span>)</div>
          <div><span style="color:rgb(156,220,254)">total</span> &nbsp; &nbsp;<span style="color:rgb(212,212,212)">=</span>
            <span style="color:rgb(79,193,255)">X</span>.<span style="color:rgb(220,220,170)">sum</span>()
          </div><br>

</div>

          
<div style="
        border: 1px solid rgba(204, 204, 220, 0.12);
        padding-top: 15px;
    padding-right: 15px;
    padding-left: 15px;
    padding-bottom: 0px;
    background-color: rgba(8, 8, 8, 0.175);
    border-radius: 5px;
    margin-right: 2px;
    margin-left: 0px;
    margin-top: 10px;
    margin-bottom: 2px;
        ">

              <div><span style="color:rgb(156,220,254);font-size:18px;font-family:Consolas;">
              Column-wise squared norms
              </span></div>

          <div><span style="color:rgb(106,153,85)"># X: (m, n)</span></div>
          <div><span style="color:rgb(156,220,254)">out</span> <span style="color:rgb(212,212,212)">=</span> <span
              style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">einsum</span>(<span
              style="color:rgb(206,145,120)">'mn,mn-&gt;n'</span>, <span style="color:rgb(79,193,255)">X</span>, <span
              style="color:rgb(79,193,255)">X</span>) &nbsp; <span style="color:rgb(106,153,85)"># (n,)</span></div><br>
          <div><span style="color:rgb(106,153,85)"># equivalent to:</span></div>
          <div><span style="color:rgb(156,220,254)">out</span> <span style="color:rgb(212,212,212)">=</span> <span
              style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">sum</span>(<span
              style="color:rgb(79,193,255)">X</span><span style="color:rgb(220,220,170)">**</span><span
              style="color:rgb(181,206,168)">2</span>, <span style="color:rgb(156,220,254)">axis</span><span
              style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">0</span>)</div>
          <div><span style="color:rgb(106,153,85)"># or</span></div>
          <div><span style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">diag</span>(<span
              style="color:rgb(79,193,255)">X</span>.<span style="color:rgb(156,220,254)">T</span> <span
              style="color:rgb(220,220,170)">@</span> <span style="color:rgb(79,193,255)">X</span>)</div><br>
          <div><span style="color:rgb(106,153,85)"><strong>\\[|X_{\\cdot n}|^2 = \\sum_m X_{mn}^2\\]</strong></span></div>
          
          <div><span style="color:rgb(106,153,85)"># or: <br><strong>\\[\\text{diag}(X^T X)\\]</strong></span></div><br>
          
</div>

<div style="
border: 1px solid rgba(204, 204, 220, 0.12);
padding-top: 15px;
padding-right: 15px;
padding-left: 15px;
padding-bottom: 0px;
background-color: rgba(8, 8, 8, 0.175);
border-radius: 5px;
margin-right: 2px;
margin-left: 0px;
margin-top: 10px;
margin-bottom: 2px;
">

              <div><span style="color:rgb(156,220,254);font-size:18px;font-family:Consolas;">
              Row-wise squared norms
              </span></div>

          <div><span style="color:rgb(106,153,85)"># X: (m, n)</span></div>
          <div><span style="color:rgb(156,220,254)">out</span> <span style="color:rgb(212,212,212)">=</span> <span
              style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">einsum</span>(<span
              style="color:rgb(206,145,120)">'mn,mn-&gt;m'</span>, <span style="color:rgb(79,193,255)">X</span>, <span
              style="color:rgb(79,193,255)">X</span>) &nbsp; <span style="color:rgb(106,153,85)"># (m,)</span></div><br>
          <div><span style="color:rgb(106,153,85)"># equivalent to:</span></div>
          <div><span style="color:rgb(156,220,254)">out</span> <span style="color:rgb(212,212,212)">=</span> <span
              style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">sum</span>(<span
              style="color:rgb(79,193,255)">X</span><span style="color:rgb(220,220,170)">**</span><span
              style="color:rgb(181,206,168)">2</span>, <span style="color:rgb(156,220,254)">axis</span><span
              style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">1</span>)</div>
          <div><span style="color:rgb(106,153,85)"># or</span></div>
          <div><span style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">diag</span>(<span
              style="color:rgb(79,193,255)">X</span> <span style="color:rgb(220,220,170)">@</span> <span
              style="color:rgb(79,193,255)">X</span>.<span style="color:rgb(156,220,254)">T</span>)</div><br>
</div>

<div style="
border: 1px solid rgba(204, 204, 220, 0.12);
padding-top: 15px;
padding-right: 15px;
padding-left: 15px;
padding-bottom: 0px;
background-color: rgba(8, 8, 8, 0.175);
border-radius: 5px;
margin-right: 2px;
margin-left: 0px;
margin-top: 10px;
margin-bottom: 2px;
">

              <div><span style="color:rgb(156,220,254);font-size:18px;font-family:Consolas;">
              Pairwise row dot products (Gram matrix)
              </span></div>

          <div><span style="color:rgb(106,153,85)"># X: (m, d)</span></div>
          <div><span style="color:rgb(156,220,254)">out</span> <span style="color:rgb(212,212,212)">=</span> <span
              style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">einsum</span>(<span
              style="color:rgb(206,145,120)">'md,nd-&gt;mn'</span>, <span style="color:rgb(79,193,255)">X</span>, <span
              style="color:rgb(79,193,255)">X</span>) &nbsp;<span style="color:rgb(106,153,85)"># (m, m)</span></div><br>
          <div><span style="color:rgb(106,153,85)"># equivalent to:</span></div>
          <div><span style="color:rgb(156,220,254)">out</span> <span style="color:rgb(212,212,212)">=</span> <span
              style="color:rgb(79,193,255)">X</span> <span style="color:rgb(220,220,170)">@</span> <span
              style="color:rgb(79,193,255)">X</span>.<span style="color:rgb(156,220,254)">T</span></div><br>
          <div><span style="color:rgb(106,153,85)"><strong>\\[\\sum_d X_{md} X_{nd}\\]</strong></span></div><br>
</div>
          
<div style="
        border: 1px solid rgba(204, 204, 220, 0.12);
        padding-top: 15px;
    padding-right: 15px;
    padding-left: 15px;
    padding-bottom: 0px;
    background-color: rgba(8, 8, 8, 0.175);
    border-radius: 5px;
    margin-right: 2px;
    margin-left: 0px;
    margin-top: 10px;
    margin-bottom: 2px;
        ">

              <div><span style="color:rgb(156,220,254);font-size:18px;font-family:Consolas;">
              Outer product
              </span></div>
          
          <div><span style="color:rgb(106,153,85)"># x: (m,)</span></div>
          <div><span style="color:rgb(106,153,85)"># y: (n,)</span></div>
          <div><span style="color:rgb(156,220,254)">out</span> <span style="color:rgb(212,212,212)">=</span> <span
              style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">einsum</span>(<span
              style="color:rgb(206,145,120)">'m,n-&gt;mn'</span>, <span style="color:rgb(156,220,254)">x</span>, <span
              style="color:rgb(156,220,254)">y</span>) &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># (m, n)</span></div>
          <br>
          <div><span style="color:rgb(106,153,85)"># equivalent to:</span></div>
          <div><span style="color:rgb(156,220,254)">out</span> <span style="color:rgb(212,212,212)">=</span> <span
              style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">outer</span>(<span
              style="color:rgb(156,220,254)">x</span>, <span style="color:rgb(156,220,254)">y</span>)</div><br>
</div>
              
<div style="
        border: 1px solid rgba(204, 204, 220, 0.12);
        padding-top: 15px;
    padding-right: 15px;
    padding-left: 15px;
    padding-bottom: 0px;
    background-color: rgba(8, 8, 8, 0.175);
    border-radius: 5px;
    margin-right: 2px;
    margin-left: 0px;
    margin-top: 10px;
    margin-bottom: 2px;
        ">

              <div><span style="color:rgb(156,220,254);font-size:18px;font-family:Consolas;">
              Batch matrix multiplication
              </span></div>

          <div><span style="color:rgb(106,153,85)"># A: (b, m, n)</span></div>
          <div><span style="color:rgb(106,153,85)"># B: (b, n, p)</span></div>
          <div><span style="color:rgb(156,220,254)">out</span> <span style="color:rgb(212,212,212)">=</span> <span
              style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">einsum</span>(<span
              style="color:rgb(206,145,120)">'bmn,bnp-&gt;bmp'</span>, <span style="color:rgb(79,193,255)">A</span>, <span
              style="color:rgb(79,193,255)">B</span>) &nbsp; <span style="color:rgb(106,153,85)"># (b, m, p)</span></div><br>
          <div><span style="color:rgb(106,153,85)"># equivalent to:</span></div>
          <div><span style="color:rgb(156,220,254)">out</span> <span style="color:rgb(212,212,212)">=</span> <span
              style="color:rgb(79,193,255)">A</span> <span style="color:rgb(220,220,170)">@</span> <span
              style="color:rgb(79,193,255)">B</span></div><br>
</div>
              
<div style="
        border: 1px solid rgba(204, 204, 220, 0.12);
        padding-top: 15px;
    padding-right: 15px;
    padding-left: 15px;
    padding-bottom: 0px;
    background-color: rgba(8, 8, 8, 0.175);
    border-radius: 5px;
    margin-right: 2px;
    margin-left: 0px;
    margin-top: 10px;
    margin-bottom: 2px;
        ">

              <div><span style="color:rgb(156,220,254);font-size:18px;font-family:Consolas;">
              Batched linear layer
              </span></div>

          <div><span style="color:rgb(106,153,85)"># X: (b, t, d_in)</span></div>
          <div><span style="color:rgb(106,153,85)"># W: (d_in, d_out)</span></div>
          <div><span style="color:rgb(156,220,254)">out</span> <span style="color:rgb(212,212,212)">=</span> <span
              style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">einsum</span>(<span
              style="color:rgb(206,145,120)">'btd,df-&gt;btf'</span>, <span style="color:rgb(79,193,255)">X</span>, <span
              style="color:rgb(79,193,255)">W</span>) &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># (b, t, d_out)</span>
          </div><br>
          <div><span style="color:rgb(106,153,85)"># equivalent to:</span></div>
          <div><span style="color:rgb(156,220,254)">out</span> <span style="color:rgb(212,212,212)">=</span> <span
              style="color:rgb(79,193,255)">X</span> <span style="color:rgb(220,220,170)">@</span> <span
              style="color:rgb(79,193,255)">W</span></div><br>
          <div><span style="color:rgb(106,153,85)"># with bias:</span></div>
          <div><span style="color:rgb(156,220,254)">out</span> <span style="color:rgb(212,212,212)">=</span> <span
              style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">einsum</span>(<span
              style="color:rgb(206,145,120)">'btd,df-&gt;btf'</span>, <span style="color:rgb(79,193,255)">X</span>, <span
              style="color:rgb(79,193,255)">W</span>) <span style="color:rgb(212,212,212)">+</span> <span
              style="color:rgb(156,220,254)">b</span> &nbsp; <span style="color:rgb(106,153,85)"># b: (d_out,)</span></div>
          <br>
</div>
          
<div style="
        border: 1px solid rgba(204, 204, 220, 0.12);
        padding-top: 15px;
    padding-right: 15px;
    padding-left: 15px;
    padding-bottom: 0px;
    background-color: rgba(8, 8, 8, 0.175);
    border-radius: 5px;
    margin-right: 2px;
    margin-left: 0px;
    margin-top: 10px;
    margin-bottom: 2px;
        ">

              <div><span style="color:rgb(156,220,254);font-size:18px;font-family:Consolas;">
              Attention scores
              </span></div>

          <div><span style="color:rgb(106,153,85)"># Q: (b, t, d)</span></div>
          <div><span style="color:rgb(106,153,85)"># K: (b, s, d)</span></div>
          <div><span style="color:rgb(156,220,254)">scores</span> <span style="color:rgb(212,212,212)">=</span> <span
              style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">einsum</span>(<span
              style="color:rgb(206,145,120)">'btd,bsd-&gt;bts'</span>, <span style="color:rgb(79,193,255)">Q</span>, <span
              style="color:rgb(79,193,255)">K</span>) &nbsp; <span style="color:rgb(106,153,85)"># (b, t, s)</span></div><br>
          <div><span style="color:rgb(106,153,85)"># equivalent to:</span></div>
          <div><span style="color:rgb(156,220,254)">scores</span> <span style="color:rgb(212,212,212)">=</span> <span
              style="color:rgb(79,193,255)">Q</span> <span style="color:rgb(220,220,170)">@</span> <span
              style="color:rgb(79,193,255)">K</span>.<span style="color:rgb(220,220,170)">transpose</span>(<span
              style="color:rgb(181,206,168)">0</span>, <span style="color:rgb(181,206,168)">2</span>, <span
              style="color:rgb(181,206,168)">1</span>)</div><br>
          <div><span style="color:rgb(106,153,85)"><strong>\\[\\sum_d Q_{btd} K_{bsd}\\]</strong></span></div><br>
          
</div>

<div style="
border: 1px solid rgba(204, 204, 220, 0.12);
padding-top: 15px;
padding-right: 15px;
padding-left: 15px;
padding-bottom: 0px;
background-color: rgba(8, 8, 8, 0.175);
border-radius: 5px;
margin-right: 2px;
margin-left: 0px;
margin-top: 10px;
margin-bottom: 2px;
">

              <div><span style="color:rgb(156,220,254);font-size:18px;font-family:Consolas;">
              Attention output
              </span></div>

          <div><span style="color:rgb(106,153,85)"># A: (b, t, s) &nbsp; &nbsp;attention weights</span></div>
          <div><span style="color:rgb(106,153,85)"># V: (b, s, d)</span></div>
          <div><span style="color:rgb(156,220,254)">out</span> <span style="color:rgb(212,212,212)">=</span> <span
              style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">einsum</span>(<span
              style="color:rgb(206,145,120)">'bts,bsd-&gt;btd'</span>, <span style="color:rgb(79,193,255)">A</span>, <span
              style="color:rgb(79,193,255)">V</span>) &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># (b, t,
              d)</span></div><br>
          <div><span style="color:rgb(106,153,85)"><strong>\\[\\sum_s A_{bts} V_{bsd}\\]</strong></span></div><br>
          
</div>

<div style="
border: 1px solid rgba(204, 204, 220, 0.12);
padding-top: 15px;
padding-right: 15px;
padding-left: 15px;
padding-bottom: 0px;
background-color: rgba(8, 8, 8, 0.175);
border-radius: 5px;
margin-right: 2px;
margin-left: 0px;
margin-top: 10px;
margin-bottom: 2px;
">
              <div><span style="color:rgb(156,220,254);font-size:18px;font-family:Consolas;">
              Multi-head attention scores
              </span></div>

          <div><span style="color:rgb(106,153,85)"># Q: (b, h, t, k)</span></div>
          <div><span style="color:rgb(106,153,85)"># K: (b, h, s, k)</span></div>
          <div><span style="color:rgb(156,220,254)">scores</span> <span style="color:rgb(212,212,212)">=</span> <span
              style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">einsum</span>(<span
              style="color:rgb(206,145,120)">'bhtk,bhsk-&gt;bhts'</span>, <span style="color:rgb(79,193,255)">Q</span>, <span
              style="color:rgb(79,193,255)">K</span>) &nbsp; <span style="color:rgb(106,153,85)"># (b, h, t, s)</span></div>
          <br>

</div>

<div style="
border: 1px solid rgba(204, 204, 220, 0.12);
padding-top: 15px;
padding-right: 15px;
padding-left: 15px;
padding-bottom: 20px;
background-color: rgba(8, 8, 8, 0.175);
border-radius: 5px;
margin-right: 2px;
margin-left: 0px;
margin-top: 10px;
margin-bottom: 20px;
">
              <div><span style="color:rgb(156,220,254);font-size:18px;font-family:Consolas;">
              Multi-head attention output
              </span></div>

          <div><span style="color:rgb(106,153,85)"># A: (b, h, t, s)</span></div>
          <div><span style="color:rgb(106,153,85)"># V: (b, h, s, k)</span></div>
          <div><span style="color:rgb(156,220,254)">out</span> <span style="color:rgb(212,212,212)">=</span> <span
              style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">einsum</span>(<span
              style="color:rgb(206,145,120)">'bhts,bhsk-&gt;bhtk'</span>, <span style="color:rgb(79,193,255)">A</span>, <span
              style="color:rgb(79,193,255)">V</span>) &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># (b, h, t,
              k)</span></div>
        </div>
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
                                                Module 2: Machine Learning | Tensors and Einops
                                        </div>


                                        <Tabs>

                                                <Tab2 title="Einsum Detailed Notes" isChecked={true}>
                                                        <TileRowCell0>

                                                                <h1>Einsum Core Pattern</h1>

                                                                <div className="flex flex-row w-[700px] gap-[3px]">
                                                                        <div className="flex-none jade-einsum-table pr-[20px]">
                                                                                <div className="green">einsum:</div>
                                                                                <div dangerouslySetInnerHTML={createMarkup(einsum_1)} />
                                                                        </div>
                                                                        <div className="flex-none jade-einsum-table pr-[20px] pl-[20px]">
                                                                                <div className="green">python:</div>
                                                                                <div dangerouslySetInnerHTML={createMarkup(einsum_2)} />
                                                                        </div>
                                                                        <div className="flex-none jade-einsum-table pl-[20px]">
                                                                                <span dangerouslySetInnerHTML={createMarkup(einsum_3)} />
                                                                        </div>
                                                                </div>

                                                                <div className="">
                                                                        <img src='/notes/IMG_4707.png' width='700px' />
                                                                </div>

                                                                <h1>Matrix Multiplication</h1>

                                                                <div className="flex flex-row w-[700px] gap-[3px]">
                                                                        <div className="flex-none jade-einsum-table pr-[20px]">
                                                                                <div className="green">einsum:</div>
                                                                                <div dangerouslySetInnerHTML={createMarkup(einsum_1)} />
                                                                        </div>
                                                                        <div className="flex-none jade-einsum-table pr-[20px] pl-[20px]">
                                                                                <div className="green">python:</div>
                                                                                <div dangerouslySetInnerHTML={createMarkup(einsum_2)} />
                                                                        </div>
                                                                        <div className="flex-none jade-einsum-table pl-[20px]">
                                                                                <span dangerouslySetInnerHTML={createMarkup(einsum_3)} />
                                                                        </div>
                                                                </div>

                                                                <div className="">
                                                                        <img src='/notes/IMG_4708a.png' width='700px' />
                                                                </div>

                                                                <h1>Pair-wise Dot Product (Gram matrix)</h1>

                                                                <div className="flex flex-row w-[700px] gap-[3px]">
                                                                        <div className="flex-none jade-einsum-table pr-[20px]">
                                                                                <div className="green">einsum:</div>
                                                                                <div dangerouslySetInnerHTML={createMarkup(einsum_4)} />
                                                                        </div>
                                                                        <div className="flex-none jade-einsum-table pr-[20px] pl-[20px]">
                                                                                <div className="green">python:</div>
                                                                                <div dangerouslySetInnerHTML={createMarkup(einsum_5)} />
                                                                        </div>
                                                                        <div className="flex-none jade-einsum-table pl-[20px]">
                                                                                <span dangerouslySetInnerHTML={createMarkup(einsum_6)} />
                                                                        </div>
                                                                </div>

                                                                <div className="">
                                                                        <img src='/notes/IMG_4708b.png' width='700px' />
                                                                </div>

                                                                <h1>Attention scores</h1>

                                                                <div className="flex flex-row w-[700px] gap-[3px]">
                                                                        <div className="flex-none jade-einsum-table pr-[20px]">
                                                                                <div className="green">einsum:</div>
                                                                                <div dangerouslySetInnerHTML={createMarkup(einsum_7)} />
                                                                        </div>
                                                                        <div className="flex-none jade-einsum-table pr-[20px] pl-[20px]">
                                                                                <div className="green">python:</div>
                                                                                <div dangerouslySetInnerHTML={createMarkup(einsum_8)} />
                                                                        </div>
                                                                        <div className="flex-none jade-einsum-table pl-[20px] text-xl">
                                                                                <span dangerouslySetInnerHTML={createMarkup(einsum_9)} />
                                                                        </div>
                                                                </div>

                                                                <div className="">
                                                                        <img src='/notes/IMG_4709a.png' width='700px' />
                                                                </div>

                                                                <h1>Attention output (weighted sum of values)</h1>
                                                                <div className="">
                                                                        <img src='/notes/IMG_4709b.png' width='700px' />
                                                                </div>

                                                                <h1>Einops Reduce example</h1>
                                                                <div className="">
                                                                        <img src='/notes/IMG_4710.png' width='700px' />
                                                                </div>

                                                                <h1>Einops Rearrange example</h1>
                                                                <div className="">
                                                                        <img src='/notes/IMG_4711a.png' width='700px' />
                                                                </div>

                                                                <h1>Common Pattern: unflatten, transform, flatten</h1>
                                                                <div className="">
                                                                        <img src='/notes/IMG_4711b.png' width='700px' />
                                                                </div>

                                                                <h1>Combine multiple operations: 2x2 average pooling</h1>
                                                                <div className="">
                                                                        <img src='/notes/IMG_4712.png' width='700px' />
                                                                </div>



                                                        </TileRowCell0>
                                                </Tab2>


                                                <Tab2 title="Einsum Operations" isChecked={false}>
                                                        <TileRowCell0>

                                                                <div className="mb-[10px]">
                                                                        <h2>Basic Linear Algebra Patterns</h2>
                                                                </div>

                                                                <div className="grid grid-cols-5 bg-zinc-900">
                                                                        <div className="col-start-1 bg-zinc-800 border-[1px] border-zinc-700 pl-[10px] pt-[3px] pb-[3px]">
                                                                                Name
                                                                        </div>
                                                                        <div className="bg-zinc-800 border-[1px] border-zinc-700 pl-[10px] pt-[3px] pb-[3px]">
                                                                                python
                                                                        </div>
                                                                        <div className="bg-zinc-800 border-[1px] border-zinc-700 pl-[10px] pt-[3px] pb-[3px]">
                                                                                Einsum Pattern
                                                                        </div>
                                                                        <div className="col-span-2 bg-zinc-800 border-[1px] border-zinc-700 pl-[10px] pt-[3px] pb-[3px]">
                                                                                Formula
                                                                        </div>




                                                                        <div className="col-start-1 pl-[10px] pt-[5px] border-[1px] border-zinc-700">
                                                                                <strong>Vector dot product</strong>
                                                                        </div>
                                                                        <div className="pl-[10px] pr-[10px] pt-[5px] code border-[1px] border-zinc-700">
                                                                                <div className="code-inline bg-zinc-800">
                                                                                        out = x @ y
                                                                                </div>
                                                                        </div>
                                                                        <div className="pl-[10px] pr-[10px] pt-[5px] code border-[1px] border-zinc-700">
                                                                                <div className="code-inline bg-zinc-800">k,k -&gt;</div>
                                                                        </div>

                                                                        <div className="col-span-2 p-[10px] content-center border-[1px] border-zinc-700">
                                                                                <span className="math text-xl">{"\\[x \\cdot y = \\sum_k x_k y_k\\]"}</span>
                                                                        </div>




                                                                        <div className="col-start-1 pl-[10px] pt-[5px] border-[1px] border-zinc-700">
                                                                                <strong>Matrix-vector multiply</strong>
                                                                        </div>
                                                                        <div className="pl-[10px] pr-[10px] pt-[5px] pb-[10px] code border-[1px] border-zinc-700">

                                                                                <div className="code-inline bg-zinc-800">
                                                                                        out = A @ x
                                                                                </div>
                                                                        </div>

                                                                        <div className="pl-[10px] pr-[10px] pt-[5px] code border-[1px] border-zinc-700">
                                                                                <div className="code-inline bg-zinc-800">
                                                                                        'mn,n-&gt;m'
                                                                                </div>
                                                                        </div>
                                                                        <div className="col-span-2 p-[10px] content-center border-[1px] border-zinc-700">
                                                                                <span className="math text-xl">{"\\[y_m = \\sum_n A_{mn} x_n\\]"}</span>

                                                                        </div>



                                                                        <div className="col-start-1 pl-[10px] pt-[5px] border-[1px] border-zinc-700">
                                                                                <strong>Matrix Multiplication</strong>
                                                                        </div>
                                                                        <div className="pl-[10px] pt-[5px] border-[1px] border-zinc-700">
                                                                                <div className="code-inline bg-zinc-800">
                                                                                        out = A @ B
                                                                                </div>
                                                                        </div>
                                                                        <div className="pl-[10px] pr-[10px] pt-[5px] code border-[1px] border-zinc-700">
                                                                                <div className="code-inline bg-zinc-800">ik,kj -&gt; ij</div>
                                                                        </div>
                                                                        <div className="col-span-2 p-[10px] content-center border-[1px] border-zinc-700">
                                                                                <span className="math text-xl">{"\\[C_{ij} = \\sum_k A_{ik} B_{kj}\\]"}</span>
                                                                        </div>



                                                                        <div className="col-start-1 pl-[10px] pt-[5px] border-[1px] border-zinc-700">
                                                                                <strong>Transpose</strong>
                                                                        </div>
                                                                        <div className="pl-[10px] pt-[5px] border-[1px] border-zinc-700">
                                                                                <div className="code-inline bg-zinc-800">
                                                                                        out = X.T
                                                                                </div>
                                                                        </div>
                                                                        <div className="pl-[10px] pr-[10px] pt-[5px] code border-[1px] border-zinc-700">
                                                                                <div className="code-inline bg-zinc-800">'mn-&gt;nm'</div>
                                                                        </div>
                                                                        <div className="col-span-2 p-[10px] content-center border-[1px] border-zinc-700">

                                                                        </div>


                                                                        <div className="col-start-1 pl-[10px] pt-[5px] border-[1px] border-zinc-700">
                                                                                <strong>Sum over an axis</strong>
                                                                        </div>
                                                                        <div className="pl-[10px] pt-[5px] border-[1px] border-zinc-700">
                                                                                <div className="code-inline bg-zinc-800">
                                                                                        col_sums = X.sum(axis=0)<br />
                                                                                        row_sums = X.sum(axis=1)<br />
                                                                                        total    = X.sum()<br />
                                                                                </div>
                                                                        </div>
                                                                        <div className="pl-[10px] pr-[10px] pt-[5px] code border-[1px] border-zinc-700">
                                                                                <div className="code-inline bg-zinc-800">
                                                                                        col_sums = np.einsum('mn-&gt;n', X)    # (n,) <br />
                                                                                        row_sums = np.einsum('mn-&gt;m', X)    # (m,)<br />
                                                                                        total    = np.einsum('mn-&gt;', X)     # scalar<br />

                                                                                </div>
                                                                        </div>
                                                                        <div className="col-span-2 p-[10px] content-center border-[1px] border-zinc-700">

                                                                        </div>








                                                                </div>

                                                                <div className="mb-[10px]">
                                                                        <h1>Norms and Similarities</h1>
                                                                </div>

                                                                <ul>
                                                                        <li>Column-wise Squared Norms</li>
                                                                        <li>Row-wise Squared Norms</li>
                                                                        <li>Pairwise Row Dot Products (Gram Matrix)</li>
                                                                        <li>Outer Product</li>
                                                                </ul>

                                                                <div className="grid grid-cols-5 bg-zinc-900">
                                                                        <div className="col-start-1 bg-zinc-800 border-[1px] border-zinc-700 pl-[10px] pt-[3px] pb-[3px]">
                                                                                Name
                                                                        </div>
                                                                        <div className="bg-zinc-800 border-[1px] border-zinc-700 pl-[10px] pt-[3px] pb-[3px]">
                                                                                python
                                                                        </div>
                                                                        <div className="bg-zinc-800 border-[1px] border-zinc-700 pl-[10px] pt-[3px] pb-[3px]">
                                                                                Einsum Pattern
                                                                        </div>
                                                                        <div className="col-span-2 bg-zinc-800 border-[1px] border-zinc-700 pl-[10px] pt-[3px] pb-[3px]">
                                                                                Formula
                                                                        </div>



                                                                        <div className="col-start-1 pl-[10px] pt-[5px] border-[1px] border-zinc-700">
                                                                                <strong>Gram Matrix (Pairwise Dot Products)</strong>
                                                                        </div>
                                                                        <div className="pl-[10px] pr-[10px] pt-[5px] code border-[1px] border-zinc-700">
                                                                                <div className="code-inline bg-zinc-800">
                                                                                        out = X @ X.T
                                                                                </div>
                                                                        </div>
                                                                        <div className="pl-[10px] pr-[10px] pt-[5px] code border-[1px] border-zinc-700">
                                                                                <div className="code-inline bg-zinc-800">
                                                                                        ik,jk -&gt; ij
                                                                                </div>
                                                                        </div>
                                                                        <div className="col-span-2 p-[10px] content-center border-[1px] border-zinc-700">
                                                                                <span className="math text-xl">
                                                                                        {"\\[S_{ij} = \\sum_k X_{ik} X_{jk}\\]"}
                                                                                </span>
                                                                        </div>




                                                                </div>

                                                                <div className="mb-[10px]">
                                                                        <h1>Batched Operations</h1>
                                                                </div>

                                                                <ul>
                                                                        <li>Batch Matrix Multiplication</li>
                                                                        <li>Batched Linear Layer</li>

                                                                </ul>

                                                                <div className="mb-[10px]">
                                                                        <h1>Attention Operations</h1>
                                                                </div>

                                                                <ul>
                                                                        <li>Multi-Head Attention Output</li>
                                                                </ul>

                                                                <div className="grid grid-cols-5 bg-zinc-900">
                                                                        <div className="col-start-1 bg-zinc-800 border-[1px] border-zinc-700 pl-[10px] pt-[3px] pb-[3px]">
                                                                                Name
                                                                        </div>
                                                                        <div className="bg-zinc-800 border-[1px] border-zinc-700 pl-[10px] pt-[3px] pb-[3px]">
                                                                                python
                                                                        </div>
                                                                        <div className="bg-zinc-800 border-[1px] border-zinc-700 pl-[10px] pt-[3px] pb-[3px]">
                                                                                Einsum Pattern
                                                                        </div>
                                                                        <div className="col-span-2 bg-zinc-800 border-[1px] border-zinc-700 pl-[10px] pt-[3px] pb-[3px]">
                                                                                Formula
                                                                        </div>



                                                                        <div className="col-start-1 pl-[10px] pt-[5px] border-[1px] border-zinc-700">
                                                                                <strong>
                                                                                        Attention Scores
                                                                                </strong>
                                                                        </div>
                                                                        <div className="pl-[10px] pr-[10px] pt-[5px] code border-[1px] border-zinc-700">
                                                                                <div className="code-inline bg-zinc-800">
                                                                                        scores = Q @ K.T(0, 2, 1)
                                                                                </div>
                                                                        </div>
                                                                        <div className="pl-[10px] pr-[10px] pt-[5px] code border-[1px] border-zinc-700">
                                                                                <div className="code-inline bg-zinc-800">
                                                                                        btd,bsd -&gt; bts
                                                                                </div>
                                                                        </div>
                                                                        <div className="col-span-2 p-[10px] content-center border-[1px] border-zinc-700">
                                                                                <span className="math text-xl">
                                                                                        {"\\[S_{bts} = \\sum_d Q_{btd} K_{bsd}\\]"}
                                                                                </span>
                                                                        </div>




                                                                        <div className="col-start-1 pl-[10px] pt-[5px] border-[1px] border-zinc-700">
                                                                                <strong>
                                                                                        Attention Output
                                                                                </strong>
                                                                        </div>
                                                                        <div className="pl-[10px] pr-[10px] pt-[5px] code border-[1px] border-zinc-700">
                                                                                <div className="code-inline bg-zinc-800">
                                                                                        A: (b, t, s)    attention weights <br />
                                                                                        V: (b, s, d)
                                                                                </div>
                                                                        </div>
                                                                        <div className="pl-[10px] pr-[10px] pt-[5px] code border-[1px] border-zinc-700">
                                                                                <div className="code-inline bg-zinc-800">
                                                                                        bts,bsd -&gt; btd
                                                                                </div>
                                                                        </div>
                                                                        <div className="col-span-2 p-[10px] content-center border-[1px] border-zinc-700">
                                                                                <span className="math text-xl">
                                                                                        {"\\[O_{btd} = \\sum_s A_{bts} V_{bsd}\\]"}
                                                                                </span>
                                                                        </div>





                                                                        <div className="col-start-1 pl-[10px] pt-[5px] border-[1px] border-zinc-700">
                                                                                <strong>
                                                                                        Multi-Head Attention Scores
                                                                                </strong>
                                                                        </div>
                                                                        <div className="pl-[10px] pr-[10px] pt-[5px] code border-[1px] border-zinc-700">
                                                                                <div className="code-inline bg-zinc-800">
                                                                                        Q: (b, h, t, k) <br />
                                                                                        K: (b, h, s, k)
                                                                                </div>
                                                                        </div>
                                                                        <div className="pl-[10px] pr-[10px] pt-[5px] code border-[1px] border-zinc-700">
                                                                                <div className="code-inline bg-zinc-800">
                                                                                        bhtk,bhsk -&gt; bhts
                                                                                </div>
                                                                        </div>
                                                                        <div className="col-span-2 p-[10px] content-center border-[1px] border-zinc-700">
                                                                                <span className="math text-xl">
                                                                                        {"\\[S_{bhts} = \\sum_k Q_{bhtk} K_{bhsk}\\]"}
                                                                                </span>
                                                                        </div>


                                                                </div>





                                                        </TileRowCell0>
                                                </Tab2>




                                        </Tabs>


                                </div>
                        </MathJaxContext>
                </>
        );
}
