import { useState, useRef } from 'react';
import { State } from '../types/state';
import styles from '../page.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

interface DropdownProps {
  states: State[];
}

export const Dropdown: React.FC<DropdownProps> = ({ states }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredStates, setFilteredStates] = useState<State[]>([]);
  const dropdownRef = useRef<HTMLUListElement>(null);

  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setShowDropdown(true);
    if (event.target.value.trim() === '') {
      setFilteredStates(states);
    } else {
      const filtered = states.filter(state =>
        state.name.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setFilteredStates(filtered);
    }
  };

  const handleItemClick = (state: State) => {
    setSearchTerm(state.name);
    setShowDropdown(false);
  };

  const handleInputClick = () => {
    setShowDropdown(true);
    setFilteredStates(states);
  };

  const handleDropdownMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleDropdownMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <div className={styles.dropdownContainer}>
      <div className={`${styles.inputContainer} ${isFocused ? styles.focused : ''}`}>
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
            ref={dropdownRef}
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          >
            {filteredStates.map(state => (
              <li
                key={state.id}
                className={styles.item}
                onClick={() => handleItemClick(state)}
              >
                {state.name}
              </li>
            ))}
          </ul>
        )}
        <FontAwesomeIcon icon={faList} className={styles.icon} />
      </div>
    </div>
  );
};
