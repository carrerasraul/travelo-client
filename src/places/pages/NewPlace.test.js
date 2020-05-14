import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NewPlace from './NewPlace';

const Wrapper = (props) => {
  return (
    <Switch>
      <Route>{props.children}</Route>
    </Switch>
  );
};

describe.only('<NewPlace />', () => {
  it('Renders without crashing', () => {
    shallow(
      <Wrapper>
        <NewPlace />
      </Wrapper>
    );
  });
});
