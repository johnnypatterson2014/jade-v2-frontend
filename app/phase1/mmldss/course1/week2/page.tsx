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

        return (
                <>
                        <MathJaxContext>
                                <div className='mt-[0px] ml-[40px] mr-[20px] mb-[10px]'>

                                        <div className='jade-h1'>
                                                Math for Machine Learning and Data Science
                                        </div>

                                        <div className='jade-h2 mb-[25px]'>
                                                Week 2: Solving systems of linear equations
                                        </div>

                                        <Tabs>
                                                <Tab2 title="Notes" isChecked={true}>
                                                        <TileRowCell0>



                                                                <h1 id="linear-algebra-week-2">Linear algebra - Week 2</h1>
                                                                <h2 id="solving-systems-of-equations">Solving systems of equations</h2>
                                                                <p>Note: for linear systems of equations, row operations (add, subtract, multiply, divide) do not affect singularity</p>
                                                                <ul>
                                                                        <li>if you multiply a row by a factor, this will multiply the value of the determinant by the same factor
                                                                                (if it is zero, then it stays zero) thus why it does not affect the singularity</li>
                                                                </ul>
                                                                <h2 id="row-echelon-form">Row echelon form</h2>
                                                                <ul>
                                                                        <li>do row operations on the matrix to get an upper-diagonal matrix</li>
                                                                        <li>step 1: divide each row by the first coefficient</li>
                                                                        <li>step 2: new row 2 = row 2 - row 1</li>
                                                                        <li>step 3: divide row 2 by the second coefficient (so that you only have 1&#39;s on the diagonal)</li>
                                                                </ul>
                                                                <p>note: the resulting matrix will be upper-triangular (only zeros below the diagonal)</p>
                                                                <p>eg. [ 5  1 ] divide row 1 by 5 -&gt; [ 1   0.2 ]                            [ 1    0.2 ]                    [ 1  0.2]
                                                                        [ 4 -3 ] divide row 2 by 4 -&gt; [ 1  -0.75]  new row 2 = row 2 - row 1 [ 0  -0.95 ]  divide to get a 1 [ 0   1 ]</p>
                                                                <p>note: if you do not have 1&#39;s on the diagonal, it is singular (infinite or zero solutions)
                                                                        note: the <strong>rank</strong> of a matrix is the number of pivots in the matrix</p>
                                                                <ul>
                                                                        <li>pivot is the first non-zero coefficient in the row</li>
                                                                        <li>if you have 1&#39;s on the diagonal, then the # of pivots = the # of rows = the rank; system is non-singular</li>
                                                                        <li>if you have a 0 on the diagonal, then the # of pivots = the rank which is &lt; the # of rows; system is singular</li>
                                                                        <li>re-arrange the rows such that a row with all zeros is at the bottom of the matrix</li>
                                                                </ul>
                                                                <p>note: if a row has all zeros, then it has infinite solutions
                                                                        if a row has zeros for A but a non-zero value for B, then it has no solutions</p>
                                                                <p>recall: system of linear equations -&gt; A[x y] = B  where A is a matrix and B is the free coefficients
                                                                        eg. augmented matrix = [A|B] -&gt; [ 2 -1 1 |  1 ]
                                                                        [ 2  2 4 | -2 ]
                                                                        [ 4  1 0 | -1 ]</p>
                                                                <p>eg. augmented matrix in row echelon form:
                                                                        [[ 1. 8. 6. | 9. ]
                                                                        [ 0. 1. 8. | 6. ]
                                                                        [ 0. 0. 1. | 1. ]]</p>
                                                                <h2 id="row-reduced-echelon-form">Row-reduced echelon form</h2>
                                                                <ul>
                                                                        <li>given a matrix in row echelon form (upper triangular matrix and all pivots are 1&#39;s),
                                                                                perform row operations such that you have zeros above each pivot
                                                                                (called &#39;back substitution&#39;) -&gt; see assignment for steps to do &#39;back substitution&#39;<ul>
                                                                                        <li>new_row_above_pivot = row_above_pivot - value_in_row_above_pivot * row_with_pivot</li>
                                                                                </ul>
                                                                        </li>
                                                                </ul>
                                                                <p>eg. reduced row echelon form:
                                                                        [[ 1. 0. 0. | 19. ]
                                                                        [ 0. 1. 0. | -2. ]
                                                                        [ 0. 0. 1. |  1. ]]</p>
                                                                <p>note: the resulting A matrix will be the identity matrix.</p>
                                                                <h2 id="gaussian-elimination-algorithm">Gaussian elimination algorithm</h2>
                                                                <ul>
                                                                        <li>an algorithm to solve a system of linear equations</li>
                                                                        <li>step 1: convert sys of equations to the <strong>augmented matrix form</strong></li>
                                                                        <li>step 2: apply ops to get matrix in <strong>row echelon form</strong></li>
                                                                        <li>step 3: perform <strong>back substitution</strong> (zero out rows above the pivot) to get the <strong>reduced row echelon form</strong></li>
                                                                        <li><p>step 4: solution is the resulting B column (the resulting free coefficients)</p>
                                                                                <p>note: if you encounter a row with a zero on the diagonal, you can stop -&gt; it is singular and does not have</p>
                                                                                <span className="hljs-selector-tag">a</span> unique solution
                                                                        </li>
                                                                </ul>


                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="Labs & Assignments" isChecked={false}>
                                                        <TileRowCell0>

                                                                <div className='lab-links'>

                                                                        <a href="/C1W2_UGL_solving_linear_systems_3_variables.html" target="_blank">Lab: Introduction to the Numpy.linalg sub-library</a><br /><br />
                                                                        <a href="/C1W2_Assignment.html" target="_blank">Assignment: gaussian elimination</a>

                                                                </div>

                                                        </TileRowCell0>
                                                </Tab2>

                                        </Tabs>


                                </div>
                        </MathJaxContext>
                </>
        );
}
