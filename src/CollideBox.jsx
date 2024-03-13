import {useBox} from '@react-three/cannon'

const CollideBox = ({position, scale}) => {
    useBox(() => ({
        args: scale,
        position,
        type: 'Static', // 静态物体
    }))
}

export default CollideBox