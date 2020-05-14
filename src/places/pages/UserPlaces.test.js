import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import UserPlaces from './UserPlaces';

const Wrapper = (props) => {
  return (
    <Switch>
      <Route>{props.children}</Route>
    </Switch>
  );
};

describe.only('<UserPlaces />', () => {
  it('Renders without crashing', () => {
    shallow(
      <Wrapper>
        <UserPlaces />
      </Wrapper>
    );
  });
});
