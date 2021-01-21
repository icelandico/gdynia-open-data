import { style } from "typestyle"

const menuLabel = style({
  // cursor: "pointer",
  // display: "block",
  // position: "relative",
  // margin: "5px 0",
  // $nest: {
  //   "&:before": {
  //     content: "''",
  //     width: "30px",
  //     height: "30px",
  //     transition: "all 0.3s ease- out",
  //     display: "inline-block",
  //     border: "3px solid #4d4d4dff",
  //     verticalAlign: "middle",
  //     borderRadius: "50%",
  //     marginRight: "10px",
  //     position: "relative"
  //   },
  //   "&:hover::before": {
  //     background: "#4d4d4dff"
  //   }
  // }
  display: "block",
  position: "relative",
  paddingLeft: "35px",
  marginBottom: "12px",
  cursor: "pointer",
  fontSize: "15px",
  userSelect: "none",
})

const menuInput = style({
  position: "absolute",
  opacity: 0,
  cursor: "pointer",
  height: 0,
  width: 0,
  // opacity: 0,
  // position: "absolute",
  // $nest: {
  //   [`&:checked + .${menuLabel}:after`]: {
  //     content: "''",
  //     position: "absolute",
  //     left: "6px",
  //     top: "6px",
  //     background: "#fff",
  //     width: "18px",
  //     height: "18px",
  //     borderRadius: "50%",
  //     margin: "auto"
  //   },
  //   [`&:checked + .${menuLabel}:before`]: {
  //     background: "#4d4d4dff"
  //   }
  // }
})

const menuCheckmark = style({
  position: 'absolute',
  top: 0,
  left: 0,
  height: "25px",
  width: "25px",
  backgroundColor: '#eee',

  $nest: {
      '&'
  }
})

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

const styles = {
  menuLabel,
  menuInput,
  menuCheckmark,
}

export default styles
