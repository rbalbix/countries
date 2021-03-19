import { FormEvent, useContext, useEffect, useState } from 'react';
import { CountryContext } from '../contexts/CountryContext';
import { useFetch } from '../services/api';
import styles from '../styles/components/Search.module.css';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export function Search() {
  const { data, loadCountryData } = useContext(CountryContext);

  const [countrySearch, setCountrySearch] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    loadCountryData(countrySearch);
  }

  useEffect(() => {
    loadCountryData(countrySearch);
  }, [countrySearch]);

  return (
    <div className={styles.searchContainer}>
      <form onSubmit={handleSubmit}>
        {/* <input
          id='countrySearch'
          value={countrySearch}
          onChange={(event) => setCountrySearch(event.target.value)}
          placeholder='Select a Country'
        /> */}
        <Autocomplete
          freeSolo
          disableListWrap
          options={data.map((option) => option.name)}
          id='countrySearch'
          value={countrySearch}
          onChange={(event, newValue) => {
            setCountrySearch(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label='Choose a Country'
              margin='none'
              variant='outlined'
            />
          )}
        />
        {/* <Autocomplete
          freeSolo
          disableListWrap
          id='countrySearch'
          value={countrySearch}
          onChange={(event, newValue) => {
            setCountrySearch(newValue);
          }}
          disableClearable
          options={data.map((option) => option.name)}
          renderInput={(params) => (
            <TextField
              {...params}
              label='Choose a Country'
              margin='none'
              variant='outlined'
              InputProps={{ ...params.InputProps, type: 'search' }}
            />
          )}
        /> */}

        {/* <button type='submit'>
          <img src='/search-logo.svg' alt='Search Logo' />
        </button> */}
      </form>
    </div>
  );
}
