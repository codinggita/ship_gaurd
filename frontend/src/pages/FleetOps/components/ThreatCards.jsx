import React from 'react';
import { GitMerge, Wind, Activity } from 'lucide-react';

export default function ThreatCards() {
  const cards = [
    {
      id: 'ROUTE_ANOMALY',
      icon: GitMerge,
      iconColor: 'text-sg-blue',
      location: 'NORTH_QUAD',
      desc: 'Detecting increased congestion and signal interference on Primary Path Alpha-9.',
      stats: [
        { label: 'DENSITY_INDEX', value: '0.82', color: 'text-white' },
        { label: 'GPS_INTEGRITY', value: 'CLEAR', color: 'text-sg-green' }
      ],
      action: 'CALCULATE_DETOUR'
    },
    {
      id: 'CLIMATE_THREAT',
      icon: Wind,
      iconColor: 'text-sg-red',
      location: 'ACTIVE',
      locationLabel: 'WX_RADAR',
      desc: 'Atmospheric turbulence exceeding safe operational limits for aerial drones.',
      stats: [
        { label: 'WIND_VELOCITY', value: '78 KM/H', color: 'text-white' },
        { label: 'PRECIP_CHANCE', value: '92%', color: 'text-white' }
      ],
      action: 'WEATHER_STATION_FEED'
    },
    {
      id: 'COURIER_STRESS',
      icon: Activity,
      iconColor: 'text-sg-green',
      location: 'UNIT_0932',
      locationLabel: 'ID',
      desc: 'Shift duration exceeding 12-hour threshold. Efficiency drop detected in sector 4.',
      stats: [
        { label: 'REST_CYCLES', value: '2 / 3', color: 'text-white' },
        { label: 'BIO_METRIC_SYNC', value: 'UNSTABLE', color: 'text-sg-red' }
      ],
      action: 'DISPATCH_RELIEF'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <div key={index} className="bg-sg-card border border-sg-border p-6 rounded-sm flex flex-col hover:border-sg-red/30 transition-colors">
            <div className="flex justify-between items-center mb-6">
              <Icon className={`w-5 h-5 ${card.iconColor}`} />
              <span className="text-[10px] font-mono tracking-widest uppercase text-sg-text-muted">
                {card.locationLabel || 'LOC_SET'}: {card.location}
              </span>
            </div>

            <h3 className="text-lg font-display uppercase tracking-wider text-sg-text mb-2">
              {card.id}
            </h3>
            
            <p className="text-xs text-sg-text-muted mb-6 flex-1">
              {card.desc}
            </p>

            <div className="space-y-2 mb-6 border-b border-sg-border pb-6">
              {card.stats.map((stat, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-sg-text-muted">
                    {stat.label}
                  </span>
                  <span className={`text-[10px] font-mono tracking-widest ${stat.color}`}>
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            <button className="flex justify-between items-center w-full group">
              <span className="text-[10px] font-mono tracking-widest text-sg-text uppercase group-hover:text-sg-red transition-colors">
                {card.action}
              </span>
              <span className="text-sg-text-muted group-hover:text-sg-red transition-colors text-xs">
                &gt;
              </span>
            </button>
          </div>
        );
      })}
    </div>
  );
}
