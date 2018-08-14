import React, { PureComponent } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'styles/custom.css';

class Layout extends PureComponent {
  static propTypes = {
    children: PropTypes.any,
  };

  render() {
    return (
      <Container>
        <Row className="justify-content-md-center align-items-center">
          <Col sm={8} md={6}>
            <Card className="bg-transparent">
              <CardBody>{this.props.children}</CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Layout;
