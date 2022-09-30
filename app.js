const express = require("express");
const app = express();
app.use(express.json()) 


app.get("/", (req , res) => {
    res.json({
        nombre: 'Bruno',
        apellido: 'Gongora'
    });
});

app.delete('/user:id', (req, res) => {
    res.send(`El usuario ${req.params.id} ha sido eliminado`)
    console.log('Usuario eliminado')
})

app.listen(5000, () => {
    console.log("Servidor Iniciado")
});