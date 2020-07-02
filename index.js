const express = require('express');
const { json } = require('express');
const app = express();
const portNumber = 3344;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Home page');
});

app.post('/postPage', (req, res) => {
    console.log(req.body);
    res.send('Post method executed');
});

app.put('/putPage', (req, res) => {
    console.log(req.body);
    res.send('Put method executed');
});

app.delete('/deletePage/:codigo', (req, res) => {
    console.log(req.params);
    res.send('Delete method executed');
});

app.listen(portNumber, () => {
    console.log(`Express server running at port ${portNumber}!`);
});
