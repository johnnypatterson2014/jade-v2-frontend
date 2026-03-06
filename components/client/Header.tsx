'use client';

import ButtonDropdown from '@/components/client/ButtonDropdown';
import Link from 'next/link';
import { usePathname } from "next/navigation";

export default function Header() {

    const blurInput = () => {
        // const myDiv = document.getElementById(value);
        // myDiv.value = value;
        document.activeElement.blur();
    }

    const pathname = usePathname();
    const pathSegments = pathname.split('/').filter(segment => segment);

    const breadcrumbs = pathSegments.map((segment, index) => {
        const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
        const label = segment.charAt(0) + segment.slice(1).replace(/-/g, " ");
        return { label, path };
    });

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
                    <div className='inline-block ml-[50px] code'>
                        {breadcrumbs.map((item, index) => (
                            <span key={index}>
                                <span>&nbsp;&#47;&nbsp;</span>

                                {index === breadcrumbs.length - 1 ? (
                                    <span className='bc-active'>{item.label}</span >
                                ) : (
                                    // <Link href={item.path}>{item.label} / </Link>
                                    <span>{item.label}</span >
                                )}
                            </span>

                        ))}
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
                                <Link onClick={() => blurInput()} href='/phase1/mmldss/course1/week1'>Math & Stats for Machine Learning</Link>
                            </li>

                        </ul>
                    </ButtonDropdown>

                </div>

            </div>

        </>
    );

}