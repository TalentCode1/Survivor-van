
import { VancouverLocation, Neighborhood } from '../types';

const id = () => Math.random().toString(36).substr(2, 9);

export const VANCOUVER_LOCATIONS: VancouverLocation[] = [
  // --- STAGE 1: DOWNTOWN (Needs 10 Brain, 10 Energy, 10 Wallet) ---
  // Brain 🧠 (+10)
  { id: id(), neighborhood: 'Downtown', name: 'VPL Central Library', type: 'library', coords: [49.2820, -123.1171], emoji: '📚', description: 'Study at the Colosseum.', stats: { wallet: 0, energy: -5, brain: 10 } },
  { id: id(), neighborhood: 'Downtown', name: 'Vancouver Art Gallery', type: 'museum', coords: [49.2829, -123.1205], emoji: '🖼️', description: 'Culture for the soul.', stats: { wallet: -2, energy: -5, brain: 10 } },
  { id: id(), neighborhood: 'Downtown', name: 'Cineplex Odeon International', type: 'cinema', coords: [49.2801, -123.1211], emoji: '🎬', description: 'Cheap Tuesday movies.', stats: { wallet: -5, energy: 5, brain: 10 } },
  { id: id(), neighborhood: 'Downtown', name: 'Orpheum Theatre', type: 'theatre', coords: [49.2804, -123.1206], emoji: '🎭', description: 'Historic performances.', stats: { wallet: -5, energy: -2, brain: 10 } },
  { id: id(), neighborhood: 'Downtown', name: 'Bill Reid Gallery', type: 'museum', coords: [49.2845, -123.1189], emoji: '🦅', description: 'Indigenous art hub.', stats: { wallet: -4, energy: -2, brain: 10 } },
  { id: id(), neighborhood: 'Downtown', name: 'VPL Joe Fortes', type: 'library', coords: [49.2885, -123.1328], emoji: '📖', description: 'West End study spot.', stats: { wallet: 0, energy: -4, brain: 10 } },
  { id: id(), neighborhood: 'Downtown', name: 'Contemporary Art Gallery', type: 'museum', coords: [49.2778, -123.1201], emoji: '🎨', description: 'Free modern art.', stats: { wallet: 0, energy: -2, brain: 10 } },
  { id: id(), neighborhood: 'Downtown', name: 'The Vogue Theatre', type: 'theatre', coords: [49.2798, -123.1215], emoji: '🎫', description: 'Iconic concert hall.', stats: { wallet: -5, energy: 0, brain: 10 } },
  { id: id(), neighborhood: 'Downtown', name: 'Queen Elizabeth Theatre', type: 'theatre', coords: [49.2807, -123.1136], emoji: '👗', description: 'Plaza of the arts.', stats: { wallet: -5, energy: -2, brain: 10 } },
  { id: id(), neighborhood: 'Downtown', name: 'Vancouver Maritime Museum', type: 'museum', coords: [49.2776, -123.1471], emoji: '⚓', description: 'Ships and history.', stats: { wallet: -5, energy: -2, brain: 10 } },

  // Energy ⚡ (+10)
  { id: id(), neighborhood: 'Downtown', name: 'Stanley Park Seawall', type: 'park', coords: [49.3017, -123.1417], emoji: '🌲', description: 'Nature recovery loop.', stats: { wallet: 0, energy: 10, brain: 2 } },
  { id: id(), neighborhood: 'Downtown', name: 'Robert Lee YMCA Pool', type: 'pool', coords: [49.2823, -123.1231], emoji: '🏊', description: 'Community swimming.', stats: { wallet: -5, energy: 10, brain: 0 } },
  { id: id(), neighborhood: 'Downtown', name: 'Breka Bakery Cafe', type: 'cafe', coords: [49.2866, -123.1348], emoji: '☕', description: '24/7 caffeine boost.', stats: { wallet: -4, energy: 10, brain: 2 } },
  { id: id(), neighborhood: 'Downtown', name: 'David Lam Park', type: 'park', coords: [49.2723, -123.1235], emoji: '🌳', description: 'Yaletown sunshine.', stats: { wallet: 0, energy: 10, brain: 0 } },
  { id: id(), neighborhood: 'Downtown', name: 'Coal Harbour Gym', type: 'gym', coords: [49.2892, -123.1189], emoji: '🏋️', description: 'Workout with a view.', stats: { wallet: -8, energy: 10, brain: 0 } },
  { id: id(), neighborhood: 'Downtown', name: 'JJ Bean Marine', type: 'cafe', coords: [49.2872, -123.1144], emoji: '🍩', description: 'Local coffee power.', stats: { wallet: -4, energy: 10, brain: 0 } },
  { id: id(), neighborhood: 'Downtown', name: 'West End Community Gym', type: 'gym', coords: [49.2858, -123.1340], emoji: '🏃', description: 'Budget local gym.', stats: { wallet: -3, energy: 10, brain: 0 } },
  { id: id(), neighborhood: 'Downtown', name: 'Sunset Beach', type: 'park', coords: [49.2798, -123.1384], emoji: '🏖️', description: 'Ocean air recovery.', stats: { wallet: 0, energy: 10, brain: 2 } },
  { id: id(), neighborhood: 'Downtown', name: 'Lost Lagoon Trail', type: 'trail', coords: [49.2968, -123.1419], emoji: '🦆', description: 'Quiet park walk.', stats: { wallet: 0, energy: 10, brain: 0 } },
  { id: id(), neighborhood: 'Downtown', name: 'Nelson Park', type: 'park', coords: [49.2828, -123.1294], emoji: '🌿', description: 'Garden escape.', stats: { wallet: 0, energy: 10, brain: 0 } },

  // Wallet 💰 (+10)
  { id: id(), neighborhood: 'Downtown', name: 'Sunrise Market', type: 'market', coords: [49.2817, -123.0970], emoji: '🍅', description: 'Budget groceries king.', stats: { wallet: 10, energy: -5, brain: 0 } },
  { id: id(), neighborhood: 'Downtown', name: 'Quest Food Exchange', type: 'food_bank', coords: [49.2811, -123.1065], emoji: '🍎', description: 'Social grocery access.', stats: { wallet: 10, energy: 5, brain: 0 } },
  { id: id(), neighborhood: 'Downtown', name: 'Gastown Flea Market', type: 'market', coords: [49.2838, -123.1035], emoji: '🧥', description: 'Cheap vintage finds.', stats: { wallet: 10, energy: -5, brain: 0 } },
  { id: id(), neighborhood: 'Downtown', name: 'H-Mart Downtown', type: 'market', coords: [49.2811, -123.1189], emoji: '🍜', description: 'Bulk student snacks.', stats: { wallet: 10, energy: -2, brain: 0 } },
  { id: id(), neighborhood: 'Downtown', name: 'Community Kitchen DT', type: 'food_bank', coords: [49.2815, -123.1100], emoji: '🍲', description: 'Free hot meals.', stats: { wallet: 10, energy: 10, brain: 0 } },
  { id: id(), neighborhood: 'Downtown', name: 'Costco Downtown', type: 'market', coords: [49.2795, -123.1105], emoji: '🌭', description: 'The $1.50 legend.', stats: { wallet: 10, energy: 5, brain: 0 } },
  { id: id(), neighborhood: 'Downtown', name: 'Salvation Army Thrift', type: 'market', coords: [49.2812, -123.0912], emoji: '👕', description: 'Used gear heaven.', stats: { wallet: 10, energy: -5, brain: 0 } },
  { id: id(), neighborhood: 'Downtown', name: 'Dollarama Seymour', type: 'market', coords: [49.2832, -123.1165], emoji: '🏷️', description: 'Essentials for less.', stats: { wallet: 10, energy: -5, brain: 0 } },
  { id: id(), neighborhood: 'Downtown', name: 'No Frills West End', type: 'market', coords: [49.2866, -123.1351], emoji: '🍄', description: 'Cheapest groceries.', stats: { wallet: 10, energy: -2, brain: 0 } },
  { id: id(), neighborhood: 'Downtown', name: 'Share Market Gastown', type: 'market', coords: [49.2825, -123.1092], emoji: '📦', description: 'Bulk buying co-op.', stats: { wallet: 10, energy: -2, brain: 0 } },

  // --- STAGE 2: NORTH VANCOUVER ---
  { id: id(), neighborhood: 'North Vancouver', name: 'Lonsdale Quay Market', type: 'market', coords: [49.3102, -123.0811], emoji: '🚢', description: 'Fresh foods hub.', stats: { wallet: 10, energy: 5, brain: 0 } },
  { id: id(), neighborhood: 'North Vancouver', name: 'Lynn Canyon Suspension Bridge', type: 'trail', coords: [49.3440, -123.0180], emoji: '🌉', description: 'Free bridge, high energy.', stats: { wallet: 0, energy: 15, brain: 5 } },
  { id: id(), neighborhood: 'North Vancouver', name: 'NV City Library', type: 'library', coords: [49.3175, -123.0734], emoji: '📚', description: 'Sustainable learning.', stats: { wallet: 0, energy: -5, brain: 10 } },
  
  // --- STAGE 3: BURNABY ---
  { id: id(), neighborhood: 'Burnaby', name: 'SFU Bennett Library', type: 'library', coords: [49.2795, -122.9189], emoji: '🎓', description: 'Top of the hill study.', stats: { wallet: -2, energy: -10, brain: 15 } },
  { id: id(), neighborhood: 'Burnaby', name: 'Deer Lake Park', type: 'park', coords: [49.2370, -122.9700], emoji: '🦆', description: 'Art gallery in a park.', stats: { wallet: 0, energy: 10, brain: 5 } },
  { id: id(), neighborhood: 'Burnaby', name: 'Bonsor Rec Pool', type: 'pool', coords: [49.2291, -123.0036], emoji: '🏊', description: 'Local swim spot.', stats: { wallet: -5, energy: 10, brain: 0 } },

  // --- STAGE 4: UBC ---
  { id: id(), neighborhood: 'UBC', name: 'Koerner Library', type: 'library', coords: [49.2676, -123.2530], emoji: '📖', description: 'Underground wisdom.', stats: { wallet: 0, energy: -10, brain: 15 } },
  { id: id(), neighborhood: 'UBC', name: 'Wreck Beach Stairs', type: 'trail', coords: [49.2622, -123.2615], emoji: '👣', description: 'Leg day for free.', stats: { wallet: 0, energy: 10, brain: 0 } },
  { id: id(), neighborhood: 'UBC', name: 'Museum of Anthropology', type: 'museum', coords: [49.2694, -123.2598], emoji: '🎭', description: 'Epic cultural vault.', stats: { wallet: -10, energy: -5, brain: 15 } },

  // --- STAGE 5: RICHMOND ---
  { id: id(), neighborhood: 'Richmond', name: 'Night Market', type: 'market', coords: [49.1931, -123.1276], emoji: '🍢', description: 'Snack heaven.', stats: { wallet: -20, energy: 10, brain: 0 } },
  { id: id(), neighborhood: 'Richmond', name: 'Richmond Public Library', type: 'library', coords: [49.1655, -123.1432], emoji: '📔', description: 'Modern tech space.', stats: { wallet: 0, energy: -5, brain: 10 } },

  // --- STAGE 6: MAIN STREET ---
  { id: id(), neighborhood: 'Main Street', name: 'Rio Theatre', type: 'cinema', coords: [49.2635, -123.0695], emoji: '📽️', description: 'Indie movie king.', stats: { wallet: -8, energy: 5, brain: 10 } },

  // --- STAGE 7: OAKRIDGE ---
  { id: id(), neighborhood: 'Oakridge', name: 'QE Park Conservatory', type: 'museum', coords: [49.2420, -123.1130], emoji: '🦜', description: 'Tropical escape.', stats: { wallet: -7, energy: 10, brain: 5 } },

  // --- STAGE 8: COQUITLAM ---
  { id: id(), neighborhood: 'Coquitlam', name: 'Lafarge Lake', type: 'trail', coords: [49.2885, -122.7830], emoji: '🚶', description: 'Light walk.', stats: { wallet: 0, energy: 10, brain: 0 } },

  // --- STAGE 9: SURREY ---
  { id: id(), neighborhood: 'Surrey', name: 'Surrey Central Library', type: 'library', coords: [49.1915, -122.8485], emoji: '🏛️', description: 'Architectural marvel.', stats: { wallet: 0, energy: -5, brain: 15 } }
];
