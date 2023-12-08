import React from 'react'
import {useState,Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import Loader from './components/Loader.jsx'
import LamboMod from './models/LamboMod.jsx'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

export default function Lambo() {

    const [isRotating, setIsRotating] = useState(false)
  return (
    <section className="w-full h-screen relative">
        <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{near: 0.1, far:1000}}
        >
            <directionalLight position={[1,1,1]} intensity={2}/>
            <ambientLight intensity={0.5}/>
            {/* <pointLight/>
            <spotLight/> */}
            <hemisphereLight
            skyColor="#808080"
            groundColor="#013220"
            intensity={1}
            />
            <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI/2}
            minPolarAngle={Math.PI/2}
            />
            <LamboMod/>
        </Canvas>
    </section>
  )
}
