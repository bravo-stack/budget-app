import { Icon } from '@chakra-ui/icons';
import React from 'react';
import { IconType } from 'react-icons';
import { NavLink, NavLinkProps, useLocation } from 'react-router-dom';

interface ActiveLinkProps extends NavLinkProps {
    IconName: IconType;
    text: string;
}

const ActiveLink = ({ to, text, IconName }: ActiveLinkProps & NavLinkProps) => {
    // DATA INITIALIZATION
    const location = useLocation();
    const isActive = location.pathname.includes(`${to}`);
    return (
        <NavLink
            end
            to={to}
            className={`flex pc:w-full flex-col pc:flex-row gap-2 pc:gap-4 items-center hover:no-underline pc:p-5 pc:hover:opacity-80 pc:rounded-2xl ${
                isActive && 'pc:bg-white'
            }`}
        >
            {/* icon */}
            {isActive ? (
                <Icon
                    as={IconName}
                    color='#0466C8'
                    className='text-2xl pc:text-3xl'
                />
            ) : (
                <Icon
                    as={IconName}
                    color='#C1C4CD'
                    className='text-2xl pc:text-3xl pc:text-white'
                />
            )}

            {/* text */}
            {isActive ? (
                <span className='font-medium pc:font-bold text-xs pc:text-lg text-[#001233] pc:text-[#0466C8]'>
                    {text}
                </span>
            ) : (
                <span className='font-normal text-xs pc:text-lg text-[#C1C4CD] pc:text-white'>
                    {text}
                </span>
            )}
        </NavLink>
    );
};

export default ActiveLink;
