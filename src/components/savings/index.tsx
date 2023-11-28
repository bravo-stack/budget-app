import { CircularProgress, Icon } from '@chakra-ui/react';
import React from 'react';
import { MdOutlineSavings } from 'react-icons/md';

const Savings = () => {
    return (
        <div className='w-full flex items-center gap-3'>
            {/* image */}
            <div className='w-fit flex flex-col items-center relative'>
                <div className='flex flex-col items-center w-full relative '>
                    <div className='absolute bg-[#038A3933] rounded-[50%] h-14 w-14 right-[50%] translate-x-[50%] translate-y-[50%] bottom-[50%] inline-flex items-center justify-center'>
                        <Icon
                            as={MdOutlineSavings}
                            color='#038A39'
                            className='text-2xl'
                        />
                    </div>
                    <CircularProgress
                        trackColor='white'
                        capIsRound={true}
                        size='62px'
                        thickness='7px'
                        value={20}
                        color='#038A39'
                    />
                </div>
            </div>

            {/* title and percent */}
            <div className='flex w-full flex-col gap-1'>
                <div className='w-full flex items-center justify-between gap-2'>
                    {/* text */}
                    <span className='text-[#001233] text-sm font-semibold'>
                        Savings
                    </span>

                    {/* amount */}
                    <p className='text-sm font-semibold text-[#001233]'>
                        10,000/
                        <span className='text-[#C1C4CD] font-medium'>
                            24,000
                        </span>
                    </p>
                </div>
                <span className='text-sm text-[#707480] font-medium'>20%</span>
            </div>
        </div>
    );
};

export default Savings;
