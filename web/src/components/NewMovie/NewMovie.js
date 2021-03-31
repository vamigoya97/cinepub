import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import MovieForm from 'src/components/MovieForm'

import { QUERY } from 'src/components/MoviesCell'

const CREATE_MOVIE_MUTATION = gql`
  mutation CreateMovieMutation($input: CreateMovieInput!) {
    createMovie(input: $input) {
      id
    }
  }
`

const NewMovie = () => {
  const [createMovie, { loading, error }] = useMutation(CREATE_MOVIE_MUTATION, {
    onCompleted: () => {
      toast.success('Movie created')
      navigate(routes.movies())
    },
  })

  const onSave = (input) => {
    createMovie({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Movie</h2>
      </header>
      <div className="rw-segment-main">
        <MovieForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewMovie
