import React from 'react';
import { render, screen } from '@testing-library/react';
import { Toggle } from './Toggle';

const setup = (props?: object) => render(<Toggle checked={false} onChange={() => {}} {...props} />);

const getComponent = () => screen.getByTestId('ui-atom-input-toggle');

describe('Basic Rendering', () => {
  test('Component renders', () => {
    setup();

    expect(getComponent()).toBeInTheDocument();
  });

  test('Component is not disabled by default', () => {
    setup();

    expect(getComponent()).not.toBeDisabled();
  });

  test('Component has no label by default', () => {
    const { container } = setup();

    expect(container.getElementsByClassName('euiSwitch__label')[0]).toBeEmptyDOMElement();
  });

  test('Component is large by default', () => {
    const { container } = setup();

    expect(container.firstChild).not.toHaveClass('euiSwitch--compressed');
  });
});

describe('Conditional Rendering', () => {
  describe('Size prop', () => {
    test('If `size="l"`, component is large', () => {
      const { container } = setup({ size: 'l' });

      expect(container.firstChild).not.toHaveClass('euiSwitch--compressed');
    });

    test('If `size="s"`, component is small', () => {
      const { container } = setup({ size: 's' });

      expect(container.firstChild).toHaveClass('euiSwitch--compressed');
    });
  });
});
