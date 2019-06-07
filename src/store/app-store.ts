import { createStore, createEvent } from "effector"

const changedLayer = createEvent("Layer changed")

const activeLayer = createStore("")

activeLayer.on(changedLayer, (state, layer) => layer)
