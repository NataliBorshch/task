import * as React from 'react';
import { mount, shallow } from 'enzyme';
import TaskPage from './TaskPage';
import { Provider } from 'react-redux';

const props = {
  getTask: () => {},
};

describe('TaskPage Unit Test ', () => {
  const newTaskPage = shallow(
    <Provider store={props}>
      <TaskPage props={props} />
    </Provider>,
  );
  const container = newTaskPage.find('.task_page');

  expect(container).toHaveLength(0);
});
