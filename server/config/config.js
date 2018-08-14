//aqui delcaraermos constantes o variable sde forma global. 
//Hay una variable que esta corriendo siempre que es el  Process
//El proocess es un objeto global que estsa corriendo a lo largo de toda la aplicacion de node y es alctualizado dependiendo del entrorno donde esta corriendo


// ==========================================
// PUERTO
//==================================
        process.env.PORT =  process.env.PORT || 3000;//heroku crea env.port y la actualiza  pero localmente no la tenemos y si no existe le digo que el proces..env.PORT sera 3000