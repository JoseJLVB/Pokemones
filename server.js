const express = require('express');
const app = express();
app.use(express.static('static'));
const jimp = require('jimp');
const fs = require('fs');
const yargs = require('yargs');
const axios = require('axios');

app.get('/pokemones', async (req, res) =>{
  const datos = await axios('https://pokeapi.co/api/v2/pokemon/')
  const pokemon = datos.data.results;
  let pokemones;  
      pokemones = Promise.all([
      axios.get('https://pokeapi.co/api/v2/pokemon/1'),
      axios.get('https://pokeapi.co/api/v2/pokemon/2'),
      axios.get('https://pokeapi.co/api/v2/pokemon/3'),
      axios.get('https://pokeapi.co/api/v2/pokemon/4'),
      axios.get('https://pokeapi.co/api/v2/pokemon/5'),
      axios.get('https://pokeapi.co/api/v2/pokemon/6'),
      axios.get('https://pokeapi.co/api/v2/pokemon/7'),
      axios.get('https://pokeapi.co/api/v2/pokemon/8'),
      axios.get('https://pokeapi.co/api/v2/pokemon/9'),
      axios.get('https://pokeapi.co/api/v2/pokemon/10'),
      axios.get('https://pokeapi.co/api/v2/pokemon/11'),
      axios.get('https://pokeapi.co/api/v2/pokemon/12'),
      axios.get('https://pokeapi.co/api/v2/pokemon/13'),
      axios.get('https://pokeapi.co/api/v2/pokemon/14'),
      axios.get('https://pokeapi.co/api/v2/pokemon/15'),
      axios.get('https://pokeapi.co/api/v2/pokemon/16'),
      axios.get('https://pokeapi.co/api/v2/pokemon/17'),
      axios.get('https://pokeapi.co/api/v2/pokemon/18'),
      axios.get('https://pokeapi.co/api/v2/pokemon/19'),
      axios.get('https://pokeapi.co/api/v2/pokemon/20'),
    ]).then(function(pokemones){
      console.log(pokemones);
      const list = []
    for (pk of pokemones){
      list.push({
        Nombre: pk.data.name,
        Peso: pk.data.weight,
        Estatura: pk.data.height,
        Imagen: pk.data.sprites.front_default
      })
    }
    res.send(list);
    }).catch((error) =>{
      console.log('Error', error);
    })    
});  
app.listen(3000, function () {
  console.log('Servidor andando en el puerto 3000');
});