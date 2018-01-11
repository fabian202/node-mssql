//controllers
const test_controller = require('../controllers/testController');

module.exports = function(app) {
  app.get('/test', test_controller.list);

  app.post('/test', test_controller.create);

  app.put('/test/:id', test_controller.update);

  app.delete('/test/:id', test_controller.destroy);

  // app.post('/test', (req, res) => {
  //   // You'll create your note here.
  //   console.log(req.body);
  //   var request = new Request("INSERT INTO test (name) VALUES (@name)",
  //   function(err){
  //     if(err){
  //       console.log(err);
  //     }
  //   });
  //
  //   //req.body
  //   request.addParameter('name', TYPES.NVarChar, req.body.name);
  //   connection.execSql(request);
  //   res.send('Hello');
  // });

};
