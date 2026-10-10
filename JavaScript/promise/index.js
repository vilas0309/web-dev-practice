//Promise = An object that manages asynchronus operations.Warp a promise around {asynchronous code}
//          "I promise to return a value"
//          PENDING -> RESOLVED or REJECTED
//          new Promise((resolve,reject)=>{asynchronous})

//DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

function walkdog(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const dogwalked = true;

            if(dogwalked){
                resolve("You walk the dog.")
            }
            else{
                reject("You didn't walk the dog.")
            }
        }, 1500);
    })
};

function cleankitchen(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const kitchencleaned = false;
        if(kitchencleaned){
            resolve("You cleaned the kitchen.")
        }
        else{
            reject("You didn't cleaned the kitchen.")
        }
        }, 2000);  
    })
};

function taketrash(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const trashout = true;
            if(trashout){
                resolve("You took out the trash.")
            }
            else{
                reject("You didn't took out the trash.")
            }
        }, 500);
    })
}

walkdog().then(value =>{console.log(value); return cleankitchen();})
         .then(value=>{console.log(value); return taketrash();})
         .then(value=>{console.log(value); return console.log("Completed all the taskes.");})
         .catch(error => console.error(error)); 