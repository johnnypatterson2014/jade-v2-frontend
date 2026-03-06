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
                                                Week 3: Optimization in Neural Networks
                                        </div>

                                        <Tabs>

                                                <Tab2 title="Regression with a Perceptron" isChecked={true}>
                                                        <TileRowCell0>

                                                                Coming soon.

                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="Classification with a Perceptron" isChecked={false}>
                                                        <TileRowCell0>

                                                                Coming soon.

                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="Classification with a Neural Network" isChecked={false}>
                                                        <TileRowCell0>

                                                                Coming soon.

                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="Newton's Method" isChecked={false}>
                                                        <TileRowCell0>

                                                                Coming soon.

                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="Neural Network with 2 layers" isChecked={false}>
                                                        <TileRowCell0>

                                                                Coming soon.

                                                        </TileRowCell0>
                                                </Tab2>


                                                <Tab2 title="Labs & Assignments" isChecked={false}>
                                                        <TileRowCell0>

                                                                <div className='lab-links'>
                                                                        <a href="/C2_W3_Lab_1_Regression_with_Perceptron.html" target="_blank">Lab: C2_W3_Lab_1_Regression_with_Perceptron</a>
                                                                        <br /><br />
                                                                        <a href="/C2_W3_Lab_2_Classification_with_Perceptron.html" target="_blank">Lab: C2_W3_Lab_2_Classification_with_Perceptron</a>
                                                                        <br /><br />
                                                                        <a href="/C2_W3_Lab_3_Optimization_Using_Newtons_Method.html" target="_blank">Lab: C2_W3_Lab_3_Optimization_Using_Newtons_Method</a>
                                                                        <br /><br />

                                                                        <a href="/C2_W3_Assignment.html" target="_blank">Assignment: Neural Network with Two Layers</a>
                                                                </div>

                                                        </TileRowCell0>
                                                </Tab2>

                                        </Tabs>


                                </div>
                        </MathJaxContext>
                </>
        );
}
