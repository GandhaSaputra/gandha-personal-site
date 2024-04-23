'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';
import { FC, PropsWithChildren } from 'react';

export const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = ({
    children,
    ...props
}) => {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};
