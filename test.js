/**
function sleep(name, age, time){
    console.log("My name is " + name + " I am " + age 
    + " years old." + " I will sleep at " + time)
}
sleep("Riyad", 25, "12 AM");
sleep("Hemal", 24, "2 AM");
sleep("Shuvo", 28, "1 AM") */

const car = {
    name: 'Marati',
    Model:    2010,
    weight:   '1000kg',
    color:    'Red',

    start: function(){
        
        console.log('Car has started');
    },
    drive: function(){
        this.start();
        console.log('Car is driving');
    },
}

console.log(car.name);
console.log(car['color']);
car.drive();


