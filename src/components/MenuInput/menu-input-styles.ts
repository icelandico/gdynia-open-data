import { style } from "typestyle"

const menuLabel = style({
  cursor: "pointer",
  display: "block",
  position: "relative",
  $nest: {
    "&:after": {
      content: "",
      backgroundColor: "#333",
      width: "20px",
      height: "20px",
      transition: "all 0.5s ease-out",
      display: "inline-block",
      border: "2px solid #FF8C00"
    }
  }
})

const menuInput = style({
  marginRight: "0.75rem",
  $nest: {
    "&:checked": {
      content: "",
      position: "absolute",
      left: "6px",
      top: "11px",
      background: "white",
      width: "3px",
      height: "3px",
      transform: "rotate(45deg)"
    }
  }
})

const styles = {
  menuLabel,
  menuInput
}

export default styles
