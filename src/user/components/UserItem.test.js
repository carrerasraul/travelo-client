import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import UserItem from './UserItem';

const Wrapper = (props) => {
  return (
    <Switch>
      <Route>{props.children}</Route>
    </Switch>
  );
};

describe.only('<UserItem />', () => {
  it('Renders without crashing', () => {
    shallow(
      <Wrapper>
        <UserItem />
      </Wrapper>
    );
  });
});
