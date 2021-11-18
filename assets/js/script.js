
setInterval(function() {
    let today = moment();
    $("#live-date").text(today.format("dddd, MMMM Do"));
}, 1000);

// setInterval(deezNuts, 1000);
// function deezNuts() {
    //     let today = moment();
    //     $("#live-date").text(today.format("dddd, MMMM Do"));
    // }
    
    // let currentTime = moment().format();
    
    let nine = document.querySelector("#nine");
    nine.time = 9;
    let ten = document.querySelector("#ten");
    ten.time = 10;
    let eleven = document.querySelector("#eleven");
    eleven.time = 11;
    let twelve = document.querySelector("#twelve");
    twelve.time = 12;
    let thirteen = document.querySelector("#thirteen");
    thirteen.time = 13;
    let fourteen = document.querySelector("#fourteen");
    fourteen.time = 14;
    let fifteen = document.querySelector("#fifteen");
    fifteen.time = 15;
    let sixteen = document.querySelector("#sixteen");
    sixteen.time = 16;
let seventeen = document.querySelector("#seventeen");
seventeen.time = 17;



let timeArray = [nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen];

console.log("call here1");

let schedTime;

isItTime();

function isItTime() {
    for (let i = 0; i < timeArray.length; i++) {
        console.log("Time is " + timeArray[i].time);
        schedTime = timeArray[i].time;
        if (moment().hours() === schedTime) {
            timeArray[i].setAttribute("style", "background-color: red");
            console.log("moment().hours === schedTime was true!");
        } else if (moment().hours() < schedTime) {
            timeArray[i].setAttribute("style", "background-color: green");
            console.log("moment().hours < schedTime was true!");
        } else if (moment().hours() > schedTime) {
            timeArray[i].setAttribute("style", "background-color: grey");
            console.log("moment().hours > schedTime was true!");
        }
    }
}


console.log(schedTime);




console.log("Current time is " + moment().hours());

// for (let i = 0; i < timeArray.length; i++) {
    //     // schedTime = timeArray[i];
//     console.log("Time is " + timeArray[i].time);
//     }


// storage


let eventStorage = [] || JSON.parse(window.localStorage.getItem("eventStorage"));

let nineFormSubmit = document.querySelector('#nine-form');


nineFormSubmit.addEventListener("submit", function(event) {
    event.preventDefault();
    let nineInput = document.querySelector('#nine-input');    
    
    let eventDescription = {
        description: nineInput.value,
        time: nine.time
    }

    localStorage.setItem('eventStorage', JSON.stringify(eventDescription));
});

// eventStorage.push(eventDescription);


// let eventTime = document.querySelector('');
