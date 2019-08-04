interface Location {
  type: string
  crs: any
  coordinates: [number, number]
}

export interface IStation {
  id: number
  code: string
  street: string
  location: Location
  lastUpdate: string
  weatherStationId: number
  airTemperature: number
  surfaceTemperature: number
  windDirection: number
}

export interface IParking {
  id: number
  parkingId: number
  capacity: number
  freePlaces: number
  update: string
}
