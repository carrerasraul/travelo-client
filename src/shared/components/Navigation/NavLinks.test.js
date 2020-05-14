import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavLinks from './NavLinks';

const Wrapper = (props) => {
  return (
    <Switch>
      <Route>{props.children}</Route>
    </Switch>
  );
};

describe.only('<NavLinks />', () => {
  it('Renders without crashing', () => {
    shallow(
      <Wrapper>
        <NavLinks />
      </Wrapper>
    );
  });
});
