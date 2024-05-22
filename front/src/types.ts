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

export type Nutrient = 'fat' | 'carbohydrate' | 'sugar'

export interface GeneralAdvice {
  operator: Operator
  grams: number[][]
}
export interface TargetedAdvice {
  nutrient: Nutrient
  operator: Operator
  grams: number
}

export interface UserTotals {
  [index: string]: number
}

export type Operator = 'at least' | 'at most' | 'around'

export type DisplayData = {
  nutrient: Nutrient
  advice: {
    operator: Operator
    grams: number
  }
  user: {
    grams: number
    orderedContributors: {
      name: string
      grams: number
    }[]
  }
}[]
