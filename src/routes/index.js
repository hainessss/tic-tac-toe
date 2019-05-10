import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Welcome from './Welcome';
import Play from './Play';
import HistoryList from './HistoryList';

const AppRoutes = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/play" component={Play} />
      <Route exact path="/history" component={HistoryList} />
    </div>
  </BrowserRouter>
);

export default AppRoutes;
