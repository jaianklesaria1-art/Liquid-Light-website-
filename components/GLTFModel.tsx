import React, { useEffect, useRef } from 'react';
import { Renderer, Camera, Transform, GLTFLoader, Program, Mesh } from 'ogl';

interface GLTFModelProps {
  src: string; // URL to .glb or .gltf
  scale?: number;
  autoRotate?: boolean;
}

const GLTFModel: React.FC<GLTFModelProps> = ({ src, scale = 1, autoRotate = true }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const renderer = new Renderer({ alpha: true, dpr: Math.min(window.devicePixelRatio, 2) });
    const gl = renderer.gl;
    container.appendChild(gl.canvas);

    const camera = new Camera(gl, { fov: 35 });
    camera.position.set(0, 0, 5);

    const scene = new Transform();

    // Load GLTF
    let model: Transform;
    (async () => {
      try {
        const gltf = await GLTFLoader.load(gl, src);
        // Handle case where scene is an array (pick first) or a single Transform
        const loadedScene = Array.isArray(gltf.scene) ? gltf.scene[0] : gltf.scene;
        model = loadedScene || new Transform(); 
        model.scale.set(scale, scale, scale);
        
        // Center the model roughly
        // (If needed, calculate bounding box here to center accurately)
        
        model.setParent(scene);
      } catch (e) {
        console.error("Failed to load GLTF:", e);
      }
    })();

    function resize() {
      renderer.setSize(container.offsetWidth, container.offsetHeight);
      camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
    }
    window.addEventListener('resize', resize);
    resize();

    let animationId: number;
    function update() {
      animationId = requestAnimationFrame(update);
      if (model && autoRotate) {
        model.rotation.y -= 0.005;
      }
      renderer.render({ scene, camera });
    }
    animationId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
      if (container.contains(gl.canvas)) container.removeChild(gl.canvas);
    };
  }, [src, scale, autoRotate]);

  return <div ref={containerRef} className="w-full h-full" />;
};

export default GLTFModel;