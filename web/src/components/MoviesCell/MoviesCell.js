import { Link, routes } from '@redwoodjs/router'

import Movies from 'src/components/Movies'

export const QUERY = gql`
  query MOVIES {
    movies {
      id
      title
      director
      poster_url
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No movies yet. '}
      <Link to={routes.newMovie()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ movies }) => {
  return <Movies movies={movies} />
}
