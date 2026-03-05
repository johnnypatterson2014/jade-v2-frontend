'use client';

import { ReactNode } from 'react'

export default function Tab2({ title, isChecked, children }: { title: string, isChecked: boolean, children: ReactNode }) {

  return (
    <>
      <input type="radio" name="my_tabs_2" className="tab" aria-label={title} defaultChecked={isChecked} />
      <div className="tab-content">


        <div className="page-notes">

          <div className="grid min-w-[800px] grid-cols-1 justify-items-center">
            <div className="w-[800px] m-[10px] p-[10px]">


              {children}

            </div>
          </div>
        </div>

      </div>
    </>
  );

}