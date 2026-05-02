import React from 'react';
import LogFilters from './components/LogFilters';
import AlertFeed from './components/AlertFeed';
import { Search, Bell, Settings, Layers } from 'lucide-react';
import SEO from '../../components/Common/SEO';

export default function SystemLogs() {
  return (
    <div className="p-0 flex flex-col min-h-full animate-fade-in relative">
      <SEO 
        title="Alert Center" 
        description="Priority-based system logs and alert notifications. Monitor system breaches, latency, and cargo tracking alerts." 
      />
      
      {/* Page Header (Internal Bar) */}
      <div className="flex justify-between items-center bg-sg-black/80 backdrop-blur-md border-b border-sg-border px-6 py-4 sticky top-0 z-20">
        <div className="flex items-center space-x-6">
          <h2 className="text-sg-red font-display text-lg tracking-widest uppercase">
            SHIPGUARD_OS_V2.4
          </h2>
          <div className="hidden lg:flex items-center space-x-6 text-[10px] font-mono tracking-widest uppercase">
            <span className="text-sg-text-muted hover:text-white cursor-pointer transition-colors">LIVE_FEED</span>
            <span className="text-sg-text-muted hover:text-white cursor-pointer transition-colors">METRICS</span>
            <span className="text-sg-red font-bold border-b-2 border-sg-red pb-1">ALERTS</span>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div className="relative hidden md:block">
            <input 
              type="text" 
              placeholder="QUERY_DB..." 
              className="bg-sg-card border-b border-sg-border py-1.5 px-3 text-[10px] font-mono uppercase text-sg-text focus:outline-none focus:border-sg-red transition-colors w-48"
            />
          </div>
          <div className="flex items-center space-x-4 text-sg-text-muted">
            <Layers className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
            <Settings className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
            <div className="relative">
              <Bell className="w-4 h-4 text-sg-red cursor-pointer" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-sg-red rounded-full glow-red"></div>
            </div>
            <div className="w-6 h-6 bg-sg-card border border-sg-border overflow-hidden">
               <img src="https://api.dicebear.com/7.x/bottts/svg?seed=ALFA" alt="Avatar" className="w-full h-full object-cover opacity-80" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row flex-1 p-6 md:p-10 max-w-[1600px] w-full mx-auto gap-0">
        {/* Left Column: Filters */}
        <div className="w-full lg:w-80 shrink-0">
          <LogFilters />
        </div>

        {/* Right Column: Alert Feed */}
        <div className="flex-1">
          <AlertFeed />
        </div>
      </div>
    </div>
  );
}
