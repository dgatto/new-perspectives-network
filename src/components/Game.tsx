import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { faXbox, faPlaystation } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

/* This component is being purposed for both Community AND Gallery */

interface ProfileProps {
  gameImage: string;
  galleryLink?: string | undefined; // name of the game
  platforms?: {
    playStation: boolean;
    xbox: boolean;
    pc: boolean;
  };
}

type Props = ProfileProps;

export class Game extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <Link
        className="item"
        to={{
          pathname: `/gallery/${this.props.galleryLink}`,
          state: { gameLink: this.props.galleryLink }
        }}
      >
        <Col md={4} className="image">
          <img alt="Not found" src={this.props.gameImage} />
          <Row>
            {this.props.platforms && this.props.platforms.playStation && (
              <Col md={4} className="d-flex justify-content-center">
                <FontAwesomeIcon
                  className="icon playstation-icon"
                  icon={faPlaystation}
                ></FontAwesomeIcon>
              </Col>
            )}
            {this.props.platforms && this.props.platforms.xbox && (
              <Col md={4} className="d-flex justify-content-center">
                <FontAwesomeIcon
                  className="icon xbox-icon"
                  icon={faXbox}
                ></FontAwesomeIcon>
              </Col>
            )}
            {this.props.platforms && this.props.platforms.pc && (
              <Col md={4} className="d-flex justify-content-center">
                <a>
                  <img
                    className="icon pc-icon"
                    src="https://img.icons8.com/android/24/000000/computer.png"
                  ></img>
                </a>
              </Col>
            )}
          </Row>
        </Col>
      </Link>
    );
  }
}
