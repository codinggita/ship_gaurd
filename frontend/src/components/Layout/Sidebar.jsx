import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FileText, Ship, ShieldAlert, Boxes, TerminalSquare, Wrench, LifeBuoy, PlusSquare } from 'lucide-react';

const MENU_ITEMS = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
  { name: 'Manifests', icon: FileText, path: '/manifests' },
  { name: 'Fleet Ops', icon: Ship, path: '/fleet' },
  { name: 'Claims Terminal', icon: ShieldAlert, path: '/claims' },
  { name: 'Inventory Grid', icon: Boxes, path: '/inventory' },
  { name: 'System Logs', icon: TerminalSquare, path: '/logs' },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-sg-dark border-r border-sg-border flex flex-col shrink-0 h-[calc(100vh-4rem)]">
      <div className="flex-1 overflow-y-auto py-6 flex flex-col gap-2 px-4">
        {MENU_ITEMS.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 uppercase font-bold tracking-wider text-sm transition-all border-l-2 ${
                isActive
                  ? 'border-sg-red bg-sg-card text-sg-text glow-red-text'
                  : 'border-transparent text-sg-text-muted hover:text-sg-text hover:bg-sg-card/50'
              }`
            }
          >
            <item.icon className="w-4 h-4" />
            {item.name}
          </NavLink>
        ))}
      </div>

      <div className="p-4 border-t border-sg-border flex flex-col gap-4">
        <NavLink 
          to="/claims"
          className="w-full bg-sg-red/10 border border-sg-red text-sg-red hover:bg-sg-red hover:text-white transition-all uppercase font-bold tracking-widest text-sm py-3 flex items-center justify-center gap-2 glow-red sharp-border"
        >
          <PlusSquare className="w-4 h-4" />
          Init_New_Claim
        </NavLink>

        <div className="flex flex-col gap-2 mt-2">
          <a href="#" className="flex items-center gap-2 text-xs uppercase text-sg-text-muted hover:text-sg-text font-mono tracking-widest transition-colors">
            <Wrench className="w-3 h-3" /> Diagnostics
          </a>
          <a href="#" className="flex items-center gap-2 text-xs uppercase text-sg-text-muted hover:text-sg-text font-mono tracking-widest transition-colors">
            <LifeBuoy className="w-3 h-3" /> Support
          </a>
        </div>
      </div>
    </aside>
  );
}
