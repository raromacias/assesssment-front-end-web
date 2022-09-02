//Step 1 get elements
const myFavColorBtn = document.querySelector("#color")
const myFavPlaceBtn = document.querySelector("#place")
const myFavRitualBtn = document.querySelector("#ritual")




//step 2 make functions

function myFavColor(evt) {
	evt.preventDefault();
	
	alert('My favorite color is lavender');
}

function myFavPlace(evt) {
	evt.preventDefault();
	
	alert('My favorite place is a coastline');
}

function myFavRitual(evt) {
	evt.preventDefault();
	
	alert('My favorite ritual is making some coffee first thing in the morning');
}


//step 3 combine steps 1 and 2 using addEventListener
myFavColorBtn.addEventListener("click", myFavColor)
myFavPlaceBtn.addEventListener("click", myFavPlace)
myFavRitualBtn.addEventListener("click", myFavRitual)