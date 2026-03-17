'use client';

import { ReactNode } from 'react'

export default function Card({ name, children }: { name: string, children: ReactNode }) {

    return (
        <>
            <div className="flex flex-row pt-[20px]">
                <div className="flex-1 pr-[20px]">
                    <div className="jade-h4 m-[5px]">
                        {name}
                    </div>
                    <div className="assignment-answer mt-[10px] p-[15px]">
                        {children}
                    </div>
                </div>
            </div>

        </>
    );

}