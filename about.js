console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Your form has been submitted successfully');
}
function handleMouseOver() {
	alert('You are great');
}


let form = document.querySelector('#contact');
let pic = document.querySelector("img")


form.addEventListener('submit', handleSubmit);
pic.addEventListener('mouseover', handleMouseOver)