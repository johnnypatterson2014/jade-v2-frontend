'use client';

import { ReactNode } from 'react'

export default function CardDrawer({ name, id, children }: { name: string, id: string, children: ReactNode }) {

    return (
        <>
            <div className="collapse mb-[1px] mt-[5px]">
                <input id={`${id}`} className='p-[0px] jade-checkbox-level-3' type="checkbox" />
                <div className="collapse-title">
                    <div className='jade-drawer2'>

                        <div className="flex flex-row items-center">
                            <div className="grow">

                                <div className="jade-h5 ml-[10px] mt-[3px] mb-[3px]">
                                    {name}
                                </div>

                            </div>
                            <div className="flex-none mr-[10px]">
                                <div className='flex flex-row'>
                                    <div className='flex-1'>
                                        &nbsp;
                                    </div>
                                    <div className='flex-none'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="#aaaaaa" d="M12 6a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm8 0a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm-8 8a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm8 0a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm-8 8a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm8 0a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4z" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="collapse-content mb-[1px] mt-[5px] ml-[5px] mr-[5px]">

                    <div className="assignment-answer p-[15px]">
                        {children}
                    </div>

                </div>
            </div>

        </>
    );

}