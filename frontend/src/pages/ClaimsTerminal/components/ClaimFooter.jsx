import React from 'react';
import { ShieldAlert } from 'lucide-react';

export default function ClaimFooter() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-6 border-t border-sg-border">
      {/* Live Metric Feed */}
      <div className="bg-sg-card border border-sg-border p-6 col-span-1">
        <h3 className="text-[10px] font-mono uppercase tracking-widest text-sg-text-muted mb-4 border-b border-sg-border/50 pb-2">
          LIVE_METRIC_FEED
        </h3>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-mono tracking-widest text-sg-text-muted">LATENCY</span>
            <span className="text-xs font-mono font-bold text-sg-green">12ms</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-mono tracking-widest text-sg-text-muted">UPTIME</span>
            <span className="text-xs font-mono font-bold text-sg-green">99.98%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-mono tracking-widest text-sg-text-muted">ENCRYPTION</span>
            <span className="text-xs font-mono font-bold text-sg-green">AES_256</span>
          </div>
        </div>
      </div>

      {/* Compliance Protocol */}
      <div className="bg-sg-card border border-sg-border p-6 col-span-1 lg:col-span-2 flex items-start space-x-4">
        <div className="bg-sg-black border border-sg-border p-3 shrink-0">
          <ShieldAlert className="w-5 h-5 text-sg-text-muted" />
        </div>
        <div>
          <h3 className="text-xs font-mono uppercase tracking-widest text-sg-text font-bold mb-2">
            COMPLIANCE PROTOCOL
          </h3>
          <p className="text-[10px] sm:text-xs font-mono leading-relaxed text-sg-text-muted">
            All submissions are logged via immutable ledger. Providing false damage telemetry may result in operator node suspension under Directive OS_v2.4.
          </p>
        </div>
      </div>
    </div>
  );
}
