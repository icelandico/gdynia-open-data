import { style } from "typestyle"

const menuContainer = style({
	backgroundColor: "cadetblue",
	height: "100%",
	padding: "1rem 2rem"
})

const menuContent = style({
	marginTop: "1rem",
	display: "flex",
	flexDirection: "column"
})

const styles = {
	menuContainer,
	menuContent
}

export default styles
