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

        const html_1 = `
        <div dir="ltr"><div style="color:rgb(204,204,204);background-color:rgb(31,31,31);font-family:Consolas,&quot;Courier New&quot;,monospace;font-size:14px;line-height:19px;white-space:pre-wrap"><div><span style="color:rgb(106,153,85)"># Vector dot product</span></div><div><span style="color:rgb(106,153,85)"># x: (d,)</span></div><div><span style="color:rgb(106,153,85)"># y: (d,)</span></div><div><span style="color:rgb(156,220,254)">out</span> <span style="color:rgb(212,212,212)">=</span> <span style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">einsum</span>(<span style="color:rgb(206,145,120)">'d,d-&gt;'</span>, <span style="color:rgb(156,220,254)">x</span>, <span style="color:rgb(156,220,254)">y</span>) &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># scalar</span></div><br><div><span style="color:rgb(106,153,85)"># equivalent to:</span></div><div><span style="color:rgb(156,220,254)">out</span> <span style="color:rgb(212,212,212)">=</span> <span style="color:rgb(156,220,254)">x</span> <span style="color:rgb(220,220,170)">@</span> <span style="color:rgb(156,220,254)">y</span></div></div></div>
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

                                                <Tab2 title="Common Einsum Patterns" isChecked={true}>
                                                        <TileRowCell0>


                                                                <h1 id="common-einsum-patterns">Common Einsum Patterns</h1>
                                                                <table>
                                                                        <thead>
                                                                                <tr>
                                                                                        <th>Operation</th>
                                                                                        <th>Formula</th>
                                                                                        <th>Einsum Pattern</th>
                                                                                </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                                <tr>
                                                                                        <td><strong>Dot Product</strong></td>
                                                                                        <td><span className="math">{"\\[x \\cdot y = \\sum_k x_k y_k\\]"}</span></td>
                                                                                        <td><code>k,k -&gt;</code></td>
                                                                                </tr>
                                                                                <tr>
                                                                                        <td><strong>Matrix Multiplication</strong></td>
                                                                                        <td><span className="math">{"\\[C_{ij} = \\sum_k A_{ik} B_{kj}\\]"}</span></td>
                                                                                        <td><code>ik,kj -&gt; ij</code></td>
                                                                                </tr>
                                                                                <tr>
                                                                                        <td><strong>Gram Matrix (Pairwise Dot Products)</strong></td>
                                                                                        <td><span className="math">{"\\[S_{ij} = \\sum_k X_{ik} X_{jk}\\]"}</span></td>
                                                                                        <td><code>ik,jk -&gt; ij</code></td>
                                                                                </tr>
                                                                                <tr>
                                                                                        <td><strong>Attention Scores</strong></td>
                                                                                        <td><span className="math">{"\\[S_{bts} = \\sum_d Q_{btd} K_{bsd}\\]"}</span></td>
                                                                                        <td><code>btd,bsd -&gt; bts</code></td>
                                                                                </tr>
                                                                                <tr>
                                                                                        <td><strong>Attention Output</strong></td>
                                                                                        <td><span className="math">{"\\[O_{btd} = \\sum_s A_{bts} V_{bsd}\\]"}</span></td>
                                                                                        <td><code>bts,bsd -&gt; btd</code></td>
                                                                                </tr>
                                                                                <tr>
                                                                                        <td><strong>Multi-Head Attention Scores</strong></td>
                                                                                        <td><span className="math">{"\\[S_{bhts} = \\sum_k Q_{bhtk} K_{bhsk}\\]"}</span></td>
                                                                                        <td><code>bhtk,bhsk -&gt; bhts</code></td>
                                                                                </tr>
                                                                        </tbody>
                                                                </table>

                                                                <h1 id="index-meaning-in-transformers">Index Meaning in Transformers</h1>
                                                                <table>
                                                                        <thead>
                                                                                <tr>
                                                                                        <th>Index</th>
                                                                                        <th>Meaning</th>
                                                                                </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                                <tr>
                                                                                        <td><strong>b</strong></td>
                                                                                        <td>batch size</td>
                                                                                </tr>
                                                                                <tr>
                                                                                        <td><strong>t</strong></td>
                                                                                        <td>query token position</td>
                                                                                </tr>
                                                                                <tr>
                                                                                        <td><strong>s</strong></td>
                                                                                        <td>key/value token position</td>
                                                                                </tr>
                                                                                <tr>
                                                                                        <td><strong>d</strong></td>
                                                                                        <td>embedding dimension</td>
                                                                                </tr>
                                                                                <tr>
                                                                                        <td><strong>h</strong></td>
                                                                                        <td>attention head</td>
                                                                                </tr>
                                                                                <tr>
                                                                                        <td><strong>k</strong></td>
                                                                                        <td>head dimension</td>
                                                                                </tr>
                                                                        </tbody>
                                                                </table>




                                                        </TileRowCell0>
                                                </Tab2>



                                                <Tab2 title="Einsum Summary" isChecked={false}>
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

                                                                <h1 id="quick-pattern-reference">Quick Pattern Reference</h1>
                                                                <table>
                                                                        <thead>
                                                                                <tr>
                                                                                        <th>Operation</th>
                                                                                        <th>einsum pattern</th>
                                                                                </tr>
                                                                        </thead>
                                                                        <tbody>
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




                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="Einsum" isChecked={false}>
                                                        <TileRowCell0>


                                                                <h1 id="numpy-einsum-cheat-sheet">NumPy <code>einsum</code> Cheat Sheet</h1>
                                                                <pre><code className="lang-python"><span className="hljs-keyword">import</span> numpy <span className="hljs-keyword">as</span> np
                                                                </code></pre>
                                                                <h1 id="core-rule">Core Rule</h1>
                                                                <p>Einstein summation follows two rules:</p>
                                                                <ol>
                                                                        <li><strong>Repeated indices are summed over</strong></li>
                                                                        <li><strong>Indices appearing in the output are preserved</strong></li>
                                                                </ol>
                                                                <p>Example:</p>
                                                                <pre><code className="lang-python">np.einsum(<span className="hljs-symbol">'ik</span>,kj-&gt;ij', <span className="hljs-type">A</span>, <span className="hljs-type">B</span>)
                                                                </code></pre>
                                                                <p>Formula:</p>
                                                                <p className="formula">{"\\[C_{ij} = \\sum_k A_{ik} B_{kj}\\]"}</p>
                                                                <h1 id="1-vector-dot-product">1. Vector Dot Product</h1>
                                                                <pre><code className="lang-python"><span className="hljs-comment"># x: (d,)</span>
                                                                        <span className="hljs-comment"># y: (d,)</span>
                                                                        <span className="hljs-attr">out</span> = np.einsum(<span className="hljs-string">'d,d-&gt;'</span>, x, y)
                                                                </code></pre>
                                                                <p>Equivalent:</p>
                                                                <pre><code className="lang-python"><span className="hljs-attr">out</span> = x @ y
                                                                </code></pre>
                                                                <p>Formula:</p>
                                                                <p className="formula">{"\\[x \\cdot y = \\sum_d x_d y_d\\]"}</p>
                                                                <h1 id="2-matrix-vector-multiply">2. Matrix–Vector Multiply</h1>
                                                                <pre><code className="lang-python"><span className="hljs-comment"># A: (m, n)</span>
                                                                        <span className="hljs-comment"># x: (n,)</span>
                                                                        <span className="hljs-attr">out</span> = np.einsum(<span className="hljs-string">'mn,n-&gt;m'</span>, A, x)
                                                                </code></pre>
                                                                <p>Equivalent:</p>
                                                                <pre><code className="lang-python"><span className="hljs-attr">out</span> = A @ x
                                                                </code></pre>
                                                                <p>Formula:</p>
                                                                <p className="formula">{"\\[y_m = \\sum_n A_{mn} x_n\\]"}</p>
                                                                <h1 id="3-matrix-multiplication">3. Matrix Multiplication</h1>
                                                                <pre><code className="lang-python"><span className="hljs-comment"># A: (m, n)</span>
                                                                        <span className="hljs-comment"># B: (n, p)</span>
                                                                        <span className="hljs-attr">out</span> = np.einsum(<span className="hljs-string">'mn,np-&gt;mp'</span>, A, B)
                                                                </code></pre>
                                                                <p>Equivalent:</p>
                                                                <pre><code className="lang-python"><span className="hljs-attr">out</span> = A @ B
                                                                </code></pre>
                                                                <p>Formula:</p>
                                                                <p className="formula">{"\\[C_{mp} = \\sum_n A_{mn} B_{np}\\]"}</p>
                                                                <h1 id="4-transpose">4. Transpose</h1>
                                                                <pre><code className="lang-python"><span className="hljs-comment"># X: (m, n)</span>
                                                                        <span className="hljs-attr">out</span> = np.einsum(<span className="hljs-string">'mn-&gt;nm'</span>, X)
                                                                </code></pre>
                                                                <p>Equivalent:</p>
                                                                <pre><code className="lang-python"><span className="hljs-attr">out</span> = X.T
                                                                </code></pre>
                                                                <h1 id="5-sum-over-an-axis">5. Sum Over an Axis</h1>
                                                                <pre><code className="lang-python"><span className="hljs-comment"># X: (m, n)</span>

                                                                        <span className="hljs-attr">col_sums</span> = np.einsum(<span className="hljs-string">'mn-&gt;n'</span>, X)
                                                                        <span className="hljs-attr">row_sums</span> = np.einsum(<span className="hljs-string">'mn-&gt;m'</span>, X)
                                                                        <span className="hljs-attr">total</span>    = np.einsum(<span className="hljs-string">'mn-&gt;'</span>, X)
                                                                </code></pre>
                                                                <p>Equivalent:</p>
                                                                <pre><code className="lang-python"><span className="hljs-attr">col_sums</span> = X.sum(axis=<span className="hljs-number">0</span>)
                                                                        <span className="hljs-attr">row_sums</span> = X.sum(axis=<span className="hljs-number">1</span>)
                                                                        <span className="hljs-attr">total</span>    = X.sum()
                                                                </code></pre>
                                                                <h1 id="6-column-wise-squared-norms">6. Column-wise Squared Norms</h1>
                                                                <pre><code className="lang-python"><span className="hljs-comment"># X: (m, n)</span>

                                                                        <span className="hljs-attr">out</span> = np.einsum(<span className="hljs-string">'mn,mn-&gt;n'</span>, X, X)
                                                                </code></pre>
                                                                <p>Equivalent:</p>
                                                                <pre><code className="lang-python">np.sum(X**<span className="hljs-number">2</span>, axis=<span className="hljs-number">0</span>)
                                                                </code></pre>
                                                                <p>Formula:</p>
                                                                <p className="formula">{"\\[|X_{\\cdot n}|^2 = \\sum_m X_{mn}^2\\]"}</p>
                                                                <p>Also equal to:</p>
                                                                <p className="formula">{"\\[\\text{diag}(X^T X)\\]"}</p>
                                                                <h1 id="7-row-wise-squared-norms">7. Row-wise Squared Norms</h1>
                                                                <pre><code className="lang-python"><span className="hljs-comment"># X: (m, n)</span>

                                                                        <span className="hljs-attr">out</span> = np.einsum(<span className="hljs-string">'mn,mn-&gt;m'</span>, X, X)
                                                                </code></pre>
                                                                <p>Equivalent:</p>
                                                                <pre><code className="lang-python">np.sum(X**<span className="hljs-number">2</span>, axis=<span className="hljs-number">1</span>)
                                                                </code></pre>
                                                                <p>Formula:</p>
                                                                <p className="formula">{"\\[|X_{m\\cdot}|^2 = \\sum_n X_{mn}^2\\]"}</p>
                                                                <p>Also equal to:</p>
                                                                <p className="formula">{"\\[\\text{diag}(X X^T)\\]"}</p>
                                                                <h1 id="8-pairwise-row-dot-products-gram-matrix-">8. Pairwise Row Dot Products (Gram Matrix)</h1>
                                                                <pre><code className="lang-python"><span className="hljs-comment"># X: (m, d)</span>

                                                                        <span className="hljs-attr">out</span> = np.einsum(<span className="hljs-string">'md,nd-&gt;mn'</span>, X, X)
                                                                </code></pre>
                                                                <p>Equivalent:</p>
                                                                <pre><code className="lang-python"><span className="hljs-keyword">X</span> @ <span className="hljs-keyword">X</span>.T
                                                                </code></pre>
                                                                <p>Formula:</p>
                                                                <p className="formula">{"\\[G_{mn} = \\sum_d X_{md} X_{nd}\\]"}</p>
                                                                <h1 id="9-outer-product">9. Outer Product</h1>
                                                                <pre><code className="lang-python"><span className="hljs-comment"># x: (m,)</span>
                                                                        <span className="hljs-comment"># y: (n,)</span>

                                                                        <span className="hljs-attr">out</span> = np.einsum(<span className="hljs-string">'m,n-&gt;mn'</span>, x, y)
                                                                </code></pre>
                                                                <p>Equivalent:</p>
                                                                <pre><code className="lang-python">np.<span className="hljs-keyword">outer</span>(x, y)
                                                                </code></pre>
                                                                <p>Formula:</p>
                                                                <p className="formula">{"\\[M_{mn} = x_m y_n\\]"}</p>
                                                                <h1 id="10-batch-matrix-multiplication">10. Batch Matrix Multiplication</h1>
                                                                <pre><code className="lang-python"><span className="hljs-comment"># A: (b, m, n)</span>
                                                                        <span className="hljs-comment"># B: (b, n, p)</span>

                                                                        <span className="hljs-attr">out</span> = np.einsum(<span className="hljs-string">'bmn,bnp-&gt;bmp'</span>, A, B)
                                                                </code></pre>
                                                                <p>Equivalent:</p>
                                                                <pre><code className="lang-python"><span className="hljs-keyword">A</span> @ B
                                                                </code></pre>
                                                                <p>Formula:</p>
                                                                <p className="formula">{"\\[C_{bmp} = \\sum_n A_{bmn} B_{bnp}\\]"}</p>
                                                                <h1 id="11-batched-linear-layer">11. Batched Linear Layer</h1>
                                                                <pre><code className="lang-python"><span className="hljs-comment"># X: (b, t, d_in)</span>
                                                                        <span className="hljs-comment"># W: (d_in, d_out)</span>

                                                                        <span className="hljs-attr">out</span> = np.einsum(<span className="hljs-string">'btd,df-&gt;btf'</span>, X, W)
                                                                </code></pre>
                                                                <p>Equivalent:</p>
                                                                <pre><code className="lang-python"><span className="hljs-attr">out</span> = X @ W
                                                                </code></pre>
                                                                <p>Formula:</p>
                                                                <p className="formula">{"\\[Y_{btf} = \\sum_d X_{btd} W_{df}\\]"}</p>
                                                                <h1 id="12-attention-scores">12. Attention Scores</h1>
                                                                <pre><code className="lang-python"><span className="hljs-comment"># Q: (b, t, d)</span>
                                                                        <span className="hljs-comment"># K: (b, s, d)</span>

                                                                        <span className="hljs-attr">scores</span> = np.einsum(<span className="hljs-string">'btd,bsd-&gt;bts'</span>, Q, K)
                                                                </code></pre>
                                                                <p>Equivalent:</p>
                                                                <pre><code className="lang-python">scores = Q @ K.transpose(<span className="hljs-number">0</span>,<span className="hljs-number">2</span>,<span className="hljs-number">1</span>)
                                                                </code></pre>
                                                                <p>Formula:</p>
                                                                <p className="formula">{"\\[S_{bts} = \\sum_d Q_{btd} K_{bsd}\\]"}</p>
                                                                <h1 id="13-attention-output">13. Attention Output</h1>
                                                                <pre><code className="lang-python"><span className="hljs-comment"># A: (b, t, s)</span>
                                                                        <span className="hljs-comment"># V: (b, s, d)</span>

                                                                        <span className="hljs-attr">out</span> = np.einsum(<span className="hljs-string">'bts,bsd-&gt;btd'</span>, A, V)
                                                                </code></pre>
                                                                <p>Formula:</p>
                                                                <p className="formula">{"\\[O_{btd} = \\sum_s A_{bts} V_{bsd}\\]"}</p>
                                                                <h1 id="14-multi-head-attention-scores">14. Multi-Head Attention Scores</h1>
                                                                <pre><code className="lang-python"><span className="hljs-comment"># Q: (b, h, t, k)</span>
                                                                        <span className="hljs-comment"># K: (b, h, s, k)</span>

                                                                        <span className="hljs-attr">scores</span> = np.einsum(<span className="hljs-string">'bhtk,bhsk-&gt;bhts'</span>, Q, K)
                                                                </code></pre>
                                                                <p>Formula:</p>
                                                                <p className="formula">{"\\[S_{bhts} = \\sum_k Q_{bhtk} K_{bhsk}\\]"}</p>
                                                                <h1 id="15-multi-head-attention-output">15. Multi-Head Attention Output</h1>
                                                                <pre><code className="lang-python"><span className="hljs-comment"># A: (b, h, t, s)</span>
                                                                        <span className="hljs-comment"># V: (b, h, s, k)</span>

                                                                        <span className="hljs-attr">out</span> = np.einsum(<span className="hljs-string">'bhts,bhsk-&gt;bhtk'</span>, A, V)
                                                                </code></pre>
                                                                <p>Formula:</p>
                                                                <p className="formula">{"\\[O_{bhtk} = \\sum_s A_{bhts} V_{bhsk}\\]"}</p>
                                                                <h1 id="quick-pattern-reference">Quick Pattern Reference</h1>
                                                                <table>
                                                                        <thead>
                                                                                <tr>
                                                                                        <th>Operation</th>
                                                                                        <th>einsum pattern</th>
                                                                                </tr>
                                                                        </thead>
                                                                        <tbody>
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





                                                        </TileRowCell0>
                                                </Tab2>




                                                <Tab2 title="Einsum" isChecked={false}>
                                                        <TileRowCell0>

                                                                <pre><code className="lang-markdown"># NumPy `einsum` Cheat Sheet


                                                                        <span className="hljs-keyword">import</span> numpy <span className="hljs-keyword">as</span> np
                                                                </code></pre>

                                                                <h1 id="core-rule">Core Rule</h1>
                                                                <p>Einstein summation follows two simple rules:</p>
                                                                <ol>
                                                                        <li><strong>Repeated indices are summed over</strong></li>
                                                                        <li><strong>Indices appearing in the output are preserved</strong></li>
                                                                </ol>
                                                                <p>Example:</p>
                                                                <pre><code className="lang-python">np.einsum(<span className="hljs-symbol">'ik</span>,kj-&gt;ij', <span className="hljs-type">A</span>, <span className="hljs-type">B</span>)
                                                                </code></pre>
                                                                <p>Formula:</p>
                                                                <p className="formula">{"\\[C_{ij} = \\sum_k A_{ik} B_{kj}\\]"}</p>
                                                                <h1 id="basic-linear-algebra-patterns">Basic Linear Algebra Patterns</h1>
                                                                <h2 id="1-vector-dot-product">1. Vector Dot Product</h2>
                                                                <pre><code className="lang-python"><span className="hljs-comment"># x: (d,)</span>
                                                                        <span className="hljs-comment"># y: (d,)</span>
                                                                        <span className="hljs-attr">out</span> = np.einsum(<span className="hljs-string">'d,d-&gt;'</span>, x, y)
                                                                </code></pre>
                                                                <p>Equivalent:</p>
                                                                <pre><code className="lang-python"><span className="hljs-attr">out</span> = x @ y
                                                                </code></pre>
                                                                <p>Formula:</p>
                                                                <p className="formula">{"\\[x \\cdot y = \\sum_d x_d y_d\\]"}</p>
                                                                <h2 id="2-matrix-vector-multiply">2. Matrix–Vector Multiply</h2>
                                                                <pre><code className="lang-python"><span className="hljs-comment"># A: (m, n)</span>
                                                                        <span className="hljs-comment"># x: (n,)</span>
                                                                        <span className="hljs-attr">out</span> = np.einsum(<span className="hljs-string">'mn,n-&gt;m'</span>, A, x)
                                                                </code></pre>
                                                                <p>Equivalent:</p>
                                                                <pre><code className="lang-python"><span className="hljs-attr">out</span> = A @ x
                                                                </code></pre>
                                                                <p>Formula:</p>
                                                                <p className="formula">{"\\[y_m = \\sum_n A_{mn} x_n\\]"}</p>
                                                                <h2 id="3-matrix-multiplication">3. Matrix Multiplication</h2>
                                                                <pre><code className="lang-python"><span className="hljs-comment"># A: (m, n)</span>
                                                                        <span className="hljs-comment"># B: (n, p)</span>
                                                                        <span className="hljs-attr">out</span> = np.einsum(<span className="hljs-string">'mn,np-&gt;mp'</span>, A, B)
                                                                </code></pre>
                                                                <p>Equivalent:</p>
                                                                <pre><code className="lang-python"><span className="hljs-attr">out</span> = A @ B
                                                                </code></pre>
                                                                <p>Formula:</p>
                                                                <p className="formula">{"\\[C_{mp} = \\sum_n A_{mn} B_{np}\\]"}</p>
                                                                <h2 id="4-transpose">4. Transpose</h2>
                                                                <pre><code className="lang-python"><span className="hljs-comment"># X: (m, n)</span>
                                                                        <span className="hljs-attr">out</span> = np.einsum(<span className="hljs-string">'mn-&gt;nm'</span>, X)
                                                                </code></pre>
                                                                <p>Equivalent:</p>
                                                                <pre><code className="lang-python"><span className="hljs-attr">out</span> = X.T
                                                                </code></pre>
                                                                <h2 id="5-sum-over-axes">5. Sum Over Axes</h2>
                                                                <pre><code className="lang-python"><span className="hljs-comment"># X: (m, n)</span>

                                                                        <span className="hljs-attr">col_sums</span> = np.einsum(<span className="hljs-string">'mn \\rightarrow n'</span>, X) <span className="hljs-attr">row_sums</span> = np.einsum(<span className="hljs-string">'mn \\rightarrow m'</span>, X) <span className="hljs-attr">total</span>    = np.einsum(<span className="hljs-string">'mn \\rightarrow '</span>, X) </code></pre>

                                                                <p>Equivalent:</p>
                                                                <pre><code className="lang-python"><span className="hljs-attr">col_sums</span> = X.sum(axis=<span className="hljs-number">0</span>)
                                                                        <span className="hljs-attr">row_sums</span> = X.sum(axis=<span className="hljs-number">1</span>)
                                                                        <span className="hljs-attr">total</span>    = X.sum()
                                                                </code></pre>
                                                                <h1 id="norms-and-similarities">Norms and Similarities</h1>
                                                                <h2 id="6-column-wise-squared-norms">6. Column-wise Squared Norms</h2>
                                                                <pre><code className="lang-python"><span className="hljs-comment"># X: (m, n)</span>
                                                                        <span className="hljs-attr">out</span> = np.einsum(<span className="hljs-string">'mn,mn-&gt;n'</span>, X, X)
                                                                </code></pre>
                                                                <p>Equivalent:</p>
                                                                <pre><code className="lang-python">np.sum(X**<span className="hljs-number">2</span>, axis=<span className="hljs-number">0</span>)
                                                                </code></pre>
                                                                <p>Formula:</p>
                                                                <p className="formula">{"\\[|X_{\\cdot n}|^2 = \\sum_m X_{mn}^2\\]"}</p>
                                                                <p>Also equal to:</p>
                                                                <p className="formula">{"\\[\\text{diag}(X^T X)\\]"}</p>
                                                                <h2 id="7-row-wise-squared-norms">7. Row-wise Squared Norms</h2>
                                                                <pre><code className="lang-python"><span className="hljs-comment"># X: (m, n)</span>
                                                                        <span className="hljs-attr">out</span> = np.einsum(<span className="hljs-string">'mn,mn-&gt;m'</span>, X, X)
                                                                </code></pre>
                                                                <p>Equivalent:</p>
                                                                <pre><code className="lang-python">np.sum(X**<span className="hljs-number">2</span>, axis=<span className="hljs-number">1</span>)
                                                                </code></pre>
                                                                <p>Formula:</p>
                                                                <p className="formula">{"\\[|X_{m\\cdot}|^2 = \\sum_n X_{mn}^2\\]"}</p>
                                                                <p>Also equal to:</p>
                                                                <p className="formula">{"\\[\\text{diag}(X X^T)\\]"}</p>
                                                                <h2 id="8-pairwise-row-dot-products-gram-matrix-">8. Pairwise Row Dot Products (Gram Matrix)</h2>
                                                                <pre><code className="lang-python"><span className="hljs-comment"># X: (m, d)</span>
                                                                        <span className="hljs-attr">out</span> = np.einsum(<span className="hljs-string">'md,nd-&gt;mn'</span>, X, X)
                                                                </code></pre>
                                                                <p>Equivalent:</p>
                                                                <pre><code className="lang-python"><span className="hljs-keyword">X</span> @ <span className="hljs-keyword">X</span>.T
                                                                </code></pre>
                                                                <p>Formula:</p>
                                                                <p className="formula">{"\\[G_{mn} = \\sum_d X_{md} X_{nd}\\]"}</p>
                                                                <h2 id="9-outer-product">9. Outer Product</h2>
                                                                <pre><code className="lang-python"><span className="hljs-comment"># x: (m,)</span>
                                                                        <span className="hljs-comment"># y: (n,)</span>
                                                                        <span className="hljs-attr">out</span> = np.einsum(<span className="hljs-string">'m,n-&gt;mn'</span>, x, y)
                                                                </code></pre>
                                                                <p>Equivalent:</p>
                                                                <pre><code className="lang-python">np.<span className="hljs-keyword">outer</span>(x, y)
                                                                </code></pre>
                                                                <p>Formula:</p>
                                                                <p className="formula">{"\\[M_{mn} = x_m y_n\\]"}</p>
                                                                <h1 id="batched-operations">Batched Operations</h1>
                                                                <h2 id="10-batch-matrix-multiplication">10. Batch Matrix Multiplication</h2>
                                                                <pre><code className="lang-python"><span className="hljs-comment"># A: (b, m, n)</span>
                                                                        <span className="hljs-comment"># B: (b, n, p)</span>

                                                                        <span className="hljs-attr">out</span> = np.einsum(<span className="hljs-string">'bmn,bnp \\rightarrow bmp'</span>, A, B) </code></pre>

                                                                <p>Equivalent:</p>
                                                                <pre><code className="lang-python"><span className="hljs-keyword">A</span> @ B
                                                                </code></pre>
                                                                <p>Formula:</p>
                                                                <p className="formula">{"\\[C_{bmp} = \\sum_n A_{bmn} B_{bnp}\\]"}</p>
                                                                <h2 id="11-batched-linear-layer">11. Batched Linear Layer</h2>
                                                                <pre><code className="lang-python"><span className="hljs-comment"># X: (b, t, d_in)</span>
                                                                        <span className="hljs-comment"># W: (d_in, d_out)</span>

                                                                        <span className="hljs-attr">out</span> = np.einsum(<span className="hljs-string">'btd,df \\rightarrow btf'</span>, X, W) </code></pre>

                                                                <p>Equivalent:</p>
                                                                <pre><code className="lang-python"><span className="hljs-attr">out</span> = X @ W
                                                                </code></pre>
                                                                <p>Formula:</p>
                                                                <p className="formula">{"\\[Y_{btf} = \\sum_d X_{btd} W_{df}\\]"}</p>
                                                                <h1 id="attention-operations">Attention Operations</h1>
                                                                <h2 id="12-attention-scores">12. Attention Scores</h2>
                                                                <pre><code className="lang-python"><span className="hljs-comment"># Q: (b, t, d)</span>
                                                                        <span className="hljs-comment"># K: (b, s, d)</span>

                                                                        <span className="hljs-attr">scores</span> = np.einsum(<span className="hljs-string">'btd,bsd \\rightarrow bts'</span>, Q, K) </code></pre>

                                                                <p>Equivalent:</p>
                                                                <pre><code className="lang-python">scores = Q @ K.transpose(<span className="hljs-number">0</span>,<span className="hljs-number">2</span>,<span className="hljs-number">1</span>)
                                                                </code></pre>
                                                                <p>Formula:</p>
                                                                <p className="formula">{"\\[S_{bts} = \\sum_d Q_{btd} K_{bsd}\\]"}</p>
                                                                <h2 id="13-attention-output">13. Attention Output</h2>
                                                                <pre><code className="lang-python"><span className="hljs-comment"># A: (b, t, s)</span>
                                                                        <span className="hljs-comment"># V: (b, s, d)</span>

                                                                        <span className="hljs-attr">out</span> = np.einsum(<span className="hljs-string">'bts,bsd \\rightarrow btd'</span>, A, V) </code></pre>

                                                                <p>Formula:</p>
                                                                <p className="formula">{"\\[O_{btd} = \\sum_s A_{bts} V_{bsd}\\]"}</p>
                                                                <h2 id="14-multi-head-attention-scores">14. Multi-Head Attention Scores</h2>
                                                                <pre><code className="lang-python"><span className="hljs-comment"># Q: (b, h, t, k)</span>
                                                                        <span className="hljs-comment"># K: (b, h, s, k)</span>

                                                                        <span className="hljs-attr">scores</span> = np.einsum(<span className="hljs-string">'bhtk,bhsk \\rightarrow bhts'</span>, Q, K) </code></pre>

                                                                <p>Formula:</p>
                                                                <p className="formula">{"\\[S_{bhts} = \\sum_k Q_{bhtk} K_{bhsk}\\]"}</p>
                                                                <h2 id="15-multi-head-attention-output">15. Multi-Head Attention Output</h2>
                                                                <pre><code className="lang-python"><span className="hljs-comment"># A: (b, h, t, s)</span>
                                                                        <span className="hljs-comment"># V: (b, h, s, k)</span>

                                                                        <span className="hljs-attr">out</span> = np.einsum(<span className="hljs-string">'bhts,bhsk \\rightarrow bhtk'</span>, A, V) </code></pre>

                                                                <p>Formula:</p>
                                                                <p className="formula">{"\\[O_{bhtk} = \\sum_s A_{bhts} V_{bhsk}\\]"}</p>
                                                                <h1 id="quick-pattern-reference">Quick Pattern Reference</h1>
                                                                <table>
                                                                        <thead>
                                                                                <tr>
                                                                                        <th>Operation</th>
                                                                                        <th>einsum pattern</th>
                                                                                </tr>
                                                                        </thead>
                                                                        <tbody>
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



                                                        </TileRowCell0>
                                                </Tab2>




                                        </Tabs>


                                </div>
                        </MathJaxContext>
                </>
        );
}
