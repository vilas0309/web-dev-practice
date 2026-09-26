let marks=window.prompt('Enter your marks:')
marks=Number(marks)
switch(true){
    case marks>90:
        window.alert('Your grade is A')
        break;
    case marks>70:
        window.alert('Your grade is B')
        break;
    case marks>50:
        window.alert('Your grade is C')
        break;
    case marks<=50:
        window.alert('Your grade is F')
        break;
    default:
        window.alert('Please enter a valid marks')
}