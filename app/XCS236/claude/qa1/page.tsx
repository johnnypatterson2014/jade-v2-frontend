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
                                                Claude Notes
                                        </div>


                                        <Tabs>

                                                <Tab2 title="Notes" isChecked={true}>
                                                        <TileRowCell0>

                                                                <div className="jade-h11 mt-[15px]">
                                                                        Claude Notes
                                                                </div>

                                                                <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">

                                                                        <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                What is KL divergence?
                                                                        </div>
                                                                        <div className="assignment-answer mt-[10px] p-[15px]">


                                                                                <h2 id="kl-divergence-kullbackleibler-divergence">KL divergence (Kullback–Leibler divergence)</h2>
                                                                                <h3 id="definition">Definition</h3>
                                                                                <p>For two probability distributions <img src="https://latex.codecogs.com/png.latex?%5Ctextstyle%20p" alt="p" title="p" className="math inline" /> and <img src="https://latex.codecogs.com/png.latex?%5Ctextstyle%20q" alt="q" title="q" className="math inline" /> over the same space, the KL divergence from <img src="https://latex.codecogs.com/png.latex?%5Ctextstyle%20p" alt="p" title="p" className="math inline" /> to <img src="https://latex.codecogs.com/png.latex?%5Ctextstyle%20q" alt="q" title="q" className="math inline" /> is:</p>
                                                                                <p><img src="https://latex.codecogs.com/png.latex?%5Cdisplaystyle%20D_%7B%5Cmathrm%7BKL%7D%7D%28p%20%5C%2C%5CVert%5C%2C%20q%29%20%3D%20%5Cmathbb%7BE%7D_%7Bx%20%5Csim%20p%7D%5C%21%5Cleft%5B%5Clog%20p%28x%29%20-%20%5Clog%20q%28x%29%5Cright%5D%20%3D%20%5Cmathbb%7BE%7D_%7Bx%20%5Csim%20p%7D%5C%21%5Cleft%5B%5Clog%20%5Cfrac%7Bp%28x%29%7D%7Bq%28x%29%7D%5Cright%5D" alt="D_{\mathrm{KL}}(p \,\Vert\, q) = \mathbb{E}_{x \sim p}\!\left[\log p(x) - \log q(x)\right] = \mathbb{E}_{x \sim p}\!\left[\log \frac{p(x)}{q(x)}\right]" title="D_{\mathrm{KL}}(p \,\Vert\, q) = \mathbb{E}_{x \sim p}\!\left[\log p(x) - \log q(x)\right] = \mathbb{E}_{x \sim p}\!\left[\log \frac{p(x)}{q(x)}\right]" className="math display" /></p>
                                                                                <p>It’s a number that measures <strong>how different <img src="https://latex.codecogs.com/png.latex?%5Ctextstyle%20q" alt="q" title="q" className="math inline" /> is from <img src="https://latex.codecogs.com/png.latex?%5Ctextstyle%20p" alt="p" title="p" className="math inline" /></strong>, with <img src="https://latex.codecogs.com/png.latex?%5Ctextstyle%20p" alt="p" title="p" className="math inline" /> treated as the “true” or “reference” distribution.</p>
                                                                                <h3 id="intuition-extra-surprise">Intuition: “extra surprise”</h3>
                                                                                <p>The cleanest reading is from information theory. Suppose data comes from <img src="https://latex.codecogs.com/png.latex?%5Ctextstyle%20p" alt="p" title="p" className="math inline" />, but you wrongly model it as <img src="https://latex.codecogs.com/png.latex?%5Ctextstyle%20q" alt="q" title="q" className="math inline" /> and design a code (or make predictions) based on <img src="https://latex.codecogs.com/png.latex?%5Ctextstyle%20q" alt="q" title="q" className="math inline" />. The KL divergence is the <strong>average number of extra nats per sample</strong> you’d pay relative to using the optimal code for <img src="https://latex.codecogs.com/png.latex?%5Ctextstyle%20p" alt="p" title="p" className="math inline" />:</p>
                                                                                <p><img src="https://latex.codecogs.com/png.latex?%5Cdisplaystyle%20D_%7B%5Cmathrm%7BKL%7D%7D%28p%20%5C%2C%5CVert%5C%2C%20q%29%20%3D%20%5Cunderbrace%7B%5Cmathbb%7BE%7D_%7Bp%7D%5B-%5Clog%20q%28x%29%5D%7D_%7B%5Ctext%7Bcross-entropy%3A%20avg%20cost%20using%20%7Dq%7D%20-%20%5Cunderbrace%7B%5Cmathbb%7BE%7D_%7Bp%7D%5B-%5Clog%20p%28x%29%5D%7D_%7B%5Ctext%7Bentropy%3A%20optimal%20avg%20cost%7D%7D" alt="D_{\mathrm{KL}}(p \,\Vert\, q) = \underbrace{\mathbb{E}_{p}[-\log q(x)]}_{\text{cross-entropy: avg cost using }q} - \underbrace{\mathbb{E}_{p}[-\log p(x)]}_{\text{entropy: optimal avg cost}}" title="D_{\mathrm{KL}}(p \,\Vert\, q) = \underbrace{\mathbb{E}_{p}[-\log q(x)]}_{\text{cross-entropy: avg cost using }q} - \underbrace{\mathbb{E}_{p}[-\log p(x)]}_{\text{entropy: optimal avg cost}}" className="math display" /></p>
                                                                                <p>If <img src="https://latex.codecogs.com/png.latex?%5Ctextstyle%20q%20%3D%20p" alt="q = p" title="q = p" className="math inline" />, you pay nothing extra → KL = 0. The more <img src="https://latex.codecogs.com/png.latex?%5Ctextstyle%20q" alt="q" title="q" className="math inline" /> misallocates probability mass relative to <img src="https://latex.codecogs.com/png.latex?%5Ctextstyle%20p" alt="p" title="p" className="math inline" />, the higher the penalty.</p>
                                                                                <h3 id="three-properties-that-matter-most">Three properties that matter most</h3>
                                                                                <ol type="1">
                                                                                        <li><strong>Non-negative.</strong> <img src="https://latex.codecogs.com/png.latex?%5Ctextstyle%20D_%7B%5Cmathrm%7BKL%7D%7D%28p%20%5C%2C%5CVert%5C%2C%20q%29%20%5Cgeq%200" alt="D_{\mathrm{KL}}(p \,\Vert\, q) \geq 0" title="D_{\mathrm{KL}}(p \,\Vert\, q) \geq 0" className="math inline" />, with equality iff <img src="https://latex.codecogs.com/png.latex?%5Ctextstyle%20p%20%3D%20q" alt="p = q" title="p = q" className="math inline" /> almost everywhere. (This is Gibbs’ inequality — proved via Jensen’s inequality on <img src="https://latex.codecogs.com/png.latex?%5Ctextstyle%20%5Clog" alt="\log" title="\log" className="math inline" />.)</li>
                                                                                        <li><strong>Not a true distance.</strong> It is <em>not</em> symmetric: <img src="https://latex.codecogs.com/png.latex?%5Ctextstyle%20D_%7B%5Cmathrm%7BKL%7D%7D%28p%20%5C%2C%5CVert%5C%2C%20q%29%20%5Cneq%20D_%7B%5Cmathrm%7BKL%7D%7D%28q%20%5C%2C%5CVert%5C%2C%20p%29" alt="D_{\mathrm{KL}}(p \,\Vert\, q) \neq D_{\mathrm{KL}}(q \,\Vert\, p)" title="D_{\mathrm{KL}}(p \,\Vert\, q) \neq D_{\mathrm{KL}}(q \,\Vert\, p)" className="math inline" /> in general. And it doesn’t satisfy the triangle inequality. So it’s a <em>divergence</em>, not a metric.</li>
                                                                                        <li><strong>Mass-coverage asymmetry.</strong> Because the expectation is under <img src="https://latex.codecogs.com/png.latex?%5Ctextstyle%20p" alt="p" title="p" className="math inline" />, regions where <img src="https://latex.codecogs.com/png.latex?%5Ctextstyle%20p%28x%29%20%3E%200" alt="p(x) &gt; 0" title="p(x) &gt; 0" className="math inline" /> but <img src="https://latex.codecogs.com/png.latex?%5Ctextstyle%20q%28x%29%20%5Capprox%200" alt="q(x) \approx 0" title="q(x) \approx 0" className="math inline" /> blow up the integrand → <img src="https://latex.codecogs.com/png.latex?%5Ctextstyle%20D_%7B%5Cmathrm%7BKL%7D%7D%28p%20%5C%2C%5CVert%5C%2C%20q%29" alt="D_{\mathrm{KL}}(p \,\Vert\, q)" title="D_{\mathrm{KL}}(p \,\Vert\, q)" className="math inline" /> punishes <img src="https://latex.codecogs.com/png.latex?%5Ctextstyle%20q" alt="q" title="q" className="math inline" /> harshly for <em>missing</em> mass that <img src="https://latex.codecogs.com/png.latex?%5Ctextstyle%20p" alt="p" title="p" className="math inline" /> has.</li>
                                                                                </ol>
                                                                                <h3 id="tiny-example">Tiny example</h3>
                                                                                <p>Let <img src="https://latex.codecogs.com/png.latex?%5Ctextstyle%20p%20%3D%20%280.5%2C%200.5%29" alt="p = (0.5, 0.5)" title="p = (0.5, 0.5)" className="math inline" /> and <img src="https://latex.codecogs.com/png.latex?%5Ctextstyle%20q%20%3D%20%280.9%2C%200.1%29" alt="q = (0.9, 0.1)" title="q = (0.9, 0.1)" className="math inline" /> over two outcomes:</p>
                                                                                <p><img src="https://latex.codecogs.com/png.latex?%5Cdisplaystyle%20D_%7B%5Cmathrm%7BKL%7D%7D%28p%20%5C%2C%5CVert%5C%2C%20q%29%20%3D%200.5%20%5Clog%5Ctfrac%7B0.5%7D%7B0.9%7D%20%2B%200.5%20%5Clog%5Ctfrac%7B0.5%7D%7B0.1%7D%20%5Capprox%200.5%28-0.59%29%20%2B%200.5%281.61%29%20%5Capprox%200.51%20%5Ctext%7B%20nats.%7D" alt="D_{\mathrm{KL}}(p \,\Vert\, q) = 0.5 \log\tfrac{0.5}{0.9} + 0.5 \log\tfrac{0.5}{0.1} \approx 0.5(-0.59) + 0.5(1.61) \approx 0.51 \text{ nats.}" title="D_{\mathrm{KL}}(p \,\Vert\, q) = 0.5 \log\tfrac{0.5}{0.9} + 0.5 \log\tfrac{0.5}{0.1} \approx 0.5(-0.59) + 0.5(1.61) \approx 0.51 \text{ nats.}" className="math display" /></p>
                                                                                <p><img src="https://latex.codecogs.com/png.latex?%5Cdisplaystyle%20D_%7B%5Cmathrm%7BKL%7D%7D%28q%20%5C%2C%5CVert%5C%2C%20p%29%20%3D%200.9%20%5Clog%5Ctfrac%7B0.9%7D%7B0.5%7D%20%2B%200.1%20%5Clog%5Ctfrac%7B0.1%7D%7B0.5%7D%20%5Capprox%200.53%20%2B%20%28-0.16%29%20%5Capprox%200.37%20%5Ctext%7B%20nats.%7D" alt="D_{\mathrm{KL}}(q \,\Vert\, p) = 0.9 \log\tfrac{0.9}{0.5} + 0.1 \log\tfrac{0.1}{0.5} \approx 0.53 + (-0.16) \approx 0.37 \text{ nats.}" title="D_{\mathrm{KL}}(q \,\Vert\, p) = 0.9 \log\tfrac{0.9}{0.5} + 0.1 \log\tfrac{0.1}{0.5} \approx 0.53 + (-0.16) \approx 0.37 \text{ nats.}" className="math display" /></p>
                                                                                <p>Same two distributions, different KL values → confirms asymmetry.</p>
                                                                                <h3 id="why-it-shows-up-everywhere-in-ml">Why it shows up everywhere in ML</h3>
                                                                                <table>

                                                                                        <thead>
                                                                                                <tr>
                                                                                                        <th>Where</th>
                                                                                                        <th>Role</th>
                                                                                                </tr>
                                                                                        </thead>
                                                                                        <tbody>
                                                                                                <tr>
                                                                                                        <td><strong>Cross-entropy loss</strong></td>
                                                                                                        <td>Minimizing cross-entropy = minimizing <img src="https://latex.codecogs.com/png.latex?%5Ctextstyle%20D_%7B%5Cmathrm%7BKL%7D%7D%28%5Chat%20p_%7B%5Ctext%7Bdata%7D%7D%20%5C%2C%5CVert%5C%2C%20p_%5Ctheta%29" alt="D_{\mathrm{KL}}(\hat p_{\text{data}} \,\Vert\, p_\theta)" title="D_{\mathrm{KL}}(\hat p_{\text{data}} \,\Vert\, p_\theta)" className="math inline" /> up to a constant (this is exactly what your Q1 proof established).</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                        <td><strong>MLE</strong></td>
                                                                                                        <td>Equivalent to minimizing KL from the empirical to the model distribution.</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                        <td><strong>VAEs</strong></td>
                                                                                                        <td>The ELBO contains a <img src="https://latex.codecogs.com/png.latex?%5Ctextstyle%20D_%7B%5Cmathrm%7BKL%7D%7D%28q_%5Cphi%28z%20%5Cmid%20x%29%20%5C%2C%5CVert%5C%2C%20p%28z%29%29" alt="D_{\mathrm{KL}}(q_\phi(z \mid x) \,\Vert\, p(z))" title="D_{\mathrm{KL}}(q_\phi(z \mid x) \,\Vert\, p(z))" className="math inline" /> term keeping the posterior close to the prior.</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                        <td><strong>Diffusion models</strong></td>
                                                                                                        <td>Each denoising step’s loss is a KL between Gaussians.</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                        <td><strong>RL (PPO, TRPO)</strong></td>
                                                                                                        <td>KL constraints between old and new policy keep updates stable.</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                        <td><strong>Knowledge distillation</strong></td>
                                                                                                        <td>Student matches teacher via <img src="https://latex.codecogs.com/png.latex?%5Ctextstyle%20D_%7B%5Cmathrm%7BKL%7D%7D%28%5Ctext%7Bteacher%7D%20%5C%2C%5CVert%5C%2C%20%5Ctext%7Bstudent%7D%29" alt="D_{\mathrm{KL}}(\text{teacher} \,\Vert\, \text{student})" title="D_{\mathrm{KL}}(\text{teacher} \,\Vert\, \text{student})" className="math inline" />.</td>
                                                                                                </tr>
                                                                                        </tbody>
                                                                                </table>
                                                                                <h3 id="direction-of-d_mathrmklp-vert-q-vs-d_mathrmklq-vert-p-practical-impact">Direction of <img src="https://latex.codecogs.com/png.latex?%5Ctextstyle%20D_%7B%5Cmathrm%7BKL%7D%7D%28p%20%5C%2C%5CVert%5C%2C%20q%29" alt="D_{\mathrm{KL}}(p \,\Vert\, q)" title="D_{\mathrm{KL}}(p \,\Vert\, q)" className="math inline" /> vs <img src="https://latex.codecogs.com/png.latex?%5Ctextstyle%20D_%7B%5Cmathrm%7BKL%7D%7D%28q%20%5C%2C%5CVert%5C%2C%20p%29" alt="D_{\mathrm{KL}}(q \,\Vert\, p)" title="D_{\mathrm{KL}}(q \,\Vert\, p)" className="math inline" /> — practical impact</h3>
                                                                                <p>Because KL is asymmetric, <strong>which direction you minimize changes the result</strong>:</p>
                                                                                <ul>
                                                                                        <li><img src="https://latex.codecogs.com/png.latex?%5Ctextstyle%20%5Cmin_q%20D_%7B%5Cmathrm%7BKL%7D%7D%28p%20%5C%2C%5CVert%5C%2C%20q%29" alt="\min_q D_{\mathrm{KL}}(p \,\Vert\, q)" title="\min_q D_{\mathrm{KL}}(p \,\Vert\, q)" className="math inline" />: <img src="https://latex.codecogs.com/png.latex?%5Ctextstyle%20q" alt="q" title="q" className="math inline" /> has to <strong>cover</strong> every mode of <img src="https://latex.codecogs.com/png.latex?%5Ctextstyle%20p" alt="p" title="p" className="math inline" />. If <img src="https://latex.codecogs.com/png.latex?%5Ctextstyle%20p" alt="p" title="p" className="math inline" /> is multi-modal, <img src="https://latex.codecogs.com/png.latex?%5Ctextstyle%20q" alt="q" title="q" className="math inline" /> ends up spread broadly → “mean-seeking” / “inclusive” fit.</li>
                                                                                        <li><img src="https://latex.codecogs.com/png.latex?%5Ctextstyle%20%5Cmin_q%20D_%7B%5Cmathrm%7BKL%7D%7D%28q%20%5C%2C%5CVert%5C%2C%20p%29" alt="\min_q D_{\mathrm{KL}}(q \,\Vert\, p)" title="\min_q D_{\mathrm{KL}}(q \,\Vert\, p)" className="math inline" />: <img src="https://latex.codecogs.com/png.latex?%5Ctextstyle%20q" alt="q" title="q" className="math inline" /> is penalized for placing mass where <img src="https://latex.codecogs.com/png.latex?%5Ctextstyle%20p" alt="p" title="p" className="math inline" /> has none → <img src="https://latex.codecogs.com/png.latex?%5Ctextstyle%20q" alt="q" title="q" className="math inline" /> collapses onto a <em>single</em> mode → “mode-seeking” / “exclusive” fit.</li>
                                                                                </ul>
                                                                                <p>In Q1 the direction is <img src="https://latex.codecogs.com/png.latex?%5Ctextstyle%20D_%7B%5Cmathrm%7BKL%7D%7D%28%5Chat%20p%28y%20%5Cmid%20x%29%20%5C%2C%5CVert%5C%2C%20p_%5Ctheta%28y%20%5Cmid%20x%29%29" alt="D_{\mathrm{KL}}(\hat p(y \mid x) \,\Vert\, p_\theta(y \mid x))" title="D_{\mathrm{KL}}(\hat p(y \mid x) \,\Vert\, p_\theta(y \mid x))" className="math inline" /> — the <em>mean-seeking</em> direction — which is why fitting it via MLE forces <img src="https://latex.codecogs.com/png.latex?%5Ctextstyle%20p_%5Ctheta" alt="p_\theta" title="p_\theta" className="math inline" /> to cover the support of the empirical distribution rather than collapse to its mode.</p>




                                                                        </div>
                                                                </div>

                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="Probability Theory" isChecked={false}>
                                                        <TileRowCell0>

                                                                <div className="jade-h11 mt-[15px]">
                                                                        Review of Probability Theory
                                                                </div>

                                                                <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">


                                                                        <div className="assignment-answer mt-[10px] p-[15px]">

                                                                                <h1 id="review-of-probability-theory">Review of Probability Theory</h1>
                                                                                <p>Arian Maleki and Tom Do — Stanford University</p>
                                                                                <p>Probability theory is the study of uncertainty. These notes review the basic probability concepts needed for machine
                                                                                        learning. The full mathematical theory involves measure theory, but these notes focus on the core concepts required
                                                                                        for practical work.</p>

                                                                                <h1 id="1-elements-of-probability">1. Elements of Probability</h1>
                                                                                <p>To define probability formally, we need three components.</p>
                                                                                <h2 id="sample-space">Sample Space</h2>
                                                                                <p>The <strong>sample space</strong> <span className="math">{"\\[\\Omega\\]"}</span> is the set of all possible outcomes
                                                                                        of an experiment.</p>
                                                                                <p>Each outcome <span className="math">{"\\[\\omega \\in \\Omega\\]"}</span> represents a complete description of the
                                                                                        experiment.</p>

                                                                                <h2 id="event-space">Event Space</h2>
                                                                                <p>The <strong>event space</strong> <span className="math">{"\\[F\\]"}</span> is a set of events where each event is a
                                                                                        subset of the sample space.</p>
                                                                                <p className="formula">{"\\[A \\in F \\Rightarrow A \\subseteq \\Omega\\]"}</p>

                                                                                <h2 id="probability-measure">Probability Measure</h2>
                                                                                <p>A <strong>probability measure</strong></p>
                                                                                <p className="formula">{"\\[P : F \\rightarrow \\mathbb{R}\\]"}</p>
                                                                                <p>must satisfy the <strong>axioms of probability</strong>:</p>
                                                                                <ol>
                                                                                        <li><span className="math">{"\\[P(A) \\ge 0\\]"}</span></li>
                                                                                        <li><span className="math">{"\\[P(\\Omega) = 1\\]"}</span></li>
                                                                                        <li>If <span className="math">{"\\[A_1, A_2, ...\\]"}</span> are disjoint events:</li>
                                                                                </ol>
                                                                                <p className="formula">{"\\[P\\left(\\bigcup_i A_i\\right) = \\sum_i P(A_i)\\]"}</p>

                                                                                <h2 id="example-tossing-a-die">Example: Tossing a Die</h2>
                                                                                <p>Sample space:</p>
                                                                                <p className="formula">{"\\[\\Omega = {1,2,3,4,5,6}\\]"}</p>
                                                                                <p>Example probabilities:</p>
                                                                                <p className="formula">{"\\[P({1,2,3}) = \\frac{3}{6}\\]"}</p>
                                                                                <p className="formula">{"\\[P({1,2,3,4}) = \\frac{4}{6}\\]"}</p>

                                                                                <h2 id="useful-properties">Useful Properties</h2>
                                                                                <p>If <span className="math">{"\\[A \\subseteq B\\]"}</span> then</p>
                                                                                <p className="formula">{"\\[P(A) \\le P(B)\\]"}</p>
                                                                                <p>Intersection bound:</p>
                                                                                <p className="formula">{"\\[P(A \\cap B) \\le \\min(P(A),P(B))\\]"}</p>
                                                                                <p>Union bound:</p>
                                                                                <p className="formula">{"\\[P(A \\cup B) \\le P(A) + P(B)\\]"}</p>
                                                                                <p>Complement rule:</p>
                                                                                <p className="formula">{"\\[P(\\Omega \\setminus A) = 1 - P(A)\\]"}</p>

                                                                                <h1 id="1-1-conditional-probability-and-independence">1.1 Conditional Probability and Independence</h1>
                                                                                <p>Conditional probability:</p>
                                                                                <p className="formula">{"\\[P(A|B) = \\frac{P(A \\cap B)}{P(B)}\\]"}</p>
                                                                                <p>Two events are <strong>independent</strong> if</p>
                                                                                <p className="formula">{"\\[P(A \\cap B) = P(A)P(B)\\]"}</p>
                                                                                <p>Equivalently,</p>
                                                                                <p className="formula">{"\\[P(A|B) = P(A)\\]"}</p>

                                                                                <h1 id="2-random-variables">2. Random Variables</h1>
                                                                                <p>A <strong>random variable</strong> is a function</p>
                                                                                <p className="formula">{"\\[X : \\Omega \\rightarrow \\mathbb{R}\\]"}</p>
                                                                                <p>It assigns a numerical value to each outcome.</p>
                                                                                <p>Example:</p>
                                                                                <p>If we flip 10 coins, define</p>
                                                                                <p className="formula">{"\\[X(\\omega) = \\text{number of heads}\\]"}</p>

                                                                                <h2 id="discrete-random-variables">Discrete Random Variables</h2>
                                                                                <p>Probability of a specific value:</p>
                                                                                <p className="formula">{"\\[P(X = k) = P({\\omega : X(\\omega) = k})\\]"}</p>
                                                                                <p>Possible values:</p>
                                                                                <p className="formula">{"\\[Val(X) = {0,1,2,...,10}\\]"}</p>

                                                                                <h2 id="continuous-random-variables">Continuous Random Variables</h2>
                                                                                <p>Probability that <span className="math">{"\\[X\\]"}</span> lies within an interval:</p>
                                                                                <p className="formula">{"\\[P(a \\le X \\le b)\\]"}</p>

                                                                                <h1 id="2-1-cumulative-distribution-function-cdf-">2.1 Cumulative Distribution Function (CDF)</h1>
                                                                                <p>The <strong>CDF</strong> is defined as</p>
                                                                                <p className="formula">{"\\[F_X(x) = P(X \\le x)\\]"}</p>
                                                                                <h3 id="properties">Properties</h3>
                                                                                <ul>
                                                                                        <li><span className="math">{"\\[0 \\le F_X(x) \\le 1\\]"}</span></li>
                                                                                        <li><span className="math">{"\\[F_X(x)\\]"}</span> is non-decreasing</li>
                                                                                        <li><span className="math">{"\\[\\lim_{x \\to -\\infty} F_X(x) = 0\\]"}</span></li>
                                                                                        <li><span className="math">{"\\[\\lim_{x \\to \\infty} F_X(x) = 1\\]"}</span></li>
                                                                                </ul>

                                                                                <h1 id="2-2-probability-mass-function-pmf-">2.2 Probability Mass Function (PMF)</h1>
                                                                                <p>For discrete variables:</p>
                                                                                <p className="formula">{"\\[p_X(x) = P(X = x)\\]"}</p>
                                                                                <h3 id="properties">Properties</h3>
                                                                                <p className="formula">{"\\[0 \\le p_X(x) \\le 1\\]"}</p>
                                                                                <p className="formula">{"\\[\\sum_{x \\in Val(X)} p_X(x) = 1\\]"}</p>
                                                                                <p>Probability of an event <span className="math">{"\\[A\\]"}</span>:</p>
                                                                                <p className="formula">{"\\[P(X \\in A) = \\sum_{x \\in A} p_X(x)\\]"}</p>

                                                                                <h1 id="2-3-probability-density-function-pdf-">2.3 Probability Density Function (PDF)</h1>
                                                                                <p>For continuous variables:</p>
                                                                                <p className="formula">{"\\[f_X(x) = \\frac{dF_X(x)}{dx}\\]"}</p>
                                                                                <p>Probability over a small interval:</p>
                                                                                <p className="formula">{"\\[P(x \\le X \\le x+\\Delta x) \\approx f_X(x)\\Delta x\\]"}</p>
                                                                                <h3 id="properties">Properties</h3>
                                                                                <p className="formula">{"\\[f_X(x) \\ge 0\\]"}</p>
                                                                                <p className="formula">{"\\[\\int_{-\\infty}^{\\infty} f_X(x),dx = 1\\]"}</p>
                                                                                <p>Probability of event <span className="math">{"\\[A\\]"}</span>:</p>
                                                                                <p className="formula">{"\\[P(X \\in A) = \\int_A f_X(x),dx\\]"}</p>

                                                                                <h1 id="2-4-expectation">2.4 Expectation</h1>
                                                                                <p>Expectation of a function <span className="math">{"\\[g(X)\\]"}</span>.</p>
                                                                                <h3 id="discrete-case">Discrete Case</h3>
                                                                                <p className="formula">{"\\[E[g(X)] = \\sum_{x \\in Val(X)} g(x)p_X(x)\\]"}</p>
                                                                                <h3 id="continuous-case">Continuous Case</h3>
                                                                                <p className="formula">{"\\[E[g(X)] = \\int_{-\\infty}^{\\infty} g(x)f_X(x)dx\\]"}</p>
                                                                                <p>Mean of a random variable:</p>
                                                                                <p className="formula">{"\\[E[X]\\]"}</p>

                                                                                <h2 id="properties">Properties</h2>
                                                                                <p>Constant:</p>
                                                                                <p className="formula">{"\\[E[a] = a\\]"}</p>
                                                                                <p>Scaling:</p>
                                                                                <p className="formula">{"\\[E[af(X)] = aE[f(X)]\\]"}</p>
                                                                                <p>Linearity:</p>
                                                                                <p className="formula">{"\\[E[f(X) + g(X)] = E[f(X)] + E[g(X)]\\]"}</p>

                                                                                <h1 id="2-5-variance">2.5 Variance</h1>
                                                                                <p>Variance measures how spread out a random variable is.</p>
                                                                                <p className="formula">{"\\[Var[X] = E[(X - E[X])^2]\\]"}</p>
                                                                                <p>Equivalent form:</p>
                                                                                <p className="formula">{"\\[Var[X] = E[X^2] - (E[X])^2\\]"}</p>

                                                                                <h2 id="example-uniform-0-1-">Example: Uniform(0,1)</h2>
                                                                                <p>Mean:</p>
                                                                                <p className="formula">{"\\[E[X] = \\int_0^1 x,dx = \\frac12\\]"}</p>
                                                                                <p>Second moment:</p>
                                                                                <p className="formula">{"\\[E[X^2] = \\int_0^1 x^2,dx = \\frac13\\]"}</p>
                                                                                <p>Variance:</p>
                                                                                <p className="formula">{"\\[Var[X] = \\frac13 - \\frac14 = \\frac1{12}\\]"}</p>

                                                                                <h1 id="2-6-common-random-variables">2.6 Common Random Variables</h1>
                                                                                <h2 id="discrete-distributions">Discrete Distributions</h2>
                                                                                <h3 id="bernoulli">Bernoulli</h3>
                                                                                <p className="formula">{"\\[X \\sim Bernoulli(p)\\]"}</p>
                                                                                <p className="formula">{"\\[p(x) =\n \\begin{cases}\n p &amp; x=1 \\\n 1-p &amp; x=0\n \\end{cases}\\]"}</p>
                                                                                <p>Mean:</p>
                                                                                <p className="formula">{"\\[E[X] = p\\]"}</p>
                                                                                <p>Variance:</p>
                                                                                <p className="formula">{"\\[Var[X] = p(1-p)\\]"}</p>

                                                                                <h3 id="binomial">Binomial</h3>
                                                                                <p className="formula">{"\\[X \\sim Binomial(n,p)\\]"}</p>
                                                                                <p className="formula">{"\\[p(x) = \\binom{n}{x}p^x(1-p)^{n-x}\\]"}</p>
                                                                                <p>Mean:</p>
                                                                                <p className="formula">{"\\[np\\]"}</p>
                                                                                <p>Variance:</p>
                                                                                <p className="formula">{"\\[np(1-p)\\]"}</p>

                                                                                <h3 id="geometric">Geometric</h3>
                                                                                <p className="formula">{"\\[p(x) = p(1-p)^{x-1}\\]"}</p>
                                                                                <p>Mean:</p>
                                                                                <p className="formula">{"\\[\\frac1p\\]"}</p>
                                                                                <p>Variance:</p>
                                                                                <p className="formula">{"\\[\\frac{1-p}{p^2}\\]"}</p>

                                                                                <h3 id="poisson">Poisson</h3>
                                                                                <p className="formula">{"\\[p(x) = e^{-\\lambda}\\frac{\\lambda^x}{x!}\\]"}</p>
                                                                                <p>Mean and variance:</p>
                                                                                <p className="formula">{"\\[\\lambda\\]"}</p>

                                                                                <h2 id="continuous-distributions">Continuous Distributions</h2>
                                                                                <h3 id="uniform">Uniform</h3>
                                                                                <p className="formula">{"\\[f(x) =\n \\begin{cases}\n \\frac{1}{b-a} &amp; a \\le x \\le b \\\n 0 &amp; \\text{otherwise}\n \\end{cases}\\]"}</p>
                                                                                <p>Mean:</p>
                                                                                <p className="formula">{"\\[\\frac{a+b}{2}\\]"}</p>
                                                                                <p>Variance:</p>
                                                                                <p className="formula">{"\\[\\frac{(b-a)^2}{12}\\]"}</p>

                                                                                <h3 id="exponential">Exponential</h3>
                                                                                <p className="formula">{"\\[f(x) = \\lambda e^{-\\lambda x}, \\quad x \\ge 0\\]"}</p>
                                                                                <p>Mean:</p>
                                                                                <p className="formula">{"\\[\\frac1\\lambda\\]"}</p>
                                                                                <p>Variance:</p>
                                                                                <p className="formula">{"\\[\\frac1{\\lambda^2}\\]"}</p>

                                                                                <h3 id="normal-gaussian-">Normal (Gaussian)</h3>
                                                                                <p className="formula">{"\\[f(x) =\n \\frac{1}{\\sigma\\sqrt{2\\pi}}\n e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}\\]"}</p>
                                                                                <p>Mean:</p>
                                                                                <p className="formula">{"\\[\\mu\\]"}</p>
                                                                                <p>Variance:</p>
                                                                                <p className="formula">{"\\[\\sigma^2\\]"}</p>

                                                                                <h1 id="3-two-random-variables">3. Two Random Variables</h1>
                                                                                <p>Joint CDF:</p>
                                                                                <p className="formula">{"\\[F_{XY}(x,y) = P(X \\le x, Y \\le y)\\]"}</p>
                                                                                <p>Marginal distributions:</p>
                                                                                <p className="formula">{"\\[F_X(x) = \\lim_{y \\to \\infty} F_{XY}(x,y)\\]"}</p>
                                                                                <p className="formula">{"\\[F_Y(y) = \\lim_{x \\to \\infty} F_{XY}(x,y)\\]"}</p>

                                                                                <h1 id="3-2-joint-pmf">3.2 Joint PMF</h1>
                                                                                <p className="formula">{"\\[p_{XY}(x,y) = P(X=x, Y=y)\\]"}</p>
                                                                                <p>Marginalization:</p>
                                                                                <p className="formula">{"\\[p_X(x) = \\sum_y p_{XY}(x,y)\\]"}</p>

                                                                                <h1 id="3-3-joint-pdf">3.3 Joint PDF</h1>
                                                                                <p className="formula">{"\\[f_{XY}(x,y) = \\frac{\\partial^2 F_{XY}(x,y)}{\\partial x \\partial y}\\]"}</p>
                                                                                <p>Probability over region <span className="math">{"\\[A\\]"}</span>:</p>
                                                                                <p className="formula">{"\\[P((X,Y)\\in A) = \\int_A f_{XY}(x,y),dx,dy\\]"}</p>

                                                                                <h1 id="3-4-conditional-distributions">3.4 Conditional Distributions</h1>
                                                                                <p>Discrete case:</p>
                                                                                <p className="formula">{"\\[p_{Y|X}(y|x) = \\frac{p_{XY}(x,y)}{p_X(x)}\\]"}</p>
                                                                                <p>Continuous case:</p>
                                                                                <p className="formula">{"\\[f_{Y|X}(y|x) = \\frac{f_{XY}(x,y)}{f_X(x)}\\]"}</p>

                                                                                <h1 id="3-5-bayes-rule">3.5 Bayes Rule</h1>
                                                                                <p>Discrete:</p>
                                                                                <p className="formula">{"\\[P_{Y|X}(y|x) =\n \\frac{P_{X|Y}(x|y)P_Y(y)}\n {\\sum_{y'}P_{X|Y}(x|y')P_Y(y')}\\]"}</p>
                                                                                <p>Continuous:</p>
                                                                                <p className="formula">{"\\[f_{Y|X}(y|x) =\n \\frac{f_{X|Y}(x|y)f_Y(y)}\n {\\int f_{X|Y}(x|y')f_Y(y')dy'}\\]"}</p>

                                                                                <h1 id="3-6-independence">3.6 Independence</h1>
                                                                                <p>Random variables are independent if</p>
                                                                                <p className="formula">{"\\[p_{XY}(x,y) = p_X(x)p_Y(y)\\]"}</p>
                                                                                <p>or</p>
                                                                                <p className="formula">{"\\[f_{XY}(x,y) = f_X(x)f_Y(y)\\]"}</p>

                                                                                <h1 id="3-7-covariance">3.7 Covariance</h1>
                                                                                <p className="formula">{"\\[Cov[X,Y] = E[(X-E[X])(Y-E[Y])]\\]"}</p>
                                                                                <p>Equivalent form:</p>
                                                                                <p className="formula">{"\\[Cov[X,Y] = E[XY] - E[X]E[Y]\\]"}</p>

                                                                                <h1 id="4-multiple-random-variables">4. Multiple Random Variables</h1>
                                                                                <p>For variables <span className="math">{"\\[X_1,...,X_n\\]"}</span>.</p>
                                                                                <p>Joint density:</p>
                                                                                <p className="formula">{"\\[f(x_1,...,x_n)\\]"}</p>
                                                                                <p>Chain rule:</p>
                                                                                <p className="formula">{"\\[f(x_1,...,x_n) =\n f(x_1)\\prod_{i=2}^{n} f(x_i|x_1,...,x_{i-1})\\]"}</p>

                                                                                <h1 id="random-vectors">Random Vectors</h1>
                                                                                <p>Random vector:</p>
                                                                                <p className="formula">{"\\[X=[X_1,X_2,...,X_n]^T\\]"}</p>
                                                                                <p>Expectation:</p>
                                                                                <p className="formula">{"\\[E[g(X)] = \\int g(x)f_X(x),dx\\]"}</p>

                                                                                <h1 id="covariance-matrix">Covariance Matrix</h1>
                                                                                <p className="formula">{"\\[\\Sigma = Cov(X)\\]"}</p>
                                                                                <p className="formula">{"\\[\\Sigma = E[(X-E[X])(X-E[X])^T]\\]"}</p>
                                                                                <p>Properties:</p>
                                                                                <ul>
                                                                                        <li>symmetric</li>
                                                                                        <li>positive semidefinite</li>
                                                                                </ul>

                                                                                <h1 id="multivariate-gaussian">Multivariate Gaussian</h1>
                                                                                <p className="formula">{"\\[X \\sim N(\\mu,\\Sigma)\\]"}</p>
                                                                                <p>Density:</p>
                                                                                <p className="formula">{"\\[f(x)=\n \\frac{1}{(2\\pi)^{n/2}|\\Sigma|^{1/2}}\n \\exp\\left(\n -\\frac12 (x-\\mu)^T\\Sigma^{-1}(x-\\mu)\n \\right)\\]"}</p>

                                                                                <h1 id="why-gaussian-distributions-matter">Why Gaussian Distributions Matter</h1>
                                                                                <ol>
                                                                                        <li>Noise often results from many small independent effects</li>
                                                                                        <li>By the <strong>Central Limit Theorem</strong>, sums of random variables tend to become Gaussian</li>
                                                                                        <li>Gaussian integrals often have closed-form solutions</li>
                                                                                </ol>

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
