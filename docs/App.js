import React from 'react';
import { Row, Block } from 'emotion-jsxstyle';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleClick(e) {
    this.input.focus();
  }

  render() {
    return (
      <Block>
        <Row alignItems="center" justifyContent="center">
          <Block background="#b7b7b7" padding="1rem" margin="2rem">
            Thing
          </Block>
          <Block background="#b7b7b7" padding="1rem" margin="2rem">
            Thing
          </Block>
          <Block background="#b7b7b7" padding="1rem" margin="2rem">
            Thing
          </Block>
          <Block background="#b7b7b7" padding="1rem" margin="2rem">
            Thing
          </Block>
          <Block
            background="#b7b7b7"
            padding="1rem"
            margin="2rem"
            css={{
              ':hover': {
                color: 'red',
              },
            }}
          >
            Thing
          </Block>
        </Row>
        <Block>
          <Block
            component="input"
            padding=".5rem"
            borderRadius="3px"
            border="1px solid #eee"
            props={{
              onChange: this.handleChange,
              value: this.state.text,
              placeholder: 'I am input',
              ref: i => (this.input = i),
            }}
          />

          <Block component="button" props={{ onClick: this.handleClick }}>
            Focus on the input
          </Block>
        </Block>
      </Block>
    );
  }
}

export default App;
