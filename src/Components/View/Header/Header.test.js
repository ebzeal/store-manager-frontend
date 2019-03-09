import React from 'react';
import { shallow } from 'enzyme';
import PageHeader from './Header';

describe('<PageHeader />', () => {
  const wrapper = shallow(<PageHeader />);

  it('should render succesfully', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
