import React from 'react';
import { Zap } from 'lucide-react';

export default function SystemAdvisory() {
  return (
    <div className="bg-sg-red/5 border-l-4 border-sg-red p-6 flex flex-col md:flex-row gap-6 items-start md:items-center relative overflow-hidden">
      {/* Background gear icon for aesthetic */}
      <div className="absolute -right-4 -top-4 opacity-10 text-sg-red pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      </div>

      <div className="flex-1 relative z-10">
        <div className="flex items-center space-x-2 mb-3">
          <Zap className="w-5 h-5 text-sg-red" />
          <h2 className="text-xl font-display uppercase tracking-wider text-sg-red glow-red-text">
            SYSTEM_ADVISORY: PROTOCOL_KINETIC_SHIFT
          </h2>
        </div>
        
        <p className="text-sm text-sg-text leading-relaxed max-w-3xl mb-6">
          Neural Engine suggests immediate rerouting of Fleet_Delta to Secondary Hub. High probability (84.3%) of operational bottleneck at Current_Node due to incoming weather patterns and courier exhaustion.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <button className="bg-sg-red text-white text-[10px] font-bold tracking-widest uppercase px-4 py-2 hover:bg-sg-red/80 transition-colors">
            RECOMMENDED_ACTION_EXECUTE
          </button>
          <button className="border border-sg-border text-sg-text-muted text-[10px] font-mono tracking-widest uppercase px-4 py-2 hover:border-sg-text hover:text-sg-text transition-colors">
            DELEGATE_TO_AI_CORE
          </button>
        </div>
      </div>
      
      <div className="flex flex-col gap-3 relative z-10 w-full md:w-auto">
        <button className="bg-transparent border border-sg-red text-sg-red text-xs font-bold tracking-widest uppercase px-6 py-3 hover:bg-sg-red/10 transition-colors w-full glow-red">
          INITIATE_REDIRECT
        </button>
        <button className="bg-transparent border border-sg-border text-sg-text-muted text-[10px] font-mono tracking-widest uppercase px-6 py-2 hover:border-sg-text hover:text-sg-text transition-colors w-full">
          DISMISS_ADVISORY
        </button>
      </div>
    </div>
  );
}
