import { render } from '@testing-library/react';
import type { ReactElement } from 'react';

const customRender = (ui: ReactElement, options = {}) => render(ui, options);

export { default as userEvent } from '@testing-library/user-event';
export * from '@testing-library/react';
export { customRender as render };
