import http from 'node:http'

const server = http.createServer((req,res)=>{
  //requested url:http://127.0.0.1:8000/api?name=tom&country=uk
  //object to get req header information
  const urlObj = new URL(req.url,`http://${req.headers.host}`)

  //object to get url query parameters header
  const queryObj = Object.fromEntries(urlObj.searchParams)

  console.log(queryObj)
  //output:{ name: 'tom', country: 'uk' }
})

server.listen(8000,()=>console.log('Server listening port 8000'))