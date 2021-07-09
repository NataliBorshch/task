import * as React from 'react';
import { mount, shallow } from 'enzyme';
import Task from '../Task';

describe('Task Components Utin Test  ', () => {
  let wrapper;
  const props = [
    {
      name: 'Natali',
      description: 'rtyhrty',
      date_created: '2021-07-03T16:14:12.468Z',
      status: 'todo',
      priority: false,
      id: 6,
    },
    {
      name: 'Natali Borshch',
      description: 'fhfh',
      date_created: '2021-07-03T16:14:12.468Z',
      status: 'todo',
      priority: false,
      id: 7,
    },
  ];

  it('Task Component render witch children ', () => {
    wrapper = shallow(<Task {...props} />);
    const tadleItem = wrapper.find('th');
    expect(tadleItem.length).toBe(7);
  });
});
