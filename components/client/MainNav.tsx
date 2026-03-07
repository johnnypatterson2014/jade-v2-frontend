'use client';

import Link from 'next/link';
import NavDrawer from '@/components/client/NavDrawer';
import NavDrawer2 from '@/components/client/NavDrawer2';
import NavDrawerItem from '@/components/client/NavDrawerItem';
import React, { useEffect } from 'react';
import { usePathname } from "next/navigation";

export default function MainNav() {

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

                <NavDrawer id='XCS221' name='XCS221 - AI Principles & Techniques'>
                    <NavDrawer2 id='reference' parent_id='XCS221' name='Reference'>
                        <NavDrawerItem href='/phase1/XCS221/reference' isFirst={true} isActive={pathname === "/phase1/XCS221/reference"} >
                            Reference Material
                        </NavDrawerItem>


                    </NavDrawer2>
                </NavDrawer>

                <NavDrawer id='mmldss' name='Math & Stats for Machine Learning'>


                    <NavDrawer2 id='course1' parent_id='mmldss' name='Linear Algebra'>
                        <NavDrawerItem href='/phase1/mmldss/course1/week1' isFirst={true} isActive={pathname === "/phase1/mmldss/course1/week1"} >
                            Week 1 | Systems of linear equations
                        </NavDrawerItem>

                        <NavDrawerItem href='/phase1/mmldss/course1/week2' isFirst={false} isActive={pathname === "/phase1/mmldss/course1/week2"} >
                            Week 2 | Solving sys of linear eq
                        </NavDrawerItem>
                        <NavDrawerItem href='/phase1/mmldss/course1/week3' isFirst={false} isActive={pathname === "/phase1/mmldss/course1/week3"} >
                            Week 3 | Vectors & linear trans
                        </NavDrawerItem>
                        <NavDrawerItem href='/phase1/mmldss/course1/week4' isFirst={false} isActive={pathname === "/phase1/mmldss/course1/week4"} >
                            Week 4 | Determinants & eigenvectors
                        </NavDrawerItem>
                    </NavDrawer2>


                    <NavDrawer2 id='course2' parent_id='mmldss' name='Calculus'>
                        <NavDrawerItem href='/phase1/mmldss/course2/week1' isFirst={true} isActive={pathname === "/phase1/mmldss/course2/week1"} >
                            Week 1 | Derivatives & Optimization
                        </NavDrawerItem>
                        <NavDrawerItem href='/phase1/mmldss/course2/week2' isFirst={false} isActive={pathname === "/phase1/mmldss/course2/week2"} >
                            Week 2 | Gradients & Gradient Descent
                        </NavDrawerItem>
                        <NavDrawerItem href='/phase1/mmldss/course2/week3' isFirst={false} isActive={pathname === "/phase1/mmldss/course2/week3"} >
                            Week 3 | Optimization in Neural Networks
                        </NavDrawerItem>
                    </NavDrawer2>


                    <NavDrawer2 id='course3' parent_id='mmldss' name='Statistics'>
                        <NavDrawerItem href='/phase1/mmldss/course3/week1' isFirst={true} isActive={pathname === "/phase1/mmldss/course3/week1"} >
                            Week 1 | Probability Distributions
                        </NavDrawerItem>
                        <NavDrawerItem href='/phase1/mmldss/course3/week2' isFirst={false} isActive={pathname === "/phase1/mmldss/course3/week2"} >
                            Week 2 | Describing Prob Distributions
                        </NavDrawerItem>
                        <NavDrawerItem href='/phase1/mmldss/course3/week3' isFirst={false} isActive={pathname === "/phase1/mmldss/course3/week3"} >
                            Week 3 | Sampling & Point Estimation
                        </NavDrawerItem>
                        <NavDrawerItem href='/phase1/mmldss/course3/week4' isFirst={false} isActive={pathname === "/phase1/mmldss/course3/week4"} >
                            Week 4 | Confidence Intervals
                        </NavDrawerItem>
                    </NavDrawer2>


                </NavDrawer>


                <NavDrawer id='p4jd' name='Misc Notes'>
                    <NavDrawer2 id='week1' parent_id='p4jd' name='Python for Java Developers'>
                        <NavDrawerItem href='/phase1/p4jd/week1' isFirst={true} isActive={pathname === "/phase1/p4jd/week1"} >
                            Week 1 | Fundamentals
                        </NavDrawerItem>
                        <NavDrawerItem href='/phase1/p4jd/week2' isFirst={false} isActive={pathname === "/phase1/p4jd/week2"} >
                            Week 2 | Classes & Modules
                        </NavDrawerItem>
                        <NavDrawerItem href='/phase1/p4jd/week3' isFirst={false} isActive={pathname === "/phase1/p4jd/week3"} >
                            Week 3 | Numpy & Pandas
                        </NavDrawerItem>

                    </NavDrawer2>

                    <NavDrawer2 id='week1' parent_id='ps4ds' name='Practical Stats for DS'>
                        <NavDrawerItem href='/phase1/ps4ds/week1' isFirst={true} isActive={pathname === "/phase1/ps4ds/week1"} >
                            Practical Stats for Data Scientists
                        </NavDrawerItem>


                    </NavDrawer2>

                    <NavDrawer2 id='template' parent_id='template' name='Documentation'>
                        <NavDrawerItem href='/phase1/template' isFirst={true} isActive={pathname === "/phase1/template"} >
                            Template
                        </NavDrawerItem>


                    </NavDrawer2>

                </NavDrawer>



            </div>
        </>
    );

}