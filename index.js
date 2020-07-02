const express = require('express');
const app = express();
const portNumber = 3344;

app.listen(portNumber, () => {
    console.log(`Express server running at port ${portNumber}`);
});
