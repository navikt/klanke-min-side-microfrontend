import { App } from '@app/app';
import { LanguageProvider } from '@app/language/provider';

export const Microfrontend = () => (
  <LanguageProvider>
    <App />
  </LanguageProvider>
);

export default Microfrontend;
