//Error= An object that represents an error when a script is running. It contains information about the error, such as its name, message, and stack trace. The Error object can be created using the Error constructor or by throwing an error using the throw statement.

//try{}= The try statement allows you to define a block of code to be tested for errors while it is being executed. It is used in conjunction with the catch statement to handle any exceptions that may occur during the execution of the code within the try block.
//catch{}= The catch statement is used to handle exceptions that occur in the try block. It allows you to define a block of code that will be executed if an error is thrown in the try block. The catch block can access the error object to get information about the error that occurred.
//finally{}= The finally statement is used to define a block of code that will be executed after the try and catch blocks, regardless of whether an error occurred or not. It is often used for cleanup operations, such as closing files or releasing resources.

//throw= The throw statement is used to create a custom error and throw it. It can be used to throw built-in error types or custom error objects. When an error is thrown, the control flow of the program is interrupted, and the nearest catch block is executed to handle the error.

try{
    // console.log(x);
    console.log('Program starts');
}
catch(err){
    console.error('Error: ' + err.message);
}
finally{
    console.log('Finally block executed');
}

console.log('Program ends');