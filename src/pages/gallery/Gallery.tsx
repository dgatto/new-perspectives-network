import React from "react";

interface HomeProps {};

type Props = HomeProps;

export class Gallery extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>New Perspectives Network</p>
        <img src="https://drive.google.com/uc?id=1pmlBibDJ1_3SzdfD5pykIupEHePJd7ZM"/>
      </div>
    );
  }
}

export default Gallery;
