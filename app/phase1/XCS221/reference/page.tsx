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
                                                XCS221 - AI Principles & Techniques
                                        </div>

                                        <div className='jade-h2 mt-[5px] mb-[20px]'>
                                                Reference Material | PDF guides
                                        </div>


                                        <Tabs>

                                                <Tab2 title="Review Guides" isChecked={true}>
                                                        <TileRowCell0>

                                                                <div className='lab-links'>
                                                                        <ul>
                                                                                <li>
                                                                                        <a href="/Probability_Review.pdf" target="_blank">Probability Review PDF</a>
                                                                                </li>
                                                                                <li>
                                                                                        <a href="/Linear_Algebra_Review.pdf" target="_blank">Linear Algebra Review PDF</a>
                                                                                </li>
                                                                                <li>
                                                                                        <a href="/Linux_and_Git_Guide.pdf" target="_blank">Linux and Git Guide PDF</a>
                                                                                </li>
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
