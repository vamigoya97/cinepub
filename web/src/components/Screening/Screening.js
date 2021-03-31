import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/ScreeningsCell'

const DELETE_SCREENING_MUTATION = gql`
  mutation DeleteScreeningMutation($id: Int!) {
    deleteScreening(id: $id) {
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

const Screening = ({ screening }) => {
  const [deleteScreening] = useMutation(DELETE_SCREENING_MUTATION, {
    onCompleted: () => {
      toast.success('Screening deleted')
      navigate(routes.screenings())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete screening ' + id + '?')) {
      deleteScreening({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Screening {screening.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{screening.id}</td>
            </tr>
            <tr>
              <th>Date</th>
              <td>{screening.date}</td>
            </tr>
            <tr>
              <th>Time</th>
              <td>{screening.time}</td>
            </tr>
            <tr>
              <th>Movie id</th>
              <td>{screening.movieId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editScreening({ id: screening.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(screening.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Screening
