import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { CountryCard } from '../components/CountryCard';
import { Search } from '../components/Search';
import { CountryProvider } from '../contexts/CountryContext';
import api, { useFetch } from '../services/api';
import styles from '../styles/pages/Home.module.css';

interface HomeProps {
  data: Array<{ name: string }>;
}

export default function Home(props: HomeProps) {
  return (
    <CountryProvider data={props.data}>
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

export const getServerSideProps: GetServerSideProps = async () => {
  // const { data } = useFetch(``);

  const response = await api.get('/all?fields=name');

  return { props: { data: response.data } };
};
