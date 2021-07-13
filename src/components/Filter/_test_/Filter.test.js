import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { Filter } from '../Filter';

const props = {
  task: {
    items: [],
    filter: '',
    isLoading: false,
  },
  getFilter: () => {},
};

describe('Filter Components Utin Test  ', () => {
  let wrapper;
  it('Filter should mount ', () => {
    wrapper = shallow(<Filter />);
    const div = wrapper.find('.filter_search');
    const input = wrapper.find('.form_input');
    expect(div.length).toBe(1);
    expect(input.text()).toEqual('');
  });

  it('Filter mount', () => {
    wrapper = shallow(<Filter {...props} />);
    const div = wrapper.find('.filter_search');
    const input = wrapper.find('.form_input');
    expect(div.length).toBe(1);
    expect(input.text()).toEqual('');
  });

  it('Filter was change ', () => {
    const newProps = {
      ...props,
      task: {
        ...props.task,
        items: [
          {
            name: 'Task1',
            description: '1222',
            date_created: '12:07:2021 10:33:22',
            status: 'todo',
            priority: false,
            id: 1,
          },
          {
            name: 'Test',
            description: 'fhfghf',
            date_created: '12:07:2021 10:33:22',
            status: 'todo',
            priority: false,
            id: 3,
          },
        ],
        filter: 'test',
      },
    };
    wrapper.shallow(<Filter {...newProps} />);
    const input = wrapper.find('.form_input');
    console.log(input.debug());
  });
});
