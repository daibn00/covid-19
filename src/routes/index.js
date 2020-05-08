import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Wrapper from '../components/containerApp/index';

import Map from '../pages/Map/index';
import List from '../pages/List/index';
import CountryDetail from '../pages/DetailContry/DetailCountry';

export default function Routes() {

  return (
    <Router>
      <Switch>

          <Wrapper>
            <Route path="/" exact component={Map} />
            <Route path="/list" component={List} />
            <Route path="/detail/:code" component={CountryDetail} />
          </Wrapper>

      </Switch>
    </Router>
  );
}
