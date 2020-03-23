var app = require('express')(); // Create an instance of an Express app

var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

mobileApp.tables.add('CheckIn'); // Create a table for 'CheckIn' with default settings
mobileApp.tables.add('Users'); //Create a table 
mobileApp.tables.add('E_Employee'); //Create Table E_Employee
mobileApp.tables.add('EmployeeSite'); //EmployeeSite
mobileApp.tables.add('Site');

app.use(mobileApp);
app.listen(process.env.PORT || 3000);
