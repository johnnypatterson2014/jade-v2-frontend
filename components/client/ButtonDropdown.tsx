'use client';

import { ReactNode } from 'react'
import Button from '@/components/client/Button';
import ButtonIcon from '@/components/client/ButtonIcon';

export default function ButtonDropdown({ name, children }: { name: string, children: ReactNode }) {

    return (
        <>
            <div className="dropdown dropdown-bottom dropdown-end">
                <div tabIndex={0}>

                    <ButtonIcon>
                        {name}
                    </ButtonIcon>



                </div>

                {children}

            </div>

        </>
    );

}