import React from 'react';

export default function AnimatedBox({ color = '#38bdf8', size = 64, pulse = false }: {
  color?: string;
  size?: number;
  pulse?: boolean;
}) {
  return (
    <div
      className={pulse ? 'glow' : undefined}
      style={{
        width: size,
        height: size,
        borderRadius: 12,
        background: color,
        boxShadow: 'inset 0 0 20px rgba(0,0,0,0.3)',
        transition: 'transform 0.25s ease',
      }}
    />
  );
}

