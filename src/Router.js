import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignIn from './SignIn'

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <SignIn />
        </Route>
        <Route path="/tyler">
          <h1>Tee</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
