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
    const filter = wrapper.find('.form_input');
    expect(div.length).toBe(1);
    expect(filter.text()).toEqual('');
  });

  it('Filter was change ', () => {
    const getFilterMock = jest.fn();
    const newProps = {
      ...props,
      task: {
        ...props.task,
        filter: '1',
      },
      getFilter: getFilterMock,
    };
    wrapper = shallow(<Filter {...newProps} />);
    const filter = wrapper.find('.form_input');
    filter.simulate('change');
    wrapper.update();
    console.log(wrapper.debug());
    expect(filter.text()).toEqual('1');
    expect(getFilterMock).toHaveBeenCalledWith(1);
  });
});
