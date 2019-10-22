import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

interface GalleryProps {}

type Props = GalleryProps;

export class Gallery extends React.Component<Props> {
  render() {
    return (
      <Container className="gallery-container">
        <Row>
          <div className="centered">
            <p className="header centered">Gallery</p>
          </div>
        </Row>
        <hr className="separator" />
      </Container>
    );
  }
}

export default Gallery;
