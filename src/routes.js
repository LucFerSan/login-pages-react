import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Signup from './pages/Signup';
import Signin from './pages/Signin';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
      </Switch>
    </BrowserRouter>
  );
}
