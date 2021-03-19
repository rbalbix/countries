import Head from 'next/head';
import { CountryCard } from '../components/CountryCard';
import { Search } from '../components/Search';
import { CountryProvider } from '../contexts/CountryContext';
import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <CountryProvider>
      <div className={styles.container}>
        <Head>
          <title>Countries</title>
        </Head>

        <section>
          <div>
            <Search />
            <CountryCard />
          </div>
        </section>
      </div>
    </CountryProvider>
  );
}
