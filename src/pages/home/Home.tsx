import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import ReactPlayer from 'react-player';

interface HomeProps {}

type Props = HomeProps;

export class Home extends React.Component<Props> {
  render() {
    return (
      <Container className="welcome-container">
        <Row>
          <div className="centered">
            <p className="header centered">
              Welcome to New Perspectives Network
            </p>
          </div>
        </Row>
        <hr className="header-separator separator" />
        <Row>
          <div className="home-content centered">
            <p className="paragraph-content">
              <span className="red">Who we are: </span>New Perspectives is a
              blah blah blah lets keep this short because we’re already gonna
              have a whole page about it.
            </p>
          </div>
        </Row>
        <Row>
          <Button
            variant="outline-primary"
            className="centered learn-more-button"
          >
            Want to learn more about our team?
          </Button>
        </Row>
        <Row>
          <div className="content-header centered">
            <p className="header centered">
              Here's the type of content you'll see at New Perspectives
            </p>
          </div>
        </Row>
        <Row className="community-content-row">
          <Col md={4} className="image">
            <img
              alt="Not found"
              src="https://drive.google.com/uc?id=1pmlBibDJ1_3SzdfD5pykIupEHePJd7ZM"
            />
          </Col>
          <Col md={4} className="image">
            <img
              alt="Not found"
              src="https://drive.google.com/uc?id=1pmlBibDJ1_3SzdfD5pykIupEHePJd7ZM"
            />
          </Col>
          <Col md={4} className="image">
            <img
              alt="Not found"
              src="https://drive.google.com/uc?id=1pmlBibDJ1_3SzdfD5pykIupEHePJd7ZM"
            />
          </Col>
        </Row>
        <Row className="">
          <Button
            variant="outline-primary"
            className="centered learn-more-button"
          >
            Want to see more footage?
          </Button>
        </Row>
        <hr className="content-separator separator" />
        <Row>
          <ReactPlayer
            className="player centered"
            url="https://www.youtube.com/watch?v=u21W_tfPVrY"
          ></ReactPlayer>
        </Row>
      </Container>
    );
  }
}

export default Home;
