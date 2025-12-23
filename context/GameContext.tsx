
import React, { createContext, useContext, useState, useCallback, ReactNode, useEffect } from 'react';
import { GameState, PlayerStats, VancouverLocation, Neighborhood } from '../types';

const GameContext = createContext<GameState | undefined>(undefined);

const PROGRESSION_SEQUENCE: Neighborhood[] = [
  'Downtown', 
  'North Vancouver', 
  'Burnaby', 
  'UBC', 
  'Richmond', 
  'Main Street', 
  'Oakridge', 
  'Coquitlam', 
  'Surrey'
];

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Stats start at 10 to give a small survival buffer as requested
  const [stats, setStats] = useState<PlayerStats>({ wallet: 10, energy: 10, brain: 10 });
  const [visitedIds, setVisitedIds] = useState<string[]>([]);
  const [unlockedNeighborhoods, setUnlockedNeighborhoods] = useState<Neighborhood[]>(['Downtown']);
  const [isGameOver, setIsGameOver] = useState(false);

  // Check for Neighborhood Unlocks (Stage Progression)
  useEffect(() => {
    if (stats.wallet >= 100 && stats.energy >= 100 && stats.brain >= 100) {
      setUnlockedNeighborhoods(prev => {
        const nextNeighborhood = PROGRESSION_SEQUENCE[prev.length];
        if (nextNeighborhood && !prev.includes(nextNeighborhood)) {
          return [...prev, nextNeighborhood];
        }
        return prev;
      });
    }
  }, [stats]);

  // Check for Game Over (Hitting 0)
  useEffect(() => {
    if (!isGameOver && (stats.wallet <= 0 || stats.energy <= 0 || stats.brain <= 0)) {
      setIsGameOver(true);
    }
  }, [stats, isGameOver]);

  const visitLocation = useCallback((location: VancouverLocation) => {
    if (visitedIds.includes(location.id) || isGameOver) return;

    setStats(prev => ({
      wallet: Math.min(120, Math.max(0, prev.wallet + location.stats.wallet)),
      energy: Math.min(120, Math.max(0, prev.energy + location.stats.energy)),
      brain: Math.min(120, Math.max(0, prev.brain + location.stats.brain))
    }));

    setVisitedIds(prev => [...prev, location.id]);
  }, [visitedIds, isGameOver]);

  const resetGame = useCallback(() => {
    setStats({ wallet: 10, energy: 10, brain: 10 });
    setVisitedIds([]);
    setUnlockedNeighborhoods(['Downtown']);
    setIsGameOver(false);
  }, []);

  return (
    <GameContext.Provider value={{ stats, visitedIds, unlockedNeighborhoods, isGameOver, visitLocation, resetGame }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error('useGame must be used within a GameProvider');
  return context;
};
