import Movie from 'src/components/Movie'

export const QUERY = gql`
  query FIND_MOVIE_BY_ID($id: Int!) {
    movie: movie(id: $id) {
      id
      title
      director
      poster_url
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Movie not found</div>

export const Success = ({ movie }) => {
  return <Movie movie={movie} />
}
