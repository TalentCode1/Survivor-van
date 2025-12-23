
export type LocationType = 
  | 'food' | 'library' | 'gym' | 'market' | 'clinic' | 'park' 
  | 'landmark' | 'food_bank' | 'museum' | 'cinema' | 'theatre' 
  | 'exhibition' | 'pool' | 'cafe' | 'trail';

export type Neighborhood = 
  | 'Downtown' | 'North Vancouver' | 'Burnaby' | 'UBC' | 'Richmond' 
  | 'Main Street' | 'Oakridge' | 'Coquitlam' | 'Surrey';

export interface StatModifiers {
  wallet: number;
  energy: number;
  brain: number;
}

export interface VancouverLocation {
  id: string;
  name: string;
  type: LocationType;
  neighborhood: Neighborhood;
  coords: [number, number];
  emoji: string;
  description: string;
  stats: StatModifiers;
}

export interface PlayerStats {
  wallet: number;
  energy: number;
  brain: number;
}

export interface GameState {
  stats: PlayerStats;
  visitedIds: string[];
  unlockedNeighborhoods: Neighborhood[];
  isGameOver: boolean;
  visitLocation: (location: VancouverLocation) => void;
  resetGame: () => void;
}
