import { useGLTF, useTexture, Sparkles, MeshReflectorMaterial } from "@react-three/drei";
import * as THREE from "three";
import portalVertexGlsl from '../public/portal/vertex.glsl'
import portalFragmentGlsl from '../public/portal/fragment.glsl'
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Model(props) {
  const { nodes } = useGLTF("/portal.glb");
  const texture = useTexture("/baked.jpg");
  const shaderRef = useRef()

  useFrame((state) => {
    shaderRef.current.uniforms.uTime.value = state.clock.elapsedTime;
  })

  return (
    <group {...props} dispose={null}>
    <Sparkles size={4} scale={[4, 2, 4]} position-y={1}/>
      <mesh
        geometry={nodes.poleLightB.geometry}
        position={nodes.poleLightB.position}
      >
        <meshBasicMaterial side={THREE.DoubleSide}/>
      </mesh>
      <mesh
        geometry={nodes.poleLightA.geometry}
        position={nodes.poleLightA.position}
      >
        <meshBasicMaterial side={THREE.DoubleSide}/>
      </mesh>
      <mesh
        geometry={nodes.spaceLight.geometry}
        position={nodes.spaceLight.position}
        rotation={nodes.spaceLight.rotation}
      >
        <shaderMaterial ref={shaderRef}
            vertexShader={portalVertexGlsl}
            fragmentShader={portalFragmentGlsl}
            uniforms={{uTime: {value: 0}}}
         />
      </mesh>
      <mesh
        geometry={nodes.平面001.geometry}
      >
        <meshBasicMaterial map={texture} map-flipY={false}/>
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={0.01}>
        <planeGeometry
            args={[10, 10]} 
        />
        <MeshReflectorMaterial
        color={"#f6fa0c"}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/portal.glb");
