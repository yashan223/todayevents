

import React from "react";

function getParticleCount() {
  if (typeof window !== 'undefined' && window.innerWidth < 640) {
    return 18;
  }
  return 40;
}

function getAvoidZones() {
  if (typeof window !== 'undefined' && window.innerWidth < 640) {
    return [
      { left: 20, top: 0, width: 60, height: 32 }, // logo
      { left: 10, top: 30, width: 80, height: 18 }, // title
      { left: 20, top: 50, width: 60, height: 12 }, // subtitle
      { left: 25, top: 68, width: 50, height: 18 }, // buttons
    ];
  }
  return [
    { left: 30, top: 0, width: 40, height: 30 },
    { left: 20, top: 28, width: 60, height: 18 },
    { left: 30, top: 48, width: 40, height: 10 },
    { left: 35, top: 65, width: 30, height: 15 },
  ];
}

function isInAvoidZone(left: number, top: number, avoidZones: {left:number,top:number,width:number,height:number}[]) {
  return avoidZones.some(
    (zone) =>
      left >= zone.left &&
      left <= zone.left + zone.width &&
      top >= zone.top &&
      top <= zone.top + zone.height
  );
}

const GoldParticles: React.FC = () => {
  const [particles, setParticles] = React.useState<any[]>([]);

  React.useEffect(() => {
    function generateParticles() {
      const avoidZones = getAvoidZones();
      const PARTICLE_COUNT = getParticleCount();
      const arr = [];
      let tries = 0;
      while (arr.length < PARTICLE_COUNT && tries < 500) {
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        if (!isInAvoidZone(left, top, avoidZones)) {
          const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
          arr.push({
            left,
            top,
            size: Math.random() * 6 + 4,
            duration: isMobile ? Math.random() * 4 + 7 : Math.random() * 3 + 3,
            delay: Math.random() * 4,
          });
        }
        tries++;
      }
      return arr;
    }

    setParticles(generateParticles());

    // Only re-generate on actual width change (not scroll)
    let lastWidth = window.innerWidth;
    let resizeTimeout: any;
    const handleResize = () => {
      if (window.innerWidth !== lastWidth) {
        lastWidth = window.innerWidth;
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          setParticles(generateParticles());
        }, 150);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-0 z-10 overflow-hidden"
      aria-hidden="true"
    >
      {particles.map((p, i) => (
        <span
          key={i}
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
          className="absolute rounded-full bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-600 opacity-80 animate-gold-float shadow-gold"
        />
      ))}
    </div>
  );
};

export default GoldParticles;
