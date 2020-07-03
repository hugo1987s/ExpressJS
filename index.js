const express = require('express');
const { json } = require('express');
const app = express();
const portNumber = 3344;

app.use(express.json());

app.all('*', (req, res, next) =>{
    console.log('Middleware creado');
    next();
});

app.get('/', (req, res) => {
    res.send('Home page');
});

app.post('/user', (req, res) => {
    console.log(req.body);
    res.send('Post method executed');
});

app.put('/user/:codigo', (req, res) => {
    console.log(req.params.codigo);
    console.log(req.body);
    res.send('Put method executed');
});

app.delete('/user/:codigo', (req, res) => {
    console.log(req.params.codigo);
    res.send('Delete method executed');
});

app.listen(portNumber, () => {
    console.log(`Express server running at port ${portNumber}!`);
});
