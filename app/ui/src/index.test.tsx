import React from 'react';
import { shallow } from 'enzyme';
import { sum } from './sum';

describe('App test - ', () => {
  test('adds 1 + 2 to equal 3', () => {
    const test = shallow(<div />);
    console.log(test);
    expect(sum(1, 2)).toBe(3);
  });

});
