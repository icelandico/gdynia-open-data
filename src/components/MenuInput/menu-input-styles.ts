import { style } from "typestyle"

const menuLabel = style({
  cursor: "pointer"
})

const menuInput = style({
  marginRight: "0.75rem",
  $nest: {
    "&::after": {
      content: " ",
      backgroundColor: "#333",
      width: "20px",
      height: "20px",
      transition: "all 0.5s ease-out",
      display: "block"
    }
  }
})

const styles = {
  menuLabel,
  menuInput
}

export default styles
