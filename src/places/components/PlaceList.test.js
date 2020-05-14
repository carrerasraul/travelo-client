import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PlaceList from './PlaceList';

const Wrapper = (props) => {
  return (
    <Switch>
      <Route>{props.children}</Route>
    </Switch>
  );
};

describe.only('<PlaceList />', () => {
  it('Renders without crashing', () => {
    shallow(
      <Wrapper>
        <PlaceList />
      </Wrapper>
    );
  });
});
