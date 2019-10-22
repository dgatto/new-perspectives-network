import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { faXbox, faPlaystation } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ProfileProps {
  gameImage: string;
  platforms: {
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
      <Col md={4} className="image">
        <img alt="Not found" src={this.props.gameImage} />
        <Row>
          {this.props.platforms.playStation && (
            <Col md={4} className="d-flex justify-content-center">
              <FontAwesomeIcon
                className="icon playstation-icon"
                icon={faPlaystation}
              ></FontAwesomeIcon>
            </Col>
          )}
          {this.props.platforms.xbox && (
            <Col md={4} className="d-flex justify-content-center">
              <FontAwesomeIcon
                className="icon xbox-icon"
                icon={faXbox}
              ></FontAwesomeIcon>
            </Col>
          )}
          {this.props.platforms.pc && (
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
    );
  }
}
