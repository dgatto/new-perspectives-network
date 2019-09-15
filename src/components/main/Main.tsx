import React from "react";
import { Route, Switch } from "react-router-dom";

import { Home } from "../home/Home";

interface PassedProps {}

type Props = PassedProps;

export class Main extends React.Component<Props> {
  render() {
    return (
        <Switch>
            <Route exact path='/home' component={Home}></Route>
        </Switch>
    );
  }

  componentWillUpdate(nextProps: Props) {
    return this.props !== nextProps;
  }
}

export default Main;
