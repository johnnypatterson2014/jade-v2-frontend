'use client';

import ShortestPathDemo from '@/components/client/ShortestPathDemo';

export default function Home() {

  return (
    <>

      <div className='flex-1 mt-[0px] ml-[40px] mr-[20px] mb-[10px]'>

        <div className='jade-h1'>
          Shortest Path Visualizer
        </div>

        <ShortestPathDemo />

      </div>

    </>
  );
}
