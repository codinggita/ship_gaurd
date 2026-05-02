import React from 'react';

export default function ManifestMap() {
  return (
    <div className="relative w-full h-[400px] border border-sg-border rounded-sm overflow-hidden bg-sg-black">
      {/* Map Image Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-80" 
        style={{ backgroundImage: "url('/assets/europe_map.png')" }}
      ></div>
      
      {/* Overlay gradient for dark edges */}
      <div className="absolute inset-0 bg-gradient-to-t from-sg-black/90 via-transparent to-transparent"></div>
      
      {/* Coordinates */}
      <div className="absolute top-4 left-4 border-l-2 border-sg-red pl-3">
        <p className="text-[10px] text-sg-text-muted font-mono tracking-widest uppercase">Coordinates</p>
        <p className="text-sm text-sg-text font-mono">52.5200° N, 13.4050° E</p>
      </div>
      
      {/* Legend */}
      <div className="absolute bottom-4 right-4 bg-sg-dark/80 backdrop-blur-sm border border-sg-border p-3 rounded-sm flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-sg-red rounded-sm glow-red"></div>
          <span className="text-xs text-sg-text-muted font-mono tracking-widest uppercase">VESSEL_POS</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-sg-green rounded-sm glow-green"></div>
          <span className="text-xs text-sg-text-muted font-mono tracking-widest uppercase">TARGET_DEST</span>
        </div>
      </div>
      
      {/* Map elements (simulated points on the map) */}
      <div className="absolute top-[45%] left-[55%] w-3 h-3 bg-sg-red rounded-full animate-ping glow-red"></div>
      <div className="absolute top-[45%] left-[55%] w-3 h-3 bg-sg-red rounded-full glow-red"></div>
      
      <div className="absolute top-[35%] left-[65%] w-2 h-2 bg-sg-green rounded-full glow-green"></div>
      
      {/* Trajectory line (simulated using SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <path 
          d="M 55% 45% Q 60% 40% 65% 35%" 
          stroke="rgba(255, 77, 77, 0.4)" 
          strokeWidth="2" 
          fill="transparent" 
          strokeDasharray="4 4"
          className="animate-[dash_2s_linear_infinite]"
        />
      </svg>
      
      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -8;
          }
        }
      `}</style>
    </div>
  );
}
