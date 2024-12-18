"use client";

import { useEffect, useRef } from "react";

export function Background({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dots: { x: number; y: number; opacity: number }[] = [];
    const spacing = 30;

    const createDots = (width: number, height: number) => {
      dots.length = 0;
      const rows = Math.ceil(height / spacing);
      const cols = Math.ceil(width / spacing);

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          dots.push({
            x: j * spacing,
            y: i * spacing,
            opacity: Math.random(),
          });
        }
      }
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      createDots(window.innerWidth, window.innerHeight);
    };
    resizeCanvas();

    let mouseX = -100;
    let mouseY = -100;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);

    let animationFrame: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot) => {
        const distance = Math.hypot(dot.x - mouseX, dot.y - mouseY);
        const proximity = Math.max(0, 1 - distance / 100);

        const size = 2 + proximity * 3;
        dot.opacity = Math.sin(Date.now() * 0.004 + dot.x + dot.y) * 0.5 + 0.5 + proximity;

        const colorIntensity = Math.min(1, proximity + 0.5);
        ctx.fillStyle = `rgba(59, 130, 246, ${Math.min(dot.opacity, 1)})`;

        if (proximity > 0.5) {
          ctx.fillStyle = `rgba(59, 130, 246, 1)`;
        }

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <canvas ref={canvasRef} className={`fixed top-0 left-0 w-full h-full ${className}`} />;
}
