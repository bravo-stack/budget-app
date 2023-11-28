import React from 'react';
import NavigationBar from '../../components/navigation-bar';

const Chat = () => {
    return (
        <NavigationBar>
            <div className='w-full h-full flex flex-col pt-5'>
                <h2 className='text-[28px] font-bold text-[#001233]'>Chat</h2>
            </div>
        </NavigationBar>
    );
};

export default Chat;
