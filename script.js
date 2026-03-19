function toggleMenu(){
document.getElementById("menu").classList.toggle("show");
}

function openEvent(name){
localStorage.setItem("event", name);
window.location="event-details.html";
}

const event = localStorage.getItem("event");

if(event){
document.getElementById("eventTitle").innerText = event.toUpperCase();

document.getElementById("eventImage").src = event + ".jpg";
}
