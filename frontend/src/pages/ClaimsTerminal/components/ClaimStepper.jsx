import React from 'react';

export default function ClaimStepper() {
  const steps = [
    { number: '01', status: 'ACTIVE', label: 'MANIFEST_DATA', isActive: true },
    { number: '02', status: 'PENDING', label: 'DAMAGE_REPORT', isActive: false },
    { number: '03', status: 'PENDING', label: 'EVIDENCE_LOG', isActive: false }
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-6 mb-12 relative">
      {/* Background connecting line (visible on md+) */}
      <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-sg-border -z-10"></div>

      {steps.map((step, index) => (
        <div key={index} className="flex items-center space-x-4 bg-sg-black pr-4">
          <div className={`w-12 h-12 flex items-center justify-center font-display text-xl ${
            step.isActive 
              ? 'bg-sg-red text-white glow-red border border-sg-red' 
              : 'bg-sg-card border border-sg-border text-sg-text-muted'
          }`}>
            {step.number}
          </div>
          <div className="flex flex-col">
            <span className={`text-[10px] font-mono tracking-widest uppercase mb-1 ${
              step.isActive ? 'text-sg-red' : 'text-sg-text-muted/50'
            }`}>
              STATUS: {step.status}
            </span>
            <span className={`text-sm font-bold tracking-wider uppercase ${
              step.isActive ? 'text-white' : 'text-sg-text-muted'
            }`}>
              {step.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
