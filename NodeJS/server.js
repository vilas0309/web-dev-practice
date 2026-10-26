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
    res.end("Hello from the server!")
})

server.listen(PORT,()=> console.log(`server running on port:${PORT}`))