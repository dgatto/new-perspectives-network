import React from "react";

interface HomeProps {};

type Props = HomeProps;

export class Home extends React.Component<Props> {
  render() {
    return (
      <div>
        <p className="header">Welcome to New Perspectives Network</p>
      </div>
    );
  }
}

export default Home;
