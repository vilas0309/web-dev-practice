//Async/Await = Async = makes a function return a promise
//              Await = makes an async function wait for a promise

//              Allows you write asynchronous code in a synchronous manner
//              Async doesn't have resolve or reject parameters
//              Everything after Await is placed in an event queue

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
            const kitchencleaned = true;
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

async function doChores() {
    try{
        const walkDogResult = await walkdog();
        console.log(walkDogResult);

        const cleankitchenResult = await cleankitchen();
        console.log(cleankitchenResult);

        const takeOutTrashResult = await taketrash();
        console.log(takeOutTrashResult);

        console.log("Completed all chores.")
    }
    catch(error){
        console.error(error);
    }
}

doChores();