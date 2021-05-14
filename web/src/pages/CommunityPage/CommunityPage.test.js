import { render } from '@redwoodjs/testing'

import CommunityPage from './CommunityPage'

describe('CommunityPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CommunityPage />)
    }).not.toThrow()
  })
})
