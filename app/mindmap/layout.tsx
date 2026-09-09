'use client';

import MainNavMM from "@/components/client/MainNavMM";


export default function Layout({ children, }: Readonly<{ children: React.ReactNode; }>) {


  return (
    <>
      <div className="flex flex-row items-start mt-[15px] mb-[15px] w-full">

        <div className='flex-none ml-[10px]'>
          <div className="grid grid-cols-1 gap-[10px]">

            <MainNavMM />

          </div>
        </div>

        {children}

      </div>
    </>
  );
}

