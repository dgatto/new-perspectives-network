import React from "react";
import { Route, Switch } from "react-router-dom";

import { Home } from "../home/Home";
import { About } from "../about/About";
import { Gallery } from "../gallery/Gallery";
import { Community } from "../community/Community";

interface PassedProps {}

type Props = PassedProps;

export class Main extends React.Component<Props> {
  render() {
    return (
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/about' component={About}></Route>
            <Route exact path='/gallery' component={Gallery}></Route>
            <Route exact path='/community' component={Community}></Route>
        </Switch>
    );
  }

  componentWillUpdate(nextProps: Props) {
    return this.props !== nextProps;
  }
}

export default Main;
