import React from 'react';

export default function CargoSpecs() {
  const specs = [
    { label: 'GROSS_WEIGHT', value: '1,420.50 KG' },
    { label: 'COURIER_NODE', value: 'DHL_EXPRESS_GLOBAL', textClass: 'text-sg-blue' },
    { label: 'HAZARD_CLASS', value: 'CLASS_7_RADIOACTIVE', textClass: 'text-sg-red' },
    { label: 'TEMP_CONTROL', value: 'STABLE: -18.4°C' }
  ];

  return (
    <div className="bg-sg-card border border-sg-border rounded-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-display uppercase tracking-wider text-sg-text">CARGO_SPECS</h3>
        <span className="text-xs font-mono text-sg-text-muted">REF_ID: 994-X</span>
      </div>
      
      <div className="space-y-4">
        {specs.map((spec, index) => (
          <div key={index} className="flex justify-between items-center py-2 border-b border-sg-border/50 last:border-0">
            <span className="text-xs font-mono tracking-widest text-sg-text-muted">{spec.label}</span>
            <span className={`text-sm font-bold tracking-wider ${spec.textClass || 'text-sg-text'}`}>
              {spec.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
