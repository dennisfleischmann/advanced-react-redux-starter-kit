import {
  CHANGE_BUTTON_MESSAGE,
  CHANGE_INPUT_TEXT,
} from '../actions/sampleActions';

/*
initial state
 */

const initialState = {
  msg: 'This is my initial message..',
  inputText: '',
};

export default function startKitReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_BUTTON_MESSAGE:
      return Object.assign({}, state, { msg: action.text });
    case CHANGE_INPUT_TEXT:
      return Object.assign({}, state, { inputText: action.text });
    default:
      return state;
  }
}

/**
 * 
 *  <Grid>
        <Row>
          <Col xs={12} md={12}>
            <Jumbotron>
              <h1>React Redux Start Kit</h1>
              <ul>
                <li>Atomic Design approach</li>
                <li><code>Separation</code> between Application and UI-Developer</li>
                <li>Test Driven Development in mind</li>
                <li>Webpack + Webpack-Dev-Sever</li>
                <li><code>Chrome Devtools extensions</code> already preconfigured</li>
                <li>React <code>Storybook-Ui</code> already in place</li>
                <li>Eslint configuarion <code>airbnb</code></li>
                <li><code>Source-Map</code> in webpack preconfigured</li>
              </ul>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <InputBox
              placeholder="Sample text to change"
              inputText={inputText}
              onChange={onChange}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <Button onClick={onClick}>Change Text!</Button>
          </Col>
          <Col xs={12} md={12}>
            <span>{msg}</span>
          </Col>
        </Row>
      </Grid>
 * 
 */