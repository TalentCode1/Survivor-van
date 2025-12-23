
import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { VANCOUVER_LOCATIONS } from '../data/locations';
import { useGame } from '../context/GameContext';
import { VancouverLocation } from '../types';

const VANCOUVER_CENTER: [number, number] = [49.2827, -123.1207];

const LocationMarker: React.FC<{ location: VancouverLocation }> = ({ location }) => {
  const { visitedIds, visitLocation, isGameOver } = useGame();
  const isVisited = visitedIds.includes(location.id);

  const isBrainFocused = ['library', 'museum', 'exhibition'].includes(location.type);
  const glowClass = isBrainFocused ? 'glow-blue' : 'glow-green';

  const customIcon = L.divIcon({
    className: '',
    html: `
      <div class="marker-silhouette ${glowClass} ${isVisited ? 'marker-visited' : ''}">
        <span class="marker-emoji">${location.emoji}</span>
      </div>
    `,
    iconSize: [48, 48],
    iconAnchor: [24, 24]
  });

  return (
    <Marker position={location.coords} icon={customIcon}>
      <Popup className="game-popup" closeButton={false}>
        <div className="p-4 font-sans bg-white border-b-4 border-slate-200">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">${location.emoji}</span>
            <div>
              <h3 className="font-bold text-base leading-tight text-slate-900">${location.name}</h3>
              <div className="flex gap-1 mt-1">
                <span className="text-[8px] uppercase tracking-wider font-black text-indigo-500 bg-indigo-50 px-1.5 py-0.5 rounded">
                  ${location.type.replace('_', ' ')}
                </span>
                <span className="text-[8px] uppercase tracking-wider font-black text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                  ${location.neighborhood}
                </span>
              </div>
            </div>
          </div>
          <p className="text-xs text-slate-500 mb-4 italic line-clamp-2">"${location.description}"</p>
          
          <div className="grid grid-cols-3 gap-1.5 mb-5 text-center">
            <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
              <div className="text-[8px] uppercase font-bold text-slate-400">Wallet</div>
              <div className={`text-[11px] font-black ${location.stats.wallet >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                ${location.stats.wallet > 0 ? '+' : ''}${location.stats.wallet}
              </div>
            </div>
            <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
              <div className="text-[8px] uppercase font-bold text-slate-400">Energy</div>
              <div className={`text-[11px] font-black ${location.stats.energy >= 0 ? 'text-amber-600' : 'text-rose-600'}`}>
                ${location.stats.energy > 0 ? '+' : ''}${location.stats.energy}
              </div>
            </div>
            <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
              <div className="text-[8px] uppercase font-bold text-slate-400">Brain</div>
              <div className={`text-[11px] font-black ${location.stats.brain >= 0 ? 'text-blue-600' : 'text-rose-600'}`}>
                ${location.stats.brain > 0 ? '+' : ''}${location.stats.brain}
              </div>
            </div>
          </div>

          <button
            onClick={() => visitLocation(location)}
            disabled={isVisited || isGameOver}
            className={`w-full py-3 rounded-2xl font-black text-[10px] uppercase tracking-[0.15em] transition-all shadow-lg active:scale-95 ${
              isVisited || isGameOver
              ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
              : 'bg-indigo-600 text-white hover:bg-indigo-700'
            }`}
          >
            ${isVisited ? 'ALREADY VISITED' : 'COLLECT POWER-UP'}
          </button>
        </div>
      </Popup>
    </Marker>
  );
};

const MapController = () => {
    const map = useMap();
    useEffect(() => {
        const timer = setTimeout(() => map.invalidateSize(), 400);
        return () => clearTimeout(timer);
    }, [map]);
    return null;
}

const GameMap = () => {
  const { unlockedNeighborhoods } = useGame();
  const visibleLocations = VANCOUVER_LOCATIONS.filter(l => unlockedNeighborhoods.includes(l.neighborhood));

  return (
    <MapContainer center={VANCOUVER_CENTER} zoom={13} scrollWheelZoom={true} zoomControl={false} style={{ height: '100%', width: '100%' }}>
      <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
      {visibleLocations.map(loc => <LocationMarker key={loc.id} location={loc} />)}
      <MapController />
    </MapContainer>
  );
};

export default GameMap;
