import React, { Component } from 'react';
import { connect } from 'react-redux';
import SampleComponent from '../components/sampleComponent';
import { changeButtonMsg, changeInputText } from '../actions/sampleActions';

class SampleComponentContainer extends Component {
  render() {
    const {
      changeButtnMsgDispatch,
      changeInputTextDispatch,
      msg,
      inputText,
    } = this.props;

    return (
      <SampleComponent
        onChange={event => changeInputTextDispatch(event.target.value)}
        onClick={() => { changeButtnMsgDispatch(inputText); }}
        msg={msg}
        inputText={inputText}
      />
    );
  }
}

const mapStateToProps = (state) => ({ msg: state.msg, inputText: state.inputText });

const mapDispatchToProps = (dispatch) => {
  return {
    changeButtnMsgDispatch: msg => { dispatch(changeButtonMsg(msg)); },
    changeInputTextDispatch: text => { dispatch(changeInputText(text)); },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SampleComponentContainer);
