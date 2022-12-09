import { NameAndLink } from "./NameAnLink"

export interface Specie {
  name: string
  classification: string
  designation: string
  average_height: string
  skin_colors: string
  hair_colors: string
  eye_colors: string
  average_lifespan: string
  homeworld: NameAndLink
  language: string
  people: NameAndLink[]
  films: NameAndLink[]
  url: string
}
