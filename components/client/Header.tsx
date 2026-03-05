'use client';

import ButtonDropdown from '@/components/client/ButtonDropdown';

export default function Header() {

    const updateInputForDropdown = (value: string) => {
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

                    <ButtonDropdown name='quick nav'>
                        <ul tabIndex={0} className="w-[300px] dropdown-content text-xs jade-menu menu bg-zinc-900 z-10 w-40 mt-[5px] mb-[2px] ml-[2px] mr-[2px]">
                            <li className='jade-menu-li'><a onClick={() => updateInputForDropdown('user')}>home</a></li>
                            <li className='jade-menu-li jade-menu-li-bottom'><a onClick={() => updateInputForDropdown('developer')}>math for machine learning and data science</a></li>
                        </ul>
                    </ButtonDropdown>

                </div>
            </div>

        </>
    );

}