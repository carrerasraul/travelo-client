import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PlaceItem from './PlaceItem';

const Wrapper = (props) => {
  return (
    <Switch>
      <Route>{props.children}</Route>
    </Switch>
  );
};

describe.only('<PlaceItem />', () => {
  it('Renders without crashing', () => {
    shallow(
      <Wrapper>
        <PlaceItem />
      </Wrapper>
    );
  });
});
