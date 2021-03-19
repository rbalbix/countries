import { createContext, ReactNode, useState } from 'react';
import api from '../services/api';

interface Country {
  name: string;
  flag: string;
  capital: string;
  officialLanguage: string;
  area: number;
  population: number;
  currency: string;
}

interface CountryContextData {
  countryData: Country;
  loadCountryData: (countryName: string) => void;
}

interface CountryProviderProps {
  children: ReactNode;
}

export const CountryContext = createContext({} as CountryContextData);

export function CountryProvider({ children }: CountryProviderProps) {
  const [countryData, setCountryData] = useState<Country>(null);

  async function loadCountryData(countryName: string) {
    const [data] = (await api.get(`/name/${countryName}`)).data;

    const {
      name,
      flag,
      capital,
      languages,
      area,
      population,
      currencies,
    } = data;
    const [language] = languages;
    const [currency] = currencies;

    setCountryData({
      name,
      flag,
      capital,
      officialLanguage: language.name,
      area,
      population,
      currency: currency.name,
    });
  }

  return (
    <CountryContext.Provider value={{ countryData, loadCountryData }}>
      {children}
    </CountryContext.Provider>
  );
}
