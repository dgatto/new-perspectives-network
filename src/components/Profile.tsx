import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {
  faTwitch,
  faFacebook,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        <Row>
          <Col md={4}>
            <FontAwesomeIcon icon={faTwitch}></FontAwesomeIcon>
          </Col>
          <Col md={4}>
            <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
          </Col>
          <Col md={4}>
            <FontAwesomeIcon icon={faTwitch}></FontAwesomeIcon>
          </Col>
        </Row>
      </Col>
    );
  }
}
