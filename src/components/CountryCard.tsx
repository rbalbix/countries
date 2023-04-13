import * as d3 from 'd3-format';
import dynamic from 'next/dynamic';
import { useContext } from 'react';
import { CountryContext } from '../contexts/CountryContext';
import styles from '../styles/components/CountryCard.module.css';

const Map = dynamic(() => import('./Map'), { ssr: false });

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
            <h1>{countryData.name.common}</h1>
            <img src={countryData.flags.svg} alt={countryData.flags.alt} />
          </header>
          <main>
            <div>
              <p>Region</p>
              <p>{countryData.subregion}</p>
            </div>
            <div>
              <p>Capital</p>
              <p>{countryData.capital}</p>
            </div>
            <div>
              <p>Language(s)</p>
              <div>
                {Object.entries(countryData.languages).map((language, i) => {
                  return <div key={i}>{language[1]}</div>;
                })}
              </div>
            </div>
            <div>
              <p>Area</p>
              <p>
                {locale.format(',.0f')(countryData.area)} km<sup>2</sup>
              </p>
            </div>
            <div>
              <p>Population</p>
              <p className='countryData'>
                {locale.format(',.0f')(countryData.population)}
              </p>
            </div>
            <div>
              <p>Currency(ies)</p>
              <div>
                {Object.entries(countryData.currencies).map((currency, i) => {
                  return (
                    <div
                      key={i}
                    >{`(${currency[1].symbol})${currency[1].name}`}</div>
                  );
                })}
              </div>
            </div>
            <Map latLng={countryData.latlng} />
          </main>
        </>
      )}
    </div>
  );
}
