selectElement = document.querySelector('#cabType');
let kms = document.getElementById('kms');

function SelectCab(){
    event.preventDefault();
    selectedCab = selectElement.options[selectElement.selectedIndex].value;
    traveDistance = kms.value;
    priceTotal = calculatePrice(selectedCab, traveDistance);
    document.getElementById('calculatedPrice').innerHTML = priceTotal;
    localStorage.setItem("cabSelected", selectedCab);
    localStorage.setItem("DistanceToTravel", traveDistance);
    localStorage.setItem("CalculatedPrice", priceTotal);
    //alert("Your preferred cab is"+" "+selectedCab+" "+"for"+" "+traveDistance+" "+"kms");
}

function calculatePrice(cabType, kms){
    if(cabType == "MICRO"){
        price = 10 * kms;
    }
    if(cabType == "MINI"){
        price = 15 * kms;
    }
    if(cabType == "PRIME"){
        price = 20 * kms;
    }
    return price;
}