import { Folder } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Palette } from 'lucide-react';

import Layout from '@/components/Layout';
import WorkCard from '@/components/WorkCard';

export default function Home() {
    return (
        <Layout>
            <div className="flex w-full">
                <div className="flex flex-col justify-center items-center min-h-full w-3/6">
                    <div className="flex flex-col justify-start items-start">
                        <div className="flex gap-1 items-center">
                            <Folder size={16} />
                            <span>works</span>
                        </div>
                        <div className="flex justify-center items-center gap-2 pl-2">
                            <span className="rotate-180 mt-1">&not;</span>
                            <div className="flex gap-1 items-center">
                                <Globe size={16} />
                                <span>website</span>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-2 pl-2">
                            <span className="rotate-180 mt-1">&not;</span>
                            <div className="flex gap-1 items-center">
                                <Palette size={16} />
                                <span>design</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex min-h-full w-3/6">
                    <div className="grid w-full grid-cols-6 grid-rows-12 gap-5">
                        <div className="flex items-end justify-evenly pb-3 col-span-6 row-start-2 row-span-3 bg-gradient-to-t from-[#E8E7E7] via-[#ECECEC] via-20% to-slate to-30%"></div>
                        <div className="flex items-end justify-evenly pb-3 col-span-6 row-start-5 row-span-3 bg-gradient-to-t from-[#E8E7E7] via-[#ECECEC] via-20% to-slate to-30%">
                            <WorkCard
                                imgSrc="/images/williams.png"
                                imgWidth={75}
                                imgAlt="williams"
                                description="porfolio"
                                date="03.25"
                            />
                        </div>
                        <div className="flex items-end justify-evenly pb-3 col-span-6 row-start-8 row-span-3 bg-gradient-to-t from-[#E8E7E7] via-[#ECECEC] via-20% to-slate to-30%"></div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
