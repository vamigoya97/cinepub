// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/community" page={CommunityPage} name="community" />
      <Route path="/partner" page={PartnerPage} name="partner" />
      <Route path="/locations/new" page={NewLocationPage} name="newLocation" />
      <Route path="/locations/{id:Int}/edit" page={EditLocationPage} name="editLocation" />
      <Route path="/locations/{id:Int}" page={LocationPage} name="location" />
      <Route path="/locations" page={LocationsPage} name="locations" />
      <Route path="/movies/new" page={NewMoviePage} name="newMovie" />
      <Route path="/movies/{id:Int}/edit" page={EditMoviePage} name="editMovie" />
      <Route path="/movies/{id:Int}" page={MoviePage} name="movie" />
      <Route path="/movies" page={MoviesPage} name="movies" />
      <Route path="/screenings/new" page={NewScreeningPage} name="newScreening" />
      <Route path="/screenings/{id:Int}/edit" page={EditScreeningPage} name="editScreening" />
      <Route path="/screenings/{id:Int}" page={ScreeningPage} name="screening" />
      <Route path="/screenings" page={ScreeningsPage} name="screenings" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
