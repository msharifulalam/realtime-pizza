import axios from 'axios';
console.log('Hello from client side js');

let addToCart = document.querySelectorAll('.add-to-cart');

function updateCart(pizza){
    axios.post('/update-cart', pizza).then(res => {
        console.log(res)
    })
}


addToCart.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let pizza = JSON.parse(btn.dataset.pizza);
        updateCart(pizza);
        // console.log(pizza);
    })
})