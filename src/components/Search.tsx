// import TextField from 'material-ui-core/TextField';
import { Autocomplete, TextField } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { CountryContext } from '../contexts/CountryContext';
import styles from '../styles/components/Search.module.css';

export function Search() {
  const { data, loadCountryData } = useContext(CountryContext);

  const [countrySearch, setCountrySearch] = useState('');

  useEffect(() => {
    if (countrySearch !== null && countrySearch !== '') {
      loadCountryData(countrySearch);
    }
  }, [countrySearch]);

  return (
    <div className={styles.searchContainer}>
      <Autocomplete
        freeSolo
        disableListWrap
        disableClearable
        options={data.map((option) => option.name.common)}
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
            variant='filled'
          />
        )}
      />
    </div>
  );
}
