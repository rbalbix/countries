import * as d3 from 'd3-format';
import { useContext } from 'react';
import { CountryContext } from '../contexts/CountryContext';
import styles from '../styles/components/CountryCard.module.css';

const locale = d3.formatLocale({
  decimal: ',',
  thousands: '.',
  grouping: [3],
  currency: ['R$', ''],
});

export function CountryCard() {
  const { countryData } = useContext(CountryContext);

  return (
    <div className={styles.countryCardContainer}>
      {countryData !== null && (
        <>
          <header>
            <h1>{countryData.name}</h1>
            <img src={countryData.flag} alt='Country Flag' />
          </header>
          <main>
            <div>
              <p className='countryLabel'>Region</p>
              <p className='countryData'>{countryData.subregion}</p>
            </div>
            <div>
              <p className='countryLabel'>Capital</p>
              <p className='countryData'>{countryData.capital}</p>
            </div>
            <div>
              <p className='countryLabel'>Official Language</p>
              <p className='countryData'>{countryData.officialLanguage}</p>
            </div>
            <div>
              <p className='countryLabel'>Area</p>
              <p className='countryData'>
                {locale.format(',.0f')(countryData.area)} km<sup>2</sup>
              </p>
            </div>
            <div>
              <p className='countryLabel'>Population</p>
              <p className='countryData'>
                {locale.format(',.0f')(countryData.population)}
              </p>
            </div>
            <div>
              <p className='countryLabel'>Currency</p>
              <p className='countryData'>{countryData.currency}</p>
            </div>
          </main>
        </>
      )}
    </div>
  );
}
