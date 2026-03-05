'use client';

import { ReactNode } from 'react'

export default function Tab({ title, isChecked, children }: { title: string, isChecked: boolean, children: ReactNode }) {

  return (
    <>
      <input type="radio" name="my_tabs_1" className="tab" aria-label={title} defaultChecked={isChecked} />
      <div className="tab-content jade-tab p-6">
        <div className='flex mt-[0px] gap-[15px]'>
          <div className='flex-1 min-w-[600px] mr-[20px]'>

            <div className="page-notes">
              <div className='flex gap-[15px]'>

                {children}

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );

}