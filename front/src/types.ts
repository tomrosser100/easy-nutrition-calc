export type Sex = 'male' | 'female'

export type AgeRange = '7' | '11' | '15' | '19' | '65' | '75'

export interface ListElement {
  id: string
  name: string
  num: number
}

export interface StoreData {
  sex: Sex
  ageRange: AgeRange
  list: ListElement[]
}

