import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Eye, RotateCw, Sparkles, Box } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThreeCanvasProps {
  interactive?: boolean;
}

export const ThreeCanvas: React.FC<ThreeCanvasProps> = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const [renderMode, setRenderMode] = useState<'solid' | 'wireframe' | 'points'>('solid');
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [lightPreset, setLightPreset] = useState<'cyan' | 'amber' | 'violet' | 'emerald'>('cyan');

  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const meshGroupRef = useRef<THREE.Group | null>(null);
  const pointLightRef = useRef<THREE.PointLight | null>(null);
  const ambientLightRef = useRef<THREE.AmbientLight | null>(null);
  const dirLightRef = useRef<THREE.DirectionalLight | null>(null);
  const isDraggingRef = useRef<boolean>(false);
  const previousMousePositionRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 1.2, 3.8);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Group for objects
    const group = new THREE.Group();
    scene.add(group);
    meshGroupRef.current = group;

    // Geometry: Create a high-detail hard-surface mechanical sculpture
    const mainGeo = new THREE.IcosahedronGeometry(1.2, 2);
    
    // Solid Material (Clay/Metallic Studio Shader)
    const solidMat = new THREE.MeshStandardMaterial({
      color: 0x1a2130,
      metalness: 0.85,
      roughness: 0.25,
      flatShading: true,
    });

    // Wireframe Material
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.85,
    });

    // Points Material
    const pointsMat = new THREE.PointsMaterial({
      color: 0x00f0ff,
      size: 0.035,
      transparent: true,
      opacity: 0.9,
    });

    const solidMesh = new THREE.Mesh(mainGeo, solidMat);
    solidMesh.name = 'solidMesh';
    group.add(solidMesh);

    const wireMesh = new THREE.Mesh(mainGeo, wireMat);
    wireMesh.name = 'wireMesh';
    group.add(wireMesh);

    const pointsMesh = new THREE.Points(mainGeo, pointsMat);
    pointsMesh.name = 'pointsMesh';
    pointsMesh.visible = false;
    group.add(pointsMesh);

    // Inner mechanical core (golden engine core)
    const coreGeo = new THREE.OctahedronGeometry(0.65, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0xffaa00,
      emissive: 0xff6600,
      emissiveIntensity: 0.35,
      metalness: 0.9,
      roughness: 0.2,
      wireframe: false,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreMesh.name = 'coreMesh';
    group.add(coreMesh);

    // Floating orbital mechanical ring
    const ringGeo = new THREE.TorusGeometry(1.65, 0.02, 16, 100);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      metalness: 0.9,
      roughness: 0.1,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2.3;
    ringMesh.name = 'ringMesh';
    group.add(ringMesh);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);
    ambientLightRef.current = ambientLight;

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(5, 8, 5);
    scene.add(dirLight);
    dirLightRef.current = dirLight;

    const pointLight = new THREE.PointLight(0x00f0ff, 2.5, 10);
    pointLight.position.set(-3, 2, 2);
    scene.add(pointLight);
    pointLightRef.current = pointLight;

    const rimLight = new THREE.DirectionalLight(0xa855f7, 1.4);
    rimLight.position.set(-5, -3, -5);
    scene.add(rimLight);

    // Mouse interaction
    const onMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current || !meshGroupRef.current) return;
      const deltaX = e.clientX - previousMousePositionRef.current.x;
      const deltaY = e.clientY - previousMousePositionRef.current.y;

      meshGroupRef.current.rotation.y += deltaX * 0.008;
      meshGroupRef.current.rotation.x += deltaY * 0.008;

      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
    };

    // Touch interaction
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true;
        previousMousePositionRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current || !meshGroupRef.current || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMousePositionRef.current.x;
      const deltaY = e.touches[0].clientY - previousMousePositionRef.current.y;

      meshGroupRef.current.rotation.y += deltaX * 0.008;
      meshGroupRef.current.rotation.x += deltaY * 0.008;

      previousMousePositionRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const onTouchEnd = () => {
      isDraggingRef.current = false;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    domElement.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (group && !isDraggingRef.current && autoRotate) {
        group.rotation.y += delta * 0.45;
        group.rotation.x = Math.sin(clock.getElapsedTime() * 0.5) * 0.15;
      }

      if (coreMesh) {
        coreMesh.rotation.y -= delta * 0.7;
        coreMesh.rotation.z += delta * 0.4;
      }

      if (ringMesh) {
        ringMesh.rotation.z += delta * 0.25;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!container || !camera || !renderer) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      domElement.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      domElement.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (container.contains(domElement)) {
        container.removeChild(domElement);
      }
    };
  }, [autoRotate]);

  // Update render mode
  useEffect(() => {
    if (!meshGroupRef.current) return;
    const solidMesh = meshGroupRef.current.getObjectByName('solidMesh');
    const wireMesh = meshGroupRef.current.getObjectByName('wireMesh');
    const pointsMesh = meshGroupRef.current.getObjectByName('pointsMesh');

    if (solidMesh && wireMesh && pointsMesh) {
      if (renderMode === 'solid') {
        solidMesh.visible = true;
        wireMesh.visible = true;
        pointsMesh.visible = false;
      } else if (renderMode === 'wireframe') {
        solidMesh.visible = false;
        wireMesh.visible = true;
        pointsMesh.visible = false;
      } else if (renderMode === 'points') {
        solidMesh.visible = false;
        wireMesh.visible = false;
        pointsMesh.visible = true;
      }
    }
  }, [renderMode]);

  // Update lighting preset
  useEffect(() => {
    if (!pointLightRef.current) return;
    const colors = {
      cyan: 0x00f0ff,
      amber: 0xf59e0b,
      violet: 0xa855f7,
      emerald: 0x10b981,
    };
    pointLightRef.current.color.setHex(colors[lightPreset]);
  }, [lightPreset]);

  // Adapt 3D materials & lighting when theme changes between dark and light mode
  useEffect(() => {
    if (!meshGroupRef.current) return;
    const solidMesh = meshGroupRef.current.getObjectByName('solidMesh') as THREE.Mesh | undefined;
    const wireMesh = meshGroupRef.current.getObjectByName('wireMesh') as THREE.Mesh | undefined;
    const pointsMesh = meshGroupRef.current.getObjectByName('pointsMesh') as THREE.Points | undefined;
    const isLight = theme === 'light';

    if (ambientLightRef.current) {
      ambientLightRef.current.intensity = isLight ? 0.75 : 0.4;
    }
    if (dirLightRef.current) {
      dirLightRef.current.intensity = isLight ? 1.4 : 1.2;
    }
    if (solidMesh && solidMesh.material instanceof THREE.MeshStandardMaterial) {
      solidMesh.material.color.setHex(isLight ? 0x475569 : 0x1a2130);
      solidMesh.material.metalness = isLight ? 0.7 : 0.85;
      solidMesh.material.roughness = isLight ? 0.35 : 0.25;
    }
    if (wireMesh && wireMesh.material instanceof THREE.MeshBasicMaterial) {
      wireMesh.material.color.setHex(isLight ? 0x0284c7 : 0x00f0ff);
      wireMesh.material.opacity = isLight ? 0.75 : 0.85;
    }
    if (pointsMesh && pointsMesh.material instanceof THREE.PointsMaterial) {
      pointsMesh.material.color.setHex(isLight ? 0x0284c7 : 0x00f0ff);
    }
  }, [theme]);

  return (
    <div className="three-viewport-container">
      {/* 3D WebGL Canvas Mounting Point */}
      <div ref={mountRef} className="three-canvas-root" />

      {/* Floating Viewport Overlay Controls */}
      <div className="viewport-hud">
        <div className="viewport-badge">
          <span className="hud-dot"></span>
          <span>MAYA VIEWPORT 2.0 • INTERACTIVE ENGINE</span>
        </div>

        <div className="viewport-controls">
          {/* Render Mode Switcher */}
          <div className="ctrl-group">
            <button
              type="button"
              className={`ctrl-btn ${renderMode === 'solid' ? 'active' : ''}`}
              onClick={() => setRenderMode('solid')}
              title="Shaded Wireframe"
            >
              <Box size={14} />
              <span>Shaded</span>
            </button>
            <button
              type="button"
              className={`ctrl-btn ${renderMode === 'wireframe' ? 'active' : ''}`}
              onClick={() => setRenderMode('wireframe')}
              title="Pure Wireframe"
            >
              <Eye size={14} />
              <span>Wire</span>
            </button>
            <button
              type="button"
              className={`ctrl-btn ${renderMode === 'points' ? 'active' : ''}`}
              onClick={() => setRenderMode('points')}
              title="Point Cloud Hologram"
            >
              <Sparkles size={14} />
              <span>Cloud</span>
            </button>
          </div>

          {/* Light Color Presets */}
          <div className="ctrl-group light-swatches">
            <button
              type="button"
              className={`swatch-btn cyan ${lightPreset === 'cyan' ? 'active' : ''}`}
              onClick={() => setLightPreset('cyan')}
              title="Cyan Key Light"
            />
            <button
              type="button"
              className={`swatch-btn amber ${lightPreset === 'amber' ? 'active' : ''}`}
              onClick={() => setLightPreset('amber')}
              title="Amber Sunset"
            />
            <button
              type="button"
              className={`swatch-btn violet ${lightPreset === 'violet' ? 'active' : ''}`}
              onClick={() => setLightPreset('violet')}
              title="Cyber Violet"
            />
            <button
              type="button"
              className={`swatch-btn emerald ${lightPreset === 'emerald' ? 'active' : ''}`}
              onClick={() => setLightPreset('emerald')}
              title="Emerald Matrix"
            />
          </div>

          {/* Turntable Auto-Rotate Toggle */}
          <button
            type="button"
            className={`ctrl-btn icon-only ${autoRotate ? 'active' : ''}`}
            onClick={() => setAutoRotate(!autoRotate)}
            title={autoRotate ? 'Pause Turntable' : 'Play Turntable'}
          >
            <RotateCw size={14} className={autoRotate ? 'spin-slow' : ''} />
          </button>
        </div>

        <div className="viewport-hint">
          <span>Click & Drag to rotate 3D geometry</span>
        </div>
      </div>
    </div>
  );
};
