import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainHeader from './MainHeader';

const Wrapper = (props) => {
  return (
    <Switch>
      <Route>{props.children}</Route>
    </Switch>
  );
};

describe.only('<MainHeader />', () => {
  it('Renders without crashing', () => {
    shallow(
      <Wrapper>
        <MainHeader />
      </Wrapper>
    );
  });
});
