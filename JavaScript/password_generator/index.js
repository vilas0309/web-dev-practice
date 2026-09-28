function generatePassword(passwordLenght, lowercaseIsAllowed, upperrcaseIsAllowed, numbersIsAllowed, symbolsIsAllowed){
    const lowerChar='abcdefghijklmnopqsrtvuwxy'
    const upperChar='ABCDEFGHIJKLMNOPQSRTVUWXY'
    const numbers='1234567890'
    const symbols='!@#$%^&*()?'
    let charsAllowed='';
    let password='';

    charsAllowed += lowercaseIsAllowed ? lowerChar: " ";
    charsAllowed += upperrcaseIsAllowed ? upperChar: " ";
    charsAllowed += numbersIsAllowed ? numbers: " ";
    charsAllowed += symbolsIsAllowed ? symbols: " ";
    // console.log(charsAllowed)

    if (passwordLenght<=0){
        return '(Password lenght must atleast one.)'
    }

    if (charsAllowed.length===0){
        return '(Please select atleast one option.)'
    }
    // console.log(charsAllowed.length)
    for(let i=0;i<passwordLenght;i++){
        let temp=Math.floor(Math.random()*charsAllowed.length)+1
        // console.log(temp)
        password +=charsAllowed[temp]
    }
    return password
}

let passwordLenght = 10
let lowercaseIsAllowed = true
let upperrcaseIsAllowed = true
let numbersIsAllowed = true
let symbolsIsAllowed = true

const password = generatePassword(passwordLenght, lowercaseIsAllowed, upperrcaseIsAllowed, numbersIsAllowed, symbolsIsAllowed)

console.log(password)