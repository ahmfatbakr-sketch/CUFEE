import React from 'react';

export const SmokeBackground = () => {
  // Generate a few random smoke particles
  const particles = Array.from({ length: 8 }).map((_, i) => {
    const size = Math.random() * 20 + 20; // 20vw to 40vw
    const left = Math.random() * 80; // 0% to 80%
    const top = Math.random() * 100; // 0% to 100%
    const animDuration = Math.random() * 10 + 15; // 15s to 25s
    const animDelay = Math.random() * -20; // offset start
    
    return (
      <div
        key={i}
        className="smoke-particle bg-[var(--color-sarmad-gold-muted)]"
        style={{
          width: `${size}vw`,
          height: `${size}vw`,
          left: `${left}vw`,
          top: `${top}vh`,
          animationDuration: `${animDuration}s`,
          animationDelay: `${animDelay}s`,
        }}
      />
    );
  });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
      {particles}
    </div>
  );
};
