import { useState } from 'react';
import { Bell, User, Activity, LogOut } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

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
        
        {/* User Profile Dropdown */}
        <div className="relative">
          <button 
            onClick={() => setShowDropdown(!showDropdown)}
            className="hover:text-sg-text transition-colors border border-sg-border p-1 rounded-sm flex items-center justify-center focus:outline-none focus:ring-1 focus:ring-sg-red"
          >
            <User className="w-5 h-5" />
          </button>
          
          {showDropdown && (
            <>
              {/* Overlay to close dropdown when clicking outside */}
              <div 
                className="fixed inset-0 z-40"
                onClick={() => setShowDropdown(false)}
              ></div>
              
              <div className="absolute right-0 mt-2 w-48 bg-sg-card border border-sg-border shadow-lg rounded-sm overflow-hidden z-50">
                <div className="px-4 py-3 border-b border-sg-border">
                  <p className="text-sm font-bold text-sg-text truncate">{user?.name || 'Administrator'}</p>
                  <p className="text-xs text-sg-text-muted truncate font-mono">{user?.email || 'admin@shipguard.local'}</p>
                </div>
                <button 
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-3 text-sm text-sg-red hover:bg-sg-dark flex items-center space-x-2 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="uppercase tracking-wider font-bold">Log Out</span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
