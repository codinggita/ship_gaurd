import React from 'react';
import AggregateRiskScore from './components/AggregateRiskScore';
import VarianceChart from './components/VarianceChart';
import ThreatCards from './components/ThreatCards';
import SystemAdvisory from './components/SystemAdvisory';
import AnomalyLog from './components/AnomalyLog';
import GeospatialMapping from './components/GeospatialMapping';
import SEO from '../../components/Common/SEO';

export default function FleetOps() {
  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto flex flex-col min-h-full animate-fade-in pb-16">
      <SEO 
        title="AI Risk Analysis" 
        description="Advanced neural-link risk assessment and threat monitoring. View geospatial mapping and variance charts for fleet operations." 
      />
      {/* Top Header */}
      <div className="flex justify-between items-end border-b border-sg-border pb-6 mb-8">
        <div>
          <span className="text-xs font-mono text-sg-text-muted tracking-widest uppercase block mb-2">
            SECURE_NODE // RISK_ASSESSMENT_ENGINE
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-wider text-white uppercase">
            AI RISK ANALYSIS
          </h1>
        </div>
        
        <div className="flex flex-col items-end">
          <span className="text-[10px] font-mono tracking-widest uppercase mb-1 flex items-center text-sg-green">
            <div className="w-2 h-2 bg-sg-green rounded-full mr-2 glow-green"></div>
            NEURAL_NETWORK_SYNC: OPTIMAL
          </span>
          <span className="text-[10px] font-mono text-sg-text-muted tracking-widest uppercase">
            LAST_UPDATE: {new Date().toISOString()}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {/* Row 1: Risk Score & Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <AggregateRiskScore />
          </div>
          <div className="lg:col-span-2">
            <VarianceChart />
          </div>
        </div>

        {/* Row 2: Threat Cards */}
        <ThreatCards />

        {/* Row 3: System Advisory */}
        <SystemAdvisory />

        {/* Row 4: Logs & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AnomalyLog />
          <GeospatialMapping />
        </div>
      </div>
    </div>
  );
}
