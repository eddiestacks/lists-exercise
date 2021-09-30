export function groupLists(data) {
  const groupedLists = {}

  data.forEach((item) => {
    if (item.name) {
      if (!groupedLists[item.listId]) groupedLists[item.listId] = []
      groupedLists[item.listId].push(item)
    }
  })

  return groupedLists
}

export function sortList(list, alphabetical) {
  if (alphabetical) {
    return list.sort((a, b) => a.name > b.name ? 1 : -1)
  } else {
    return list.sort((a, b) => a.id - b.id)
  }
}