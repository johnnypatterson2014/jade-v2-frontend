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
                                                Week 1: Probability Distributions
                                        </div>

                                        <Tabs>
                                                <Tab2 title="Coming soon" isChecked={true}>
                                                        <TileRowCell0>

                                                                Coming soon.

                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="Labs & Assignments" isChecked={false}>
                                                        <TileRowCell0>

                                                                <div className='lab-links'>

                                                                        <ul>
                                                                                <li><a href="/C3_W1_Lab_1_Monty_Hall.html" target="_blank">Lab: The Monty Hall Problem</a></li>
                                                                                <li><a href="/C3_W1_Lab_2_Birthday_Problems.html" target="_blank">Lab: Birthday Problems</a></li>
                                                                                <li><a href="/C3W1_Assignment.html" target="_blank">Assignment: Naive Bayes</a></li>

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
