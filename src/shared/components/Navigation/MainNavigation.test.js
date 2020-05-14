import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainNavigation from './MainNavigation';

const Wrapper = (props) => {
  return (
    <Switch>
      <Route>{props.children}</Route>
    </Switch>
  );
};

describe.only('<MainNavigation />', () => {
  it('Renders without crashing', () => {
    shallow(
      <Wrapper>
        <MainNavigation />
      </Wrapper>
    );
  });
});
