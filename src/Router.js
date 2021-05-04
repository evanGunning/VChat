import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignIn from './Register_Login/SignIn'
import Landing from './Landing'
import Register from './Register_Login/Register'

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <SignIn />
        </Route>
        <Route path="/userlanding">
          <Landing />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router

