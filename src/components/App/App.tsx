import * as React from "react"
import "./App-styles.ts"
import AppStyles from "./App-styles"
import { Button } from "rbx"
import "rbx/index.css"

class App extends React.Component {


  render() {
    return (
      <div className={AppStyles.main}>
        <Button.Group>
          <Button>Button One</Button>
        </Button.Group>
      </div> 
    )
  }
}

export default App


