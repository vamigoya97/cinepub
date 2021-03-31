import { db } from 'src/lib/db'

export const movies = () => {
  return db.movie.findMany()
}

export const movie = ({ id }) => {
  return db.movie.findUnique({
    where: { id },
  })
}

export const createMovie = ({ input }) => {
  return db.movie.create({
    data: input,
  })
}

export const updateMovie = ({ id, input }) => {
  return db.movie.update({
    data: input,
    where: { id },
  })
}

export const deleteMovie = ({ id }) => {
  return db.movie.delete({
    where: { id },
  })
}

export const Movie = {
  screening: (_obj, { root }) =>
    db.movie.findUnique({ where: { id: root.id } }).screening(),
}
