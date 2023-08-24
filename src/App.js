import './App.css'

// These are the lists used in the application. You can move them to any component needed.
import {Route, Switch, Redirect} from 'react-router-dom'
import AboutJobItem from './components/AboutJobItem'
import AllJobs from './components/AllJobs'
import NotFound from './components/NotFound'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/jobs" component={AllJobs} />
    <ProtectedRoute exact path="/jobs/:id" component={AboutJobItem} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
