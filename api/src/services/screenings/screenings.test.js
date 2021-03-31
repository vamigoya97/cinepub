import {
  screenings,
  screening,
  createScreening,
  updateScreening,
  deleteScreening,
} from './screenings'

describe('screenings', () => {
  scenario('returns all screenings', async (scenario) => {
    const result = await screenings()

    expect(result.length).toEqual(Object.keys(scenario.screening).length)
  })

  scenario('returns a single screening', async (scenario) => {
    const result = await screening({ id: scenario.screening.one.id })

    expect(result).toEqual(scenario.screening.one)
  })

  scenario('creates a screening', async (scenario) => {
    const result = await createScreening({
      input: {
        date: 'String',
        time: 'String',
        movieId: 'scenario.screening.two.movieId',
      },
    })

    expect(result.date).toEqual('String')
    expect(result.time).toEqual('String')
    expect(result.movieId).toEqual('scenario.screening.two.movieId')
  })

  scenario('updates a screening', async (scenario) => {
    const original = await screening({ id: scenario.screening.one.id })
    const result = await updateScreening({
      id: original.id,
      input: { date: 'String2' },
    })

    expect(result.date).toEqual('String2')
  })

  scenario('deletes a screening', async (scenario) => {
    const original = await deleteScreening({ id: scenario.screening.one.id })
    const result = await screening({ id: original.id })

    expect(result).toEqual(null)
  })
})
