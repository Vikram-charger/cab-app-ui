let journeyDate = document.getElementById('journeyDate');
let pickTime = document.getElementById('pickUpTime');
let dob = document.getElementById('dateOfBirth');
let isSeniorCitizen = document.getElementById('isSeniorCitizen');
let bookBtn = document.getElementById('bookBtn');

function getTripDetails(){
    event.preventDefault();
    let travelDate = journeyDate.value;
    let pickUpTime = pickTime.value;
    let dateOfBirth = dob.value;
    let seniorCitizen = isSeniorCitizen.value;
    let getGender = document.querySelector('input[name="gender"]:checked').value;
    // console.log(travelDate);
    // console.log(pickUpTime);
    // console.log(seniorCitizen); 
    // console.log(getGender);
    localStorage.setItem("JourneyDate", travelDate);
    localStorage.setItem("PickUpTime", pickUpTime);
    localStorage.setItem("DateOfBirth", dateOfBirth);
    if (seniorCitizen == "on") localStorage.setItem("isSeniorCitizen", "true");
    else localStorage.setItem("isSeniorCitizen", "false");
    localStorage.setItem("Gender", getGender);
    window.location.assign("Bill.html");
}