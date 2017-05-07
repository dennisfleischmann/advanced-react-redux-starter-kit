import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
} from 'react-bootstrap';

const ModifiedRow = ({ children }) => (
  <Row>
    <Col xs={12} md={12}>
      {children}
    </Col>
  </Row>
);

ModifiedRow.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModifiedRow;
