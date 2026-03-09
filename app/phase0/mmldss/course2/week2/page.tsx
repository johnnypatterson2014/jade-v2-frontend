'use client';

import Image from "next/image";
import Tabs from '@/components/client/Tabs';
import Tab from '@/components/client/Tab';
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

        return (
                <>
                        <MathJaxContext>
                                <div className='mt-[0px] ml-[40px] mr-[20px] mb-[10px]'>

                                        <div className='jade-h1'>
                                                Math for Machine Learning and Data Science
                                        </div>

                                        <div className='jade-h2 mb-[25px]'>
                                                Week 2: Gradients & Gradient Descent
                                        </div>

                                        <Tabs>
                                                <Tab2 title="Tangent Planes" isChecked={true}>
                                                        <TileRowCell0>



                                                                <h1 className='no-top-margin'>Intro to Tangent Planes</h1>

                                                                <p>In Week 2, the focus shifts from functions of one variable to functions of two or more variables. Concepts from single-variable calculus—such as tangent lines and derivatives—are generalized to higher dimensions.</p>
                                                                <p>In one variable, the derivative represents the slope of a tangent line. For example, with <span className="math">{"\\[f(x) = x^2\\]"}</span>, the derivative gives the slope of the tangent line at any point on the parabola.</p>
                                                                <p>With two variables, such as <span className="math">{"\\[f(x, y) = x^2 + y^2\\]"}</span>, the function must be graphed in three dimensions:</p>
                                                                <ul>
                                                                        <li><span className="math">{"\\[x\\]"}</span> and <span className="math">{"\\[y\\]"}</span> form the horizontal plane</li>
                                                                        <li><span className="math">{"\\[z = f(x, y)\\]"}</span> represents height</li>
                                                                </ul>
                                                                <p>Instead of a tangent line, we now get a <strong>tangent plane</strong>.</p>
                                                                <p>To construct the tangent plane:</p>
                                                                <ul>
                                                                        <li>Fix one variable (e.g., <span className="math">{"\\[y = 4\\]"}</span>) to create a slice of the surface.</li>
                                                                        <li>This produces a curve (a parabola), whose derivative with respect to the remaining variable gives a tangent line.</li>
                                                                        <li>Repeat by fixing the other variable (e.g., <span className="math">{"\\[x = 2\\]"}</span>) and find the second tangent line.</li>
                                                                        <li>The two intersecting tangent lines uniquely determine a plane — the tangent plane.</li>
                                                                </ul>
                                                                <p>This idea extends to optimization in higher dimensions. Optimizing multivariable functions can be complex, especially computationally, so methods like <strong>gradient descent</strong> will be introduced to efficiently optimize such functions, including applications in machine learning.</p>


                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="Partial Derivatives" isChecked={false}>
                                                        <TileRowCell0>

                                                                <h1 className='no-top-margin'>Partial Derivatives</h1>
                                                                <p>Partial derivatives describe how a function of multiple variables changes when we vary <strong>only one variable at a time</strong>, keeping the others constant.</p>
                                                                <p>To visualize this, imagine a function of two variables</p>

                                                                <div className='formula'>{"\\[f(x, y)\\]"}</div>
                                                                <p>plotted as a surface in 3D space. If we:</p>
                                                                <ul>
                                                                        <li><strong>Fix y</strong> at a specific value (for example, y = 4),
                                                                                the surface is sliced by a vertical plane.</li>
                                                                        <li>This slice creates a curve (like a parabola).</li>
                                                                        <li>The slope of the tangent line to that curve at a point is the <strong>partial derivative with respect to x</strong>.</li>
                                                                </ul>
                                                                <p>Similarly:</p>
                                                                <ul>
                                                                        <li>If we <strong>fix x</strong> instead,</li>
                                                                        <li>We get another curve,</li>
                                                                        <li>And the slope of its tangent line is the <strong>partial derivative with respect to y</strong>.</li>
                                                                </ul>

                                                                <h2>How to Compute a Partial Derivative</h2>
                                                                <p>Given the function:</p>

                                                                <div className='formula'>{"\\[f(x, y) = x^2 + y^2\\]"}</div>
                                                                <h3 id="1-partial-derivative-with-respect-to-x">1. Partial derivative with respect to x</h3>
                                                                <ul>
                                                                        <li>Treat y as a constant.</li>
                                                                        <li>Differentiate using normal derivative rules.</li>
                                                                </ul>

                                                                <div className='formula'>{"\\[\\frac{\\partial f}{\\partial x} = 2x\\]"}</div>
                                                                <ul>
                                                                        <li>The derivative of x² is 2x.</li>
                                                                        <li>The derivative of y² is 0 because it is treated as a constant.</li>
                                                                </ul>

                                                                <h3 id="2-partial-derivative-with-respect-to-y">2. Partial derivative with respect to y</h3>
                                                                <ul>
                                                                        <li>Treat x as a constant.</li>
                                                                        <li>Differentiate with respect to y.</li>
                                                                </ul>

                                                                <div className='formula'>{"\\[\\frac{\\partial f}{\\partial y} = 2y\\]"}</div>
                                                                <ul>
                                                                        <li>The derivative of y² is 2y.</li>
                                                                        <li>The derivative of x² is 0 because it is treated as a constant.</li>
                                                                </ul>

                                                                <h3 id="-key-idea-"><strong>Key Idea</strong></h3>
                                                                <ul>
                                                                        <li>A function with two variables has two partial derivatives.</li>
                                                                        <li>A function with n variables has n partial derivatives — one for each variable.</li>
                                                                        <li><p>Notation for partial derivatives:</p>
                                                                                <ul>
                                                                                        <li><span className="math">{"\\[f_x\\]"}</span>  or  <span className="math">{"\\[\\frac{\\partial f}{\\partial x}\\]"}</span><br /><br /></li>
                                                                                        <li><span className="math">{"\\[f_y\\]"}</span>  or <span className="math">{"\\[\\frac{\\partial f}{\\partial y}\\]"}</span></li>
                                                                                </ul>
                                                                        </li>
                                                                        <li><p>To compute a partial derivative:</p>
                                                                                <ol>
                                                                                        <li>Treat all other variables as constants.</li>
                                                                                        <li>Differentiate normally with respect to the chosen variable.</li>
                                                                                </ol>
                                                                        </li>
                                                                </ul>

                                                                <h1>Example</h1>
                                                                <p>The example uses the function
                                                                        <span className="math">{"\\[f(x, y) = 3x^2 y^3\\]"}</span>
                                                                        to demonstrate how to compute partial derivatives.</p>
                                                                <h4 id="-partial-derivative-with-respect-to-x-">Partial Derivative with Respect to x</h4>
                                                                <ol>
                                                                        <li><strong>Treat other variables as constants</strong> — Here, y is treated as a constant.</li>
                                                                        <li><p><strong>Differentiate normally with respect to x</strong>:</p>
                                                                                <ul>
                                                                                        <li>The constant 3 remains.</li>
                                                                                        <li>The derivative of x² is 2x.</li>
                                                                                        <li>The y³ term remains unchanged since it’s treated as a constant.</li>
                                                                                </ul>
                                                                        </li>
                                                                </ol>
                                                                <p>Putting it together:
                                                                        <span className="math">{"\\[\\frac{\\partial f}{\\partial x} = 3 \\cdot 2x \\cdot y^3 = 6xy^3\\]"}</span></p>

                                                                <h4 id="-partial-derivative-with-respect-to-y-">Partial Derivative with Respect to y</h4>
                                                                <ol>
                                                                        <li><strong>Treat other variables as constants</strong> — This time, x is treated as a constant.</li>
                                                                        <li><p><strong>Differentiate with respect to y</strong>:</p>
                                                                                <ul>
                                                                                        <li>The constant 3 remains.</li>
                                                                                        <li>The x² term remains unchanged.</li>
                                                                                        <li>The derivative of y³ is 3y².</li>
                                                                                </ul>
                                                                        </li>
                                                                </ol>
                                                                <p>Putting it together:
                                                                        <span className="math">{"\\[\\frac{\\partial f}{\\partial y} = 3x^2 \\cdot 3y^2 = 9x^2 y^2\\]"}</span></p>


                                                        </TileRowCell0>

                                                </Tab2>

                                                <Tab2 title="Gradients" isChecked={false}>
                                                        <TileRowCell0>
                                                                <h1 className='no-top-margin'>Gradients</h1>

                                                                <p>The gradient is a convenient way to combine all partial derivatives of a multivariable function into a single vector.</p>
                                                                <p>For a function of two variables, you can compute:</p>
                                                                <ul>
                                                                        <li>The partial derivative with respect to x</li>
                                                                        <li>The partial derivative with respect to y</li>
                                                                </ul>
                                                                <p>For example, if
                                                                        <span className="math">{"\\[f(x, y) = x^2 + y^2\\]"}</span></p>
                                                                <p>then:</p>
                                                                <ul>
                                                                        <li><span className="math">{"\\[\\frac{\\partial f}{\\partial x} = 2x\\]"}</span><br /><br /></li>
                                                                        <li><span className="math">{"\\[\\frac{\\partial f}{\\partial y} = 2y\\]"}</span></li>
                                                                </ul>
                                                                <p>The <strong>gradient</strong> is the vector formed by these partial derivatives:</p>

                                                                <div className='formula'>{"\\[\\nabla f = (2x, 2y)\\]"}</div>
                                                                <p>The symbol used for the gradient is nabla, written as:</p>

                                                                <div className='formula'>{"\\[\\nabla f\\]"}</div>
                                                                <p>In general:</p>
                                                                <ul>
                                                                        <li>If a function has 2 variables, the gradient has 2 components.</li>
                                                                        <li>If a function has 17 variables, the gradient has 17 components, one for each partial derivative.</li>
                                                                </ul>
                                                                <p>Geometrically, the gradient describes the slopes that determine the tangent plane to the surface.</p>
                                                                <h2>Example</h2>
                                                                <p>To find the gradient at the point:</p>
                                                                <p className='formula'>{"\\[(2, 3)\\]"}</p>
                                                                <p>We use:</p>
                                                                <p className='formula'>{"\\[\\nabla f = (2x, 2y)\\]"}</p>
                                                                <p>Substitute:</p>
                                                                <p className='formula'>{"\\[x = 2, \\quad y = 3\\]"}</p>
                                                                <p>This gives:</p>
                                                                <p className='formula'>{"\\[\\nabla f(2,3) = (4, 6)\\]"}</p>
                                                                <p>So, the gradient of</p>
                                                                <p className='formula'>{"\\[f(x, y) = x^2 + y^2\\]"}</p>
                                                                <p>at the point</p>
                                                                <p className='formula'>{"\\[(2, 3)\\]"}</p>
                                                                <p>is:</p>
                                                                <p className='formula'>{"\\[(4, 6)\\]"}</p>


                                                                <h1 id="-gradients-and-maxima-minima-summary-">Gradients and Maxima/Minima</h1>
                                                                <p>The gradient in multivariable calculus plays the same role as the derivative in single-variable calculus when finding minimum and maximum points.</p>
                                                                <p>For a <strong>function of one variable</strong>, such as:</p>
                                                                <p className='formula'>{"\\[f(x) = x^2\\]"}</p>
                                                                <p>The minimum occurs where the derivative is zero.
                                                                        Since:</p>
                                                                <p className='formula'>{"\\[f'(x) = 2x\\]"}</p>
                                                                <p>Setting:</p>
                                                                <p className='formula'>{"\\[2x = 0\\]"}</p>
                                                                <p>gives:</p>
                                                                <p className='formula'>{"\\[x = 0\\]"}</p>
                                                                <p>which is the minimum point.</p>

                                                                <p>For a <strong>function of two variables</strong>, such as:</p>
                                                                <p className='formula'>{"\\[f(x,y) = x^2 + y^2\\]"}</p>
                                                                <p>The idea is similar, but instead of one derivative, we use <strong>partial derivatives</strong>.</p>
                                                                <p>A minimum (or maximum) occurs where:</p>
                                                                <ul>
                                                                        <li>All partial derivatives equal zero.</li>
                                                                        <li>The tangent plane is parallel to the floor.</li>
                                                                </ul>
                                                                <p>For this function:</p>
                                                                <p className='formula'>{"\\[\\frac{\\partial f}{\\partial x} = 2x\\]"}</p>
                                                                <p className='formula'>{"\\[\\frac{\\partial f}{\\partial y} = 2y\\]"}</p>
                                                                <p>Setting both equal to zero:</p>
                                                                <p className='formula'>{"\\[2x = 0\\]"}</p>
                                                                <p className='formula'>{"\\[2y = 0\\]"}</p>
                                                                <p>This gives the solution:</p>
                                                                <p className='formula'>{"\\[(x, y) = (0,0)\\]"}</p>

                                                                <h3 id="-general-principle-"><strong>General Principle</strong></h3>
                                                                <p>For functions of two or more variables:</p>
                                                                <ul>
                                                                        <li>A local minimum or maximum occurs where <strong>all partial derivatives are zero</strong>.</li>
                                                                        <li>In other words, every directional slope must vanish.</li>
                                                                        <li>This is equivalent to setting the gradient equal to zero and solving the resulting system of equations.</li>
                                                                </ul>



                                                        </TileRowCell0>

                                                </Tab2>

                                                <Tab2 title="Optimization with gradients" isChecked={false}>
                                                        <TileRowCell0>


                                                                <h1 className='no-top-margin'>Optimization with Gradients</h1>

                                                                <p>This example extends the sauna optimization problem from one dimension to <strong>two dimensions</strong>. Instead of moving only left or right, you can now move in any direction inside a 5×5 room. The temperature depends on position [(x, y)], and:</p>
                                                                <ul>
                                                                        <li><strong>Red areas</strong> = hotter (higher function values)</li>
                                                                        <li><strong>Blue areas</strong> = colder (lower function values)</li>
                                                                        <li>Goal = find the <strong>coldest point (minimum)</strong></li>
                                                                </ul>

                                                                <h3 id="-intuition-how-to-find-the-coldest-point">Intuition: How to Find the Coldest Point</h3>
                                                                <p>One strategy is to:</p>
                                                                <ol>
                                                                        <li>Take small steps in different directions.</li>
                                                                        <li>Move in the direction that makes the temperature decrease.</li>
                                                                        <li>Repeat until no direction makes it colder.</li>
                                                                </ol>
                                                                <p>You’ve reached the coldest point when:</p>
                                                                <ul>
                                                                        <li>Moving in <strong>any direction</strong> makes it hotter.</li>
                                                                        <li>The <strong>tangent plane is flat</strong> (parallel to the floor).</li>
                                                                        <li>Both partial derivatives are zero:</li>
                                                                </ul>
                                                                <p className='formula'>{"\\[\\frac{\\partial T}{\\partial x} = 0\\]"}</p>
                                                                <p className='formula'>{"\\[\\frac{\\partial T}{\\partial y} = 0\\]"}</p>
                                                                <p>This means the <strong>gradient is zero</strong>.</p>

                                                                <h3 id="-the-temperature-function">The Temperature Function</h3>
                                                                <p>The temperature is given by:</p>
                                                                <p className='formula'>{"\\[T(x,y) = 85 - \\frac{1}{90} x^2 (x-6) y^2 (y-6)\\]"}</p>
                                                                <p>To find the minimum:</p>
                                                                <ol>
                                                                        <li>Compute the partial derivatives.</li>
                                                                        <li>Set both equal to zero.</li>
                                                                        <li>Solve for candidate points.</li>
                                                                        <li>Evaluate each candidate to determine which is truly the minimum.</li>
                                                                </ol>

                                                                <h3 id="-solving-the-system">Solving the System</h3>
                                                                <p>From factoring the derivatives, candidate points occur when:</p>
                                                                <ul>
                                                                        <li>[ x = 0 ]</li>
                                                                        <li>[ x = 4 ]</li>
                                                                        <li>[ x = 6 ]</li>
                                                                        <li>[ y = 0 ]</li>
                                                                        <li>[ y = 4 ]</li>
                                                                        <li>[ y = 6 ]</li>
                                                                </ul>
                                                                <p>Some points lie outside the sauna (x=6 or y=6), so we ignore them.</p>
                                                                <p>After checking all valid points:</p>
                                                                <ul>
                                                                        <li>Points with [x=0] or [y=0] give temperature <strong>85</strong> (maximum). These points lie at the edges of the sauna.</li>
                                                                        <li>The only <strong>minimum</strong> occurs at:</li>
                                                                </ul>
                                                                <p className='formula'>{"\\[(x, y) = (4,4)\\]"}</p>
                                                                <p>At this point, the temperature is:</p>
                                                                <p className='formula'>{"\\[T(4,4) = 73.6\\]"}</p>

                                                                <h3 id="-key-takeaway">Key Takeaway</h3>
                                                                <p>Optimization in multiple dimensions works just like in one dimension:</p>
                                                                <ol>
                                                                        <li>Compute derivatives (now partial derivatives).</li>
                                                                        <li>Set them equal to zero.</li>
                                                                        <li>Solve for critical points.</li>
                                                                        <li>Test each candidate to find the true minimum or maximum.</li>
                                                                </ol>
                                                                <p>The gradient generalizes the idea of "derivative equals zero" from 1D to higher dimensions.</p>


                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="Linear regression" isChecked={false}>
                                                        <TileRowCell0>


                                                                <h1 className='no-top-margin'>Optimization using gradients: Linear regression</h1>

                                                                <p>This lesson revisits the power line example, now extended to two dimensions, and introduces linear regression, one of the most important models in machine learning.</p>
                                                                <h4 id="-problem-setup-">Problem Setup</h4>
                                                                <ul>
                                                                        <li>Three power lines are located at different points on the xy-plane.</li>
                                                                        <li>We want to place a fiber line (a straight line) that connects to each power line using vertical wires (parallel to the y-axis).</li>
                                                                        <li>The cost of each connection is the square of the wire’s length.</li>
                                                                        <li>The goal is to choose the best line to minimize the total squared cost.</li>
                                                                </ul>
                                                                <h4 id="-mathematical-formulation-">Mathematical Formulation</h4>
                                                                <p>The fiber line has equation:</p>
                                                                <p className='formula'>{"\\[y = mx + b\\]"}</p>
                                                                <ul>
                                                                        <li>m = slope</li>
                                                                        <li>b = y-intercept</li>
                                                                </ul>
                                                                <p>The total cost becomes a function of two variables, E(m, b), equal to the sum of squared vertical distances from each data point to the line.</p>
                                                                <p>After expanding and simplifying, the cost function is:</p>
                                                                <p className='formula'>{"\\[E(m,b) = 14m^2 + 3b^2 + 12mb - 42m - 20b + 38\\]"}</p>
                                                                <h4 id="-minimizing-the-cost-">Minimizing the Cost</h4>
                                                                <p>To minimize E(m,b):</p>
                                                                <ol>
                                                                        <li>Compute the partial derivatives:</li>
                                                                </ol>
                                                                <p className='formula'>{"\\[\\frac{\\partial E}{\\partial m} = 28m + 12b - 42\\]"}</p>
                                                                <p className='formula'>{"\\[\\frac{\\partial E}{\\partial b} = 6b + 12m - 20\\]"}</p>
                                                                <ol>
                                                                        <li value="2">Set both derivatives equal to zero.</li>
                                                                        <li>Solve the system of equations.</li>
                                                                </ol>
                                                                <h4 id="-solution-">Solution</h4>
                                                                <p>Solving gives:</p>
                                                                <p className='formula'>{"\\[m = \\frac{1}{2}, \\quad b = \\frac{7}{3}\\]"}</p>
                                                                <p>This produces the optimal line:</p>
                                                                <p className='formula'>{"\\[y = \\frac{1}{2}x + \\frac{7}{3}\\]"}</p>
                                                                <p>The minimum cost is:</p>
                                                                <p className='formula'>{"\\[E\\left(\\frac{1}{2}, \\frac{7}{3}\\right) = 4.167\\]"}</p>
                                                                <h4 id="-key-insight-"><strong>Key Insight</strong></h4>
                                                                <p>This process—finding the line that minimizes squared distances to data points—is called linear regression.</p>
                                                                <p>While solving systems of equations works for small problems, it becomes computationally expensive for large ones. A more efficient method, called gradient descent, is introduced next to handle optimization in higher dimensions.</p>


                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="1 var Gradient Descent" isChecked={false}>
                                                        <TileRowCell0>

                                                                <h1 className='no-top-margin'>Optimization using Gradient Descent in one variable</h1>

                                                                <p>In the previous approach, we approximated a function's minimum in a basic way. A smarter method uses the <strong>derivative (slope)</strong> to guide each step toward the minimum.</p>
                                                                <ul>
                                                                        <li>If the slope is <strong>negative</strong>, the point is to the left of the minimum, so we move <strong>right</strong>.</li>
                                                                        <li>If the slope is <strong>positive</strong>, the point is to the right of the minimum, so we move <strong>left</strong>.</li>
                                                                </ul>
                                                                <p>This leads to the update rule:</p>
                                                                <p className='formula'>{"\\[x_1 = x_0 - f'(x_0)\\]"}</p>
                                                                <p>We subtract the slope because:</p>
                                                                <ul>
                                                                        <li>Subtracting a <strong>negative</strong> slope moves us right.</li>
                                                                        <li>Subtracting a <strong>positive</strong> slope moves us left.</li>
                                                                </ul>
                                                                <p>However, if the slope is very large (on a steep part of the curve), this step can be too big and overshoot the minimum. To control step size, we multiply the slope by a small constant called the
                                                                        <strong> learning rate</strong>, <span className="math">{"\\[ \\alpha \\]"}</span> :</p>
                                                                <p className='formula'>{"\\[x_k = x_{k-1} - \\alpha f'(x_{k-1})\\]"}</p>
                                                                <p>This method is called <strong>gradient descent</strong>.</p>
                                                                <h3 id="why-it-works-well">Why It Works Well</h3>
                                                                <ul>
                                                                        <li>In steep regions (large derivative), steps are relatively larger.</li>
                                                                        <li>Near the minimum (small derivative), steps become smaller.</li>
                                                                        <li>It naturally adjusts movement based on how far you are from the minimum.</li>
                                                                </ul>
                                                                <p>This is similar to golf:</p>
                                                                <ul>
                                                                        <li>Far from the hole → hit hard.</li>
                                                                        <li>Close to the hole → use precision.</li>
                                                                </ul>
                                                                <h3 id="the-algorithm">The Algorithm</h3>
                                                                <ol>
                                                                        <li>Choose a function <span className="math">{"\\[ f(x) \\]"}</span></li>
                                                                        <li>Pick a starting point <span className="math">{"\\[ x_0 \\]"}</span></li>
                                                                        <li>Choose a learning rate  <span className="math">{"\\[ \\alpha \\]"}</span> </li>
                                                                        <li>Update repeatedly using: </li>
                                                                </ol>
                                                                <p className='formula'>{"\\[x_k = x_{k-1} - \\alpha f'(x_{k-1})\\]"}</p>
                                                                <ol>
                                                                        <li value="5">Stop when changes become very small.</li>
                                                                </ol>
                                                                <h3 id="key-advantage">Key Advantage</h3>
                                                                <p>You <strong>never need to explicitly solve</strong></p>
                                                                <p className='formula'>{"\\[f'(x) = 0\\]"}</p>
                                                                <p>You only compute the derivative and iteratively update the point.</p>
                                                                <p>Gradient descent is fast, can be repeated thousands of times efficiently, and is extremely powerful in machine learning for finding function minima.</p>

                                                                <h2>Special considerations</h2>
                                                                <p>Learning rate is a crucial hyperparameter in machine learning. If the learning rate is too large, gradient descent may overshoot the minimum and never converge. If it is too small, the algorithm may take an extremely long time to reach the minimum—or may appear to never reach it at all. Finding the “just right” learning rate is difficult and remains an active area of research. While there are adaptive methods that adjust the learning rate during training, there is no guaranteed best choice.</p>
                                                                <p>Another challenge with gradient descent is the problem of local minima. If the algorithm starts at a certain point, it may converge to a local minimum instead of the global minimum. There is no guaranteed way to avoid this issue, but a common practical solution is to run gradient descent multiple times with different random starting points. This increases the chances of finding the global minimum or at least a better solution.</p>



                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="2 var Gradient Descent" isChecked={false}>
                                                        <TileRowCell0>

                                                                <h1 className='no-top-margin'>Gradient Descent in Two Variables</h1>


                                                                <h3 id="-1-from-one-variable-to-two-variables-"><strong>1. From One Variable to Two Variables</strong></h3>
                                                                <p>Gradient descent in two variables works the same way as in one variable, but instead of using a single derivative, we use the <strong>gradient</strong> (a vector of partial derivatives).</p>
                                                                <p>Previously, optimization was done analytically by:</p>
                                                                <ul>
                                                                        <li>Calculating partial derivatives</li>
                                                                        <li>Setting them equal to zero</li>
                                                                        <li>Solving for the minimum</li>
                                                                </ul>
                                                                <p>Now, instead of solving analytically, we use an <strong>iterative algorithm</strong>.</p>

                                                                <h3 id="-2-intuition-sauna-example-"><strong>2. Intuition (Sauna Example)</strong></h3>
                                                                <p>Imagine trying to find the coldest spot in a sauna:</p>
                                                                <ul>
                                                                        <li>You start at an initial position {"\\[(x_0, y_0)\\]"}.</li>
                                                                        <li>Instead of taking random steps, you use a smarter direction.</li>
                                                                        <li>That direction is given by the <strong>negative gradient</strong>.</li>
                                                                </ul>
                                                                <p>Key idea:</p>
                                                                <ul>
                                                                        <li><strong>Gradient</strong> to direction of steepest increase (hottest direction).</li>
                                                                        <li><strong>Negative gradient</strong> to direction of steepest decrease (coldest direction).</li>
                                                                </ul>
                                                                <p>If you take a small step in the negative gradient direction, you move as efficiently as possible toward the minimum.</p>

                                                                <h3 id="-3-the-update-rule-"><strong>3. The Update Rule</strong></h3>
                                                                <p>At each step:</p>
                                                                <p>{"\\[(x_1, y_1) = (x_0, y_0) - \\alpha \\nabla f(x_0, y_0)\\]"}</p>
                                                                <p>Where:</p>
                                                                <ul>
                                                                        <li>{"\\[\\alpha\\]"} = learning rate</li>
                                                                        <li>{"\\[\\nabla f\\]"} = gradient vector (partial derivative with respect to x and y)</li>
                                                                </ul>
                                                                <p>This is exactly like the one-variable case, except:</p>
                                                                <ul>
                                                                        <li>Derivative to Gradient (vector)</li>
                                                                </ul>

                                                                <h3 id="-4-how-the-algorithm-works-"><strong>4. How the Algorithm Works</strong></h3>
                                                                <ol>
                                                                        <li><p><strong>Choose:</strong></p>
                                                                                <ul>
                                                                                        <li>Learning rate {"\\[\\alpha\\]"}</li>
                                                                                        <li>Starting point {"\\[(x_0, y_0)\\]"}</li>
                                                                                </ul>
                                                                        </li>
                                                                        <li><p><strong>Update rule (repeat):</strong></p>
                                                                        </li>
                                                                </ol>
                                                                <p>{"\\[(x_k, y<em>k) = (x</em>{k-1}, y<em>{k-1}) - \\alpha \\nabla f(x</em>{k-1}, y_{k-1})\\]"}</p>
                                                                <ol>
                                                                        <li><p><strong>Stop when:</strong></p>
                                                                                <ul>
                                                                                        <li>Changes become very small</li>
                                                                                        <li>Gradient approaches zero</li>
                                                                                </ul>
                                                                        </li>
                                                                </ol>
                                                                <p>After many iterations, you get very close to the minimum.</p>

                                                                <h3 id="-5-practical-example-"><strong>5. Practical Example</strong></h3>
                                                                <p>For a given temperature function:</p>
                                                                <ul>
                                                                        <li>Compute the partial derivatives</li>
                                                                        <li>Form the gradient vector</li>
                                                                        <li>Plug in your current {"\\[x\\]"} and {"\\[y\\]"}</li>
                                                                        <li>Multiply by learning rate</li>
                                                                        <li>Update the position</li>
                                                                        <li>Repeat</li>
                                                                </ul>
                                                                <p>Each step moves you closer to the minimum.</p>

                                                                <h3 id="-6-important-limitation-local-minima-"><strong>6. Important Limitation: Local Minima</strong></h3>
                                                                <p>Just like in one variable:</p>
                                                                <ul>
                                                                        <li>The algorithm may get stuck in a <strong>local minimum</strong></li>
                                                                        <li>It may not reach the <strong>global minimum</strong></li>
                                                                        <li>There is no guarantee you found the absolute best solution</li>
                                                                </ul>
                                                                <p>How to improve chances:</p>
                                                                <ul>
                                                                        <li>Start from multiple different initial points</li>
                                                                        <li>Compare the results</li>
                                                                        <li>Choose the best solution found</li>
                                                                </ul>

                                                                <h3 id="-core-insight-"><strong>Core Insight</strong></h3>
                                                                <p>Gradient descent in two variables is simply:</p>
                                                                <blockquote>
                                                                        <p>Move in the direction of the negative gradient, take small steps, and repeat until the function stops decreasing.</p>
                                                                </blockquote>
                                                                <p>It extends naturally to higher dimensions as well.</p>


                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="Labs & Assignments" isChecked={false}>
                                                        <TileRowCell0>

                                                                <div className='lab-links'>

                                                                        <ul>
                                                                                <li><a href="/C2_W2_Lab_1_Optimization_Using_Gradient_Descent_in_One_Variable.html" target="_blank">Lab: Optimization Using Gradient Descent in One Variable</a></li>
                                                                                <li><a href="/C2_W2_Lab_2_Optimization_Using_Gradient_Descent_in_Two_Variables.html" target="_blank">Lab: Optimization Using Gradient Descent in Two Variables</a></li>
                                                                                <li><a href="/C2_W2_Assignment.html" target="_blank">Assignment: Optimization Using Gradient Descent - Linear Regression</a></li>

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
