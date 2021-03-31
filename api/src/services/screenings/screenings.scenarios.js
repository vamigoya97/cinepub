export const standard = defineScenario({
  screening: {
    one: {
      date: 'String',
      time: 'String',
      movie: {
        create: { title: 'String', director: 'String', poster_url: 'String' },
      },
    },

    two: {
      date: 'String',
      time: 'String',
      movie: {
        create: { title: 'String', director: 'String', poster_url: 'String' },
      },
    },
  },
})
