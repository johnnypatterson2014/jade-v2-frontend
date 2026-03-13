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
                                <div className='mt-[0px] ml-[40px] mr-[20px] mb-[12px]'>

                                        <div className='jade-h1'>
                                                XCS221 - AI Principles & Techniques
                                        </div>

                                        <div className='jade-h2 mt-[5px] mb-[20px]'>
                                                Python Quick Reference
                                        </div>


                                        <Tabs>
                                                <Tab2 title="Notes" isChecked={true}>
                                                        <TileRowCell0>

                                                                <h1>Notes</h1>
                                                                <p>enter better description...</p>

                                                        </TileRowCell0>
                                                </Tab2>






                                        </Tabs>


                                </div>
                        </MathJaxContext>
                </>
        );
}
