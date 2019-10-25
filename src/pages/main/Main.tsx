import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from '../home/Home';
import { About } from '../about/About';
import { Community } from '../community/Community';
import { Gallery } from '../gallery/Gallery';
import { Vision } from '../vision/Vision';
import { GalleryItem } from '../gallery/GalleryItem';

interface PassedProps {}

type Props = PassedProps;

export class Main extends React.Component<Props> {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/community" component={Community}></Route>
        <Route exact path="/gallery" component={Gallery}></Route>
        <Route exact path="/vision" component={Vision}></Route>
        {/* <Route
          path="/gallery/:gameName"
          render={state => (
            // <MyGalleryItem {...state} galleryLink={this.props.galleryItem} />
          )} */}
        {/* ></Route> */}
      </Switch>
    );
  }

  componentWillUpdate(nextProps: Props) {
    return this.props !== nextProps;
  }
}

export default Main;
