import * as items from '../data/items'
import * as recipes from '../data/recipes'
import { cropType } from '../enums'

const { CARROT, PUMPKIN, SPINACH } = cropType

export const recipesMap = Object.keys(recipes).reduce((acc, recipeName) => {
  const recipe = recipes[recipeName]
  acc[recipe.id] = recipe
  return acc
}, {})

export const itemsMap = {
  ...Object.keys(items).reduce((acc, itemName) => {
    const item = items[itemName]
    acc[item.id] = item
    return acc
  }, {}),
  ...recipesMap,
}

export const cropIdToTypeMap = {
  [CARROT]: 'carrot',
  [PUMPKIN]: 'pumpkin',
  [SPINACH]: 'spinach',
}
