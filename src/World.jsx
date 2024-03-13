import {useRef, useEffect} from 'react'
import Ground from './Ground'
import {Environment, PerspectiveCamera,} from '@react-three/drei'
import {useThree} from '@react-three/fiber'
import Track from './Track'
import * as THREE from 'three'
import Car from './Car'
import Ramp from './Ramp'

const World = () => {
    // const cameraRef = useRef()
    // const {scene} = useThree()
    // useEffect(() => {
    //     scene.add(new THREE.CameraHelper(cameraRef.current))
    // }, [])
  return (
    <>
        <Environment
            files={"textures/envmap.hdr"}
            background
        />
        {/* <PerspectiveCamera ref={cameraRef} makeDefault position={[12, 2, 0]} fov={10} /> */}
        <Ground/>
        <Track/>
        <Car/>
        <Ramp/>
    </>
  )
}

export default World