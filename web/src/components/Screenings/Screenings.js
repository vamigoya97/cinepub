import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/ScreeningsCell'

const DELETE_SCREENING_MUTATION = gql`
  mutation DeleteScreeningMutation($id: Int!) {
    deleteScreening(id: $id) {
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

const ScreeningsList = ({ screenings }) => {
  const [deleteScreening] = useMutation(DELETE_SCREENING_MUTATION, {
    onCompleted: () => {
      toast.success('Screening deleted')
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete screening ' + id + '?')) {
      deleteScreening({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Date</th>
            <th>Time</th>
            <th>Movie id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {screenings.map((screening) => (
            <tr key={screening.id}>
              <td>{truncate(screening.id)}</td>
              <td>{truncate(screening.date)}</td>
              <td>{truncate(screening.time)}</td>
              <td>{truncate(screening.movieId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.screening({ id: screening.id })}
                    title={'Show screening ' + screening.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editScreening({ id: screening.id })}
                    title={'Edit screening ' + screening.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete screening ' + screening.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(screening.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ScreeningsList
