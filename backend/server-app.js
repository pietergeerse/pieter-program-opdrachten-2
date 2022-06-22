const Mocha = require('mocha')
const express = require('express')
const app = express()
var path = require('path');
const port = 3000


//
// Without middleware
app.get('/', function(req, res){
  function sendIt() {
    var options = {
      root: path.join(__dirname, 'public')
    }
    var fileName = 'testresultaat.html';

    res.sendFile(fileName, options, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log('Sent:', fileName);
      }
    })
  }
  

  console.log('mocha setup')
  var mocha = new Mocha({
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'public',
      reportFilename: 'testresultaat',
      quiet: false,
      html: true,
      json: false,
      code: false
    }
  });
  mocha.addFile(path.join(__dirname, 'tests-voor-opdrachten.js'))
  //mocha.cleanReferencesAfterRun(false)


  console.log('doe test')
  mocha.run(() => {
        console.log('✅ done');
        mocha.unloadFiles();
        mocha.dispose();
        sendIt();
      }
    )
    .on('test', function(test) {
        console.log('Test started: '+test.title);
    })
    .on('test end', function(test) {
        console.log('Test done: '+test.title);
    })
    .on('pass', function(test) {
        console.log('Test passed');
        console.log(test);
    })
    .on('fail', function(test, err) {
        console.log('Test fail');
        console.log(test);
        console.log(err);
    })
    .on('end', function() {
        console.log('All done')
        
    })
  console.log('test done')
  
})

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Backend app listening on port ${port}`)
})