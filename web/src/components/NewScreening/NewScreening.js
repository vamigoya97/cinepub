import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import ScreeningForm from 'src/components/ScreeningForm'

import { QUERY } from 'src/components/ScreeningsCell'

const CREATE_SCREENING_MUTATION = gql`
  mutation CreateScreeningMutation($input: CreateScreeningInput!) {
    createScreening(input: $input) {
      id
    }
  }
`

const NewScreening = () => {
  const [createScreening, { loading, error }] = useMutation(
    CREATE_SCREENING_MUTATION,
    {
      onCompleted: () => {
        toast.success('Screening created')
        navigate(routes.screenings())
      },
    }
  )

  const onSave = (input) => {
    const castInput = Object.assign(input, { movieId: parseInt(input.movieId) })
    createScreening({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Screening</h2>
      </header>
      <div className="rw-segment-main">
        <ScreeningForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewScreening
