import React from 'react';
import { CHARACTERS } from '../constants';
import CharacterCard from './CharacterCard';

const CharacterGrid: React.FC = () => {
  return (
    <section>
      <h2 className="text-2xl font-serif text-white mb-6 text-center md:text-left">
        운명의 소용돌이 속 인물들
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CHARACTERS.map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>
    </section>
  );
};

export default CharacterGrid;