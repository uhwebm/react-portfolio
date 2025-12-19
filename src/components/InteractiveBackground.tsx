import React, { useEffect, useRef } from 'react';

const InteractiveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollSpeedRef = useRef(0);
  const lastScrollYRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: { x: number; y: number; z: number; prevZ: number }[] = [];
    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Config
    const particleCount = 400;
    const baseSpeed = 2;
    const warpFactor = 0.5;
    const gridOpacity = 0.2;   
    const particleOpacity = 0.3;

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width - width / 2,
          y: Math.random() * height - height / 2,
          z: Math.random() * width,
          prevZ: 0
        });
      }
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const delta = Math.abs(currentScroll - lastScrollYRef.current);
      
      scrollSpeedRef.current = delta;
      
      lastScrollYRef.current = currentScroll;
    };
    
    const handleMouseMove = (e: MouseEvent) => {
        mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    handleResize();
    mouseRef.current = { x: width / 2, y: height / 2 };

    const render = () => {
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);
      
      const gridSize = 50;
      const mouse = mouseRef.current;
      const maxDist = 300;
      
      ctx.lineWidth = 1;
      
      for (let x = 0; x <= width; x += gridSize) {
          const xDist = Math.abs(x - mouse.x);
          
          if (xDist > maxDist) {
             ctx.strokeStyle = `rgba(255, 255, 255, ${gridOpacity * 0.2})`;
          } else {
             const gradient = ctx.createLinearGradient(x, 0, x, height);
             const base = gridOpacity * 0.2;
             const peak = gridOpacity * (1 - xDist / maxDist);
             
             const yRel = mouse.y / height;
             const range = maxDist / height;
             
             gradient.addColorStop(0, `rgba(255, 255, 255, ${base})`);
             gradient.addColorStop(Math.max(0, yRel - range), `rgba(255, 255, 255, ${base})`);
             gradient.addColorStop(Math.max(0, Math.min(1, yRel)), `rgba(255, 255, 255, ${base + peak})`);
             gradient.addColorStop(Math.min(1, yRel + range), `rgba(255, 255, 255, ${base})`);
             gradient.addColorStop(1, `rgba(255, 255, 255, ${base})`);
             
             ctx.strokeStyle = gradient;
          }
          
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
          ctx.stroke();
      }
      
      for (let y = 0; y <= height; y += gridSize) {
          const yDist = Math.abs(y - mouse.y);
          
          if (yDist > maxDist) {
              ctx.strokeStyle = `rgba(255, 255, 255, ${gridOpacity * 0.2})`;
          } else {
              const gradient = ctx.createLinearGradient(0, y, width, y);
              const base = gridOpacity * 0.2;
              const peak = gridOpacity * (1 - yDist / maxDist);
              
              const xRel = mouse.x / width;
              const range = maxDist / width;
              
              gradient.addColorStop(0, `rgba(255, 255, 255, ${base})`);
              gradient.addColorStop(Math.max(0, xRel - range), `rgba(255, 255, 255, ${base})`);
              gradient.addColorStop(Math.max(0, Math.min(1, xRel)), `rgba(255, 255, 255, ${base + peak})`);
              gradient.addColorStop(Math.min(1, xRel + range), `rgba(255, 255, 255, ${base})`);
              gradient.addColorStop(1, `rgba(255, 255, 255, ${base})`);
              
              ctx.strokeStyle = gradient;
          }
          
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
      }

      const isAtBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100;
      
      let targetSpeed = baseSpeed;
      if (isAtBottom) {
        targetSpeed = 40;
      } else {
        targetSpeed = baseSpeed + (scrollSpeedRef.current * warpFactor);
      }
      
      if (!isAtBottom) {
         scrollSpeedRef.current *= 0.9;
      }
      
      const speed = Math.max(baseSpeed, targetSpeed);

      const cx = width / 2;
      const cy = height / 2;

      ctx.lineWidth = 2;
      ctx.lineCap = 'round';

      particles.forEach(p => {
        p.prevZ = p.z;
        p.z -= speed;

        if (p.z <= 0) {
          p.z = width;
          p.prevZ = width;
          p.x = Math.random() * width - width / 2;
          p.y = Math.random() * height - height / 2;
        }

        // const x = (p.x / p.z) * width + cx;
        // const y = (p.y / p.z) * srcheight(width, height) + cy; 
        
        const px = (p.x / p.z) * (width * 0.8) + cx;
        const py = (p.y / p.z) * (width * 0.8) + cy;
        
        const prevPx = (p.x / p.prevZ) * (width * 0.8) + cx;
        const prevPy = (p.y / p.prevZ) * (width * 0.8) + cy;

        const opacity = Math.min(1, (width - p.z) / width) * particleOpacity;
        
        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.beginPath();
        ctx.moveTo(prevPx, prevPy);
        ctx.lineTo(px, py);
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        background: '#000000'
      }}
    />
  );
};
  
// function srcheight(w: number, _h: number) {
//     return w; 
// }

export default InteractiveBackground;
