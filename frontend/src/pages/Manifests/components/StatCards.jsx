import React from 'react';

export default function StatCards() {
  const stats = [
    { label: 'TIME_TO_NODE', value: '04:12:00', textClass: 'text-white' },
    { label: 'VELOCITY_AVG', value: '78.4 km/h', textClass: 'text-white' },
    { label: 'FUEL_EFFICIENCY', value: '98.2%', textClass: 'text-sg-green' },
    { label: 'RISK_INDEX', value: 'LOW', textClass: 'text-sg-red' },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-sg-card border border-sg-border rounded-sm p-4 hover:border-sg-red/50 transition-colors">
          <span className="text-[10px] font-mono text-sg-text-muted tracking-widest uppercase block mb-1">
            {stat.label}
          </span>
          <span className={`text-2xl font-display tracking-wider ${stat.textClass}`}>
            {stat.value}
          </span>
        </div>
      ))}
    </div>
  );
}
