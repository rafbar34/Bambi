import Aos from 'aos';
import React, { useEffect } from 'react';

export const Footer = () => {
    return (
        <footer className='w-full flex flex-col items-end jusify-end opacity-50 bg-gray-400  h-20'>
            <div className='text-sm flex h-full w-full items-center justify-center text-black'>
                Bambi ®
            </div>
            <div className='text-xs flex h-1/4 w-full items-end justify-center text-black'>
                created by Rafal Gołąbek
            </div>
        </footer>
    )
};