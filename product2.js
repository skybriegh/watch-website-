
document.addEventListener("DOMContentLoaded", updateCartAll);

//added to cart function
function alertmsg(name, price, image) {
    //retrieve the cart from localstorage or create new 
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

// check if product already contain
let existingProduct = cart.find(item => item.name === name);
if (existingProduct){
    existingProduct.quantity +=1;
} else{
    cart.push({name, price, image, quantity: 1 });
}

//save cart to localstorage
localStorage.setItem("cart", JSON.stringify(cart));
updateCartAll();
appearPopup(`${name} added to cart!`);

}
//function to update cart count
function updateCartAll(){
    
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        document.getElementById("cart-all").textContent = totalItems;
    }


//display popup message
function appearPopup(message){
    let popup = document.createElement("div");
    popup.className = "nice-popup";
    popup.textContent = message;
    document.body.appendChild(popup);
    
    // disappear popup message after 2 seconds 
    setTimeout(() => {
        popup.remove();
    }, 2000);

    }
