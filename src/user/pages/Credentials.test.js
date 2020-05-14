import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Credentials from './Credentials';

const Wrapper = (props) => {
  return (
    <Switch>
      <Route>{props.children}</Route>
    </Switch>
  );
};

describe.only('<Credentials />', () => {
  it('Renders without crashing', () => {
    shallow(
      <Wrapper>
        <Credentials />
      </Wrapper>
    );
  });
});
