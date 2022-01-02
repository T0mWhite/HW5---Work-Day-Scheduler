// Declaring time block variables to change colors
let nine = document.getElementById("nine");
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

// Displaying moment current date, refreshed every second.
let currentMoment = setInterval(function () {
  let today = moment();
  $("#live-date").text(today.format("dddd, MMMM Do"));
}, 1000);

// Creating an array of the time variables
let timeArray = [
  nine,
  ten,
  eleven,
  twelve,
  thirteen,
  fourteen,
  fifteen,
  sixteen,
  seventeen,
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

// Recolor time blocks based on current time
isItTime();

// storage- put something in local storage on page load, compare if something is there, if so store it
// in a variable, add to the variable, store it back in, next time loaded it will be able to use contents
// array is set outside of local storage, then sent, where it is a string, pull it out to edit the array again

// Logic for 9AM event block
// Establish variables
const nineInpTxt = document.getElementById("nineInpTxt");
const nineInsBtn = document.getElementById("nineInsBtn");
const nineOutput = document.getElementById("nineOutput");

// Create array or parse array on load
let nineStorage = [JSON.parse(localStorage.getItem("nineStorage"))] || [];
console.log(nineStorage);

// Populate event div with local storage data if found, else div is empty
nineOutput.textContent = nineStorage;

// Save event
nineInsBtn.onclick = function () {
  //   Declare variable as user input in form
  const nineEvent = nineInpTxt.value;

  //   If form has text
  if (nineEvent) {
    //   Log the old event
    console.log("Old event is " + localStorage.getItem("nineStorage"));

    // Update the event in storage array
    nineStorage.shift();
    nineStorage.push(nineEvent);

    // Send the updated array to local storage
    localStorage.setItem("nineStorage", JSON.stringify(nineEvent));
    console.log("New event is " + localStorage.getItem("nineStorage"));

    // Change the text content of the div to the new event
    nineOutput.textContent = JSON.parse(localStorage.getItem("nineStorage"));
  }
};

// Logic for 10AM event block
// Establish variables
const tenInpTxt = document.getElementById("tenInpTxt");
const tenInsBtn = document.getElementById("tenInsBtn");
const tenOutput = document.getElementById("tenOutput");

// Create array or parse array on load
let tenStorage = [JSON.parse(localStorage.getItem("tenStorage"))] || [];
console.log(tenStorage);

// Populate event div with local storage data if found, else div is empty
tenOutput.textContent = tenStorage;

// Save event
tenInsBtn.onclick = function () {
  //   Declare variable as user input in form
  const tenEvent = tenInpTxt.value;

  //   If form has text
  if (tenEvent) {
    //   Log the old event
    console.log("Old event is " + localStorage.getItem("tenStorage"));

    // Update the event in storage array
    tenStorage.shift();
    tenStorage.push(tenEvent);

    // Send the updated array to local storage
    localStorage.setItem("tenStorage", JSON.stringify(tenEvent));
    console.log("New event is " + localStorage.getItem("tenStorage"));

    // Change the text content of the div to the new event
    tenOutput.textContent = JSON.parse(localStorage.getItem("tenStorage"));
  }
};

// Logic for 11AM event block
// Establish variables
const elevenInpTxt = document.getElementById("elevenInpTxt");
const elevenInsBtn = document.getElementById("elevenInsBtn");
const elevenOutput = document.getElementById("elevenOutput");

// Create array or parse array on load
let elevenStorage = [JSON.parse(localStorage.getItem("elevenStorage"))] || [];
console.log(elevenStorage);

// Populate event div with local storage data if found, else div is empty
elevenOutput.textContent = elevenStorage;

// Save event
elevenInsBtn.onclick = function () {
  //   Declare variable as user input in form
  const elevenEvent = elevenInpTxt.value;

  //   If form has text
  if (elevenEvent) {
    //   Log the old event
    console.log("Old event is " + localStorage.getItem("elevenStorage"));

    // Update the event in storage array
    elevenStorage.shift();
    elevenStorage.push(elevenEvent);

    // Send the updated array to local storage
    localStorage.setItem("elevenStorage", JSON.stringify(elevenEvent));
    console.log("New event is " + localStorage.getItem("elevenStorage"));

    // Change the text content of the div to the new event
    elevenOutput.textContent = JSON.parse(localStorage.getItem("elevenStorage"));
  }
};

// Logic for 12PM event block
// Establish variables
const twelveInpTxt = document.getElementById("twelveInpTxt");
const twelveInsBtn = document.getElementById("twelveInsBtn");
const twelveOutput = document.getElementById("twelveOutput");

// Create array or parse array on load
let twelveStorage = [JSON.parse(localStorage.getItem("twelveStorage"))] || [];
console.log(twelveStorage);

// Populate event div with local storage data if found, else div is empty
twelveOutput.textContent = twelveStorage;

// Save event
twelveInsBtn.onclick = function () {
  //   Declare variable as user input in form
  const twelveEvent = twelveInpTxt.value;

  //   If form has text
  if (twelveEvent) {
    //   Log the old event
    console.log("Old event is " + localStorage.getItem("twelveStorage"));

    // Update the event in storage array
    twelveStorage.shift();
    twelveStorage.push(twelveEvent);

    // Send the updated array to local storage
    localStorage.setItem("twelveStorage", JSON.stringify(twelveEvent));
    console.log("New event is " + localStorage.getItem("twelveStorage"));

    // Change the text content of the div to the new event
    twelveOutput.textContent = JSON.parse(localStorage.getItem("twelveStorage"));
  }
};

// Logic for 1PM event block
// Establish variables
const oneInpTxt = document.getElementById("oneInpTxt");
const oneInsBtn = document.getElementById("oneInsBtn");
const oneOutput = document.getElementById("oneOutput");

// Create array or parse array on load
let oneStorage = [JSON.parse(localStorage.getItem("oneStorage"))] || [];
console.log(oneStorage);

// Populate event div with local storage data if found, else div is empty
oneOutput.textContent = oneStorage;

// Save event
oneInsBtn.onclick = function () {
  //   Declare variable as user input in form
  const oneEvent = oneInpTxt.value;

  //   If form has text
  if (oneEvent) {
    //   Log the old event
    console.log("Old event is " + localStorage.getItem("oneStorage"));

    // Update the event in storage array
    oneStorage.shift();
    oneStorage.push(oneEvent);

    // Send the updated array to local storage
    localStorage.setItem("oneStorage", JSON.stringify(oneEvent));
    console.log("New event is " + localStorage.getItem("oneStorage"));

    // Change the text content of the div to the new event
    oneOutput.textContent = JSON.parse(localStorage.getItem("oneStorage"));
  }
};

// Logic for 2PM event block
// Establish variables
const twoInpTxt = document.getElementById("twoInpTxt");
const twoInsBtn = document.getElementById("twoInsBtn");
const twoOutput = document.getElementById("twoOutput");

// Create array or parse array on load
let twoStorage = [JSON.parse(localStorage.getItem("twoStorage"))] || [];
console.log(twoStorage);

// Populate event div with local storage data if found, else div is empty
twoOutput.textContent = twoStorage;

// Save event
twoInsBtn.onclick = function () {
  //   Declare variable as user input in form
  const twoEvent = twoInpTxt.value;

  //   If form has text
  if (twoEvent) {
    //   Log the old event
    console.log("Old event is " + localStorage.getItem("twoStorage"));

    // Update the event in storage array
    twoStorage.shift();
    twoStorage.push(twoEvent);

    // Send the updated array to local storage
    localStorage.setItem("twoStorage", JSON.stringify(twoEvent));
    console.log("New event is " + localStorage.getItem("twoStorage"));

    // Change the text content of the div to the new event
    twoOutput.textContent = JSON.parse(localStorage.getItem("twoStorage"));
  }
};

// Logic for 3PM event block
// Establish variables
const threeInpTxt = document.getElementById("threeInpTxt");
const threeInsBtn = document.getElementById("threeInsBtn");
const threeOutput = document.getElementById("threeOutput");

// Create array or parse array on load
let threeStorage = [JSON.parse(localStorage.getItem("threeStorage"))] || [];
console.log(threeStorage);

// Populate event div with local storage data if found, else div is empty
threeOutput.textContent = threeStorage;

// Save event
threeInsBtn.onclick = function () {
  //   Declare variable as user input in form
  const threeEvent = threeInpTxt.value;

  //   If form has text
  if (threeEvent) {
    //   Log the old event
    console.log("Old event is " + localStorage.getItem("threeStorage"));

    // Update the event in storage array
    threeStorage.shift();
    threeStorage.push(threeEvent);

    // Send the updated array to local storage
    localStorage.setItem("threeStorage", JSON.stringify(threeEvent));
    console.log("New event is " + localStorage.getItem("threeStorage"));

    // Change the text content of the div to the new event
    threeOutput.textContent = JSON.parse(localStorage.getItem("threeStorage"));
  }
};

// Logic for 4PM event block
// Establish variables
const fourInpTxt = document.getElementById("fourInpTxt");
const fourInsBtn = document.getElementById("fourInsBtn");
const fourOutput = document.getElementById("fourOutput");

// Create array or parse array on load
let fourStorage = [JSON.parse(localStorage.getItem("fourStorage"))] || [];
console.log(fourStorage);

// Populate event div with local storage data if found, else div is empty
fourOutput.textContent = fourStorage;

// Save event
fourInsBtn.onclick = function () {
  //   Declare variable as user input in form
  const fourEvent = fourInpTxt.value;

  //   If form has text
  if (fourEvent) {
    //   Log the old event
    console.log("Old event is " + localStorage.getItem("fourStorage"));

    // Update the event in storage array
    fourStorage.shift();
    fourStorage.push(fourEvent);

    // Send the updated array to local storage
    localStorage.setItem("fourStorage", JSON.stringify(fourEvent));
    console.log("New event is " + localStorage.getItem("fourStorage"));

    // Change the text content of the div to the new event
    fourOutput.textContent = JSON.parse(localStorage.getItem("fourStorage"));
  }
};

// Logic for 5PM event block
// Establish variables
const fiveInpTxt = document.getElementById("fiveInpTxt");
const fiveInsBtn = document.getElementById("fiveInsBtn");
const fiveOutput = document.getElementById("fiveOutput");

// Create array or parse array on load
let fiveStorage = [JSON.parse(localStorage.getItem("fiveStorage"))] || [];
console.log(fiveStorage);

// Populate event div with local storage data if found, else div is empty
fiveOutput.textContent = fiveStorage;

// Save event
fiveInsBtn.onclick = function () {
  //   Declare variable as user input in form
  const fiveEvent = fiveInpTxt.value;

  //   If form has text
  if (fiveEvent) {
    //   Log the old event
    console.log("Old event is " + localStorage.getItem("fiveStorage"));

    // Update the event in storage array
    fiveStorage.shift();
    fiveStorage.push(fiveEvent);

    // Send the updated array to local storage
    localStorage.setItem("fiveStorage", JSON.stringify(fiveEvent));
    console.log("New event is " + localStorage.getItem("fiveStorage"));

    // Change the text content of the div to the new event
    fiveOutput.textContent = JSON.parse(localStorage.getItem("fiveStorage"));
  }
};

// let nineFormSubmit = document.querySelector('#nine-form');

// nineFormSubmit.addEventListener("submit", function(event) {
//     event.preventDefault();
//     let nineInput = document.querySelector('#nine-input');
//     let eventDescription = {
//         description: nineInput.value,
//         time: nine.time
//     }
//     localStorage.setItem('eventStorage', JSON.stringify(eventDescription));
//     eventStorage.push(eventDescription);
// });

// localStorage.setItem('eventStorage', JSON.stringify(eventDescription));

// eventStorage.forEach(function(events) {
//     nineInput.textContent = eventDescription.description;
//     window.localStorage.getItem("eventStorage", JSON.stringify(eventDescription));
// });

// let retrievedEvent = JSON.parse(localStorage.getItem("eventStorage"));

// for (let j = 0; j < retrievedEvent.length; j++) {
//     console.log(retrievedEvent[j].description);
//   }

// let eventDescription = [{ 'description': 'nineInput.value'}, {
//     '': 'Robert', 'score': 80, 'time': '15:00' }];
//     localStorage.setItem('testObject', JSON.stringify(testObject));

//     var retrievedObject = JSON.parse(localStorage.getItem('testObject'));

//     var tbody = document.getElementById('tbody');

//     for (let i = 0; i < retrievedObject.length; i++) {
//       var tr = "<tr>";
//       tr += "<td>Name</td>" + "<td>" + retrievedObject[i].name + "</td></tr>";
//       tr += "<td>Score</td>" + "<td>" + retrievedObject[i].score + "</td></tr>";
//       tr += "<td>Time</td>" + "<td>" + retrievedObject[i].time + "</td></tr>";
//       tbody.innerHTML += tr;
//     }
