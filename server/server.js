//=================PAQUTES IMPORTADOS==========
 require('./config/config');//al ser este el primer archivo al empezar a ajecutar la aplicacion va a leer este archivo y al ejectutarlo va configurar su contenido  
const express = require('express');//me da support peticiones http
const app = express();

const bodyParser = require('body-parser'); //me ayda para los post y dar formato json 
 //===========MIDDELWARE=================================================================
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))//LOS APP.USE SON MIDDLEWARES, FUNCIONES QUE SE DISPARAN CADA VEZ QUE  SE HAGA UNA PETICION,  AL HACER CARPETA PUBLICA USAMOS MIDDLEWARE  
 
// parse application/json
app.use(bodyParser.json())

//===================================================================================
//  PETICIONES HTTP

app.get('/usuario', function (req, res) {
  res.json('get usuario')//para que me lo  devuelva en json en vez de html. 
})
 

app.post('/usuario', function (req, res) {

    let body= req.body;  //este body es el que va aparecer cuando el body parser procese los payload que reciba de las peticiones, fucniona con POST, PUT Y DELETE 
   
   
    if (body.nombre=== undefined){
         res.status(400).json({
           ok:false,
           mensaje:'el nombre es necesario' 
         });
    }else {
              res.json({
        
                persona: body//para que me lo  devuelva en json en vez de html. 
  });

    }
    

});
  app.put('/usuario/:id', function (req, res) {
      let id= req.params.id;
    res.json( {

        id: id
    })//para que me lo  devuelva en json en vez de html. 
  })


  app.delete('/usuario', function (req, res) {
    res.json('delete usuario')//para que me lo  devuelva en json en vez de html. 
  })

app.listen(process.env.PORT, () => {

    console.log('Escuchando puerto: ', process.env.PORT);
});