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
                                                Week 1: Systems of linear equations
                                        </div>

                                        <Tabs>
                                                <Tab2 title="Notes" isChecked={true}>
                                                        <TileRowCell0>

                                                                <h1 id="linear-algebra-week-1">Linear algebra - Week 1</h1>
                                                                <p>System of linear equations:</p>
                                                                <p>  x + y  = 10  -&gt; [[1 1]   = [10   -&gt; A[x y] = B   where A is a matrix and B is the free coefficients
                                                                        x + 2y = 20      [1 2]]     20]</p>
                                                                <h2 id="systems-of-linear-equations-">Systems of linear equations:</h2>
                                                                <ul>
                                                                        <li><p>3 types:</p>
                                                                                <ul>
                                                                                        <li><ol>
                                                                                                <li><strong>complete</strong><ul>
                                                                                                        <li>non-singular</li>
                                                                                                        <li>has exactly one unique solution</li>
                                                                                                        <li>determinant is non-zero</li>
                                                                                                        <li>graphical representation<ul>
                                                                                                                <li>for 2 variables: each row is a line on a graph; the lines intersect at one point (the coordinates is the solution to the system)</li>
                                                                                                                <li>for 3 variables: each row is a 3D plane; the planes intersect at one point</li>
                                                                                                        </ul>
                                                                                                        </li>
                                                                                                </ul>
                                                                                                </li>
                                                                                        </ol>
                                                                                        </li>
                                                                                        <li><ol>
                                                                                                <li><strong>redundant</strong><ul>
                                                                                                        <li>singular</li>
                                                                                                        <li>infinite solutions</li>
                                                                                                        <li>solution is a linear equation; every point on the line is a solution</li>
                                                                                                        <li>determinant = 0</li>
                                                                                                        <li>graphical representation:<ul>
                                                                                                                <li>for 2 variables: the lines on a graph are on top of each other</li>
                                                                                                                <li>for 3 variables: the planes intersect along a line</li>
                                                                                                        </ul>
                                                                                                        </li>
                                                                                                </ul>
                                                                                                </li>
                                                                                        </ol>
                                                                                        </li>
                                                                                        <li><ol>
                                                                                                <li><strong>contradictory</strong><ul>
                                                                                                        <li>singular</li>
                                                                                                        <li>no solution</li>
                                                                                                        <li>linear equations do not intersect</li>
                                                                                                        <li>determinant = 0</li>
                                                                                                        <li>graphical representation:<ul>
                                                                                                                <li>for 2 variables: the lines on a graph are parallel</li>
                                                                                                                <li>for 3 variables: the planes can intersect, but we do not have all 3 planes intersect at a single point</li>
                                                                                                        </ul>
                                                                                                        </li>
                                                                                                </ul>
                                                                                                </li>
                                                                                        </ol>
                                                                                        </li>
                                                                                </ul>
                                                                        </li>
                                                                </ul>
                                                                <h2 id="notion-of-singularity">notion of singularity</h2>
                                                                <ul>
                                                                        <li>if have A[x y] = B</li>
                                                                        <li>if you set the constants B to zero, this moves the linear equations to the origin (ie. move lines on graph to 0,0)</li>
                                                                        <li>this <strong>does not</strong> change if the system is singular or not (but will make it easier to determine if it is singular)</li>
                                                                </ul>
                                                                <h2 id="linear-dependence">linear dependence</h2>
                                                                <ul>
                                                                        <li>if one row can be created by a combination of other rows (add, subtract, mult, divide, average, etc) then
                                                                                the system is called <strong>linearly dependent</strong></li>
                                                                        <li>a linear dependent system is singular (no unique solution; either infinite or zero solutions)</li>
                                                                </ul>
                                                                <h2 id="determinant">determinant</h2>
                                                                <ul>
                                                                        <li>handy way to determine if a matrix is singular or not</li>
                                                                        <li>only works for square matricies</li>
                                                                        <li>ignore B (free coefficients) since they do not affect singularity</li>
                                                                        <li>if the determinant is non-zero then it is non-singular (one unique solution)</li>
                                                                        <li>if the determinant is zero then it is singular (infinite or zero solutions)</li>
                                                                        <li><p>if have matrix:
                                                                                [ a b ]  then the determinant is: ad - bc (diagonal to right - diagonal to left)
                                                                                [ c d ]</p>
                                                                        </li>
                                                                        <li><p>for 3x3 matrix:
                                                                                [ a b c ]  then determinant = (diagonals to right) - (diagonals to left)
                                                                                [ d e f ]
                                                                                [ g h i ]       determinant = (aei + bfg + dhc) - (ceg + bdi + fha)</p>
                                                                                <p>  note: a zero in the matrix makes it easier to calculate (the factor of vars = 0)
                                                                                        note: if the matrix is <strong>upper triangular</strong> (values below the diagonal are zero) then</p>
                                                                                <span className="hljs-keyword">Note: the</span> determinant is simply <span className="hljs-keyword">the</span> diagonal terms multiplied together (ie. <span className="hljs-keyword">a</span>*e*i)
                                                                        </li>
                                                                </ul>


                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="Labs & Assignments" isChecked={false}>
                                                        <TileRowCell0>

                                                                <div className='lab-links'>

                                                                        <a href="/C1_W1_Lab_1_introduction_to_numpy_arrays.html" target="_blank">Lab: Introduction to Python Matrices and NumPy</a><br /><br />
                                                                        <a href="/C1_W1_Lab_2_linear_systems_as_matrices.html" target="_blank">Lab: Representing Systems of Equations as Matrices</a>

                                                                </div>

                                                        </TileRowCell0>
                                                </Tab2>

                                        </Tabs>


                                </div>
                        </MathJaxContext>
                </>
        );
}
