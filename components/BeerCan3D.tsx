import React, { useEffect, useRef } from 'react';
import { Renderer, Camera, Transform, Cylinder, Program, Mesh, Texture, Vec3 } from 'ogl';

interface BeerCan3DProps {
  image: string;
}

const BeerCan3D: React.FC<BeerCan3DProps> = ({ image }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // 1. Setup Renderer
    const renderer = new Renderer({ 
      alpha: true, 
      antialias: true,
      dpr: Math.min(window.devicePixelRatio, 2) 
    });
    const gl = renderer.gl;
    // Clear color is transparent
    gl.clearColor(0, 0, 0, 0);
    
    container.appendChild(gl.canvas);

    // 2. Resize Handler
    function resize() {
      const width = container.offsetWidth;
      const height = container.offsetHeight;
      renderer.setSize(width, height);
      // Update camera aspect if needed, but we do it in loop usually or here
      if (camera) camera.perspective({ aspect: width / height });
    }
    window.addEventListener('resize', resize);
    resize();

    // 3. Setup Scene
    const camera = new Camera(gl, { fov: 35 });
    camera.position.set(0, 0, 4); // Move back to see the can
    
    const scene = new Transform();

    // 4. Create Texture
    const texture = new Texture(gl);
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = image;
    img.onload = () => (texture.image = img);

    // 5. Create Geometry (Cylinder)
    // radius: 0.8, height: 2.4 fits the aspect ratio nicely
    const geometry = new Cylinder(gl, {
      radiusTop: 0.8,
      radiusBottom: 0.8,
      height: 2.6,
      radialSegments: 48,
      heightSegments: 1,
    });

    // 6. Create Shader Program
    const program = new Program(gl, {
      vertex: `
        attribute vec3 position;
        attribute vec2 uv;
        attribute vec3 normal;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        uniform mat3 normalMatrix;
        varying vec2 vUv;
        varying vec3 vNormal;

        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragment: `
        precision highp float;
        uniform sampler2D tMap;
        varying vec2 vUv;
        varying vec3 vNormal;

        void main() {
          vec3 normal = normalize(vNormal);
          // Simple directional lighting
          vec3 light = normalize(vec3(0.5, 0.5, 1.0));
          float diffuse = max(dot(normal, light), 0.0);
          
          // Ambient
          float ambient = 0.4;
          float lighting = ambient + (diffuse * 0.8);
          
          // Specular (shiny can)
          vec3 viewDir = normalize(vec3(0.0, 0.0, 1.0));
          vec3 reflectDir = reflect(-light, normal);
          float spec = pow(max(dot(viewDir, reflectDir), 0.0), 32.0);
          float specular = spec * 0.5;

          vec4 texColor = texture2D(tMap, vUv);
          
          // Apply lighting
          gl_FragColor = vec4(texColor.rgb * lighting + specular, texColor.a);
        }
      `,
      uniforms: {
        tMap: { value: texture },
      },
      cullFace: null, // Draw back faces if transparency issues, but standard can is opaque
    });

    // 7. Create Mesh
    const mesh = new Mesh(gl, { geometry, program });
    mesh.setParent(scene);

    // 8. Animation Loop
    let animationId: number;
    // Rotate slightly to show it's 3D
    mesh.rotation.y = -0.5;
    mesh.rotation.x = 0.1;

    let targetRotation = 0;

    function update(t: number) {
      animationId = requestAnimationFrame(update);

      // Auto rotation
      mesh.rotation.y += 0.005;

      // Mouse interaction dampening could go here
      renderer.render({ scene, camera });
    }
    animationId = requestAnimationFrame(update);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
      if (container.contains(gl.canvas)) {
        container.removeChild(gl.canvas);
      }
    };
  }, [image]);

  return <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />;
};

export default BeerCan3D;
