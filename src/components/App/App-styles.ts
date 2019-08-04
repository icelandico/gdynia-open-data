import { style } from "typestyle"

const main = style({
  height: "100vh",
  backgroundSize: "cover",
  fontFamily: `Anton, sans-serif`,
  display: "flex",
  flexDirection: "column"
})

const center = style({
  textAlign: "center",
  margin: "0 auto"
})

const styles = {
  main,
  center
}

export default styles
