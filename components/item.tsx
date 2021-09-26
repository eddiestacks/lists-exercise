import { Item } from '../types/item'

export default function item(data: Item) {
  return (
    <tr key={data.id}>
      <td>{data.id}</td>
      <td>{data.listId}</td>
      <td>{data.name}</td>
    </tr>
  )
}