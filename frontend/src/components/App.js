import React from "react";
import Register from "./Register";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import CreateQuiz from "./CreateQuiz";
import Home from "./Home";
import ParticipantLogin from "./Participant";
import {Quizes }from "./Quizes"
import Scorecard from "./Scorecard";
import ParticipantList from "./AddParticipant/ParticipantList";
import Featurespage from './Features/Featurespage'


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
            <PublicRoute exact path="/createquiz" component={CreateQuiz} />
            <PublicRoute exact path="/" component={Home} />
            <PublicRoute
              exact
              path="/forgot-password"
              component={ForgotPassword}
            />
            <PublicRoute exact path="/ParticipantLogin" component={ParticipantLogin} />
            <PublicRoute exact path="/quizes" component={Quizes} />
            <PublicRoute exact path="/scorecard" component={Scorecard} />
            <PublicRoute exact path="/addparticipant" component={ParticipantList} />
            <PublicRoute exact path="/features" component={Featurespage} />
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
