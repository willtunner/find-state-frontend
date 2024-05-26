"use client";
import styles from "./page.module.css";
import { Dropdown } from './components/Dropdown';
import { useFetchStates } from './hooks/useFetchStates';

export default function Home() {
  const states = useFetchStates();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.borderTop}></div>
      <div className={styles.borderRight}></div>
      <div className={styles.borderBottom}></div>
      <div className={styles.borderLeft}></div>
           
      <div className={styles.container}>
        <Dropdown states={states} />
      </div>
    </div>
  );
}
