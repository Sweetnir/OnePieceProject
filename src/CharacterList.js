// src/CharacterList.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CharacterSearch from './CharacterSearch'; // Correct path to CharacterSearch component


function CharacterList({ characters }) {
  const [filteredCharacters, setFilteredCharacters] = useState(characters);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);

    if (term.trim() === '') {
      setFilteredCharacters(characters);
    } else {
      const filtered = characters.filter((char) =>
        char.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredCharacters(filtered);
    }
  };

  return (
    <div>
      <CharacterSearch onSearch={handleSearch} />
      <h2>One Piece Characters</h2>
      <ul>
        {filteredCharacters.map((character) => (
          <li key={character.id}>
            <Link to={`/character/${character.id}`}>{character.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CharacterList;
