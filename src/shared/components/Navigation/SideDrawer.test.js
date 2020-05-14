import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SideDrawer from './SideDrawer';

const Wrapper = (props) => {
  return (
    <Switch>
      <Route>{props.children}</Route>
    </Switch>
  );
};

describe.only('<SideDrawer />', () => {
  it('Renders without crashing', () => {
    shallow(
      <Wrapper>
        <SideDrawer />
      </Wrapper>
    );
  });
});
