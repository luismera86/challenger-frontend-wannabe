import { NameAndLink } from "./NameAnLink"

export interface People {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: NameAndLink
  films: NameAndLink[]
  species: any[]
  vehicles: string[]
  starships: string[]
  url: string
}



