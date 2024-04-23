import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FC } from 'react';
import { motion } from 'framer-motion';

const links = [
    { path: '/', name: 'Home' },
    { path: '/projects', name: 'My Projects' },
    { path: '/contact', name: 'Contact' },
];

interface NavBarProps {
    containerStyles: string;
    linkStyles: string;
    underlineStyles: string;
}

const NavBar: FC<NavBarProps> = ({
    containerStyles,
    linkStyles,
    underlineStyles,
}) => {
    const path = usePathname();
    return (
        <div className={`${containerStyles}`}>
            {links.map((item, index) => {
                return (
                    <Link
                        key={index.toString()}
                        href={item.path}
                        className={`capitalize ${linkStyles}`}
                    >
                        {item.path === path && (
                            <motion.span
                                initial={{ y: '-100%' }}
                                animate={{ y: 0 }}
                                transition={{ type: 'tween' }}
                                layoutId='underline'
                                className={`${underlineStyles}`}
                            />
                        )}
                        {item.name}
                    </Link>
                );
            })}
        </div>
    );
};

export default NavBar;
