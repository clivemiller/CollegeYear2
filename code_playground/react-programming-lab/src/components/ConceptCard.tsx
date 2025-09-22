import React from 'react';

export default function ConceptCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="card">
      <div className="title">{title}</div>
      <div style={{ marginTop: 8 }}>{children}</div>
    </div>
  );
}

