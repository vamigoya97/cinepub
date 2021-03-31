import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import LocationForm from 'src/components/LocationForm'

import { QUERY } from 'src/components/LocationsCell'

const CREATE_LOCATION_MUTATION = gql`
  mutation CreateLocationMutation($input: CreateLocationInput!) {
    createLocation(input: $input) {
      id
    }
  }
`

const NewLocation = () => {
  const [createLocation, { loading, error }] = useMutation(
    CREATE_LOCATION_MUTATION,
    {
      onCompleted: () => {
        toast.success('Location created')
        navigate(routes.locations())
      },
    }
  )

  const onSave = (input) => {
    createLocation({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Location</h2>
      </header>
      <div className="rw-segment-main">
        <LocationForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewLocation
