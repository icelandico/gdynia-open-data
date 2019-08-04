import { style } from "typestyle"

const menuContainer = style({
  backgroundColor: "cadetblue",
  height: "100%",
  paddingLeft: "2rem"
})

const rowContainer = style({
  display: "flex",
  margin: "0",
  minHeight: "80%"
})

const column = style({
  padding: "0",
  width: "100%",
  flex: 1
})

const mapContainer = style({
  flex: 4
})

const styles = {
  menuContainer,
  rowContainer,
  column,
  mapContainer
}

export default styles
