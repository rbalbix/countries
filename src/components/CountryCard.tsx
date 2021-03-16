import styles from '../styles/components/CountryCard.module.css';

export function CountryCard() {
  return (
    <div className={styles.countryCardContainer}>
      <header>
        <h1>Brasil</h1>
        <img src='/country-flag.svg' alt='Country Flag' />
      </header>
      <main>
        <div>
          <p className='countryLabel'>Capital</p>
          <p className='countryData'>Brasília</p>
        </div>
        <div>
          <p className='countryLabel'>Official Language</p>
          <p className='countryData'>Português</p>
        </div>
        <div>
          <p className='countryLabel'>Area</p>
          <p className='countryData'>
            8,515,767 km<sup>2</sup>
          </p>
        </div>
        <div>
          <p className='countryLabel'>Population</p>
          <p className='countryData'>206,135,893</p>
        </div>
      </main>
    </div>
  );
}
