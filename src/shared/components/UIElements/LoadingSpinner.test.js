import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoadingSpinner from './LoadingSpinner';

const Wrapper = (props) => {
  return (
    <Switch>
      <Route>{props.children}</Route>
    </Switch>
  );
};

describe.only('<LoadingSpinner />', () => {
  it('Renders without crashing', () => {
    shallow(
      <Wrapper>
        <LoadingSpinner />
      </Wrapper>
    );
  });
});
