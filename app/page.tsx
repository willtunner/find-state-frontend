"use client";
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import styles from "./page.module.css";
import { decryptName } from './utils/encrypt.util';
import { State } from './types/state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const [states, setStates] = useState<State[]>([]);
  const [filteredStates, setFilteredStates] = useState<State[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLUListElement>(null);

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

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredStates(states);
      return;
    }

    const filtered = states.filter(state =>
      state.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredStates(filtered);
  }, [searchTerm, states]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setShowDropdown(true);
  };

  const handleItemClick = (state: State) => {
    setSearchTerm(state.name);
    setShowDropdown(false);
  };

  const handleDropdownMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleDropdownMouseLeave = () => {
    setShowDropdown(false);
  };

  const handleInputClick = () => {
    if (searchTerm.trim() === '') {
      setShowDropdown(true);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.borderTop}></div>
      <div className={styles.borderRight}></div>
      <div className={styles.borderBottom}></div>
      <div className={styles.borderLeft}></div>
      
      <div className={styles.container}>
      <div className={styles.dropdownContainer}>
        <div className={styles.inputContainer}>
          <label className={styles.label}>Estados</label>
          <input
            type="text"
            className={styles.input}
            placeholder="Digite o nome do estado..."
            value={searchTerm}
            onChange={handleInputChange}
            onFocus={handleInputClick}
          />
          {showDropdown && (
            <ul
              className={styles.dropdown}
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
              ref={dropdownRef}
            >
              {filteredStates.map(state => (
                <li
                  key={state.id}
                  className={styles.item}
                  onClick={() => handleItemClick(state)}
                  onMouseEnter={handleDropdownMouseEnter}
                >
                  {state.name}
                </li>
              ))}
            </ul>
          )}
          <FontAwesomeIcon icon={faList} className={styles.icon} />
        </div>
        
      </div>
    </div>
    </div>
  );
}
