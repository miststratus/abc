import React from 'react';
import { Character } from '../types';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <div className={`group relative bg-slate-900 rounded-xl overflow-hidden border border-slate-800 ${character.borderColorClass} transition-all duration-300`}>
      <img 
        src={character.image} 
        alt={`${character.name} ${character.ageDisplay}`} 
        className="w-full h-80 object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
      />
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/90 to-transparent p-4">
        <h3 className={`text-lg font-bold ${character.nameColorClass}`}>
          {character.name} <span className="text-sm font-normal text-slate-400">({character.ageDisplay})</span>
        </h3>
        <p className="text-xs text-slate-400 mb-1">{character.description}</p>
        {character.quote && (
          <p className="text-sm text-gray-300 italic truncate border-t border-slate-700 pt-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            {character.quote}
          </p>
        )}
      </div>
      {character.badge && (
        <div className={`absolute top-2 right-2 text-xs px-2 py-1 rounded font-bold tracking-wider ${character.badge.colorClass}`}>
          {character.badge.text}
        </div>
      )}
    </div>
  );
};

export default CharacterCard;