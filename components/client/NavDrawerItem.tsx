'use client';

import Link from 'next/link';
import { ReactNode } from 'react'

export default function NavDrawerItem({ href, isFirst, children }: { href: string, isFirst: boolean, children: ReactNode }) {

    var classNameMixin = 'grid grid-cols-1 jade-nav';
    if (!isFirst) {
        classNameMixin += ' jade-nav-border-top';
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