import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

interface VisionProps {}

type Props = VisionProps;

export class Vision extends React.Component<Props> {
  render() {
    return (
      <Container>
        <Row className="centered">
          Our Vision
        </Row>
      </Container>
    );
  }
}

export default Vision;
