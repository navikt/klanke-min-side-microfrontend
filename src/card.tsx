import { Icon } from '@app/icons/icon';
import { Language } from '@app/language';
import type { Translation } from '@app/language';
import { logNavigereEvent } from '@app/utils/amplitude';
import { ChevronRightIcon } from '@navikt/aksel-icons';
import { BodyLong, HStack, type HStackProps, Heading, VStack } from '@navikt/ds-react';

interface CardProps {
  lang: Language;
  href: string;
}

export const PreviewCard = ({ lang, href }: CardProps) => (
  <Container className={getPreviewClasses()} href={href}>
    <CardContent lang={lang} />
  </Container>
);

export const Card = ({ lang, href }: CardProps) => (
  <Container href={href}>
    <CardContent lang={lang} />
  </Container>
);

interface ContainerProps {
  className?: string;
  href: string;
  children: React.ReactNode;
}

const Container = ({ className = '', href, children }: ContainerProps) => (
  <HStack
    as="a"
    href={href}
    wrap={false}
    align="center"
    className={`group cursor-pointer rounded-large bg-bg-default text-text-default shadow-xsmall hover:shadow-small ${className}`}
    onClick={() => logNavigereEvent()}
  >
    {children}
  </HStack>
);

interface CardContentProps {
  lang: Language;
}

const CardContent = ({ lang }: CardContentProps) => (
  <>
    <HStack gap="5" align="center" flexGrow="1" wrap={false}>
      <Icon className="w-14 shrink-0" />

      <VStack flexShrink="1">
        <Heading level="3" size="small" className="group-hover:underline">
          {HEADING[lang]}
        </Heading>

        <BodyLong size="medium">{DESCRIPTION[lang]}</BodyLong>
      </VStack>
    </HStack>

    <ChevronRightIcon className="h-full w-6 shrink-0 transition-transform duration-200 ease-in-out group-hover:translate-x-[3px]" />
  </>
);

const PADDING: HStackProps['padding'] = {
  xs: '4',
  sm: '4',
  md: '5',
  lg: '5',
  xl: '5',
  '2xl': '5',
};

const getPreviewClasses = () => {
  if (PADDING === undefined) {
    return '';
  }

  if (typeof PADDING === 'string') {
    return PADDING;
  }

  return `p-${PADDING.xs} ${Object.entries(PADDING)
    .map(([key, value]) => `@${key}:p-${value}`)
    .join(' ')}`;
};

const HEADING: Translation = {
  [Language.NB]: 'Mine klager og anker',
  [Language.NN]: 'Mine klager og anker',
  [Language.EN]: 'My complaints and appeals',
};

const DESCRIPTION: Translation = {
  [Language.NB]: 'Her kan du se status på dine klager og anker hos klageinstansen.',
  [Language.NN]: 'Her kan du sjå status på dine klager og anker hjå klageinstansen.',
  [Language.EN]:
    'Here you can see the status of your complaints and appeals with Nav Complaints Unit (Nav klageinstans).',
};
