// import "./App.css";
import React from "react";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/about' component={About} />
        <Route path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
