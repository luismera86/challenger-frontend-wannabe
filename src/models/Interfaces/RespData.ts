// Generated by https://quicktype.io

export interface RespData<T> {
  count: number
  next: string | null
  previous: null | string
  results: Array<T>
}

export interface PeoplesResult {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: Gender
  homeworld: string
  films: string[]
  species: string[]
  vehicles: string[]
  starships: string[]
  created: string
  edited: string
  url: string
}

export interface FilmsResult {
  title: string
  episode_id: number
  opening_crawl: string
  director: string
  producer: string
  release_date: Date
  characters: string[]
  planets: string[]
  starships: string[]
  vehicles: string[]
  species: string[]
  created: Date
  edited: Date
  url: string
}

export enum Gender {
  Female = 'female',
  Male = 'male',
  NA = 'n/a',
}
