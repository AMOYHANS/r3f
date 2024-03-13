import {useRef} from 'react'
import { useCompoundBody } from "@react-three/cannon";

// front 长
export const useWheels = (width, height, front, radius) => {
    const wheels = [useRef(), useRef(), useRef(), useRef()]
    // 车轮信息模板
    const wheelInfo = {
        radius, 
        directionLocal: [0, -1, 0], // 车的重力方向
        axleLocal: [1, 0, 0],
        suspensionStiffness: 60,
        suspensionRestLength: 0.1,
        frictionSlip: 5,
        dampingRelaxation: 2.3,
        dampingCompression: 4.4,
        maxSuspensionForce: 100000,
        rollInfluence: 0.01,
        maxSuspensionTravel: 0.1,
        customSlidingRotationalSpeed: -30,
        useCustomSlidingRotationalSpeed: true,
    }
    // 四个车轮信息
    const wheelInfos = [
        {
            ...wheelInfo,
            chassisConnectionPointLocal: [-width * 0.40, height * 1.02, front * 0.72],
            isFrontWheel: true,
        },
        {
            ...wheelInfo,
            chassisConnectionPointLocal: [width * 0.40, height * 1.02, front * 0.72],
            isFrontWheel: true,
        },
        {
            ...wheelInfo,
            chassisConnectionPointLocal: [-width * 0.40, height * 1.02, -front * 0.72],
            isFrontWheel: false,
        },
        {
            ...wheelInfo,
            chassisConnectionPointLocal: [width * 0.40, height * 1.02, -front * 0.72],
            isFrontWheel: false,
        },
    ]
    // 生成车轮时的物理信息
    const propsFunc = () => ({
        collisionFilterGroup: 0, //关闭碰撞
        mass: 1,
        shapes: [
          {
            args: [wheelInfo.radius, wheelInfo.radius, 0.015, 16], // 上下半径、高度、边的细分数
            rotation: [0, 0, -Math.PI / 2],
            type: "Cylinder",
          },
        ],
        type: "Kinematic", // 运动学物体
/**
 * 运动学物体根据其速度进行模拟运动。它们不会对外力做出反应。
 * 它们可以手动移动，但通常情况下，运动学物体是通过设置其速度来移动的。
 * 一个运动学物体的行为就好像它有无穷大的质量。运动体不与其他静止或运动体碰撞。
 */
      });
// 生成四个具有同样物理属性的cannon物体，保存在wheels
  useCompoundBody(propsFunc, wheels[0]);
  useCompoundBody(propsFunc, wheels[1]);
  useCompoundBody(propsFunc, wheels[2]);
  useCompoundBody(propsFunc, wheels[3]);
  return [wheels, wheelInfos];
}