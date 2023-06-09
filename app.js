const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/public')));


app.get('/', (req,res) =>{
    res.sendFile((__dirname + '/views/index.html')); 
});
app.get("/mostrar_sitio",(req,res)=>{
    res.sendFile((__dirname + "/views/index.html"));
})

app.get ("*",(req,res)=>{
    res.send("ruta restringida, hemos localizado la direccion de su computador")
});

app.listen(3002, function () {
    console.log("Servidor corriendo");
});