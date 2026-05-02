import React from 'react';
import { Search, Monitor, BarChart2, Radio } from 'lucide-react';
import ManifestMap from './components/ManifestMap';
import TransitSequence from './components/TransitSequence';
import CargoSpecs from './components/CargoSpecs';
import SystemAlerts from './components/SystemAlerts';
import LiveTelemetry from './components/LiveTelemetry';
import StatCards from './components/StatCards';

export default function Manifests() {
  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto flex flex-col h-full animate-fade-in">
      {/* Top Navigation / Page Header */}
      <div className="flex justify-between items-end border-b border-sg-border pb-6 mb-8">
        <div>
          <span className="text-xs font-mono text-sg-text-muted tracking-widest uppercase block mb-2">
            MANIFEST_REF: SG-0994-X-RAY
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-wider text-sg-text uppercase">
            SHIPMENT_LIVE_TRACK
          </h1>
        </div>
        
        <div className="flex flex-col items-end">
          <span className="text-[10px] font-mono text-sg-green tracking-widest uppercase mb-1">
            OPERATIONAL_STATUS
          </span>
          <div className="border border-sg-green px-3 py-1 bg-sg-green/10 text-sg-green text-xs font-bold tracking-widest uppercase">
            TRANSIT_OPTIMAL
          </div>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column (Map & Transit) */}
        <div className="flex-1 flex flex-col min-w-0">
          <ManifestMap />
          <TransitSequence />
        </div>

        {/* Right Column (Specs, Alerts, Telemetry) */}
        <div className="w-full lg:w-[400px] flex flex-col shrink-0">
          <CargoSpecs />
          <SystemAlerts />
          <LiveTelemetry />
        </div>
      </div>

      {/* Bottom Stats Row */}
      <StatCards />
    </div>
  );
}
