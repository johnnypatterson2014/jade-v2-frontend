'use client';

import Image from "next/image";
import Tabs from '@/components/client/Tabs';
import Tab2 from '@/components/client/Tab2';
import Card from '@/components/client/Card';
import Button from '@/components/client/Button';
import TreeNode from '@/components/client/TreeNode';
import CardDrawer from '@/components/client/CardDrawer';
import NavDrawer2 from '@/components/client/NavDrawer2';
import TileRowCell0 from '@/components/client/TileRowCell0';
import { MathJaxContext } from "better-react-mathjax";
import React, { useEffect } from 'react';


export default function Home() {

        function createMarkup(content: any) {
                return { __html: content };
        }

        const html1 = `
        Testing 2
        `

        const html2 = `
        Testing 3
        `

        return (
                <>

                        <div className='flex-1 mt-[0px] ml-[0px] mr-[0px] mb-[12px]'>

                                <div className='flex flex-row items-start mb-[15px] mt-[20px]'>

                                        <div className='flex-none ml-[15px] fesk-card'>

                                                <div className='mb-[2px]'>
                                                        <div className='flex flex-row items-start mb-[2px]'>

                                                                <div className='flex-1'>
                                                                        <div className='flex flex-row m-[5px] items-start'>
                                                                                <div className='flex-none fesk-item'>

                                                                                        <div className="btn btn-sm bg-zinc-800 border border-zinc-600 text-zinc-200 shadow-none">
                                                                                                <div className='jade-font'>
                                                                                                        XCS236 Course Outline
                                                                                                </div>

                                                                                        </div>

                                                                                </div>


                                                                        </div>
                                                                </div>

                                                        </div>


                                                        <TreeNode name='root 1' src={html1}>
                                                                <TreeNode name='root 1.1' src={html2}>
                                                                        &nbsp;
                                                                </TreeNode>
                                                        </TreeNode>

                                                        <TreeNode name='root 2' src='html1'>
                                                                &nbsp;
                                                        </TreeNode>



                                                </div>

                                        </div>

                                        <div className='flex-1 fesk-card ml-[15px] mr-[15px]'>

                                                <div className="m-[10px]">

                                                        <div id='main_content'>

                                                                {/* <div dangerouslySetInnerHTML={createMarkup(html1)} /> */}
                                                                Add content here...


                                                        </div>


                                                </div>
                                        </div>

                                </div>





                        </div>

                </>
        );
}
