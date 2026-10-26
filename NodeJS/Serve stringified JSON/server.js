import http from "node:http"    
import { getDataFromDB } from "./database/db.js"
const PORT = 8000
const server = http.createServer(async (req,res)=>{
    const request=req.url
    const reqMethod = req.method
    const destination = await getDataFromDB()

  if (request === '/api' && reqMethod === 'GET'){
    res.end(JSON.stringify(destination))
  }

})
server.listen(PORT,()=> console.log(`server running on port:${PORT}`))
