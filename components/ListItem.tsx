import { Item } from '../interfaces/item'

type componentProps = {
  item: Item
}

export default function ListItem({ item }: componentProps) {
  return (
    <li className="py-4 flex" title={item.id.toString()}>
      <p className="w-1/2 text-sm font-medium text-gray-900">{item.name}</p>
    </li>
  )
}