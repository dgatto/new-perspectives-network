import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { Profile } from '../../components/Profile';

interface AboutProps {}

type Props = AboutProps;

export class About extends React.Component<Props> {
  render() {
    return (
      <Container>
        <Row>
          <div className="centered">
            <p className="header centered">About our network</p>
          </div>
        </Row>
        <hr className="separator" />
        <Row>
          <div className="home-content centered">
            <p className="paragraph-content">
              This is about the team and our history and who we are, only giving
              a tease of what the vision/mission statement is, we can link them
              to that page
            </p>
          </div>
        </Row>
        <Row>
          <Button
            variant="outline-primary"
            className="centered learn-more-button"
          >
            Learn more about the team's vision
          </Button>
        </Row>
        <hr className="separator" />
        <Row>
          <div className="content-header centered">
            <p className="header centered">Meet the Team!</p>
          </div>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={12}>
            <Profile userImage="https://drive.google.com/uc?id=1pmlBibDJ1_3SzdfD5pykIupEHePJd7ZM"></Profile>
            <Profile userImage="https://drive.google.com/uc?id=1pmlBibDJ1_3SzdfD5pykIupEHePJd7ZM"></Profile>
            <Profile userImage="https://drive.google.com/uc?id=1pmlBibDJ1_3SzdfD5pykIupEHePJd7ZM"></Profile>
            <Profile userImage="https://drive.google.com/uc?id=1pmlBibDJ1_3SzdfD5pykIupEHePJd7ZM"></Profile>
            <Profile userImage="https://drive.google.com/uc?id=1pmlBibDJ1_3SzdfD5pykIupEHePJd7ZM"></Profile>
            <Profile userImage="https://drive.google.com/uc?id=1pmlBibDJ1_3SzdfD5pykIupEHePJd7ZM"></Profile>
            <Profile userImage="https://drive.google.com/uc?id=1pmlBibDJ1_3SzdfD5pykIupEHePJd7ZM"></Profile>
            <Profile userImage="https://drive.google.com/uc?id=1pmlBibDJ1_3SzdfD5pykIupEHePJd7ZM"></Profile>
            <Profile userImage="https://drive.google.com/uc?id=1pmlBibDJ1_3SzdfD5pykIupEHePJd7ZM"></Profile>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;
