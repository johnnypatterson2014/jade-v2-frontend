import Image from "next/image";
import Tabs from '@/components/client/Tabs';
import Tab2 from '@/components/client/Tab2';
import TileRowCell0 from '@/components/client/TileRowCell0';


export default function Home() {
        return (
                <>
                        <div className='mt-[0px] ml-[40px] mr-[20px] mb-[10px]'>

                                <div className='jade-h1'>
                                        Math for Machine Learning and Data Science
                                </div>

                                <div className='jade-h2 mb-[25px]'>
                                        Week 2
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
                                </Tabs>


                        </div>
                </>
        );
}
