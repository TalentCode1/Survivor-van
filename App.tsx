
import React, { useState } from 'react';
import HUD from './components/HUD';
import GameMap from './components/GameMap';
import { GameProvider, useGame } from './context/GameContext';
import { HelpCircle, Trophy, Github, Linkedin, X, Info, Coins, MapPin, Skull, Rocket } from 'lucide-react';

const SummaryModal: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="fixed inset-0 z-[4000] flex items-center justify-center p-4 modal-blur bg-slate-900/90 animate-in fade-in zoom-in duration-300">
    <div className="bg-white max-w-2xl w-full rounded-[3rem] overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]">
      <div className="bg-indigo-600 p-10 text-white relative overflow-hidden shrink-0">
        <div className="absolute -top-10 -right-10 opacity-10 rotate-12 scale-150">
          <Rocket size={200} />
        </div>
        <h2 className="text-4xl font-black mb-2 tracking-tighter">VanSurvivor</h2>
        <p className="text-indigo-100 text-xs font-black uppercase tracking-[0.3em]">Stage 1: Downtown Vancouver</p>
      </div>

      <div className="p-10 overflow-y-auto custom-scrollbar space-y-8 text-slate-600 leading-relaxed">
        <section>
          <h3 className="text-indigo-600 font-black text-xl uppercase tracking-widest mb-3">The Mission</h3>
          <p className="text-lg">You start with <strong>10%</strong> in your survival kit. To unlock the next neighborhood, you must reach <strong>100%</strong> in Wallet, Energy, and Brain simultaneously!</p>
        </section>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-emerald-50 p-6 rounded-[2rem] border border-emerald-100">
            <div className="text-3xl mb-2">💰</div>
            <h4 className="font-black text-emerald-800 uppercase text-xs mb-1">Wallet +10</h4>
            <p className="text-[10px] text-emerald-600">Visit Food Banks and Markets to earn points.</p>
          </div>
          <div className="bg-amber-50 p-6 rounded-[2rem] border border-amber-100">
            <div className="text-3xl mb-2">⚡</div>
            <h4 className="font-black text-amber-800 uppercase text-xs mb-1">Energy +10</h4>
            <p className="text-[10px] text-amber-600">Parks, Gyms, and Trails recharge your health.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-[2rem] border border-blue-100">
            <div className="text-3xl mb-2">🧠</div>
            <h4 className="font-black text-blue-800 uppercase text-xs mb-1">Brain +10</h4>
            <p className="text-[10px] text-blue-600">Libraries, Museums, and Cinema boost your stats.</p>
          </div>
        </div>

        <section className="bg-slate-50 p-6 rounded-[2rem] border border-slate-200">
          <h4 className="font-black text-slate-800 uppercase text-xs mb-2">Neighborhood Rewards</h4>
          <ol className="text-xs space-y-1 text-slate-500 font-bold">
            <li>1. Downtown (START)</li>
            <li>2. North Van (LOCKED)</li>
            <li>3. Burnaby (LOCKED)</li>
            <li>4. UBC & Beyond (LOCKED)</li>
          </ol>
        </section>

        <button onClick={onClose} className="w-full py-5 bg-indigo-600 text-white rounded-[2rem] font-black text-xl shadow-xl shadow-indigo-200 hover:bg-indigo-700 transition-all hover:scale-[1.02] active:scale-95">
          START SURVIVING
        </button>
      </div>
    </div>
  </div>
);

const GameOverModal: React.FC = () => {
  const { resetGame } = useGame();
  return (
    <div className="fixed inset-0 z-[5000] flex items-center justify-center p-4 modal-blur bg-rose-950/90 animate-in fade-in duration-500">
      <div className="bg-white max-w-md w-full rounded-[3rem] p-12 text-center shadow-2xl animate-in zoom-in slide-in-from-bottom-10 duration-500">
        <div className="w-24 h-24 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
          <Skull size={48} className="text-rose-600" />
        </div>
        <h2 className="text-3xl font-black text-slate-900 mb-4">SURVIVAL FAILED</h2>
        <p className="text-slate-500 mb-10 text-lg leading-relaxed">
          One of your stats hit 0. Survival in the city is tough!
          <br/>
          <span className="font-bold text-slate-800 mt-4 block">Sorry, the game ends. Good luck tomorrow!</span>
        </p>
        <button 
          onClick={resetGame}
          className="w-full py-5 bg-rose-600 text-white rounded-[2rem] font-black text-xl shadow-xl shadow-rose-200 hover:bg-rose-700 transition-all active:scale-95"
        >
          TRY AGAIN
        </button>
      </div>
    </div>
  );
};

const PrizesModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { unlockedNeighborhoods } = useGame();
  return (
    <div className="fixed inset-0 z-[3000] flex items-center justify-center p-4 modal-blur bg-slate-900/80 animate-in fade-in duration-300">
      <div className="bg-white max-w-md w-full rounded-[2.5rem] overflow-hidden shadow-2xl p-8 relative text-center">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors">
          <X size={24} className="text-slate-400" />
        </button>
        
        <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Trophy size={40} className="text-amber-500" />
        </div>
        
        <h2 className="text-2xl font-black mb-2">Neighborhood Progress</h2>
        <p className="text-slate-500 mb-8 px-4 text-xs font-bold uppercase tracking-wider">
          Currently in: {unlockedNeighborhoods[unlockedNeighborhoods.length - 1]}
        </p>
        
        <div className="space-y-3 mb-8">
          {[
            { neighborhood: 'North Vancouver', stage: 2 },
            { neighborhood: 'Burnaby', stage: 3 },
            { neighborhood: 'UBC', stage: 4 },
            { neighborhood: 'Richmond', stage: 5 }
          ].map((item, i) => {
            const isUnlocked = unlockedNeighborhoods.includes(item.neighborhood as any);
            return (
              <div key={i} className={`flex items-center gap-4 p-4 rounded-2xl border ${isUnlocked ? 'bg-indigo-50 border-indigo-200' : 'bg-slate-50 border-slate-100'} text-left`}>
                <div className={`p-2 rounded-xl shadow-sm ${isUnlocked ? 'bg-white' : 'bg-slate-100 opacity-50'}`}>
                  <MapPin size={20} className={isUnlocked ? 'text-indigo-600' : 'text-slate-400'} />
                </div>
                <div className="flex-1">
                  <h4 className={`font-black text-sm ${isUnlocked ? 'text-indigo-900' : 'text-slate-400'}`}>{item.neighborhood}</h4>
                  <p className="text-[9px] uppercase font-black text-slate-400">Stage {item.stage}</p>
                </div>
                <div className={`text-[10px] font-black px-2 py-1 rounded ${isUnlocked ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-400'}`}>
                  {isUnlocked ? 'UNLOCKED' : 'LOCKED'}
                </div>
              </div>
            );
          })}
        </div>
        
        <button onClick={onClose} className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-black shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-colors">
          CONTINUE QUEST
        </button>
      </div>
    </div>
  );
};

const GameContent: React.FC = () => {
  const { isGameOver } = useGame();
  const [showSummary, setShowSummary] = useState(true);
  const [showPrizes, setShowPrizes] = useState(false);
  const [showHelpMenu, setShowHelpMenu] = useState(false);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-slate-900">
      <HUD />
      
      <div className="fixed bottom-24 right-6 z-[2000] flex flex-col gap-3">
        {showHelpMenu && (
          <div className="flex flex-col gap-3 animate-in slide-in-from-bottom-4 duration-300">
            <button onClick={() => { setShowPrizes(true); setShowHelpMenu(false); }} className="group flex items-center gap-3 self-end">
              <span className="bg-slate-800 text-white px-3 py-1.5 rounded-xl text-[10px] font-black uppercase opacity-0 group-hover:opacity-100 transition-opacity">Stages</span>
              <div className="p-4 bg-amber-500 text-white rounded-full shadow-xl hover:scale-110 transition-transform">
                <Trophy size={24} />
              </div>
            </button>
            <button onClick={() => { setShowSummary(true); setShowHelpMenu(false); }} className="group flex items-center gap-3 self-end">
              <span className="bg-slate-800 text-white px-3 py-1.5 rounded-xl text-[10px] font-black uppercase opacity-0 group-hover:opacity-100 transition-opacity">Summary</span>
              <div className="p-4 bg-slate-700 text-white rounded-full shadow-xl hover:scale-110 transition-transform">
                <Info size={24} />
              </div>
            </button>
          </div>
        )}
        <button 
          onClick={() => setShowHelpMenu(!showHelpMenu)}
          className={`p-5 rounded-full shadow-2xl transition-all ${showHelpMenu ? 'bg-rose-500 rotate-90 scale-90' : 'bg-indigo-600'} text-white hover:scale-105 active:scale-95`}
        >
          {showHelpMenu ? <X size={32} /> : <span className="text-3xl font-black">?</span>}
        </button>
      </div>

      {showSummary && <SummaryModal onClose={() => setShowSummary(false)} />}
      {showPrizes && <PrizesModal onClose={() => setShowPrizes(false)} />}
      {isGameOver && <GameOverModal />}

      <main className="w-full h-full">
        <GameMap />
      </main>

      <footer className="fixed bottom-0 left-0 right-0 z-[1500] bg-white/90 backdrop-blur-md border-t border-slate-200 px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-[9px] text-slate-500 font-black uppercase tracking-[0.25em]">
          Created by <span className="text-indigo-600">Premier Media</span> & <span className="text-indigo-600">David Estrada</span> © 2025-2035
        </div>
        <div className="flex items-center gap-6">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-black transition-colors">
            <Github size={18} />
          </a>
        </div>
      </footer>
    </div>
  );
};

const App: React.FC = () => (
  <GameProvider>
    <GameContent />
  </GameProvider>
);

export default App;
