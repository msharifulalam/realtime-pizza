exports.cart = (req, res) => {
    res.render('customers/cart')
}

exports.update = (req, res) => {

    if(!req.session.cart){
        req.session.cart = {
            items: {},
            totalQty: 0,
            totalPrice: 0
        }
    }
    let cart = req.session.cart
    
    res.send('Cart updated successfully')
}