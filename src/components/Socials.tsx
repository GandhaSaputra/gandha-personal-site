'use client';

import React from 'react';
import {
    RiLinkedinFill,
    RiGithubFill,
    RiFacebookFill,
    RiInstagramFill,
} from 'react-icons/ri';

import Link from 'next/link';

const icons = [
    { path: '/', name: <RiLinkedinFill /> },
    { path: '/', name: <RiGithubFill /> },
    { path: '/', name: <RiFacebookFill /> },
    { path: '/', name: <RiInstagramFill /> },
];

const Socials = ({ containerStyles, iconsStyles }) => {
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
