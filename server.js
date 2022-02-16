const express = require('express');
const app = express();
app.use(express.static('static'));
const jimp = require('jimp');
const fs = require('fs');
const yargs = require('yargs');

app.get('/procesarimg', async (req, res) => {
  const picture = await jimp.read(req.query.picture);
  console.log(picture);
  await picture
    .greyscale()
    .quality(60)
    .resize(350, jimp.AUTO)
    .writeAsync('static/newimg.jpg');

  res.redirect('/newimg.jpg');
});

yargs
  .command(
    'start',
    'Inicia comando para procesar imagen',
    {
      key: {
        describe: 'clave de inicio de servidor',
        demand: true,
        alias: 'k',
      },
    },
    (args) => {
      if (args.key != '123') {
        console.log('clave incorrecta');
        return;
      }
      app.listen(3000, function () {
        console.log('Servidor andando en el puerto 3000');
      });
    }
  )
  .help().argv;
