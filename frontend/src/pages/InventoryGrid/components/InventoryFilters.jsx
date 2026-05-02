import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function InventoryFilters() {
  return (
    <div className="flex flex-col xl:flex-row gap-4 border-b border-sg-border pb-6 mb-6">
      {/* Dropdowns */}
      <div className="flex flex-col md:flex-row gap-4 flex-1">
        <div className="flex flex-col w-full">
          <label className="text-[10px] font-mono tracking-widest uppercase text-sg-text-muted mb-2">
            FILTER_WAREHOUSE
          </label>
          <div className="relative">
            <select 
              className="w-full bg-sg-black border border-sg-border p-3 text-xs font-mono tracking-widest uppercase text-sg-text appearance-none focus:outline-none focus:border-sg-red transition-colors"
              defaultValue="all"
            >
              <option value="all">ALL_LOCATIONS</option>
              <option value="bay_04">BAY_04</option>
              <option value="vault_01">VAULT_01</option>
              <option value="hub_zero">HUB_ZERO</option>
              <option value="silo_6">SILO_6</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-sg-text-muted pointer-events-none" />
          </div>
        </div>

        <div className="flex flex-col w-full">
          <label className="text-[10px] font-mono tracking-widest uppercase text-sg-text-muted mb-2">
            FILTER_STATUS
          </label>
          <div className="relative">
            <select 
              className="w-full bg-sg-black border border-sg-border p-3 text-xs font-mono tracking-widest uppercase text-sg-text appearance-none focus:outline-none focus:border-sg-red transition-colors"
              defaultValue="all"
            >
              <option value="all">ALL_STATUSES</option>
              <option value="in_stock">IN_STOCK</option>
              <option value="low_stock">LOW_STOCK</option>
              <option value="out_of_stock">OUT_OF_STOCK</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-sg-text-muted pointer-events-none" />
          </div>
        </div>

        <div className="flex flex-col w-full">
          <label className="text-[10px] font-mono tracking-widest uppercase text-sg-text-muted mb-2">
            FILTER_CATEGORY
          </label>
          <div className="relative">
            <select 
              className="w-full bg-sg-black border border-sg-border p-3 text-xs font-mono tracking-widest uppercase text-sg-text appearance-none focus:outline-none focus:border-sg-red transition-colors"
              defaultValue="all"
            >
              <option value="all">ALL_CATEGORIES</option>
              <option value="heavy">STRUCTURE_HEAVY</option>
              <option value="critical">ENERGY_CRITICAL</option>
              <option value="electronics">ELECTRONICS_HIGH</option>
              <option value="bulk">HARDWARE_BULK</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-sg-text-muted pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Clear Filters Button */}
      <div className="flex items-end">
        <button className="w-full xl:w-auto px-6 py-3 border border-sg-border text-sg-text-muted text-[10px] font-mono tracking-widest uppercase hover:border-sg-text hover:text-sg-text transition-colors">
          CLEAR_ALL_FILTERS
        </button>
      </div>
    </div>
  );
}
