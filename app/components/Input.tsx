import React from 'react';
import styles from '../page.module.css';

interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
}

export const Input: React.FC<InputProps> = ({ value, onChange, onFocus }) => {
  return (
    <input
      type="text"
      className={styles.input}
      placeholder="Digite o nome do estado..."
      value={value}
      onChange={onChange}
      onFocus={onFocus}
    />
  );
};
