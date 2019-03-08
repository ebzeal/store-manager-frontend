import React from 'react';
import { shallow } from 'enzyme';
import AdminHeaderResponsive from './AdminHeaderResponsive';

describe('<MakeHeaderResponsive />', () => {
  const wrapper = shallow(<AdminHeaderResponsive />);

  it('should render succesfully', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
