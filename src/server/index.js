import express from 'express'
var app = express()

const votes = {} 
app.use(express.static('public'))

app.get('/votes', function (req, res) {
	res.json(votes)
})
app.post('/vote/:id', function (req, res){
	let id = req.params.id
	if (votes[id]=== undefined) {
		votes[id] = 1
	} else {
		votes[id] = votes[id] + 1
	}
	res.json({ votes: votes[id] })
})

app.listen(3000, function () {
	console.log('Servidor iniciado. Escuchando en el puerto 3000')
})