const { magentaBright, whiteBright } = require('chalk')

const app = require('./server')

const PORT = process.env.PORT || 3000

const server = app.listen(PORT)

server.on('listening', () => (
	console.log(magentaBright('Flying feathers @'), whiteBright(`https://localhost:${PORT}`))
))
