import * as React from "react"
import "./App-styles.ts"
import { Button } from "rbx"
import "rbx/index.css"
import injectSheet, { jss, ThemeProvider } from "react-jss"
class App extends React.Component {

  render() {
    return (
      <div>
        <Button.Group>
          <Button>Button One</Button>
        </Button.Group>
      </div> 
    )
  }
}

export default App