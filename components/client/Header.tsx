'use client';

import ButtonDropdown from '@/components/client/ButtonDropdown';
import Link from 'next/link';

export default function Header() {

    const blurInput = () => {
        // const myDiv = document.getElementById(value);
        // myDiv.value = value;
        document.activeElement.blur();
    }

    return (
        <>

            <div className="flex mt-[15px] mb-[10px] w-full">
                <div className='flex-1'>
                    <h1 className="right-border">
                        launchpad
                    </h1>
                    <div className="inline-block">
                        <h2>powered by jade</h2>
                    </div>
                </div>
                <div className="flex-none mr-[20px]">

                    <ButtonDropdown name='launch'>
                        <ul tabIndex={0} className="w-[250px] dropdown-content text-xs jade-menu menu bg-zinc-900 z-10 w-40 mt-[5px] mb-[0px] ml-[2px] mr-[2px]">
                            <li className='jade-menu-li jade-border-bottom'>
                                <Link onClick={() => blurInput()} href='/'>Home</Link>
                                {/* <a onClick={() => updateInputForDropdown('user')}>Home</a> */}
                            </li>
                            <li className='jade-menu-li'>
                                <Link onClick={() => blurInput()} href='/mmldss'>Math for Machine Learning</Link>
                            </li>

                        </ul>
                    </ButtonDropdown>

                </div>
            </div>

        </>
    );

}