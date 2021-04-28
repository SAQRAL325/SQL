const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('Muhanad.db' , (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the Blog SQlite database');
});



//لعرض جهة الاتصال
db.all('SELECT * FROM Contacts', function(err, table){
    if(err){
        return console.log(err.message);
    }
    console.log(table);
});

//لعرض المواعيد
db.all('SELECT * FROM Dates', function(err, table){
    if(err){
        return console.log(err.message);
    }
    console.log(table);
});

db.close( (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Close the database connection.');
});