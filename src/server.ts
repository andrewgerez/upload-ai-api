import { fastify } from 'fastify'

const app = fastify()

app.get('/', () => {
  return 'start :p'
})

app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP Server Running!')
})