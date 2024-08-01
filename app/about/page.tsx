import Image from 'next/image'

import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import AboutImage from "../../assets/images/about.jpg"

export default function Home() {
  return (
    <Layout>
      <div className="flex w-3/6 min-h-screen ">
        <div className="grid w-full grid-cols-6 grid-rows-6 gap-5">
          <Header />
          <div className="flex relative col-span-6 row-start-2 row-span-4 overflow-hidden">
            <Image
                src={AboutImage}
                alt="Picture of Hina"
                style={{ objectFit: 'cover' }}
                fill
            />
          </div>
          <Footer />
        </div>
      </div>

      <div className="flex w-3/6 screen">
        <div className="grid w-full grid-cols-6 grid-rows-12 gap-5">
          <div className="flex col-span-6 row-start-3 justify-center">
            alex hsieh
          </div>

          <div className="flex flex-col gap-5 col-span-3 col-start-2 row-start-4">
            <span>01 about me</span>
            <span>I am a full stack devloper based in Vancouver, Canada.</span>
          </div>

          <div className="flex flex-col col-span-3 col-start-2 row-start-8">
            02 work
          </div>
        </div>
      </div>
    </Layout>
  );
}
