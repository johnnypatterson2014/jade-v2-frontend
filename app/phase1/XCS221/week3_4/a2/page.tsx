'use client';

import Image from "next/image";
import Tabs from '@/components/client/Tabs';
import Tab2 from '@/components/client/Tab2';
import Card from '@/components/client/Card';
import CardDrawer from '@/components/client/CardDrawer';
import NavDrawer2 from '@/components/client/NavDrawer2';
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


        return (
                <>
                        <MathJaxContext>
                                <div className='mt-[0px] ml-[40px] mr-[20px] mb-[12px]'>

                                        <div className='jade-h1'>
                                                XCS221 - AI Principles & Techniques
                                        </div>

                                        <div className='jade-h2 mt-[5px] mb-[20px]'>
                                                Assignment 2
                                        </div>


                                        <Tabs>
                                                <Tab2 title="Assignment 2" isChecked={true}>
                                                        <TileRowCell0>

                                                                <div className="jade-h11 mt-[15px]">
                                                                        x. xxxx
                                                                </div>

                                                                <CardDrawer id='1' name='xx. xxxx'>

                                                                        <div className="assignment-question-wrapper p-[15px] mb-[0px]">
                                                                                <div className="assignment-question">
                                                                                        coming soon...
                                                                                </div>
                                                                        </div>

                                                                        <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                                <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                        {/* <div dangerouslySetInnerHTML={createMarkup(q1e)} /> */}
                                                                                </div>
                                                                        </div>

                                                                </CardDrawer>



                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="PDF" isChecked={false}>
                                                        <TileRowCell0>

                                                                <div className='lab-links'>
                                                                        <ul>
                                                                                <li><a href="/A2_Solutions.pdf" target="_blank">Assignment 2</a></li>
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
