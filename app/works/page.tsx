import { Folder, Globe, Palette } from 'lucide-react';

import Layout from '@/components/Layout';
import WorkCard from '@/components/WorkCard';

export default function Home() {
    return (
        <Layout>
            <div className="flex flex-col lg:flex-row justify-center gap-12 lg:gap-0 w-full h-full ">
                <div className="flex justify-center items-center h-auto lg:min-h-full w-full lg:w-3/6">
                    <div className="flex lg:flex-col justify-start items-start">
                        <div className="flex gap-1 items-center">
                            <Folder size={16} />
                            <span>works</span>
                        </div>
                        <div className="hidden justify-center items-center gap-2 pl-2">
                            <span className="hidden lg:block rotate-180 mt-1">
                                &not;
                            </span>
                            <div className="flex gap-1 items-center">
                                <Globe size={16} />
                                <span>website</span>
                            </div>
                        </div>
                        <div className="hidden justify-center items-center gap-2 pl-2">
                            <span className="hidden lg:block rotate-180 mt-1">
                                &not;
                            </span>
                            <div className="flex gap-1 items-center">
                                <Palette size={16} />
                                <span>design</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex lg:min-h-full w-full lg:w-3/6 bg-slate">
                    <div className="grid w-full grid-cols-6 grid-rows-12 gap-5">
                        <div className="flex items-end justify-evenly pb-3 col-span-6 row-start-2 row-span-3 bg-gradient-to-t from-[#E8E7E7] via-[#ECECEC] via-20% to-slate to-30%"></div>
                        <div className="flex items-end justify-evenly pb-3 col-span-6 row-start-5 row-span-3 bg-gradient-to-t from-[#E8E7E7] via-[#ECECEC] via-20% to-slate to-30%">
                            <WorkCard
                                description="under construction"
                                date="08.24"
                            />
                        </div>
                        <div className="flex items-end justify-evenly pb-3 col-span-6 row-start-8 row-span-3 bg-gradient-to-t from-[#E8E7E7] via-[#ECECEC] via-20% to-slate to-30%"></div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
