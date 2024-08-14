import Image from 'next/image';

import Layout from '@/components/Layout';

import Hakodate from '../public/images/momiji.jpg';

export default function Home() {
    return (
        <Layout theme="white">
            <div className="flex absolute top-0 z-0 h-screen brightness-[0.65] w-3/6">
                <Image src={Hakodate} alt="hakodate" />
            </div>
            <div className="flex w-full z-10">
                <div className="flex flex-col justify-center items-center min-h-full w-3/6">
                    <div className="text-white tracking-wider">alex hsieh</div>
                    <div className="text-center tracking-wider text-white">
                        full stack developer / vancouver canada
                    </div>
                    <div className=" lg:hidden flex flex-row tracking-wider text-white">
                        <div>forever a work in progress</div>
                        <div className="animate-blink">_</div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center min-h-full w-3/6">
                    <div className="flex flex-row tracking-wider">
                        <div>forever a work in progress</div>
                        <div className="animate-blink">_</div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
