'use client';

import React from 'react';
import {
    RiLinkedinFill,
    RiGithubFill,
    RiFacebookFill,
    RiInstagramFill,
} from 'react-icons/ri';
import Link from 'next/link';

interface SocialItem {
    path: string;   
    name: React.ReactNode;  
}

interface SocialsProps {
    containerStyles?: string; 
    iconsStyles?: string;     
}

const icons: SocialItem[] = [
    { path: '/', name: <RiLinkedinFill /> },
    { path: '/', name: <RiGithubFill /> },
    { path: '/', name: <RiFacebookFill /> },
    { path: '/', name: <RiInstagramFill /> },
];

const Socials: React.FC<SocialsProps> = ({ containerStyles = '', iconsStyles = '' }) => {
    return (
        <div className={`${containerStyles}`}>
            {icons.map((item, index) => {
                return (
                    <Link href={item.path} key={index.toString()}>
                        <div className={`${iconsStyles}`}>{item.name}</div>
                    </Link>
                );
            })}
        </div>
    );
};

export default Socials;
