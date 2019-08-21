import React from 'react';
import AddItemPage from './AddItemPage';
import ListItemsPage from './ListItemsPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <h1>Hello</h1>
      <Switch>
        <Route path="/" exact component={AddItemPage} />
        <Route path="/items" component={ListItemsPage} />
      </Switch>
    </Router>
  );
}

export default App;
