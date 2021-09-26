export default function sortLists(data) {
  const sortedLists = {}

  data.forEach((item) => {
    if (item.name) {
      if (!sortedLists[item.listId]) sortedLists[item.listId] = []
      sortedLists[item.listId].push(item)
    }
  })

  Object.keys(sortedLists).forEach((listKey) => {
    sortedLists[listKey] = sortItemsInList(sortedLists[listKey])
  })

  return sortedLists
}

function sortItemsInList(list) {
  return list.sort((a, b) => (a.name > b.name) ? 1 : -1)
}