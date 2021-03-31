import MoviesLayout from 'src/layouts/MoviesLayout'
import EditMovieCell from 'src/components/EditMovieCell'

const EditMoviePage = ({ id }) => {
  return (
    <MoviesLayout>
      <EditMovieCell id={id} />
    </MoviesLayout>
  )
}

export default EditMoviePage
