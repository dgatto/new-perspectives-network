import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Profile } from '../../components/Profile';
import { Game } from '../../components/Game';

interface CommunityProps {}

type Props = CommunityProps;

export class Community extends React.Component<Props> {
  render() {
    const platforms = {
      xbox: true,
      playStation: true,
      pc: true
    };
    return (
      <Container className="gallery-container">
        <Row>
          <div className="centered">
            <p className="header centered">Where can you connect with us?</p>
          </div>
        </Row>
        <hr className="separator" />
        <Row className="justify-content-md-center">
          <Col md={12}>
            <Game
              platforms={platforms}
              gameImage="https://drive.google.com/uc?id=1pmlBibDJ1_3SzdfD5pykIupEHePJd7ZM"
            ></Game>
            <Game
              platforms={platforms}
              gameImage="https://drive.google.com/uc?id=1pmlBibDJ1_3SzdfD5pykIupEHePJd7ZM"
            ></Game>

            <Game
              platforms={platforms}
              gameImage="https://drive.google.com/uc?id=1pmlBibDJ1_3SzdfD5pykIupEHePJd7ZM"
            ></Game>

            <Game
              platforms={platforms}
              gameImage="https://drive.google.com/uc?id=1pmlBibDJ1_3SzdfD5pykIupEHePJd7ZM"
            ></Game>

            <Game
              platforms={platforms}
              gameImage="https://drive.google.com/uc?id=1pmlBibDJ1_3SzdfD5pykIupEHePJd7ZM"
            ></Game>

            <Game
              platforms={platforms}
              gameImage="https://drive.google.com/uc?id=1pmlBibDJ1_3SzdfD5pykIupEHePJd7ZM"
            ></Game>
          </Col>
        </Row>
        <hr className="separator"></hr>
        <Row>
          <div className="content-header centered">
            <p className="header centered">A thank you to our sponsors</p>
          </div>
        </Row>
        <Row>
          <Col md={4}>
            <a href="www.google.com">
              <img
                className="image"
                src="https://drive.google.com/uc?id=1pmlBibDJ1_3SzdfD5pykIupEHePJd7ZM"
              ></img>
            </a>
          </Col>
          <Col md={4}>
            <a href="www.google.com">
              <img
                className="image"
                src="https://drive.google.com/uc?id=1pmlBibDJ1_3SzdfD5pykIupEHePJd7ZM"
              ></img>
            </a>
          </Col>
          <Col md={4}>
            <a href="www.google.com">
              <img
                className="image"
                src="https://drive.google.com/uc?id=1pmlBibDJ1_3SzdfD5pykIupEHePJd7ZM"
              ></img>
            </a>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Community;
