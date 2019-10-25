import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

enum Games {
  cod = 'codmw',
  halo = 'halo'
}

export interface GalleryItemProps {
  galleryLink: string;
}

type Props = GalleryItemProps;

export class GalleryItem extends React.Component<Props> {
  render() {
    return (
      <Container>
        <Row>Our Content for COD!</Row>
      </Container>
    );
  }
}

export default GalleryItem;
