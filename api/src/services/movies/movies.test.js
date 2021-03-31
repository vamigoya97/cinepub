import { movies, movie, createMovie, updateMovie, deleteMovie } from './movies'

describe('movies', () => {
  scenario('returns all movies', async (scenario) => {
    const result = await movies()

    expect(result.length).toEqual(Object.keys(scenario.movie).length)
  })

  scenario('returns a single movie', async (scenario) => {
    const result = await movie({ id: scenario.movie.one.id })

    expect(result).toEqual(scenario.movie.one)
  })

  scenario('creates a movie', async (scenario) => {
    const result = await createMovie({
      input: { title: 'String', director: 'String', poster_url: 'String' },
    })

    expect(result.title).toEqual('String')
    expect(result.director).toEqual('String')
    expect(result.poster_url).toEqual('String')
  })

  scenario('updates a movie', async (scenario) => {
    const original = await movie({ id: scenario.movie.one.id })
    const result = await updateMovie({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a movie', async (scenario) => {
    const original = await deleteMovie({ id: scenario.movie.one.id })
    const result = await movie({ id: original.id })

    expect(result).toEqual(null)
  })
})
