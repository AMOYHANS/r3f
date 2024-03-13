import React, { useRef, forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

export const Tyres = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF("models/tyre2.glb");
  return (
    <group {...props} dispose={null} scale={[0.068, 0.068, 0.068]} ref={ref}>
      <group
        position={[-0.004, 0.008, 0.009]}
        rotation={[0, props.lsLeft ? Math.PI + 0.5 : 0, 0]}
        scale={0.429}
      >
        <mesh
          geometry={nodes["5WheelBkR_Rim003_0001"].geometry}
          material={materials["Rim.003"]}
        />
        <mesh
          geometry={nodes["5WheelBkR_Rim003_0001_1"].geometry}
          material={materials["Tire.003"]}
        />
      </group>
    </group>
  );
})

useGLTF.preload("/tyre.glb");

export default Tyres

