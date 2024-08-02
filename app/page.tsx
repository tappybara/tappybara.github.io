import Image from 'next/image';

import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import Hakodate from '../public/images/momiji.jpg';

export default function Home() {
    return (
        <Layout>
            <div className="flex w-3/6 h-screen ">
                <div className="grid relative w-full grid-cols-6 grid-rows-6 gap-5">
                    <Header colour="white" />
                    <div className="flex absolute z-0 h-screen brightness-75">
                        <Image src={Hakodate} alt="hakodate" />
                    </div>
                    <div className="flex justify-center items-center row-start-2 row-end-6 col-span-6 overflow-hidden z-10">
                        <div className="flex flex-col justify-center items-center">
                            <div className="text-center tracking-wider text-white">
                                alex hsieh
                            </div>
                        </div>
                    </div>
                    <Footer colour="white" />
                </div>
            </div>

            <div className="flex w-3/6 screen">
                <div className="grid w-full grid-col-6 gap-5">
                    <div className="flex col-span-6 justify-center items-center">
                        <div className="flex flex-row tracking-wider">
                            <div>inventing through code</div>
                            <div className="animate-blink">_</div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
