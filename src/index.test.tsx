import * as React from 'react';
import { render } from '@testing-library/react';
import { RHFError } from './index';

describe('React Hook Form Error', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <RHFError
        errors={{ test: { type: 'test' } }}
        as={<span />}
        name="test"
      />,
    );

    expect(asFragment).toMatchSnapshot();
  });
});
