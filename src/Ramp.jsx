import {useTrimesh} from '@react-three/cannon'
import {useGLTF} from '@react-three/drei'


const Ramp = () => {
    const {scene} = useGLTF('models/ramp.glb')
    const vertices = scene.children[0].geometry.attributes.position.array
    const indices = scene.children[0].geometry.index.array
    useTrimesh(() => ({
        args: [vertices, indices],
        mass: 0,
        type: 'Static'
    }))
}

export default Ramp