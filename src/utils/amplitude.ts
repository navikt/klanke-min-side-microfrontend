import { init, track } from '@amplitude/analytics-browser';

export const initAmplitude = () => {
  init('default', undefined, {
    useBatch: true,
    serverUrl: 'https://amplitude.nav.no/collect-auto',
    ingestionMetadata: {
      sourceName: window.location.toString(),
    },
  });
};

// Default er at navnet på appen blir benyttet ved replace av "mine-klager-microfrontend"
export const logNavigereEvent = () => {
  track('navigere', { komponent: 'mine-klager-microfrontend' });
};
