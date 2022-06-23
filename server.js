const Fastify = require('fastify')
const FastifyNextJs = require('fastify-nextjs')

const fastify = Fastify({ logger: false, pluginTimeout: 20000 })

fastify.register(FastifyNextJs, {
    dev: process.env.NODE_ENV !== 'production',
    logLevel: 'debug',
    noServeAssets: true
}).after(() => {
    fastify.next('/*')
})


fastify.get('/api', function (req, res) {
    res.send('Hello World')
})

const PORT = process.env.PORT || 3001


fastify.listen({ port: PORT, host: '0.0.0.0' }, function (err, address) {
    
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }

    fastify.log.info(`server listening on ${address}`)

})