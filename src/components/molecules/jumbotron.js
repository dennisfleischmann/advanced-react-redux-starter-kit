import React from 'react';
import PropTypes from 'prop-types';
import {
  Jumbotron,
} from 'react-bootstrap';

const ExtendendJumbotron = ({ children, title }) => (
  <Jumbotron>
    <h1>{title}</h1>
    {children}
  </Jumbotron>
);

ExtendendJumbotron.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

ExtendendJumbotron.defaultProps = {
  title: '',
};

export default ExtendendJumbotron;
