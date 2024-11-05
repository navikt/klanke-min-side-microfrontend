import { type Language, LanguageContext } from '@app/language/provider';
import { useContext } from 'react';

const nb = {
  klage: 'Klage',
  anke: 'Anke',
};

type Translations = typeof nb;

const nn: Translations = {
  klage: 'Klage',
  anke: 'Anke',
};

const en: Translations = {
  klage: 'Complaint',
  anke: 'Appeal',
};

const languages: Record<Language, Translations> = { nb, nn, en };

export default function useTranslate(id: keyof Translations): string {
  const language = useContext(LanguageContext);

  return languages[language][id];
}
