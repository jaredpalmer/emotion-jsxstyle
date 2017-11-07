
# emotion jsxstyle

[jsxstyle](https://github.com/smyte/jsxstyle) primitives powered by [emotion](https://github.com/emotion-js/emotion)


```sh
npm i emotion react-emotion emotion-jsxstyle
```


## Usage

```jsx
import React from 'react'
import { Block, Row  } from 'emotion-jsxstyle'

const App = () => (
  <Row alignItems="center">
    <Block padding="1rem" color="red" >
      Hello
    </Block>
    <Block margin="2rem" background="#b7b7b7">
     Goodbye
    </Block>
  </Row>
)
```

## Component Primitives

- `<Block>`
- `<InlineBlock>`
- `<Inline>`
- `<Flex>`
- `<Row>`
- `<Col>`
- `<InlineFlex>`
- `<Grid>`
- `<Box>`

## Props

- `component`: specify the underlying DOM element. Defaults to `div`
- `props`: If you need to pass props to the underlying component, you can pass them through a special `props` props (just like jsxstyle).
- `css`: If you prefer the glamor css object syntax instead of just props, you can pass styles to a `css` prop. Useful for media queries etc.

## Refs

Just pass refs to `props` prop.

```jsx
import React from 'react'
import { Col, Block } from 'emotion-jsxstyle'

class App extends React.Component {
  render() {
    return (
      <Col>
        <Block component="input" props={{
          ref: i => this.input = i,
          defaultValue: 'Hello',
        }}>
      </Col> 
    )
  }
}
```

### Author

- Jared Palmer [@jaredpalmer](https://twitter.com/jaredpalmer)

---
MIT License
