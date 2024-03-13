import {useGLTF, useTexture} from "@react-three/drei"
import CollideBox from "./CollideBox"

const Track = () => {
    const {nodes} = useGLTF("models/track.glb")
    const texture = useTexture("textures/track.png")
    texture.anisotropy = 16
  return (
    <>
      <mesh geometry={nodes.Scene.children[0].geometry}>
        <meshBasicMaterial map={texture} toneMapped={false}/>
    </mesh>
        <CollideBox position={[1.75, 0, 0.5]} scale={[0.3, 1, 0.3]}/>
        <CollideBox position={[2.5, 0, -1.4]} scale={[0.3, 1, 0.3]}/>
        <CollideBox position={[0.6, 0, -3.8]} scale={[0.3, 1, 0.3]}/>
        <CollideBox position={[-1.95, 0, -5.18]} scale={[0.3, 1, 0.3]}/>
        <CollideBox position={[-5.55, 0, -3.05]} scale={[0.3, 1, 0.3]}/>
        <CollideBox position={[-4.4, 0, -1.77]} scale={[0.3, 1, 0.3]}/>
        <CollideBox position={[-7.03, 0, -0.76]} scale={[0.3, 1, 0.3]}/>
        <CollideBox position={[-4.75, 0, 2.73]} scale={[0.3, 1, 0.3]}/>
        <CollideBox position={[-3.05, 0, 3.4]} scale={[0.3, 1, 0.3]}/>
        <CollideBox position={[-0.83, 0, 3.2]} scale={[0.3, 1, 0.3]}/>
        
        <CollideBox position={[-1.85,0,0.385]} scale={[0.05, 1, 0.13]}/>
        <CollideBox position={[-1.85,0,-0.385]} scale={[0.05, 1, 0.13]}/>
        <CollideBox position={[-2.28,0,0.385]} scale={[0.05, 1, 0.13]}/>
        <CollideBox position={[-2.28,0,-0.385]} scale={[0.05, 1, 0.13]}/>
        <CollideBox position={[-4.39,0,1.125]} scale={[0.13, 1, 0.13]}/>
        <CollideBox position={[-4.39,0,1.9]} scale={[0.13, 1, 0.13]}/>
        
        <CollideBox position={[-2.86,0,-0.9]} scale={[0.35, 1, 0.35]}/>
        <CollideBox position={[-3.33,0,-0.9]} scale={[0.35, 1, 0.35]}/>
        <CollideBox position={[0.41,0,2]} scale={[0.35, 1, 0.35]}/>
        
        <CollideBox position={[-2.3,0,-2.76]} scale={[1.37, 1, 1.09]}/>
        
        <CollideBox position={[-3.08,0,0.89]} scale={[0.36, 1, 0.03]}/>
        <CollideBox position={[-2.53,0,0.89]} scale={[0.36, 1, 0.03]}/>
        
        <CollideBox position={[-4.53,0,-0.65]} scale={[0.1, 0.5, 0.1]}/>
        <CollideBox position={[-4.15,0,-0.67]} scale={[0.1, 0.5, 0.1]}/>
        <CollideBox position={[-4.9,0,-0.58]} scale={[0.1, 0.5, 0.1]}/>
        <CollideBox position={[-2,0,-7]} scale={[14, 0.5, 0.1]}/>
        <CollideBox position={[-2,0,5]} scale={[14, 0.5, 0.1]}/>
        <CollideBox position={[-7,0,-2]} scale={[0.1, 0.5, 14]}/>
        <CollideBox position={[5,0,-2]} scale={[0.1, 0.5, 14]}/>
    </>
  )
}

export default Track