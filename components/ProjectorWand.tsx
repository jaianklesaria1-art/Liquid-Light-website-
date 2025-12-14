import React, { useEffect, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

const ProjectorWand: React.FC = () => {
  const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 28 });
  
  // Use a ref to track if device has mouse to avoid showing on touch only (simple check)
  const isTouchDevice = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      isTouchDevice.current = false;
    };
    
    const handleTouch = () => {
        isTouchDevice.current = true;
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchstart', handleTouch);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleTouch);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-[400px] h-[400px] pointer-events-none z-[100] hidden md:block mix-blend-exclusion"
      style={{
        x: mouseX,
        y: mouseY,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      {/* 
        This acts as the "Projector Beam".
        The mix-blend-mode: exclusion creates trippy inverted colors where it hovers.
        The radial gradient creates the soft falloff of a light beam.
        
        UPDATED: Made much duller (opacity-5) and softer.
      */}
      <div className="w-full h-full rounded-full bg-radial-gradient from-white to-transparent opacity-5 blur-3xl bg-white" />
      
      {/* Inner "Hotspot" of the bulb - significantly reduced opacity */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full blur-3xl opacity-20" />
    </motion.div>
  );
};

export default ProjectorWand;