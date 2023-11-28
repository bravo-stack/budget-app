import {
    Card,
    CardBody,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
} from '@chakra-ui/react';
import React from 'react';
import MonthBudgetData from '../../components/month-budget-data';
import NairaIcon from '../../components/naira-icon';
import NavigationBar from '../../components/navigation-bar';

const Budget = () => {
    return (
        <NavigationBar>
            <div className='w-full h-full flex flex-col gap-6 pt-5'>
                <div className='w-full flex flex-col gap-6 pc:justify-between'>
                    {/* heading */}
                    <h2 className='text-[28px] font-bold text-[#001233]'>
                        Budget
                    </h2>

                    {/* monthly budget */}
                    <div className='w-full pc:w-fit flex flex-col gap-3'>
                        {/* first content */}
                        <div className='w-full flex items-center gap-3'>
                            <NairaIcon />
                            <h4 className='text-[#707480] text-sm'>
                                Monthly Budget
                            </h4>
                        </div>

                        {/* second content: card */}
                        <Card
                            shadow='0px 5px 10px 2px rgba(0, 0, 0, 0.03)'
                            rounded='10px'
                            size='sm'
                        >
                            <CardBody>
                                <Text className='text-[#001233] text-[28px] font-bold'>
                                    ₦120,000
                                </Text>
                            </CardBody>
                        </Card>
                    </div>
                </div>

                {/* budget details */}
                <Tabs width='100%' variant='unstyled'>
                    <TabList className='flex items-center gap-5' width='100%'>
                        <Tab
                            paddingLeft={0}
                            fontSize='16px'
                            fontWeight='600'
                            _selected={{
                                color: '#0466C8',
                            }}
                        >
                            Last Month
                        </Tab>
                        <Tab
                            paddingLeft={0}
                            fontSize='16px'
                            fontWeight='600'
                            _selected={{
                                color: '#0466C8',
                            }}
                        >
                            This Month
                        </Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel paddingLeft={0}>
                            <MonthBudgetData
                                progressValue={52}
                                amountSpent={62400}
                                totalAmount={120000}
                            />
                        </TabPanel>
                        <TabPanel paddingLeft={0}>
                            <MonthBudgetData
                                progressValue={49}
                                amountSpent={58800}
                                totalAmount={120000}
                            />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
        </NavigationBar>
    );
};

export default Budget;
