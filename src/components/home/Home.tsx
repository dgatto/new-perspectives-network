import React from "react";

interface HomeProps {};

type Props = HomeProps;

export class Home extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>New Perspectives Network</p>
      </div>
    );
  }
}

export default Home;
