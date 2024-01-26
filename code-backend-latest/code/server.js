var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  
    res.setHeader('Content-Type', 'application/json');
  
  const jsonObject = {
    message: 'Hello, Node.js',
    date: new Date()
  }
  const jsonStringObj = JSON.stringify(jsonObject);

  res.end(jsonStringObj);

  app.post('/add-record', (req, res) => {
    const recordName = req.body.recordName; 
    // Process the recieved data (e.g., save it to a database)
    // Respond the the cleint as needed
    res.send('Record addes successfully!');
  });


}).listen(8080);

console.log('server is running');
