
import React from 'react';
import { Wallet, BatteryCharging, Brain, RotateCcw, Map as MapIcon } from 'lucide-react';
import { useGame } from '../context/GameContext';

const HUD: React.FC = () => {
  const { stats, resetGame, visitedIds, unlockedNeighborhoods } = useGame();

  const getAvatar = () => {
    if (stats.energy < 20) return '💀';
    if (stats.energy < 50) return '😫';
    if (stats.energy < 80) return '🙂';
    return '🤩';
  };

  const nextUnlock = () => {
    const sequence = ['Richmond', 'Main Street', 'Oakridge', 'Coquitlam', 'Surrey'];
    return sequence.find(n => !unlockedNeighborhoods.includes(n as any));
  };

  return (
    <div className="fixed top-4 left-4 z-[1000] flex flex-col gap-3 pointer-events-none">
      <div className="bg-white/95 backdrop-blur-md rounded-[2rem] p-5 shadow-2xl border border-slate-200 w-80 pointer-events-auto">
        <div className="flex items-center gap-4 mb-5">
          <div className="text-4xl bg-slate-100 p-3 rounded-2xl shadow-inner select-none animate-pulse">
            {getAvatar()}
          </div>
          <div>
            <h2 className="font-black text-slate-900 text-xl tracking-tight">VanSurvivor</h2>
            <div className="flex items-center gap-1 text-[10px] font-black uppercase text-indigo-500 tracking-widest">
              <MapIcon size={12} /> {unlockedNeighborhoods.length} Areas Unlocked
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {/* Wallet */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-[11px] font-black uppercase tracking-wider text-slate-500">
              <span className="flex items-center gap-1.5"><Wallet size={14} className="text-emerald-500" /> Wallet</span>
              <span className={stats.wallet >= 100 ? 'text-emerald-500' : ''}>{stats.wallet}%</span>
            </div>
            <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200">
              <div className="h-full bg-emerald-500 transition-all duration-700 ease-out" style={{ width: `${Math.min(100, stats.wallet)}%` }} />
            </div>
          </div>

          {/* Energy */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-[11px] font-black uppercase tracking-wider text-slate-500">
              <span className="flex items-center gap-1.5"><BatteryCharging size={14} className="text-amber-500" /> Energy</span>
              <span className={stats.energy >= 100 ? 'text-amber-500' : ''}>{stats.energy}%</span>
            </div>
            <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200">
              <div className="h-full bg-amber-500 transition-all duration-700 ease-out" style={{ width: `${Math.min(100, stats.energy)}%` }} />
            </div>
          </div>

          {/* Brain */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-[11px] font-black uppercase tracking-wider text-slate-500">
              <span className="flex items-center gap-1.5"><Brain size={14} className="text-blue-500" /> Brain</span>
              <span className={stats.brain >= 100 ? 'text-blue-500' : ''}>{stats.brain}%</span>
            </div>
            <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200">
              <div className="h-full bg-blue-500 transition-all duration-700 ease-out" style={{ width: `${Math.min(100, stats.brain)}%` }} />
            </div>
          </div>
        </div>

        {nextUnlock() && (
          <div className="mt-5 p-3 bg-indigo-50 rounded-xl border border-indigo-100 text-[10px] text-center font-bold text-indigo-600">
            GOAL: 100% IN ALL TO UNLOCK <span className="uppercase text-indigo-800">{nextUnlock()}</span>
          </div>
        )}

        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="text-[9px] text-slate-400 font-black uppercase tracking-widest">
            Collected: {visitedIds.length} 
          </div>
          <button onClick={resetGame} className="p-2 hover:bg-slate-100 rounded-xl transition-all group pointer-events-auto">
            <RotateCcw size={18} className="text-slate-400 group-hover:rotate-[-180deg] transition-transform duration-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HUD;
