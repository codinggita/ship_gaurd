import React from 'react';

export default function AggregateRiskScore() {
  const score = 75.4;
  const circumference = 2 * Math.PI * 60; // r=60
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="bg-sg-card border border-sg-border p-6 rounded-sm flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xs font-mono tracking-widest uppercase text-sg-text-muted">
          SYS_REF: RISK_CORE
        </h3>
      </div>
      
      <h2 className="text-lg font-display uppercase tracking-wider text-sg-text mb-6">
        AGGREGATE_RISK_SCORE
      </h2>
      
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="relative w-40 h-40 flex items-center justify-center mb-8">
          {/* SVG Circle Progress */}
          <svg className="absolute inset-0 w-full h-full transform -rotate-90">
            {/* Background circle */}
            <circle
              cx="80"
              cy="80"
              r="60"
              stroke="var(--color-sg-dark)"
              strokeWidth="8"
              fill="transparent"
            />
            {/* Progress circle */}
            <circle
              cx="80"
              cy="80"
              r="60"
              stroke="var(--color-sg-red)"
              strokeWidth="8"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="glow-red transition-all duration-1000 ease-out"
            />
          </svg>
          
          <div className="flex flex-col items-center z-10">
            <span className="text-4xl font-display tracking-wider text-white">
              {score}
            </span>
            <span className="text-[9px] font-mono tracking-widest text-sg-red uppercase mt-1">
              CRITICAL_THRESHOLD
            </span>
          </div>
        </div>

        <div className="w-full flex justify-between border-t border-sg-border pt-4">
          <div className="flex flex-col">
            <span className="text-[10px] font-mono tracking-widest uppercase text-sg-text-muted mb-1">
              TREND_VARIANCE
            </span>
            <span className="text-sm font-bold text-white flex items-center">
              +12.4% <span className="text-sg-red ml-1 text-xs">▲</span>
            </span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-mono tracking-widest uppercase text-sg-text-muted mb-1">
              CONFIDENCE_RATING
            </span>
            <span className="text-sm font-bold text-sg-green">
              98.2%
            </span>
          </div>
        </div>

        <div className="w-full flex justify-between border-t border-sg-border pt-4 mt-4">
          <div className="flex flex-col">
            <span className="text-[10px] font-mono tracking-widest uppercase text-sg-text-muted mb-1">
              INTENSITY_INDEX
            </span>
            <span className="text-xl font-display text-sg-blue flex items-baseline">
              0.94 <span className="text-[10px] text-sg-text-muted ml-1">/ 1.00</span>
            </span>
            <div className="w-full h-1 bg-sg-dark mt-2 rounded-full overflow-hidden">
              <div className="h-full bg-sg-blue w-[94%]"></div>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-mono tracking-widest uppercase text-sg-text-muted mb-1">
              VOLATILITY_FACTOR
            </span>
            <span className="text-xl font-display text-sg-red">
              HIGH
            </span>
            <div className="w-full h-1 bg-sg-dark mt-2 rounded-full overflow-hidden flex justify-end">
              <div className="h-full bg-sg-red w-[80%]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
