import "./App.css";

import React from "react";
import { BrowserRouter, Redirect } from "react-router-dom";

import { Main } from "../pages/main/Main";
import { Navigation } from "../pages/navigation/Navigation";

export class App extends React.Component {
  state = {
    url: "",
  }

  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <Navigation url={this.state.url}/>
          <Main/>
          <Redirect to='/home'/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;