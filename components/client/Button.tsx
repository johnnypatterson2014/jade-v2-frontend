'use client';

import { ReactNode } from 'react'

export default function Button({ children }: { children: ReactNode }) {

  return (
    <>
      <div role="button" className="btn btn-xs bg-zinc-900 hover:bg-zinc-300 border border-zinc-600 text-zinc-200 hover:text-zinc-900 shadow-none">
        <div className='jade-font'>
          {children}
        </div>

      </div>
    </>
  );

}