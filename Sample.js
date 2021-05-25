const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('Muhanad.db' , (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the Blog SQlite database');
});


let HGDate = new Date('2021, 5, 29');
let date=HGDate.getFullYear()+'-'+HGDate.getMonth() +'-'+HGDate.getDate();

let AS=['Name,Email,Title,Date,time'];

//لعرض مواعيد اليوم
db.all("SELECT  "+AS+" FROM Contacts JOIN Dates ON Contacts.DatesID = Dates.DatesID WHERE Date='"+date+"'", function(err, table){
    if(err){
        return console.log(err.message);
    }
    console.log(table);
});

//لعرض مواعيد الاسبوع
db.all("SELECT  "+AS+" FROM Contacts JOIN Dates ON Contacts.DatesID = Dates.DatesID WHERE Date>='"+date+"' AND Date<='"+date+"'", function(err, table){
    if(err){
        return console.log(err.message);
    }
    console.log(table);
});

//لعرض مواعيد الشهر
db.all('SELECT  '+AS+' FROM Contacts JOIN Dates ON Contacts.DatesID = Dates.DatesID WHERE Date>="'+date+'" AND Date<="2021-5-29"', function(err, table){
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
