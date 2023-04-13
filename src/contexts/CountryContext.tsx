import { createContext, ReactNode, useState } from 'react';
import api from '../services/api';

interface Country {
  name: { common: string };
  flags: { png: string; svg: string; alt: string };
  subregion: string;
  capital: string;
  languages: Object;
  area: number;
  population: number;
  currencies: Object;
  latlng: Array<Number>;
}

interface CountryContextData {
  data: Array<{ name: { common: string } }>;
  countryData: Country;
  loadCountryData: (countryName: string) => void;
}

interface CountryProviderProps {
  children: ReactNode;
  data: Array<{ name: { common: string } }>;
}

export const CountryContext = createContext({} as CountryContextData);

export function CountryProvider({ children, data }: CountryProviderProps) {
  const [countryData, setCountryData] = useState<Country>(null);

  async function loadCountryData(countryName: string) {
    const [data] = (await api.get(`/name/${countryName}?fullText=true`)).data;

    console.log(data);

    const {
      name,
      flags,
      subregion,
      capital,
      languages,
      area,
      population,
      currencies,
      latlng,
    } = data;

    setCountryData({
      name,
      flags,
      subregion,
      capital,
      languages,
      area,
      population,
      currencies,
      latlng,
    });
  }

  return (
    <CountryContext.Provider value={{ data, countryData, loadCountryData }}>
      {children}
    </CountryContext.Provider>
  );
}
