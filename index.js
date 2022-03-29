const {main , app} = require('./api/main');
const path= require('path');


app.get('/ekaly/*', (req, res) => {
  console.log("Ok ok");
  res.sendFile(path.join(__dirname, 'dist/ekaly-front/index.html'))
});

app.get('/ekaly/', (req, res) =>{
  console.log("Ok ok");
  res.sendFile(path.join(__dirname, 'dist/ekaly-front/index.html'))
});

main();

