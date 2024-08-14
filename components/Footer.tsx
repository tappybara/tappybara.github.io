import React, { FC } from 'react';
import Link from 'next/link';

type Props = {
    colour?: string;
};

const Footer: FC<Props> = ({ colour = 'black' }) => {
    return (
        <div className="flex flex-col col-start-3 col-span-8 row-start-12 p-4 justify-end z-10">
            <div className="flex justify-between">
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
        </div>
    );
};

export default Footer;
