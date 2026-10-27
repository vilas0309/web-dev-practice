export const sendFilterData = (type,destinations,place)=>{
    // const Place = type;
    // if (Place==='continent'){
    //     const filteredData = destinations.filter((destination)=>{
    //     return destination.continent.toLowerCase() === place.toLowerCase()
    //   })
    //   return filteredData;
    // }
    // if(Place==='country'){
    //     const filteredData = destinations.filter((destination)=>{
    //     return destination.country.toLowerCase() === place.toLowerCase()
    //   })
    //   return filteredData;
    // }
    // return {
    //   error: "not found",
    //   message: "The requested route does not exist"
    // };
    return destinations.filter((destination)=>{
        return destination[type].toLowerCase() === place.toLowerCase();
    })
}

