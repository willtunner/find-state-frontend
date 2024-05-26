import React from 'react';
import { State } from '../types/state';
import styles from '../page.module.css';

interface StateListProps {
  states: State[];
  onItemClick: (state: State) => void;
}

export const StateList: React.FC<StateListProps> = ({ states, onItemClick }) => {
  return (
    <ul className={styles.dropdown}>
      {states.map(state => (
        <li
          key={state.id}
          className={styles.item}
          onClick={() => onItemClick(state)}
        >
          {state.name}
        </li>
      ))}
    </ul>
  );
};
