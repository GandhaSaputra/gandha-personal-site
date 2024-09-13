'use client';

import React from 'react';
import CountUp from 'react-countup';
// Define the interface for the Badge component props
interface BadgeProps {
    containerStyles?: string; // Optional string for custom styles
    icon: React.ReactNode;    // The icon can be any React node (like an element or component)
    endCountNum: number;      // Number for the CountUp end value
    endCountText?: string;    // Optional string to follow the CountUp number
    badgeText?: string;       // Optional string for additional text
}

const Badge: React.FC<BadgeProps> = ({
    containerStyles = '',  // Default to an empty string if not provided
    icon,
    endCountNum,
    endCountText = '',      // Default to an empty string if not provided
    badgeText = '',         // Default to an empty string if not provided
}) => {
    return (
        <div className={`badge ${containerStyles}`}>
            <div className='text-3xl text-primary '>{icon}</div>
            <div className='flex items-center gap-x-2'>
                <div className='text-4xl leading-none font-bold text-primary'>
                    <CountUp end={endCountNum} delay={1} duration={4} />
                    {endCountText}
                </div>
                <div className='max-w-[70px] leading-none text-[15px] font-medium text-black'>
                    {badgeText}
                </div>
            </div>
        </div>
    );
};

export default Badge;
