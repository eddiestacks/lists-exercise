import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { SortedLists } from '../interfaces/sortedLists'
import { Item } from '../interfaces/item'
import ListItem from './ListItem'

type componentProps = {
  lists: SortedLists
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function ListViewer({ lists }: componentProps) {
  const listIds = Object.keys(lists)
  const [selected, setSelected] = useState(listIds[0])
  const [listData, setListData] = useState(lists[parseInt(selected)])

  const handleSelect = (listId: string) => {
    setSelected(listId)
    setListData(lists[parseInt(selected)])
  }

  return (
    <div className="py-10 md:w-1/4 mx-auto">
      <div className="bg-white md:shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">List Groups</h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0 min-h-full">
          <div className="py-5 px-4">
            <Listbox value={selected} onChange={handleSelect}>
              <Listbox.Label className="block text-sm font-medium text-gray-700">List ID</Listbox.Label>
              <div className="mt-1 relative">
                <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <span className="block truncate">{selected}</span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </span>
                </Listbox.Button>

                <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                  <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    {listIds.map((listId) => (
                      <Listbox.Option
                        key={listId}
                        className={({ active }) =>
                          classNames(
                            active ? 'text-white bg-indigo-600' : 'text-gray-900',
                            'cursor-default select-none relative py-2 pl-8 pr-4'
                          )
                        }
                        value={listId}
                      >
                        {({ selected, active }) => (
                          <>
                            <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                              {listId}
                            </span>

                            {selected ? (
                              <span
                                className={classNames(
                                  active ? 'text-white' : 'text-indigo-600',
                                  'absolute inset-y-0 left-0 flex items-center pl-1.5'
                                )}
                              >
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>



          </div>

          <ul role="list" className="divide-y divide-gray-200 px-4">
            {listData.map((listItem: Item) => (
              <ListItem key={listItem.id} item={listItem}></ListItem>
            ))}
          </ul>

        </div>
      </div>
    </div >
  )
}
