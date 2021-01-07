import Home from './Home';
import Orders from './Orders';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Routes() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/orders">
          <Orders />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
