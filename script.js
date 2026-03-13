
let cart = [];
let total = 0;


function toggleMenu(){

let menu = document.getElementById("menu");

if(menu.style.display === "flex"){
menu.style.display = "none";
}else{
menu.style.display = "flex";
}

}


function toggleCart(){

let panel = document.getElementById("cart-panel");

if(panel.style.right === "0px"){
panel.style.right = "-300px";
}else{
panel.style.right = "0px";
}

}



function addToCart(name,price){

cart.push({name,price})

total += price

document.getElementById("cart-count").innerText = cart.length

updateCart()

}



function updateCart(){

let list = document.getElementById("cart-items")

list.innerHTML = ""

cart.forEach(item =>{

let li = document.createElement("li")

li.innerText = item.name + " - ₹" + item.price

list.appendChild(li)

})

document.getElementById("total").innerText = total

}
