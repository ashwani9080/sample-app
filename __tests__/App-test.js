/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import App from '../src/App';

const {asJSON} = render(<App />);
// const firstRender = asJSON();ya

describe('App', () => {
  describe('Rendering', () => {
    it('should render without throwing an error', () => {
      // expect(firstRender).toStrictEqual(asJSON());
    });
  });
});
