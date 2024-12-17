"use client";

import { useEffect, useRef } from "react";

export function Background({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const dots: { x: number; y: number; opacity: number }[] = [];
    const spacing = 30;
    const rows = Math.floor(canvas.height / spacing);
    const cols = Math.floor(canvas.width / spacing);

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        dots.push({
          x: j * spacing,
          y: i * spacing,
          opacity: Math.random(),
        });
      }
    }

    let animationFrame: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((dot) => {
        dot.opacity = Math.sin(Date.now() * 0.004 + dot.x + dot.y) * 0.5 + 0.5;
        ctx.fillStyle = `rgba(59, 130, 246, ${dot.opacity})`;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });
      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} />;
}
