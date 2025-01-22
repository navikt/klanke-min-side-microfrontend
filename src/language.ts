import { useEffect, useState } from 'react';

export enum Language {
  NB = 'nb',
  NN = 'nn',
  EN = 'en',
}

export type Translation = Record<Language, string>;

const LANGUAGES = Object.values(Language);
export const DEFAULT_LANGUAGE = Language.NB;
const LANGUAGE_EVENT_NAME = 'language';
const DECORATOR_LANGUAGE_COOKIE = 'decorator-language';

const isLanguage = (value: string): value is Language => LANGUAGES.some((l) => l === value);

export const useLanguage = () => {
  const [language, setLanguage] = useState(parseDecoratorLanguage());

  useEffect(() => {
    const handleLanguageEvent = () => setLanguage(parseDecoratorLanguage());

    window.addEventListener(LANGUAGE_EVENT_NAME, handleLanguageEvent);

    return () => {
      window.removeEventListener(LANGUAGE_EVENT_NAME, handleLanguageEvent);
    };
  }, []);

  return language;
};

const parseDecoratorLanguage = (): Language => {
  const cookies = document.cookie.split(';');

  for (const cookie of cookies) {
    const [key, value] = cookie.trim().split('=');

    if (key === DECORATOR_LANGUAGE_COOKIE && value !== undefined && isLanguage(value)) {
      return value;
    }
  }

  return DEFAULT_LANGUAGE;
};
