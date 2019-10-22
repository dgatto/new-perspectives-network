import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {
  faTwitch,
  faYoutube,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ProfileProps {
  userImage: string;
  socialMediaLinks?: {
    twitch?: string;
    twitter?: string;
    youtube?: string;
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
          <Col md={4} className="d-flex justify-content-center">
            <a
              href={
                this.props.socialMediaLinks &&
                this.props.socialMediaLinks.twitch
              }
            >
              <FontAwesomeIcon
                className="icon twitch-icon"
                icon={faTwitch}
              ></FontAwesomeIcon>
            </a>
          </Col>
          <Col md={4} className="d-flex justify-content-center">
            <a
              href={
                this.props.socialMediaLinks &&
                this.props.socialMediaLinks.youtube
              }
            >
              <FontAwesomeIcon
                className="icon youtube-icon"
                icon={faYoutube}
              ></FontAwesomeIcon>
            </a>
          </Col>
          <Col md={4} className="d-flex justify-content-center">
            <a
              href={
                this.props.socialMediaLinks &&
                this.props.socialMediaLinks.youtube
              }
            >
              <FontAwesomeIcon
                className="icon twitter-icon"
                icon={faTwitter}
              ></FontAwesomeIcon>
            </a>
          </Col>
        </Row>
      </Col>
    );
  }
}
