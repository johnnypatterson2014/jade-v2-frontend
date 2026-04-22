'use client';

import MdpViDemo from '@/components/client/MdpViDemo';

export default function Home() {

  return (
    <>

      <div className='flex-1 mt-[0px] ml-[40px] mr-[20px] mb-[10px]'>

        <div className='jade-h1'>
          NumberLine Value Iteration MDP Visualizer
        </div>

        <MdpViDemo />

      </div>

    </>
  );
}
