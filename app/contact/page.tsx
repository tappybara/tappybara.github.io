'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

import { Github, Linkedin, Mail } from 'lucide-react';

import Earth from '@/components/Earth';
import Layout from '@/components/Layout';

export default function Home() {
    return (
        <Layout>
            <div className="flex w-full">
                <div className="flex flex-col justify-center items-center min-h-full w-3/6">
                    <Canvas>
                        <Suspense fallback={null}>
                            <Earth scale={[2.5, 2.5, 2.5]} />
                        </Suspense>
                    </Canvas>
                </div>
                <div className="flex flex-col justify-center items-center min-h-full w-3/6 gap-3">
                    <span>let&apos;s connect</span>
                    <div className="flex flex-col gap-1">
                        <a
                            href="mailto:alexhsieh98+portfolio@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="flex gap-1 items-center">
                                <Mail size={16} />
                                <span>email</span>
                            </div>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/hsieh-alex/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="flex gap-1 items-center">
                                <Linkedin
                                    size={16}
                                    style={{ marginTop: '-4px' }}
                                />
                                <span>linkedin</span>
                            </div>
                        </a>
                        <a
                            href="https://github.com/tappybara"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="flex gap-1 items-center">
                                <Github size={16} />
                                <span>github</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
