'use client';

import Link from 'next/link';
import NavDrawer from '@/components/client/NavDrawer';
import NavDrawer2 from '@/components/client/NavDrawer2';
import NavDrawerItem from '@/components/client/NavDrawerItem';

export default function MainNav() {

    return (
        <>


            <div className='main-nav'>

                <NavDrawer name='Math for Machine Learning'>

                    <NavDrawer2 name='Calculus'>

                        <NavDrawerItem href='/mmldss/course2/week2' isFirst={true} >
                            Week 2
                        </NavDrawerItem>





                    </NavDrawer2>


                </NavDrawer>



            </div>
        </>
    );

}