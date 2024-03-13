import {Canvas} from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Model from './Model'
import { Suspense } from 'react'

function App() {
  return (
    <Canvas flat>
      <color args={["#202920"]} attach="background"/>
      <ambientLight/>
      <OrbitControls/>
      <Suspense fallback={null}>
      <Model/>
      </Suspense>
    </Canvas>
  )
}

export default App
