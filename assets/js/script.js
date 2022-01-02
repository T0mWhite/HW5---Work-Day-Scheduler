// Declaring time block variables
let nine = document.getElementById("nine");
nine.time = 9;
// let ten = document.querySelector("#ten");
// ten.time = 10;
// let eleven = document.querySelector("#eleven");
// eleven.time = 11;
// let twelve = document.querySelector("#twelve");
// twelve.time = 12;
// let thirteen = document.querySelector("#thirteen");
// thirteen.time = 13;
// let fourteen = document.querySelector("#fourteen");
// fourteen.time = 14;
// let fifteen = document.querySelector("#fifteen");
// fifteen.time = 15;
// let sixteen = document.querySelector("#sixteen");
// sixteen.time = 16;
// let seventeen = document.querySelector("#seventeen");
// seventeen.time = 17;

// Declaring local storage outputs
const nineEvent = document.getElementById("nineInput");
const nineInsert = document.getElementById("nineInsert");

// Displaying moment current date, refreshed every second.
let currentMoment = setInterval(function () {
  let today = moment();
  $("#live-date").text(today.format("dddd, MMMM Do"));
}, 1000);

// Creating an array of the time variables
let timeArray = [
  nine,
//   ten,
//   eleven,
//   twelve,
//   thirteen,
//   fourteen,
//   fifteen,
//   sixteen,
//   seventeen,
];

console.log("Current time is " + moment().hours());

const isItTime = () => {
  // Checks for a match with current hour to time slots
  for (let i = 0; i < timeArray.length; i++) {
    console.log("Time is " + timeArray[i].time);
    let schedTime = timeArray[i].time;
    console.log(schedTime);
    // Current time block is displayed red
    if (moment().hours() === schedTime) {
      timeArray[i].setAttribute("style", "background-color: red");
      console.log("moment().hours === schedTime was true!");
      //   Upcoming time blocks are displayed green
    } else if (moment().hours() < schedTime) {
      timeArray[i].setAttribute("style", "background-color: green");
      console.log("moment().hours < schedTime was true!");
      //   Past time blocks are displayed grey
    } else if (moment().hours() > schedTime) {
      timeArray[i].setAttribute("style", "background-color: grey");
      console.log("moment().hours > schedTime was true!");
    }
  }
};

// Recolors time blocks
isItTime();

// for (let i = 0; i < timeArray.length; i++) {
//     // schedTime = timeArray[i];
//     console.log("Time is " + timeArray[i].time);
//     }

// storage- put something in local storage on page load, compare if something is there, if so store it
// in a variable, add to the variable, store it back in, next time loaded it will be able to use contents
// array is set outside of local storage, then sent, where it is a string,  pull it out to edit the
// array again

// Creates eventStorage item in local storage if it doesn't exist.
const storageLoad = () => {
    if (localStorage.getItem("eventStorage") === null) {
        localStorage.setItem("eventStorage", "Test");
    } else if (localStorage.getItem("eventStorage") !== null) {
        console.log(localStorage.getItem("eventStorage"));
    }
};

storageLoad();

const saveToStorage = (userChoice) => {
  let eventDescription = userChoice.currentTarget;
  if (eventStorage.includes(eventDescription) !== true) {
    eventStorage.push(eventDescription);
    localStorage.setItem("eventStorage", JSON.stringify(eventStorage));
}
};

let eventStorage = [] || JSON.parse(window.localStorage.getItem("eventStorage"));
console.log(eventStorage);
eventStorage = console.log(window.localStorage.getItem("eventStorage"));
console.log(JSON.parse(window.localStorage.getItem("eventStorage")));

console.log(eventStorage);

let nineFormSubmit = document.querySelector('#nine-form');

nineFormSubmit.addEventListener("submit", function(event) {
    event.preventDefault();
    let nineInput = document.querySelector('#nine-input');
    let eventDescription = {
        description: nineInput.value,
        time: nine.time
    }
    localStorage.setItem('eventStorage', JSON.stringify(eventDescription));
    eventStorage.push(eventDescription);
});

localStorage.setItem('eventStorage', JSON.stringify(eventDescription));

eventStorage.forEach(function(events) {
    nineInput.textContent = eventDescription.description;
    window.localStorage.getItem("eventStorage", JSON.stringify(eventDescription));
});

let retrievedEvent = JSON.parse(localStorage.getItem("eventStorage"));

for (let j = 0; j < retrievedEvent.length; j++) {
    console.log(retrievedEvent[j].description);
  }

let eventDescription = [{ 'description': 'nineInput.value'}, {
    '': 'Robert', 'score': 80, 'time': '15:00' }];
    localStorage.setItem('testObject', JSON.stringify(testObject));

    var retrievedObject = JSON.parse(localStorage.getItem('testObject'));

    var tbody = document.getElementById('tbody');

    for (let i = 0; i < retrievedObject.length; i++) {
      var tr = "<tr>";
      tr += "<td>Name</td>" + "<td>" + retrievedObject[i].name + "</td></tr>";
      tr += "<td>Score</td>" + "<td>" + retrievedObject[i].score + "</td></tr>";
      tr += "<td>Time</td>" + "<td>" + retrievedObject[i].time + "</td></tr>";
      tbody.innerHTML += tr;
    }

console.log(localStorage.getItem(eventStorage));

// let tenFormSubmit = document.querySelector('#ten-form');

// tenFormSubmit.addEventListener("submit", function(event) {
//     event.preventDefault();
//     let tenInput = document.querySelector('#ten-input');
//     let eventDescription = {
//         description: tenInput.value,
//         time: ten.time
//     }
//     localStorage.setItem('eventStorage', JSON.stringify(eventDescription));
// });

// let elevenFormSubmit = document.querySelector('#eleven-form');

// elevenFormSubmit.addEventListener("submit", function(event) {
//     event.preventDefault();
//     let elevenInput = document.querySelector('#eleven-input');
//     let eventDescription = {
//         description: elevenInput.value,
//         time: eleven.time
//     }
//     localStorage.setItem('eventStorage', JSON.stringify(eventDescription));
// });

// let twelveFormSubmit = document.querySelector('#twelve-form');

// twelveFormSubmit.addEventListener("submit", function(event) {
//     event.preventDefault();
//     let twelveInput = document.querySelector('#twelve-input');
//     let eventDescription = {
//         description: twelveInput.value,
//         time: twelve.time
//     }
//     localStorage.setItem('eventStorage', JSON.stringify(eventDescription));
// });

// let thirteenFormSubmit = document.querySelector('#thirteen-form');

// thirteenFormSubmit.addEventListener("submit", function(event) {
//     event.preventDefault();
//     let thirteenInput = document.querySelector('#thirteen-input');
//     let eventDescription = {
//         description: thirteenInput.value,
//         time: thirteen.time
//     }
//     localStorage.setItem('eventStorage', JSON.stringify(eventDescription));
// });

// let fourteenFormSubmit = document.querySelector('#fourteen-form');

// fourteenFormSubmit.addEventListener("submit", function(event) {
//     event.preventDefault();
//     let fourteenInput = document.querySelector('#fourteen-input');
//     let eventDescription = {
//         description: fourteenInput.value,
//         time: fourteen.time
//     }
//     localStorage.setItem('eventStorage', JSON.stringify(eventDescription));
// });

// let fifteenFormSubmit = document.querySelector('#fifteen-form');

// fifteenFormSubmit.addEventListener("submit", function(event) {
//     event.preventDefault();
//     let fifteenInput = document.querySelector('#fifteen-input');
//     let eventDescription = {
//         description: fifteenInput.value,
//         time: fifteen.time
//     }
//     localStorage.setItem('eventStorage', JSON.stringify(eventDescription));
// });

// let sixteenFormSubmit = document.querySelector('#sixteen-form');

// sixteenFormSubmit.addEventListener("submit", function(event) {
//     event.preventDefault();
//     let sixteenInput = document.querySelector('#sixteen-input');
//     let eventDescription = {
//         description: sixteenInput.value,
//         time: sixteen.time
//     }
//     localStorage.setItem('eventStorage', JSON.stringify(eventDescription));
// });

// let seventeenFormSubmit = document.querySelector('#seventeen-form');

// seventeenFormSubmit.addEventListener("submit", function(event) {
//     event.preventDefault();
//     let seventeenInput = document.querySelector('#seventeen-input');
//     let eventDescription = {
//         description: seventeenInput.value,
//         time: seventeen.time
//     }
//     localStorage.setItem('eventStorage', JSON.stringify(eventDescription));
// });
