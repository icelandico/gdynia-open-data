import * as React from "react"
import styles from "./menu-input-styles"
import "rbx/index.css"
import classNames from "classnames"

class MenuInput extends React.Component {
	render() {
		return (
			<React.Fragment>
				<label>
					<input type="radio" className={styles.menuInput} />
					Brak warstw
				</label>
				<label>
					<input type="radio" className={styles.menuInput} checked />
					Pogoda
				</label>
			</React.Fragment>
		)
	}
}

export default MenuInput
