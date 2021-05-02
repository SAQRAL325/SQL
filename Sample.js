const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('Muhanad.db' , (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the Blog SQlite database');
});



//لعرض مواعيد اليوم
db.all('SELECT  Name,Email,Title,Date,time FROM Contacts JOIN Dates ON Contacts.DatesID = Dates.DatesID WHERE Date="2021-04-29"', function(err, table){
    if(err){
        return console.log(err.message);
    }
    console.log(table);
});



//لعرض مواعيد الاسبوع
db.all('SELECT  Name,Email,Title,Date,time FROM Contacts JOIN Dates ON Contacts.DatesID = Dates.DatesID WHERE Date>="2021-04-29" AND Date<="2021-05-06"', function(err, table){
    if(err){
        return console.log(err.message);
    }
    console.log(table);
});



//لعرض مواعيد الشهر
db.all('SELECT  Name,Email,Title,Date,time FROM Contacts JOIN Dates ON Contacts.DatesID = Dates.DatesID WHERE Date>="2021-04-29" AND Date<="2021-05-29"', function(err, table){
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
