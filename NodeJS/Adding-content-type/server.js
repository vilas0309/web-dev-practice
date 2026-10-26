import http from 'node:http'
import { getDataFromDB } from './database/db.js'
 
const PORT = 8000

const server = http.createServer(async (req, res) => {
  const destinations = await getDataFromDB()


  if (req.url === '/api' && req.method === 'GET') {
    //setting content type of the response
    res.setHeader('Contenet-type','application/json')
    //providing status code of the response
    res.statusCode = 200
    res.end(JSON.stringify(destinations))
  }
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))
