import { render } from '@redwoodjs/testing'

import PartnerPage from './PartnerPage'

describe('PartnerPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PartnerPage />)
    }).not.toThrow()
  })
})
