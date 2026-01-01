import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Plane({ isDark }) {
  const mesh = useRef();

  useFrame(({ clock, mouse }) => {
    mesh.current.material.uniforms.uTime.value = clock.elapsedTime;
    mesh.current.material.uniforms.uMouse.value.set(mouse.x, mouse.y);
  });

  return (
    <mesh ref={mesh} scale={[5, 5, 1]}>
      <planeGeometry args={[2, 2, 32, 32]} />
      <shaderMaterial
        uniforms={{
          uTime: { value: 0 },
          uMouse: { value: new THREE.Vector2() },
          uColor: {
            value: new THREE.Color(isDark ? "#0a0a0a" : "#f5f5f5"),
          },
          uAccent: {
            value: new THREE.Color("#C3E41D"),
          },
        }}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.);
          }
        `}
        fragmentShader={`
          uniform float uTime;
          uniform vec2 uMouse;
          uniform vec3 uColor;
          uniform vec3 uAccent;
          varying vec2 vUv;

          void main() {
            float wave = sin(vUv.x * 10.0 + uTime) * 0.05;
            float glow = distance(vUv, uMouse * 0.5 + 0.5);
            vec3 color = mix(uAccent, uColor, glow);
            gl_FragColor = vec4(color + wave, 1.0);
          }
        `}
      />
    </mesh>
  );
}

export default function ShaderBackground({ isDark }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 1] }}
      className="absolute inset-0 -z-10"
    >
      <Plane isDark={isDark} />
    </Canvas>
  );
}
