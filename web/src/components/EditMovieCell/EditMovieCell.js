import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import MovieForm from 'src/components/MovieForm'

export const QUERY = gql`
  query FIND_MOVIE_BY_ID($id: Int!) {
    movie: movie(id: $id) {
      id
      title
      director
      poster_url
      createdAt
    }
  }
`
const UPDATE_MOVIE_MUTATION = gql`
  mutation UpdateMovieMutation($id: Int!, $input: UpdateMovieInput!) {
    updateMovie(id: $id, input: $input) {
      id
      title
      director
      poster_url
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ movie }) => {
  const [updateMovie, { loading, error }] = useMutation(UPDATE_MOVIE_MUTATION, {
    onCompleted: () => {
      toast.success('Movie updated')
      navigate(routes.movies())
    },
  })

  const onSave = (input, id) => {
    updateMovie({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Movie {movie.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <MovieForm
          movie={movie}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
