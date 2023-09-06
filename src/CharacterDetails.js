// src/CharacterDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

function CharacterDetails({ characters }) {
  const { id } = useParams(); // Get the character ID from the URL

  // Find the character in the characters array by ID
  const character = characters.find(char => char.id === parseInt(id));

  if (!character) {
    return <div>Character not found.</div>;
  }

  return (
    <div>
      <h2>Character Details</h2>
      <img src={character.image} alt={character.name} width="200" />
      <p>Name: {character.name}</p>
      <p>Abilities: {character.abilities}</p>
      <p>Bounty: {character.bounty}</p>
    </div>
  );
}

export default CharacterDetails;

