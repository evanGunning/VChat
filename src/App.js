import './App.css'
import SignIn from './SignIn'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <SignIn />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
