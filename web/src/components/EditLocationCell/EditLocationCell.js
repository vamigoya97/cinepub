import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import LocationForm from 'src/components/LocationForm'

export const QUERY = gql`
  query FIND_LOCATION_BY_ID($id: Int!) {
    location: location(id: $id) {
      id
      name
      capacity
      address
      createdAt
    }
  }
`
const UPDATE_LOCATION_MUTATION = gql`
  mutation UpdateLocationMutation($id: Int!, $input: UpdateLocationInput!) {
    updateLocation(id: $id, input: $input) {
      id
      name
      capacity
      address
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ location }) => {
  const [updateLocation, { loading, error }] = useMutation(
    UPDATE_LOCATION_MUTATION,
    {
      onCompleted: () => {
        toast.success('Location updated')
        navigate(routes.locations())
      },
    }
  )

  const onSave = (input, id) => {
    updateLocation({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Location {location.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <LocationForm
          location={location}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
