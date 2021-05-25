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
    let WS=table.length;
    console.log("Today's dates\n");
    for(let i = 0; i < WS; i++){
        console.log('Date with : '+table[i].Name+' Email : '+table[i].Email+" Title : "+ table[i].Title+" at : "+ table[i].Date +" time : "+ table[i].time+"\n");
    }
});

//لعرض مواعيد الاسبوع
db.all("SELECT  "+AS+" FROM Contacts JOIN Dates ON Contacts.DatesID = Dates.DatesID WHERE Date>='"+date+"' AND Date<='"+date+"'", function(err, table){
    if(err){
        return console.log(err.message);
    }
    let WS=table.length;
    console.log("Dates for the week\n");
    for(let i = 0; i < WS; i++){
        console.log('Date with : '+table[i].Name+' Email : '+table[i].Email+" Title : "+ table[i].Title+" at : "+ table[i].Date +" time : "+ table[i].time+"\n");
    }
});

//لعرض مواعيد الشهر
db.all('SELECT  '+AS+' FROM Contacts JOIN Dates ON Contacts.DatesID = Dates.DatesID WHERE Date>="'+date+'" AND Date<="2021-5-29"', function(err, table){
    if(err){
        return console.log(err.message);
    }
    let WS=table.length;
    console.log("Dates of the month\n");
    for(let i = 0; i < WS; i++){
        console.log('Date with : '+table[i].Name+' Email : '+table[i].Email+" Title : "+ table[i].Title+" at : "+ table[i].Date +" time : "+ table[i].time+"\n");
    }
});


db.close( (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Close the database connection.');
});