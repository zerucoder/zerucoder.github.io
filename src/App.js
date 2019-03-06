import React, { Component } from "react";
import Dashboard from "./components/dashboard/Dashboard";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import ProjectDetails from "./components/project/ProjectDetails";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import CreateProject from "./components/project/CreateProject";
import ChatRoot from "./components/chat/ChatRoot";

import Main_Quiz from "./components/Quiz_new/Main";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/createproject" component={CreateProject} />
            <Route path="/quiznew" component={Main_Quiz} />
            <Route path="/chat" component={ChatRoot} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
