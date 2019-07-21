import { style } from "typestyle"

const menuLabel = style({
  cursor: "pointer",
  display: "block",
  position: "relative",
  margin: "5px 0",
  $nest: {
    "&:before": {
      content: "''",
      width: "30px",
      height: "30px",
      transition: "all 0.3s ease- out",
      display: "inline-block",
      border: "5px solid #4d4d4dff",
      verticalAlign: "middle",
      borderRadius: "50%",
      marginRight: "10px",
      position: "relative"
    },
    "&:hover::before": {
      background: "#4d4d4dff"
    }
  }
})

const menuInput = style({
  opacity: 0,
  position: "absolute",
  $nest: {
    [`&:checked + .${menuLabel}:after`]: {
      content: "''",
      position: "absolute",
      left: "6px",
      top: "6px",
      background: "#fff",
      width: "18px",
      height: "18px",
      borderRadius: "50%",
      margin: "auto"
    },
    [`&:checked + .${menuLabel}:before`]: {
      background: "#4d4d4dff"
    }
  }
})

const styles = {
  menuLabel,
  menuInput
}

export default styles
