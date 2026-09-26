//Logical operators: used to manipulat or combine the boolean
                    // (ture) or (flase)
                    // AND: &&
                    // OR: ||
                    // NOT: !

let temp=100;

// if (temp>18 && temp<30){
//     console.log("CLimate is good");
// }
// else{
//     console.log("CLimate is BAD");
// }

if (temp<18 || temp>30){
    console.log("CLimate is BAD");
}
else{
    console.log("CLimate is Good");
}

let isStudent=true;

if(!isStudent){
    console.log("He is a student")
}
else{
    console.log("He is not a student")
}
