'use client';

import Link from 'next/link';
import NavDrawer from '@/components/client/NavDrawer';
import NavDrawer2 from '@/components/client/NavDrawer2';
import NavDrawerItem from '@/components/client/NavDrawerItem';
import React, { useEffect } from 'react';
import { usePathname } from "next/navigation";
import Button from '@/components/client/Button';

export default function MainNavMM() {

    useEffect(() => {
        toggleAll(true)
        // resetCurrentNav();
    }, []); // Run once on component mount

    const blurInput = () => {
        // const myDiv = document.getElementById(value);
        // myDiv.value = value;
        document.activeElement.blur();
        // resetCurrentNav();
    }

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


    return (
        <>
            <div className='main-nav-mm'>

                <NavDrawerItem href='/mindmap/XCS221' isFirst={true} isActive={pathname === "/mindmap/XCS221"} >
                    XCS221
                </NavDrawerItem>

                <NavDrawerItem href='/mindmap/XCS236' isFirst={false} isActive={pathname === "/mindmap/XCS236"} >
                    XCS236
                </NavDrawerItem>

                <NavDrawerItem href='/mindmap/core' isFirst={false} isActive={pathname === "/mindmap/core"} >
                    Core Concepts
                </NavDrawerItem>


                {/* <div className='jade-menu'>
                    <div className='jade-menu-li'>
                        <Link onClick={() => blurInput()} href='/mindmap/XCS236'>XCS236</Link>
                    </div>
                </div> */}



            </div>
        </>
    );

}