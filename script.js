let cart =[]

function addToCart(name,price){
    const item = cart.find(product=> product.name == name)

    if(item){
        item.quantity++
    }
    else{
        cart.push(
            {
        name:name,
        price:price,
        quantity:1
            }
        )
    }
    displayCart()
}

function removeItem(name){
    cart = cart.filter(product=>product.name !== name)
    displayCart()
}
function changeQuantity(name, amount){
    const item = cart.find(product=>product.name === name)
    if(item){
        item.quantity +=amount;

        if(item.quantity <= 0){
            removeItem(name)
            return;
        }
    }
    displayCart()
}

function displayCart() {
const cartItems = document.getElementById("cartItems")
const total = document.getElementById("total")

    cartItems.innerHTML = "";
    let totalPrice = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
    }


    cart.forEach(item => {
        let itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;


        cartItems.innerHTML += `
            <div class="cart-item" style="align-items: center; text-align:center; background:pink; max-width:800px margin-left:30%; padding:20px">
                <div>
                    <strong style="color:black;, border-bottom:1px solid gray">${item.name}</strong>
                    <p>₹${item.price} × ${item.quantity} = ₹${itemTotal}</p>
                </div>


                <div class="quantity">
                    <button onclick="changeQuantity('${item.name}', -1)" style="height: 40px; width: 20px; font-weight:bold; font-size:20px; margin-bottom:20px; text-align:center;">-</button>
                    <span style="color:black; font-weight:bold; font-size:18px;">${item.quantity}</span>
                    <button onclick="changeQuantity('${item.name}', 1)" style="height: 40px; width: 20px; margin-bottom:20px; font-weight:bold; font-size:20px; text-align:center;">+</button>
                </div>


                <button class="remove" onclick="removeItem('${item.name}')" style="height: 20px; width: 100px; text-align:center; margin-bottom:20px">
                    Remove
                </button>
            </div>
        `;
    });


    total.textContent = "Total: ₹" + totalPrice;
}