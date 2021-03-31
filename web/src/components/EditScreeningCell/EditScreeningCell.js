import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import ScreeningForm from 'src/components/ScreeningForm'

export const QUERY = gql`
  query FIND_SCREENING_BY_ID($id: Int!) {
    screening: screening(id: $id) {
      id
      date
      time
      movieId
    }
  }
`
const UPDATE_SCREENING_MUTATION = gql`
  mutation UpdateScreeningMutation($id: Int!, $input: UpdateScreeningInput!) {
    updateScreening(id: $id, input: $input) {
      id
      date
      time
      movieId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ screening }) => {
  const [updateScreening, { loading, error }] = useMutation(
    UPDATE_SCREENING_MUTATION,
    {
      onCompleted: () => {
        toast.success('Screening updated')
        navigate(routes.screenings())
      },
    }
  )

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { movieId: parseInt(input.movieId) })
    updateScreening({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Screening {screening.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ScreeningForm
          screening={screening}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
