import React from 'react';
import { Fingerprint, ChevronDown } from 'lucide-react';

export default function ClaimForm() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
      <div className="flex flex-col space-y-3">
        <label className="text-[10px] font-mono tracking-widest uppercase text-sg-text-muted">
          SHIPMENT IDENTIFIER
        </label>
        <div className="relative">
          <input 
            type="text" 
            placeholder="SG-XXXX-XXXX-XXXX"
            className="w-full bg-sg-card border border-sg-border p-4 text-sg-text font-mono placeholder:text-sg-text-muted/30 focus:outline-none focus:border-sg-red transition-colors"
          />
          <Fingerprint className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-sg-text-muted/50" />
        </div>
      </div>

      <div className="flex flex-col space-y-3">
        <label className="text-[10px] font-mono tracking-widest uppercase text-sg-text-muted">
          CARRIER SELECTION
        </label>
        <div className="relative">
          <select 
            className="w-full bg-sg-card border border-sg-border p-4 text-sg-text font-mono appearance-none focus:outline-none focus:border-sg-red transition-colors"
            defaultValue=""
          >
            <option value="" disabled>SELECT_PROVIDER</option>
            <option value="dhl">DHL_EXPRESS_GLOBAL</option>
            <option value="fedex">FEDEX_AERO_NODE</option>
            <option value="ups">UPS_GROUND_LINK</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-sg-text-muted/50 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
