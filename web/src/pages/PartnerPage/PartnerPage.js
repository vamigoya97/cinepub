import { Link, routes } from '@redwoodjs/router'

const PartnerPage = () => {
  return (
    <>
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
        <div class="padding margin">
            <h2>Fill out your info to become a potential partner!</h2>
            <form class="margin small-width">
                <input type="text" id="first-name" placeholder="First Name"></input>
                <input type="text" id="last-name" placeholder="Last Name"></input>
            </form>
            <form class="margin">
                <input class="small-width" type="text" id="email" placeholder="Email"></input>
            </form>
            <form class="margin">
                <p>Are you the owner of the venue?</p>
                <input type="radio" id="yes"></input>
                <label for="yes">Yes</label>
                <input type="radio" id="no"></input>
                <label for="no">No</label>
                <p>Are you willing to adhere to the rules and regulations put forth by Cinepub?</p>
                <input type="radio" id="yes"></input>
                <label for="yes">Yes</label>
                <input type="radio" id="no"></input>
                <label for="no">No</label>
            </form>
            <textarea class="margin small-width" rows="5" placeholder="Provide a brief explanation of your location">
            </textarea>
            <form class="margin">
                <button type="submit">Submit</button>
            </form>
        </div>
      </div>
    </>
  )
}

export default PartnerPage
