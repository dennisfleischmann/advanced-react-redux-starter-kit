import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeButtonMsg, changeInputText } from '../actions/sampleActions';
import {
  Row,
  Page,
  Jumbotron,
  List,
  ListItem,
  InputBox,
  Button,
} from '../components';

class SampleComponentContainer extends Component {
  render() {
    const {
      changeButtnMsgDispatch,
      changeInputTextDispatch,
      msg,
      inputText,
    } = this.props;

    return (
      <Page>
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
           <InputBox value={inputText} onChange={event => changeInputTextDispatch(event.target.value)} />
        </Row>
        <Row>
          <Button onClick={() => changeButtnMsgDispatch(inputText)} >Change Text</Button>
        </Row>
        <Row>Message: {msg}</Row>
      </Page>
    );
  }
}

SampleComponentContainer.propTypes = {
  changeButtnMsgDispatch: PropTypes.func.isRequired,
  changeInputTextDispatch: PropTypes.func.isRequired,
  msg: PropTypes.string.isRequired,
  inputText: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({ msg: state.msg, inputText: state.inputText });

const mapDispatchToProps = dispatch => ({
  changeButtnMsgDispatch: msg => dispatch(changeButtonMsg(msg)),
  changeInputTextDispatch: text => dispatch(changeInputText(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SampleComponentContainer);
