var express = require('express')
var app = express()

app.use(express.static('public'))

app.get('/votes', function (req, res) {
	res.json([])
})
app.post('/vote/:id', function (req, res){

})

app.listen(3000, function () {
	console.log('Servidor iniciado. Escuchando en el puerto 3000')
})