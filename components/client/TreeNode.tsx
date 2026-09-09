'use client';

import { ReactNode } from 'react'
import Button from '@/components/client/Button';

export default function TreeNode({ name, src, children }: { name: string, src: string, children: ReactNode }) {

  return (
    <>
      <div className='flex flex-row items-start mb-[1px]'>
        <div className='flex-none'>
          <div className='pl-[10px] pr-[5px] pt-[4px]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256"><path fill="currentColor" d="m210.83 178.83l-48 48a4 4 0 0 1-5.66-5.66L198.34 180H64a4 4 0 0 1-4-4V32a4 4 0 0 1 8 0v140h130.34l-41.17-41.17a4 4 0 1 1 5.66-5.66l48 48a4 4 0 0 1 0 5.66Z" /></svg>
          </div>
        </div>
        <div className='flex-1 pt-[7px]'>
          <Button>
            {/* <a onClick={() => createMarkup(src)}>{name}</a> */}
            {name}
          </Button>

          {children}

        </div>

      </div>

    </>
  );

}