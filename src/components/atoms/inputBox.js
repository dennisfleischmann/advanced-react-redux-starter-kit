import React, { PropTypes } from 'react';
import {
  FormGroup,
  FormControl,
} from 'react-bootstrap';

const InputBox = (props) => (<form>
  <FormGroup>
    <FormControl
      type="text"
      {...props}
    />
  </FormGroup>
</form>
);


InputBox.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

InputBox.defaultProps = {
  placeholder: '',
  value: '',
};

export default InputBox;
