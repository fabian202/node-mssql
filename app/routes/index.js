const testRoutes = require('./testRoutes');
module.exports = function(app, connection) {
  testRoutes(app, connection);
  // Other route groups could go here, in the future
};
