import styles from '../styles/components/Search.module.css';

export function Search() {
  return (
    <div className={styles.searchContainer}>
      <input type='text' name='search' id='search' />
      <button>
        <img src='/search-logo.svg' alt='Search Logo' />
      </button>
    </div>
  );
}
