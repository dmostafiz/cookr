const Fastify = require('fastify')
const FastifyNextJs = require('fastify-nextjs')

const fastify = Fastify({ logger: false, pluginTimeout: 20000 })

fastify.register(FastifyNextJs, {
    dev: process.env.NODE_ENV !== 'production',
    logLevel: 'debug',
    noServerAssets: false
}).after(() => {
    fastify.next('/*')
})

fastify.get('/api', function (req, res) {
    res.send('Hello World')
})

const PORT = process.env.PORT || 3333

fastify.listen(PORT, () => {
    fastify.log.info(`Server listening on http://localhost:${PORT}`)
})