import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

jest.mock("../api/useListItems", () => {
  return jest.fn().mockImplementation(() => {
    return {
      data: {
        1: [
          { "id": 755, "listId": 2, "name": "" },
          { "id": 203, "listId": 2, "name": "" },
          { "id": 684, "listId": 1, "name": "Item 684" },
          { "id": 276, "listId": 1, "name": "Item 276" },
          { "id": 736, "listId": 3, "name": null },
          { "id": 926, "listId": 4, "name": null },
          { "id": 808, "listId": 4, "name": "Item 808" },
        ]
      }
    }
  })
})

describe('Home', () => {
  it('renders the list viewer', async () => {
    const { findByText } = render(<Home />)

    const heading = await findByText("List Groups")
    const item = await findByText("Item 684")

    expect(heading).toBeInTheDocument()
    expect(item).toBeInTheDocument()
  })
})