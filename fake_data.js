var faker = require('faker');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host        : 'localhost',
    user        : 'root',
    password    : 'password',
    database    : 'join_us'
});

var data = [];
for(var i = 0; i < 500; i++) {
    data.push([ faker.internet.email(), faker.data.past() ]);
}

var q = 'INSERT INTO users (email, created_at) VALUES ?';
connection.query(q, [data], function(err, results) {
    if(err) throw err;
    
    console.log(result);
});
connection.end();