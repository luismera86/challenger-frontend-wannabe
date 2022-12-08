
export interface People {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: ObjetGeneric
  films: ObjetGeneric[]
  species: any[]
  vehicles: string[]
  starships: string[]
  url: string
}

interface ObjetGeneric {
    name: string
    link: string
}

