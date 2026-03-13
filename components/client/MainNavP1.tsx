'use client';

import Link from 'next/link';
import NavDrawer from '@/components/client/NavDrawer';
import NavDrawer2 from '@/components/client/NavDrawer2';
import NavDrawerItem from '@/components/client/NavDrawerItem';
import React, { useEffect } from 'react';
import { usePathname } from "next/navigation";
import Button from '@/components/client/Button';

export default function MainNavP1() {

    useEffect(() => {
        // toggleAll(true)
        resetCurrentNav();
    }, []); // Run once on component mount

    const pathname = usePathname();
    const pathSegments = pathname.split('/').filter(segment => segment);

    const toggleAll = (value: boolean) => {
        const elements = document.querySelectorAll('.jade-checkbox-level-1');
        elements.forEach(element => {
            // console.log(element.textContent);
            element.checked = value;
        });
        const elements2 = document.querySelectorAll('.jade-checkbox-level-2');
        elements2.forEach(element2 => {
            // console.log(element.textContent);
            element2.checked = value;
        });
    }

    const resetCurrentNav = () => {
        toggleAll(false);
        const parentId = pathSegments[1];
        const childId = pathSegments[2];
        if (document.getElementById(parentId)) {
            document.getElementById(parentId).checked = true;
        }
        if (document.getElementById(parentId + '-' + childId)) {
            document.getElementById(parentId + '-' + childId).checked = true;
        }
    }

    return (
        <>
            <div className='main-nav'>

                <div className='flex shrink justify-end mb-[10px] mr-[5px]'>
                    <div className='flex gap-[10px]'>
                        <div className='flex-none content-end'>
                            <Button>
                                <a onClick={() => toggleAll(false)}>collapse</a>
                            </Button>
                        </div>
                        <div className='flex-none content-end'>
                            <Button>
                                <a onClick={() => toggleAll(true)}>expand</a>
                            </Button>
                        </div>
                        <div className='flex-none content-end'>
                            <Button>
                                <a onClick={() => resetCurrentNav()}>reset</a>
                            </Button>
                        </div>
                    </div>
                </div>


                <NavDrawer id='XCS221' name='XCS221: AI Principles and Techniques'>


                    <NavDrawer2 id='2' parent_id='XCS221' name='Module 1: Introduction'>
                        <NavDrawerItem href='/phase1/XCS221/reference' isFirst={true} isActive={pathname === "/phase1/XCS221/reference"} >
                            Stanford PDF review guides
                        </NavDrawerItem>
                    </NavDrawer2>

                    <NavDrawer2 id='3' parent_id='XCS221' name='Module 2: Machine Learning'>
                        <NavDrawerItem href='/phase1/XCS221/module2/s2_1' isFirst={false} isActive={pathname === "/phase1/XCS221/module2/s2_1"} >
                            2.1 | Tensors and Einops
                        </NavDrawerItem>
                    </NavDrawer2>

                    <NavDrawer2 id='1' parent_id='XCS221' name='Assignments'>
                        <NavDrawerItem href='/phase1/XCS221/assignments/a1' isFirst={false} isActive={pathname === "/phase1/XCS221/assignments/a1"} >
                            Assignment 1
                        </NavDrawerItem>
                    </NavDrawer2>

                </NavDrawer>


                <NavDrawer id='references' name='Quick Reference'>

                    <NavDrawerItem href='/phase1/XCS221/reference/python' isFirst={true} isActive={pathname === "/phase1/XCS221/reference/python"} >
                        python quick reference
                    </NavDrawerItem>


                </NavDrawer>





            </div>
        </>
    );

}