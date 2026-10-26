import http from 'node:http'
import { getDataFromDB } from './database/db.js'

const PORT = 8000

const server = http.createServer(async (req, res) => {
  const destinations = await getDataFromDB()

  if (req.url === '/api' && req.method === 'GET') {
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 200
    res.end(JSON.stringify(destinations))
  } else {
    //how to handle request for which route not found
    res.setHeader('Content-Type', 'application/json')
    //Not-found :status code
    res.statusCode = 404
    // res.end("The requested route does not exist")
    res.end(JSON.stringify({error: "not found", message: "The requested route does not exist"}))
  }
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))
