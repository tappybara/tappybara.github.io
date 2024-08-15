import { FC } from 'react';
import { Zen_Kurenaido } from 'next/font/google';

type Props = {
    colour?: string;
};

const ZK = Zen_Kurenaido({
    style: ['normal'],
    weight: ['400'],
    subsets: ['latin'],
});

const Header: FC<Props> = ({ colour = 'black' }) => {
    return (
        <div className="flex justify-center w-full lg:w-3/6 p-4 z-10 select-none">
            <div
                className={`flex flex-col justify-start items-center tracking-wider text-lg text-${colour} ${ZK.className}`}
            >
                <span>・謝・</span>
                <span
                    className={`w-4 h-2 rounded-t-none rounded-b-full border-t-0 border-l-2 border-r-2 border-b-2 border-${colour}`}
                />
            </div>
        </div>
    );
};

export default Header;
