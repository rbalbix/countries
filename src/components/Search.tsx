import { FormEvent, useContext, useState } from 'react';
import { CountryContext } from '../contexts/CountryContext';
import styles from '../styles/components/Search.module.css';

export function Search() {
  const { loadCountryData } = useContext(CountryContext);

  const [countrySearch, setCountrySearch] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    loadCountryData(countrySearch);
  }

  return (
    <div className={styles.searchContainer}>
      <form onSubmit={handleSubmit}>
        <input
          id='countrySearch'
          value={countrySearch}
          onChange={(event) => setCountrySearch(event.target.value)}
          placeholder='Select a Country'
        />
        <button type='submit'>
          <img src='/search-logo.svg' alt='Search Logo' />
        </button>
      </form>
    </div>
  );
}
