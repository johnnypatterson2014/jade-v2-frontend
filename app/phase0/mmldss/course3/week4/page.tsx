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
                                                Week 4: Confidence Intervals
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
                                                                                <li><a href="/xxxxxxxx.html" target="_blank">Lab: xxxxxxx</a></li>

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
