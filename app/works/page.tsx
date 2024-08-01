import Image from "next/image";

import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Williams from "../../assets/images/williams.png";

export default function Home() {
  return (
    <Layout>
      <div className="flex w-3/6 min-h-screen ">
        <div className="grid w-full grid-cols-6 grid-rows-6 gap-5">
          <Header />
          <div className="flex relative col-span-6 row-start-2 row-span-4 overflow-hidden"></div>
          <Footer />
        </div>
      </div>

      <div className="flex w-3/6 screen">
        <div className="grid w-full grid-cols-6 grid-rows-12 gap-5">
          <div className="flex items-end justify-evenly pb-3 col-span-6 row-start-2 row-span-3 bg-gradient-to-t from-[#E8E5E5] via-[#E2E2E2] via-25% to-slate to-40%">
            <div className="flex flex-col h-fit rounded-lg drop-shadow-xl px-8 pb-4 pt-8 gap-5  bg-white hover:scale-110 duration-300 ease-in-out">
              <div className="flex flex-col gap-6">
                <Image src={Williams} alt="Williams Logo" width={150} />
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
          </div>
          <div className="flex col-span-6 row-start-5 row-span-3 bg-gradient-to-t from-[#E8E5E5] via-[#E2E2E2] via-25% to-slate to-40%"></div>
          <div className="flex col-span-6 row-start-8 row-span-3 bg-gradient-to-t from-[#E8E5E5] via-[#E2E2E2] via-25% to-slate to-40%"></div>
        </div>
      </div>
    </Layout>
  );
}
