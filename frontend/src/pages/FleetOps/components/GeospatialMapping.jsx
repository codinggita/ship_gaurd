import React from 'react';

export default function GeospatialMapping() {
  return (
    <div className="bg-sg-card border border-sg-border p-6 rounded-sm h-full flex flex-col">
      <h3 className="text-sm font-mono uppercase tracking-widest text-sg-text-muted mb-6">
        GEOSPATIAL_RISK_MAPPING
      </h3>
      
      <div className="flex-1 relative border border-sg-border rounded-sm overflow-hidden min-h-[150px]">
        {/* World Map Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-screen"
          style={{ backgroundImage: "url('/assets/world_map.png')" }}
        ></div>
        
        {/* Map Elements */}
        {/* Red Risk Node */}
        <div className="absolute top-[40%] left-[55%] flex justify-center items-center">
          <div className="absolute w-6 h-6 bg-sg-red/20 rounded-full animate-ping"></div>
          <div className="w-2 h-2 bg-sg-red rounded-sm glow-red relative z-10"></div>
        </div>
        
        {/* Green Safe Node */}
        <div className="absolute top-[60%] left-[75%] flex justify-center items-center">
          <div className="w-2 h-2 bg-sg-green rounded-sm glow-green relative z-10"></div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mt-4">
        <button className="bg-sg-dark border border-sg-border text-[10px] font-mono tracking-widest text-sg-text-muted py-2 hover:text-sg-text transition-colors">
          LAYER: HEAT_DENSITY
        </button>
        <button className="bg-sg-dark border border-sg-border text-[10px] font-mono tracking-widest text-sg-text-muted py-2 hover:text-sg-text transition-colors">
          VIEW: TOPOGRAPHIC
        </button>
      </div>
    </div>
  );
}
