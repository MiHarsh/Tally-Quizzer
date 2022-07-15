import React from "react"
import Register from "./Register"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import PublicRoute from "./PublicRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import About from "./About"
import Home from "./Home"

function App() {
  return (
      <>
          <Router>
            <AuthProvider>             
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute path="/update-profile" component={UpdateProfile} />
                <PublicRoute path="/register" component={Register} />
                <PublicRoute path="/login" component={Login} />
                <PublicRoute path="/about" component={About} />
                <PublicRoute path="/" component={Home} />
                <PublicRoute path="/forgot-password" component={ForgotPassword} />
              </Switch>
            </AuthProvider>
          </Router>
      </>
  )
}

export default App
