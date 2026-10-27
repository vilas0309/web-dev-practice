import http from 'node:http'
import { getDataFromDB } from './database/db.js'
import { sendJSONRsponse } from './sendJSONResponse.js'
import {sendFilterData} from './sendFilterData.js'

const PORT = 8000

const server = http.createServer(async (req, res) => {
  const destinations = await getDataFromDB()
  const errorMesagge = {
      error: "not found",
      message: "The requested route does not exist"
    }

  if (req.url === '/api' && req.method === 'GET') {
    sendJSONRsponse(res,200,destinations)
  } 
  else if (req.url.startsWith('/api/continent/') && req.method==='GET') {
    const continent = req.url.split('/').pop()
      const filteredData = sendFilterData('continent',destinations,continent)
      sendJSONRsponse(res,200,filteredData)
    }
  else if (req.url.startsWith('/api/country/') && req.method==='GET') {
      const country = req.url.split('/').pop()
    const filteredData = sendFilterData('country',destinations,country)
      sendJSONRsponse(res,200,filteredData)
    } 
    else {
      sendJSONRsponse(res,404,errorMesagge)
  }
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))
