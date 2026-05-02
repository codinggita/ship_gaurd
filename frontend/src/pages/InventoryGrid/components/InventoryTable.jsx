import React from 'react';
import { MoreVertical } from 'lucide-react';

export default function InventoryTable() {
  const inventoryData = [
    {
      sku: 'SG-99234',
      name: 'REINFORCED ALLOY PLATES',
      category: 'STRUCTURE_HEAVY',
      current: 945,
      max: 1000,
      fillPercent: 94,
      location: 'BAY_04 // RACK_A2',
      status: 'IN_STOCK',
      statusColor: 'text-sg-green border-sg-green',
      lastScan: '2023-10-24 08:54'
    },
    {
      sku: 'SG-11059',
      name: 'CRYO-CELL UNIT X-4',
      category: 'ENERGY_CRITICAL',
      current: 12,
      max: 150,
      fillPercent: 8,
      location: 'VAULT_01 // COLD_STR',
      status: 'LOW_STOCK',
      statusColor: 'text-sg-red border-sg-red glow-red-text',
      lastScan: '2023-10-23 19:15'
    },
    {
      sku: 'SG-88401',
      name: 'NEURAL-LINK INTERFACE',
      category: 'ELECTRONICS_HIGH',
      current: 0,
      max: 50,
      fillPercent: 0,
      location: 'HUB_ZERO // SHELF_9',
      status: 'OUT_OF_STOCK',
      statusColor: 'text-white bg-sg-red border-sg-red',
      lastScan: '2023-10-24 11:45'
    },
    {
      sku: 'SG-44231',
      name: 'TITANIUM FASTENERS M12',
      category: 'HARDWARE_BULK',
      current: 49200,
      max: 50000,
      fillPercent: 98,
      location: 'SILO_6 // BIN_77',
      status: 'IN_STOCK',
      statusColor: 'text-sg-green border-sg-green',
      lastScan: '2023-10-24 15:20'
    }
  ];

  return (
    <div className="flex flex-col mb-10 overflow-x-auto">
      <div className="min-w-[900px]">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-sg-border text-[10px] font-mono tracking-widest uppercase text-sg-text-muted">
              <th className="py-4 px-4 font-normal">SKU_ID</th>
              <th className="py-4 px-4 font-normal">ITEM_NAME</th>
              <th className="py-4 px-4 font-normal">STOCK_LEVEL</th>
              <th className="py-4 px-4 font-normal">LOCATION</th>
              <th className="py-4 px-4 font-normal">STATUS</th>
              <th className="py-4 px-4 font-normal">LAST_SCAN</th>
              <th className="py-4 px-4 font-normal text-right">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map((item, index) => (
              <tr key={index} className="border-b border-sg-border/50 hover:bg-sg-black/50 transition-colors">
                <td className="py-5 px-4 font-mono text-xs text-sg-text-muted">#{item.sku}</td>
                <td className="py-5 px-4">
                  <p className="text-sm font-bold tracking-wider text-sg-text">{item.name}</p>
                  <p className="text-[10px] font-mono tracking-widest text-sg-text-muted uppercase mt-1">CAT: {item.category}</p>
                </td>
                <td className="py-5 px-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-[10px] font-mono text-sg-text-muted w-20">
                      <span className={item.current < (item.max * 0.1) ? 'text-sg-red' : 'text-sg-green'}>
                        {item.current.toLocaleString()}
                      </span> / {item.max.toLocaleString()}
                    </span>
                    <div className="w-24 h-1 bg-sg-black border border-sg-border rounded-full overflow-hidden shrink-0">
                      <div 
                        className={`h-full ${item.fillPercent < 10 ? 'bg-sg-red' : 'bg-sg-green'}`} 
                        style={{ width: `${item.fillPercent}%` }}
                      ></div>
                    </div>
                    <span className="text-[10px] font-mono text-sg-text-muted w-6">{item.fillPercent}%</span>
                  </div>
                </td>
                <td className="py-5 px-4 text-xs font-mono text-sg-text-muted">{item.location}</td>
                <td className="py-5 px-4">
                  <span className={`inline-block px-2 py-1 text-[10px] font-mono tracking-widest uppercase border ${item.statusColor}`}>
                    {item.status}
                  </span>
                </td>
                <td className="py-5 px-4 text-[10px] font-mono text-sg-text-muted/50 whitespace-pre-line leading-relaxed">
                  {item.lastScan.replace(' ', '\n')}
                </td>
                <td className="py-5 px-4 text-right">
                  <button className="text-sg-text-muted hover:text-sg-text transition-colors p-2">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center py-4 text-[10px] font-mono tracking-widest uppercase text-sg-text-muted">
          <span>SHOWING 1-4 OF 1,284 TECHNICAL_RECORDS</span>
          <div className="flex space-x-1">
            <button className="px-2 py-1 border border-sg-border hover:bg-sg-border transition-colors">|&lt;</button>
            <button className="px-2 py-1 border border-sg-border hover:bg-sg-border transition-colors">&lt;</button>
            <button className="px-3 py-1 border border-sg-text text-sg-text bg-sg-black">1</button>
            <button className="px-3 py-1 border border-sg-border hover:bg-sg-border transition-colors">2</button>
            <button className="px-3 py-1 border border-sg-border hover:bg-sg-border transition-colors">3</button>
            <button className="px-2 py-1 border border-sg-border hover:bg-sg-border transition-colors">&gt;</button>
            <button className="px-2 py-1 border border-sg-border hover:bg-sg-border transition-colors">&gt;|</button>
          </div>
        </div>
      </div>
    </div>
  );
}
