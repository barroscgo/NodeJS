//Carregando com o express
const express = require('express');
//instalando o express e carregando a biblioteca do express dentro dessa const app
const app = express();
//Lista de games

let games = [
    {title: "Sea of Thieves", studio: "Rare", price: 30},
    {title: "WOW", studio: "Blizzard", price: 120},
    {title: "Valorant", studio: "Riot", price: 0},
    {title: "COD", studio: "Activision", price: 200},
    {title: "Minecraft", studio: "Mojang", price: 80},
    {title: "Hallo", studio: "Microsoft", price: 90},
    {title: "Hearth Stone", studio: "Blizzard", price: 0},
    {title: "Euro Truck Simulator", studio: "SCS Software", price: 12},
    {title: "League of Legends", studio: "Riot", price: 0},
    {title: "Minecraft", studio: "Mojang", price: 80},
]

app.listen(3080,() => {
    console.log("sevidor rodando!");
});

app.get('/', (req, res) =>{
    res.json(games);
});