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
        
        `

        return (
                <>
                        <MathJaxContext>
                                <div className='mt-[0px] ml-[40px] mr-[20px] mb-[12px]'>

                                        <div className='jade-h1'>
                                                XCS236 - Deep Generative Models
                                        </div>

                                        <div className='jade-h2 mt-[5px] mb-[20px]'>
                                                Assignment 1
                                        </div>


                                        <Tabs>

                                                <Tab2 title="Notes" isChecked={true}>
                                                        <TileRowCell0>

                                                                <div className="jade-h11 mt-[15px]">
                                                                        Summary
                                                                </div>

                                                                <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                        <div className="assignment-answer mt-[10px] p-[15px]">

                                                                                <p>Here’s the summary of <strong>XCS236-PS1</strong> (“Generative Models, PS1”):</p>
                                                                                <h2 id="overall-shape">Overall shape</h2>
                                                                                <ul>
                                                                                        <li><strong>PS1 is mostly written</strong> (questions 1–5 are pencil-and-paper proofs/derivations). Q6 is the coding programming portion using a pretrained GPT-2.</li>
                                                                                        <li>Submit a zipped <code>submission/</code> directory containing the three code files (<code>sample.py</code>, <code>classifier.py</code>, <code>likelihood.py</code>) plus a handful of generated artifacts (<code>samples.txt</code>, <code>random_raw.pkl</code>, <code>shakespeare_raw.pkl</code>, <code>neurips_raw.pkl</code>, <code>classification.pkl</code>, <code>samples_temperature0-95.txt</code>, and optional extra-credit <code>samples_temperature0-95_horizon2.txt</code>).</li>
                                                                                </ul>
                                                                                <h2 id="question-list">Question list</h2>
                                                                                <h3 id="q1-maximum-likelihood-estimation-and-kl-divergence-written">Q1 — Maximum Likelihood Estimation and KL Divergence (written)</h3>
                                                                                <p>Show that MLE on a classifier <span className="math inline">\(p_\theta(y|x)\)</span> under the empirical data distribution is equivalent to minimizing the expected KL divergence from the empirical conditional <span className="math inline">\(\hat p(y|x)\)</span> to <span className="math inline">\(p_\theta(y|x)\)</span>.</p>
                                                                                <h3 id="q2-logistic-regression-and-naive-bayes-written">Q2 — Logistic Regression and Naive Bayes (written)</h3>
                                                                                <p>For a Gaussian mixture generative model <span className="math inline">\(p_\theta(x,y)\)</span> with shared diagonal covariance <span className="math inline">\(\sigma^2 I\)</span>, show that for any <span className="math inline">\(\theta\)</span> there exists a logistic-regression parameter vector <span className="math inline">\(\gamma\)</span> such that <span className="math inline">\(p_\theta(y\mid x) = p_\gamma(y\mid x)\)</span>. (Classic “Naive Bayes ↔︎ logistic regression for shared-covariance Gaussians” result.)</p>
                                                                                <h3 id="q3-conditional-independence-and-parameter-counting-written-3-parts">Q3 — Conditional Independence and Parameter Counting (written, 3 parts)</h3>
                                                                                <ul>
                                                                                        <li><strong>3a</strong>: number of free parameters with no independence assumptions.</li>
                                                                                        <li><strong>3b</strong>: which assumption gives <span className="math inline">\(\sum_i (k_i - 1)\)</span> parameters (i.e. full independence).</li>
                                                                                        <li><strong>3c</strong>: parameter count when each <span className="math inline">\(X_i\)</span> (<span className="math inline">\(i &gt; m\)</span>) depends only on its previous <span className="math inline">\(m\)</span> ancestors (i.e. an “<span className="math inline">\(m\)</span>-th-order Markov” condition).</li>
                                                                                </ul>
                                                                                <h3 id="q4-autoregressive-models-written">Q4 — Autoregressive Models (written)</h3>
                                                                                <p>Do <em>forward</em> and <em>reverse</em> Gaussian autoregressive factorizations cover the same hypothesis space? The hint says no — and gives a hint that <span className="math inline">\(p_f(x_1\mid x_2)\)</span> becomes a mixture of truncated Gaussians for a specific <span className="math inline">\(\epsilon\)</span>-style construction. Likely answer: construct a counterexample.</p>
                                                                                <h3 id="q5-monte-carlo-integration-written-2-parts">Q5 — Monte Carlo Integration (written, 2 parts)</h3>
                                                                                <ul>
                                                                                        <li><strong>5a</strong>: prove <span className="math inline">
                                                                                                {"\\[A = \\frac{1}{k}\\sum_i p(x \\mid z^{(i)})\\]"}
                                                                                        </span> is unbiased for <span className="math inline">
                                                                                                        \(p(x)\)
                                                                                                </span>.</li>
                                                                                        <li><strong>5b</strong>: is <span className="math inline">\(\log A\)</span> unbiased for <span className="math inline">\(\log p(x)\)</span>? (Hint: Jensen’s inequality → no, <span className="math inline">\(\log A\)</span> is a downward-biased estimator.)</li>
                                                                                </ul>
                                                                                <h3 id="q6-programming-with-gpt-2-8-parts">Q6 — Programming with GPT-2 (8 parts)</h3>
                                                                                <p>The code lives under <code>src/submission/</code>. Pretrained GPT-2 weights are already shipped (<code>gpt2-pytorch_model.bin</code>).</p>
                                                                                <ul>
                                                                                        <li><strong>6a (written)</strong>: minimal bit-length <span className="math inline">\(n\)</span> to encode the 50257 tokens.</li>
                                                                                        <li><strong>6b (written)</strong>: parameter-count <em>increase</em> when vocab goes 50,257 → 60,000 (the GPT-2 transformer body unchanged; just embedding + output-head linear).</li>
                                                                                        <li><strong>6c (code)</strong>: implement <code>sample()</code> in <code>sample.py</code>; generate paper-abstract continuations from 5 NeurIPS-2015 sentences.</li>
                                                                                        <li><strong>6d (code)</strong>: implement <code>log_likelihood()</code> in <code>likelihood.py</code>; produce histograms for random / Shakespeare / NeurIPS text.</li>
                                                                                        <li><strong>6e (code)</strong>: implement <code>classification()</code> in <code>classifier.py</code> to detect random vs non-random snippets using log-likelihood as the feature.</li>
                                                                                        <li><strong>6f (code)</strong>: implement temperature scaling at <code>temperature_horizon=1</code> in <code>sample.py:temperature_scale()</code>.</li>
                                                                                        <li><strong>6g (written)</strong>: does chain-rule single-token temperature scaling equal joint temperature scaling? (Hint nudges toward no — normalizers differ across conditioning contexts.)</li>
                                                                                        <li><strong>6h (code, extra credit)</strong>: implement temperature scaling at <code>temperature_horizon=2</code>.</li>
                                                                                </ul>


                                                                        </div>
                                                                </div>

                                                        </TileRowCell0>
                                                </Tab2>


                                                <Tab2 title="PDF" isChecked={false}>
                                                        <TileRowCell0>

                                                                <div className='lab-links'>
                                                                        <ul>
                                                                                <li><a href="/PS1_Solutions.pdf" target="_blank">Assignment 1</a></li>
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
