import useSWR from 'swr'
import { groupLists } from '../lib/sort'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function useListItems(url: string) {
  const { data, error } = useSWR(url, fetcher)

  return {
    data: data ? groupLists(data) : data,
    isLoading: !error && !data,
    error
  }
}