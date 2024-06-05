export type Sex = 'male' | 'female'

export type AgeRange = '7' | '11' | '15' | '19' | '65' | '75'

export interface ListElement {
  id: string
  name: string
  refPortion: number
  userAmount: number
  fat: number
  carb: number
  fibre: number
  protein: number
  saturatedFat: number
  sugar: number
  salt: number
  calories: number
}

export interface StoreData {
  sex: Sex
  ageRange: AgeRange
  list: ListElement[]
  userReport: UserReport
}

export type Nutrient =
  | 'fat'
  | 'carb'
  | 'fibre'
  | 'protein'
  | 'saturatedFat'
  | 'sugar'
  | 'salt'
  | 'calories'

export type NutrientTotals = {
  [key in Nutrient]: number
}

export type NutrientAdvice = {
  [key in Nutrient]: TargetedAdvice
}

export type OrderedContribution = { name: string; grams: number }[]

export interface GeneralAdvice {
  operator: Operator
  grams: number[][]
}
export interface TargetedAdvice {
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

export type UserReport = {
  [key in Nutrient]: {
    advice: TargetedAdvice | undefined
    total: number | undefined
    orderedContributors: OrderedContribution | undefined
  }
}
