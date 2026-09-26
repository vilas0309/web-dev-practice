// ===: strict equality operator will chect both value and datatype
// !==: similarly non equality for value and datatype

let PI=3.14;

if(PI=='3.14'){
    console.log("This is a PI.")
}
else{
    console.log("This is not a PI")
}

if(PI==='3.14'){
    console.log("This is a PI.")
}
else{
    console.log("This is not a PI")
}

if(PI===3.14){
    console.log("This is a PI.")
}
else{
    console.log("This is not a PI")
}

if(PI!=='3.14'){
    console.log("This is a PI.")
}
else{
    console.log("This is not a PI")
}

if(PI!==3.14){
    console.log("This is a PI.")
}
else{
    console.log("This is not a PI")
}