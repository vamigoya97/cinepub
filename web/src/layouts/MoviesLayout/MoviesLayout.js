import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const MoviesLayout = (props) => {
  return (
    <div className="rw-scaffold">
      {/* <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.movies()} className="rw-link">
            Movies
          </Link>
        </h1>
        <Link to={routes.newMovie()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Movie
        </Link>
      </header> */}
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default MoviesLayout
