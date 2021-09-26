export default function sortLists(data) {
  const sortedLists = {}
  const groupedLists = []

  data.forEach((item) => {
    if (item.name) {
      if (!sortedLists[item.listId]) sortedLists[item.listId] = []
      sortedLists[item.listId].push(item)
    }
  })

  Object.keys(sortedLists).sort().forEach((listKey) => {
    groupedLists.push(sortItemsInList(sortedLists[listKey]))
  })

  return groupedLists
}

function sortItemsInList(list) {
  return list.sort((a, b) => (a.name > b.name) ? 1 : -1)
}