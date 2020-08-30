const mongoose = require('mongoose')
const Menu = require('../../models/menu')

exports.index = async (req, res) => {
    const dMenus = await Menu.find()
    
    const menus = [{
        name: 'Mergherita',
        image: "/img/pizza.png",
        prize: 300,
        size: 'Medium',
        description: 'Delicious Mergherita',
        createdAt: Date.now()
    },
    {
        name: 'Dominos',
        image: "/img/pizza.png",
        prize: 100,
        size: 'Small',
        description: 'Delicious Dominos',
        createdAt: Date.now()
    },
    {
        name: 'Mergherita',
        image: "/img/pizza.png",
        prize: 300,
        size: 'Medium',
        description: 'Delicious Mergherita',
        createdAt: Date.now()
    },
    {
        name: 'Dominos',
        image: "/img/pizza.png",
        prize: 100,
        size: 'Small',
        description: 'Delicious Dominos',
        createdAt: Date.now()
    },
    {
        name: 'Pepperoni',
        image: "/img/pizza.png",
        prize: 400,
        size: 'Medium',
        description: 'Delicious Pepperoni',
        createdAt: Date.now()
    },
    {
        name: 'Panner',
        image: "/img/pizza.png",
        prize: 200,
        size: 'Small',
        description: 'Delicious Panner',
        createdAt: Date.now()
    }]

    if(dMenus){
        return res.render('home', { menus: menus })
    }else{
        return res.render('home', { menus: dMenus })
    }
    
}

// factory function: Object creational pattern will return an object

// function homeController(){
//     // 
    
//     return {
//         index(req, res) {
//              res.render('home')
        // }
//     }
// }