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
    const filter = wrapper.find('.form_input_filter');
    expect(div.length).toBe(1);
    expect(filter.text()).toEqual('');
  });

  it('Filter was change ', () => {
    const getFilterMock = jest.fn();
    const filterValue = '1';
    wrapper = shallow(
      <Filter getFilter={getFilterMock} filter={filterValue} />,
    );
    const filter = wrapper.find('.form_input_filter');
    filter.simulate('change');
    wrapper.update();
    expect(filter.props().value).toEqual('1');
    expect(getFilterMock).toHaveBeenCalled();
  });
});
