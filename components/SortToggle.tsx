import { Switch } from '@headlessui/react'
import classNames from '../lib/classNames'

type componentProps = {
  alphabetical: boolean,
  changeSort: () => void
}

export default function SortToggle({ alphabetical, changeSort }: componentProps) {

  return (
    <Switch.Group as="div" className="flex items-center justify-end">
      <Switch.Label as="span" className="mr-3">
        <span className="text-sm text-gray-500">Alpha Sort</span>
      </Switch.Label>
      <Switch
        checked={alphabetical}
        onChange={changeSort}
        className={classNames(
          alphabetical ? 'bg-indigo-600' : 'bg-gray-200',
          'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        )}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={classNames(
            alphabetical ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
          )}
        />
      </Switch>
    </Switch.Group>
  )
}