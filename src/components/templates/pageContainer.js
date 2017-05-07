import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
} from 'react-bootstrap';

const PageContainer = ({ children }) => (
  <Grid>{children}</Grid>
);

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContainer;
