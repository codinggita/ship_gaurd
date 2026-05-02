import React from 'react';
import { Info } from 'lucide-react';

export default function DiagnosticSummary() {
  return (
    <div className="mb-12">
      <div className="bg-sg-black border border-sg-border p-6 font-mono text-[10px] md:text-xs leading-relaxed mb-6 min-h-[120px]">
        <div className="flex items-center space-x-2 text-sg-blue mb-4 uppercase tracking-widest font-bold">
          <Info className="w-4 h-4" />
          <span>AUTO-DIAGNOSTIC SUMMARY</span>
        </div>
        
        <div className="text-sg-text-muted space-y-1">
          <p>INITIALIZING HASH CHECK... <span className="text-sg-green">[OK]</span></p>
          <p>VERIFYING COURIER API... <span className="text-sg-green">[CONNECTED]</span></p>
          <p className="mt-2 text-sg-text">SYSTEM WILL AUTO-GENERATE CLAIM TICKET UPON UPLOAD COMPLETION.</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-end gap-4">
        <button className="border border-sg-border bg-transparent text-sg-text-muted font-mono tracking-widest text-xs uppercase px-8 py-4 hover:border-sg-text hover:text-sg-text transition-colors">
          CANCEL_NODE
        </button>
        <button className="bg-sg-red text-white font-bold tracking-widest text-xs uppercase px-8 py-4 hover:bg-sg-red/80 transition-colors glow-red">
          EXECUTE_STEP_02
        </button>
      </div>
    </div>
  );
}
