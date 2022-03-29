const {main , app} = require('./api/main');
const path= require('path');


app.get('/app/*', (req, res) => res.sendFile(path.join(__dirname, 'dist/ekaly-front/index.html')));
app.get('/app/', (req, res) => res.sendFile(path.join(__dirname, 'dist/ekaly-front/index.html')));

main();

