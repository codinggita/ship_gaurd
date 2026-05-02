import React, { useState } from 'react';
import { Activity, Droplet, ThermometerSun, PackageX } from 'lucide-react';

export default function DamageTypeSelector() {
  const [selected, setSelected] = useState('PHYSICAL');

  const damageTypes = [
    { id: 'PHYSICAL', icon: Activity, label: 'PHYSICAL' },
    { id: 'MOISTURE', icon: Droplet, label: 'MOISTURE' },
    { id: 'THERMAL', icon: ThermometerSun, label: 'THERMAL' },
    { id: 'LOAD_FULL', icon: PackageX, label: 'LOAD_FULL' }
  ];

  return (
    <div className="mb-10">
      <label className="text-[10px] font-mono tracking-widest uppercase text-sg-text-muted block mb-4">
        SELECT CRITICALITY / DAMAGE TYPE
      </label>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {damageTypes.map((type) => {
          const Icon = type.icon;
          const isSelected = selected === type.id;
          
          return (
            <button
              key={type.id}
              onClick={() => setSelected(type.id)}
              className={`p-6 border transition-all duration-200 flex flex-col justify-center items-center gap-4 ${
                isSelected 
                  ? 'bg-sg-red/10 border-sg-red text-sg-red glow-red' 
                  : 'bg-sg-card border-sg-border text-sg-text-muted hover:border-sg-text/50 hover:text-sg-text'
              }`}
            >
              <Icon className="w-8 h-8" strokeWidth={1.5} />
              <span className="text-[10px] font-mono tracking-widest uppercase font-bold">
                {type.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
