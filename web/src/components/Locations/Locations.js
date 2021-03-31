import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/LocationsCell'

const DELETE_LOCATION_MUTATION = gql`
  mutation DeleteLocationMutation($id: Int!) {
    deleteLocation(id: $id) {
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

const LocationsList = ({ locations }) => {
  const [deleteLocation] = useMutation(DELETE_LOCATION_MUTATION, {
    onCompleted: () => {
      toast.success('Location deleted')
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete location ' + id + '?')) {
      deleteLocation({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Capacity</th>
            <th>Address</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {locations.map((location) => (
            <tr key={location.id}>
              <td>{truncate(location.id)}</td>
              <td>{truncate(location.name)}</td>
              <td>{truncate(location.capacity)}</td>
              <td>{truncate(location.address)}</td>
              <td>{timeTag(location.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.location({ id: location.id })}
                    title={'Show location ' + location.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editLocation({ id: location.id })}
                    title={'Edit location ' + location.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete location ' + location.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(location.id)}
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

export default LocationsList
