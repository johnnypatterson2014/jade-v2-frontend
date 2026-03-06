'use client';

import Image from "next/image";
import Tabs from '@/components/client/Tabs';
import Tab2 from '@/components/client/Tab2';
import Button from '@/components/client/Button';
import Modal from '@/components/client/Modal';
import Testing from '@/components/client/Testing';
import TileRowCell0 from '@/components/client/TileRowCell0';
import { MathJaxContext } from "better-react-mathjax";
import React, { useState, useEffect } from 'react';


export default function Home() {
        const [htmlContent, setHtmlContent] = useState('');

        useEffect(() => {
                // Example: fetching an HTML file from the public folder
                async function fetchHtml() {
                        try {
                                const response = await fetch('/C2_W3_Lab_2_Classification_with_Perceptron.html'); // Ensure file is in the public directory /C2_W1_Assignment.html
                                const html2 = await response.text();
                                setHtmlContent(html2);
                        } catch (error) {
                                console.error('Error fetching HTML file:', error);
                        }
                }
                fetchHtml();

                async function getGraphFromAPI() {

                }

                // Check if MathJax is loaded and available in the window object
                if (typeof window?.MathJax !== "undefined") {
                        window.MathJax.typeset(); // Triggers typesetting
                }
        }, []);

        function createMarkup(content: any) {
                return { __html: content };
        }

        function createModalMarkup() {
                return { __html: htmlContent };
        }

        const viewModal = (modal_id: string, e?: any) => {
                e?.preventDefault()
                document.getElementById('modal-' + modal_id).showModal()
        }

        const html = `
        <div dir="ltr">
        <div style="color:rgb(204,204,204);font-family:monospace;font-size:14px;line-height:18px;">
          <div class="adM"><br></div>
          <div><span style="color:rgb(197,134,192)">import</span> <span style="color:rgb(78,201,176)">numpy</span> <span
              style="color:rgb(197,134,192)">as</span> <span style="color:rgb(78,201,176)">np</span></div>
          <div><span style="color:rgb(197,134,192)">import</span> <span style="color:rgb(78,201,176)">math</span></div>
          <div><span style="color:rgb(197,134,192)">import</span> <span style="color:rgb(78,201,176)">sympy</span> <span
              style="color:rgb(197,134,192)">as</span> <span style="color:rgb(78,201,176)">sympy</span></div>
          <div><span style="color:rgb(197,134,192)">from</span> <span style="color:rgb(78,201,176)">sympy</span>.<span
              style="color:rgb(78,201,176)">utilities</span>.<span style="color:rgb(78,201,176)">lambdify</span> <span
              style="color:rgb(197,134,192)">import</span> <span style="color:rgb(220,220,170)">lambdify</span></div><br>
          <div><span style="color:rgb(106,153,85)"># ------------------------------<wbr>-------</span></div>
          <div><span style="color:rgb(106,153,85)"># Introduction to Symbolic Computation with 'SymPy'</span></div><br>
          <div><span style="color:rgb(106,153,85)"># use SymPy to declare expressions with variables</span></div>
          <div><span style="color:rgb(106,153,85)"># let's use: 2x^2 - xy</span></div>
          <div><span style="color:rgb(156,220,254)">x</span>, <span style="color:rgb(156,220,254)">y</span> <span
              style="color:rgb(212,212,212)">=</span> <span style="color:rgb(78,201,176)">sympy</span>.<span
              style="color:rgb(220,220,170)">symbols</span>(<span style="color:rgb(206,145,120)">'x y'</span>)</div>
          <div><span style="color:rgb(156,220,254)">expr</span> <span style="color:rgb(212,212,212)">=</span> <span
              style="color:rgb(181,206,168)">2</span> <span style="color:rgb(212,212,212)">*</span> <span
              style="color:rgb(156,220,254)">x</span><span style="color:rgb(212,212,212)">**</span><span
              style="color:rgb(181,206,168)">2</span> <span style="color:rgb(212,212,212)">-</span> <span
              style="color:rgb(156,220,254)">x</span> <span style="color:rgb(212,212,212)">*</span> <span
              style="color:rgb(156,220,254)">y</span></div><br>
          <div><span style="color:rgb(106,153,85)"># Now you can perform various manipulations with this expression: </span>
          </div>
          <div><span style="color:rgb(106,153,85)"># add or subtract some terms, multiply by other expressions etc., </span>
          </div>
          <div><span style="color:rgb(106,153,85)"># just like if you were doing it by hand</span></div>
          <div><span style="color:rgb(156,220,254)">expr_manip</span> <span style="color:rgb(212,212,212)">=</span> <span
              style="color:rgb(156,220,254)">x</span> <span style="color:rgb(212,212,212)">*</span> (<span
              style="color:rgb(156,220,254)">expr</span> <span style="color:rgb(212,212,212)">+</span> <span
              style="color:rgb(156,220,254)">x</span> <span style="color:rgb(212,212,212)">*</span> <span
              style="color:rgb(156,220,254)">y</span> <span style="color:rgb(212,212,212)">+</span> <span
              style="color:rgb(156,220,254)">x</span><span style="color:rgb(212,212,212)">**</span><span
              style="color:rgb(181,206,168)">3</span>) &nbsp;<span style="color:rgb(106,153,85)"># result: x * (x^3 +
              2x^2)</span></div><br>
          <div><span style="color:rgb(106,153,85)"># You can also expand the expression:</span></div>
          <div><span style="color:rgb(78,201,176)">sympy</span>.<span style="color:rgb(220,220,170)">expand</span>(<span
              style="color:rgb(156,220,254)">expr_manip</span>) &nbsp;<span style="color:rgb(106,153,85)"># result: x^4 +
              2x^3</span></div><br>
          <div><span style="color:rgb(106,153,85)"># Or factorise it:</span></div>
          <div><span style="color:rgb(78,201,176)">sympy</span>.<span style="color:rgb(220,220,170)">factor</span>(<span
              style="color:rgb(156,220,254)">expr_manip</span>) &nbsp;<span style="color:rgb(106,153,85)"># result: x^3 (x +
              2)</span></div><br>
          <div><span style="color:rgb(106,153,85)"># To substitute particular values for the variables in the
              expression:</span></div>
          <div><span style="color:rgb(156,220,254)">expr</span>.evalf(<span style="color:rgb(156,220,254)">subs</span><span
              style="color:rgb(212,212,212)">=</span>{<span style="color:rgb(156,220,254)">x</span>:<span
              style="color:rgb(212,212,212)">-</span><span style="color:rgb(181,206,168)">1</span>, <span
              style="color:rgb(156,220,254)">y</span>:<span style="color:rgb(181,206,168)">2</span>}) &nbsp;<span
              style="color:rgb(106,153,85)"># result: 4.0</span></div><br>
          <div><span style="color:rgb(106,153,85)"># To evaluate the expression on an array of values:</span></div>
          <div><span style="color:rgb(156,220,254)">x_array</span> <span style="color:rgb(212,212,212)">=</span> <span
              style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">array</span>([<span
              style="color:rgb(181,206,168)">1</span>, <span style="color:rgb(181,206,168)">2</span>, <span
              style="color:rgb(181,206,168)">3</span>])</div><br>
          <div><span style="color:rgb(106,153,85)"># first, you need to make a function 'NumPy'-friendly first using
              lambdify:</span></div>
          <div><span style="color:rgb(156,220,254)">f_symb_numpy</span> <span style="color:rgb(212,212,212)">=</span> <span
              style="color:rgb(220,220,170)">lambdify</span>(<span style="color:rgb(156,220,254)">x</span>, <span
              style="color:rgb(156,220,254)">expr</span>, <span style="color:rgb(206,145,120)">'numpy'</span>)</div><br>
          <div><span style="color:rgb(106,153,85)"># now run the expr with an array as input:</span></div>
          <div><span style="color:rgb(156,220,254)">f_symb_numpy</span>(<span style="color:rgb(156,220,254)">x_array</span>)
          </div><br>
          <div><span style="color:rgb(106,153,85)"># ------------------------------<wbr>-------</span></div>
          <div><span style="color:rgb(106,153,85)"># Symbolic Differentiation with 'SymPy'</span></div><br>
          <div><span style="color:rgb(106,153,85)"># Let's try to find a derivative of a simple power function using
              'SymPy':</span></div>
          <div><span style="color:rgb(78,201,176)">sympy</span>.<span style="color:rgb(220,220,170)">diff</span>(<span
              style="color:rgb(156,220,254)">x</span><span style="color:rgb(212,212,212)">**</span><span
              style="color:rgb(181,206,168)">3</span>,<span style="color:rgb(156,220,254)">x</span>) &nbsp;<span
              style="color:rgb(106,153,85)"># result: 3x^2</span></div><br>
          <div><span style="color:rgb(106,153,85)"># Some standard functions can be used in the expression, and 'SymPy'
            </span></div>
          <div><span style="color:rgb(106,153,85)"># will apply required rules (sum, product, chain) to calculate the
              derivative:</span></div>
          <div><span style="color:rgb(156,220,254)">dfdx_composed</span> <span style="color:rgb(212,212,212)">=</span> <span
              style="color:rgb(78,201,176)">sympy</span>.<span style="color:rgb(220,220,170)">diff</span>(<span
              style="color:rgb(78,201,176)">sympy</span>.<span style="color:rgb(78,201,176)">exp</span>(<span
              style="color:rgb(212,212,212)">-</span><span style="color:rgb(181,206,168)">2</span><span
              style="color:rgb(212,212,212)">*</span><span style="color:rgb(156,220,254)">x</span>) <span
              style="color:rgb(220,220,170)">+</span> <span style="color:rgb(181,206,168)">3</span><span
              style="color:rgb(212,212,212)">*</span><span style="color:rgb(78,201,176)">sympy</span>.<span
              style="color:rgb(78,201,176)">sin</span>(<span style="color:rgb(181,206,168)">3</span><span
              style="color:rgb(212,212,212)">*</span><span style="color:rgb(156,220,254)">x</span>), <span
              style="color:rgb(156,220,254)">x</span>)</div>
          <div><span style="color:rgb(106,153,85)"># result: 9cos(3𝑥)−2𝑒^−2𝑥</span></div><br>
          <div><span style="color:rgb(106,153,85)"># Now calculate the derivative of the function 'f_symb' </span></div>
          <div><span style="color:rgb(106,153,85)"># and make it 'NumPy'-friendly:</span></div>
          <div><span style="color:rgb(156,220,254)">f_symb</span> <span style="color:rgb(212,212,212)">=</span> <span
              style="color:rgb(156,220,254)">x</span> <span style="color:rgb(212,212,212)">**</span> <span
              style="color:rgb(181,206,168)">2</span></div>
          <div><span style="color:rgb(156,220,254)">dfdx_symb</span> <span style="color:rgb(212,212,212)">=</span> <span
              style="color:rgb(78,201,176)">sympy</span>.<span style="color:rgb(220,220,170)">diff</span>(<span
              style="color:rgb(156,220,254)">f_symb</span>, <span style="color:rgb(156,220,254)">x</span>)</div>
          <div><span style="color:rgb(156,220,254)">dfdx_symb_numpy</span> <span style="color:rgb(212,212,212)">=</span> <span
              style="color:rgb(220,220,170)">lambdify</span>(<span style="color:rgb(156,220,254)">x</span>, <span
              style="color:rgb(156,220,254)">dfdx_symb</span>, <span style="color:rgb(206,145,120)">'numpy'</span>)</div><br>
          <div><span style="color:rgb(106,153,85)"># Evaluate function 'dfdx_symb_numpy' for each element of the
              'x_array':</span></div>
          <div><span style="color:rgb(156,220,254)">f_prime_x</span> <span style="color:rgb(212,212,212)">=</span> <span
              style="color:rgb(156,220,254)">dfdx_symb_numpy</span>(<span style="color:rgb(156,220,254)">x_array</span>)</div>
          <div><span style="color:rgb(106,153,85)"># f'(x) = 2x</span></div>
          <div><span style="color:rgb(106,153,85)"># f_prime_x = [2 4 6]</span></div><br>
          <div><span style="color:rgb(106,153,85)">### note: Symbolic Differentiation has some limitations. Sometimes the
              output </span></div>
          <div><span style="color:rgb(106,153,85)"># expressions are too complicated and even not possible to evaluate. For
            </span></div>
          <div><span style="color:rgb(106,153,85)"># example, the derivative of the function |x| is undefined at zero. </span>
          </div><br>
          <div><span style="color:rgb(106,153,85)">### note: an alternate approach to calculating the derivative is to do
              a</span></div>
          <div><span style="color:rgb(106,153,85)"># numerical approximation. One method is the np.gradient function from
              numpy:</span></div>
          <div><span style="color:rgb(156,220,254)">x_array_2</span> <span style="color:rgb(212,212,212)">=</span> <span
              style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">linspace</span>(<span
              style="color:rgb(212,212,212)">-</span><span style="color:rgb(181,206,168)">5</span>, <span
              style="color:rgb(181,206,168)">5</span>, <span style="color:rgb(181,206,168)">100</span>)</div>
          <div><span style="color:rgb(156,220,254)">dfdx_numerical</span> <span style="color:rgb(212,212,212)">=</span> <span
              style="color:rgb(78,201,176)">np</span>.<span style="color:rgb(220,220,170)">gradient</span>(f(<span
              style="color:rgb(156,220,254)">x_array_2</span>), <span style="color:rgb(156,220,254)">x_array_2</span>)</div>
          <br>
          <div><span style="color:rgb(106,153,85)"># ------------------------------<wbr>-------</span></div>
          <div><span style="color:rgb(106,153,85)"># Automatic Differentiation with 'JAX' </span></div>
          <div><span style="color:rgb(106,153,85)">#</span></div>
          <div><span style="color:rgb(106,153,85)"># **Automatic differentiation** (autodiff) method breaks down the function
            </span></div>
          <div><span style="color:rgb(106,153,85)"># into common functions ($sin$, $cos$, $log$, power functions, etc.), and
            </span></div>
          <div><span style="color:rgb(106,153,85)"># constructs the computational graph consisting of the basic functions.
            </span></div>
          <div><span style="color:rgb(106,153,85)"># Then the chain rule is used to compute the derivative at any node of the
            </span></div>
          <div><span style="color:rgb(106,153,85)"># graph. It is the most commonly used approach in machine learning </span>
          </div>
          <div><span style="color:rgb(106,153,85)"># applications and neural networks, as the computational graph for the
            </span></div>
          <div><span style="color:rgb(106,153,85)"># function and its derivatives can be built during the construction of the
            </span></div>
          <div><span style="color:rgb(106,153,85)"># neural network, saving in future computations.</span></div>
          <div><span style="color:rgb(106,153,85)">#</span></div>
          <div><span style="color:rgb(106,153,85)"># 'Autograd' and 'JAX' are the most commonly used frameworks to build
            </span></div>
          <div><span style="color:rgb(106,153,85)"># neural networks. 'JAX' brings together 'Autograd' functionality for
            </span></div>
          <div><span style="color:rgb(106,153,85)"># optimization problems, and 'XLA' (Accelerated Linear Algebra) compiler
            </span></div>
          <div><span style="color:rgb(106,153,85)"># for parallel computing.</span></div>
        </div>
      </div>
      `

        return (
                <>
                        <MathJaxContext>
                                <div className='mt-[0px] ml-[40px] mr-[20px] mb-[10px]'>

                                        <div className='jade-h1'>
                                                Style Guide Template
                                        </div>

                                        <div className='jade-h2 mb-[25px]'>
                                                subheading
                                        </div>

                                        <Tabs>

                                                <Tab2 title="Derivative Rules" isChecked={true}>


                                                        <div className='flex flex-row gap-[10px] mb-[20px]'>
                                                                <div>
                                                                        <Button>
                                                                                <a onClick={() => viewModal('test')}>show modal with dynamic html from server</a>
                                                                        </Button>
                                                                </div>

                                                                <div>
                                                                        <Button>
                                                                                <a href="/C2_W3_Lab_3_Optimization_Using_Newtons_Method.html" target="_blank">open lab in new window</a>
                                                                        </Button>
                                                                </div>
                                                        </div>

                                                        <div>
                                                                <Testing />
                                                        </div>

                                                        <TileRowCell0>

                                                                <h1>Properties of the Derivative</h1>
                                                                <p>To differentiate more complicated functions, we use four fundamental rules:
                                                                        scalar multiplication rule, sum rule, product rule, and chain rule.</p>

                                                                <h2 id="1-scalar-multiplication-rule">1. Scalar Multiplication Rule</h2>
                                                                <p>If a function is multiplied by a constant:</p>
                                                                <p className="formula">{"\\[f(x) = c \\cdot g(x)\\]"}</p>
                                                                <p>then its derivative is:</p>
                                                                <p className="formula">{"\\[f'(x) = c \\cdot g'(x)\\]"}</p>
                                                                <strong>Why this works:</strong>
                                                                <p>Multiplying a function by a constant stretches it vertically. This multiplies every rise (vertical change)
                                                                        by c while the run (horizontal change) remains the same. Since slope = rise/run, all slopes — and therefore
                                                                        the derivative — are multiplied by c.</p>


                                                                <h3>Example</h3>
                                                                <ul>
                                                                        <li>If <span className="math">{"\\[f(x) = 2x\\]"}</span></li>
                                                                        <li>and <span className="math">{"\\[g(x) = x^2\\]"}</span></li>
                                                                        <li>then what is: <span className="math">{"\\[(f + g)'(x)\\]"}</span> ? </li>
                                                                </ul>
                                                                <h3>Answer: </h3>
                                                                <p className="math">{"\\[(f + g)'(x) = 2 + 2x\\]"}</p>


                                                                <div className='m-[15px] pt-[10px] justify-items-center'>
                                                                        <img src='/screenshots/IMG_4678-b.png' width='500px' />
                                                                </div>

                                                                <h2 id="3-product-rule">3. Product Rule</h2>
                                                                <p>If a function is the product of two functions:</p>
                                                                <p className="math">{"\\[f(x) = g(x) \\cdot h(x)\\]"}</p>
                                                                <p>then</p>
                                                                <p className="math">{"\\[f′(x) = g′(x)h(x) + g(x)h′(x)\\]"}</p>
                                                                <strong>Why this works:</strong>
                                                                <p>When both factors change, the total change comes from:</p>
                                                                <ul>
                                                                        <li>The first changing while the second stays fixed</li>
                                                                        <li>The second changing while the first stays fixed</li>
                                                                </ul>
                                                                <div className='m-[15px] pt-[10px] justify-items-center'>
                                                                        <img src='/screenshots/023.png' width='700px' />
                                                                </div>

                                                                <div className='m-[15px] pt-[10px] justify-items-center'>
                                                                        <div className='flex-1 jade-code min-w-[800px] max-w-[800px]'>
                                                                                <div dangerouslySetInnerHTML={createMarkup(html)} />
                                                                        </div>
                                                                </div>



                                                        </TileRowCell0>
                                                </Tab2>



                                        </Tabs>


                                </div>


                                <Modal id="modal-test">
                                        <div className='jupyter-nb'>

                                                <div dangerouslySetInnerHTML={createModalMarkup()} />

                                        </div>
                                </Modal>

                        </MathJaxContext>
                </>
        );
}
