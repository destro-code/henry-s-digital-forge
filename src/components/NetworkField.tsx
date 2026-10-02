import { useEffect, useRef } from 'react';

type Node = { x: number; y: number; vx: number; vy: number; hot: boolean };

export default function NetworkField({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 0;
    let height = 0;
    let frame = 0;
    let inView = true;
    let nodes: Node[] = [];

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const reach = width < 640 ? 100 : 150;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < reach) {
            ctx.strokeStyle = `rgba(238, 232, 220, ${(1 - dist / reach) * 0.16})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      for (const node of nodes) {
        ctx.fillStyle = node.hot ? 'rgba(255, 106, 26, 0.9)' : 'rgba(238, 232, 220, 0.4)';
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.hot ? 2.2 : 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const step = () => {
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
      }
    };

    const loop = () => {
      if (!inView || document.hidden) {
        frame = 0;
        return;
      }
      step();
      draw();
      frame = requestAnimationFrame(loop);
    };

    const start = () => {
      if (!reduceMotion && !frame) frame = requestAnimationFrame(loop);
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(70, Math.max(20, (width * height) / 16000)));
      nodes = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        hot: i % 9 === 0,
      }));
      draw();
    };

    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      if (inView) start();
    });
    const onVisibility = () => !document.hidden && start();

    resize();
    observer.observe(canvas);
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', onVisibility);
    start();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
