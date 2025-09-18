"use client";

import { useEffect, useRef } from "react";

export function WaveBackground({ isActive }: { isActive: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!isActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width: number;
    let height: number;
    const frequency = 0.005;

    // Get wave colors from CSS variables
    const getWaveColor = (variable: string): string => {
      return getComputedStyle(document.documentElement).getPropertyValue(variable).trim() || "rgba(59, 130, 246, 0.2)";
    };

    const waves = [
      {
        color: getWaveColor("--wave-color-1"),
        amplitude: 50,
        speed: 0.04,
        offset: 0,
        length: 0.5
      },
      {
        color: getWaveColor("--wave-color-2"),
        amplitude: 30,
        speed: 0.03,
        offset: 0,
        length: 0.7
      },
      {
        color: getWaveColor("--wave-color-3"),
        amplitude: 70,
        speed: 0.02,
        offset: 0,
        length: 0.3
      }
    ];

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = document.documentElement.scrollHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const drawWave = (wave: typeof waves[0]) => {
      ctx.beginPath();

      // Update the wave offset based on time and speed
      wave.offset += wave.speed;
      if (wave.offset > 1000) wave.offset = 0;

      // Draw the wave path
      for (let x = 0; x <= width; x += 10) {
        const y = Math.sin((x * wave.length + wave.offset) * frequency) * wave.amplitude + height / 2;
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      // Complete the wave by drawing to the bottom and back to the start
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();

      // Fill the wave
      ctx.fillStyle = wave.color;
      ctx.fill();
    };

    const render = () => {
      if (!isActive) return;

      ctx.clearRect(0, 0, width, height);

      // Draw each wave
      waves.forEach(wave => drawWave(wave));

      animationFrameId = requestAnimationFrame(render);
    };

    const handleScroll = () => {
      height = document.documentElement.scrollHeight;
      canvas.height = height;
    };

    // Update colors when theme changes
    const handleThemeChange = () => {
      waves[0].color = getWaveColor("--wave-color-1");
      waves[1].color = getWaveColor("--wave-color-2");
      waves[2].color = getWaveColor("--wave-color-3");
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("scroll", handleScroll);

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class" &&
            (mutation.target as Element).classList.contains("dark")) {
          handleThemeChange();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [isActive]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 -z-10 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}
    />
  );
}
