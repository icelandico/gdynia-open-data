import * as React from "react"
import "./App-styles.ts"
import { Button } from "semantic-ui-react"
import withStyles, { WithStyles } from 'react-jss'
import { AppStyles } from "./App-styles"
interface AppProps extends WithStyles<typeof AppStyles> {
  children: React.ReactNode
}
class App extends React.Component<AppProps> {

  get classes() {
    return this.props.classes
  }

  render() {
    return (
      <div className={this.classes.main}>
        <Button primary>
          Element
        </Button>
      </div> 
    )
  }
}

export default withStyles(AppStyles)(App)
