import React from "react";
import Register from "./Register";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import CreateQuiz from "./CreateQuiz";
import Home from "./Home";
import StudentLogin from "./StudentLogin";
import { Quizes } from "./Quizes";
import QuizTaker from "./QuizTaker/QuizTaker";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute
              exact
              path="/update-profile"
              component={UpdateProfile}
            />
            <PublicRoute exact path="/register" component={Register} />
            <PublicRoute exact path="/login" component={Login} />
            <PrivateRoute path="/createquiz" component={CreateQuiz} />
            <PublicRoute exact path="/" component={Home} />
            <PublicRoute
              exact
              path="/forgot-password"
              component={ForgotPassword}
            />
            <PublicRoute exact path="/studentLogin" component={StudentLogin} />
            <PublicRoute exact path="/quizes" component={Quizes} />
            <Route path="/attempt" component={QuizTaker} />
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
