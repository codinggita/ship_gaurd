import React from 'react';

export default function LiveTelemetry() {
  const logs = [
    { time: '[12:04:11]', prefix: 'SYS_PING', type: 'text-sg-green', message: 'Node connection established.' },
    { time: '[12:04:15]', prefix: 'GPS_DATA', type: 'text-sg-text-muted', message: 'Vector updated to 44.5N/1.2E.' },
    { time: '[12:05:01]', prefix: 'SENSOR_7', type: 'text-sg-text-muted', message: 'Internal pressure 101.3 kPa.' },
    { time: '[12:05:44]', prefix: 'ALT_RAD', type: 'text-sg-text-muted', message: 'Surface temp spike +0.4C.' },
    { time: '[12:06:12]', prefix: 'SYS_LOG', type: 'text-sg-text-muted', message: 'Encryption cycle 14 completed.' },
    { time: '[12:06:33]', prefix: 'API_CALL', type: 'text-sg-blue', message: 'Fetching port clearance...' }
  ];

  return (
    <div className="bg-sg-black border border-sg-border rounded-sm p-6 mt-6 flex-1 min-h-[200px]">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-display uppercase tracking-wider text-sg-text">LIVE_TELEMETRY</h3>
        <div className="w-2 h-2 bg-sg-green rounded-full animate-pulse glow-green"></div>
      </div>
      
      <div className="font-mono text-xs space-y-2 max-h-[250px] overflow-y-auto custom-scrollbar pr-2">
        {logs.map((log, index) => (
          <div key={index} className="flex space-x-2 leading-relaxed">
            <span className="text-sg-text-muted/50">{log.time}</span>
            <span className={`${log.type} font-bold`}>{log.prefix}:</span>
            <span className="text-sg-text-muted">{log.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
