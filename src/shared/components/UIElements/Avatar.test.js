import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Avatar from './Avatar';

const Wrapper = (props) => {
  return (
    <Switch>
      <Route>{props.children}</Route>
    </Switch>
  );
};

describe.only('<Avatar />', () => {
  it('Renders without crashing', () => {
    shallow(
      <Wrapper>
        <Avatar />
      </Wrapper>
    );
  });
});
