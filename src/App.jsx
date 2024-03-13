import {Canvas} from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const cameraSettings = {
  fov: 45,
  near: 0.1,
  far: 100,
}
function App() {
  return (
    <Canvas orthographic={false} camera={cameraSettings}>
      <OrbitControls/>
      <mesh>
        <planeGeometry args={[20, 20]}/>
        <meshBasicMaterial/>
      </mesh>
    </Canvas>
  )
}

export default App
