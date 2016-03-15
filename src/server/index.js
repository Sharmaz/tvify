import express from 'express'
var app = express()

import api from 'src/server/api'
app.use(express.static('public'))

app.use('/api', api)

app.listen(3000, () => {
	console.log('Servidor iniciado. Escuchando en el puerto 3000')
})