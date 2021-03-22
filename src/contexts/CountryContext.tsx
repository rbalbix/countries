import { createContext, ReactNode, useState } from 'react';
import api from '../services/api';

interface Country {
  name: string;
  flag: string;
  subregion: string;
  capital: string;
  officialLanguage: string;
  area: number;
  population: number;
  currency: string;
  latlng: Array<Number>;
}

interface CountryContextData {
  data: Array<{ name: string }>;
  countryData: Country;
  loadCountryData: (countryName: string) => void;
}

interface CountryProviderProps {
  children: ReactNode;
  data: Array<{ name: string }>;
}

export const CountryContext = createContext({} as CountryContextData);

export function CountryProvider({ children, data }: CountryProviderProps) {
  const [countryData, setCountryData] = useState<Country>(null);

  async function loadCountryData(countryName: string) {
    const [data] = (await api.get(`/name/${countryName}?fullText=true`)).data;

    const {
      name,
      flag,
      subregion,
      capital,
      languages,
      area,
      population,
      currencies,
      latlng,
    } = data;
    const [language] = languages;
    const [currency] = currencies;

    setCountryData({
      name,
      flag,
      subregion,
      capital,
      officialLanguage: language.name,
      area,
      population,
      currency: currency.name,
      latlng,
    });
  }

  return (
    <CountryContext.Provider value={{ data, countryData, loadCountryData }}>
      {children}
    </CountryContext.Provider>
  );
}
