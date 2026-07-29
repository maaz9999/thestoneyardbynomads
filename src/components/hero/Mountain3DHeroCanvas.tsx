'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Mountain3DHeroCanvasProps {
  mousePos: { x: number; y: number };
}

export default function Mountain3DHeroCanvas({ mousePos }: Mountain3DHeroCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosRef = useRef(mousePos);

  // Keep mousePosRef synchronized without re-running scene setup
  useEffect(() => {
    mousePosRef.current = mousePos;
  }, [mousePos]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let renderer: THREE.WebGLRenderer | null = null;
    let geometry: THREE.BufferGeometry | null = null;
    let material: THREE.PointsMaterial | null = null;

    try {
      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2('#090A0A', 0.08);

      const camera = new THREE.PerspectiveCamera(
        60,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
      );
      camera.position.z = 5;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      // Create high-altitude particle mist field
      const particleCount = 350;
      const positions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 16;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
      }

      geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      material = new THREE.PointsMaterial({
        color: '#B8C5CC',
        size: 0.05,
        transparent: true,
        opacity: 0.4,
        depthWrite: false,
      });

      const particles = new THREE.Points(geometry, material);
      scene.add(particles);

      // Warm Bronze Accent Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight('#C09A5A', 0.6);
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        // Continuous slow atmospheric rotation
        particles.rotation.y += 0.0008;
        particles.rotation.x += 0.0004;

        // Smooth camera movement towards target mouse orientation
        const targetRotY = mousePosRef.current.x * 0.04;
        const targetRotX = -mousePosRef.current.y * 0.04;

        camera.rotation.y += (targetRotY - camera.rotation.y) * 0.04;
        camera.rotation.x += (targetRotX - camera.rotation.x) * 0.04;

        if (renderer) {
          renderer.render(scene, camera);
        }
      };

      animate();

      const handleResize = () => {
        if (!container || !renderer) return;
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', handleResize);
        if (container && renderer && renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
        if (geometry) geometry.dispose();
        if (material) material.dispose();
        if (renderer) renderer.dispose();
      };
    } catch (e) {
      console.warn('WebGL particle canvas notice:', e);
      return () => {};
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-10 opacity-70"
    />
  );
}
