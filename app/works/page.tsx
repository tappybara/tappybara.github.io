import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WorkCard from '@/components/WorkCard';

export default function Home() {
    return (
        <Layout>
            <div className="flex w-3/6 h-screen ">
                <div className="grid w-full grid-cols-6 grid-rows-6 gap-5">
                    <Header />
                    <div className="flex justify-center items-center col-span-6 row-start-2 row-span-4">
                        <div className="flex flex-col justify-start items-start">
                            <div>works</div>
                            <div className="flex justify-center items-center gap-1 pl-2">
                                <span className="rotate-180 mt-1">&not;</span>
                                <span>website</span>
                            </div>
                            <div className="flex justify-center items-center gap-1 pl-2">
                                <span className="rotate-180 mt-1">&not;</span>
                                <span>design</span>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>

            <div className="flex w-3/6 screen">
                <div className="grid w-full grid-cols-6 grid-rows-12 gap-5">
                    <div className="flex items-end justify-evenly pb-3 col-span-6 row-start-2 row-span-3 bg-gradient-to-t from-[#E8E5E5] via-[#E2E2E2] via-25% to-slate to-40%">
                        <WorkCard
                            imgSrc="/images/williams.png"
                            imgWidth={100}
                            imgAlt="williams"
                            description="himel"
                            date="03.25"
                        />
                    </div>
                    <div className="flex col-span-6 row-start-5 row-span-3 bg-gradient-to-t from-[#E8E5E5] via-[#E2E2E2] via-25% to-slate to-40%"></div>
                    <div className="flex col-span-6 row-start-8 row-span-3 bg-gradient-to-t from-[#E8E5E5] via-[#E2E2E2] via-25% to-slate to-40%"></div>
                </div>
            </div>
        </Layout>
    );
}
