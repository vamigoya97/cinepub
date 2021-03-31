import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/LocationsCell'

const DELETE_LOCATION_MUTATION = gql`
  mutation DeleteLocationMutation($id: Int!) {
    deleteLocation(id: $id) {
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

const Location = ({ location }) => {
  const [deleteLocation] = useMutation(DELETE_LOCATION_MUTATION, {
    onCompleted: () => {
      toast.success('Location deleted')
      navigate(routes.locations())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete location ' + id + '?')) {
      deleteLocation({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Location {location.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{location.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{location.name}</td>
            </tr>
            <tr>
              <th>Capacity</th>
              <td>{location.capacity}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>{location.address}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(location.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editLocation({ id: location.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(location.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Location
