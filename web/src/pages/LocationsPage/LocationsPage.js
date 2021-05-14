import LocationsLayout from 'src/layouts/LocationsLayout'
import LocationsCell from 'src/components/LocationsCell'
import { Link, routes } from '@redwoodjs/router'

const LocationsPage = () => {
  return (
  <div className="flex flex-column">
      <div className="flex flex-row space-evenly center-items">
        <header className="heading small-width">
            <h1 className='logo'>Cinepub</h1>
        </header>
        <nav className='nav-bar medium-width'>
            <ul className="flex flex-row space-evenly no-list">
                <li className="list-item"><Link to={routes.home()}>Home</Link></li>
                <div className="dropdown">
                    <button className="dropdown-button">Find Screening</button>
                    <div className="dropdown-content">
                        <Link to={routes.movies()}>Movies</Link>
                        <Link to={routes.locations()}>Locations</Link>
                    </div>
                </div>
                <li className="list-item"><Link to={routes.partner()}>Partner with us</Link></li>
                <li className="list-item"><Link to={routes.community()}>Community</Link></li>
                <li className="list-item"><a href="login.html">Log In</a></li>
            </ul>
        </nav>
      </div>
      <LocationsLayout>
        <LocationsCell />
      </LocationsLayout>
    </div>
  )
}

export default LocationsPage
