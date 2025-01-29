import {getAmplitudeInstance} from "@navikt/nav-dekoratoren-moduler";

const logger = getAmplitudeInstance("dekoratoren");

export const logNavigereEvent = () => logger("navigere", {komponent: 'mine-klager-microfrontend'});