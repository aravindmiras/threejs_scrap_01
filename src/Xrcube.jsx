import {useState,Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import Loader from './components/Loader.jsx'
import Island from './models/Island.jsx'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { VRButton, ARButton, XR, Controllers, Hands } from '@react-three/xr'


const XrCube = () => {

    const [isRotating, setIsRotating] = useState(false)
    return (
        <section className="w-full h-screen relative">
        <ARButton/>
        
        <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{near: 0.1, far:1000}}
        >
            <XR>
            <directionalLight position={[1,1,1]} intensity={2}/>
            <ambientLight intensity={0.5}/>
            {/* <pointLight/>
            <spotLight/> */}
            <hemisphereLight
            skyColor="#808080"
            groundColor="#013220"
            intensity={1}
            />
            {/* <OrbitControls
            enableZoom={true}
            maxPolarAngle={Math.PI}
            minPolarAngle={0}
            /> */}
            <Island/>
            </XR>
        </Canvas>
    </section>
    );
};


export default XrCube;
