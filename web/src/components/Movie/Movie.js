import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/MoviesCell'

const DELETE_MOVIE_MUTATION = gql`
  mutation DeleteMovieMutation($id: Int!) {
    deleteMovie(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Movie = ({ movie }) => {
  const [deleteMovie] = useMutation(DELETE_MOVIE_MUTATION, {
    onCompleted: () => {
      toast.success('Movie deleted')
      navigate(routes.movies())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete movie ' + id + '?')) {
      deleteMovie({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Movie {movie.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{movie.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{movie.title}</td>
            </tr>
            <tr>
              <th>Director</th>
              <td>{movie.director}</td>
            </tr>
            <tr>
              <th>Poster url</th>
              <td>{movie.poster_url}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(movie.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editMovie({ id: movie.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(movie.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Movie
