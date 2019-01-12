import 'jest-dom/extend-expect';
import React from 'react';
import { render, cleanup } from 'react-testing-library';

import Button from './Button';

afterEach(cleanup);

describe('Button', () => {
  it('should render Button with children', () => {
    const { getByText } = render(<Button>Button text</Button>);

    expect(getByText('Button text')).toBeTruthy();
  });
});