import React, { useEffect, useRef } from 'react';

const LiquidBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resize);
    resize();

    // Plasma Configuration
    // We use fewer, larger blobs with difference blending to create bands of color
    const orbCount = 8;
    const orbs = Array.from({ length: orbCount }).map((_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      radius: Math.min(width, height) * (0.4 + Math.random() * 0.3), // Large radius
      color: [
        '#FF00FF', // Magenta
        '#00FFFF', // Cyan
        '#00FF00', // Lime
        '#FFFF00', // Yellow
        '#FF0000', // Red
        '#0000FF', // Blue
      ][i % 6],
      phase: Math.random() * Math.PI * 2
    }));

    const render = () => {
      time += 0.005;

      // 1. Clear with a shifting dark base
      const r = Math.sin(time) * 20;
      const g = Math.sin(time + 2) * 20;
      const b = Math.sin(time + 4) * 20;
      ctx.fillStyle = `rgb(${10 + r}, ${10 + g}, ${20 + b})`;
      ctx.fillRect(0, 0, width, height);

      // 2. Set Composite Operation for Plasma Effect
      // 'difference' creates the psychedelic banding rings where shapes overlap
      // 'exclusion' is similar but lower contrast
      // 'screen' makes it bright and glowing
      
      // Let's use a mix. First layer normally.
      
      orbs.forEach((orb, i) => {
        // Organic Movement
        orb.x += orb.vx + Math.sin(time + orb.phase) * 0.5;
        orb.y += orb.vy + Math.cos(time + orb.phase * 0.5) * 0.5;

        // Wall Bounce
        if (orb.x < -orb.radius * 0.5 || orb.x > width + orb.radius * 0.5) orb.vx *= -1;
        if (orb.y < -orb.radius * 0.5 || orb.y > height + orb.radius * 0.5) orb.vy *= -1;

        // Interactive Push
        const dx = mouseRef.current.x - orb.x;
        const dy = mouseRef.current.y - orb.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 400) {
            const force = (400 - dist) / 400;
            orb.x -= (dx / dist) * force * 2;
            orb.y -= (dy / dist) * force * 2;
        }

        // Draw Orb
        // We switch blending modes based on index to create complexity
        if (i % 2 === 0) {
            ctx.globalCompositeOperation = 'screen';
        } else {
            ctx.globalCompositeOperation = 'difference';
        }

        const gradient = ctx.createRadialGradient(
            orb.x, orb.y, 0,
            orb.x, orb.y, orb.radius
        );
        
        // Alpha fades out to transparent
        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(0.6, orb.color); 
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 3. Final unifying wash
      ctx.globalCompositeOperation = 'overlay';
      ctx.fillStyle = 'rgba(0,0,50,0.2)';
      ctx.fillRect(0,0,width,height);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden bg-black">
         <canvas
          ref={canvasRef}
          className="w-full h-full block filter blur-[60px] opacity-80" 
        />
    </div>
  );
};

export default LiquidBackground;