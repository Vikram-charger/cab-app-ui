let cabType = localStorage.getItem("cabSelected");
let kms = localStorage.getItem("DistanceToTravel");
let journeyDate = localStorage.getItem("JourneyDate");
let pickTime = localStorage.getItem("PickUpTime");
let dob = localStorage.getItem("DateOfBirth");
let age = findAge(dob);
let gst = 7;
let totalCalculatedPrice = calculatePrice(); 
console.log(totalCalculatedPrice);
let printBtn = document.getElementById('printBill');
let payBtn = document.getElementById('payBill');

document.getElementById('cabType').innerHTML = cabType;
document.getElementById('distanceToTravel').innerHTML = kms;
document.getElementById('travelDate').innerHTML = journeyDate;
document.getElementById('pickUpTime').innerHTML = pickTime;
document.getElementById('age').innerHTML = age;
document.getElementById('gst').innerHTML = gst;

checkSeniorCitizen(age,totalCalculatedPrice);
//Function to find Age.
function findAge(dob){
    let birthYear = new Date(dob).getFullYear();
    let currDate = new Date();
    let currYear = currDate.getFullYear();
    let age = currYear - birthYear;
    return age;
}
//Function to  Calculate Price.
function calculatePrice(){
    let price = localStorage.getItem("CalculatedPrice");
    let totalPrice = calculateGstPrice(price);
    let roundedPrice = Math.round(totalPrice);
    return roundedPrice;
}
//Function to calculate gst price.
customElements
function calculateGstPrice(billPrice){
    let bPrice = Number(billPrice);
    let calculatedPrice = bPrice + (bPrice * (gst / 100));
    return calculatedPrice;
}
function checkSeniorCitizen(age, totalCalculatedPrice){
    if(age < 60){
        document.getElementById('price').innerHTML = totalCalculatedPrice;
    }
    if(age >=60){
        document.getElementById('seniorCitizen').innerHTML = "50% discount applied";
        document.getElementById('price').innerHTML = totalCalculatedPrice/2;
    }
}
//click event for print the bill.
printBtn.addEventListener("click", function(){
    printBtn.hidden = false;
    if(!printBtn.hidden){
        printBtn.hidden = true;
    }
    window.print();
});
//peak hour
function isPeakHour(pickTime){
    let time = new Date(pickTime);
    let hour = time.getHours();
    console.log(hour);
    if(hour >= 17 && hour <= 19) return true;
    return false;
}