import { NameAndLink } from "./NameAnLink"

export interface Film {
    title: string
    episode_id: number
    opening_crawl: string
    director: string
    producer: string
    release_date: string
    characters: NameAndLink[]
    planets: NameAndLink[]
    starships: NameAndLink[]
    vehicles: NameAndLink[]
    species: NameAndLink[]
    url: string
}
  
