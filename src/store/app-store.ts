import { createStore, createEvent } from "effector"

export const changeLayer = createEvent("switch")
export const activeLayer = createStore("none").on(changeLayer, (state, layer) => layer)
