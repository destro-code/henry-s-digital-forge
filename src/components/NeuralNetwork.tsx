import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { Suspense } from 'react';

function NetworkMesh() {
  const meshRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  const nodeCount = 80;

  const { positions, connections } = useMemo(() => {
    const pos = new Float32Array(nodeCount * 3);
    const spread = Math.min(viewport.width, 12);
    for (let i = 0; i < nodeCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * spread * 1.5;
      pos[i * 3 + 1] = (Math.random() - 0.5) * spread;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4 - 2;
    }

    const linePositions: number[] = [];
    const threshold = spread * 0.4;
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dx = pos[i * 3] - pos[j * 3];
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < threshold) {
          linePositions.push(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]);
          linePositions.push(pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]);
        }
      }
    }

    return { positions: pos, connections: new Float32Array(linePositions) };
  }, [viewport.width]);

  const originalPositions = useMemo(() => new Float32Array(positions), [positions]);

  useFrame(({ clock, pointer }) => {
    mouseRef.current.x += (pointer.x * 2 - mouseRef.current.x) * 0.02;
    mouseRef.current.y += (pointer.y * 2 - mouseRef.current.y) * 0.02;

    if (meshRef.current) {
      const posArray = meshRef.current.geometry.attributes.position.array as Float32Array;
      const t = clock.elapsedTime;
      for (let i = 0; i < nodeCount; i++) {
        posArray[i * 3] = originalPositions[i * 3] + Math.sin(t * 0.3 + i * 0.5) * 0.15;
        posArray[i * 3 + 1] = originalPositions[i * 3 + 1] + Math.cos(t * 0.2 + i * 0.3) * 0.15;
      }
      meshRef.current.geometry.attributes.position.needsUpdate = true;
      meshRef.current.rotation.y = mouseRef.current.x * 0.1;
      meshRef.current.rotation.x = mouseRef.current.y * 0.05;
    }

    if (linesRef.current) {
      linesRef.current.rotation.y = mouseRef.current.x * 0.1;
      linesRef.current.rotation.x = mouseRef.current.y * 0.05;
    }
  });

  return (
    <group>
      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={nodeCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#00ff88"
          size={0.08}
          transparent
          opacity={0.9}
          sizeAttenuation
        />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={connections.length / 3}
            array={connections}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#00ff88" transparent opacity={0.12} />
      </lineSegments>
    </group>
  );
}

export default function NeuralNetwork() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <NetworkMesh />
        </Suspense>
      </Canvas>
    </div>
  );
}
