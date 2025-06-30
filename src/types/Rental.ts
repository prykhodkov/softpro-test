export interface Point {
  type: 'Point'
  coordinates: [number, number]
}

export interface Rental {
  id: string
  name: string
  description: string
  price: number
  location: string
  geometry: Point
}