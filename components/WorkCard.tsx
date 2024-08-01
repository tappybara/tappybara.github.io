import { FC } from "react";
import Image from "next/image";

type Props = {};

const WorkCard: FC<Props> = () => {
  return (
    <div className="flex flex-col h-fit rounded-lg drop-shadow-xl px-8 pb-4 pt-8 gap-5  bg-white hover:scale-110 duration-300 ease-in-out">
      <div className="flex flex-col gap-6">
        <Image src={""} alt="Williams Logo" width={150} />
        <div className="flex w-full h-0 border border-gray-300 justify-center items-center">
          <div className="flex w-1 h-1 rounded-full bg-gray-300 outline outline-8 outline-white "></div>
        </div>
      </div>
      <div>
        <div className="flex text-gray-400 justify-center">
          personal portfolio
        </div>
        <div className="flex text-gray-400 justify-center">07.24</div>
      </div>
    </div>
  );
};

export default WorkCard;