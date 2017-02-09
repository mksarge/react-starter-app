import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Footer from '../../app/components/Footer';
import config from '../../app/config';

describe('Footer component', () => {
  const wrapper = shallow(<Footer />);

  it('renders a link to GitHub', () => {
    expect(wrapper.contains(
      <a href={config.github}>GitHub</a>
    )).to.equal(true);
  });
});
