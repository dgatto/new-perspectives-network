import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface VisionProps {}

type Props = VisionProps;

export class Vision extends React.Component<Props> {
  render() {
    return (
      <Container>
        <Row>
          <p className="centered header">Our vision</p>
        </Row>
        <hr className="separator"></hr>
        <Row>
          <Col md={8}>
            <p className="paragraph-content paragraph-content-vision">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
              suscipit adipiscing bibendum est ultricies integer quis auctor
              elit. Mauris pharetra et ultrices neque ornare. Est sit amet
              facilisis magna etiam tempor orci eu lobortis. Blandit massa enim
              nec dui nunc mattis enim. Pellentesque nec nam aliquam sem et.
              Consequat mauris nunc congue nisi vitae suscipit tellus mauris.
              Mauris cursus mattis molestie a iaculis at erat. Tellus elementum
              sagittis vitae et leo duis ut diam quam. Varius vel pharetra vel
              turpis nunc eget lorem dolor sed.
            </p>
          </Col>
          <Col md={4}></Col>
        </Row>
        <Row>
          <Col md={6}>
            <img
              className="image"
              alt="Not found"
              src="https://drive.google.com/uc?id=1pmlBibDJ1_3SzdfD5pykIupEHePJd7ZM"
            />
          </Col>
          <Col md={6} className="vertically-centered">
            <p className="paragraph-content paragraph-content-vision">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
              suscipit adipiscing bibendum est ultricies integer quis auctor
              elit. Mauris pharetra et ultrices neque or
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Vision;
