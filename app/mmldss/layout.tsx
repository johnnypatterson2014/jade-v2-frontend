'use client';

import MainNav from "@/components/client/MainNav";

export default function Layout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <>
      <div className="flex flex-row items-start mt-[15px] mb-[15px] w-full">

        <div className='flex-none ml-[20px]'>
          <div className="grid grid-cols-1 gap-[10px]">

            <MainNav />

          </div>
        </div>

        <div className='grow jade-card ml-[15px] mr-[20px]'>
          <div className="m-[5px]">


            {children}

          </div>
        </div>

      </div>
    </>
  );
}

