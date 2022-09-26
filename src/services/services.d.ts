
type AppState = {
  startedAt: number,
  breeds: Breeds,
  lovedBreeds: LovedBreeds,
  fundNotification: {
    closedAt: number,
    closed: boolean
  },
  breedLocations?: string[],
  breedGroups?: string[],
  breedSizes?: string[],
}

type Breed = {
  id: string,
  history: string,
  type: string,
  name: string,
  size: string[],
  origins: string[],
  colors: string[],
  images: string[],
  lifeSpan: number[],
  litterSize: number[],
  temperaments: string[],
  otherNames: string[],
  breedGroups: string[],
  breedChars: { [key: string]: number },
  breedRecs: string[],
  refs: { [key: string]: any },
}

type Breeds = { [id: string]: Breed }

type LovedBreeds = {
  [id: string]: {
    count: number,
    lovedAt: number,
  },
}


