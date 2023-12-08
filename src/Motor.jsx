import {useState,Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import Loader from './components/Loader.jsx'
import Island from './models/Island.jsx'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

 const Motor = ()=> {
    const [isRotating, setIsRotating] = useState(false)

    // const adjustIslandForScreenSize = () =>{
    //     let screenScale = null;
    //     let screenPosition = [0,-6.5,-43];
    //     let islandRotation = [0.1, 4.7, 0];
    //     if(window.innerWidth < 768){
    //         screenScale = [3,3,3];
    //         screenPosition =[0,-6.5,-43]
    //     } else {
    //         screenScale = [1,1,1];
    //         screenPosition= [0,-6.5,-43]
    //     }

    //     return [screenScale, screenPosition]
    // }

    // const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize()
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
            enableZoom={true}
            maxPolarAngle={Math.PI}
            minPolarAngle={0}
            />
            <Island/>
        </Canvas>
    </section>
  )
}

export default Motor