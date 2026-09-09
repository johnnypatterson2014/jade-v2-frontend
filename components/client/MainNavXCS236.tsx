'use client';

import Link from 'next/link';
import NavDrawer from '@/components/client/NavDrawer';
import NavDrawer2 from '@/components/client/NavDrawer2';
import NavDrawerItem from '@/components/client/NavDrawerItem';
import React, { useEffect } from 'react';
import { usePathname } from "next/navigation";
import Button from '@/components/client/Button';

export default function MainNavXCS236() {

    useEffect(() => {
        toggleAll(true)
        // resetCurrentNav();
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
                        {/* <div className='flex-none content-end'>
                            <Button>
                                <a onClick={() => resetCurrentNav()}>reset</a>
                            </Button>
                        </div> */}
                    </div>
                </div>


                <NavDrawer id='XCS236' name='XCS236: Deep Generative Models'>
                    <NavDrawer2 id='2' parent_id='XCS236' name='Assignments'>
                        <NavDrawerItem href='/XCS236/a1' isFirst={true} isActive={pathname === "/XCS236/a1"} >
                            Assignment 1
                        </NavDrawerItem>

                    </NavDrawer2>

                    <NavDrawer2 id='2' parent_id='XCS236' name='Claude Notes'>
                        <NavDrawerItem href='/XCS236/claude/qa1' isFirst={true} isActive={pathname === "/XCS236/claude/qa1"} >
                            Claude Notes 1
                        </NavDrawerItem>

                    </NavDrawer2>

                    <NavDrawer2 id='2' parent_id='XCS236' name='Module 1: Intro'>
                        <NavDrawerItem href='/XCS236/m1/module_11' isFirst={true} isActive={pathname === "/XCS236/m1/module_11"} >
                            1.1 | Intro to Generative Models
                        </NavDrawerItem>
                    </NavDrawer2>

                    <NavDrawer2 id='2' parent_id='XCS236' name='Module 2: Autoregressive Models'>
                        <NavDrawerItem href='/XCS236/m2/module_21' isFirst={true} isActive={pathname === "/XCS236/m2/module_21"} >
                            2.1 | Autoregressive Models
                        </NavDrawerItem>
                        <NavDrawerItem href='/XCS236/m2/module_22' isFirst={false} isActive={pathname === "/XCS236/m2/module_22"} >
                            2.2 | Maximum Likelihood Learning
                        </NavDrawerItem>
                    </NavDrawer2>
                    <NavDrawer2 id='2' parent_id='XCS236' name='Module 3: Latent Variable Models'>
                        <NavDrawerItem href='/XCS236/m3/module_31' isFirst={true} isActive={pathname === "/XCS236/m3/module_31"} >
                            3.1 | Latent Variable Models
                        </NavDrawerItem>
                        <NavDrawerItem href='/XCS236/m3/module_32' isFirst={false} isActive={pathname === "/XCS236/m3/module_32"} >
                            3.2 | Variational Autoencoder (VAE)
                        </NavDrawerItem>
                    </NavDrawer2>



                </NavDrawer>



            </div>
        </>
    );

}