const fastify = require("fastify")()
const fastifyStatic = require("fastify-static")
const searchTree = require("./searchTree/index")
const path = require("path")

if (process.env.NODE_ENV === "production") {
  fastify.register(fastifyStatic, {
    root: path.join(__dirname, "../..", "build")
  })
}

fastify.get("/api", async (request, reply) => {
  return searchTree.search({
    query: request.query.query,
    countryCode: request.query.country_code
  })
})

const start = async () => {
  try {
    await fastify.listen(2700)
    console.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

start()
