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

        const html_1 = `
        <div dir="ltr">
        <div style="color:rgb(204,204,204);font-family:monospace;font-size:14px;line-height:18px;">
                <div><span style="color:rgb(197,134,192)">import</span> <span
                                style="color:rgb(78,201,176)">argparse</span></div>
                <div><span style="color:rgb(197,134,192)">import</span> <span style="color:rgb(78,201,176)">numpy</span>
                        <span style="color:rgb(197,134,192)">as</span> <span style="color:rgb(78,201,176)">np</span>
                </div>
                <div><span style="color:rgb(197,134,192)">import</span> <span style="color:rgb(78,201,176)">torch</span>
                </div>
                <div><span style="color:rgb(197,134,192)">import</span> <span
                                style="color:rgb(78,201,176)">torch</span>.<span style="color:rgb(78,201,176)">nn</span>
                        <span style="color:rgb(197,134,192)">as</span> <span style="color:rgb(78,201,176)">nn</span>
                </div>
                <div><span style="color:rgb(197,134,192)">from</span> <span style="color:rgb(78,201,176)">typing</span>
                        <span style="color:rgb(197,134,192)">import</span> <span
                                style="color:rgb(201,209,217)">List</span>, <span
                                style="color:rgb(78,201,176)">Tuple</span>
                </div>
                <div><span style="color:rgb(197,134,192)">from</span> <span style="color:rgb(78,201,176)">einops</span>
                        <span style="color:rgb(197,134,192)">import</span> <span
                                style="color:rgb(210,168,255)">reduce</span>, <span
                                style="color:rgb(210,168,255)">rearrange</span>, <span
                                style="color:rgb(210,168,255)">einsum</span>
                </div>
                <div><span style="color:rgb(197,134,192)">from</span> <span style="color:rgb(78,201,176)">util</span>
                        <span style="color:rgb(197,134,192)">import</span> <span
                                style="color:rgb(78,201,176)">Vocabulary</span>, <span
                                style="color:rgb(210,168,255)">read_tweet_data</span>
                </div><br>
                <div><span style="color:rgb(139,148,158)"># number of output prediction classes in problem 3 and
                                4</span></div>
                <div><span style="color:rgb(121,192,255)">K</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(181,206,168)">3</span></div><br>
                <div><span
                                style="color:rgb(139,148,158)">##############################<wbr>##############################</span>
                </div>
                <div><span style="color:rgb(139,148,158)"># Problem 3: NumPy linear classifier</span></div>
                <div><span
                                style="color:rgb(139,148,158)">##############################<wbr>##############################</span>
                </div><br>
                <div><span
                                style="color:rgb(139,148,158)">##############################<wbr>##############################</span>
                </div>
                <div><span style="color:rgb(139,148,158)"># Problem 3a: Build vocabulary</span></div><br>
                <div><span style="color:rgb(255,123,114)">def</span> <span
                                style="color:rgb(210,168,255)">build_vocabulary</span>(<span
                                style="color:rgb(255,166,87)">examples</span>: <span
                                style="color:rgb(201,209,217)">List</span>[<span
                                style="color:rgb(78,201,176)">str</span>]) -&gt; <span
                                style="color:rgb(78,201,176)">Vocabulary</span>:</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(165,214,255)">"""</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; Build vocabulary from examples using the
                                Vocabulary() class in util.py.</span></div><br>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @param examples: List of text strings</span>
                </div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @return: a Vocabulary() object</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; """</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">vocab</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">Vocabulary</span>()</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">for</span> <span
                                style="color:rgb(201,209,217)">s</span> <span style="color:rgb(197,134,192)">in</span>
                        <span style="color:rgb(255,166,87)">examples</span>:
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">words</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(201,209,217)">s</span>.<span
                                style="color:rgb(210,168,255)">lower</span>().<span
                                style="color:rgb(210,168,255)">split</span>()</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">for</span> <span
                                style="color:rgb(201,209,217)">w</span> <span style="color:rgb(197,134,192)">in</span>
                        <span style="color:rgb(201,209,217)">words</span>:
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">vocab</span>.<span
                                style="color:rgb(210,168,255)">add_word</span>(<span
                                style="color:rgb(201,209,217)">w</span>)</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(201,209,217)">vocab</span></div><br>
                <div><span style="color:rgb(201,209,217)">examples</span> <span style="color:rgb(212,212,212)">=</span>
                        [<span style="color:rgb(165,214,255)">"hello world"</span>, <span
                                style="color:rgb(165,214,255)">"hello python"</span>, <span
                                style="color:rgb(165,214,255)">"world peace"</span>, <span
                                style="color:rgb(165,214,255)">"hello there"</span>]</div>
                <div><span style="color:rgb(201,209,217)">vocab</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(210,168,255)">build_vocabulary</span>(<span
                                style="color:rgb(201,209,217)">examples</span>)
                </div><br><br>
                <div><span
                                style="color:rgb(139,148,158)">##############################<wbr>##############################</span>
                </div>
                <div><span style="color:rgb(139,148,158)"># Problem 3b: Text to features</span></div><br>
                <div><span style="color:rgb(255,123,114)">def</span> <span
                                style="color:rgb(210,168,255)">text_to_features</span>(<span
                                style="color:rgb(255,166,87)">text</span>, <span
                                style="color:rgb(255,166,87)">vocab</span>) -&gt; <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">ndarray</span>:</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(165,214,255)">"""</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; Convert a given text string to a sparse feature
                                representation.</span></div><br>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @param text: An input text string to be
                                converted to features</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @param vocab: A Vocabulary() object containing
                                the word-to-index mapping</span></div><br>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @return: A numpy array of shape (vocab.size(),)
                                where each element represents</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; the count of the corresponding
                                vocabulary word in the input text. Words not</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; in vocabulary are mapped to the
                                &lt;UNK&gt; token index.</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; """</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">features</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(201,209,217)">zeros</span>(<span
                                style="color:rgb(255,166,87)">vocab</span>.size())</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">words</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(255,166,87)">text</span>.lower().split()</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">for</span> <span
                                style="color:rgb(201,209,217)">w</span> <span style="color:rgb(197,134,192)">in</span>
                        <span style="color:rgb(201,209,217)">words</span>:
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">i</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(255,166,87)">vocab</span>.get_index(<span
                                style="color:rgb(201,209,217)">w</span>)</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">features</span>[<span
                                style="color:rgb(201,209,217)">i</span>] <span style="color:rgb(220,220,170)">+=</span>
                        <span style="color:rgb(181,206,168)">1</span>
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(201,209,217)">features</span></div><br>
                <div><span style="color:rgb(201,209,217)">text</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(165,214,255)">"hello world python unknown_word"</span>
                </div>
                <div><span style="color:rgb(201,209,217)">features</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(210,168,255)">text_to_features</span>(<span
                                style="color:rgb(201,209,217)">text</span>, <span
                                style="color:rgb(201,209,217)">vocab</span>)
                </div>
                <div><span style="color:rgb(210,168,255)">print</span>(<span
                                style="color:rgb(255,123,114)">f</span><span style="color:rgb(165,214,255)">"features:
                        </span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">features</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)">"</span>)
                </div><br><br>
                <div><span
                                style="color:rgb(139,148,158)">##############################<wbr>##############################</span>
                </div>
                <div><span style="color:rgb(139,148,158)"># Problem 3c: Numpy softmax</span></div><br>
                <div><span style="color:rgb(255,123,114)">def</span> <span
                                style="color:rgb(210,168,255)">numpy_softmax</span>(<span
                                style="color:rgb(255,166,87)">logits</span>: <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">ndarray</span>) -&gt; <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">ndarray</span>:</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(165,214,255)">"""</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; Use NumPy library functions to compute softmax
                                probabilities for a given batch of logits.</span></div><br>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; The softmax function converts a vector of real
                                numbers into a probability distribution.</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; Mathematical formula: softmax(x_i) = exp(x_i) /
                                sum(exp(x_j)) for all j</span></div><br>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; For numerical stability, we use the equivalent
                                formula:</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; softmax(x_i) = exp(x_i - max(x)) / sum(exp(x_j -
                                max(x)))</span></div><br>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @param logits: 2D array of shape (batch_size, k)
                                containing raw scores</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @return: A 2D array of shape (batch_size, k)
                                with softmax probabilities.</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Each row sums
                                to 1.0 and all values are in range [0, 1].</span></div><br>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; Example:</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; Input: &nbsp;[[2.0, 1.0, 0.1]]
                                &nbsp;(raw logits for 3 classes)</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; Output: [[0.659, 0.242, 0.099]]
                                &nbsp;(probabilities summing to 1.0)</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; """</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(255,166,87)">logits</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(255,166,87)">logits</span> <span
                                style="color:rgb(220,220,170)">-</span> <span
                                style="color:rgb(210,168,255)">reduce</span>(<span
                                style="color:rgb(255,166,87)">logits</span>, <span style="color:rgb(165,214,255)">"batch
                                class -&gt; batch 1"</span>, <span style="color:rgb(165,214,255)">"max"</span>)</div>
                <br>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Step 1: Stabilize by subtracting max (prevents
                                overflow)</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># idea: Subtracting any constant c (here, the
                                max) doesn't change the softmax output mathematically, </span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># but ensures all exponents are ≤ 0, keeping
                                values in a safe numerical range.</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)">#</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># logits = logits - reduce(logits, "batch class
                                -&gt; batch 1", "max") # already done above</span></div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Step 2: Exponentiate</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">exp_logits</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(201,209,217)">exp</span>(<span
                                style="color:rgb(255,166,87)">logits</span>)</div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Step 3: Divide by sum across classes</span>
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(201,209,217)">exp_logits</span> <span
                                style="color:rgb(220,220,170)">/</span> <span
                                style="color:rgb(210,168,255)">reduce</span>(<span
                                style="color:rgb(201,209,217)">exp_logits</span>, <span
                                style="color:rgb(165,214,255)">"batch class -&gt; batch 1"</span>, <span
                                style="color:rgb(165,214,255)">"sum"</span>)</div><br><br>
                <div><span
                                style="color:rgb(139,148,158)">##############################<wbr>##############################</span>
                </div>
                <div><span style="color:rgb(139,148,158)"># Problem 3d: NumPy cross entropy loss</span></div><br>
                <div><span style="color:rgb(255,123,114)">def</span> <span
                                style="color:rgb(210,168,255)">numpy_cross_entropy_loss</span>(<span
                                style="color:rgb(255,166,87)">predi<wbr>ctions</span>: <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">ndarray</span>,</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp;<span style="color:rgb(255,166,87)">targets</span>: <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">ndarray</span>,</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp;<span style="color:rgb(255,166,87)">epsilon</span>: <span
                                style="color:rgb(78,201,176)">float</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(181,206,168)">1e-15</span>) -&gt; <span
                                style="color:rgb(78,201,176)">float</span>:
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(165,214,255)">"""</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; Use NumPy library functions to compute
                                cross-entropy loss between predictions and one-hot targets.</span></div><br>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @param predictions: softmax probabilities in a
                                2D array of shape (batch_size, K)</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @param targets: one-hot encoded labels in a 2D
                                array of shape (batch_size, K)</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @param epsilon: A small number to add to
                                predictions before taking the logarithm,</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; to prevent undefined behavior when
                                taking log(0)</span></div><br>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @return: Average cross-entropy loss (scalar
                                value)</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; """</span></div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Step 1: Clip predictions to [epsilon, 1] -&gt;
                                if a value is less than epsilon, it will be set to epsilon (to avoid log(0)). </span>
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># if a value is greater than 1, it will be set
                                to 1 (to avoid rounding errors). A probability should not be larger than 1. </span>
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># a numerical stability guard since these values
                                will be used to compute log(x)</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(255,166,87)">predictions</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(210,168,255)">clip</span>(<span
                                style="color:rgb(255,166,87)">predictions</span>, <span
                                style="color:rgb(255,166,87)">epsilon</span>, <span
                                style="color:rgb(181,206,168)">1.0</span>)</div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Step 2: Compute per-sample loss: -sum(y *
                                log(p)) across classes</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">per_sample_loss</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(212,212,212)">-</span><span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(210,168,255)">sum</span>(<span
                                style="color:rgb(255,166,87)">targets</span> <span
                                style="color:rgb(220,220,170)">*</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(201,209,217)">log</span>(<span
                                style="color:rgb(255,166,87)">predictions</span>), <span
                                style="color:rgb(255,166,87)">axis</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">1</span>)
                        <span style="color:rgb(139,148,158)"># axis=1; Sums over classes (K), keeping the batch
                                dimension intact</span>
                </div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Step 3: Return average loss across the
                                batch</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(210,168,255)">mean</span>(<span
                                style="color:rgb(201,209,217)">per_sample_loss</span>)</div><br><br>
                <div><span
                                style="color:rgb(139,148,158)">##############################<wbr>##############################</span>
                </div>
                <div><span style="color:rgb(139,148,158)"># Problem 3e: NumPy compute gradients</span></div><br>
                <div><span style="color:rgb(255,123,114)">def</span> <span
                                style="color:rgb(210,168,255)">numpy_compute_gradients</span>(<span
                                style="color:rgb(255,166,87)">featur<wbr>es</span>: <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">ndarray</span>, <span
                                style="color:rgb(255,166,87)">predictions</span>: <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">ndarray</span>,</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <span style="color:rgb(255,166,87)">targets</span>: <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">ndarray</span>) -&gt; <span
                                style="color:rgb(78,201,176)">Tuple</span>[<span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">ndarray</span>, <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">ndarray</span>]:
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(165,214,255)">"""</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; Compute gradients (the partial derivatives of
                                the cross-entropy loss)</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; for the weights and bias using batch gradient
                                descent. Batch gradient descent</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; averages gradients across all examples in the
                                batch,</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; providing a more stable estimate than
                                single-example gradients.</span></div><br>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @param features: 2D array of shape (batch_size,
                                num_features) - input features</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @param predictions: 2D array of shape
                                (batch_size, K) - softmax probabilities</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @param targets: 2D array of shape (batch_size,
                                K) - one-hot encoded labels</span></div><br>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @return: A tuple of (grad_weights,
                                grad_bias)</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; - grad_weights: shape
                                (num_features, K) - gradients w.r.t. weights</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; - grad_bias: shape (1, K) -
                                gradients w.r.t. bias</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; """</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">batch_size</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(255,166,87)">features</span>.<span
                                style="color:rgb(201,209,217)">shape</span>[<span
                                style="color:rgb(181,206,168)">0</span>]</div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Step 1: Error signal — gradient of loss w.r.t.
                                logits (from derivation: p - y)</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Shape: (batch_size, K)</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">error</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(255,166,87)">predictions</span> <span
                                style="color:rgb(220,220,170)">-</span> <span
                                style="color:rgb(255,166,87)">targets</span></div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Step 2: Gradient w.r.t. weights — features.T @
                                error, averaged over batch</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># (num_features, batch_size) @ (batch_size, K) →
                                (num_features, K)</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">grad_weights</span> <span
                                style="color:rgb(212,212,212)">=</span> (<span
                                style="color:rgb(255,166,87)">features</span>.<span
                                style="color:rgb(201,209,217)">T</span> <span style="color:rgb(220,220,170)">@</span>
                        <span style="color:rgb(201,209,217)">error</span>) <span style="color:rgb(220,220,170)">/</span>
                        <span style="color:rgb(201,209,217)">batch_size</span>
                </div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Step 3: Gradient w.r.t. bias — average error
                                across batch</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Shape: (1, K)</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">grad_bias</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(210,168,255)">mean</span>(<span
                                style="color:rgb(201,209,217)">error</span>, <span
                                style="color:rgb(255,166,87)">axis</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">0</span>,
                        <span style="color:rgb(255,166,87)">keepdims</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(86,156,214)">True</span>)
                </div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(201,209,217)">grad_weights</span>, <span
                                style="color:rgb(201,209,217)">grad_bias</span></div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Key insight: The gradient is simply the
                                weighted average of the input features, scaled by </span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># how wrong the model was ($p - y$) for each
                                class. If the model is perfectly correct, </span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># $p = y$ and all gradients vanish to zero — no
                                update needed!</span></div><br><br>
                <div><span
                                style="color:rgb(139,148,158)">##############################<wbr>##############################</span>
                </div>
                <div><span style="color:rgb(139,148,158)"># Problem 3f: Linear classifier predictor</span></div><br>
                <div><span style="color:rgb(255,123,114)">def</span> <span
                                style="color:rgb(210,168,255)">predict_linear_classifier</span>(<span
                                style="color:rgb(255,166,87)">feat<wbr>ures</span>: <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">ndarray</span>, <span
                                style="color:rgb(255,166,87)">labels</span>: <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">ndarray</span>, <span
                                style="color:rgb(255,166,87)">weights</span>: <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">ndarray</span>,</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; <span style="color:rgb(255,166,87)">bias</span>: <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">ndarray</span>) -&gt; <span
                                style="color:rgb(78,201,176)">float</span>:</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(165,214,255)">"""</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; Make predictions using the trained linear
                                classifier weights and bias and compute the accuracy</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; of the predictions by comparing them to the true
                                labels.</span></div><br>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @param features: NumPy array of features of
                                dimensions (num_examples, num_features)</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @param labels: NumPy array of true labels of
                                dimensions (num_examples, K) in one-hot format</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @param weights: Trained weights of shape
                                (num_features, K)</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @param bias: Trained bias of shape (1, K)</span>
                </div><br>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @return: Accuracy as a float</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; """</span></div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Step 1: Compute logits</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># (num_examples, num_features) @ (num_features,
                                K) + (1, K) → (num_examples, K)</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">logits</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(255,166,87)">features</span> <span
                                style="color:rgb(220,220,170)">@</span> <span
                                style="color:rgb(255,166,87)">weights</span> <span
                                style="color:rgb(220,220,170)">+</span> <span style="color:rgb(255,166,87)">bias</span>
                </div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Step 2: Apply softmax to get class
                                probabilities</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">predictions</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(210,168,255)">numpy_softmax</span>(<span
                                style="color:rgb(201,209,217)">logits</span>)</div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Step 3: Get predicted class index (highest
                                probability)</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Shape: (num_examples,)</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Key point: np.argmax(..., axis=1) collapses
                                the class dimension — picking the index of </span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># the highest value per example. For one-hot
                                labels, this recovers the true class index; </span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># for softmax outputs, this picks the most
                                confident predicted class.</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">predicted_classes</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(210,168,255)">argmax</span>(<span
                                style="color:rgb(201,209,217)">predictions</span>, <span
                                style="color:rgb(255,166,87)">axis</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">1</span>)
                </div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Step 4: Get true class index from one-hot
                                labels</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Shape: (num_examples,)</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">true_classes</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(210,168,255)">argmax</span>(<span
                                style="color:rgb(255,166,87)">labels</span>, <span
                                style="color:rgb(255,166,87)">axis</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">1</span>)
                </div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Step 5: Compute accuracy — fraction of correct
                                predictions</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">accuracy</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(210,168,255)">mean</span>(<span
                                style="color:rgb(201,209,217)">predicted_classes</span> <span
                                style="color:rgb(212,212,212)">==</span> <span
                                style="color:rgb(201,209,217)">true_classes</span>)</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(78,201,176)">float</span>(<span
                                style="color:rgb(201,209,217)">accuracy</span>)</div><br>
                <div><span style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">random</span>.<span
                                style="color:rgb(201,209,217)">seed</span>(<span
                                style="color:rgb(181,206,168)">42</span>)</div>
                <div><span style="color:rgb(201,209,217)">batch_size</span> <span
                                style="color:rgb(212,212,212)">=</span> <span style="color:rgb(181,206,168)">6</span>
                </div>
                <div><span style="color:rgb(201,209,217)">num_features</span> <span
                                style="color:rgb(212,212,212)">=</span> <span style="color:rgb(181,206,168)">10</span>
                </div>
                <div><span style="color:rgb(201,209,217)">num_classes</span> <span
                                style="color:rgb(212,212,212)">=</span> <span style="color:rgb(181,206,168)">3</span>
                </div><br>
                <div><span style="color:rgb(201,209,217)">test_features</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">random</span>.<span
                                style="color:rgb(201,209,217)">randn</span>(<span
                                style="color:rgb(201,209,217)">batch_size</span>, <span
                                style="color:rgb(201,209,217)">num_features</span>)</div>
                <div><span style="color:rgb(201,209,217)">test_labels</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(210,168,255)">eye</span>(<span
                                style="color:rgb(201,209,217)">num_classes</span>).<span
                                style="color:rgb(210,168,255)">repeat</span>(<span
                                style="color:rgb(201,209,217)">bat<wbr>ch_size</span> <span
                                style="color:rgb(212,212,212)">//</span> <span
                                style="color:rgb(201,209,217)">num_classes</span>, <span
                                style="color:rgb(255,166,87)">axis</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">0</span>)
                </div><br>
                <div><span style="color:rgb(201,209,217)">weights</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">random</span>.<span
                                style="color:rgb(201,209,217)">randn</span>(<span
                                style="color:rgb(201,209,217)">num_features</span>, <span
                                style="color:rgb(201,209,217)">num_classes</span>)
                </div>
                <div><span style="color:rgb(201,209,217)">bias</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(201,209,217)">zeros</span>((<span
                                style="color:rgb(181,206,168)">1</span>, <span
                                style="color:rgb(201,209,217)">num_classes</span>))
                </div><br>
                <div><span style="color:rgb(201,209,217)">accuracy</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(210,168,255)">predict_linear_classifier</span>(<span
                                style="color:rgb(201,209,217)">test<wbr>_features</span>, <span
                                style="color:rgb(201,209,217)">test_labels</span>, <span
                                style="color:rgb(201,209,217)">weights</span>, <span
                                style="color:rgb(201,209,217)">bias</span>)
                </div>
                <div><span style="color:rgb(210,168,255)">print</span>(<span
                                style="color:rgb(255,123,114)">f</span><span style="color:rgb(165,214,255)">"accuracy:
                        </span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">accuracy</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)">"</span>)
                </div><br><br>
                <div><span
                                style="color:rgb(139,148,158)">##############################<wbr>##############################</span>
                </div>
                <div><span style="color:rgb(139,148,158)"># Problem 3g: Train linear classifier</span></div><br>
                <div><span style="color:rgb(255,123,114)">def</span> <span
                                style="color:rgb(210,168,255)">train_linear_classifier</span>(<span
                                style="color:rgb(255,166,87)">train_<wbr>features</span>: <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">ndarray</span>, <span
                                style="color:rgb(255,166,87)">train_labels</span>: <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">ndarray</span>,</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(255,166,87)">val_features</span>: <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">ndarray</span>, <span
                                style="color:rgb(255,166,87)">val_labels</span>: <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">ndarray</span>,</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(255,166,87)">num_epochs</span>: <span
                                style="color:rgb(78,201,176)">int</span>, <span style="color:rgb(255,166,87)">lr</span>:
                        <span style="color:rgb(78,201,176)">float</span>) -&gt; <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">ndarray</span>:
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(165,214,255)">"""</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; Train a linear classifier using NumPy arrays and
                                full-batch gradient descent.</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; At the end of each epoch, call your predictor
                                function to evaluate your trained parameters</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; on the validation data and print out training
                                loss and validation accuracy.</span></div><br>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @param train_features: NumPy array of training
                                features of dimensions (num_train_examples, num_features)</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @param train_labels: NumPy array of training
                                labels of dimensions (num_train_examples, K)</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @param val_features: NumPy array of validation
                                features of dimensions (num_val_examples, num_features)</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @param val_labels: NumPy array of validation
                                labels of dimensions (num_val_examples, K)</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @param num_epochs: number of training
                                epochs</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @param lr: learning rate</span></div><br>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @return: Trained weights in a NumPy array of
                                shape (num_features, K), and bias of shape (1, K)</span></div><br>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; You should use the numpy_softmax,
                                numpy_cross_entropy_loss, numpy_compute_gradients,</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; and predict_linear_classifier functions you
                                implemented.</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; """</span></div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">num_train_examples</span>, <span
                                style="color:rgb(201,209,217)">num_features</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(255,166,87)">train_features</span>.<span
                                style="color:rgb(201,209,217)">shape</span></div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Initialize weights randomly, bias as
                                zeros</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># np.random.randn for weights: Breaks symmetry —
                                if all weights start at 0, all neurons compute identical gradients and learn the same
                                thing</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">weights</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">random</span>.<span
                                style="color:rgb(201,209,217)">randn</span>(<span
                                style="color:rgb(201,209,217)">num_features</span>, <span
                                style="color:rgb(121,192,255)">K</span>)</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># np.zeros for bias: Bias symmetry breaking is
                                not required since weights handle it</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">bias</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(201,209,217)">zeros</span>((<span
                                style="color:rgb(181,206,168)">1</span>, <span style="color:rgb(121,192,255)">K</span>))
                </div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">for</span> <span
                                style="color:rgb(201,209,217)">epoch</span> <span
                                style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(78,201,176)">range</span>(<span
                                style="color:rgb(255,166,87)">num_epochs</span>):</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># step 1: Forward Pass </span>
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Compute logits: (num_train,
                                num_features) @ (num_features, K) → (num_train, K)</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Train only on train_features:
                                Validation data must stay unseen during training to give an unbiased accuracy
                                estimate</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">logits</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(255,166,87)">train_features</span> <span
                                style="color:rgb(220,220,170)">@</span> <span
                                style="color:rgb(201,209,217)">weights</span> <span
                                style="color:rgb(220,220,170)">+</span> <span style="color:rgb(201,209,217)">bias</span>
                </div><br>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># step 2: Compute softmax
                                probabilities</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">predictions</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(210,168,255)">numpy_softmax</span>(<span
                                style="color:rgb(201,209,217)">logits</span>)</div><br>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># step 3: calculate Loss </span>
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">loss</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(210,168,255)">numpy_cross_entropy_loss</span>(<span
                                style="color:rgb(201,209,217)">predi<wbr>ctions</span>, <span
                                style="color:rgb(255,166,87)">train_labels</span>)</div><br>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># step 4: Backward Pass </span>
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Full-batch gradients: Averages
                                over all training examples each epoch for a stable gradient estimate</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">grad_weights</span>, <span
                                style="color:rgb(201,209,217)">grad_bias</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(210,168,255)">numpy_compute_gradients</span>(<span
                                style="color:rgb(255,166,87)">train_<wbr>features</span>, <span
                                style="color:rgb(201,209,217)">predictions</span>, <span
                                style="color:rgb(255,166,87)">train_labels</span>)</div><br>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># step 5: Parameter Update
                                (Gradient Descent)</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">weights</span> <span
                                style="color:rgb(220,220,170)">-=</span> <span style="color:rgb(255,166,87)">lr</span>
                        <span style="color:rgb(212,212,212)">*</span> <span
                                style="color:rgb(201,209,217)">grad_weights</span>
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">bias</span> &nbsp; &nbsp;<span
                                style="color:rgb(220,220,170)">-=</span> <span style="color:rgb(255,166,87)">lr</span>
                        <span style="color:rgb(212,212,212)">*</span> <span
                                style="color:rgb(201,209,217)">grad_bias</span>
                </div><br>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># step 6: Epoch Logging </span>
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Validate after update: Gives a
                                true picture of the model's current state at the end of each epoch</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">val_accuracy</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(210,168,255)">predict_linear_classifier</span>(<span
                                style="color:rgb(255,166,87)">val_<wbr>features</span>, <span
                                style="color:rgb(255,166,87)">val_labels</span>, <span
                                style="color:rgb(201,209,217)">weights</span>, <span
                                style="color:rgb(201,209,217)">bias</span>)</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(210,168,255)">print</span>(<span
                                style="color:rgb(255,123,114)">f</span><span style="color:rgb(165,214,255)">"Epoch
                        </span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">epoch</span> <span
                                style="color:rgb(212,212,212)">+</span> <span
                                style="color:rgb(181,206,168)">1</span><span
                                style="color:rgb(255,123,114)">:&gt;4}</span><span
                                style="color:rgb(165,214,255)">/</span><span
                                style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(255,166,87)">num_epochs</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)"> | Loss:
                        </span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">loss</span><span
                                style="color:rgb(255,123,114)">:.4f}</span><span style="color:rgb(165,214,255)"> | Val
                                Accuracy: </span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">val_accuracy</span><span
                                style="color:rgb(255,123,114)">:.4f}</span><span
                                style="color:rgb(165,214,255)">"</span>)</div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(201,209,217)">weights</span>, <span
                                style="color:rgb(201,209,217)">bias</span></div><br>
                <div><span style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">random</span>.<span
                                style="color:rgb(201,209,217)">seed</span>(<span
                                style="color:rgb(181,206,168)">42</span>)</div>
                <div><span style="color:rgb(201,209,217)">batch_size</span> <span
                                style="color:rgb(212,212,212)">=</span> <span style="color:rgb(181,206,168)">6</span>
                </div>
                <div><span style="color:rgb(201,209,217)">num_features</span> <span
                                style="color:rgb(212,212,212)">=</span> <span style="color:rgb(181,206,168)">10</span>
                </div>
                <div><span style="color:rgb(201,209,217)">num_classes</span> <span
                                style="color:rgb(212,212,212)">=</span> <span style="color:rgb(181,206,168)">3</span>
                </div><br>
                <div><span style="color:rgb(201,209,217)">train_features</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">random</span>.<span
                                style="color:rgb(201,209,217)">randn</span>(<span
                                style="color:rgb(201,209,217)">batch_size</span>, <span
                                style="color:rgb(201,209,217)">num_features</span>)</div>
                <div><span style="color:rgb(201,209,217)">train_labels</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(210,168,255)">eye</span>(<span
                                style="color:rgb(201,209,217)">num_classes</span>).<span
                                style="color:rgb(210,168,255)">repeat</span>(<span
                                style="color:rgb(201,209,217)">bat<wbr>ch_size</span> <span
                                style="color:rgb(212,212,212)">//</span> <span
                                style="color:rgb(201,209,217)">num_classes</span>, <span
                                style="color:rgb(255,166,87)">axis</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">0</span>)
                </div>
                <div><span style="color:rgb(201,209,217)">val_features</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">random</span>.<span
                                style="color:rgb(201,209,217)">randn</span>(<span
                                style="color:rgb(181,206,168)">3</span>, <span
                                style="color:rgb(201,209,217)">num_features</span>)</div>
                <div><span style="color:rgb(201,209,217)">val_labels</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(210,168,255)">eye</span>(<span
                                style="color:rgb(201,209,217)">num_classes</span>)</div><br>
                <div><span style="color:rgb(201,209,217)">weights</span>, <span
                                style="color:rgb(201,209,217)">bias</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(210,168,255)">train_linear_classifier</span>(
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">train_features</span>, <span
                                style="color:rgb(201,209,217)">train_labels</span>, <span
                                style="color:rgb(201,209,217)">val_features</span>, <span
                                style="color:rgb(201,209,217)">val_labels</span>,</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(255,166,87)">num_epochs</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">100</span>,
                        <span style="color:rgb(255,166,87)">lr</span><span style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(181,206,168)">1.0</span>
                </div>
                <div>)</div>
                <div><span style="color:rgb(165,214,255)">'''</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp;┌────────────────────────────<wbr>──────────────────────┐</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;│ &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp;Training Loop (each epoch) &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp;│</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;│ &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;│</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;│ &nbsp;features ──► @
                                weights + bias &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; │</span>
                </div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;│ &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;│ &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; │</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;│ &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; [logits] &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; │</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;│ &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;│ &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; │</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;│ &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; numpy_softmax() &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp;│</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;│ &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;│ &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; │</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;│ &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; [predictions] &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;│</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;│ &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; / &nbsp; &nbsp;\ &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; │</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;│ &nbsp;cross_entropy_loss
                                &nbsp;compute_gradients() &nbsp; &nbsp; &nbsp; &nbsp; │</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;│ &nbsp; &nbsp; &nbsp;
                                &nbsp;│ &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; │ &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; │</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;│ &nbsp; &nbsp; [loss]
                                &nbsp; &nbsp; &nbsp; &nbsp; [grad_W, grad_b] &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp;│</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;│ &nbsp; &nbsp; &nbsp;
                                &nbsp;│ &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; │ &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; │</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;│ &nbsp; &nbsp; print()
                                &nbsp; &nbsp; &nbsp; weights -= lr * grad_W &nbsp; &nbsp; &nbsp; &nbsp; │</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;│ &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; bias &nbsp; &nbsp;-= lr * grad_b &nbsp; &nbsp;
                                &nbsp; &nbsp; │</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;│ &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;│</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;│
                                &nbsp;predict_linear_classifier() → val accuracy &nbsp; &nbsp; &nbsp;│</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;│ &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;│ &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; │</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;│ &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; print() &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;│</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp;└────────────────────────────<wbr>──────────────────────┘</span></div>
                <div><span style="color:rgb(165,214,255)">'''</span></div>
                <div class="yj6qo"></div>
                <div class="adL"><br></div>
        </div>
</div>
        `

        const html_2 = `
        <div dir="ltr">
        <div style="color:rgb(204,204,204);font-family:monospace;font-size:14px;line-height:18px;">
                <span class="im">
                        <div><span style="color:rgb(197,134,192)">import</span> <span
                                        style="color:rgb(78,201,176)">argparse</span></div>
                        <div><span style="color:rgb(197,134,192)">import</span> <span
                                        style="color:rgb(78,201,176)">numpy</span> <span
                                        style="color:rgb(197,134,192)">as</span> <span
                                        style="color:rgb(78,201,176)">np</span></div>
                        <div><span style="color:rgb(197,134,192)">import</span> <span
                                        style="color:rgb(78,201,176)">torch</span></div>
                        <div><span style="color:rgb(197,134,192)">import</span> <span
                                        style="color:rgb(78,201,176)">torch</span>.<span
                                        style="color:rgb(78,201,176)">nn</span> <span
                                        style="color:rgb(197,134,192)">as</span> <span
                                        style="color:rgb(78,201,176)">nn</span></div>
                        <div><span style="color:rgb(197,134,192)">from</span> <span
                                        style="color:rgb(78,201,176)">typing</span> <span
                                        style="color:rgb(197,134,192)">import</span> <span
                                        style="color:rgb(201,209,217)">List</span>, <span
                                        style="color:rgb(78,201,176)">Tuple</span></div>
                        <div><span style="color:rgb(197,134,192)">from</span> <span
                                        style="color:rgb(78,201,176)">einops</span> <span
                                        style="color:rgb(197,134,192)">import</span> <span
                                        style="color:rgb(210,168,255)">reduce</span>, <span
                                        style="color:rgb(210,168,255)">rearrange</span>, <span
                                        style="color:rgb(210,168,255)">einsum</span></div>
                        <div><span style="color:rgb(197,134,192)">from</span> <span
                                        style="color:rgb(78,201,176)">util</span> <span
                                        style="color:rgb(197,134,192)">import</span> <span
                                        style="color:rgb(78,201,176)">Vocabulary</span>, <span
                                        style="color:rgb(210,168,255)">read_tweet_data</span></div><br>
                        <div><span style="color:rgb(139,148,158)"># number of output prediction classes in problem 3 and
                                        4</span></div>
                        <div><span style="color:rgb(121,192,255)">K</span> <span style="color:rgb(212,212,212)">=</span>
                                <span style="color:rgb(181,206,168)">3</span>
                        </div><br>
                        <div><span
                                        style="color:rgb(139,148,158)">##############################<wbr>##############################</span>
                        </div>
                </span>
                <div><span style="color:rgb(139,148,158)"># reuse functions from problem 3</span></div><span
                        class="im"><br>
                        <div><span style="color:rgb(255,123,114)">def</span> <span
                                        style="color:rgb(210,168,255)">build_vocabulary</span>(<span
                                        style="color:rgb(255,166,87)">examples</span>: <span
                                        style="color:rgb(201,209,217)">List</span>[<span
                                        style="color:rgb(78,201,176)">str</span>]) -&gt; <span
                                        style="color:rgb(78,201,176)">Vocabulary</span>:</div>
                        <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">vocab</span> <span
                                        style="color:rgb(212,212,212)">=</span> <span
                                        style="color:rgb(78,201,176)">Vocabulary</span>()</div>
                        <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">for</span> <span
                                        style="color:rgb(201,209,217)">s</span> <span
                                        style="color:rgb(197,134,192)">in</span> <span
                                        style="color:rgb(255,166,87)">examples</span>:</div>
                        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">words</span> <span
                                        style="color:rgb(212,212,212)">=</span> <span
                                        style="color:rgb(201,209,217)">s</span>.<span
                                        style="color:rgb(210,168,255)">lower</span>().<span
                                        style="color:rgb(210,168,255)">split</span>()</div>
                        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">for</span> <span
                                        style="color:rgb(201,209,217)">w</span> <span
                                        style="color:rgb(197,134,192)">in</span> <span
                                        style="color:rgb(201,209,217)">words</span>:</div>
                        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                        style="color:rgb(201,209,217)">vocab</span>.<span
                                        style="color:rgb(210,168,255)">add_word</span>(<span
                                        style="color:rgb(201,209,217)">w</span>)</div>
                        <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                        style="color:rgb(201,209,217)">vocab</span></div><br>
                        <div><span style="color:rgb(255,123,114)">def</span> <span
                                        style="color:rgb(210,168,255)">text_to_features</span>(<span
                                        style="color:rgb(255,166,87)">text</span>, <span
                                        style="color:rgb(255,166,87)">vocab</span>) -&gt; <span
                                        style="color:rgb(78,201,176)">np</span>.<span
                                        style="color:rgb(78,201,176)">ndarray</span>:</div>
                        <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">features</span> <span
                                        style="color:rgb(212,212,212)">=</span> <span
                                        style="color:rgb(78,201,176)">np</span>.<span
                                        style="color:rgb(201,209,217)">zeros</span>(<span
                                        style="color:rgb(255,166,87)">vocab</span>.size())</div>
                        <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">words</span> <span
                                        style="color:rgb(212,212,212)">=</span> <span
                                        style="color:rgb(255,166,87)">text</span>.lower().split()</div>
                        <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">for</span> <span
                                        style="color:rgb(201,209,217)">w</span> <span
                                        style="color:rgb(197,134,192)">in</span> <span
                                        style="color:rgb(201,209,217)">words</span>:</div>
                        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">i</span> <span
                                        style="color:rgb(212,212,212)">=</span> <span
                                        style="color:rgb(255,166,87)">vocab</span>.get_index(<span
                                        style="color:rgb(201,209,217)">w</span>)</div>
                        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">features</span>[<span
                                        style="color:rgb(201,209,217)">i</span>] <span
                                        style="color:rgb(220,220,170)">+=</span> <span
                                        style="color:rgb(181,206,168)">1</span></div>
                        <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                        style="color:rgb(201,209,217)">features</span></div><br><br>
                </span>
                <div><span
                                style="color:rgb(139,148,158)">##############################<wbr>##############################</span>
                </div>
                <div><span style="color:rgb(139,148,158)"># Problem 4: Multilayer Perceptron (MLP) with
                                embeddings</span></div>
                <div><span
                                style="color:rgb(139,148,158)">##############################<wbr>##############################</span>
                </div><br>
                <div><span
                                style="color:rgb(139,148,158)">##############################<wbr>##############################</span>
                </div>
                <div><span style="color:rgb(139,148,158)"># Problem 4a: Text to average embedding</span></div><br>
                <div><span style="color:rgb(255,123,114)">def</span> <span
                                style="color:rgb(210,168,255)">text_to_average_embedding</span>(<span
                                style="color:rgb(255,166,87)">text</span><wbr>: <span
                                style="color:rgb(78,201,176)">str</span>, <span
                                style="color:rgb(255,166,87)">vocab</span>: <span
                                style="color:rgb(78,201,176)">Vocabulary</span>,</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; <span style="color:rgb(255,166,87)">embedding_layer</span>: <span
                                style="color:rgb(78,201,176)">nn</span>.<span
                                style="color:rgb(78,201,176)">Embedding</span>) -&gt; <span
                                style="color:rgb(78,201,176)">torch</span>.<span
                                style="color:rgb(78,201,176)">Tensor</span>:</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(165,214,255)">"""</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; Convert text to an averaged embedding vector
                                using learnable embeddings.</span></div><br>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @param text: Input text string</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @param vocab: Vocabulary object</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @param embedding_layer: PyTorch embedding
                                layer</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @return: A single tensor representing the
                                averaged embedding</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; """</span></div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Step 1: Tokenize and convert words to
                                vocabulary indices</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">words</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(255,166,87)">text</span>.<span
                                style="color:rgb(210,168,255)">lower</span>().<span
                                style="color:rgb(210,168,255)">split</span>()</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">indices</span> <span
                                style="color:rgb(212,212,212)">=</span> [<span
                                style="color:rgb(255,166,87)">vocab</span>.<span
                                style="color:rgb(210,168,255)">get_index</span>(<span
                                style="color:rgb(201,209,217)">w</span>) <span style="color:rgb(197,134,192)">for</span>
                        <span style="color:rgb(201,209,217)">w</span> <span style="color:rgb(197,134,192)">in</span>
                        <span style="color:rgb(201,209,217)">words</span>]
                </div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Step 2: Create a long tensor of indices
                                (shape: [num_words])</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">indices_tensor</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">torch</span>.<span
                                style="color:rgb(210,168,255)">tensor</span>(<span
                                style="color:rgb(201,209,217)">indices</span>, <span
                                style="color:rgb(255,166,87)">dtype</span><span
                                style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(78,201,176)">torch</span>.<span
                                style="color:rgb(201,209,217)">long</span>)</div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Step 3: Look up embeddings (shape: [num_words,
                                embedding_dim])</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">embeddings</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(255,166,87)">embedding_layer</span>(<span
                                style="color:rgb(201,209,217)">indices_tensor</span><wbr>)</div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Step 4: Average across the word dimension →
                                (embedding_dim,)</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">averaged</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(210,168,255)">reduce</span>(<span
                                style="color:rgb(201,209,217)">embeddings</span>, <span
                                style="color:rgb(165,214,255)">"words embedding_dim -&gt; embedding_dim"</span>, <span
                                style="color:rgb(165,214,255)">"mean"</span>)</div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(201,209,217)">averaged</span></div><br>
                <div><span style="color:rgb(201,209,217)">examples</span> <span style="color:rgb(212,212,212)">=</span>
                        [<span style="color:rgb(165,214,255)">"hello world test"</span>, <span
                                style="color:rgb(165,214,255)">"hello test"</span>]</div>
                <div><span style="color:rgb(201,209,217)">vocab</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(210,168,255)">build_vocabulary</span>(<span
                                style="color:rgb(201,209,217)">examples</span>)
                </div><br>
                <div><span style="color:rgb(201,209,217)">embedding_dim</span> <span
                                style="color:rgb(212,212,212)">=</span> <span style="color:rgb(181,206,168)">8</span>
                </div>
                <div><span style="color:rgb(201,209,217)">embedding_layer</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">nn</span>.<span
                                style="color:rgb(78,201,176)">Embedding</span>(<span
                                style="color:rgb(201,209,217)">vocab</span>.<span
                                style="color:rgb(210,168,255)">size</span>(), <span
                                style="color:rgb(201,209,217)">embedding_dim</span>, <span
                                style="color:rgb(255,166,87)">padding_idx</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">0</span>)
                </div><br>
                <div><span style="color:rgb(201,209,217)">text</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(165,214,255)">"hello world"</span>
                </div>
                <div><span style="color:rgb(201,209,217)">result</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(210,168,255)">text_to_average_embedding</span>(<span
                                style="color:rgb(201,209,217)">text</span><wbr>, <span
                                style="color:rgb(201,209,217)">vocab</span>, <span
                                style="color:rgb(201,209,217)">embedding_layer</span>)
                </div>
                <div><span style="color:rgb(210,168,255)">print</span>(<span
                                style="color:rgb(255,123,114)">f</span><span style="color:rgb(165,214,255)">"result:
                        </span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">result</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)">"</span>)
                </div>
                <div><span style="color:rgb(165,214,255)">'''</span></div>
                <div><span style="color:rgb(165,214,255)">result: tensor([ 0.8477, -0.1557, &nbsp;0.7900, -0.3243,
                                &nbsp;0.9348, -1.4573, &nbsp;0.8597, &nbsp;0.1174],
                                grad_fn=&lt;MeanBackward1&gt;)</span></div>
                <div><span style="color:rgb(165,214,255)">'''</span></div><br><br>
                <div><span
                                style="color:rgb(139,148,158)">##############################<wbr>##############################</span>
                </div>
                <div><span style="color:rgb(139,148,158)"># Problem 4b: Extract averaged features</span></div><br>
                <div><span style="color:rgb(255,123,114)">def</span> <span
                                style="color:rgb(210,168,255)">extract_averaged_features</span>(<span
                                style="color:rgb(255,166,87)">text<wbr>s</span>: <span
                                style="color:rgb(201,209,217)">List</span>[<span
                                style="color:rgb(78,201,176)">str</span>], <span
                                style="color:rgb(255,166,87)">vocab</span>: <span
                                style="color:rgb(78,201,176)">Vocabulary</span>,</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; <span style="color:rgb(255,166,87)">embedding_layer</span>: <span
                                style="color:rgb(78,201,176)">nn</span>.<span
                                style="color:rgb(78,201,176)">Embedding</span>) -&gt; <span
                                style="color:rgb(78,201,176)">torch</span>.<span
                                style="color:rgb(78,201,176)">Tensor</span>:</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(165,214,255)">"""</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; Extract averaged embedding features for all
                                texts.</span></div><br>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @param texts: List of text strings</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @param vocab: Vocabulary object</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @param embedding_layer: PyTorch embedding
                                layer</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @return: Tensor of shape (num_texts,
                                embedding_dim)</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; """</span></div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># initialize as an empty list</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">embeddings_list</span> <span
                                style="color:rgb(212,212,212)">=</span> []</div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># loop over each text in texts</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">for</span> <span
                                style="color:rgb(201,209,217)">text</span> <span
                                style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(255,166,87)">texts</span>:</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># get the avg embedding tensor per
                                text</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">avg_embedding</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(210,168,255)">text_to_average_embedding</span>(<span
                                style="color:rgb(201,209,217)">text</span><wbr>, <span
                                style="color:rgb(255,166,87)">vocab</span>, <span
                                style="color:rgb(255,166,87)">embedding_layer</span>)</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># append each tensor to the
                                list</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">embeddings_list</span>.<span
                                style="color:rgb(210,168,255)">append</span>(<span
                                style="color:rgb(201,209,217)">avg_<wbr>embedding</span>)</div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># combine a list of tensors into a single
                                tensor</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(78,201,176)">torch</span>.<span
                                style="color:rgb(210,168,255)">stack</span>(<span
                                style="color:rgb(201,209,217)">embeddings_list</span>)</div><br>
                <div><span style="color:rgb(201,209,217)">examples</span> <span style="color:rgb(212,212,212)">=</span>
                        [<span style="color:rgb(165,214,255)">"hello world"</span>, <span
                                style="color:rgb(165,214,255)">"world peace"</span>, <span
                                style="color:rgb(165,214,255)">"hello peace"</span>]</div>
                <div><span style="color:rgb(201,209,217)">vocab</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(210,168,255)">build_vocabulary</span>(<span
                                style="color:rgb(201,209,217)">examples</span>)
                </div><br>
                <div><span style="color:rgb(201,209,217)">embedding_dim</span> <span
                                style="color:rgb(212,212,212)">=</span> <span style="color:rgb(181,206,168)">10</span>
                </div>
                <div><span style="color:rgb(201,209,217)">embedding_layer</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">nn</span>.<span
                                style="color:rgb(78,201,176)">Embedding</span>(<span
                                style="color:rgb(201,209,217)">vocab</span>.<span
                                style="color:rgb(210,168,255)">size</span>(), <span
                                style="color:rgb(201,209,217)">embedding_dim</span>, <span
                                style="color:rgb(255,166,87)">padding_idx</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">0</span>)
                </div><br>
                <div><span style="color:rgb(201,209,217)">texts</span> <span style="color:rgb(212,212,212)">=</span>
                        [<span style="color:rgb(165,214,255)">"hello world"</span>, <span
                                style="color:rgb(165,214,255)">"peace world"</span>]</div>
                <div><span style="color:rgb(201,209,217)">features</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(210,168,255)">extract_averaged_features</span>(<span
                                style="color:rgb(201,209,217)">text<wbr>s</span>, <span
                                style="color:rgb(201,209,217)">vocab</span>, <span
                                style="color:rgb(201,209,217)">embedding_layer</span>)
                </div>
                <div><span style="color:rgb(210,168,255)">print</span>(<span
                                style="color:rgb(255,123,114)">f</span><span style="color:rgb(165,214,255)">"features:
                        </span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">features</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)">"</span>)
                </div>
                <div><span style="color:rgb(165,214,255)">'''</span></div>
                <div><span style="color:rgb(165,214,255)">features: tensor([[-0.7508, &nbsp;0.8190, &nbsp;0.9252,
                                &nbsp;0.8414, -1.0388, -0.2578, -0.0048, &nbsp;0.0372, -0.3143, &nbsp;1.3077],</span>
                </div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                [-0.9752, &nbsp;0.7970, &nbsp;0.2688, &nbsp;0.1930, -0.4717, &nbsp;0.8311, &nbsp;0.8446,
                                -0.7473, &nbsp;0.5358, &nbsp;0.2934]], grad_fn=&lt;StackBackward0&gt;)</span></div>
                <div><span style="color:rgb(165,214,255)">'''</span></div><br><br>
                <div><span
                                style="color:rgb(139,148,158)">##############################<wbr>##############################</span>
                </div>
                <div><span style="color:rgb(139,148,158)"># Problem 4c: MLP Classifier</span></div><br>
                <div><span style="color:rgb(255,123,114)">class</span> <span
                                style="color:rgb(78,201,176)">MLPClassifier</span>(<span
                                style="color:rgb(78,201,176)">nn</span>.<span
                                style="color:rgb(78,201,176)">Module</span>):</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(165,214,255)">"""</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; A simple neural network that uses averaged
                                embeddings for text classification.</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; """</span></div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(255,123,114)">def</span> <span
                                style="color:rgb(220,220,170)">__init__</span>(<span
                                style="color:rgb(201,209,217)">self</span>, <span
                                style="color:rgb(255,166,87)">embedding_dim</span>: <span
                                style="color:rgb(78,201,176)">int</span>, <span
                                style="color:rgb(255,166,87)">hidden_dim</span>: <span
                                style="color:rgb(78,201,176)">int</span>, <span
                                style="color:rgb(255,166,87)">output_dim</span>: <span
                                style="color:rgb(78,201,176)">int</span>):</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(78,201,176)">super</span>().<span
                                style="color:rgb(220,220,170)">__init__</span>()</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">fc1</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">nn</span>.<span
                                style="color:rgb(78,201,176)">Linear</span>(<span
                                style="color:rgb(255,166,87)">embedding_dim</span>, <span
                                style="color:rgb(255,166,87)">hidden_dim</span>)
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">relu</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">nn</span>.<span style="color:rgb(78,201,176)">ReLU</span>()
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">fc2</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">nn</span>.<span
                                style="color:rgb(78,201,176)">Linear</span>(<span
                                style="color:rgb(255,166,87)">hidden_dim</span>, <span
                                style="color:rgb(255,166,87)">output_dim</span>)
                </div><br>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># We initialize the layer weights
                                with Xavier uniform, which helps mitigate</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># vanishing or exploding
                                gradients. If you are curious, you can read more here:</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># <a
                                        href="https://docs.pytorch.org/docs/stable/nn.init.html#torch.nn.init.xavier_uniform_"
                                        target="_blank"
                                        data-saferedirecturl="https://www.google.com/url?q=https://docs.pytorch.org/docs/stable/nn.init.html%23torch.nn.init.xavier_uniform_&amp;source=gmail&amp;ust=1774758496842000&amp;usg=AOvVaw0o7rqFRxbowjDrqY_sWiBV">https://docs.pytorch.org/docs/<wbr>stable/nn.init.html#torch.nn.<wbr>init.xavier_uniform_</a></span>
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(78,201,176)">nn</span>.<span
                                style="color:rgb(78,201,176)">init</span>.<span
                                style="color:rgb(210,168,255)">xavier_uniform_</span>(<span
                                style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">f<wbr>c1</span>.<span
                                style="color:rgb(201,209,217)">weight</span>)</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(78,201,176)">nn</span>.<span
                                style="color:rgb(78,201,176)">init</span>.<span
                                style="color:rgb(210,168,255)">zeros_</span>(<span
                                style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">fc1</span>.<span
                                style="color:rgb(201,209,217)">bias</span>)</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(78,201,176)">nn</span>.<span
                                style="color:rgb(78,201,176)">init</span>.<span
                                style="color:rgb(210,168,255)">xavier_uniform_</span>(<span
                                style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">f<wbr>c2</span>.<span
                                style="color:rgb(201,209,217)">weight</span>)</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(78,201,176)">nn</span>.<span
                                style="color:rgb(78,201,176)">init</span>.<span
                                style="color:rgb(210,168,255)">zeros_</span>(<span
                                style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">fc2</span>.<span
                                style="color:rgb(201,209,217)">bias</span>)</div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(255,123,114)">def</span> <span
                                style="color:rgb(210,168,255)">forward</span>(<span
                                style="color:rgb(201,209,217)">self</span>, <span
                                style="color:rgb(255,166,87)">x</span>: <span
                                style="color:rgb(78,201,176)">torch</span>.<span
                                style="color:rgb(78,201,176)">Tensor</span>) -&gt; <span
                                style="color:rgb(78,201,176)">torch</span>.<span
                                style="color:rgb(78,201,176)">Tensor</span>:</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(165,214,255)">"""</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; Forward pass through the
                                network.</span></div><br>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; @param x: Input tensor of averaged
                                embeddings, shape (batch_size, embedding_dim)</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; @return: Raw logits of shape
                                (batch_size, output_dim)</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; """</span></div><br>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(165,214,255)">'''</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; The "forward" method chains the
                                three layers already defined in "__init__":</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1. "fc1" — linear
                                projection from "embedding_dim" → "hidden_dim"</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2. "relu" —
                                non-linear activation</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 3. "fc2" — linear
                                projection from "hidden_dim" → "output_dim" (raw logits)</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; '''</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(255,166,87)">x</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">fc1</span>(<span style="color:rgb(255,166,87)">x</span>)
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(255,166,87)">x</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">relu</span>(<span style="color:rgb(255,166,87)">x</span>)
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(255,166,87)">x</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(201,209,217)">self</span>.<span
                                style="color:rgb(201,209,217)">fc2</span>(<span style="color:rgb(255,166,87)">x</span>)
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(255,166,87)">x</span></div><br>
                <div><span style="color:rgb(201,209,217)">embedding_dim</span>, <span
                                style="color:rgb(201,209,217)">hidden_dim</span>, <span
                                style="color:rgb(201,209,217)">output_dim</span> <span
                                style="color:rgb(212,212,212)">=</span> <span style="color:rgb(181,206,168)">16</span>,
                        <span style="color:rgb(181,206,168)">8</span>, <span style="color:rgb(181,206,168)">3</span>
                </div>
                <div><span style="color:rgb(201,209,217)">model</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">MLPClassifier</span>(<span
                                style="color:rgb(201,209,217)">embedding_dim</span>, <span
                                style="color:rgb(201,209,217)">hidden_dim</span>, <span
                                style="color:rgb(201,209,217)">output_dim</span>)
                </div><br>
                <div><span style="color:rgb(201,209,217)">x</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">torch</span>.<span
                                style="color:rgb(210,168,255)">randn</span>(<span
                                style="color:rgb(181,206,168)">4</span>, <span
                                style="color:rgb(201,209,217)">embedding_dim</span>)</div>
                <div><span style="color:rgb(201,209,217)">output</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(201,209,217)">model</span>(<span style="color:rgb(201,209,217)">x</span>)
                </div>
                <div><span style="color:rgb(210,168,255)">print</span>(<span
                                style="color:rgb(255,123,114)">f</span><span style="color:rgb(165,214,255)">"output:
                        </span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">output</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)">"</span>)
                </div>
                <div><span style="color:rgb(165,214,255)">'''</span></div>
                <div><span style="color:rgb(165,214,255)">output: tensor(</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp;[[-1.7880, -1.4596,
                                &nbsp;0.8059],</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; [-0.0484, &nbsp;0.1262,
                                -0.0347],</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; [-0.5585, -1.0424,
                                &nbsp;0.2752],</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; [ 1.1425, -1.0938, &nbsp;0.7068]],
                                grad_fn=&lt;AddmmBackward0&gt;)</span></div>
                <div><span style="color:rgb(165,214,255)">'''</span></div><br><br>
                <div><span
                                style="color:rgb(139,148,158)">##############################<wbr>##############################</span>
                </div>
                <div><span style="color:rgb(139,148,158)"># Problem 4d: Utility functions</span></div><br>
                <div><span style="color:rgb(255,123,114)">def</span> <span
                                style="color:rgb(210,168,255)">torch_softmax</span>(<span
                                style="color:rgb(255,166,87)">logits</span>: <span
                                style="color:rgb(78,201,176)">torch</span>.<span
                                style="color:rgb(78,201,176)">Tensor</span>) -&gt; <span
                                style="color:rgb(78,201,176)">torch</span>.<span
                                style="color:rgb(78,201,176)">Tensor</span>:</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(165,214,255)">"""</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; Use PyTorch library functions to compute softmax
                                probabilities from logits.</span></div><br>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @param logits: PyTorch tensor of shape
                                (batch_size, K) containing raw logits</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @return: PyTorch tensor of shape (batch_size, K)
                                where each row sums to 1.0</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; and all values are probabilities in range [0,
                                1]</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; """</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># normalize across the class dimension</span>
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(78,201,176)">torch</span>.<span
                                style="color:rgb(210,168,255)">softmax</span>(<span
                                style="color:rgb(255,166,87)">logits</span>, <span
                                style="color:rgb(255,166,87)">dim</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">1</span>)
                </div><br><br>
                <div><span style="color:rgb(255,123,114)">def</span> <span
                                style="color:rgb(210,168,255)">torch_cross_entropy_loss</span>(<span
                                style="color:rgb(255,166,87)">predi<wbr>ctions</span>: <span
                                style="color:rgb(78,201,176)">torch</span>.<span
                                style="color:rgb(78,201,176)">Tensor</span>,</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp;<span style="color:rgb(255,166,87)">targets</span>: <span
                                style="color:rgb(78,201,176)">torch</span>.<span
                                style="color:rgb(78,201,176)">Tensor</span>,</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp;<span style="color:rgb(255,166,87)">epsilon</span>: <span
                                style="color:rgb(78,201,176)">float</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(181,206,168)">1e-15</span>) -&gt; <span
                                style="color:rgb(78,201,176)">torch</span>.<span
                                style="color:rgb(78,201,176)">Tensor</span>:
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(165,214,255)">"""</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; Compute cross-entropy loss between predictions
                                and one-hot targets. </span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; Your output should be the mean loss of the
                                entire batch.</span></div><br>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @param predictions: PyTorch tensor of shape
                                (batch_size, K) containing</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; softmax probabilities for each
                                class (values in [0,1], each row sums to 1.0)</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @param targets: PyTorch tensor of shape
                                (batch_size, K) containing</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; one-hot encoded true labels (each
                                row has exactly one 1 and rest are 0s)</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @param epsilon: Small floating point value
                                (default 1e-15) added to predictions</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; before taking logarithm to prevent
                                numerical instability from log(0)</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @return: Scalar PyTorch tensor containing the
                                mean cross-entropy loss across the batch</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; """</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># computes the cross-entropy loss, mirroring the
                                numpy version but in pytorch</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(220,220,170)">-</span><span
                                style="color:rgb(78,201,176)">torch</span>.<span
                                style="color:rgb(210,168,255)">mean</span>(<span
                                style="color:rgb(78,201,176)">torch</span>.<span
                                style="color:rgb(210,168,255)">sum</span>(<span
                                style="color:rgb(255,166,87)">targets</span> <span
                                style="color:rgb(220,220,170)">*</span> <span
                                style="color:rgb(78,201,176)">torch</span>.<span
                                style="color:rgb(210,168,255)">log</span>(<span
                                style="color:rgb(255,166,87)">predictions</span> <span
                                style="color:rgb(220,220,170)">+</span> <span
                                style="color:rgb(255,166,87)">epsilon</span>), <span
                                style="color:rgb(255,166,87)">dim</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">1</span>))
                </div><br><br>
                <div><span style="color:rgb(255,123,114)">def</span> <span
                                style="color:rgb(210,168,255)">update_parameter</span>(<span
                                style="color:rgb(255,166,87)">param</span>: <span
                                style="color:rgb(78,201,176)">torch</span>.<span
                                style="color:rgb(78,201,176)">Tensor</span>, <span
                                style="color:rgb(255,166,87)">grad</span>: <span
                                style="color:rgb(78,201,176)">torch</span>.<span
                                style="color:rgb(78,201,176)">Tensor</span>, <span
                                style="color:rgb(255,166,87)">lr</span>: <span
                                style="color:rgb(78,201,176)">float</span>) -&gt; <span
                                style="color:rgb(86,156,214)">None</span>:</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(165,214,255)">"""</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; Manually update parameters in place using
                                gradient (stochastic gradient descent).</span></div><br>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @param param: The parameter tensor to update
                                (modified in-place)</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @param grad: Gradient tensor of the same shape
                                as param, containing partial derivatives</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; of the loss function with respect
                                to the parameter</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @param lr: Learning rate (scalar float)
                                controlling the step size of parameter updates</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @return: None (parameters are updated
                                in-place)</span></div><br>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; Hint: Don't forget to wrap your code in "with
                                torch.no_grad(): ", to temporarily disable</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; gradient calculation.</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; """</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># &nbsp;subtracts lr * grad in-place inside
                                torch.no_grad() to avoid tracking this operation in the autograd graph</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">with</span> <span
                                style="color:rgb(78,201,176)">torch</span>.<span
                                style="color:rgb(78,201,176)">no_grad</span>():</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(255,166,87)">param</span> <span
                                style="color:rgb(220,220,170)">-=</span> <span style="color:rgb(255,166,87)">lr</span>
                        <span style="color:rgb(212,212,212)">*</span> <span style="color:rgb(255,166,87)">grad</span>
                </div><br>
                <div><span style="color:rgb(201,209,217)">logits</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">torch</span>.<span
                                style="color:rgb(210,168,255)">tensor</span>([[<span
                                style="color:rgb(181,206,168)">2.0</span>, <span
                                style="color:rgb(181,206,168)">1.0</span>, <span
                                style="color:rgb(181,206,168)">0.1</span>], [<span
                                style="color:rgb(181,206,168)">1.0</span>, <span
                                style="color:rgb(181,206,168)">2.0</span>, <span
                                style="color:rgb(181,206,168)">0.1</span>]])
                </div>
                <div><span style="color:rgb(201,209,217)">result</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(210,168,255)">torch_softmax</span>(<span
                                style="color:rgb(201,209,217)">logits</span>)
                </div><br>
                <div><span style="color:rgb(201,209,217)">predictions</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">torch</span>.<span
                                style="color:rgb(210,168,255)">tensor</span>([[<span
                                style="color:rgb(181,206,168)">0.7</span>, <span
                                style="color:rgb(181,206,168)">0.2</span>, <span
                                style="color:rgb(181,206,168)">0.1</span>], [<span
                                style="color:rgb(181,206,168)">0.3</span>, <span
                                style="color:rgb(181,206,168)">0.6</span>, <span
                                style="color:rgb(181,206,168)">0.1</span>]])</div>
                <div><span style="color:rgb(201,209,217)">targets</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">torch</span>.<span
                                style="color:rgb(210,168,255)">tensor</span>([[<span
                                style="color:rgb(181,206,168)">1.0</span>, <span
                                style="color:rgb(181,206,168)">0.0</span>, <span
                                style="color:rgb(181,206,168)">0.0</span>], [<span
                                style="color:rgb(181,206,168)">0.0</span>, <span
                                style="color:rgb(181,206,168)">1.0</span>, <span
                                style="color:rgb(181,206,168)">0.0</span>]])
                </div>
                <div><span style="color:rgb(201,209,217)">loss</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(210,168,255)">torch_cross_entropy_loss</span>(<span
                                style="color:rgb(201,209,217)">predi<wbr>ctions</span>, <span
                                style="color:rgb(201,209,217)">targets</span>)
                </div><br>
                <div><span style="color:rgb(201,209,217)">param</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">torch</span>.<span
                                style="color:rgb(210,168,255)">tensor</span>([<span
                                style="color:rgb(181,206,168)">1.0</span>, <span
                                style="color:rgb(181,206,168)">2.0</span>, <span
                                style="color:rgb(181,206,168)">3.0</span>], <span
                                style="color:rgb(255,166,87)">requires_grad</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(86,156,214)">True</span>)
                </div>
                <div><span style="color:rgb(201,209,217)">grad</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">torch</span>.<span
                                style="color:rgb(210,168,255)">tensor</span>([<span
                                style="color:rgb(181,206,168)">0.1</span>, <span
                                style="color:rgb(181,206,168)">0.2</span>, <span
                                style="color:rgb(181,206,168)">0.3</span>])
                </div>
                <div><span style="color:rgb(201,209,217)">lr</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(181,206,168)">0.5</span></div>
                <div><span style="color:rgb(210,168,255)">update_parameter</span>(<span
                                style="color:rgb(201,209,217)">param</span>, <span
                                style="color:rgb(201,209,217)">grad</span>, <span
                                style="color:rgb(201,209,217)">lr</span>)</div>
                <div><span style="color:rgb(210,168,255)">print</span>(<span
                                style="color:rgb(255,123,114)">f</span><span style="color:rgb(165,214,255)">"result:
                        </span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">result</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)">, loss:
                        </span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">loss</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)">, param
                                updated: </span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">param</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)">"</span>)
                </div>
                <div><span style="color:rgb(165,214,255)">'''</span></div>
                <div><span style="color:rgb(165,214,255)">result: tensor([</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; [0.6590, 0.2424, 0.0986],</span>
                </div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; [0.2424, 0.6590, 0.0986]]),
                        </span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; loss: 0.4337502717971802, </span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; param updated: tensor([0.9500, 1.9000, 2.8500],
                                requires_grad=True)</span></div>
                <div><span style="color:rgb(165,214,255)">'''</span></div><br><br>
                <div><span
                                style="color:rgb(139,148,158)">##############################<wbr>##############################</span>
                </div>
                <div><span style="color:rgb(139,148,158)"># Problem 4e: MLP Predictor</span></div><br>
                <div><span style="color:rgb(255,123,114)">def</span> <span
                                style="color:rgb(210,168,255)">predict_mlp</span>(<span
                                style="color:rgb(255,166,87)">texts</span>: <span
                                style="color:rgb(201,209,217)">List</span>[<span
                                style="color:rgb(78,201,176)">str</span>], <span
                                style="color:rgb(255,166,87)">labels</span>: <span
                                style="color:rgb(78,201,176)">torch</span>.<span
                                style="color:rgb(78,201,176)">Tensor</span>, <span
                                style="color:rgb(255,166,87)">classifier</span>: <span
                                style="color:rgb(78,201,176)">nn</span>.<span
                                style="color:rgb(78,201,176)">Module</span>,</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(255,166,87)">embedding_layer</span>: <span
                                style="color:rgb(78,201,176)">nn</span>.<span
                                style="color:rgb(78,201,176)">Embedding</span>, <span
                                style="color:rgb(255,166,87)">vocab</span>: <span
                                style="color:rgb(78,201,176)">Vocabulary</span>) -&gt; <span
                                style="color:rgb(78,201,176)">float</span>:</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(165,214,255)">"""</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; Make predictions on new texts using the trained
                                embedding-based classifier</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; and computes the accuracy of the predictions by
                                comparing them to the true labels.</span></div><br>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @param texts: List of text strings to
                                classify</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @param labels: One-hot tensor of dimension
                                (len(texts), K) encoding labels of the texts</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @param classifier: Trained classifier
                                model</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @param embedding_layer: Trained embedding
                                layer</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @param vocab: Vocabulary object</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @return: Accuracy of the model's
                                predictions</span></div><br>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; Hint: Don't forget to wrap your code in "with
                                torch.no_grad(): ", to temporarily disable</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; gradient calculation.</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; """</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(255,166,87)">classifier</span>.<span
                                style="color:rgb(210,168,255)">eval</span>()</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(255,166,87)">embedding_layer</span>.<span
                                style="color:rgb(210,168,255)">eval</span>()</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">accuracy</span> <span
                                style="color:rgb(212,212,212)">=</span> <span style="color:rgb(181,206,168)">0.0</span>
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(165,214,255)">'''</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; The implementation:</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; 1. Wraps everything in "torch.no_grad()" since
                                we're only doing inference</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; 2. Calls "extract_averaged_features" to get the
                                "(num_texts, embedding_dim)" feature tensor</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; 3. Passes features through the classifier to get
                                raw logits</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; 4. Applies "torch_softmax" to get
                                probabilities</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; 5. Uses "argmax" on both predictions and one-hot
                                labels to get class indices</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; 6. Computes accuracy as the fraction of
                                matches</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; '''</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">with</span> <span
                                style="color:rgb(78,201,176)">torch</span>.<span
                                style="color:rgb(78,201,176)">no_grad</span>():</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">features</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(210,168,255)">extract_averaged_features</span>(<span
                                style="color:rgb(255,166,87)">text<wbr>s</span>, <span
                                style="color:rgb(255,166,87)">vocab</span>, <span
                                style="color:rgb(255,166,87)">embedding_layer</span>)</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">logits</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(255,166,87)">classifier</span>(<span
                                style="color:rgb(201,209,217)">features</span>)</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">predictions</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(210,168,255)">torch_softmax</span>(<span
                                style="color:rgb(201,209,217)">logits</span>)</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">predicted_classes</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">torch</span>.<span
                                style="color:rgb(210,168,255)">argmax</span>(<span
                                style="color:rgb(201,209,217)">predictions</span>, <span
                                style="color:rgb(255,166,87)">dim</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">1</span>)
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">true_classes</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">torch</span>.<span
                                style="color:rgb(210,168,255)">argmax</span>(<span
                                style="color:rgb(255,166,87)">labels</span>, <span
                                style="color:rgb(255,166,87)">dim</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">1</span>)
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">accuracy</span> <span
                                style="color:rgb(212,212,212)">=</span> (<span
                                style="color:rgb(201,209,217)">predicted_classes</span> <span
                                style="color:rgb(220,220,170)">==</span> <span
                                style="color:rgb(201,209,217)">true_classes</span>).<span
                                style="color:rgb(210,168,255)">float</span>().<span
                                style="color:rgb(210,168,255)">mean</span>().<span
                                style="color:rgb(210,168,255)">i<wbr>tem</span>()</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(201,209,217)">accuracy</span></div><br>
                <div><span style="color:rgb(201,209,217)">examples</span> <span style="color:rgb(212,212,212)">=</span>
                        [<span style="color:rgb(165,214,255)">"good happy"</span>, <span
                                style="color:rgb(165,214,255)">"bad sad"</span>, <span
                                style="color:rgb(165,214,255)">"great wonderful"</span>]</div>
                <div><span style="color:rgb(201,209,217)">vocab</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(210,168,255)">build_vocabulary</span>(<span
                                style="color:rgb(201,209,217)">examples</span>)
                </div><br>
                <div><span style="color:rgb(201,209,217)">embedding_dim</span>, <span
                                style="color:rgb(201,209,217)">hidden_dim</span>, <span
                                style="color:rgb(201,209,217)">output_dim</span> <span
                                style="color:rgb(212,212,212)">=</span> <span style="color:rgb(181,206,168)">8</span>,
                        <span style="color:rgb(181,206,168)">4</span>, <span style="color:rgb(181,206,168)">3</span>
                </div>
                <div><span style="color:rgb(201,209,217)">embedding_layer</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">nn</span>.<span
                                style="color:rgb(78,201,176)">Embedding</span>(<span
                                style="color:rgb(201,209,217)">vocab</span>.<span
                                style="color:rgb(210,168,255)">size</span>(), <span
                                style="color:rgb(201,209,217)">embedding_dim</span>, <span
                                style="color:rgb(255,166,87)">padding_idx</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">0</span>)
                </div>
                <div><span style="color:rgb(201,209,217)">classifier</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">MLPClassifier</span>(<span
                                style="color:rgb(201,209,217)">embedding_dim</span>, <span
                                style="color:rgb(201,209,217)">hidden_dim</span>, <span
                                style="color:rgb(201,209,217)">output_dim</span>)</div><br>
                <div><span style="color:rgb(201,209,217)">texts</span> <span style="color:rgb(212,212,212)">=</span>
                        [<span style="color:rgb(165,214,255)">"good"</span>, <span
                                style="color:rgb(165,214,255)">"bad"</span>]</div>
                <div><span style="color:rgb(201,209,217)">labels</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">torch</span>.<span
                                style="color:rgb(210,168,255)">tensor</span>([[<span
                                style="color:rgb(181,206,168)">1</span>, <span style="color:rgb(181,206,168)">0</span>,
                        <span style="color:rgb(181,206,168)">0</span>], [<span style="color:rgb(181,206,168)">0</span>,
                        <span style="color:rgb(181,206,168)">1</span>, <span style="color:rgb(181,206,168)">0</span>]],
                        <span style="color:rgb(255,166,87)">dtype</span><span
                                style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(78,201,176)">torch</span>.<span
                                style="color:rgb(201,209,217)">float32</span>)
                </div><br>
                <div><span style="color:rgb(201,209,217)">accuracy</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(210,168,255)">predict_mlp</span>(<span
                                style="color:rgb(201,209,217)">texts</span>, <span
                                style="color:rgb(201,209,217)">labels</span>, <span
                                style="color:rgb(201,209,217)">classifier</span>, <span
                                style="color:rgb(201,209,217)">embedding_layer</span>, <span
                                style="color:rgb(201,209,217)">vocab</span>)
                </div>
                <div><span style="color:rgb(210,168,255)">print</span>(<span
                                style="color:rgb(255,123,114)">f</span><span style="color:rgb(165,214,255)">"accuracy:
                        </span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">accuracy</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)">"</span>)
                </div>
                <div><span style="color:rgb(165,214,255)">'''</span></div>
                <div><span style="color:rgb(165,214,255)">accuracy: 0.5</span></div>
                <div><span style="color:rgb(165,214,255)">'''</span></div><br><br>
                <div><span
                                style="color:rgb(139,148,158)">##############################<wbr>##############################</span>
                </div>
                <div><span style="color:rgb(139,148,158)"># Problem 4f: Train embedding MLP classifier</span></div><br>
                <div><span style="color:rgb(255,123,114)">def</span> <span
                                style="color:rgb(210,168,255)">train_mlp_classifier</span>(</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(255,166,87)">train_texts</span>: <span
                                style="color:rgb(201,209,217)">List</span>[<span
                                style="color:rgb(78,201,176)">str</span>],</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(255,166,87)">train_labels</span>: <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">ndarray</span>,</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(255,166,87)">val_texts</span>: <span
                                style="color:rgb(201,209,217)">List</span>[<span
                                style="color:rgb(78,201,176)">str</span>],</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(255,166,87)">val_labels</span>: <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">ndarray</span>,</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(255,166,87)">num_epochs</span>: <span
                                style="color:rgb(78,201,176)">int</span>,</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(255,166,87)">lr</span>: <span
                                style="color:rgb(78,201,176)">float</span>,</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(255,166,87)">embedding_dim</span>: <span
                                style="color:rgb(78,201,176)">int</span>,</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(255,166,87)">hidden_dim</span>: <span
                                style="color:rgb(78,201,176)">int</span>,</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(255,166,87)">batch_size</span>: <span
                                style="color:rgb(78,201,176)">int</span>,</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(255,166,87)">num_classes</span>: <span
                                style="color:rgb(78,201,176)">int</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(121,192,255)">K</span>) -&gt; <span
                                style="color:rgb(78,201,176)">Tuple</span>[<span
                                style="color:rgb(78,201,176)">nn</span>.<span
                                style="color:rgb(78,201,176)">Module</span>, <span
                                style="color:rgb(78,201,176)">nn</span>.<span
                                style="color:rgb(78,201,176)">Embedding</span>, <span
                                style="color:rgb(78,201,176)">Vocabulary</span>]:
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(165,214,255)">"""</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; Train a text classifier using learnable word
                                embeddings. At the end of each epoch,</span></div><span class="im">
                        <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; call your predictor function to evaluate
                                        your trained parameters on the validation data</span></div>
                        <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; and print out training loss and
                                        validation accuracy.</span></div><br>
                </span>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @param train_texts: List of training text
                                strings</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @param train_labels: Numpy array of training
                                labels (one-hot encoded)</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @param val_texts: List of validation text
                                strings</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @param val_labels: Validation labels (one-hot
                                encoded)</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @param num_epochs: Number of training
                                epochs</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @param lr: Learning rate for optimization</span>
                </div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @param embedding_dim: Dimension of word
                                embeddings</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @param hidden_dim: Hidden dimension of
                                classifier</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @param batch_size: Batch size for
                                training</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @param num_classes: Number of output
                                classes</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; @return: Tuple of (trained classifier, trained
                                embeddings, vocabulary)</span></div><br>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; Hint 1: Don't forget to switch between training
                                and eval mode for your classifier</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; and embeddings with .train() and .eval().</span>
                </div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; Hint 2: Use loss.backward() to compute the
                                backward pass.</span></div><br>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; You should be calling the helper functions you
                                previously implemented.</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; """</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">vocab</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(210,168,255)">build_vocabulary</span>(<span
                                style="color:rgb(255,166,87)">train_texts</span>)</div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Create embedding layer</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">embedding_layer</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">nn</span>.<span
                                style="color:rgb(78,201,176)">Embedding</span>(<span
                                style="color:rgb(201,209,217)">vocab</span>.<span
                                style="color:rgb(210,168,255)">size</span>(), <span
                                style="color:rgb(255,166,87)">embedding_dim</span>, <span
                                style="color:rgb(255,166,87)">padding_idx</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">0</span>)
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(78,201,176)">nn</span>.<span
                                style="color:rgb(78,201,176)">init</span>.<span
                                style="color:rgb(210,168,255)">xavier_uniform_</span>(<span
                                style="color:rgb(201,209,217)">embedd<wbr>ing_layer</span>.<span
                                style="color:rgb(201,209,217)">weight</span>)</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(165,214,255)">'''</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; The training loop:</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; 1. Creates "MLPClassifier" and
                                converts labels to tensors</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; 2. Each epoch — shuffles training
                                indices with "torch.randperm" for stochasticity</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; 3. Each batch:</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - Zeros all
                                gradients manually before the forward pass</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - Calls
                                "extract_averaged_features" → "classifier" → "torch_softmax" →
                                "torch_cross_entropy_loss"</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - Calls
                                "loss.backward()" to populate ".grad" on all parameters</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - Calls
                                "update_parameter" on every parameter with a gradient</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; 4. End of epoch — prints average
                                training loss and validation accuracy via "predict_mlp"</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; &nbsp; &nbsp; 5. Returns "(classifier,
                embedding_layer, vocab)"</span></div>
                <div><span style="color:rgb(165,214,255)">&nbsp; &nbsp; '''</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">classifier</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">MLPClassifier</span>(<span
                                style="color:rgb(255,166,87)">embedding_dim</span>, <span
                                style="color:rgb(255,166,87)">hidden_dim</span>, <span
                                style="color:rgb(255,166,87)">num_classes</span>)</div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">train_labels_tensor</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">torch</span>.<span
                                style="color:rgb(210,168,255)">tensor</span>(<span
                                style="color:rgb(255,166,87)">train_labels</span>, <span
                                style="color:rgb(255,166,87)">dtype</span><span
                                style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(78,201,176)">torch</span>.<span
                                style="color:rgb(201,209,217)">float32</span>)</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">val_labels_tensor</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">torch</span>.<span
                                style="color:rgb(210,168,255)">tensor</span>(<span
                                style="color:rgb(255,166,87)">val_labels</span>, <span
                                style="color:rgb(255,166,87)">dtype</span><span
                                style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(78,201,176)">torch</span>.<span
                                style="color:rgb(201,209,217)">float32</span>)</div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">num_train</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(210,168,255)">len</span>(<span
                                style="color:rgb(255,166,87)">train_texts</span>)</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">all_params</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">list</span>(<span
                                style="color:rgb(201,209,217)">classifier</span>.<span
                                style="color:rgb(210,168,255)">parameters</span>()) <span
                                style="color:rgb(212,212,212)">+</span> <span
                                style="color:rgb(78,201,176)">list</span>(<span
                                style="color:rgb(201,209,217)">embedding_layer</span>.<span
                                style="color:rgb(210,168,255)">parameter<wbr>s</span>())</div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">for</span> <span
                                style="color:rgb(201,209,217)">epoch</span> <span
                                style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(78,201,176)">range</span>(<span
                                style="color:rgb(255,166,87)">num_epochs</span>):</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">classifier</span>.<span
                                style="color:rgb(210,168,255)">train</span>()</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">embedding_layer</span>.<span
                                style="color:rgb(210,168,255)">train</span>()</div><br>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">indices</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">torch</span>.<span
                                style="color:rgb(210,168,255)">randperm</span>(<span
                                style="color:rgb(201,209,217)">num_train</span>)</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">epoch_loss</span> <span
                                style="color:rgb(212,212,212)">=</span> <span style="color:rgb(181,206,168)">0.0</span>
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">num_batches</span> <span
                                style="color:rgb(212,212,212)">=</span> <span style="color:rgb(181,206,168)">0</span>
                </div><br>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">for</span> <span
                                style="color:rgb(201,209,217)">start</span> <span
                                style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(78,201,176)">range</span>(<span
                                style="color:rgb(181,206,168)">0</span>, <span
                                style="color:rgb(201,209,217)">num_train</span>, <span
                                style="color:rgb(255,166,87)">batch_size</span>):</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">batch_idx</span>
                        <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(201,209,217)">indices</span>[<span
                                style="color:rgb(201,209,217)">start</span>:<span
                                style="color:rgb(201,209,217)">start</span> <span
                                style="color:rgb(212,212,212)">+</span> <span
                                style="color:rgb(255,166,87)">batch_size</span>].<span
                                style="color:rgb(210,168,255)">tolist</span>()
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">batch_texts</span>
                        <span style="color:rgb(212,212,212)">=</span> [<span
                                style="color:rgb(255,166,87)">train_texts</span>[<span
                                style="color:rgb(201,209,217)">i</span>] <span style="color:rgb(197,134,192)">for</span>
                        <span style="color:rgb(201,209,217)">i</span> <span style="color:rgb(197,134,192)">in</span>
                        <span style="color:rgb(201,209,217)">batch_idx</span>]
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">batch_labels</span>
                        <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(201,209,217)">train_labels_tensor</span>[<span
                                style="color:rgb(201,209,217)">batch_idx</span>]
                </div><br>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Zero
                                gradients</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">for</span> <span
                                style="color:rgb(201,209,217)">param</span> <span
                                style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(201,209,217)">all_params</span>:</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(197,134,192)">if</span> <span
                                style="color:rgb(201,209,217)">param</span>.<span
                                style="color:rgb(201,209,217)">grad</span> <span style="color:rgb(86,156,214)">is</span>
                        <span style="color:rgb(86,156,214)">not</span> <span style="color:rgb(86,156,214)">None</span>:
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(201,209,217)">param</span>.<span
                                style="color:rgb(201,209,217)">grad</span>.<span
                                style="color:rgb(210,168,255)">zero_</span>()</div><br>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Forward
                                pass</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">features</span>
                        <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(210,168,255)">extract_averaged_features</span>(<span
                                style="color:rgb(201,209,217)">batc<wbr>h_texts</span>, <span
                                style="color:rgb(201,209,217)">vocab</span>, <span
                                style="color:rgb(201,209,217)">embedding_layer</span>)
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">logits</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(201,209,217)">classifier</span>(<span
                                style="color:rgb(201,209,217)">features</span>)</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">predictions</span>
                        <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(210,168,255)">torch_softmax</span>(<span
                                style="color:rgb(201,209,217)">logits</span>)
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">loss</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(210,168,255)">torch_cross_entropy_loss</span>(<span
                                style="color:rgb(201,209,217)">predi<wbr>ctions</span>, <span
                                style="color:rgb(201,209,217)">batch_labels</span>)</div><br>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Backward
                                pass</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">loss</span>.<span
                                style="color:rgb(210,168,255)">backward</span>()</div><br>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(139,148,158)"># Update
                                parameters</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">for</span> <span
                                style="color:rgb(201,209,217)">param</span> <span
                                style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(201,209,217)">all_params</span>:</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(197,134,192)">if</span> <span
                                style="color:rgb(201,209,217)">param</span>.<span
                                style="color:rgb(201,209,217)">grad</span> <span style="color:rgb(86,156,214)">is</span>
                        <span style="color:rgb(86,156,214)">not</span> <span style="color:rgb(86,156,214)">None</span>:
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(210,168,255)">update_parameter</span>(<span
                                style="color:rgb(201,209,217)">param</span>, <span
                                style="color:rgb(201,209,217)">param</span>.<span
                                style="color:rgb(201,209,217)">grad</span>, <span
                                style="color:rgb(255,166,87)">lr</span>)</div><br>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">epoch_loss</span>
                        <span style="color:rgb(212,212,212)">+=</span> <span
                                style="color:rgb(201,209,217)">loss</span>.<span
                                style="color:rgb(210,168,255)">item</span>()
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">num_batches</span>
                        <span style="color:rgb(212,212,212)">+=</span> <span style="color:rgb(181,206,168)">1</span>
                </div><br>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">avg_loss</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(201,209,217)">epoch_loss</span> <span
                                style="color:rgb(212,212,212)">/</span> <span
                                style="color:rgb(201,209,217)">num_batches</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">val_accuracy</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(210,168,255)">predict_mlp</span>(<span
                                style="color:rgb(255,166,87)">val_texts</span>, <span
                                style="color:rgb(201,209,217)">val_labels_tensor</span>, <span
                                style="color:rgb(201,209,217)">classifier</span>, <span
                                style="color:rgb(201,209,217)">embedding_layer</span>, <span
                                style="color:rgb(201,209,217)">vocab</span>)</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(210,168,255)">print</span>(<span
                                style="color:rgb(255,123,114)">f</span><span style="color:rgb(165,214,255)">"Epoch
                        </span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">epoch</span> <span
                                style="color:rgb(212,212,212)">+</span> <span
                                style="color:rgb(181,206,168)">1</span><span
                                style="color:rgb(255,123,114)">:&gt;4}</span><span
                                style="color:rgb(165,214,255)">/</span><span
                                style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(255,166,87)">num_epochs</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)"> | Loss:
                        </span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">avg_loss</span><span
                                style="color:rgb(255,123,114)">:.4f}</span><span style="color:rgb(165,214,255)"> | Val
                                Accuracy: </span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">val_accuracy</span><span
                                style="color:rgb(255,123,114)">:.4f}</span><span
                                style="color:rgb(165,214,255)">"</span>)</div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(201,209,217)">classifier</span>, <span
                                style="color:rgb(201,209,217)">embedding_layer</span>, <span
                                style="color:rgb(201,209,217)">vocab</span></div><br>
                <div><span style="color:rgb(197,134,192)">if</span> <span style="color:rgb(201,209,217)">__name__</span>
                        <span style="color:rgb(212,212,212)">==</span> <span
                                style="color:rgb(165,214,255)">'__main__'</span>:
                </div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">parser</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">argparse</span>.<span
                                style="color:rgb(78,201,176)">ArgumentParser</span>(</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(255,166,87)">description</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(165,214,255)">'Train
                                sentiment classification models'</span>,</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(255,166,87)">formatter_class</span><span
                                style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(78,201,176)">argparse</span>.<span
                                style="color:rgb(78,201,176)">RawDe<wbr>scriptionHelpFormatter</span>,</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(255,166,87)">epilog</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(165,214,255)">"""Examples:
                                python submission.py --model mlp --lr 0.001"""</span>)</div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">parser</span>.<span
                                style="color:rgb(210,168,255)">add_argument</span>(</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(165,214,255)">'--model'</span>,</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(255,166,87)">type</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(78,201,176)">str</span>,
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(255,166,87)">choices</span><span
                                style="color:rgb(212,212,212)">=</span>[<span
                                style="color:rgb(165,214,255)">'linear'</span>, <span
                                style="color:rgb(165,214,255)">'mlp'</span>],</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(255,166,87)">required</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(86,156,214)">True</span>,
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(255,166,87)">help</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(165,214,255)">'Model type
                                to train: linear (Linear Classifier) or mlp (Multi-Layer Perceptron)'</span>)</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">parser</span>.<span
                                style="color:rgb(210,168,255)">add_argument</span>(<span
                                style="color:rgb(165,214,255)">'--lr'</span>,</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(255,166,87)">type</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(78,201,176)">float</span>,
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(255,166,87)">help</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(165,214,255)">'Learning
                                rate (float value, e.g., 0.001, 0.01, 0.1)'</span>)</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">args</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(201,209,217)">parser</span>.<span
                                style="color:rgb(210,168,255)">parse_args</span>()</div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">train_texts</span>, <span
                                style="color:rgb(201,209,217)">train_labels</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(210,168,255)">read_tweet_data</span>(<span
                                style="color:rgb(165,214,255)">'tweet.train'</span>)</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">val_texts</span>, <span
                                style="color:rgb(201,209,217)">val_labels</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(210,168,255)">read_tweet_data</span>(<span
                                style="color:rgb(165,214,255)">'tweet.test'</span>)</div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">if</span> <span
                                style="color:rgb(201,209,217)">args</span>.model <span
                                style="color:rgb(212,212,212)">==</span> <span
                                style="color:rgb(165,214,255)">'linear'</span>:</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">lr</span> <span
                                style="color:rgb(212,212,212)">=</span> <span style="color:rgb(181,206,168)">0.2</span>
                        <span style="color:rgb(197,134,192)">if</span> <span style="color:rgb(86,156,214)">not</span>
                        <span style="color:rgb(201,209,217)">args</span>.lr <span
                                style="color:rgb(197,134,192)">else</span> <span
                                style="color:rgb(201,209,217)">args</span>.lr
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(210,168,255)">print</span>(<span
                                style="color:rgb(255,123,114)">f</span><span style="color:rgb(165,214,255)">"Training
                                linear classifier with learning rate </span><span
                                style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">lr</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)">..."</span>)
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">vocab</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(210,168,255)">build_vocabulary</span>(<span
                                style="color:rgb(201,209,217)">train_texts</span>)</div><br>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">train_features</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(210,168,255)">array</span>([<span
                                style="color:rgb(210,168,255)">text_to_features</span>(<span
                                style="color:rgb(201,209,217)">tex<wbr>t</span>, <span
                                style="color:rgb(201,209,217)">vocab</span>) <span
                                style="color:rgb(197,134,192)">for</span> <span
                                style="color:rgb(201,209,217)">text</span> <span
                                style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(201,209,217)">train_texts</span>])</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">val_features</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(210,168,255)">array</span>([<span
                                style="color:rgb(210,168,255)">text_to_features</span>(<span
                                style="color:rgb(201,209,217)">tex<wbr>t</span>, <span
                                style="color:rgb(201,209,217)">vocab</span>) <span
                                style="color:rgb(197,134,192)">for</span> <span
                                style="color:rgb(201,209,217)">text</span> <span
                                style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(201,209,217)">val_texts</span>])</div><br>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">weights</span>, <span
                                style="color:rgb(201,209,217)">bias</span> <span style="color:rgb(212,212,212)">=</span>
                        train_linear_classifier(<span style="color:rgb(201,209,217)">train_<wbr>features</span>,</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(201,209,217)">train_labels</span>,</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(201,209,217)">val_features</span>,</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(201,209,217)">val_labels</span>,</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(255,166,87)">num_epochs</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">15</span>,
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(255,166,87)">lr</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(201,209,217)">lr</span>)
                </div><span class="im"><br>
                        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">accuracy</span> <span
                                        style="color:rgb(212,212,212)">=</span> predict_linear_classifier(<span
                                        style="color:rgb(201,209,217)">val_<wbr>features</span>, <span
                                        style="color:rgb(201,209,217)">val_labels</span>, <span
                                        style="color:rgb(201,209,217)">weights</span>, <span
                                        style="color:rgb(201,209,217)">bias</span>)</div><br>
                </span>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(210,168,255)">print</span>(<span
                                style="color:rgb(255,123,114)">f</span><span style="color:rgb(165,214,255)">"NumPy
                                classifier test accuracy: </span><span style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">accuracy</span><span
                                style="color:rgb(255,123,114)">:.4f}</span><span
                                style="color:rgb(165,214,255)">"</span>)</div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">else</span>:</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">lr</span> <span
                                style="color:rgb(212,212,212)">=</span> <span style="color:rgb(181,206,168)">3e-6</span>
                        <span style="color:rgb(197,134,192)">if</span> <span style="color:rgb(86,156,214)">not</span>
                        <span style="color:rgb(201,209,217)">args</span>.lr <span
                                style="color:rgb(197,134,192)">else</span> <span
                                style="color:rgb(201,209,217)">args</span>.lr
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(210,168,255)">print</span>(<span
                                style="color:rgb(255,123,114)">f</span><span style="color:rgb(165,214,255)">"Training
                                PyTorch classifier with learning rate </span><span
                                style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">lr</span><span
                                style="color:rgb(255,123,114)">}</span><span style="color:rgb(165,214,255)">..."</span>)
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">classifier</span>, <span
                                style="color:rgb(201,209,217)">embedding_layer</span>, <span
                                style="color:rgb(201,209,217)">vocab</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(210,168,255)">train_mlp_classifier</span>(</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">train_texts</span>,
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">train_labels</span>,
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">val_texts</span>,
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">val_labels</span>,
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(255,166,87)">num_epochs</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">15</span>,
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(255,166,87)">lr</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(201,209,217)">lr</span>,
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(255,166,87)">embedding_dim</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">8</span>,
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(255,166,87)">hidden_dim</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">16</span>,
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(255,166,87)">batch_size</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">16</span>,
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(255,166,87)">num_classes</span><span
                                style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(201,209,217)">train_labels</span>.<span
                                style="color:rgb(201,209,217)">shape</span><wbr>[<span
                                style="color:rgb(181,206,168)">1</span>])</div><br>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">val_labels_tensor</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">torch</span>.<span
                                style="color:rgb(210,168,255)">tensor</span>(<span
                                style="color:rgb(201,209,217)">val_labels</span>, <span
                                style="color:rgb(255,166,87)">dtype</span><span
                                style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(78,201,176)">torch</span>.<span
                                style="color:rgb(201,209,217)">float32</span>)</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(201,209,217)">accuracy</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(210,168,255)">predict_mlp</span>(<span
                                style="color:rgb(201,209,217)">val_texts</span>, <span
                                style="color:rgb(201,209,217)">val_labels_tensor</span>, <span
                                style="color:rgb(201,209,217)">classifier</span>, <span
                                style="color:rgb(201,209,217)">embedding_layer</span>, <span
                                style="color:rgb(201,209,217)">vocab</span>)</div><br>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(210,168,255)">print</span>(<span
                                style="color:rgb(255,123,114)">f</span><span style="color:rgb(165,214,255)">"PyTorch
                                embedding classifier test accuracy: </span><span
                                style="color:rgb(255,123,114)">{</span><span
                                style="color:rgb(201,209,217)">accuracy</span><span
                                style="color:rgb(255,123,114)">:.4f}</span><span
                                style="color:rgb(165,214,255)">"</span>)</div><br><br>
                <div><span style="color:rgb(201,209,217)">train_texts</span> <span
                                style="color:rgb(212,212,212)">=</span> [<span style="color:rgb(165,214,255)">"happy
                                good wonderful"</span>, <span style="color:rgb(165,214,255)">"sad bad terrible"</span>,
                        <span style="color:rgb(165,214,255)">"love great amazing"</span>]
                </div>
                <div><span style="color:rgb(201,209,217)">train_labels</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(210,168,255)">array</span>([[<span
                                style="color:rgb(181,206,168)">0</span>, <span style="color:rgb(181,206,168)">1</span>,
                        <span style="color:rgb(181,206,168)">0</span>], [<span style="color:rgb(181,206,168)">1</span>,
                        <span style="color:rgb(181,206,168)">0</span>, <span style="color:rgb(181,206,168)">0</span>],
                        [<span style="color:rgb(181,206,168)">0</span>, <span style="color:rgb(181,206,168)">0</span>,
                        <span style="color:rgb(181,206,168)">1</span>]])
                </div>
                <div><span style="color:rgb(201,209,217)">val_texts</span> <span style="color:rgb(212,212,212)">=</span>
                        [<span style="color:rgb(165,214,255)">"good"</span>, <span
                                style="color:rgb(165,214,255)">"bad"</span>]</div>
                <div><span style="color:rgb(201,209,217)">val_labels</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(210,168,255)">array</span>([[<span
                                style="color:rgb(181,206,168)">0</span>, <span style="color:rgb(181,206,168)">1</span>,
                        <span style="color:rgb(181,206,168)">0</span>], [<span style="color:rgb(181,206,168)">1</span>,
                        <span style="color:rgb(181,206,168)">0</span>, <span style="color:rgb(181,206,168)">0</span>]])
                </div><br>
                <div><span style="color:rgb(201,209,217)">classifier</span>, <span
                                style="color:rgb(201,209,217)">embedding_layer</span>, <span
                                style="color:rgb(201,209,217)">vocab</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(210,168,255)">train_mlp_classifier</span>(</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(201,209,217)">train_texts</span>, <span
                                style="color:rgb(201,209,217)">train_labels</span>, <span
                                style="color:rgb(201,209,217)">val_texts</span>, <span
                                style="color:rgb(201,209,217)">val_labels</span>,</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(255,166,87)">num_epochs</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">3</span>,
                        <span style="color:rgb(255,166,87)">lr</span><span style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(181,206,168)">0.01</span>, <span
                                style="color:rgb(255,166,87)">embedding_dim</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">8</span>,
                        <span style="color:rgb(255,166,87)">hidden_dim</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">4</span>,
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(255,166,87)">batch_size</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">2</span>,
                        <span style="color:rgb(255,166,87)">num_classes</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">3</span>
                </div>
                <div>)</div><br>
                <div><span style="color:rgb(165,214,255)">'''</span></div>
                <div><span style="color:rgb(165,214,255)">Training PyTorch classifier with learning rate 3e-06...</span>
                </div>
                <div><span style="color:rgb(165,214,255)">Epoch &nbsp; &nbsp;1/15 | Loss: 1.0995 | Val Accuracy:
                                0.2471</span></div>
                <div><span style="color:rgb(165,214,255)">Epoch &nbsp; &nbsp;2/15 | Loss: 1.0993 | Val Accuracy:
                                0.2998</span></div>
                <div><span style="color:rgb(165,214,255)">Epoch &nbsp; &nbsp;3/15 | Loss: 1.0991 | Val Accuracy:
                                0.3559</span></div>
                <div><span style="color:rgb(165,214,255)">Epoch &nbsp; &nbsp;4/15 | Loss: 1.0989 | Val Accuracy:
                                0.3970</span></div>
                <div><span style="color:rgb(165,214,255)">Epoch &nbsp; &nbsp;5/15 | Loss: 1.0987 | Val Accuracy:
                                0.4238</span></div>
                <div><span style="color:rgb(165,214,255)">Epoch &nbsp; &nbsp;6/15 | Loss: 1.0985 | Val Accuracy:
                                0.4514</span></div>
                <div><span style="color:rgb(165,214,255)">Epoch &nbsp; &nbsp;7/15 | Loss: 1.0983 | Val Accuracy:
                                0.4740</span></div>
                <div><span style="color:rgb(165,214,255)">Epoch &nbsp; &nbsp;8/15 | Loss: 1.0981 | Val Accuracy:
                                0.5050</span></div>
                <div><span style="color:rgb(165,214,255)">Epoch &nbsp; &nbsp;9/15 | Loss: 1.0979 | Val Accuracy:
                                0.5251</span></div>
                <div><span style="color:rgb(165,214,255)">Epoch &nbsp; 10/15 | Loss: 1.0978 | Val Accuracy:
                                0.5352</span></div>
                <div><span style="color:rgb(165,214,255)">Epoch &nbsp; 11/15 | Loss: 1.0976 | Val Accuracy:
                                0.5452</span></div>
                <div><span style="color:rgb(165,214,255)">Epoch &nbsp; 12/15 | Loss: 1.0974 | Val Accuracy:
                                0.5544</span></div>
                <div><span style="color:rgb(165,214,255)">Epoch &nbsp; 13/15 | Loss: 1.0972 | Val Accuracy:
                                0.5595</span></div>
                <div><span style="color:rgb(165,214,255)">Epoch &nbsp; 14/15 | Loss: 1.0971 | Val Accuracy:
                                0.5670</span></div>
                <div><span style="color:rgb(165,214,255)">Epoch &nbsp; 15/15 | Loss: 1.0969 | Val Accuracy:
                                0.5687</span></div>
                <div><span style="color:rgb(165,214,255)">'''</span></div><br>
                <div><span style="color:rgb(139,148,158)"># &amp;
                                C:/Users/Johnny/miniconda3/<wbr>envs/XCS221/python.exe g:/__stanford/github-scpd-<wbr>proed/XCS221-A2/src/grader.py 4f-0-basic</span>
                </div>
                <div><span style="color:rgb(139,148,158)"># &amp;
                                C:/Users/Johnny/miniconda3/<wbr>envs/XCS221/python.exe g:/__stanford/github-scpd-<wbr>proed/XCS221-A2/src/testing-<wbr>4a.py --model mlp</span>
                </div><br>
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
                                                Assignment 2
                                        </div>


                                        <Tabs>
                                                <Tab2 title="Assignment 2" isChecked={true}>
                                                        <TileRowCell0>

                                                                <div className="jade-h11 mt-[15px]">
                                                                        Assignment 2
                                                                </div>

                                                                <CardDrawer id='1' name='1. Building Intuition for Bag-of-Words Features and Linear Classification'>

                                                                        <div className="assignment-question-wrapper p-[15px] mb-[0px]">
                                                                                <div className="assignment-question">
                                                                                        <p className="jade-h5">
                                                                                                1a. Feature Representation
                                                                                        </p>
                                                                                        <p>
                                                                                                Using the vocabulary given above, write out the bag-of-words feature vector <span className="math">{"\\[f(x)\\]"}</span> for the tweet "so so worried about tomorrow".

                                                                                                What we expect: A feature vector corresponding to the vocabulary in alphabetical order: [about, amazing, angry, day, hate, love, of, scared, so, spiders, this, tomorrow, waiting, worried].
                                                                                        </p>
                                                                                </div>
                                                                        </div>

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                        Feature vector: <span className="math">{"\\[f(x) = [1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 1]\\]"}</span>
                                                                                </div>
                                                                        </div>

                                                                        <div className="assignment-question-wrapper p-[15px] mb-[0px]">
                                                                                <div className="assignment-question">
                                                                                        <p className="jade-h5">
                                                                                                1b. Softmax Computation
                                                                                        </p>
                                                                                        Given logits z = [2.0, 1.0,−1.0] for the three classes [Joy, Anger, Fear], compute the softmax probabilities.
                                                                                        Show your work.
                                                                                        What we expect: Return the softmax probability vector [P(Joy), P(Anger), P(Fear)] with values rounded
                                                                                        to 3 decimal places.
                                                                                </div>
                                                                        </div>

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                        The softmax formula is:

                                                                                        <p className="formula">{"\\[P(i) = \\frac{e ^ { z_i }}{\\sum_j e^{z_j}}\\]"}</p>

                                                                                        <p className="bold">
                                                                                                Step 1: Compute the exponentials
                                                                                        </p>

                                                                                        <p className="ml-[20px]">
                                                                                                Joy: <span className="math">{"\\[z = 2.0 \\xrightarrow{ } e^2 = 7.389\\]"}</span><br />
                                                                                                Anger: <span className="math">{"\\[z = 1.0 \\xrightarrow{ } e^1 = 2.718\\]"}</span><br />
                                                                                                Fear: <span className="math">{"\\[z = -1.0 \\xrightarrow{ }  e^{-1} = 0.368\\]"}</span>
                                                                                        </p>

                                                                                        <p className="bold">
                                                                                                Step 2: Compute the sum
                                                                                        </p>

                                                                                        <p className="formula">
                                                                                                {"\\[\\sum e^{z_j} = 7.389 + 2.718 + 0.368 = 10.475\\]"}
                                                                                        </p>

                                                                                        <p className="bold">
                                                                                                Step 3: Divide each by the sum
                                                                                        </p>

                                                                                        <p className="formula">
                                                                                                {"\\[P(\\text{Joy})   = \\frac{7.389}{10.475} = 0.705\\]"}
                                                                                        </p>
                                                                                        <p className="formula">
                                                                                                {"\\[P(\\text{Anger}) = \\frac{2.718}{10.475} = 0.259\\]"}
                                                                                        </p>
                                                                                        <p className="formula">
                                                                                                {"\\[P(\\text{Fear})  = \\frac{0.368}{10.475} = 0.035\\]"}
                                                                                        </p>

                                                                                        <p className="math">
                                                                                                Result: [P(Joy), P(Anger), P(Fear)] = [0.705, 0.259, 0.035]
                                                                                        </p>

                                                                                        <p>
                                                                                                As a sanity check, verify that the probabilities add to 1:
                                                                                                <span className="math">{"\\[0.705 + 0.259 + 0.035 = 1.0\\]"}</span>
                                                                                        </p>

                                                                                </div>
                                                                        </div>

                                                                        <div className="assignment-question-wrapper p-[15px] mb-[0px]">
                                                                                <div className="assignment-question">
                                                                                        <p className="jade-h5">
                                                                                                1c. Cross-Entropy Loss
                                                                                        </p>
                                                                                        <p>
                                                                                                For the tweet “so angry” with true label Anger (one-hot: [0, 1, 0]), suppose your model outputs probabilities
                                                                                                [0.2, 0.7, 0.1]. Calculate the cross-entropy loss for this example. Then explain what happens to the loss as the
                                                                                                predicted probability for the correct class approaches 1.
                                                                                        </p>
                                                                                </div>
                                                                        </div>

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                        <p>
                                                                                                The cross-entropy loss formula is:
                                                                                        </p>
                                                                                        <p className="formula">
                                                                                                {"\\[L = -\\sum_i y_i \\log(p_i)\\]"}
                                                                                        </p>
                                                                                        <p>
                                                                                                where y is the one-hot true label vector and p is the predicted probability vector.
                                                                                        </p>
                                                                                        <p>
                                                                                                Given:
                                                                                        </p>
                                                                                        <ul>
                                                                                                <li>
                                                                                                        True label: <span className="math">{"\\[y = [0, 1, 0]\\]"}</span>
                                                                                                </li>
                                                                                                <li>
                                                                                                        Predicted probabilities: <span className="math">{"\\[p = [0.2, 0.7, 0.1]\\]"}</span>
                                                                                                </li>
                                                                                        </ul>

                                                                                        <p className="bold">
                                                                                                Step 1: Expand the sum
                                                                                        </p>
                                                                                        <p className="formula">
                                                                                                {"\\[L = -(y_{\\text{Joy}}\\log p_{\\text{Joy}} + y_{\\text{Anger}}\\log p_{\\text{Anger}} + y_{\\text{Fear}}\\log p_{\\text{Fear}})\\]"}
                                                                                        </p>
                                                                                        <p className="formula">
                                                                                                {"\\[L = -(0 \\cdot \\log(0.2) + 1 \\cdot \\log(0.7) + 0 \\cdot \\log(0.1))\\]"}
                                                                                        </p>
                                                                                        <p className="bold">
                                                                                                Step 2: Because of the one-hot encoding, only the correct class term survives
                                                                                        </p>
                                                                                        <p className="formula">
                                                                                                {"\\[L = -\\log(0.7) = 0.357\\]"}
                                                                                        </p>
                                                                                        <p className="bold">
                                                                                                Answer:
                                                                                        </p>
                                                                                        <ul>
                                                                                                <li>
                                                                                                        i. Cross-Entropy Loss = 0.357
                                                                                                </li>
                                                                                                <li>
                                                                                                        ii. Loss Behavior:
                                                                                                        As the predicted probability for the correct class approaches 1, the loss approaches 0, since -log(1) = 0. Conversely,
                                                                                                        as that probability approaches 0, the loss grows toward +infinity, since -log(x) goes to infinity as x goes to 0. This
                                                                                                        asymmetric behavior means the model is heavily penalized for being confidently wrong, which encourages the
                                                                                                        model to assign high probability to the true class during training.
                                                                                                </li>
                                                                                        </ul>



                                                                                </div>
                                                                        </div>

                                                                </CardDrawer>

                                                                <CardDrawer id='1' name='2. Building Intuition for Embeddings and Multilayer Perceptron'>

                                                                        <div className="assignment-question-wrapper p-[15px] mb-[0px]">
                                                                                <div className="assignment-question">
                                                                                        <p className="jade-h5">
                                                                                                xxxx
                                                                                        </p>
                                                                                        <p>
                                                                                                xxxx
                                                                                        </p>
                                                                                </div>
                                                                        </div>

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                        xxxx
                                                                                </div>
                                                                        </div>


                                                                </CardDrawer>

                                                                <CardDrawer id='1' name='3. Linear Classifier'>

                                                                        <div className="assignment-question-wrapper p-[15px] mb-[0px]">
                                                                                <div className="assignment-question">

                                                                                        <p>
                                                                                                Now, we will implement the first classifier that can classify tweet sentiments. Recall that in our data, each tweet is
                                                                                                labeled with one of three emotions (joy, anger, or fear) in one-hot encoding.
                                                                                        </p>
                                                                                </div>
                                                                        </div>

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                        <div dangerouslySetInnerHTML={createMarkup(html_1)} />
                                                                                </div>
                                                                        </div>


                                                                </CardDrawer>

                                                                <CardDrawer id='1' name='4. Multilayer Perceptron and Embeddings'>

                                                                        <div className="assignment-question-wrapper p-[15px] mb-[0px]">
                                                                                <div className="assignment-question">

                                                                                        <p>
                                                                                                Linear classification was a simple attempt at detecting tweet sentiments. In class, we learned that word embeddings
                                                                                                and neural networks are powerful tools in natural language processing, and we will now implement them.
                                                                                                To build embeddings, we convert each word into a small, dense ”embedding” vector (such as a 32-dimensional array
                                                                                                of numbers) that captures the word’s meaning. To obtain the embedding for each text, we simply average all the
                                                                                                word embeddings to get one fixed-size vector per document - so a 500-word document and a 10-word document both
                                                                                                become the same size vector, making them perfect inputs for your multilayer perceptron classifier while preserving
                                                                                                much more semantic information than word counts alone.
                                                                                        </p>
                                                                                </div>
                                                                        </div>

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                        <div dangerouslySetInnerHTML={createMarkup(html_2)} />
                                                                                </div>
                                                                        </div>


                                                                </CardDrawer>



                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="PDF" isChecked={false}>
                                                        <TileRowCell0>

                                                                <div className='lab-links'>
                                                                        <ul>
                                                                                <li><a href="/A2_Solutions.pdf" target="_blank">Assignment 2</a></li>
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
