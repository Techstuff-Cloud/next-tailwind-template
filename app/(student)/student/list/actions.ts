import { POKEMON_API_BASE_URL } from '@/lib/apis/config';

export const fetchPokemon = async (offset: number) => {
  const response = await fetch(`${POKEMON_API_BASE_URL}/pokemon/?offset=${offset}&limit=20`);
  const pockies = await response.json();
  return pockies;
};
