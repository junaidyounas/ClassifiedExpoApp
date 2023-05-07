import { City } from "./City"

export interface CountryState {
  id: number
  name: string
  state_code: string
  latitude?: string
  longitude?: string
  type?: string | null
  cities: City[]
}