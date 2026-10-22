import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

type HeroSceneProps = {
  reducedMotion: boolean;
};

type Floater = {
  mesh: THREE.Mesh;
  baseY: number;
  speed: number;
  phase: number;
  spin: number;
};

export function HeroScene({ reducedMotion }: HeroSceneProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' });
    } catch {
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.z = 14;

    scene.add(new THREE.AmbientLight(0xfff1dc, 0.7));
    const key = new THREE.DirectionalLight(0xffe0aa, 1.6);
    key.position.set(5, 6, 8);
    scene.add(key);
    const rim = new THREE.PointLight(0xc65d36, 30, 30);
    rim.position.set(-4, -3, 5);
    scene.add(rim);

    const group = new THREE.Group();
    scene.add(group);

    const gold = new THREE.MeshStandardMaterial({ color: 0xf4c542, roughness: 0.45, metalness: 0.2 });
    const terracotta = new THREE.MeshStandardMaterial({ color: 0xc65d36, roughness: 0.6 });
    const cream = new THREE.MeshStandardMaterial({ color: 0xf7f3eb, roughness: 0.7 });
    const ring = new THREE.MeshStandardMaterial({ color: 0xf4c542, roughness: 0.3, metalness: 0.6 });
    const wire = new THREE.MeshBasicMaterial({ color: 0xf7f3eb, wireframe: true, transparent: true, opacity: 0.22 });
    const materials = [gold, terracotta, cream, ring, wire];

    const sphere = new THREE.SphereGeometry(1, 32, 32);
    const torus = new THREE.TorusGeometry(1, 0.025, 12, 96);
    const ico = new THREE.IcosahedronGeometry(1, 1);
    const box = new THREE.BoxGeometry(1, 1, 1);
    const geometries = [sphere, torus, ico, box];

    const specs: Array<{geo: THREE.BufferGeometry;mat: THREE.Material;pos: [number, number, number];s: number;}> = [
    { geo: sphere, mat: gold, pos: [7.2, 3.4, -3], s: 0.32 },
    { geo: sphere, mat: terracotta, pos: [3.4, -2.6, 2], s: 0.2 },
    { geo: sphere, mat: cream, pos: [9.4, -1.2, -5], s: 0.45 },
    { geo: sphere, mat: gold, pos: [1.6, 3.8, -6], s: 0.14 },
    { geo: sphere, mat: cream, pos: [5.4, 0.6, 3], s: 0.1 },
    { geo: torus, mat: ring, pos: [5.6, 1.4, -2], s: 1.3 },
    { geo: torus, mat: ring, pos: [8.6, -3.2, -1], s: 0.7 },
    { geo: ico, mat: wire, pos: [9.2, 3.6, -7], s: 1.6 },
    { geo: box, mat: terracotta, pos: [2.6, 1.6, -1], s: 0.32 },
    { geo: box, mat: cream, pos: [7.4, -2.2, 1.5], s: 0.24 }];


    const floaters: Floater[] = specs.map((spec, i) => {
      const mesh = new THREE.Mesh(spec.geo, spec.mat);
      mesh.position.set(...spec.pos);
      mesh.scale.setScalar(spec.s);
      mesh.rotation.set(i * 0.6, i * 0.4, 0);
      group.add(mesh);
      return { mesh, baseY: spec.pos[1], speed: 0.25 + i % 4 * 0.08, phase: i * 1.3, spin: 0.002 + i % 3 * 0.0015 };
    });

    const layout = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      const narrow = w / h < 1;
      group.scale.setScalar(narrow ? 0.6 : 1);
      group.userData.baseX = narrow ? -3.4 : 0;
      group.userData.baseY = narrow ? 2.2 : 0;
    };
    layout();

    const pointer = { x: 0, y: 0 };
    const onPointer = (e: PointerEvent) => {
      pointer.x = e.clientX / window.innerWidth - 0.5;
      pointer.y = e.clientY / window.innerHeight - 0.5;
    };

    const clock = new THREE.Clock();
    let frame = 0;
    let visible = true;

    const render = () => {
      const t = clock.getElapsedTime();
      floaters.forEach((f) => {
        f.mesh.position.y = f.baseY + Math.sin(t * f.speed + f.phase) * 0.28;
        f.mesh.rotation.x += f.spin;
        f.mesh.rotation.y += f.spin * 1.4;
      });
      const bx = group.userData.baseX as number ?? 0;
      const by = group.userData.baseY as number ?? 0;
      group.position.x += (bx + pointer.x * 0.8 - group.position.x) * 0.04;
      group.position.y += (by - pointer.y * 0.5 - group.position.y) * 0.04;
      group.rotation.y += (pointer.x * 0.18 - group.rotation.y) * 0.04;
      renderer.render(scene, camera);
    };

    const loop = () => {
      if (visible) render();
      frame = requestAnimationFrame(loop);
    };

    const ro = new ResizeObserver(() => {
      layout();
      if (reducedMotion) render();
    });
    ro.observe(mount);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(mount);

    if (reducedMotion) {
      group.position.set(group.userData.baseX as number, group.userData.baseY as number, 0);
      render();
    } else {
      window.addEventListener('pointermove', onPointer, { passive: true });
      loop();
    }

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onPointer);
      ro.disconnect();
      io.disconnect();
      geometries.forEach((g) => g.dispose());
      materials.forEach((m) => m.dispose());
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [reducedMotion]);

  return <div ref={mountRef} className="pointer-events-none absolute inset-0" aria-hidden="true" />;
}