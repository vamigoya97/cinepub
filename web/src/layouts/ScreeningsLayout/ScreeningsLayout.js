import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const ScreeningsLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.screenings()} className="rw-link">
            Screenings
          </Link>
        </h1>
        <Link to={routes.newScreening()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Screening
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default ScreeningsLayout
