import { Bell, User, Activity } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="h-16 bg-sg-dark border-b border-sg-border flex items-center justify-between px-6 shrink-0 relative z-10">
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-sg-red rounded-full animate-pulse glow-red"></div>
          <span className="text-sg-red font-display text-2xl tracking-widest uppercase">
            ShipGuard_OS
          </span>
        </div>
        
        <nav className="hidden md:flex space-x-1 uppercase text-sm font-bold tracking-wider">
          <NavLink 
            to="/dashboard" 
            className={({isActive}) => `px-4 py-2 transition-colors duration-200 border-b-2 ${isActive ? 'text-sg-text border-sg-red bg-sg-card' : 'text-sg-text-muted border-transparent hover:text-sg-text hover:bg-sg-card'}`}
          >
            Dashboard
          </NavLink>
          <NavLink 
            to="/manifests" 
            className={({isActive}) => `px-4 py-2 transition-colors duration-200 border-b-2 ${isActive ? 'text-sg-text border-sg-red bg-sg-card' : 'text-sg-text-muted border-transparent hover:text-sg-text hover:bg-sg-card'}`}
          >
            Manifests
          </NavLink>
          <NavLink 
            to="/fleet" 
            className={({isActive}) => `px-4 py-2 transition-colors duration-200 border-b-2 ${isActive ? 'text-sg-text border-sg-red bg-sg-card' : 'text-sg-text-muted border-transparent hover:text-sg-text hover:bg-sg-card'}`}
          >
            Fleet
          </NavLink>
        </nav>
      </div>

      <div className="flex items-center space-x-6 text-sg-text-muted">
        <div className="flex items-center space-x-2 text-xs font-mono">
          <Activity className="w-4 h-4 text-sg-green" />
          <span className="uppercase text-sg-green tracking-widest">Sys_Nominal</span>
        </div>
        <button className="hover:text-sg-text transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-sg-red rounded-full border border-sg-dark"></span>
        </button>
        <button className="hover:text-sg-text transition-colors border border-sg-border p-1 rounded-sm">
          <User className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
