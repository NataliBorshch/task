import * as React from 'react';
import { shallow } from 'enzyme';
import TaskPage from '../TaskPage';
import Filter from '../../Filter';
import ListTask from '../../ListTask';
import TransitionsModal from '../../Modal';

describe('TaskPage Components Utin Test  ', () => {
  let wrapper;
  it('TaskPage render  ', () => {
    wrapper = shallow(<TaskPage />);
    const filter = wrapper.find(Filter);
    const listTask = wrapper.find(ListTask);
    const modal = wrapper.find(TransitionsModal);

    expect(filter).toBeDefined();
    expect(listTask).toBeDefined();
    expect(modal).toBeDefined();
  });
});
