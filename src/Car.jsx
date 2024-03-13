import {useBox, useRaycastVehicle} from '@react-three/cannon'
import {useGLTF} from '@react-three/drei'
import {useWheels} from './useWheels'
import { useControls } from './useControls'
import Tyres from './Tyres'
import { OrbitControls } from '@react-three/drei'
import {useState, useEffect} from 'react'
import {useFrame, useThree} from '@react-three/fiber'
import { Quaternion, Vector3 } from "three";
// import {useControls as useLeva} from 'leva'

const Car = () => {
    const position = [2, 0.2, 0]
    const {scene}= useGLTF('models/carBody.glb')
    const scale = [0.0012, 0.0012, 0.0012]
    scene.scale.set(...scale)
    scene.children[0].position.set(-365, -18, -67)
    const width = 0.15;
    const height = 0.068;
    const front = 0.15;
    const wheelRadius = 0.036;
    const [isThirdPerson, setIsThirdPerson] = useState(false);

    const [wheels, wheelInfos] = useWheels(width, height, front, wheelRadius);

    const carArgs = [width, height, front * 2];
    const [carRef, carApi] = useBox(() => ({
        allowSleep: false,
        args: carArgs,
        mass: 150,
        position,
    }))
    
    const [vehicle, vehicleApi] = useRaycastVehicle(() => ({
        chassisBody: carRef,
        wheelInfos,
        wheels,
    }))
    useControls(vehicleApi, carApi)

    // const {follow} = useLeva({
    //   follow:{
    //     itemName: '是否跟随',
    //     value: false
    //   }  
    // })

    const camera = useThree((state) => state.camera)

    useEffect(() => {
        camera.position.set(5, 2, 0)
    })

    useEffect(() => {
        const keyDownHandler = (e) => {
            if(e.key === 'k'){
                if(isThirdPerson){
                    // camera.position.set(0, 0.3, 0.5)
                }
                setIsThirdPerson(!isThirdPerson)
            }
            console.log(camera.position)
        }
        window.addEventListener('keydown', keyDownHandler)
        return () => {
            window.removeEventListener('keydown', keyDownHandler)
        }
    }, [isThirdPerson])

    useFrame((state) => {
        if(isThirdPerson) return
        let position = new Vector3(0,0,0);
        position.setFromMatrixPosition(carRef.current.matrixWorld);

        let quaternion = new Quaternion(0, 0, 0, 0);
        quaternion.setFromRotationMatrix(carRef.current.matrixWorld);

        let wDir = new Vector3(0,2, 4);
        wDir.applyQuaternion(quaternion);
        wDir.normalize();
      
        let cameraPosition = position.clone().add(wDir.clone().multiplyScalar(2).add(new Vector3(0, 0.3, 0)));
        
        wDir.add(new Vector3(0, 0.2, 0));
        state.camera.position.copy(cameraPosition);
        state.camera.lookAt(position);
    })
  return (
    <>
        { isThirdPerson && <OrbitControls makeDefault target={[-2.64, -0.71, 0.03]}/>}
        <group ref={carRef}>
            <primitive object={scene} rotation-y={Math.PI}/>
        </group>
        <Tyres isleft={false} ref={wheels[0]}/>
        <Tyres isleft={true} ref={wheels[1]}/>
        <Tyres isleft={false} ref={wheels[2]}/>
        <Tyres isleft={true} ref={wheels[3]}/>
    </>
  )
}

export default Car