import * as React from "react"
import styles from "./menu-input-styles"
import "rbx/index.css"
import classNames from "classnames"
import { useStore } from "laco-react"
import { LayerStore, CounterStore, increment } from "../../store/app-store"

interface Istate {
	chosen: string | null
}

class MenuInput extends React.Component<any, Istate> {
	state = {
		chosen: null
	}

	handleChange = (val: any) => {
		const value = val.target.value
		console.log(value)
		this.setState({
			chosen: value
		})
	}

	render() {
		// const counterState = useStore(CounterStore)
		return (
			<React.Fragment>
				<label>
					<input
						name="chosen-layer"
						type="radio"
						className={styles.menuInput}
						value="none"
						onChange={this.handleChange}
					/>
					Brak warstw
				</label>
				<label>
					<input
						name="chosen-layer"
						type="radio"
						className={styles.menuInput}
						value="weather"
						onChange={this.handleChange}
						defaultChecked
					/>
					Pogoda
				</label>
				<label>
					<input
						name="chosen-layer"
						type="radio"
						className={styles.menuInput}
						value="traffic"
						onChange={this.handleChange}
					/>
					Dane o ruchu
				</label>
			</React.Fragment>
		)
	}
}

export default MenuInput
