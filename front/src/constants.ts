import type { GeneralAdvice, Nutrient, } from './types'

export const delay = 100

export const nutrients = [
  'fat'
] as Nutrient[]

// y axis
// [0] array is male
// [1] array is female

// x axis
// [0] = 7-10
// [1] = 11-14
// [2] = 15-18
// [3] = 19-64
// [4] = 65-74
// [5] = 75

export const fat = {
  operator: 'at most',
  grams: [
    [71, 97, 97, 97, 91, 89],
    [66, 78, 78, 78, 74, 74],
  ],
} as GeneralAdvice
