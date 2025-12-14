import React, { useEffect, useRef } from 'react';

// A smaller, simpler version of the liquid background to overlay on images
// making them look like they are being projected upon.
const LiquidCanvasOverlay: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = canvas.parentElement?.clientWidth || 300;
    let h = canvas.parentElement?.clientHeight || 300;
    canvas.width = w;
    canvas.height = h;

    // Small blobs
    const blobs = Array.from({ length: 5 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      r: Math.random() * 50 + 20,
      color: `hsla(${Math.random() * 360}, 70%, 50%, 0.4)`
    }));

    let animationId: number;
    const render = () => {
      ctx.clearRect(0, 0, w, h);
      
      // We want a subtle overlay, not to block the image
      ctx.globalCompositeOperation = 'screen'; 

      blobs.forEach(b => {
        b.x += b.vx;
        b.y += b.vy;
        if(b.x < 0 || b.x > w) b.vx *= -1;
        if(b.y < 0 || b.y > h) b.vy *= -1;

        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        g.addColorStop(0, b.color);
        g.addColorStop(1, 'transparent');
        
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI*2);
        ctx.fill();
      });
      animationId = requestAnimationFrame(render);
    };
    render();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full mix-blend-color-dodge opacity-60 pointer-events-none"
    />
  );
};

export default LiquidCanvasOverlay;