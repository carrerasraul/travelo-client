import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import UsersList from './UsersList';

const Wrapper = (props) => {
  return (
    <Switch>
      <Route>{props.children}</Route>
    </Switch>
  );
};

describe.only('<UsersList />', () => {
  it('Renders without crashing', () => {
    shallow(
      <Wrapper>
        <UsersList />
      </Wrapper>
    );
  });
});
