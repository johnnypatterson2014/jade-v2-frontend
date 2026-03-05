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

                    <NavDrawer2 name='Linear algebra'>

                        <NavDrawerItem href='/mmldss/course1/week1' isFirst={true} >
                            systems of linear eq
                        </NavDrawerItem>

                        <NavDrawerItem href='/mmldss/course1/week2' isFirst={false} >
                            solving sys of linear eq
                        </NavDrawerItem>



                    </NavDrawer2>


                </NavDrawer>



            </div>
        </>
    );

}