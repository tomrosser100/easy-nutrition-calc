import type { GeneralAdvice, Nutrient } from './types'

export const appMaxWidth = '1000px'

export const appMinWidth = '350px'

export const delay = 100

export const nutrients = [
  'fat',
  'carb',
  'fibre',
  'protein',
  'saturatedFat',
  'sugar',
  'salt',
  'calories',
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

export const carb = {
  operator: 'at least',
  grams: [
    [242, 333, 333, 333, 312, 306],
    [227, 267, 267, 267, 255, 245],
  ],
} as GeneralAdvice

export const fibre = {
  operator: 'around',
  grams: [
    [20, 25, 30, 30, 30, 30],
    [20, 25, 30, 30, 30, 30],
  ],
} as GeneralAdvice

export const protein = {
  operator: 'around',
  grams: [
    [28.3, 42.1, 55.2, 55.5, 53.3, 53.3],
    [28.3, 41.2, 45.0, 45.0, 46.5, 46.5],
  ],
} as GeneralAdvice

export const saturatedFat = {
  operator: 'at most',
  grams: [
    [22, 31, 31, 31, 29, 28],
    [21, 24, 24, 24, 23, 23],
  ],
} as GeneralAdvice

export const calories = {
  operator: 'around',
  grams: [
    [1817, 2500, 2500, 2500, 2342, 2294],
    [1703, 2000, 2000, 2000, 1912, 1840],
  ],
} as GeneralAdvice

export const sugar = {
  operator: 'at most',
  grams: [
    [24, 33, 33, 33, 31, 31],
    [23, 27, 27, 27, 26, 25],
  ],
} as GeneralAdvice

export const salt = {
  operator: 'at most',
  grams: [
    [5, 6, 6, 6, 6, 6],
    [5, 6, 6, 6, 6, 6],
  ],
} as GeneralAdvice

export const loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque sodales ut etiam sit amet nisl purus in. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh. Bibendum at varius vel pharetra vel turpis nunc. Lectus urna duis convallis convallis tellus id. Donec pretium vulputate sapien nec sagittis. Viverra orci sagittis eu volutpat odio facilisis mauris sit. Laoreet suspendisse interdum consectetur libero id. Cursus euismod quis vive'
