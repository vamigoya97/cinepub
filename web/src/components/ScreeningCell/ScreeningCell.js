import Screening from 'src/components/Screening'

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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Screening not found</div>

export const Success = ({ screening }) => {
  return <Screening screening={screening} />
}
