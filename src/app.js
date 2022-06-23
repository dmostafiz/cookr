import { FastifyInstance, FastifyReply, FastifyRequest, FastifyServerOptions } from 'fastify'

export default async function (instance, opts, done) {


    instance.get('/', async (req, res) => {
        res.status(200).send({
            hello: 'World'
        })
    })

    instance.register(async (instance, opts, done) => {

        instance.get('/', async (req, res) => {
            const { name = '' } = req.query
            res.status(200).send(`Hello ${name}`)
        })

        instance.get('/:name', async (req, res) => {
            const { name = '' } = req.params
            res.status(200).send(`Hello ${name}`)
        })
        done()
    }, {
        prefix: '/hello'
    })

    done()
}