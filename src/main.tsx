import '@navikt/ds-css';
import '@app/index.css';
import { Microfrontend } from '@app/microfrontend';
import { Box, HStack, Tag, VStack } from '@navikt/ds-react';
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
  <VStack as={Box} gap="4" padding="8">
    <Tag variant="neutral-moderate">
      {name} ({width}px)
    </Tag>

    <Box width={`${width}px`}>
      <Microfrontend />
    </Box>
  </VStack>
);

root.render(
  <StrictMode>
    <main>
      <HStack gap="0" align="start" justify="center">
        <Preview name="Mobil retningslinje" width={288} />

        <Preview name="Desktop retningslinje" width={468} />

        <Preview name="Desktop maks" width={912} />
      </HStack>
    </main>
  </StrictMode>,
);
