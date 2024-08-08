import Image from 'next/image';

import { ChevronsDown, CircleUserRound, Gamepad2, Laptop } from 'lucide-react';

import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import AboutImage from '../../public/images/about.jpg';

export default function Home() {
    return (
        <Layout>
            <div className="flex w-3/6 h-screen ">
                <div className="grid w-full grid-cols-6 grid-rows-6 gap-5">
                    <Header />
                    <div className="flex relative col-start-2 col-span-4 row-start-3 row-span-2 overflow-hidden">
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

            <div className="flex w-3/6 h-screen overflow-scroll">
                <div className="grid w-full grid-cols-12 grid-rows-12 gap-5">
                    <div className="flex flex-col col-start-5 col-span-4">
                        <div className="flex flex-col min-h-screen justify-center">
                            <div className="flex flex-col gap-24 m-auto">
                                <div className="flex flex-col gap-5">
                                    <div className="flex gap-1 items-center">
                                        <CircleUserRound size={16} />
                                        <span>profile</span>
                                    </div>
                                    <span>Hello, I&apos;m Alex Hsieh</span>
                                    <div className="flex flex-col">
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
                                    <div className="flex flex-col gap-6">
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
                                <div className="flex flex-col gap-5">
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
                            </div>
                            <div className="flex flex-col justify-center items-center gap-4 pb-7">
                                <span className="text-gray-500">read more</span>
                                <ChevronsDown size={16} color="#6B7280" />
                            </div>
                        </div>
                        <div className="flex flex-col min-h-screen gap-10 justify-center">
                            <div className="flex flex-col gap-5">
                                <div className="flex gap-1 items-center">
                                    <Gamepad2 size={16} />
                                    <span>hobbies</span>
                                </div>
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col gap-3">
                                        <span>
                                            One of my favourite things to do is
                                            watch and play sports. I am big
                                            hockey fan and enjoy watching other
                                            sports such as F1, football, and
                                            baseball as well. <br /> In 2023, I
                                            was able to make a lifelong dream
                                            come true and joined an adult
                                            beginner hockey program and am
                                            currently a player for Blade Runners
                                            II in the NCHL.
                                        </span>

                                        <span>
                                            Otherwise I like to spend my time
                                            reading, listening to music,
                                            practicing my guitar, and building
                                            Gundam models.
                                        </span>
                                        <span>
                                            I am also currently studying
                                            Japanese and Mandarin.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
