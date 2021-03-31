import MoviesLayout from 'src/layouts/MoviesLayout'
import MovieCell from 'src/components/MovieCell'

const MoviePage = ({ id }) => {
  return (
    <MoviesLayout>
      <MovieCell id={id} />
    </MoviesLayout>
  )
}

export default MoviePage
