export const sendJSONRsponse = (res,statusCode,paylod) =>{
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = statusCode
    res.end(JSON.stringify(paylod))
}