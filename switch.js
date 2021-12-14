var date = new Date()
var today = date.getDay()

// 0 - Sunday, 1 - Monday, 2 - Tuesday
//Date using If Else
if(today==0){
    console.log(today + ' Today is Sunday')
}else if(today==1){
    console.log(today + ' Today is Monday')
}else if(today==2){
    console.log(today + ' Today is Tuesday')
}else if(today==3){
    console.log(today + ' Today is Wednesday')
}else if(today==4){
    console.log(today + ' Today is Thursday')
}else if(today==5){
    console.log(today + ' Today is Friday')
}else if(today==6){
    console.log(today + ' Today is Saterday')
}else{
    console.log('Invalid Number')
}

//Date using switch condition.

switch(today){
    case 0:
        console.log('Today is Sunday.')
        break;
    case 1:
        console.log('Today is Monday.')
        break
    case 2:
        console.log('Today is Tuesday.')
        break
    case 3:
        console.log('Today is Wednesday.')
        break
    case 4:
        console.log('Today is Thursday.')
        break
    case 5:
        console.log('Today is Friday.')
        break
    case 6:
        console.log('Today is Saterday.')
        break
    default: console.log('Not a valid number.')

}