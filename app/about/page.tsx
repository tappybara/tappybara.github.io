'use client';

import Image from 'next/image';
import { ChevronsDown, CircleUserRound, Gamepad2, Laptop } from 'lucide-react';

import Layout from '@/components/Layout';
import FadeInOnScroll from '@/components/FadeInOnScroll';

import AboutImage from '../../public/images/about.jpg';
import Alex from '../../public/images/alex.jpg';

export default function Home() {
    return (
        <Layout>
            <div className="flex flex-col lg:flex-row w-full min-h-full lg:h-full lg:flex-wrap gap-24 lg:gap-0">
                <div className="grid w-full h-full min-h-full lg:w-3/6 grid-cols-12 grid-rows-12 gap-5">
                    <FadeInOnScroll className="flex flex-col lg:hidden col-start-1 col-span-12 justify-center items-center row-start-1 row-span-5">
                        <span>about me</span>
                        <span className="text-2xl">alex hsieh</span>
                    </FadeInOnScroll>
                    <FadeInOnScroll className="relative col-start-1 col-span-12 lg:col-start-4 lg:col-span-6 row-start-4 row-span-6 lg:row-start-3 lg:row-span-7">
                        <Image
                            src={AboutImage}
                            alt="Picture of Hina"
                            style={{ objectFit: 'cover' }}
                            fill
                        />
                    </FadeInOnScroll>
                    <FadeInOnScroll className="flex lg:hidden flex-col justify-center items-center gap-4 pb-7 row-start-11 row-span-2 col-start-5 col-span-4">
                        <span className="text-gray-500">read more</span>
                        <ChevronsDown size={16} color="#6B7280" />
                    </FadeInOnScroll>
                </div>
                <div className="grid w-full h-full h-autp lg:w-3/6 grid-cols-12 grid-rows-12 gap-5">
                    <div className="flex justify-center items-center col-start-3 col-span-8 row-span-12">
                        <div className="flex flex-col h-full">
                            <FadeInOnScroll className="flex flex-col gap-8 my-auto">
                                <div className="flex flex-col gap-1">
                                    <div className="flex gap-1 items-center">
                                        <CircleUserRound size={16} />
                                        <span>profile</span>
                                    </div>
                                    <span>Hello, I&apos;m Alex Hsieh.</span>
                                    <div className="flex flex-col gap-0">
                                        <span>---</span>
                                        <span>1998 Born in Surrey, BC</span>
                                        <div className="flex flex-row gap-1">
                                            <span>2022</span>
                                            <span>
                                                Graduated from the University of
                                                British Columbia <br /> BSc.
                                                Combined Major in Computer
                                                Science and Statistics
                                            </span>
                                        </div>
                                        <span>---</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex flex-col">
                                            <span>
                                                Full Stack Developer based in
                                                Vancouver, Canada.
                                            </span>
                                            <span>
                                                Prioritizes clean design,
                                                organization, and optimization.
                                            </span>
                                            <span>
                                                Has worked to create web and
                                                mobile applications in various
                                                fields such as education,
                                                research, and logistics.
                                            </span>
                                        </div>
                                        <span>
                                            I am interesting in creating
                                            software that helps make everyday
                                            life easier.
                                        </span>
                                        <span>
                                            Constantly learning and forever
                                            curious.
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <div className="flex gap-1 items-center">
                                        <Laptop size={16} />
                                        <span>experience</span>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <div className="flex flex-col gap-0">
                                            <span>Jan.22 ~ Jun.23</span>
                                            <span>
                                                Maths — No Problem! / Full Stack
                                                Developer
                                            </span>
                                        </div>
                                        <div className="flex flex-col gap-0">
                                            <span>Jan.21 - Sep.21</span>
                                            <span>
                                                Maths — No Problem! / Full Stack
                                                Developer Intern
                                            </span>
                                        </div>
                                        <div className="flex flex-col gap-0">
                                            <span>Sep.20 - Dec.20 </span>
                                            <span>
                                                Merida Labs / Backend Developer
                                                Intern
                                            </span>
                                        </div>
                                        <div className="flex flex-col gap-0">
                                            <span>Sep.18 - Apr.19 </span>
                                            <span>
                                                Saab Technologies Ltd. /
                                                Software Developer Intern
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </FadeInOnScroll>
                            <div className="hidden lg:flex flex-col justify-center items-center gap-4 pb-7">
                                <span className="text-gray-500">read more</span>
                                <ChevronsDown size={16} color="#6B7280" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid w-full h-full lg:w-3/6 grid-cols-12 grid-rows-12 gap-5">
                    <FadeInOnScroll className="flex relative col-start-2 2xl:col-start-2 col-span-10 2xl:col-span-10 row-start-2 row-span-10 2xl:row-start-5 2xl:row-span-4 overflow-hidden">
                        <Image
                            src={Alex}
                            alt="alex"
                            style={{ objectFit: 'cover' }}
                            fill
                        />
                    </FadeInOnScroll>
                </div>
                <div className="grid w-full h-full lg:w-3/6 pb-36 lg:pb-0 grid-cols-12 grid-rows-12 gap-5">
                    <div className="flex justify-center items-center col-start-3 col-span-8 row-span-12">
                        <FadeInOnScroll className="flex flex-col gap-2">
                            <div className="flex gap-1 items-center">
                                <Gamepad2 size={16} />
                                <span>hobbies</span>
                            </div>
                            <div className="flex flex-col gap-3">
                                <span>
                                    One of my favourite things to do is watch
                                    and play sports. I am big hockey fan and
                                    enjoy watching other sports such as F1,
                                    football, and baseball as well. <br /> In
                                    2023, I was able to make a lifelong dream
                                    come true and joined an adult beginner
                                    hockey program and am currently a player for
                                    Blade Runners II in the NCHL.
                                </span>

                                <span>
                                    Otherwise I like to spend my time reading,
                                    listening to music, practicing my guitar,
                                    and building Gundam models.
                                </span>
                                <span>
                                    I am also currently studying Japanese and
                                    Mandarin.
                                </span>
                            </div>
                        </FadeInOnScroll>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
