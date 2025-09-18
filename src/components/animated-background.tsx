"use client";

import { useEffect, useRef, useState } from "react";
import { WaveBackground } from "./wave-background";

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [backgroundStyle, setBackgroundStyle] = useState<string>("particles");

  useEffect(() => {
    // Listen for changes to the data-background attribute on document.documentElement
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-background"
        ) {
          const newStyle = document.documentElement.getAttribute("data-background") || "particles";
          setBackgroundStyle(newStyle);
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    // Initialize from localStorage if available
    const savedStyle = localStorage.getItem("backgroundStyle");
    if (savedStyle) {
      document.documentElement.setAttribute("data-background", savedStyle);
      setBackgroundStyle(savedStyle);
    } else {
      document.documentElement.setAttribute("data-background", "particles");
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = document.documentElement.scrollHeight;

    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      update: () => void;
      draw: () => void;
    }[] = [];
    const particleCount = 70;
    const colors = ["#3b82f6", "#8b5cf6", "#ec4899"];

    const createParticle = () => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 5 + 1,
        speedX: Math.random() * 3 - 1.5,
        speedY: Math.random() * 3 - 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        update() {
          this.x += this.speedX;
          this.y += this.speedY;

          if (this.x > canvas.width) this.x = 0;
          else if (this.x < 0) this.x = canvas.width;
          if (this.y > canvas.height) this.y = 0;
          else if (this.y < 0) this.y = canvas.height;
        },
        draw() {
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.closePath();
          ctx.fill();
        }
      };
    };

    const init = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(0, 0, 0, 0.02)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Only animate if background style is particles
      if (backgroundStyle === "particles") {
        for (let i = 0; i < particles.length; i++) {
          particles[i].update();
          particles[i].draw();

          // Connect particles with lines if they are close enough
          for (let j = i; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              ctx.beginPath();
              ctx.strokeStyle = particles[i].color;
              ctx.globalAlpha = 1 - distance / 100;
              ctx.lineWidth = 0.5;
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
              ctx.globalAlpha = 1;
            }
          }
        }
      }

      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };

    const handleScroll = () => {
      // Update canvas height on scroll to ensure it covers the entire page
      canvas.height = document.documentElement.scrollHeight;
    };

    init();
    animate();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [backgroundStyle]);

  return (
    <>
      {/* Gradient background */}
      <div
        className={`fixed inset-0 -z-10 bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-blue-950/30 dark:to-indigo-950/20 animate-gradient ${
          backgroundStyle === "minimal" ? "!bg-white dark:!bg-gray-950" : ""
        }`}
      />

      {/* Particles canvas */}
      <canvas
        ref={canvasRef}
        className={`fixed inset-0 -z-10 ${
          backgroundStyle === "particles"
            ? "opacity-30"
            : backgroundStyle === "gradient"
              ? "opacity-10"
              : "opacity-0"
        }`}
      />

      {/* Wave background */}
      <WaveBackground isActive={backgroundStyle === "waves"} />

      {/* Minimal background patterns */}
      <div className={`fixed inset-0 -z-10 ${backgroundStyle === "minimal" ? "opacity-5" : "opacity-0"}`}>
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>
    </>
  );
}
