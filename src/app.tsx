import { TimelineItem } from '@app/components/timeline-item';
import useTranslate from '@app/language/use-translate';
import { FileParagraphIcon, FileTextIcon } from '@navikt/aksel-icons';
import { Box, Button, HStack, Heading, Tag, VStack } from '@navikt/ds-react';

export const App = () => (
  <Box
    borderRadius="xlarge"
    background="bg-default"
    shadow="xsmall"
    padding={{
      xs: '4',
      lg: '5',
    }}
  >
    <Heading level="3" size="small" spacing>
      <HStack gap="2" align="center">
        {useTranslate('klage')}
        <Tag variant="info-moderate" size="small">
          Foreldrepenger
        </Tag>
      </HStack>
    </Heading>

    <VStack as="ul" gap="4" margin="0" padding="0">
      <TimelineItem
        title="Klagen din ble mottatt av Nav Klageinstans"
        date="2021-01-01"
        icon={<FileTextIcon fontSize={24} />}
      >
        <Button as="a" variant="tertiary" size="small" href="https://klage.intern.dev.nav.no/" target="_blank">
          Se innsendt klage
        </Button>
        <Button as="a" variant="tertiary" size="small" href="https://klage.intern.dev.nav.no/" target="_blank">
          Ettersend dokumentasjon
        </Button>
      </TimelineItem>

      <TimelineItem
        title="Klagen din ble ferdig behandlet av Nav Klageinstans"
        date="2022-02-02"
        icon={<FileTextIcon fontSize={24} />}
        text="Nav Klageinstans har behandlet klagen din og sendt saken tilbake til Nav for videre oppfølging."
      />

      <TimelineItem
        title="Vil du anke?"
        date="2022-03-03"
        icon={<FileParagraphIcon fontSize={24} />}
        text="Vil du anke, så må du forte deg å gjøre det innen fristen."
      >
        <Button variant="primary" size="small">
          Ank nå før det er for sent
        </Button>
      </TimelineItem>

      <TimelineItem
        title="Svar på anke"
        date="2022-04-04"
        icon={<FileParagraphIcon fontSize={24} />}
        text="Innen 4 uker etter at anken er mottatt, vil Nav Klageinstans sende saken tilbake til Nav for videre oppfølging."
      />
    </VStack>
  </Box>
);
