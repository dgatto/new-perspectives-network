import React from 'react';

interface AboutProps {}

type Props = AboutProps;

export class About extends React.Component<Props> {
  render() {
    return (
      <div>
        <p className="header">Welcome to New Perspectives Network</p>
      </div>
    );
  }
}

export default About;
