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
    // To send a specific data only
    res.write('This is some data \n')
    res.write('This is some more data \n')
  //res.emd(specific data,encryption type,callback function) 
    res.end("Hello from the server!","utf8",()=> console.log("response ended"))
    // send specific content type
    // set status codes (200,400,etc)
    // provide content (html,JSON,image)
})
server.listen(PORT,()=> console.log(`server running on port:${PORT}`))
