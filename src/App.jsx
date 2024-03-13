import {Canvas} from '@react-three/fiber'
import { Physics } from "@react-three/cannon";
import World from './World';

const cameraSettings = {
  fov: 45,
  near: 0.1,
  far: 100,
  position: [0, 3, 5]
}
function App() {

  return (
    <>
    <Canvas flat orthographic={false} camera={cameraSettings}>
      <color args={["#45454b"]} attach="background"/>
      <Physics
        broadphase='SAPBroadphase'
        gravity={[0, -4.82, 0]}
      >
        {/* <Debug>
        </Debug> */}
          <World/>
      </Physics>
    </Canvas>
      <div className="controls">
      <p>WASD移动</p>
      <p>K切换视角</p>
      </div>
    </>
  )
}

export default App
