import React from 'react';
import Col from 'react-bootstrap/Col';

interface ProfileProps {
  userImage: string;
  socialMediaLinks?: {
    twitch: string;
    twitter: string;
    youtube: string;
  };
}

type Props = ProfileProps;

export class Profile extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <Col md={4} className="image">
        <img alt="Not found" src={this.props.userImage} />
      </Col>
    );
  }
}
