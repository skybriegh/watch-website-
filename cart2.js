// wait until the DOM content is fully loaded before running the cart code
document.addEventListener("DOMContentLoaded", loadCart);


//load the cart from localstorage , display each item, and calculte total amount
function loadCart() {

    //retrieve the cart from localstorage; if it doesnt exist, use an empty array concept
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    //get references to the cart container and the element displaying total price
    let cartContainer = document.querySelector(".cart-container");
    let cartTotal = document.getElementById("cart-total");
    
    //clear any existing content in the cart container
    cartContainer.innerHTML = "";

    //initialize variable from 0 to calculate total price
    let total = 0;
     
    //loop through each item in the cart array
    cart.forEach((item, product2) => {

        //create new div element to represent cart item
        let div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <p>${item.name}</p>
            <p>$${item.price} x ${item.quantity}</p>
            <button class="remove-btn" onclick="removeFromCart(${product2})">Remove</button>
        `;
        cartContainer.appendChild(div);
        total += item.price * item.quantity;
    });

    cartTotal.textContent = `Total: $${total}`;
}

//remove the specific item from cart based on its product page
function removeFromCart(product2) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(product2, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

// Clear Cart
document.getElementById("clear-cart").addEventListener("click", () => {
    localStorage.removeItem("cart");
    loadCart();
});