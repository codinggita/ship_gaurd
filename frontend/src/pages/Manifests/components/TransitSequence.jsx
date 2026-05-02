import React from 'react';
import { Package, Truck, Box, MapPin, CheckCircle } from 'lucide-react';

export default function TransitSequence() {
  const steps = [
    { label: 'PICKUP', time: '04:00', icon: Package, status: 'completed' },
    { label: 'SORTING', time: '08:24', icon: Box, status: 'completed' },
    { label: 'IN_TRANSIT', time: 'ACTIVE', icon: Truck, status: 'active' },
    { label: 'LAST_MILE', time: 'PENDING', icon: MapPin, status: 'pending' },
    { label: 'DELIVERED', time: 'PENDING', icon: CheckCircle, status: 'pending' },
  ];

  return (
    <div className="bg-sg-card border border-sg-border p-6 rounded-sm mt-6">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-lg font-display uppercase tracking-wider text-sg-text">TRANSIT_SEQUENCE</h3>
        <span className="text-xs font-mono text-sg-text-muted">EST_ARRIVAL: 14:00 UTC</span>
      </div>

      <div className="relative flex justify-between items-center">
        {/* Connecting Lines */}
        <div className="absolute top-6 left-0 w-full h-[2px] flex">
          {steps.map((step, index) => {
            if (index === steps.length - 1) return null;
            return (
              <div 
                key={index} 
                className={`h-full flex-1 ${
                  step.status === 'completed' || step.status === 'active' 
                    ? 'bg-sg-red opacity-50' 
                    : 'bg-sg-border'
                }`}
              ></div>
            );
          })}
        </div>

        {/* Steps */}
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isCompleted = step.status === 'completed';
          const isActive = step.status === 'active';
          const isPending = step.status === 'pending';

          return (
            <div key={index} className="relative flex flex-col items-center z-10">
              <div 
                className={`w-12 h-12 flex items-center justify-center rounded-sm mb-3 border transition-colors ${
                  isActive 
                    ? 'bg-sg-red border-sg-red text-white glow-red shadow-lg scale-110' 
                    : isCompleted
                      ? 'bg-sg-red/20 border-sg-red/50 text-sg-red'
                      : 'bg-sg-dark border-sg-border text-sg-text-muted'
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              
              <span className={`text-[10px] font-bold tracking-widest uppercase mb-1 ${
                isActive ? 'text-sg-red' : isCompleted ? 'text-sg-text' : 'text-sg-text-muted'
              }`}>
                {step.label}
              </span>
              
              <span className="text-[10px] font-mono text-sg-text-muted">
                {step.time}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
