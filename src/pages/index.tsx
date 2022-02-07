/* eslint-disable prettier/prettier */
import React from 'react';
import {useStyletron} from 'baseui';
import {OrbitControls} from '@react-three/drei';
import {Canvas} from '@react-three/fiber';

export const sum = (a: number, b: number) => a + b;

const Index: React.FC = () => {
  const [css, theme] = useStyletron();
  return (
    <Canvas
      style={{
        width: '100%',
        height: '100vh',
      }}
    >
      <ambientLight />
      <pointLight position={[1, 1, 1]} />
      <mesh position={[0, 0, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="red" />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
};

export default Index;
