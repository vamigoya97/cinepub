import { Link, routes } from '@redwoodjs/router'

import Screenings from 'src/components/Screenings'

export const QUERY = gql`
  query SCREENINGS {
    screenings {
      id
      date
      time
      movieId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No screenings yet. '}
      <Link to={routes.newScreening()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ screenings }) => {
  return <Screenings screenings={screenings} />
}
