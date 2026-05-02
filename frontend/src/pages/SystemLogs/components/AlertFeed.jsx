import React from 'react';
import AlertCard from './AlertCard';
import { AlignLeft, Filter } from 'lucide-react';

export default function AlertFeed() {
  const alerts = [
    {
      type: 'critical',
      title: 'CRYPTO_GATEWAY_FAILURE',
      description: 'Unauthorized handshake attempt detected from unknown IP 192.168.0.122. Node isolation protocol recommended. Immediate action required to prevent data leakage.',
      time: 'T+ 00:04:12',
      location: 'SECTOR_07_DOCK',
      extraTag: 'VIRTUAL_MESH_4',
      refId: 'AC-9022',
      primaryAction: 'ISOLATE_NODE',
      secondaryAction: 'VIEW_DETAILS'
    },
    {
      type: 'warning',
      title: 'HYDRAULIC_PRESSURE_DROP',
      description: 'External hydraulic manifold #4 on Heavy Transporter H-102 showing 15% pressure variance from baseline. Routine maintenance required within 2 hours.',
      time: 'T+ 00:24:55',
      location: 'TRANS_H102',
      refId: 'TR-110A',
      primaryAction: 'SCHED_MAINT',
      secondaryAction: 'ACKNOWLEDGE'
    },
    {
      type: 'info',
      title: 'CARGO_DOCK_REASSIGNMENT',
      description: 'Automated rerouting of Manifest #X77-90 from Dock 4 to Dock 12 completed. Optimization protocols achieved 4% efficiency increase.',
      image: '/assets/tag.svg', // Assuming a generic tag image or we can use an icon
      extraTag: '#LOGISTICS_OPTIMIZED  2024-05-22 09:14:02',
      refId: 'INF-008',
      primaryAction: 'OPEN_TERMINAL_VISUAL'
    }
  ];

  return (
    <div className="flex flex-col h-full pl-0 lg:pl-6 pt-6 lg:pt-0 w-full relative">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 border-b border-sg-border pb-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-display font-bold tracking-wider text-white uppercase mb-1">
            ALERT_FEED
          </h1>
          <span className="text-[10px] font-mono tracking-widest text-sg-text-muted uppercase">
            ACTIVE_THREATS_DETECTED: 14 // NODE: DELTA-88
          </span>
        </div>
        
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <button className="flex items-center space-x-2 bg-sg-card border border-sg-border px-4 py-2 text-[10px] font-mono tracking-widest uppercase text-sg-text hover:text-white transition-colors">
            <AlignLeft className="w-4 h-4" />
            <span>PRIORITY</span>
          </button>
          <button className="flex items-center space-x-2 bg-sg-card border border-sg-border px-4 py-2 text-[10px] font-mono tracking-widest uppercase text-sg-text hover:text-white transition-colors">
            <Filter className="w-4 h-4" />
            <span>FILTER</span>
          </button>
        </div>
      </div>

      {/* Feed Area */}
      <div className="flex-1 space-y-2 pb-16">
        {alerts.map((alert, index) => (
          <AlertCard key={index} alert={alert} />
        ))}
      </div>

      {/* Bottom Terminal Bar */}
      <div className="mt-4 border-t border-sg-border pt-4 text-[10px] font-mono tracking-widest text-sg-text-muted uppercase flex justify-between items-center">
        <span>SYSTEM_OUTPUT_STREAM</span>
      </div>

      {/* Floating Action Button */}
      <button className="absolute bottom-6 right-0 w-12 h-12 bg-sg-red text-white flex items-center justify-center glow-red hover:bg-sg-red/80 transition-colors shadow-lg z-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      </button>

    </div>
  );
}
