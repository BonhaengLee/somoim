import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import Card from '../components/molecules/Card';

const fetchPokemons = async () => {
  const { data } = await axios.get('http://pokeapi.salestock.net/api/v2/pokemon/?limit=50');
  return data;
};
function Main() {
  const { data, status } = useQuery('pokemons', fetchPokemons);
  const PokemonCard = (pokemons) => {
    return pokemons.results.map((pokemon) => {
      return <Card key={pokemon.name} name={pokemon.name}></Card>;
    });
  };
  return (
    <div>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'error' && <div>Error fetching pokemons</div>}
      {status === 'success' && <div>{PokemonCard(data)}</div>}
    </div>
  );
}
export default Main;
