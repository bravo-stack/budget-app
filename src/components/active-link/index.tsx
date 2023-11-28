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
            className='flex flex-col gap-2 items-center hover:no-underline'
        >
            {/* icon */}
            {isActive ? (
                <Icon as={IconName} color='#0466C8' className='text-2xl' />
            ) : (
                <Icon as={IconName} color='#C1C4CD' className='text-2xl' />
            )}

            {/* text */}
            {isActive ? (
                <span className='font-medium text-xs text-[#001233]'>
                    {text}
                </span>
            ) : (
                <span className='font-normal text-xs text-[#C1C4CD]'>
                    {text}
                </span>
            )}
        </NavLink>
    );
};

export default ActiveLink;
