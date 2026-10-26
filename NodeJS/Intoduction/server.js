//NodeJS : environment to javascript outside the browser, used for backend development
//npm init :to create package.json,
//npm start :to the selected file.
// console.log("We have package.json!")


// changed the type to module in package.json , I can import ES modules
// added 'node:' before module to node that I'm importing a node not a javascript one
import http from "node:http"    
// 1. allows data to be transferred over the HTTP protocol
// 2. create servers
// 3. handel requests from clients
// 4. Provide responses to those request

const PORT = 8000
const server = http.createServer((req,res)=>{
    //REQUEST OBJECT
    const request=req.url
    const reqMethod = req.method
    // console.log(reqMethod)
    //1.give us access to incoming data
    //2.the url client used
    // 3.the headers
    // 4.any data sent
    // 5.the method(GET,POST,DELETE )

    //TO SEND DATA OVER HTTP FROM SERVER
    // To send a specific data only
    res.write('This is some data \n')
    res.write('This is some more data \n')
    //TO END HTTPS RESPONSE
  //res.emd(specific data,encryption type,callback function)
  if (request === '/api' && reqMethod === 'GET'){
    res.end("Hello from the server!")
  }
  else{
    res.end("Wrong request")
  } 
    
    // send specific content type
    // set status codes (200,400,etc)
    // provide content (html,JSON,image)
})
server.listen(PORT,()=> console.log(`server running on port:${PORT}`))
