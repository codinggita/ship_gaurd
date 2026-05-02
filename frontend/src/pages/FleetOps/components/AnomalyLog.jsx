import React from 'react';

export default function AnomalyLog() {
  const logs = [
    { type: 'CRIT', color: 'text-sg-red', label: 'DRONE_882: BATTERY_VOLTAGE_FLUX', time: '14:40:22' },
    { type: 'INFO', color: 'text-sg-blue', label: 'HUB_SECTOR_4: CARGO_SORT_OPTIMIZED', time: '14:38:15' },
    { type: 'RECD', color: 'text-sg-green', label: 'ROUTE_B_92: CLEAR_PASSAGE_DETECTED', time: '14:35:58' },
    { type: 'CRIT', color: 'text-sg-red', label: 'NETWORK_LATENCY: REGION_08_DEGRADED', time: '14:32:01' }
  ];

  return (
    <div className="bg-sg-card border border-sg-border p-6 rounded-sm h-full flex flex-col">
      <h3 className="text-sm font-mono uppercase tracking-widest text-sg-text-muted mb-6">
        LIVE_ANOMALY_LOG
      </h3>
      
      <div className="space-y-4 flex-1">
        {logs.map((log, index) => (
          <div key={index} className="flex justify-between items-start font-mono text-[10px] sm:text-xs">
            <div className="flex space-x-3">
              <span className={`${log.color} font-bold tracking-widest uppercase w-10`}>
                {log.type}
              </span>
              <span className="text-sg-text-muted tracking-wide">
                {log.label}
              </span>
            </div>
            <span className="text-sg-text-muted/50 ml-4 shrink-0">
              {log.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
