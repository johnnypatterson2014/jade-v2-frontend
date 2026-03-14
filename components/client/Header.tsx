'use client';

import ButtonDropdown from '@/components/client/ButtonDropdown';
import Button from '@/components/client/Button';
import Link from 'next/link';
import { usePathname } from "next/navigation";
import ButtonIcon from '@/components/client/ButtonIcon';

export default function Header() {

    const blurInput = () => {
        // const myDiv = document.getElementById(value);
        // myDiv.value = value;
        document.activeElement.blur();
        // resetCurrentNav();
    }

    const pathname = usePathname();
    const pathSegments = pathname.split('/').filter(segment => segment);

    const breadcrumbs = pathSegments.map((segment, index) => {
        const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
        const label = segment.charAt(0) + segment.slice(1).replace(/-/g, " ");
        return { label, path };
    });

    //     const viewModal = (modal_id: string, e?: any) => {
    //         e?.preventDefault()
    //         document.getElementById('modal-' + modal_id).showModal()
    // }

    const toggleAll = (value: boolean) => {
        const elements = document.querySelectorAll('.jade-checkbox-level-1');
        elements.forEach(element => {
            // console.log(element.textContent);
            element.checked = value;
        });
        const elements2 = document.querySelectorAll('.jade-checkbox-level-2');
        elements2.forEach(element2 => {
            // console.log(element.textContent);
            element2.checked = value;
        });
    }

    const resetCurrentNav = () => {
        toggleAll(false);
        const parentId = pathSegments[1];
        const childId = pathSegments[2];
        if (document.getElementById(parentId)) {
            document.getElementById(parentId).checked = true;
        }
        if (document.getElementById(parentId + '-' + childId)) {
            document.getElementById(parentId + '-' + childId).checked = true;
        }
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
                    <div className='inline-block ml-[160px] code'>
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
                <div className="flex-1 justify-end mr-[20px]">

                    <div className='flex shrink justify-end'>
                        <div className='flex gap-[10px]'>

                            {/* <div className='flex-none content-end'>
                                <Button>
                                    <a onClick={() => toggleAll(false)}>collapse all</a>
                                </Button>
                            </div>
                            <div className='flex-none content-end'>
                                <Button>
                                    <a onClick={() => toggleAll(true)}>expand all</a>
                                </Button>
                            </div>*/}

                            <div className='flex-none content-center'>
                                <ButtonIcon>
                                    <a onClick={() => window.MathJax.typeset()}>run mathjax typeset</a>
                                </ButtonIcon>
                            </div>

                            <div className='flex-none'>
                                <ButtonDropdown name='launch'>
                                    <ul tabIndex={0} className="w-[250px] dropdown-content text-xs jade-menu menu bg-zinc-900 z-10 w-40 mt-[5px] mb-[0px] ml-[2px] mr-[2px]">
                                        <li className='jade-menu-li jade-border-bottom'>
                                            <Link onClick={() => blurInput()} href='/'>Home</Link>
                                            {/* <a onClick={() => updateInputForDropdown('user')}>Home</a> */}
                                        </li>
                                        <li className='jade-menu-li jade-border-bottom'>
                                            <Link onClick={() => blurInput()} href='/phase0/mmldss/course1/week1'>Phase 0: Math & Stats for ML</Link>
                                        </li>
                                        <li className='jade-menu-li'>
                                            <Link onClick={() => blurInput()} href='/phase1/XCS221/module2/s2_1'>Phase 1: XCS221 - AI Principles</Link>
                                        </li>

                                    </ul>
                                </ButtonDropdown>
                            </div>
                        </div>
                    </div>



                </div>

            </div>

        </>
    );

}