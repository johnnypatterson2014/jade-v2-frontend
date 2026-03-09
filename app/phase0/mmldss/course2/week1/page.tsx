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
                                                Math for Machine Learning and Data Science
                                        </div>

                                        <div className='jade-h2 mb-[25px]'>
                                                Week 1: Derivatives & Optimization
                                        </div>

                                        <Tabs>
                                                <Tab2 title="Common Derivatives" isChecked={true}>
                                                        <TileRowCell0>


                                                                <h1 className='no-top-margin'>Common Derivatives</h1>

                                                                <div className='grid grid-cols-2 p-[0px] mt-[10px] mb-[20px] bg-zinc-700 w-[450px] outline-zinc-700 outline-1 outline-solid'>


                                                                        <div className='bg-zinc-900 p-[10px] m-[1px]'>
                                                                                constant
                                                                        </div>
                                                                        <div className='bg-zinc-900 p-[10px] m-[1px] text-lg'>
                                                                                <span className="math">{"\\[\\frac{d}{dx} a = 0\\]"}</span>
                                                                        </div>

                                                                        <div className='bg-zinc-900 p-[10px] m-[1px]'>
                                                                                line
                                                                        </div>
                                                                        <div className='bg-zinc-900 p-[10px] m-[1px] text-lg'>
                                                                                <span className="math">{"\\[\\frac{d}{dx} mx + b = m\\]"}</span>
                                                                        </div>

                                                                        <div className='bg-zinc-900 p-[10px] m-[1px]'>
                                                                                quadratic
                                                                        </div>
                                                                        <div className='bg-zinc-900 p-[10px] m-[1px] text-lg'>
                                                                                <span className="math">{"\\[\\frac{d}{dx} x^2 = 2x\\]"}</span>
                                                                        </div>

                                                                        <div className='bg-zinc-900 p-[10px] m-[1px]'>
                                                                                cubic
                                                                        </div>
                                                                        <div className='bg-zinc-900 p-[10px] m-[1px] text-lg'>
                                                                                <span className="math">{"\\[\\frac{d}{dx} x^3 = 3x^2\\]"}</span>
                                                                        </div>

                                                                        <div className='bg-zinc-900 p-[10px] m-[1px]'>
                                                                                generic power n
                                                                        </div>
                                                                        <div className='bg-zinc-900 p-[10px] m-[1px] text-lg'>
                                                                                <span className="math">{"\\[\\frac{d}{dx} x^n = nx^{n-1}\\]"}</span>
                                                                        </div>

                                                                        <div className='bg-zinc-900 p-[10px] m-[1px]'>
                                                                                reciprocal
                                                                        </div>
                                                                        <div className='bg-zinc-900 p-[10px] m-[1px] text-lg'>
                                                                                <span className="math">{"\\[\\frac{d}{dx} x^{-1} = -x^{-2}\\]"}</span> <br />or equivalently, <br /><br /> <span className="math">{"\\[\\frac{d}{dx} \\frac{1}{x} = \\frac{-1}{x^2}\\]"}</span>
                                                                        </div>

                                                                        <div className='bg-zinc-900 p-[10px] m-[1px]'>
                                                                                sin(x)
                                                                        </div>
                                                                        <div className='bg-zinc-900 p-[10px] m-[1px] text-lg'>
                                                                                <span className="math">{"\\[\\frac{d}{dx} sin(x) = cos(x)\\]"}</span>
                                                                        </div>

                                                                        <div className='bg-zinc-900 p-[10px] m-[1px]'>
                                                                                cos(x)
                                                                        </div>
                                                                        <div className='bg-zinc-900 p-[10px] m-[1px] text-lg'>
                                                                                <span className="math">{"\\[\\frac{d}{dx} cos(x) = -sin(x)\\]"}</span>
                                                                        </div>

                                                                        <div className='bg-zinc-900 p-[10px] m-[1px]'>
                                                                                exponent
                                                                        </div>
                                                                        <div className='bg-zinc-900 p-[10px] m-[1px] text-lg'>
                                                                                <span className="math">{"\\[\\frac{d}{dx} a^x = log(a)a^x\\]"}</span>
                                                                        </div>

                                                                        <div className='bg-zinc-900 p-[10px] m-[1px]'>
                                                                                euler's number
                                                                        </div>
                                                                        <div className='bg-zinc-900 p-[10px] m-[1px] text-lg'>
                                                                                <span className="math">{"\\[\\frac{d}{dx} e^x = e^x\\]"}</span>
                                                                        </div>


                                                                        <div className='bg-zinc-900 p-[10px] m-[1px]'>
                                                                                logarithms
                                                                        </div>
                                                                        <div className='bg-zinc-900 p-[10px] m-[1px] text-lg'>
                                                                                <span className="math">{"\\[\\frac{d}{dx} ln(x) = \\frac{1}{x}\\]"}</span>
                                                                        </div>



                                                                </div>

                                                                <h1>Motivation</h1>
                                                                <p>
                                                                        Why are derivatives important for ML? They are used to find the max/min of functions.
                                                                        Specifically, to minimize the loss function when training a ML model.
                                                                        ie. optimize the best possible prediction for the existing data.
                                                                </p>
                                                                <h1>Derivatives</h1>

                                                                <p>
                                                                        Instantaneous rate of change. eg. Velocity is the rate of change of distance wrt. time.
                                                                        aka. the slope of the tangent at a point on the graph of distance vs. time.

                                                                        Note: zero slope: tangent is a horizontal line. The max and min of a function will be
                                                                        at a place where the derivative (tangent) is zero.
                                                                </p>

                                                                <div className='m-[15px] justify-items-center'><img src='/screenshots/001.png' width='700px' /></div>
                                                                <div className='m-[15px] pb-[20px] justify-items-center'><img src='/screenshots/002.png' width='700px' /></div>

                                                                <h1>Non-Differentiable Functions</h1>
                                                                <p>A function is <strong>differentiable</strong> at a point if it has a unique, well-defined tangent line at
                                                                        that point.</p>
                                                                <p>There are three main ways a function can fail to be differentiable:</p>
                                                                <h3>1. Corners or Cusps</h3>
                                                                <p>Example: <span className='math'>{"\\[|x|\\]"}</span> at <span className='math'>{"\\[x = 0\\]"}</span></p>

                                                                <h3 id="2-jump-discontinuities">2. Jump Discontinuities</h3>
                                                                <p>Example: A piecewise function with a sudden jump.</p>

                                                                <h3 id="3-vertical-tangents">3. Vertical Tangents</h3>
                                                                <p>Example: <span className='math'>{"\\[x^{1/3}\\]"}</span> at <span className='math'>{"\\[x = 0\\]"}</span></p>

                                                                <div className='m-[15px] pt-[10px] justify-items-center'><img src='/screenshots/021.png' width='700px' /></div>
                                                                <div className='m-[15px] justify-items-center'><img src='/screenshots/022.png' width='700px' /></div>



                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="Derivatives" isChecked={false}>
                                                        <TileRowCell0>


                                                                <h1>Derivatives</h1>
                                                                <h2>Constant and Linear Functions</h2>
                                                                <ul>
                                                                        <li>A constant function (a horizontal line) has no change in y, so its derivative is <strong>0</strong>.</li>
                                                                        <li>A linear function has a constant slope ( a ). Therefore, its derivative is <strong>a</strong>.</li>
                                                                </ul>

                                                                <div className='m-[15px] pt-[10px] justify-items-center'><img src='/screenshots/003.png' width='700px' /></div>
                                                                <div className='m-[15px] pb-[20px] justify-items-center'><img src='/screenshots/004.png' width='700px' /></div>

                                                                <h1>Generalized Power Rule</h1>

                                                                <p>For any power function:</p>
                                                                <div className='formula'><p style={{ textAlign: "center" }}>{"\\[\\frac{d}{dx}(x^n) = n x^{n-1}\\]"}</p></div>

                                                                <ul>
                                                                        <li>For example, the derivative of {"\\[x^2\\]"} is <strong>2x</strong>.</li>
                                                                        <li>The derivative of {"\\[x^3\\]"} is <strong>{"\\[3x^2\\]"}</strong>.</li>
                                                                </ul>

                                                                <h1>Derivative of Reciprocals: {"\\(\\frac{1}{x}\\)"}</h1>
                                                                <ul>
                                                                        <li>Using the same limit process, slopes converge to a negative value.</li>
                                                                        <li>At ( x = 1 ), the derivative is -1.</li>
                                                                        <li>In general, the derivative of <span className='math'>{"\\(x^{-1}\\)"}</span> is <span className='math'>{"\\(-x^{-2}\\)"}</span> or <span className='math'>{"\\(\\frac{-1}{x^2}\\)"}</span></li>
                                                                </ul>

                                                                <div className='m-[15px] pt-[10px] pb-[20px] justify-items-center'><img src='/screenshots/007.png' width='700px' /></div>

                                                                <h1>Derivatives of Trig functions</h1>

                                                                <ul>
                                                                        <li>The derivative of <strong>sin(x)</strong> is <strong>cos(x)</strong></li>
                                                                        <li>The derivative of <strong>cos(x)</strong> is <strong>−sin(x)</strong></li>
                                                                </ul>

                                                                <div className='m-[15px] pt-[10px] justify-items-center'><img src='/screenshots/012.png' width='700px' /></div>
                                                                <div className='m-[15px] justify-items-center'><img src='/screenshots/013.png' width='700px' /></div>
                                                                <div className='m-[15px] pb-[20px] justify-items-center'><img src='/screenshots/014.png' width='700px' /></div>

                                                                <h1>Derivatives of Exponents <span className="math">{"\\[a^x\\]"}</span></h1>
                                                                <ul>
                                                                        <li>The derivative of <span className="math">{"\\[a^x\\]"}</span> is: <span className="math">{"\\[\\log(a)a^x\\]"}</span></li>

                                                                </ul>

                                                                <div className='m-[15px] pt-[10px] pb-[20px] justify-items-center'><img src='/screenshots/019.png' width='700px' /></div>

                                                                <h1>Euler's Number and the Exponential Function</h1>
                                                                <p>The exponential function is built around <strong>Euler’s number (e)</strong>, a special irrational number
                                                                        approximately equal to:</p>
                                                                <p className="math">{"\\[e \\approx 2.71828182...\\]"}</p>
                                                                <p>One important way to define ( e ) is through the limit:</p>
                                                                <p className="math">{"\\[\\left(1 + \\frac{1}{n}\\right)^n\\]"}</p>
                                                                <p>As ( n ) becomes very large, this expression approaches ( e ).</p>

                                                                <h3>The Key Property of the Exponential Function</h3>
                                                                <p>For the function:</p>
                                                                <p className="math">{"\\[e^x\\]"}</p>
                                                                <p>A remarkable property holds:</p>
                                                                <p className="math">{"\\[\\frac{d}{dx} e^x = e^x\\]"}</p>
                                                                <p>The function is <strong>its own derivative</strong>.</p>

                                                                <h1 className='mt-[15px]'>Derivatives of Logarithms</h1>
                                                                <p>The natural logarithm is defined as the inverse of: {"\\[e^x\\]"}</p>

                                                                <ul>
                                                                        <li>If <span className='math'>{"\\[e^y = x\\]"}</span> then <span className='math'>{"\\[y = \\ln(x)\\]"}</span>.</li>
                                                                        <li>So <span className='math'>{"\\[\\ln(x)\\]"}</span> is the number you must raise ( e ) to in order to get ( x ).</li>
                                                                </ul>
                                                                <p>Because <span className='math'>{"\\[e^x\\]"}</span> and <span className='math'>{"\\[\\ln(x)\\]"}</span> are inverses:</p>
                                                                <ul>
                                                                        <li>Reflecting the graph of <span className='math'>{"\\[e^x\\]"}</span> over the line ( y = x ) gives the graph of <span className='math'>{"\\[\\ln(x)\\]"}</span>.</li>
                                                                </ul>
                                                                <p>Using the inverse function derivative rule:</p>
                                                                <p className="formula">{"\\[\\frac{d}{dx} \\ln(x) = \\frac{1}{x}\\]"}</p>
                                                                <p>So:</p>
                                                                <ul>
                                                                        <li><span className='math'>{"\\[\\frac{d}{dx} e^x = e^x\\]"}</span> <br /><br /></li>
                                                                        <li><span className='math'>{"\\[\\frac{d}{dx} \\ln(x) = \\frac{1}{x}\\]"}</span></li>
                                                                </ul>

                                                                <div className='m-[15px] pt-[10px] justify-items-center'><img src='/screenshots/020.png' width='700px' /></div>

                                                                <div className='m-[15px] justify-items-center'><img src='/screenshots/009.png' width='700px' /></div>

                                                                <div className='m-[15px]  justify-items-center'>
                                                                        <img src='/screenshots/010.png' width='700px' />
                                                                </div>
                                                                <div className='m-[15px]  justify-items-center'>
                                                                        <img src='/screenshots/015.png' width='700px' />
                                                                </div>
                                                                <div className='m-[15px]  justify-items-center'>
                                                                        <img src='/screenshots/016.png' width='700px' />
                                                                </div>
                                                                <div className='m-[15px]  justify-items-center'>
                                                                        <img src='/screenshots/017.png' width='700px' />
                                                                </div>
                                                                <div className='m-[15px] pb-[20px] justify-items-center'>
                                                                        <img src='/screenshots/018.png' width='700px' />
                                                                </div>

                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="Derivative Rules" isChecked={false}>
                                                        <TileRowCell0>



                                                                <h1 className='no-top-margin'>Properties of the Derivative</h1>
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

                                                                <h2 id="2-sum-rule">2. Sum Rule</h2>
                                                                <p>If a function is the sum of two functions:</p>
                                                                <p className="formula">{"\\[f(x) = g(x) + h(x)\\]"}</p>
                                                                <p>then</p>
                                                                <p className="formula">{"\\[f'(x) = g′(x) + h'(x)\\]"}</p>
                                                                <strong>Why this works:</strong>
                                                                <p>Just as distances or velocities add, rates of change also add. If two quantities change over time and are
                                                                        added together, their total rate of change is the sum of their individual rates.</p>


                                                                <div className='m-[15px] pt-[10px] justify-items-center'><img src='/screenshots/024.png' width='700px' /></div>


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
                                                                        <img src='/screenshots/025.png' width='700px' />
                                                                </div>

                                                                <h3>For example:</h3>
                                                                <ul>
                                                                        <li>the cost to build a wall in one direction is <span className="math">{"\\[g(t)\\]"}</span> (cost over time)</li>
                                                                        <li>the cost to build a wall in another direction is <span className="math">{"\\[h(t)\\]"}</span></li>
                                                                        <li>the total cost is the area, <span className="math">{"\\[f(t) = g(t) \\cdot h(t)\\]"}</span> (cost as a function over time)</li>
                                                                        <li>we want to calculate the derivative: <span className="math">{"\\[f'(t)\\]"}</span> (so we can determine the minimum cost)</li>
                                                                        <li>we can also think of the derivative here as the 'rate of change' of the area with respect to time. </li>
                                                                </ul>

                                                                <div className='m-[15px] pt-[10px] justify-items-center'>
                                                                        <img src='/screenshots/026.png' width='700px' />
                                                                </div>


                                                                <ul>
                                                                        <li>imagine the workers build a little side-wall delta g and delta h</li>
                                                                        <li>the calculations for the newly built areas are shown in blue</li>
                                                                        <li>the rate of change of the area (wrt. time) is delta f(t) / delta t - which is the sum of the blue areas</li>
                                                                        <li>we take the derivative as delta t goes to zero</li>
                                                                        <li>note that h(t) is the length along the x-axis and g(t) is the length of the y-axis, thus they are the functions h(t) and g(t) evaluated at time t. </li>

                                                                </ul>

                                                                <div className='m-[15px] pt-[10px] justify-items-center'>
                                                                        <img src='/screenshots/027.png' width='700px' />
                                                                </div>

                                                                <h3>Example</h3>
                                                                <ul>
                                                                        <li>given that: <span className="math">{"\\[f(x) = x \\cdot e^x\\]"}</span></li>
                                                                        <li>find: <span className="math">{"\\[f'(x)\\]"}</span></li>

                                                                </ul>
                                                                <h3>Answer: </h3>
                                                                <p className="math">{"\\[f'(x) = e^x + x \\cdot e^x\\]"}</p>


                                                                <div className='m-[15px] pt-[10px] justify-items-center'>
                                                                        <img src='/screenshots/IMG_4679.png' width='600px' />
                                                                </div>


                                                                <h2 id="4-chain-rule">4. Chain Rule</h2>
                                                                <p>If a function is a composition:</p>
                                                                <p className="math">{"\\[y = g(h(t))\\]"}</p>
                                                                <p>then</p>
                                                                <p className="math">{"\\[\\frac{dy}{dt} = \\frac{dg}{dh} \\cdot \\frac{dh}{dt}\\]"}</p>
                                                                <p>In standard notation:</p>
                                                                <p className="math">{"\\[f(x) = g(h(x))\\]"}</p>
                                                                <p>then</p>
                                                                <p className="math">{"\\[f′(x) = g′(h(x)) \\cdot h′(x)\\]"}</p>
                                                                <p>ie. it is g-prime times h-prime, but the input to g-prime is whatever was passed into g - and what was passed to g was h(x).</p>

                                                                <div className='m-[15px] pt-[10px] justify-items-center'>
                                                                        <img src='/screenshots/028.png' width='700px' />
                                                                </div>

                                                                <div className='m-[15px] pt-[10px] justify-items-center'>
                                                                        <img src='/screenshots/029.png' width='700px' />
                                                                </div>
                                                                <div className='m-[15px] pt-[10px] justify-items-center'>
                                                                        <img src='/screenshots/030.png' width='700px' />
                                                                </div>
                                                                <div className='m-[15px] pt-[10px] justify-items-center'>
                                                                        <img src='/screenshots/031.png' width='700px' />
                                                                </div>
                                                                <div className='m-[15px] pt-[10px] justify-items-center'>
                                                                        <img src='/screenshots/032.png' width='700px' />
                                                                </div>


                                                                <h3>Example</h3>
                                                                <ul>
                                                                        <li>given that: <span className="math">{"\\[f(x) = e^{2x}\\]"}</span></li>
                                                                        <li>find: <span className="math">{"\\[f'(x)\\]"}</span></li>

                                                                </ul>
                                                                <h3>Answer: </h3>
                                                                <p className="math">{"\\[f'(x) = 2 \\cdot e^{2x}\\]"}</p>


                                                                <div className='m-[15px] pt-[10px] justify-items-center'>
                                                                        <img src='/screenshots/IMG_4680.png' width='700px' />
                                                                </div>

                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="Derivatives in python" isChecked={false}>
                                                        <TileRowCell0>


                                                                <div className='flex-1 jade-code min-w-[800px] max-w-[1000px]'>
                                                                        <div dangerouslySetInnerHTML={createMarkup(html)} />
                                                                </div>

                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="Labs & Assignments" isChecked={false}>
                                                        <TileRowCell0>

                                                                <div className='lab-links'>

                                                                        <ul>
                                                                                <li><a href="/C2_W1_Lab_1_differentiation_in_python.html" target="_blank">Lab: Differentiation in Python</a></li>
                                                                                <li><a href="/C2_W1_Assignment.html" target="_blank">Assignment: Optimizing Functions of One Variable</a></li>

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
