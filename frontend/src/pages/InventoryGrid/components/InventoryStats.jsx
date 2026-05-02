import React from 'react';
import { RefreshCcw, ClipboardList, Radio } from 'lucide-react';

export default function InventoryStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-sg-black border border-sg-border border-b-2 border-b-sg-red p-6 rounded-sm">
        <div className="flex justify-between items-center mb-6">
          <span className="text-[10px] font-mono tracking-widest uppercase text-sg-text-muted">
            OPERATIONAL_DENSITY
          </span>
          <RefreshCcw className="w-4 h-4 text-sg-red" />
        </div>
        <div className="flex flex-col">
          <span className="text-4xl font-display tracking-wider text-white mb-2">94.2%</span>
          <span className="text-[10px] font-mono tracking-widest uppercase text-sg-text-muted">
            WAREHOUSE CAPACITY OPTIMIZED
          </span>
        </div>
      </div>

      <div className="bg-sg-black border border-sg-border border-b-2 border-b-sg-green p-6 rounded-sm">
        <div className="flex justify-between items-center mb-6">
          <span className="text-[10px] font-mono tracking-widest uppercase text-sg-text-muted">
            TOTAL_SKU_COUNT
          </span>
          <ClipboardList className="w-4 h-4 text-sg-green" />
        </div>
        <div className="flex flex-col">
          <span className="text-4xl font-display tracking-wider text-white mb-2">1,284</span>
          <span className="text-[10px] font-mono tracking-widest uppercase text-sg-text-muted">
            ACTIVE TRACKED ITEMS IN SECTOR
          </span>
        </div>
      </div>

      <div className="bg-sg-black border border-sg-border border-b-2 border-b-sg-blue p-6 rounded-sm">
        <div className="flex justify-between items-center mb-6">
          <span className="text-[10px] font-mono tracking-widest uppercase text-sg-text-muted">
            SCANNER_NETWORK
          </span>
          <Radio className="w-4 h-4 text-sg-blue" />
        </div>
        <div className="flex flex-col">
          <span className="text-4xl font-display tracking-wider text-white mb-2">ACTIVE</span>
          <span className="text-[10px] font-mono tracking-widest uppercase text-sg-text-muted">
            42/42 NODES BROADCASTING SIGNAL
          </span>
        </div>
      </div>
    </div>
  );
}
