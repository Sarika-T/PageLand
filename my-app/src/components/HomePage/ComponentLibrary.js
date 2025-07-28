import React from 'react';

export default function ComponentLibrary({ onAdd }) {
  const types = [
    { label: 'HeroBlock', type: 'hero' },
    { label: 'Two-column', type: 'two-column' },
    { label: 'ImageGrid', type: 'image-grid' }
  ];
  return (
    <div className="lib">
      {types.map((t) => (
        <button key={t.type} onClick={() => onAdd(t.type)}>
          Add {t.label}
        </button>
      ))}
    </div>
  );
};