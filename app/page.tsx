// app/page.tsx
"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from "./page.module.css";
import { decryptName } from './utils/encrypt.util';
import { State } from './types/state';

export default function Home() {
  const [states, setStates] = useState<State[]>([]);

  useEffect(() => {
    async function fetchData() {
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
    }
    
    fetchData();

  }, []);

  console.log('states: ', states);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Estados do Brasil</h1>
      <select className={styles.dropdown}>
        {states.map(state => (
          <option key={state.id} value={state.id}>{state.name}</option>
        ))}
      </select>
    </div>
  );
}
