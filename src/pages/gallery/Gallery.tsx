import React from "react";

interface GalleryProps {};

type Props = GalleryProps;

export class Gallery extends React.Component<Props> {
  render() {
    return (
      <div>
        <p className="header">Welcome to New Perspectives Network</p>
      </div>
    );
  }
}

export default Gallery;
