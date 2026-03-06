'use client';

import Link from 'next/link';
import { ReactNode } from 'react'


export default function NavDrawerItem({ href, isFirst, isActive, children }: { href: string, isFirst: boolean, isActive: boolean, children: ReactNode }) {

    var classNameMixin = 'grid grid-cols-1 jade-nav';
    if (!isFirst) {
        classNameMixin += ' jade-nav-border-top';
    }

    if (isActive) {
        classNameMixin += ' nav-active';
    }

    return (
        <>

            <div className={classNameMixin}>
                <Link className='jade-nav-link' href={href}>
                    <div className='ml-[5px]'>
                        {children}
                    </div>
                </Link>
            </div>

        </>
    );

}