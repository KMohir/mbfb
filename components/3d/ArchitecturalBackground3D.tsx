"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "@/lib/ThemeContext";

/**
 * ArchitecturalBackground3D
 * 
 * Calm, elegant, and tasteful 3D architectural blueprint perspective grid
 * with gentle ambient telemetry nodes and multi-point emerald/cyan architectural lighting
 * distributed evenly across the entire viewport in both Light and Dark modes.
 * 
 * Works 100% smoothly and crash-free via Canvas 2D.
 */
export default function ArchitecturalBackground3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const isDark = theme === "dark";

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetTiltX = 0;
    let targetTiltY = 0;
    let currentTiltX = 0;
    let currentTiltY = 0;
    let tick = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      targetTiltX = (e.clientX / width - 0.5) * 16;
      targetTiltY = (e.clientY / height - 0.5) * 16;
    };
    window.addEventListener("mousemove", onMouseMove);

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    // 28 calm, gentle floating telemetry nodes distributed across the screen
    const nodeCount = 28;
    const nodes = Array.from({ length: nodeCount }, (_, i) => ({
      x: (i / nodeCount) * width + (Math.random() - 0.5) * 120,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      pulse: Math.random() * Math.PI * 2,
      radius: Math.random() * 1.6 + 1.2,
      isEmerald: i % 2 === 0, // Evenly split between emerald and cyan
    }));

    let animId: number;

    const render = () => {
      animId = requestAnimationFrame(render);
      tick += 0.015;

      currentTiltX += (targetTiltX - currentTiltX) * 0.04;
      currentTiltY += (targetTiltY - currentTiltY) * 0.04;

      ctx.clearRect(0, 0, width, height);

      // Gentle organic breathing wave for the ambient orbs
      const breath = Math.sin(tick) * 0.015;

      // ==========================================
      // 1. MULTI-POINT BALANCED ARCHITECTURAL AMBIENT LIGHTING
      //    Evenly distributed across top, middle, and bottom
      // ==========================================
      if (isDark) {
        // --- 1. Top-Left: Emerald Aura (Hero Title area) ---
        const orb1 = ctx.createRadialGradient(
          width * 0.22 + currentTiltX,
          height * 0.25 + currentTiltY,
          20,
          width * 0.22 + currentTiltX,
          height * 0.25 + currentTiltY,
          width * 0.38
        );
        orb1.addColorStop(0, `rgba(16, 185, 129, ${0.10 + breath})`);
        orb1.addColorStop(0.55, "rgba(5, 150, 105, 0.035)");
        orb1.addColorStop(1, "rgba(7, 11, 18, 0)");
        ctx.fillStyle = orb1;
        ctx.fillRect(0, 0, width, height);

        // --- 2. Top-Right: Cyan & Emerald (Hero 3D Model area) ---
        const orb2 = ctx.createRadialGradient(
          width * 0.78 - currentTiltX,
          height * 0.30 - currentTiltY,
          30,
          width * 0.78 - currentTiltX,
          height * 0.30 - currentTiltY,
          width * 0.40
        );
        orb2.addColorStop(0, `rgba(14, 165, 233, ${0.09 + breath})`);
        orb2.addColorStop(0.5, "rgba(16, 185, 129, 0.04)");
        orb2.addColorStop(1, "rgba(7, 11, 18, 0)");
        ctx.fillStyle = orb2;
        ctx.fillRect(0, 0, width, height);

        // --- 3. Mid-Left: Rich Emerald (Section 01 / About) ---
        const orb3 = ctx.createRadialGradient(
          width * 0.15 + currentTiltX * 0.7,
          height * 0.65 + currentTiltY * 0.7,
          25,
          width * 0.15 + currentTiltX * 0.7,
          height * 0.65 + currentTiltY * 0.7,
          width * 0.36
        );
        orb3.addColorStop(0, `rgba(16, 185, 129, ${0.085 + breath})`);
        orb3.addColorStop(0.55, "rgba(6, 182, 212, 0.03)");
        orb3.addColorStop(1, "rgba(7, 11, 18, 0)");
        ctx.fillStyle = orb3;
        ctx.fillRect(0, 0, width, height);

        // --- 4. Mid-Right: Teal & Emerald (Floor Viewer & Statistics) ---
        const orb4 = ctx.createRadialGradient(
          width * 0.82 - currentTiltX * 0.7,
          height * 0.68 - currentTiltY * 0.7,
          25,
          width * 0.82 - currentTiltX * 0.7,
          height * 0.68 - currentTiltY * 0.7,
          width * 0.38
        );
        orb4.addColorStop(0, `rgba(16, 185, 129, ${0.08 + breath})`);
        orb4.addColorStop(0.55, "rgba(14, 165, 233, 0.035)");
        orb4.addColorStop(1, "rgba(7, 11, 18, 0)");
        ctx.fillStyle = orb4;
        ctx.fillRect(0, 0, width, height);

        // --- 5. Center-Bottom: Balanced Emerald Ambient (Services / Contacts) ---
        const orb5 = ctx.createRadialGradient(
          width * 0.50,
          height * 0.90,
          30,
          width * 0.50,
          height * 0.90,
          width * 0.42
        );
        orb5.addColorStop(0, `rgba(16, 185, 129, ${0.075 + breath})`);
        orb5.addColorStop(0.6, "rgba(6, 182, 212, 0.025)");
        orb5.addColorStop(1, "rgba(7, 11, 18, 0)");
        ctx.fillStyle = orb5;
        ctx.fillRect(0, 0, width, height);

      } else {
        // ==========================================
        // LIGHT MODE: Soft, clean daylight architectural emerald & sky glow
        // ==========================================
        // --- 1. Top-Left: Soft Emerald Mint ---
        const lightOrb1 = ctx.createRadialGradient(
          width * 0.22,
          height * 0.25,
          20,
          width * 0.22,
          height * 0.25,
          width * 0.42
        );
        lightOrb1.addColorStop(0, `rgba(16, 185, 129, ${0.06 + breath * 0.5})`);
        lightOrb1.addColorStop(0.55, "rgba(13, 148, 136, 0.025)");
        lightOrb1.addColorStop(1, "rgba(248, 250, 252, 0)");
        ctx.fillStyle = lightOrb1;
        ctx.fillRect(0, 0, width, height);

        // --- 2. Top-Right: Sky Azure & Emerald Hint ---
        const lightOrb2 = ctx.createRadialGradient(
          width * 0.78,
          height * 0.30,
          25,
          width * 0.78,
          height * 0.30,
          width * 0.42
        );
        lightOrb2.addColorStop(0, "rgba(2, 132, 199, 0.05)");
        lightOrb2.addColorStop(0.5, `rgba(16, 185, 129, ${0.035 + breath * 0.5})`);
        lightOrb2.addColorStop(1, "rgba(248, 250, 252, 0)");
        ctx.fillStyle = lightOrb2;
        ctx.fillRect(0, 0, width, height);

        // --- 3. Mid-Left: Clean Architectural Emerald ---
        const lightOrb3 = ctx.createRadialGradient(
          width * 0.18,
          height * 0.65,
          20,
          width * 0.18,
          height * 0.65,
          width * 0.38
        );
        lightOrb3.addColorStop(0, `rgba(16, 185, 129, ${0.055 + breath * 0.5})`);
        lightOrb3.addColorStop(0.6, "rgba(248, 250, 252, 0)");
        ctx.fillStyle = lightOrb3;
        ctx.fillRect(0, 0, width, height);

        // --- 4. Mid-Right: Soft Mint-Teal ---
        const lightOrb4 = ctx.createRadialGradient(
          width * 0.82,
          height * 0.68,
          20,
          width * 0.82,
          height * 0.68,
          width * 0.40
        );
        lightOrb4.addColorStop(0, `rgba(16, 185, 129, ${0.05 + breath * 0.5})`);
        lightOrb4.addColorStop(0.55, "rgba(2, 132, 199, 0.025)");
        lightOrb4.addColorStop(1, "rgba(248, 250, 252, 0)");
        ctx.fillStyle = lightOrb4;
        ctx.fillRect(0, 0, width, height);

        // --- 5. Bottom: Fresh Emerald Glow ---
        const lightOrb5 = ctx.createRadialGradient(
          width * 0.50,
          height * 0.90,
          25,
          width * 0.50,
          height * 0.90,
          width * 0.42
        );
        lightOrb5.addColorStop(0, `rgba(16, 185, 129, ${0.05 + breath * 0.5})`);
        lightOrb5.addColorStop(0.6, "rgba(248, 250, 252, 0)");
        ctx.fillStyle = lightOrb5;
        ctx.fillRect(0, 0, width, height);
      }

      ctx.save();
      ctx.translate(currentTiltX * 0.4, currentTiltY * 0.4);

      // ==========================================
      // 2. TASTEFUL, CALM ARCHITECTURAL BLUEPRINT GRID
      // ==========================================
      const gridSize = 64;

      // Clean square grid lines
      ctx.lineWidth = 1;
      ctx.strokeStyle = isDark ? "rgba(148, 163, 184, 0.055)" : "rgba(15, 23, 42, 0.045)";
      ctx.beginPath();
      for (let x = 0; x < width + gridSize; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y < height + gridSize; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Subtle 30-degree isometric engineering diagonals with emerald tint
      ctx.lineWidth = 1;
      ctx.strokeStyle = isDark ? "rgba(16, 185, 129, 0.055)" : "rgba(16, 185, 129, 0.045)";
      ctx.beginPath();
      for (let d = -width; d < width * 2; d += gridSize * 3) {
        ctx.moveTo(d, 0);
        ctx.lineTo(d + height * 0.577, height);
      }
      ctx.stroke();

      // Grid Intersection Crosshair Marks (+) with emerald & cyan accents
      ctx.strokeStyle = isDark ? "rgba(16, 185, 129, 0.22)" : "rgba(16, 185, 129, 0.16)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = gridSize * 2; x < width; x += gridSize * 4) {
        for (let y = gridSize * 2; y < height; y += gridSize * 4) {
          ctx.moveTo(x - 3, y);
          ctx.lineTo(x + 3, y);
          ctx.moveTo(x, y - 3);
          ctx.lineTo(x, y + 3);
        }
      }
      ctx.stroke();

      // ==========================================
      // 3. CALM BALANCED TELEMETRY NODES
      // ==========================================
      for (let i = 0; i < nodeCount; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += 0.02;

        if (n.x < 0) n.x = width;
        if (n.x > width) n.x = 0;
        if (n.y < 0) n.y = height;
        if (n.y > height) n.y = 0;

        const pulseScale = (Math.sin(n.pulse) + 1) / 2;
        const alpha = isDark ? 0.25 + pulseScale * 0.25 : 0.18 + pulseScale * 0.2;

        // Glowing node
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = n.isEmerald
          ? `rgba(16, 185, 129, ${alpha})`
          : isDark
          ? `rgba(56, 189, 248, ${alpha})`
          : `rgba(2, 132, 199, ${alpha})`;
        ctx.fill();

        // Connective data lines
        for (let j = i + 1; j < nodeCount; j++) {
          const n2 = nodes[j];
          const dist = Math.hypot(n.x - n2.x, n.y - n2.y);
          if (dist < 115) {
            const lineAlpha = (1 - dist / 115) * (isDark ? 0.13 : 0.08);
            ctx.strokeStyle = n.isEmerald
              ? `rgba(16, 185, 129, ${lineAlpha})`
              : isDark
              ? `rgba(56, 189, 248, ${lineAlpha})`
              : `rgba(2, 132, 199, ${lineAlpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }
      }

      ctx.restore();
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-700"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
