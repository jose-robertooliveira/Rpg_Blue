//A tipical day in a housewife life

const prompt = require('prompt-sync')();

class Mother {
    constructor(name, age, ocupation) {
        this.name = name;
        this.age = age;
        this.ocupation = ocupation;
    }
}

class Son extends Mother{
    constructor(name, age, ocupation, sonTask ) {
        super(name, age, ocupation)
        this.sonTask = sonTask;
        
    }
}

let aboutMother = new Mother("Mary Jane", 42, "housewife");
let aboutSon = new Son("Ozzy", 14, "student", "homework");

for(i in aboutMother) {
    console.log(`${i}: ${aboutMother[i]}`);
}
console.log("---------------------------------------")
for(i in aboutSon) {
    console.log(`${i}: ${aboutSon[i]}`);
}

class TasksMother {
    constructor() {
        this.laundry = true,
        this.dishes = true,
        this.cleanHouse = true,
        this.dinner = true
    }
}
let done = new TasksMother();
console.log(TasksMother)

while(true) {
    console.log(`
        You need to do:
        1 - laundry
        2 - dishes
        3 - cleanHouse
        4 - dinner
        5 - All Done!`);

    let choose = +prompt("What task you choose? ");
    if(choose == 1) {
        done.laundry = true;
    }
    else if( choose == 5) {
    }
    else if(done.laundry == true && done.dishes == true && done.cleanHouse == true && done.dinner == true) {
        console.log("Well done you finish your tasks!!")
        break;
    } else {
        console.log("There is tasks to be done!")
    }

}


function sonNeedsToDo(){
    var question = String(prompt("Son did you finish your homework? "));
    if(question[0] == 'yes') {
        console.log("Good my son now you can play videogame!");

    } else {
        console.log("Go ahead to your bedroom and do not play videogame, you motherfucker!")
    }

}
sonNeedsToDo();
console.log("Now mother is time to sleep, your day was so crazy, good rest");