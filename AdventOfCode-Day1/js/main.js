function GetRequiredFuel(mass){
    return Math.floor(mass / 3) - 2;
}

function updateInnerHTML(selector, newValue) {
	document.querySelector(selector).innerHTML = newValue;
}

function loadValues(selector){
    let totalReqFuel = 0;
    let list = document.querySelectorAll(selector);

    list.forEach(element => totalReqFuel += GetRequiredFuel(parseInt(element.innerHTML)));

    return totalReqFuel;
}
let total = loadValues('.list-of-modules > li');

updateInnerHTML('.totalRequired', total);
