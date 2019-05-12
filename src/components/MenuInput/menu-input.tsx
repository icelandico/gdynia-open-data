import * as React from "react"
import styles from "./menu-input-styles"
import "rbx/index.css"
import classNames from "classnames"

interface Istate {
	chosen: string | null
}

class MenuInput extends React.Component<any, Istate> {
	state = {
		chosen: null
	}

	handleChange = (val: string) => {
		this.setState({
			chosen: val
		})
	}

	render() {
		return (
			<React.Fragment>
				<label>
					<input
						name="chosen-layer"
						type="radio"
						className={styles.menuInput}
						value="none"
						onChange={() => this.handleChange("none")}
					/>
					Brak warstw
				</label>
				<label>
					<input
						name="chosen-layer"
						type="radio"
						className={styles.menuInput}
						onChange={() => this.handleChange("weather")}
						checked
					/>
					Pogoda
				</label>
			</React.Fragment>
		)
	}
}

export default MenuInput
