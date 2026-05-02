import React from 'react';

export default function LogFilters() {
  const filters = [
    { label: 'SYSTEM_BREACH', status: 'CRITICAL', count: '24', color: 'text-sg-red' },
    { label: 'NODE_LATENCY', status: 'WARNING', count: '112', color: 'text-sg-orange', customColor: '#FFB84D' }, // Custom orange for warning
    { label: 'CARGO_TRACKING', status: 'ACTIVE', count: '842', color: 'text-sg-green' },
    { label: 'SYSTEM_UPDATES', status: 'INFO', count: '3.1k', color: 'text-sg-blue' }
  ];

  return (
    <div className="flex flex-col h-full bg-sg-black border-r border-sg-border p-6 min-h-[600px] w-full">
      <div className="flex justify-between items-center mb-8 border-b border-sg-border pb-4">
        <h2 className="text-xl font-display uppercase tracking-wider text-white">
          FILTERS
        </h2>
        <span className="bg-sg-card border border-sg-border px-2 py-1 text-[10px] font-mono tracking-widest text-sg-text-muted">
          REV: 04.2
        </span>
      </div>

      <div className="space-y-6 flex-1">
        {filters.map((filter, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="flex justify-between items-center mb-1">
              <span className={`text-[10px] font-mono tracking-widest uppercase ${filter.customColor ? '' : filter.color}`} style={filter.customColor ? { color: filter.customColor } : {}}>
                STATUS: {filter.status}
              </span>
              <span className="text-[10px] font-mono tracking-widest text-sg-text-muted group-hover:text-sg-text transition-colors">
                {filter.count}
              </span>
            </div>
            <p className="text-sm font-bold tracking-wider uppercase text-sg-text group-hover:text-white transition-colors">
              {filter.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 border-t border-sg-border pt-6">
        <div className="flex justify-between items-center mb-2">
          <div className="flex-1 mr-4">
            <div className="h-1 bg-sg-card w-full rounded-full overflow-hidden">
              <div className="h-full bg-sg-red w-[82%] glow-red"></div>
            </div>
          </div>
          <span className="text-[10px] font-mono tracking-widest uppercase text-sg-text-muted">
            STATION_LOAD: 82%
          </span>
        </div>
        <button className="w-full mt-4 bg-transparent border border-sg-border text-sg-text-muted text-[10px] font-mono tracking-widest uppercase py-3 hover:border-sg-text hover:text-sg-text transition-colors">
          CLEAR_ALL_RESOLVED
        </button>
      </div>
    </div>
  );
}
