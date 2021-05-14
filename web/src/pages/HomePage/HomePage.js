import { Link, routes } from '@redwoodjs/router'

const HomePage = () => {
  return (
    <>
        <div className="flex flex-row space-evenly center-items">
            <header className="small-width">
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
                    <li className="list-item"><a href="./pages/login.html">Log In</a></li>
                </ul>
            </nav>
        </div>
        <h2 className="text-center">A new and intimate cinematic experience.</h2>
        <p className="margin padding">Cinepub intends to modernize the movie-going experience as an alternative to a casual night out by bringing together smaller groups of people in smaller sized screening areas. Just like in the early ages of cinema with Nickelodeon theaters, Cinepub will connect local businesses, public spaces or any other piece of real estate deemed safe and compliant, with the average movie-goer eager for a unique screening experience near them.</p>
        <div className="padding flex flex-row center-items">
            <div className="card-1 padding margin medium-width large-height text-center flex center-items">
                <h2>Learn more about the types of movies in our carefully curated catalog</h2>
            </div>
            <div className="flex flex-column medium-width text-center">
                <div className="card-1 padding margin medium-height">
                    <h3>Check out our newest locations!</h3>
                </div>
                <div className="card-1 padding margin medium-height">
                    <h3>Here are five movies you can't miss now showing at cinepub locations</h3>
                </div>
            </div>
        </div>
        <div className="padding margin">
            <section className="flex flex-row space-between full-width quote text-center center-items">
                <h3>"The movie experience of the future. Can't wait to be part of another screening."</h3>
                <p> - Cinepub attendee</p>
            </section>
        </div>
        <div className="flex flex-row margin">
            <div className="card-1 padding margin small-width text-center">
                <p>Attend a film premiere in New York City's Mr. Purple rooftop</p>
            </div>
            <div className="card-1 padding margin small-width text-center">
                <p>Review our lineup for next week's Korean cinema marathon</p>
            </div>
            <div className="card-1 padding margin small-width text-center">
                <p>Don't forget to fill out the short customer feedback survey</p>
            </div>
        </div>
        <div className="card-1 padding margin large-width text-center">
            <h3>Follow us on social media!</h3>
        </div>
    </>
  )
}

export default HomePage
