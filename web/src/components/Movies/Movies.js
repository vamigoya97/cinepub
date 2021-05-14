import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/MoviesCell'

const DELETE_MOVIE_MUTATION = gql`
  mutation DeleteMovieMutation($id: Int!) {
    deleteMovie(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const MoviesList = ({ movies }) => {
  const [deleteMovie] = useMutation(DELETE_MOVIE_MUTATION, {
    onCompleted: () => {
      toast.success('Movie deleted')
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete movie ' + id + '?')) {
      deleteMovie({ variables: { id } })
    }
  }

  return (
        <div className="flex flex-wrap">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-container padding margin center-items">
              {/* <div className=""> */}
                  <div className="flex flex-row space-evenly center-items">
                    <div>
                        <img className="movie-img" src={movie.poster_url}></img>
                    </div>
                    <div>
                        <p><b>Title: </b>{movie.title}</p>
                        <p><b>Director: </b>{movie.director}</p>
                    </div>
                  </div>
              {/* </div> */}
            </div>
          ))}
        </div>
    // <div className="rw-segment rw-table-wrapper-responsive">
    //   <table className="rw-table">
    //     <thead>
    //       <tr>
    //         <th>Id</th>
    //         <th>Title</th>
    //         <th>Director</th>
    //         <th>Poster url</th>
    //         <th>Created at</th>
    //         <th>&nbsp;</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {movies.map((movie) => (
    //         <tr key={movie.id}>
    //           <td>{truncate(movie.id)}</td>
    //           <td>{truncate(movie.title)}</td>
    //           <td>{truncate(movie.director)}</td>
    //           <td>{truncate(movie.poster_url)}</td>
    //           <td>{timeTag(movie.createdAt)}</td>
    //           <td>
    //             <nav className="rw-table-actions">
    //               <Link
    //                 to={routes.movie({ id: movie.id })}
    //                 title={'Show movie ' + movie.id + ' detail'}
    //                 className="rw-button rw-button-small"
    //               >
    //                 Show
    //               </Link>
    //               <Link
    //                 to={routes.editMovie({ id: movie.id })}
    //                 title={'Edit movie ' + movie.id}
    //                 className="rw-button rw-button-small rw-button-blue"
    //               >
    //                 Edit
    //               </Link>
    //               <a
    //                 href="#"
    //                 title={'Delete movie ' + movie.id}
    //                 className="rw-button rw-button-small rw-button-red"
    //                 onClick={() => onDeleteClick(movie.id)}
    //               >
    //                 Delete
    //               </a>
    //             </nav>
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
  )
}

export default MoviesList
