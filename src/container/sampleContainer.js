import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeButtonMsg, changeInputText } from '../actions/sampleActions';
import {
  Row,
  PageContainer,
  Jumbotron,
  List,
  ListItem,
  InputBox,
  Button,
} from '../components';

class SampleComponentContainer extends Component {

  constructor(props) {
    super(props);

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleButtonClick() {
    const {
      changeButtnMsgDispatch,
      inputText,
    } = this.props;

    changeButtnMsgDispatch(inputText);
  }

  handleInputChange(event) {
    const {
      changeInputTextDispatch,
    } = this.props;

    changeInputTextDispatch(event.target.value);
  }

  render() {
    const {
      msg,
      inputText,
    } = this.props;

    return (
      <PageContainer>
        <Row>
          <Jumbotron title="Redux Starter Kit">
            <List>
              <ListItem>Atomic Design approach</ListItem>
              <ListItem><code>Separation</code> between Application and UI-Developer</ListItem>
              <ListItem>Test Driven Development in mind</ListItem>
              <ListItem>Webpack + Webpack-Dev-Sever</ListItem>
              <ListItem><code>Chrome Devtools extensions</code> already preconfigured</ListItem>
              <ListItem>React <code>Storybook-Ui</code> already in place</ListItem>
              <ListItem>Eslint configuarion <code>airbnb</code></ListItem>
              <ListItem><code>Source-Map</code> in webpack preconfigured</ListItem>
            </List>
          </Jumbotron>
        </Row>
        <Row>
          <InputBox value={inputText} onChange={this.handleInputChange} />
        </Row>
        <Row>
          <Button onClick={this.handleButtonClick} >Change Text</Button>
        </Row>
        <Row>Message: {msg}</Row>
      </PageContainer>
    );
  }
}

SampleComponentContainer.propTypes = {
  changeButtnMsgDispatch: PropTypes.func.isRequired,
  changeInputTextDispatch: PropTypes.func.isRequired,
  msg: PropTypes.string.isRequired,
  inputText: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  msg: state.sampleReducer.msg,
  inputText: state.sampleReducer.inputText,
});

const mapDispatchToProps = dispatch => ({
  changeButtnMsgDispatch: msg => dispatch(changeButtonMsg(msg)),
  changeInputTextDispatch: text => dispatch(changeInputText(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SampleComponentContainer);
