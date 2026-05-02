import React from 'react';
import { Search } from 'lucide-react';
import InventoryFilters from './components/InventoryFilters';
import InventoryTable from './components/InventoryTable';
import InventoryStats from './components/InventoryStats';
import SEO from '../../components/Common/SEO';

export default function InventoryGrid() {
  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto flex flex-col min-h-full animate-fade-in pb-16">
      <SEO 
        title="Inventory Grid" 
        description="Detailed stock monitoring and resource management. View real-time inventory levels across the warehouse network." 
      />
      
      {/* Top Search Bar (mimicking the top bar in the screenshot if needed, but it's part of the page layout here) */}
      <div className="flex justify-between items-center mb-10 pb-6 border-b border-sg-border">
        <div className="flex items-center space-x-4">
          <span className="text-sg-red font-display text-xl tracking-widest uppercase">
            SHIPGUARD
          </span>
          <div className="hidden md:flex items-center space-x-4 text-[10px] font-mono uppercase tracking-widest text-sg-text-muted">
            <span className="flex items-center"><div className="w-1.5 h-1.5 bg-sg-green rounded-full mr-2 glow-green"></div> CORE_SYSTEM_NOMINAL</span>
            <span className="flex items-center"><div className="w-1.5 h-1.5 bg-sg-red rounded-full mr-2 glow-red"></div> NETWORK_ENCRYPTED</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-sg-text-muted" />
            <input 
              type="text" 
              placeholder="GLOBAL_SEARCH" 
              className="bg-sg-black border-b border-sg-border py-2 pl-10 pr-4 text-xs font-mono uppercase text-sg-text focus:outline-none focus:border-sg-red transition-colors"
            />
          </div>
          <div className="flex items-center space-x-3 text-right">
            <div className="flex flex-col">
              <span className="text-[10px] font-mono tracking-widest uppercase text-sg-text-muted">OP_042</span>
              <span className="text-xs font-bold tracking-wider uppercase text-sg-text">ALFA_LEADER</span>
            </div>
            <div className="w-8 h-8 bg-sg-card border border-sg-border overflow-hidden">
              <img src="https://api.dicebear.com/7.x/bottts/svg?seed=ALFA" alt="Avatar" className="w-full h-full object-cover opacity-80" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <span className="text-xs font-mono text-sg-text-muted tracking-widest uppercase block mb-2">
            RESOURCES // LOGISTICS
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-wider text-white uppercase mb-2">
            INVENTORY_GRID
          </h1>
          <span className="text-[10px] font-mono tracking-widest text-sg-text-muted uppercase">
            SYNC_STATUS: LATEST // LAST_UPDATE: {new Date().toISOString().split('T')[0]} 14:02:11
          </span>
        </div>
        
        <div className="flex items-center space-x-4 w-full md:w-auto">
          <div className="flex border border-sg-border bg-sg-black">
            <button className="px-4 py-2 text-[10px] font-mono tracking-widest uppercase text-white border-r border-sg-border hover:bg-sg-card transition-colors">
              GRID_VIEW
            </button>
            <button className="px-4 py-2 text-[10px] font-mono tracking-widest uppercase text-sg-text-muted hover:text-sg-text hover:bg-sg-card transition-colors">
              LIST_VIEW
            </button>
          </div>
          <button className="flex-1 md:flex-none bg-sg-red text-white text-[10px] font-bold tracking-widest uppercase px-6 py-2 hover:bg-sg-red/80 transition-colors glow-red flex items-center justify-center">
            <span className="mr-2">⚡</span> INIT_STOCK_RECON
          </button>
        </div>
      </div>

      <div className="bg-sg-card border border-sg-border p-6 rounded-sm">
        <InventoryFilters />
        <InventoryTable />
        <InventoryStats />
      </div>
      
    </div>
  );
}
