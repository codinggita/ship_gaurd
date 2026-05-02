import React from 'react';
import { TriangleAlert } from 'lucide-react';

export default function SystemAlerts() {
  return (
    <div className="bg-sg-card border border-sg-border rounded-sm p-6 relative overflow-hidden mt-6">
      {/* Subtle red glow background for alert card */}
      <div className="absolute top-0 left-0 w-full h-1 bg-sg-red glow-red"></div>
      
      <div className="flex items-center space-x-3 mb-6">
        <TriangleAlert className="w-5 h-5 text-sg-red animate-pulse glow-red" />
        <h3 className="text-lg font-display uppercase tracking-wider text-sg-text">SYSTEM_ALERTS</h3>
      </div>
      
      <div className="bg-sg-dark border border-sg-border p-4 rounded-sm mb-6">
        <span className="text-[10px] font-mono text-sg-red tracking-widest uppercase block mb-2">ERR_CODE: W-204</span>
        <p className="text-sm text-sg-text-muted">Route deviation detected in sector 4. Recalculating transit window.</p>
      </div>
      
      <button className="w-full py-3 border border-sg-red text-sg-red text-xs font-bold tracking-widest uppercase hover:bg-sg-red/10 transition-colors">
        ACKNOWLEDGE_CRITICAL_STATUS
      </button>
    </div>
  );
}
