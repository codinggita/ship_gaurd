import { useState, useEffect } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Cell
} from 'recharts';
import { Activity, ShieldAlert, Zap, AlertTriangle, ChevronRight, Power, TerminalSquare } from 'lucide-react';
import SEO from '../../components/Common/SEO';

const MOCK_DATA = [
  { name: 'N-Alpha', load: 45, status: 'stable' },
  { name: 'N-Beta', load: 82, status: 'warning' },
  { name: 'N-Gamma', load: 30, status: 'stable' },
  { name: 'N-Delta', load: 95, status: 'critical' },
  { name: 'N-Epsilon', load: 60, status: 'stable' },
  { name: 'N-Zeta', load: 25, status: 'stable' },
  { name: 'N-Eta', load: 78, status: 'warning' },
];

const LOGS = [
  { id: 1, time: '14:22:01', msg: 'SYNC_PROTOCOL_INIT', type: 'info' },
  { id: 2, time: '14:21:45', msg: 'MANIFEST_AUTH_FAILED: NODE_DELTA', type: 'error' },
  { id: 3, time: '14:20:12', msg: 'CONTAINER_TEMP_STABLE', type: 'success' },
  { id: 4, time: '14:18:55', msg: 'ROUTING_UPDATE_APPLIED', type: 'info' },
  { id: 5, time: '14:15:30', msg: 'ANOMALY_DETECTED_SECTOR_7', type: 'warning' },
  { id: 6, time: '14:10:02', msg: 'FLEET_SYS_NOMINAL', type: 'success' },
];

export default function Dashboard() {
  const [time, setTime] = useState(new Date().toISOString().split('T')[1].split('.')[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toISOString().split('T')[1].split('.')[0]);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto">
      <SEO 
        title="Dashboard" 
        description="Overview of global logistics traffic, system integrity, and active recovery ratios." 
      />
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-sg-border pb-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-display text-sg-text tracking-widest uppercase mb-2">
            Command_CTR
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-widest text-sg-text-muted">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-sg-green rounded-full animate-pulse glow-green"></span>
              System_Status: <span className="text-sg-green">Operational</span>
            </div>
            <div className="text-sg-blue border border-sg-blue/30 px-2 py-0.5 bg-sg-blue/5">
              Sync_Active: ~99%
            </div>
          </div>
        </div>
        <div className="text-right font-mono text-sg-text-muted">
          <div className="text-xs uppercase tracking-widest mb-1">Current_UTC</div>
          <div className="text-2xl text-sg-text">{time} Z</div>
        </div>
      </div>

      {/* METRIC CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Recovery */}
        <div className="bg-sg-card border border-sg-border p-5 relative overflow-hidden group hover:border-sg-red transition-colors sharp-border">
          <div className="absolute top-0 left-0 w-1 h-full bg-sg-red glow-red"></div>
          <div className="flex justify-between items-start mb-4">
            <div className="text-xs font-mono uppercase tracking-widest text-sg-text-muted">Recovery_Ratio</div>
            <Activity className="w-4 h-4 text-sg-red" />
          </div>
          <div className="text-3xl font-display tracking-wider mb-2">94.2%</div>
          <div className="w-full bg-sg-black h-1 relative">
            <div className="absolute top-0 left-0 h-full bg-sg-red" style={{ width: '94.2%' }}></div>
          </div>
        </div>

        {/* Card 2: Active Claims */}
        <div className="bg-sg-card border border-sg-border p-5 relative overflow-hidden group hover:border-sg-blue transition-colors sharp-border">
          <div className="absolute top-0 left-0 w-1 h-full bg-sg-blue glow-blue"></div>
          <div className="flex justify-between items-start mb-4">
            <div className="text-xs font-mono uppercase tracking-widest text-sg-text-muted">Active_Claims</div>
            <ShieldAlert className="w-4 h-4 text-sg-blue" />
          </div>
          <div className="text-3xl font-display tracking-wider flex items-end gap-2">
            1,204
            <span className="text-xs font-mono text-sg-blue mb-1">+12 ▲</span>
          </div>
        </div>

        {/* Card 3: Sys Anomalies */}
        <div className="bg-sg-card border border-sg-border p-5 relative overflow-hidden group hover:border-sg-green transition-colors sharp-border">
          <div className="absolute top-0 left-0 w-1 h-full bg-sg-green glow-green"></div>
          <div className="flex justify-between items-start mb-4">
            <div className="text-xs font-mono uppercase tracking-widest text-sg-text-muted">Sys_Anomalies</div>
            <Zap className="w-4 h-4 text-sg-green" />
          </div>
          <div className="text-3xl font-display tracking-wider text-sg-green glow-green-text">00</div>
          <div className="text-xs font-mono uppercase text-sg-green/70">Secure_State</div>
        </div>
      </div>

      {/* MAIN GRAPH & LOGS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Graph */}
        <div className="lg:col-span-2 bg-sg-card border border-sg-border p-6 flex flex-col sharp-border">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-display uppercase tracking-widest text-sg-text">Global_Traffic_Flux</h2>
              <p className="text-xs font-mono text-sg-text-muted uppercase">Tracking active shipments</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-sg-green rounded-full"></span>
              <span className="text-xs font-mono text-sg-green uppercase tracking-widest">Stable</span>
            </div>
          </div>
          
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={MOCK_DATA} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2A2A2A" vertical={false} />
                <XAxis dataKey="name" stroke="#9CA3AF" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="#9CA3AF" fontSize={10} tickLine={false} axisLine={false} />
                <RechartsTooltip 
                  contentStyle={{ backgroundColor: '#1A1A1A', borderColor: '#2A2A2A', borderRadius: 0 }}
                  itemStyle={{ color: '#EAEAEA', fontFamily: 'Share Tech Mono' }}
                  labelStyle={{ color: '#9CA3AF', fontFamily: 'Share Tech Mono', marginBottom: '4px' }}
                  cursor={{fill: '#2A2A2A'}}
                />
                <Bar dataKey="load" radius={[2, 2, 0, 0]}>
                  {MOCK_DATA.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={
                        entry.status === 'critical' ? '#FF4D4D' : 
                        entry.status === 'warning' ? '#3B82F6' : 
                        '#22C55E'
                      } 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4 border-t border-sg-border pt-4">
            <div>
              <div className="text-[10px] font-mono text-sg-text-muted uppercase">Peak_Load</div>
              <div className="text-sm font-bold">NODE_DELTA (95%)</div>
            </div>
            <div>
              <div className="text-[10px] font-mono text-sg-text-muted uppercase">Active_Nodes</div>
              <div className="text-sm font-bold">07 / 07</div>
            </div>
            <div className="text-right">
              <div className="text-[10px] font-mono text-sg-text-muted uppercase">Integrity</div>
              <div className="text-sm font-bold text-sg-green">STABLE</div>
            </div>
          </div>
        </div>

        {/* Right: Logs */}
        <div className="bg-sg-card border border-sg-border flex flex-col sharp-border overflow-hidden">
          <div className="p-4 border-b border-sg-border bg-sg-dark/50">
            <h2 className="text-lg font-display uppercase tracking-widest text-sg-text flex items-center gap-2">
              <TerminalSquare className="w-4 h-4" />
              Recent_Logs
            </h2>
          </div>
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {LOGS.map(log => (
              <div key={log.id} className="text-xs font-mono border-l-2 pl-2 py-0.5 flex flex-col gap-1"
                style={{
                  borderColor: log.type === 'error' ? '#FF4D4D' : log.type === 'success' ? '#22C55E' : log.type === 'warning' ? '#3B82F6' : '#2A2A2A'
                }}
              >
                <span className="text-sg-text-muted opacity-70">[{log.time}]</span>
                <span className={`${
                  log.type === 'error' ? 'text-sg-red' : 
                  log.type === 'success' ? 'text-sg-green' : 
                  log.type === 'warning' ? 'text-sg-blue' : 
                  'text-sg-text'
                }`}>
                  {log.msg}
                </span>
              </div>
            ))}
          </div>
          <button className="w-full p-3 border-t border-sg-border text-xs font-mono uppercase tracking-widest text-sg-text-muted hover:text-sg-text hover:bg-sg-border/30 transition-colors flex justify-between items-center group">
            View_Full_Terminal
            <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="border border-sg-red/30 bg-sg-red/5 p-6 flex flex-col md:flex-row items-center justify-between gap-6 sharp-border relative overflow-hidden group hover:border-sg-red transition-colors">
        <div className="absolute top-0 left-0 w-1 h-full bg-sg-red glow-red"></div>
        <div className="flex items-center gap-4">
          <div className="p-3 bg-sg-red/10 text-sg-red border border-sg-red/50">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-display uppercase tracking-widest text-sg-red glow-red-text">Emergency_Lockdown</h3>
            <div className="text-xs font-mono text-sg-red/70 uppercase">Auth_Level: Command_Alpha_Only</div>
          </div>
        </div>
        <button className="flex items-center gap-2 bg-sg-red hover:bg-red-600 text-white px-6 py-3 font-display uppercase tracking-widest transition-colors sharp-border glow-red">
          <Power className="w-4 h-4" />
          Init_Lockdown
        </button>
      </div>
    </div>
  );
}
