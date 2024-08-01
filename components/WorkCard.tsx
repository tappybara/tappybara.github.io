import { FC } from "react";
import Image from "next/image";

type Props = {
  imgSrc: string;
  description: string;
  date: string;
};

const WorkCard: FC<Props> = ({ imgSrc, description, date }) => {
  // const image = require(imgSrc);
  return (
    <div className="flex flex-col h-fit rounded-lg drop-shadow-xl px-8 pb-4 pt-8 gap-5  bg-white hover:scale-110 duration-300 ease-in-out">
      <div className="flex flex-col gap-6">
        <div className="flex w-full h-0 border border-gray-300 justify-center items-center">
          <div className="flex w-1 h-1 rounded-full bg-gray-300 outline outline-8 outline-white "></div>
        </div>
      </div>
      <div>
        <div className="flex text-gray-400 justify-center">{description}</div>
        <div className="flex text-gray-400 justify-center">{date}</div>
      </div>
    </div>
  );
};

export default WorkCard;
