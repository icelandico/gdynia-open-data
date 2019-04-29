interface location {
  type: string
  crs: any
  coordinates: [number, number]
}
export interface IStation {
  id: number
  code: string
  street: string
  location: location
  lastUpdate: string
}
