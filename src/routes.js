import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}
