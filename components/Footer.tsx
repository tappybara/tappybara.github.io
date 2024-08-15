import React, { FC } from 'react';
import Link from 'next/link';

type Props = {
    colour?: string;
};

// call this navigation instead
// need a menu...

const Footer: FC<Props> = ({ colour = 'black' }) => {
    return (
        <div className="flex w-full lg:w-3/6 p-4 justify-evenly z-10">
            <Link className={`text-${colour}`} href="/">
                home
            </Link>
            <Link className={`text-${colour}`} href="/about">
                about
            </Link>
            <Link className={`text-${colour}`} href="/works">
                works
            </Link>
            <Link className={`text-${colour}`} href="/contact">
                contact
            </Link>
        </div>
    );
};

export default Footer;
