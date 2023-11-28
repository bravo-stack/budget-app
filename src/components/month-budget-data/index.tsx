import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
import React from 'react';
import FoodAndDrink from '../food-and-drink';
import Savings from '../savings';

type MonthBudgetDataProps = {
    progressValue: number;
    amountSpent: number;
    totalAmount: number;
};

const MonthBudgetData = ({
    progressValue,
    amountSpent,
    totalAmount,
}: MonthBudgetDataProps) => {
    return (
        <div className='w-full flex flex-col gap-8 pc:flex-row-reverse'>
            {/* circular progress */}
            <div className='w-full pc:w-3/5 flex flex-col gap-8 mt-5 pc:mt-0 pc:shadow-lg pc:rounded-xl pc:p-6'>
                {/* progress */}
                <div className='w-full flex flex-col items-center relative'>
                    <div className='flex flex-col items-center w-full relative '>
                        <div className='border-[14px] absolute border-[#0466C866] rounded-[50%] h-40 w-40 right-[50%] translate-x-[50%] translate-y-[50%] bottom-[50%]' />
                        <CircularProgress
                            trackColor='white'
                            capIsRound={true}
                            size='150px'
                            thickness='7px'
                            value={progressValue}
                            color='#0466C8'
                        >
                            <CircularProgressLabel className='font-bold text-4xl text-[#0466C8]'>
                                {`${progressValue}%`}
                            </CircularProgressLabel>
                        </CircularProgress>
                    </div>
                </div>

                {/* texts */}
                <div className='w-full flex flex-col gap-1 text-center'>
                    <span className='text-[#707480] text-sm font-semibold'>
                        Amount spent so far
                    </span>
                    <p className='text-base font-semibold text-[#0466C8]'>
                        {`₦${amountSpent.toLocaleString('en-US')}/`}
                        <span className='text-[#67A2DC] font-medium'>
                            {`₦${totalAmount.toLocaleString('en-US')}`}
                        </span>
                    </p>
                </div>
            </div>

            {/* category breakdown */}
            <div className='flex flex-col w-full gap-5 pc:shadow-lg pc:rounded-xl pc:p-6'>
                {/* sub heading */}
                <h4 className='font-semibold pc:font-bold text-[#001233] text-[21px]'>
                    Category Breakdown
                </h4>

                {/* horizontal line on pc */}
                <hr className='hidden pc:block bg-[#0466C8]' />

                {/* list */}
                <ul className='w-full flex flex-col gap-4'>
                    <FoodAndDrink />
                    <Savings />
                </ul>
            </div>
        </div>
    );
};

export default MonthBudgetData;
