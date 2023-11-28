import React, { ReactElement } from 'react';
import { FaRegUser } from 'react-icons/fa6';
import { LiaHomeSolid } from 'react-icons/lia';
import { MdBarChart, MdOutlineInsertDriveFile } from 'react-icons/md';
import { TbBrandHipchat } from 'react-icons/tb';
import ActiveLink from '../active-link';

type Props = {
    children: ReactElement;
};

const NavigationBar = ({ children }: Props) => {
    return (
        <div className='w-full h-full flex items-center justify-center'>
            {/* navigation */}
            <nav className='fixed bottom-0 left-0 w-full h-[12dvh] text-white flex items-center justify-center [box-shadow:0px_-5px_20px_5px_rgba(0,0,0,0.04)]'>
                <ul className='flex gap-1 justify-between w-[85%] mx-auto items-center'>
                    <ActiveLink
                        to='/home'
                        text='Home'
                        IconName={LiaHomeSolid}
                    />
                    <ActiveLink
                        to='/reports'
                        text='Reports'
                        IconName={MdOutlineInsertDriveFile}
                    />
                    <ActiveLink
                        to='/chat'
                        text='Chat'
                        IconName={TbBrandHipchat}
                    />
                    <ActiveLink
                        to='/budget'
                        text='Budget'
                        IconName={MdBarChart}
                    />
                    <ActiveLink
                        to='/profile'
                        text='Profile'
                        IconName={FaRegUser}
                    />
                </ul>
            </nav>

            {/* content */}
            <div className='w-full h-full mb-[12dvh] no-scrollbar flex items-center justify-center'>
                {children}
            </div>
        </div>
    );
};

export default NavigationBar;
