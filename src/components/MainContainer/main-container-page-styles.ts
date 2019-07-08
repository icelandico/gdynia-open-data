import { style } from "typestyle"

const menuContainer = style({
  backgroundColor: "cadetblue",
  height: "100%",
  paddingLeft: "2rem"
})

const rowContainer = style({
  margin: "0",
  minHeight: "80%"
})

const column = style({
  padding: "0"
})

const styles = {
  menuContainer,
  rowContainer,
  column
}

export default styles
