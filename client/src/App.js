import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { makeStyles } from '@material-ui/styles';
import { Container } from '@material-ui/core';

import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import PrivateRoute from "./components/PrivateRoute";
import "./styles.scss";

const useStyles = makeStyles({
  Container: {
    background: 'white',
    justifyContent: 'right',
    alignItems: 'center',
    borderRadius: 2,
    padding: 20,
  },
})

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className="App">
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <Switch>
          <PrivateRoute path="/protected" component={BubblePage} />
          <Container className={classes.Container}>
            <Route exact path="/" component={Login} />
          </Container>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
