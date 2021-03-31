import { db } from 'src/lib/db'

export const screenings = () => {
  return db.screening.findMany()
}

export const screening = ({ id }) => {
  return db.screening.findUnique({
    where: { id },
  })
}

export const createScreening = ({ input }) => {
  return db.screening.create({
    data: input,
  })
}

export const updateScreening = ({ id, input }) => {
  return db.screening.update({
    data: input,
    where: { id },
  })
}

export const deleteScreening = ({ id }) => {
  return db.screening.delete({
    where: { id },
  })
}

export const Screening = {
  location: (_obj, { root }) =>
    db.screening.findUnique({ where: { id: root.id } }).location(),
  movie: (_obj, { root }) =>
    db.screening.findUnique({ where: { id: root.id } }).movie(),
}
