import { Item } from '../interfaces/item'
import { GroupedLists } from '../interfaces/groupedLists'

export function groupLists(data: Item[]) {
  const groupedLists = {} as GroupedLists

  data.forEach((item: Item) => {
    if (item.name) {
      if (!groupedLists[item.listId]) groupedLists[item.listId] = []
      groupedLists[item.listId].push(item)
    }
  })

  return groupedLists
}

export function sortList(list: Item[], alphabetical: boolean) {
  if (alphabetical) {
    return list.sort((a: Item, b: Item) => (a.name! > b.name! ? 1 : -1))
  } else {
    return list.sort((a: Item, b: Item) => a.id - b.id)
  }
}