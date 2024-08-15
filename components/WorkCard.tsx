import { FC } from 'react';
// import Image from 'next/image';

import { Construction } from 'lucide-react';

type Props = {
    imgSrc?: string;
    imgWidth?: number;
    imgHeight?: number;
    imgAlt?: string;
    description: string;
    date: string;
};

const WorkCard: FC<Props> = ({
    // imgSrc,
    // imgWidth,
    // imgHeight = 0,
    // imgAlt,
    description,
    date,
}) => {
    // const image = require(imgSrc);
    return (
        <div className="flex flex-col h-fit rounded-lg drop-shadow-xl px-8 pb-4 pt-8 gap-3  bg-white hover:scale-110 duration-300 ease-in-out">
            <div className="flex flex-col gap-6 justify-center items-center border-black h-auto border-b-2">
                <Construction size={75} />
                {/*
                <Image
                    src={imgSrc}
                    width={imgWidth}
                    height={imgHeight}
                    alt={imgAlt}
                />
                */}
                <div className="w-1 h-1 -mb-1 rounded-full bg-black outline outline-8 outline-white" />
            </div>
            <div>
                <div className="flex text-gray-400 justify-center">
                    {description}
                </div>
                <div className="flex text-gray-400 justify-center">{date}</div>
            </div>
        </div>
    );
};

export default WorkCard;
