import { PreviewCard } from '@app/card';
import '@app/index.css';
import { Language, type Translation } from '@app/language';
import { Box, HStack, Heading, Tag, VStack } from '@navikt/ds-react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');

if (!container) {
  throw new Error('No container found');
}

const root = createRoot(container);

interface PreviewProps {
  name: string;
  width: number;
}

const Preview = ({ name, width }: PreviewProps) => (
  <VStack gap="0" align="center" justify="center">
    <Heading level="1" size="xsmall" spacing className="flex gap-2">
      <span>{name}</span>

      <Tag size="small" variant="info-filled">
        {width}px
      </Tag>
    </Heading>

    <HStack gap="4" align="start" justify="center">
      {Object.values(Language).map((lang) => (
        <VStack key={lang} as={Box} gap="2" width={`${width}px`} className="@container">
          <Tag size="small" variant="success" className="mx-auto w-fit">
            {LANGUAGE_LABELS[lang]}
          </Tag>

          <PreviewCard lang={lang} href="/" />
        </VStack>
      ))}
    </HStack>
  </VStack>
);

root.render(
  <StrictMode>
    <main className="flex h-full w-full flex-col gap-24 p-4">
      <Preview name="Mobil retningslinje" width={288} />

      <Preview name="Desktop retningslinje" width={468} />

      <Preview name="Desktop maks" width={912} />
    </main>
  </StrictMode>,
);

const LANGUAGE_LABELS: Translation = {
  [Language.NB]: 'Bokmål',
  [Language.NN]: 'Nynorsk',
  [Language.EN]: 'English',
};
