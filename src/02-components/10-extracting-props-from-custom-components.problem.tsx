// Imagine NavBar is an external library!

export const NavBar = (props: { title: string; links: string[]; children: React.ReactNode }) => {
    return <div>Some content</div>;
};

import { ComponentProps } from 'react';
// Your app:

import { Equal, Expect } from '../helpers/type-utils';

type NavBarProps = ComponentProps<typeof NavBar>;

type test = Expect<
    Equal<
        NavBarProps,
        {
            title: string;
            links: string[];
            children: React.ReactNode;
        }
    >
>;
