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

        const html2 = `
        <div dir="ltr">
        <div style="color:rgb(204,204,204);font-family:monospace;font-size:14px;line-height:18px;">
            <div><span style="color:rgb(197,134,192)">import</span> <span style="color:rgb(78,201,176)">numpy</span> <span
                    style="color:rgb(197,134,192)">as</span> <span style="color:rgb(78,201,176)">np</span></div>
            <div><span style="color:rgb(197,134,192)">from</span> <span style="color:rgb(78,201,176)">einops</span> <span
                    style="color:rgb(197,134,192)">import</span> <span style="color:rgb(220,220,170)">rearrange</span>,
                <span style="color:rgb(220,220,170)">reduce</span>
            </div><br>
            <div><span style="color:rgb(156,220,254)">y</span> <span style="color:rgb(212,212,212)">=</span> <span
                    style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">array</span>([</div>
            <div>&nbsp; &nbsp; [[<span style="color:rgb(181,206,168)">1</span>, <span
                    style="color:rgb(181,206,168)">2</span>, <span style="color:rgb(181,206,168)">3</span>, <span
                    style="color:rgb(181,206,168)">4</span>], </div>
            <div>&nbsp; &nbsp; &nbsp;[<span style="color:rgb(181,206,168)">1</span>, <span
                    style="color:rgb(181,206,168)">2</span>, <span style="color:rgb(181,206,168)">3</span>, <span
                    style="color:rgb(181,206,168)">4</span>],</div>
            <div>&nbsp; &nbsp; &nbsp;[<span style="color:rgb(181,206,168)">1</span>, <span
                    style="color:rgb(181,206,168)">2</span>, <span style="color:rgb(181,206,168)">7</span>, <span
                    style="color:rgb(181,206,168)">4</span>],</div>
            <div>&nbsp; &nbsp; &nbsp;[<span style="color:rgb(181,206,168)">1</span>, <span
                    style="color:rgb(181,206,168)">5</span>, <span style="color:rgb(181,206,168)">3</span>, <span
                    style="color:rgb(181,206,168)">4</span>]],</div><br>
            <div>&nbsp; &nbsp; [[<span style="color:rgb(181,206,168)">5</span>, <span
                    style="color:rgb(181,206,168)">6</span>, <span style="color:rgb(181,206,168)">7</span>, <span
                    style="color:rgb(181,206,168)">8</span>], </div>
            <div>&nbsp; &nbsp; &nbsp;[<span style="color:rgb(181,206,168)">5</span>, <span
                    style="color:rgb(181,206,168)">6</span>, <span style="color:rgb(181,206,168)">7</span>, <span
                    style="color:rgb(181,206,168)">8</span>],</div>
            <div>&nbsp; &nbsp; &nbsp;[<span style="color:rgb(181,206,168)">5</span>, <span
                    style="color:rgb(181,206,168)">9</span>, <span style="color:rgb(181,206,168)">7</span>, <span
                    style="color:rgb(181,206,168)">8</span>],</div>
            <div>&nbsp; &nbsp; &nbsp;[<span style="color:rgb(181,206,168)">5</span>, <span
                    style="color:rgb(181,206,168)">6</span>, <span style="color:rgb(181,206,168)">10</span>, <span
                    style="color:rgb(181,206,168)">8</span>]]</div>
            <div>])</div>
            <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">y</span>.<span
                    style="color:rgb(156,220,254)">shape</span>) <span style="color:rgb(106,153,85)"># (2, 4, 4)</span>
            </div><br>
            <div><span style="color:rgb(106,153,85)"># flatten to 1 dimension</span></div>
            <div><span style="color:rgb(156,220,254)">x</span> <span style="color:rgb(212,212,212)">=</span> <span
                    style="color:rgb(220,220,170)">rearrange</span>(<span style="color:rgb(156,220,254)">y</span>, <span
                    style="color:rgb(206,145,120)">"b h w -&gt; (b h w)"</span>)</div>
            <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">x</span>.<span
                    style="color:rgb(156,220,254)">shape</span>) <span style="color:rgb(106,153,85)"># (32,)</span></div>
            <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">x</span>)</div><br>
            <div><span style="color:rgb(206,145,120)">'''</span></div>
            <div><span style="color:rgb(206,145,120)">[ 1 &nbsp;2 &nbsp;3 &nbsp;4 &nbsp;1 &nbsp;2 &nbsp;3 &nbsp;4 &nbsp;1
                    &nbsp;2 &nbsp;7 &nbsp;4 &nbsp;1 &nbsp;5 &nbsp;3 &nbsp;4 &nbsp;5 &nbsp;6 &nbsp;7 &nbsp;8 &nbsp;5 &nbsp;6
                    &nbsp;7 &nbsp;8 &nbsp;5 &nbsp;9 &nbsp;7 &nbsp;8 &nbsp;5 &nbsp;6 10 &nbsp;8]</span></div>
            <div><span style="color:rgb(206,145,120)">'''</span></div><br>
            <div><span style="color:rgb(106,153,85)"># flatten to 2 dim</span></div>
            <div><span style="color:rgb(156,220,254)">x</span> <span style="color:rgb(212,212,212)">=</span> <span
                    style="color:rgb(220,220,170)">rearrange</span>(<span style="color:rgb(156,220,254)">y</span>, <span
                    style="color:rgb(206,145,120)">"b h w -&gt; b (h w)"</span>)</div>
            <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">x</span>.<span
                    style="color:rgb(156,220,254)">shape</span>) <span style="color:rgb(106,153,85)"># (2, 16)</span></div>
            <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">x</span>)</div><br>
            <div><span style="color:rgb(206,145,120)">'''</span></div>
            <div><span style="color:rgb(206,145,120)">[[ 1 &nbsp;2 &nbsp;3 &nbsp;4 &nbsp;1 &nbsp;2 &nbsp;3 &nbsp;4 &nbsp;1
                    &nbsp;2 &nbsp;7 &nbsp;4 &nbsp;1 &nbsp;5 &nbsp;3 &nbsp;4]</span></div>
            <div><span style="color:rgb(206,145,120)">&nbsp;[ 5 &nbsp;6 &nbsp;7 &nbsp;8 &nbsp;5 &nbsp;6 &nbsp;7 &nbsp;8
                    &nbsp;5 &nbsp;9 &nbsp;7 &nbsp;8 &nbsp;5 &nbsp;6 10 &nbsp;8]]</span></div>
            <div><span style="color:rgb(206,145,120)">'''</span></div><br>
            <div><span style="color:rgb(106,153,85)"># divide into 2x2 blocks and add them together</span></div>
            <div><span style="color:rgb(156,220,254)">z</span> <span style="color:rgb(212,212,212)">=</span> <span
                    style="color:rgb(220,220,170)">reduce</span>(<span style="color:rgb(156,220,254)">y</span>, <span
                    style="color:rgb(206,145,120)">"b (h h2) (w w2) -&gt; b h w"</span>, <span
                    style="color:rgb(206,145,120)">"sum"</span>, <span style="color:rgb(156,220,254)">h2</span><span
                    style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">2</span>, <span
                    style="color:rgb(156,220,254)">w2</span><span style="color:rgb(212,212,212)">=</span><span
                    style="color:rgb(181,206,168)">2</span>)</div>
            <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">z</span>)</div><br>
            <div><span style="color:rgb(206,145,120)">'''</span></div>
            <div><span style="color:rgb(206,145,120)">[[[ 6 14]</span></div>
            <div><span style="color:rgb(206,145,120)">&nbsp; [ 9 18]]</span></div><br>
            <div><span style="color:rgb(206,145,120)">&nbsp;[[22 30]</span></div>
            <div><span style="color:rgb(206,145,120)">&nbsp; [25 33]]]</span></div>
            <div><span style="color:rgb(206,145,120)">'''</span></div><br>
            <div><span style="color:rgb(106,153,85)"># un-flatten to original shape</span></div>
            <div><span style="color:rgb(156,220,254)">z</span> <span style="color:rgb(212,212,212)">=</span> <span
                    style="color:rgb(220,220,170)">rearrange</span>(<span style="color:rgb(156,220,254)">x</span>, <span
                    style="color:rgb(206,145,120)">"b (h w) -&gt; b h w"</span>, <span
                    style="color:rgb(156,220,254)">h</span><span style="color:rgb(212,212,212)">=</span><span
                    style="color:rgb(181,206,168)">4</span>)</div>
            <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">z</span>)</div>
            <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">z</span>.<span
                    style="color:rgb(156,220,254)">shape</span>) <span style="color:rgb(106,153,85)"># (2, 4, 4)</span>
            </div>
            <div><span style="color:rgb(206,145,120)">'''</span></div>
            <div><span style="color:rgb(206,145,120)">[[[ 1 &nbsp;2 &nbsp;3 &nbsp;4]</span></div>
            <div><span style="color:rgb(206,145,120)">&nbsp; [ 1 &nbsp;2 &nbsp;3 &nbsp;4]</span></div>
            <div><span style="color:rgb(206,145,120)">&nbsp; [ 1 &nbsp;2 &nbsp;7 &nbsp;4]</span></div>
            <div><span style="color:rgb(206,145,120)">&nbsp; [ 1 &nbsp;5 &nbsp;3 &nbsp;4]]</span></div><br>
            <div><span style="color:rgb(206,145,120)">&nbsp;[[ 5 &nbsp;6 &nbsp;7 &nbsp;8]</span></div>
            <div><span style="color:rgb(206,145,120)">&nbsp; [ 5 &nbsp;6 &nbsp;7 &nbsp;8]</span></div>
            <div><span style="color:rgb(206,145,120)">&nbsp; [ 5 &nbsp;9 &nbsp;7 &nbsp;8]</span></div>
            <div><span style="color:rgb(206,145,120)">&nbsp; [ 5 &nbsp;6 10 &nbsp;8]]]</span></div>
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
                                                Module 2: Machine Learning | Tensors and Einops
                                        </div>


                                        <Tabs>

                                                <Tab2 title="Einsum Notes" isChecked={true}>
                                                        <TileRowCell0>

                                                                <h1>Einsum Core Pattern</h1>



                                                                <div className="">
                                                                        <img src='/notes/IMG_4707.png' width='700px' />
                                                                </div>

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






                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="Einsum common patterns" isChecked={false}>
                                                        <TileRowCell0>

                                                                <h1>Einsum Common Patterns</h1>

                                                                <div className="w-[1000px] jade-border4">

                                                                        <div className="flex flex-row">
                                                                                <div className="flex-1 bg-zinc-800 p-[5px] ml-[1px] mr-[1px] mb-[1px]">name</div>
                                                                                <div className="flex-2 bg-zinc-800 p-[5px] ml-[1px] mr-[1px] mb-[1px]">python</div>
                                                                                <div className="flex-3 bg-zinc-800 p-[5px] ml-[1px] mr-[1px] jade-border-lr mb-[1px]">einsum pattern</div>
                                                                                <div className="flex-2 bg-zinc-800 p-[5px] ml-[1px] mr-[1px] mb-[1px]">formula</div>
                                                                        </div>

                                                                        <div className="flex flex-row">
                                                                                <div className="flex-1 bg-zinc-900 p-[5px] ml-[1px] mr-[1px] mb-[1px] jade-border-bottom2">
                                                                                        Vector dot product
                                                                                </div>
                                                                                <div className="flex-2 bg-zinc-900 p-[5px] ml-[1px] mr-[1px] mb-[1px] jade-border-bottom2">
                                                                                        <div className="code-inline">
                                                                                                out = x @ y
                                                                                        </div>
                                                                                </div>
                                                                                <div className="flex-3 bg-zinc-900 p-[5px] jade-border-lr mb-[1px] jade-border-bottom2">
                                                                                        <div className="code-inline">
                                                                                                'k,k -&gt;'
                                                                                        </div>
                                                                                </div>
                                                                                <div className="flex-2 bg-zinc-900 p-[5px] ml-[1px] mr-[1px] mb-[1px] jade-border-bottom2">
                                                                                        <span className="math text-xl">{"\\[x \\cdot y = \\sum_k x_k y_k\\]"}</span>
                                                                                </div>
                                                                        </div>

                                                                        <div className="flex flex-row">
                                                                                <div className="flex-1 bg-zinc-900 p-[5px] ml-[1px] mr-[1px] mb-[1px] jade-border-bottom2">
                                                                                        Matrix-vector multiply
                                                                                </div>
                                                                                <div className="flex-2 bg-zinc-900 p-[5px] ml-[1px] mr-[1px] mb-[1px] jade-border-bottom2">
                                                                                        <div className="code-inline">
                                                                                                out = A @ x
                                                                                        </div>
                                                                                </div>
                                                                                <div className="flex-3 bg-zinc-900 p-[5px] jade-border-lr mb-[1px] jade-border-bottom2">
                                                                                        <div className="code-inline">
                                                                                                'mn,n-&gt;m'
                                                                                        </div>
                                                                                </div>
                                                                                <div className="flex-2 bg-zinc-900 p-[5px] ml-[1px] mr-[1px] mb-[1px] jade-border-bottom2">
                                                                                        <span className="math text-xl">{"\\[y_m = \\sum_n A_{mn} x_n\\]"}</span>
                                                                                </div>
                                                                        </div>

                                                                        <div className="flex flex-row">
                                                                                <div className="flex-1 bg-zinc-900 p-[5px] ml-[1px] mr-[1px] mb-[1px] jade-border-bottom2">
                                                                                        Matrix Multiplication
                                                                                </div>
                                                                                <div className="flex-2 bg-zinc-900 p-[5px] ml-[1px] mr-[1px] mb-[1px] jade-border-bottom2">
                                                                                        <div className="code-inline">
                                                                                                out = A @ B
                                                                                        </div>
                                                                                </div>
                                                                                <div className="flex-3 bg-zinc-900 p-[5px] jade-border-lr mb-[1px] jade-border-bottom2">
                                                                                        <div className="code-inline">
                                                                                                'ik,kj -&gt; ij'
                                                                                        </div>
                                                                                </div>
                                                                                <div className="flex-2 bg-zinc-900 p-[5px] ml-[1px] mr-[1px] mb-[1px] jade-border-bottom2">
                                                                                        <span className="math text-xl">{"\\[C_{ij} = \\sum_k A_{ik} B_{kj}\\]"}</span>
                                                                                </div>
                                                                        </div>

                                                                        <div className="flex flex-row">
                                                                                <div className="flex-1 bg-zinc-900 p-[5px] ml-[1px] mr-[1px] mb-[1px] jade-border-bottom2">
                                                                                        Sum over an axis
                                                                                </div>
                                                                                <div className="flex-2 bg-zinc-900 p-[5px] ml-[1px] mr-[1px] mb-[1px] jade-border-bottom2">
                                                                                        <div className="code-inline">
                                                                                                col_sums = X.sum(axis=0)<br />
                                                                                                row_sums = X.sum(axis=1)<br />
                                                                                                total    = X.sum()<br />
                                                                                        </div>
                                                                                </div>
                                                                                <div className="flex-3 bg-zinc-900 p-[5px] jade-border-lr mb-[1px] jade-border-bottom2">
                                                                                        <div className="code-inline">
                                                                                                col_sums = np.einsum('mn-&gt;n', X) <br />
                                                                                                row_sums = np.einsum('mn-&gt;m', X) <br />
                                                                                                total    = np.einsum('mn-&gt;', X)  <br />
                                                                                        </div>
                                                                                </div>
                                                                                <div className="flex-2 bg-zinc-900 p-[5px] ml-[1px] mr-[1px] mb-[1px] jade-border-bottom2">
                                                                                        <span className="math text-lg">
                                                                                                {"\\[ColSum_{n} = \\sum_m X_{mn}\\]"}
                                                                                        </span>
                                                                                        <span className="math text-lg">
                                                                                                {"\\[RowSum_{m} = \\sum_n X_{mn}\\]"}
                                                                                        </span>
                                                                                        <span className="math text-lg">
                                                                                                {"\\[sum = \\sum_{mn} X_{mn}\\]"}
                                                                                        </span>
                                                                                </div>
                                                                        </div>

                                                                        <div className="flex flex-row">
                                                                                <div className="flex-1 bg-zinc-900 p-[5px] ml-[1px] mr-[1px] mb-[1px] jade-border-bottom2">
                                                                                        Gram Matrix (Pairwise Dot Products)
                                                                                </div>
                                                                                <div className="flex-2 bg-zinc-900 p-[5px] ml-[1px] mr-[1px] mb-[1px] jade-border-bottom2">
                                                                                        <div className="code-inline">
                                                                                                out = X @ X.T
                                                                                        </div>
                                                                                </div>
                                                                                <div className="flex-3 bg-zinc-900 p-[5px] jade-border-lr mb-[1px] jade-border-bottom2">
                                                                                        <div className="code-inline">
                                                                                                'ik,jk -&gt; ij'
                                                                                        </div>
                                                                                </div>
                                                                                <div className="flex-2 bg-zinc-900 p-[5px] ml-[1px] mr-[1px] mb-[1px] jade-border-bottom2">
                                                                                        <span className="math text-xl">
                                                                                                {"\\[S_{ij} = \\sum_k X_{ik} X_{jk}\\]"}
                                                                                        </span>
                                                                                </div>
                                                                        </div>

                                                                        <div className="flex flex-row">
                                                                                <div className="flex-1 bg-zinc-900 p-[5px] ml-[1px] mr-[1px] mb-[1px] jade-border-bottom2">
                                                                                        Attention Scores
                                                                                </div>
                                                                                <div className="flex-2 bg-zinc-900 p-[5px] ml-[1px] mr-[1px] mb-[1px] jade-border-bottom2">
                                                                                        <div className="code-inline">
                                                                                                scores = Q @ K.T(0, 2, 1)
                                                                                        </div>
                                                                                </div>
                                                                                <div className="flex-3 bg-zinc-900 p-[5px] jade-border-lr mb-[1px] jade-border-bottom2">
                                                                                        <div className="code-inline">
                                                                                                'btd,bsd -&gt; bts'
                                                                                        </div>
                                                                                </div>
                                                                                <div className="flex-2 bg-zinc-900 p-[5px] ml-[1px] mr-[1px] mb-[1px] jade-border-bottom2">
                                                                                        <span className="math text-xl">
                                                                                                {"\\[S_{bts} = \\sum_d Q_{btd} K_{bsd}\\]"}
                                                                                        </span>
                                                                                </div>
                                                                        </div>





                                                                </div>



                                                                <div className="grid grid-cols-3 bg-zinc-900 mt-[20px] w-[400px]">
                                                                        <div className="col-start-1 bg-zinc-800 border-[1px] border-zinc-700 pl-[10px] pt-[3px] pb-[3px]">
                                                                                Index
                                                                        </div>
                                                                        <div className="col-span-2 bg-zinc-800 border-[1px] border-zinc-700 pl-[10px] pt-[3px] pb-[3px]">
                                                                                Meaning
                                                                        </div>

                                                                        <div className="col-start-1 pl-[10px] pt-[5px] border-[1px] border-zinc-700">
                                                                                <strong>
                                                                                        b
                                                                                </strong>
                                                                        </div>
                                                                        <div className="col-span-2 pl-[10px] pr-[10px] pt-[5px] code border-[1px] border-zinc-700">
                                                                                batch size
                                                                        </div>

                                                                        <div className="col-start-1 pl-[10px] pt-[5px] border-[1px] border-zinc-700">
                                                                                <strong>
                                                                                        t
                                                                                </strong>
                                                                        </div>
                                                                        <div className="col-span-2 pl-[10px] pr-[10px] pt-[5px] code border-[1px] border-zinc-700">
                                                                                query token position
                                                                        </div>

                                                                        <div className="col-start-1 pl-[10px] pt-[5px] border-[1px] border-zinc-700">
                                                                                <strong>
                                                                                        s
                                                                                </strong>
                                                                        </div>
                                                                        <div className="col-span-2 pl-[10px] pr-[10px] pt-[5px] code border-[1px] border-zinc-700">
                                                                                key/value token position
                                                                        </div>

                                                                        <div className="col-start-1 pl-[10px] pt-[5px] border-[1px] border-zinc-700">
                                                                                <strong>
                                                                                        d
                                                                                </strong>
                                                                        </div>
                                                                        <div className="col-span-2 pl-[10px] pr-[10px] pt-[5px] code border-[1px] border-zinc-700">
                                                                                embedding dimension
                                                                        </div>

                                                                        <div className="col-start-1 pl-[10px] pt-[5px] border-[1px] border-zinc-700">
                                                                                <strong>
                                                                                        h
                                                                                </strong>
                                                                        </div>
                                                                        <div className="col-span-2 pl-[10px] pr-[10px] pt-[5px] code border-[1px] border-zinc-700">
                                                                                attention head
                                                                        </div>

                                                                        <div className="col-start-1 pl-[10px] pt-[5px] border-[1px] border-zinc-700">
                                                                                <strong>
                                                                                        k
                                                                                </strong>
                                                                        </div>
                                                                        <div className="col-span-2 pl-[10px] pr-[10px] pt-[5px] code border-[1px] border-zinc-700">
                                                                                head dimension
                                                                        </div>
                                                                </div>



                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="Einsum summary" isChecked={false}>
                                                        <TileRowCell0>


                                                                <h1 id="quick-pattern-reference">Quick Pattern Reference</h1>
                                                                <table className="jade-einsum-table p-[10px]">
                                                                        <tbody>
                                                                                <tr>
                                                                                        <td><strong>Operation</strong></td>
                                                                                        <td><strong>einsum pattern</strong></td>
                                                                                </tr>
                                                                                <tr>
                                                                                        <td>dot product</td>
                                                                                        <td><code>'d,d-&gt;'</code></td>
                                                                                </tr>
                                                                                <tr>
                                                                                        <td>matrix multiply</td>
                                                                                        <td><code>'mn,np-&gt;mp'</code></td>
                                                                                </tr>
                                                                                <tr>
                                                                                        <td>outer product</td>
                                                                                        <td><code>'m,n-&gt;mn'</code></td>
                                                                                </tr>
                                                                                <tr>
                                                                                        <td>Gram matrix</td>
                                                                                        <td><code>'md,nd-&gt;mn'</code></td>
                                                                                </tr>
                                                                                <tr>
                                                                                        <td>column norms</td>
                                                                                        <td><code>'mn,mn-&gt;n'</code></td>
                                                                                </tr>
                                                                                <tr>
                                                                                        <td>row norms</td>
                                                                                        <td><code>'mn,mn-&gt;m'</code></td>
                                                                                </tr>
                                                                                <tr>
                                                                                        <td>batched linear layer</td>
                                                                                        <td><code>'btd,df-&gt;btf'</code></td>
                                                                                </tr>
                                                                                <tr>
                                                                                        <td>attention scores</td>
                                                                                        <td><code>'btd,bsd-&gt;bts'</code></td>
                                                                                </tr>
                                                                                <tr>
                                                                                        <td>attention output</td>
                                                                                        <td><code>'bts,bsd-&gt;btd'</code></td>
                                                                                </tr>
                                                                                <tr>
                                                                                        <td>multi-head scores</td>
                                                                                        <td><code>'bhtk,bhsk-&gt;bhts'</code></td>
                                                                                </tr>
                                                                                <tr>
                                                                                        <td>multi-head output</td>
                                                                                        <td><code>'bhts,bhsk-&gt;bhtk'</code></td>
                                                                                </tr>
                                                                        </tbody>
                                                                </table>


                                                                <h1>Einsum operations</h1>

                                                                <div className='flex-1 min-w-[700px] max-w-[700px]'>
                                                                        <div dangerouslySetInnerHTML={createMarkup(html)} />
                                                                </div>

                                                        </TileRowCell0>
                                                </Tab2>


                                                <Tab2 title="Einsum rearrange and reduce" isChecked={false}>
                                                        <TileRowCell0>

                                                                <h1>Einsum rearrange and reduce</h1>

                                                                <div className='flex-1 jade-code min-w-[800px] max-w-[800px]'>
                                                                        <div dangerouslySetInnerHTML={createMarkup(html2)} />
                                                                </div>


                                                        </TileRowCell0>
                                                </Tab2>




                                        </Tabs>


                                </div>
                        </MathJaxContext>
                </>
        );
}
