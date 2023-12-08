import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import  {useFrame, useThree} from '@react-three/fiber'
import {a} from '@react-spring/three'
import islandScene from '../assets/3d/electric_motor.glb'

const Island = (props) => {
  const { nodes, materials } = useGLTF(islandScene);
  const islandRef = useRef();
  return (
    <a.group ref={islandRef} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials.body}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_1.geometry}
            material={materials.parts}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_2.geometry}
            material={materials.closingParts}
          />
        </group>
      </group>
    </a.group>
  );
}

useGLTF.preload(islandScene);

export default Island