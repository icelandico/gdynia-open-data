import { Store } from "laco"

export const LayerStore = new Store({ layer: "none" })
export const CounterStore = new Store({ count: 5 }, "CounterStore")

export const changeLayer = (layer: string) => LayerStore.set((state: string) => ({ layer }))

export const increment = () => CounterStore.set((state: any) => ({ count: state.count + 1 }), "Increment")
