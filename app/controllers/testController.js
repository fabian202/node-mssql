const Request = require('tedious').Request,
	TYPES = require('tedious').TYPES,
  msSqlConnecter = require("../helpers/msSqlConnecter");

exports.list = function (req, res) {
  const con = new msSqlConnecter();
  con.connect().then(() => {
      new con.Request("select * from test")
          .onComplete((count, datas) => {
            console.log(datas);
              res.send(datas);
              // if (callback)
              //     callback(datas);
          })
          .onError((err) => {
              console.log(err);
          }).Run();
  }).catch((ex) => {
      console.log(ex);
  });
};

exports.create = (req, res) => {
  var con = new msSqlConnecter();
    con.connect().then(function () {
        new con.Request("INSERT INTO test (name) VALUES (@name)")
            .addParam("name", TYPES.VarChar, req.body.name)
            .onComplete(function (count) {
              console.log('Total ' + count);
              res.send(req.body);
            })
            .onError(function (err) {
                console.log(err);
            })
            .Run();
    }).catch(function (ex) {
        console.log(ex);
    });
};

exports.update = (req, res) => {
  var con = new msSqlConnecter();
    con.connect().then(function () {
        new con.Request("UPDATE test SET name = @name where id > @id")
            .addParam("id", TYPES.Int, req.params.id)
            .addParam("name", TYPES.VarChar, req.body.name)
            .onComplate(function (count) {
              res.sendStatus(204);
            })
            .onError(function (err) {
                console.log(err);
            })
            .Run();
    }).catch(function (ex) {
        console.log(ex);
    });
};

exports.destroy = (req, res) => {
  var con = new msSqlConnecter();
  con.connect().then(function () {
      new con.Request("delete from student where id > @id")
          .addParam("id", TYPES.Int, req.params.id)
          .onComplate(function (count) {
            res.sendStatus(204);
          })
          .onError(function (err) {
              console.log(err);
          })
          .Run();
  }).catch(function (ex) {
      console.log(ex);
  });
};
