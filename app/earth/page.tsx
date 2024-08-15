'use client';

import { FC, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const Earth: FC = () => {
    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <Canvas>
                <ambientLight />
                <pointLight />
                <Sphere />
            </Canvas>
        </div>
    );
};

/*
const DotMesh = () => {
    const dots = useRef<Mesh>(null!);


}
*/

const Sphere = () => {
    const earth = useRef<Mesh>(null!);

    useFrame(({ clock }) => {
        // dictate rotation
        earth.current.rotation.y = clock.getElapsedTime() / 5;
    });

    return (
        <mesh ref={earth}>
            <sphereGeometry args={[2, 35, 35]} />
            <meshStandardMaterial color="navy" wireframe />
        </mesh>
    );
};

export default Earth;
