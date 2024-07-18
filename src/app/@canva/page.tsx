'use client'
import * as THREE from 'three'
import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements, MeshProps } from '@react-three/fiber'
import { CameraControls } from '@react-three/drei'

interface boxProps extends MeshProps {
    color: string
}

function Box({color, ...props}: boxProps) {
  return (
    <mesh {...props} >
      <cylinderGeometry args={[0.2, 0.2, 20, 10, 5]} />
      <meshStandardMaterial color={color}  />
    </mesh>
  )
}

type markProps = {
    lineSelect: number, 
    value: number, 
    rotation?: THREE.Euler, 
    color: string
}

const MarkLines = ({lineSelect, value, rotation,  color}: markProps) => {
    let position: number[] = [0, 0, 0]
    position[lineSelect] += value
        return(
            <mesh position={[position[0], position[1], position[2]]} rotation={rotation} >
                <cylinderGeometry args={[0.15, 0.15, 0.1, 10, 5]} />
                {/* <bufferGeometry attributes={{'position':vertices}} /> */}
                <meshStandardMaterial color={color}  />
            </mesh>
        )

}

const Cone = ({lineSelect, value, rotation,  color}: markProps) => {
    let position: number[] = [0, 0, 0]
    position[lineSelect] += value
        return(
            <mesh position={[position[0], position[1], position[2]]} rotation={rotation} >
                <cylinderGeometry args={[0, 0.2, 0.5, 10, 5]} />
                {/* <bufferGeometry attributes={{'position':vertices}} /> */}
                <meshStandardMaterial color={color}  />
            </mesh>
        )

}

function Lines() {
    const marks = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <>
            {/* X */}
            <mesh rotation={[1.5708, 0, 0]} >
                <cylinderGeometry args={[0.1, 0.1, 20, 10, 5]} />
                <meshStandardMaterial color='orange'  />
            </mesh>
            <MarkLines lineSelect={2} rotation={new THREE.Euler(1.5708, 0, 0)} value={-1} color='orange' />
            <MarkLines lineSelect={2} rotation={new THREE.Euler(1.5708, 0, 0)} value={-2} color='orange' />
            <MarkLines lineSelect={2} rotation={new THREE.Euler(1.5708, 0, 0)} value={-3} color='orange' />
            <MarkLines lineSelect={2} rotation={new THREE.Euler(1.5708, 0, 0)} value={-4} color='orange' />
            <MarkLines lineSelect={2} rotation={new THREE.Euler(1.5708, 0, 0)} value={-5} color='orange' />
            <MarkLines lineSelect={2} rotation={new THREE.Euler(1.5708, 0, 0)} value={-6} color='orange' />
            <MarkLines lineSelect={2} rotation={new THREE.Euler(1.5708, 0, 0)} value={-7} color='orange' />
            <MarkLines lineSelect={2} rotation={new THREE.Euler(1.5708, 0, 0)} value={-8} color='orange' />
            <MarkLines lineSelect={2} rotation={new THREE.Euler(1.5708, 0, 0)} value={-9} color='orange' />

            <MarkLines lineSelect={2} rotation={new THREE.Euler(1.5708, 0, 0)} value={1} color='orange' />
            <MarkLines lineSelect={2} rotation={new THREE.Euler(1.5708, 0, 0)} value={2} color='orange' />
            <MarkLines lineSelect={2} rotation={new THREE.Euler(1.5708, 0, 0)} value={3} color='orange' />
            <MarkLines lineSelect={2} rotation={new THREE.Euler(1.5708, 0, 0)} value={4} color='orange' />
            <MarkLines lineSelect={2} rotation={new THREE.Euler(1.5708, 0, 0)} value={5} color='orange' />
            <MarkLines lineSelect={2} rotation={new THREE.Euler(1.5708, 0, 0)} value={6} color='orange' />
            <MarkLines lineSelect={2} rotation={new THREE.Euler(1.5708, 0, 0)} value={7} color='orange' />
            <MarkLines lineSelect={2} rotation={new THREE.Euler(1.5708, 0, 0)} value={8} color='orange' />
            <MarkLines lineSelect={2} rotation={new THREE.Euler(1.5708, 0, 0)} value={9} color='orange' />
            <Cone lineSelect={2} rotation={new THREE.Euler(1.5708, 0, 0)} value={10.1} color='orange' />

            {/* Y */}
            <mesh rotation={[0, 0, 1.5708]} >
                <cylinderGeometry args={[0.1, 0.1, 20, 10, 5]} />
                <meshStandardMaterial color='blue'  />
            </mesh>

            <MarkLines lineSelect={0} rotation={new THREE.Euler(0, 0, 1.5708)} value={-1} color='blue' />
            <MarkLines lineSelect={0} rotation={new THREE.Euler(0, 0, 1.5708)} value={-2} color='blue' />
            <MarkLines lineSelect={0} rotation={new THREE.Euler(0, 0, 1.5708)} value={-3} color='blue' />
            <MarkLines lineSelect={0} rotation={new THREE.Euler(0, 0, 1.5708)} value={-4} color='blue' />
            <MarkLines lineSelect={0} rotation={new THREE.Euler(0, 0, 1.5708)} value={-5} color='blue' />
            <MarkLines lineSelect={0} rotation={new THREE.Euler(0, 0, 1.5708)} value={-6} color='blue' />
            <MarkLines lineSelect={0} rotation={new THREE.Euler(0, 0, 1.5708)} value={-7} color='blue' />
            <MarkLines lineSelect={0} rotation={new THREE.Euler(0, 0, 1.5708)} value={-8} color='blue' />
            <MarkLines lineSelect={0} rotation={new THREE.Euler(0, 0, 1.5708)} value={-9} color='blue' />

            <MarkLines lineSelect={0} rotation={new THREE.Euler(0, 0, 1.5708)} value={1} color='blue' />
            <MarkLines lineSelect={0} rotation={new THREE.Euler(0, 0, 1.5708)} value={2} color='blue' />
            <MarkLines lineSelect={0} rotation={new THREE.Euler(0, 0, 1.5708)} value={3} color='blue' />
            <MarkLines lineSelect={0} rotation={new THREE.Euler(0, 0, 1.5708)} value={4} color='blue' />
            <MarkLines lineSelect={0} rotation={new THREE.Euler(0, 0, 1.5708)} value={5} color='blue' />
            <MarkLines lineSelect={0} rotation={new THREE.Euler(0, 0, 1.5708)} value={6} color='blue' />
            <MarkLines lineSelect={0} rotation={new THREE.Euler(0, 0, 1.5708)} value={7} color='blue' />
            <MarkLines lineSelect={0} rotation={new THREE.Euler(0, 0, 1.5708)} value={8} color='blue' />
            <MarkLines lineSelect={0} rotation={new THREE.Euler(0, 0, 1.5708)} value={9} color='blue' />
            <Cone lineSelect={0} rotation={new THREE.Euler(0, 0, -1.5708)} value={10.1} color='blue' />
            {/* Z */}
            <mesh >
                <cylinderGeometry args={[0.1, 0.1, 20, 10, 5]} />
                <meshStandardMaterial color='green'  />
            </mesh>
            <MarkLines lineSelect={1} value={-1} color='green' />
            <MarkLines lineSelect={1} value={-2} color='green' />
            <MarkLines lineSelect={1} value={-3} color='green' />
            <MarkLines lineSelect={1} value={-4} color='green' />
            <MarkLines lineSelect={1} value={-5} color='green' />
            <MarkLines lineSelect={1} value={-6} color='green' />
            <MarkLines lineSelect={1} value={-7} color='green' />
            <MarkLines lineSelect={1} value={-8} color='green' />
            <MarkLines lineSelect={1} value={-9} color='green' />

            <MarkLines lineSelect={1} value={1} color='green' />
            <MarkLines lineSelect={1} value={2} color='green' />
            <MarkLines lineSelect={1} value={3} color='green' />
            <MarkLines lineSelect={1} value={4} color='green' />
            <MarkLines lineSelect={1} value={5} color='green' />
            <MarkLines lineSelect={1} value={6} color='green' />
            <MarkLines lineSelect={1} value={7} color='green' />
            <MarkLines lineSelect={1} value={8} color='green' />
            {/* <MarkLines lineSelect={1} value={9} color='green' /> */}
            <Cone lineSelect={1} rotation={new THREE.Euler(0, -1.5708, 0)} value={10.1} color='green' />
        </>
    )
}

export default function Canva(){
    return(
        <section className='w-2/3 h-screen bg-slate-500'>
            <Canvas camera={{ position: [-10, 10, -10], fov: 110 }} >
                    <ambientLight intensity={Math.PI / 2} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                    <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                    {/* <Box position={[0, 0, 0]} rotation={[1.5708, 0, 0]}color='orange' />
                    <Box position={[0, 0, 0]}  rotation={[0, 0, 1.5708]} color='blue'/>
                    <Box position={[0, 0, 0]}  color='green'/> */}
                    <Lines />
                <CameraControls makeDefault />
            </Canvas>
        </section>
    )
}


