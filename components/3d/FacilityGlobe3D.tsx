"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useLanguage } from "@/lib/LanguageContext";

export default function FacilityGlobe3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webGLError, setWebGLError] = useState<boolean>(false);
  const { lang } = useLanguage();

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 340;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 18);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);
    } catch (e) {
      console.warn("WebGL not supported in FacilityGlobe3D:", e);
      setWebGLError(true);
      return;
    }

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // 1. Inner core with dark metallic depth
    const coreGeo = new THREE.SphereGeometry(5.2, 32, 32);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x071521,
      wireframe: false,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    globeGroup.add(core);

    // 2. Wireframe longitude & latitude cyber grid
    const gridGeo = new THREE.WireframeGeometry(new THREE.SphereGeometry(5.5, 20, 20));
    const gridMat = new THREE.LineBasicMaterial({
      color: 0x1e3a5f,
      transparent: true,
      opacity: 0.55,
    });
    const gridMesh = new THREE.LineSegments(gridGeo, gridMat);
    globeGroup.add(gridMesh);

    // 3. Floating Node Points (Facility monitoring sensors across the network)
    const nodeCount = 35;
    const nodePositions: THREE.Vector3[] = [];
    const nodeGroup = new THREE.Group();
    globeGroup.add(nodeGroup);

    const sphereRadius = 5.6;
    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      const x = sphereRadius * Math.cos(theta) * Math.sin(phi);
      const y = sphereRadius * Math.sin(theta) * Math.sin(phi);
      const z = sphereRadius * Math.cos(phi);

      const pos = new THREE.Vector3(x, y, z);
      nodePositions.push(pos);

      // Glowing dot
      const dotGeo = new THREE.SphereGeometry(0.12, 12, 12);
      const dotMat = new THREE.MeshBasicMaterial({
        color: i % 3 === 0 ? 0x0284c7 : 0x38bdf8,
      });
      const dot = new THREE.Mesh(dotGeo, dotMat);
      dot.position.copy(pos);
      nodeGroup.add(dot);
    }

    // 4. Connecting Arcs / Data Beams between key nodes
    const curveCount = 8;
    for (let i = 0; i < curveCount; i++) {
      const p1 = nodePositions[i % nodePositions.length];
      const p2 = nodePositions[(i + 4) % nodePositions.length];

      // Midpoint elevated above sphere
      const mid = p1.clone().add(p2).multiplyScalar(0.5);
      mid.normalize().multiplyScalar(sphereRadius + 1.2 + Math.random() * 0.8);

      const curve = new THREE.QuadraticBezierCurve3(p1, mid, p2);
      const points = curve.getPoints(24);
      const curveGeo = new THREE.BufferGeometry().setFromPoints(points);
      const curveMat = new THREE.LineBasicMaterial({
        color: i % 2 === 0 ? 0x0284c7 : 0x38bdf8,
        transparent: true,
        opacity: 0.65,
      });
      const line = new THREE.Line(curveGeo, curveMat);
      globeGroup.add(line);
    }

    // 5. Ambient Ring halo
    const ringGeo = new THREE.RingGeometry(6.6, 6.75, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.45,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2.5;
    globeGroup.add(ring);

    // 6. Interactive Mouse Tracking
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / width) * 2 - 1;
      mouseY = -((e.clientY - rect.top) / height) * 2 + 1;
    };
    container.addEventListener("mousemove", handleMouseMove);

    // 7. Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      globeGroup.rotation.y += 0.006;
      globeGroup.rotation.x = THREE.MathUtils.lerp(globeGroup.rotation.x, mouseY * 0.25, 0.05);
      globeGroup.rotation.z = THREE.MathUtils.lerp(globeGroup.rotation.z, -mouseX * 0.25, 0.05);

      ring.rotation.z += 0.004;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      const nw = container.clientWidth;
      const nh = container.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", handleMouseMove);
      if (renderer) {
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
        renderer.dispose();
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[320px] sm:h-[360px] rounded-2xl overflow-hidden bg-[#07131f] border border-slate-700/60 shadow-xl group">
      <div ref={containerRef} className="w-full h-full cursor-pointer" />
      
      {webGLError && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 bg-[#07131f] text-center">
          <div className="relative w-44 h-44 rounded-full border border-sky-500/30 flex items-center justify-center animate-pulse">
            <div className="w-32 h-32 rounded-full border border-sky-400/50 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-sky-500/10 border border-emerald-400/60 flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
              </div>
            </div>
            {/* Orbital node dots */}
            <span className="absolute top-4 left-10 w-2 h-2 rounded-full bg-sky-400" />
            <span className="absolute bottom-6 right-8 w-2 h-2 rounded-full bg-emerald-400" />
            <span className="absolute top-14 right-4 w-2 h-2 rounded-full bg-blue-400" />
          </div>
          <span className="mt-4 text-xs font-semibold text-slate-300">
            {lang === "uz" ? "Respublika Muhandislik Telemetriya Tarmog'i" : "Республиканская Инженерная Сеть"}
          </span>
        </div>
      )}

      <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between text-xs text-slate-300 pointer-events-none">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>{lang === "uz" ? "Yagona Dispetcherlik Tarmog'i" : "Единая диспетчерская сеть"}</span>
        </span>
        <span className="text-[11px] text-emerald-400 font-mono">100% Onlayn</span>
      </div>
    </div>
  );
}
