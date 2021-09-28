import { Item } from '../interfaces/item'

type componentProps = {
  item: Item
}

export default function ListItem({ item }: componentProps) {
  console.log(item)
  return (
    <li>{item.listId}</li>
  )
}