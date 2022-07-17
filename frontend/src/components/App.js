import React from "react";
import Register from "./Register";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import CreateQuiz from "./CreateQuiz";
import Home from "./Home";
import TakeQuiz from "./QuizTaker/TakeQuiz";
import QuizTaker from "./QuizTaker/QuizTaker";
import ParticipantLogin from "./Participant";
import { Quizes } from "./QuizHistory/Quizes";
import Scorecard from "./Scorecard";
import ParticipantList from "./AddParticipant/ParticipantList";
import Statistic from "./Statistics/statistic"

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
            <PublicRoute exact path="/takequiz" component={TakeQuiz} />
            <PublicRoute exact path="/stats" component={Statistic} />
            <PublicRoute exact path="/login" component={Login} />
            <PrivateRoute path="/createquiz" component={CreateQuiz} />
            <PublicRoute exact path="/" component={Home} />
            <PublicRoute
              exact
              path="/forgot-password"
              component={ForgotPassword}
            />
            <PublicRoute
              exact
              path="/ParticipantLogin"
              component={ParticipantLogin}
            />
            <PublicRoute exact path="/quizes" component={Quizes} />
            <PublicRoute path="/attempt" component={QuizTaker} />
            <PublicRoute exact path="/scorecard" component={Scorecard} />
            <PublicRoute
              exact
              path="/addparticipant"
              component={ParticipantList}
            />
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
