import { usePlane } from "@react-three/cannon";
import { MeshReflectorMaterial, useTexture } from "@react-three/drei";

const Ground = () => {
    // 不能将planeRef放到对应的平面，不然会产生bug 
    usePlane(() => ({
        type: 'static',
        rotation: [-Math.PI / 2, 0, 0],
    }))

    const { gridMap, aoMap, alphaMap } = useTexture({
      gridMap: 'textures/grid.png',
      aoMap: 'textures/ground-ao.png',
      alphaMap: 'textures/alpha-map.png',
    });

  return (
    <>
    <ambientLight/>
        <mesh position={[-2.29, 0, -1.26]} rotation-x={-Math.PI / 2} >
            <planeGeometry args={[12, 12]}/>
            <meshBasicMaterial color="white" transparent alphaMap={gridMap} opacity={0.9}/>
        </mesh>
        <mesh rotation-x={-Math.PI / 2} position={[-2.29, -0.01, -1.26]} rotation-z={-0.09}>
            <circleGeometry args={[6, 50]}/>
            <MeshReflectorMaterial
                aoMap={aoMap}
                alphaMap={alphaMap}
                transparent={true}
                color={[0.5, 0.5, 0.5]}
                envMapIntensity={0.35}
                metalness={0.05}
                roughness={0.4}
      
                dithering={true}
                blur={[1024, 512]} // Blur ground reflections (width, heigt), 0 skips blur
                mixBlur={3} // How much blur mixes with surface roughness (default = 1)
                mixStrength={30} // Strength of the reflections
                mixContrast={1} // Contrast of the reflections
                resolution={1024} // Off-buffer resolution, lower=faster, higher=better quality, slower
                mirror={0} // Mirror environment, 0 = texture colors, 1 = pick up env colors
                depthScale={0} // Scale the depth factor (0 = no depth, default = 0)
                minDepthThreshold={0.9} // Lower edge for the depthTexture interpolation (default = 0)
                maxDepthThreshold={1} // Upper edge for the depthTexture interpolation (default = 0)
                depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [bl
                debug={0}
                reflectorOffset={0.02} // Offsets the virtual camera that projects the reflection. Useful when the reflective
            />
        </mesh>
        {/* <axesHelper args={[5, 5, 5]} /> */}
    </>
  )
}

export default Ground