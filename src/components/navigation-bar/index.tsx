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
        <div className='w-full h-full flex items-center justify-center pc:items-start pc:justify-start relative z-10'>
            {/* navigation */}
            <nav className='bg-white pc:static pc:w-[30dvw] fixed bottom-0 left-0 w-full h-[12dvh] text-white flex items-center justify-center [box-shadow:0px_-5px_20px_5px_rgba(0,0,0,0.04)] z-[100] pc:flex-col pc:items-start pc:justify-start pc:gap-8 pc:h-[100dvh] pc:top-0 pc:shadow-none pc:bg-[#0466C8] pc:px-10 pc:py-16'>
                {/* logo text */}
                <h1 className='hidden pc:block font-bold text-3xl text-white'>
                    Budget App
                </h1>
                <ul className='flex gap-1 justify-between w-[90%] pc:mx-0 mx-auto items-center pc:items-start pc:flex-col pc:justify-start pc:w-full pc:h-full'>
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
            <div className='w-[90%] pc:w-[70dvw] pc:px-10 pc:py-[44px] mx-auto h-full mb-[12dvh] no-scrollbar flex items-center justify-center relative z-20'>
                {children}
            </div>
        </div>
    );
};

export default NavigationBar;
