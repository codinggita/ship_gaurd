import React from 'react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function VarianceChart() {
  const data = [
    { name: 'C_01', uv: 20 },
    { name: 'C_02', uv: 25 },
    { name: 'C_03', uv: 18 },
    { name: 'C_04', uv: 35 },
    { name: 'C_05', uv: 45 },
    { name: 'C_06', uv: 40 },
    { name: 'CURRENT_C', uv: 75.4 }
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-sg-black border border-sg-red p-2 font-mono text-xs">
          <p className="text-sg-text-muted mb-1">{`CYCLE: ${payload[0].payload.name}`}</p>
          <p className="text-sg-red font-bold">{`RISK: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-sg-card border border-sg-border p-6 rounded-sm flex flex-col h-full">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-lg font-display uppercase tracking-wider text-sg-text">
            7-CYCLE_VARIANCE_TERMINAL
          </h2>
          <p className="text-[10px] font-mono tracking-widest uppercase text-sg-text-muted mt-1">
            HISTORICAL ANALYSIS OF FLEET RISK FLUCTUATIONS
          </p>
        </div>
        <div className="flex space-x-2">
          <span className="bg-sg-dark border border-sg-border px-2 py-1 text-[10px] font-mono tracking-widest text-sg-text-muted">
            REALTIME_STREAM
          </span>
          <span className="border border-sg-red text-sg-red px-2 py-1 text-[10px] font-mono tracking-widest glow-red-text">
            LIVE_METRIC
          </span>
        </div>
      </div>

      <div className="flex-1 min-h-[200px] w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-sg-red)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="var(--color-sg-red)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: 'var(--color-sg-text-muted)', fontSize: 10, fontFamily: 'monospace' }} 
              dy={10}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area 
              type="monotone" 
              dataKey="uv" 
              stroke="var(--color-sg-red)" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorUv)" 
              activeDot={{ r: 6, fill: 'var(--color-sg-red)', stroke: 'var(--color-sg-black)', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-4 gap-4 border-t border-sg-border pt-6 mt-4">
        <div>
          <span className="text-[10px] font-mono tracking-widest uppercase text-sg-text-muted block mb-1">
            MAX_PEAK
          </span>
          <span className="text-xl font-display text-white">89.4</span>
        </div>
        <div>
          <span className="text-[10px] font-mono tracking-widest uppercase text-sg-text-muted block mb-1">
            MIN_BASE
          </span>
          <span className="text-xl font-display text-white">12.1</span>
        </div>
        <div>
          <span className="text-[10px] font-mono tracking-widest uppercase text-sg-text-muted block mb-1">
            AVG_VAL
          </span>
          <span className="text-xl font-display text-white">44.8</span>
        </div>
        <div>
          <span className="text-[10px] font-mono tracking-widest uppercase text-sg-text-muted block mb-1">
            DEVIATION
          </span>
          <span className="text-xl font-display text-sg-green">+2.1σ</span>
        </div>
      </div>
    </div>
  );
}
