import { useEffect, useState } from 'react';
import axios from 'axios';
import { State } from '../types/state';
import { decryptName } from '../utils/encrypt.util';

export const useFetchStates = () => {
  const [states, setStates] = useState<State[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<State[]>('http://localhost:3000/states');
        const decryptedStates = response.data.map(state => ({
          id: state.id,
          name: decryptName(state.name)
        }));
        setStates(decryptedStates);
      } catch (error) {
        console.error('Erro ao buscar os estados:', error);
      }
    };
    
    fetchData();
  }, []);

  return states;
};
