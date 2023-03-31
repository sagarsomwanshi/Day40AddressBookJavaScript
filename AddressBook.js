const ContactDetails = require("./ContactDetails.js");
const prompt = require('prompt-sync')();

let contactInfo = new ContactDetails("Sagar","Somwanshi","Anuvishwa Society","Solapur","Maharashtra","413004","8483820145"
                  ,"sagarsomwanshi13@gmail.com");
console.log(contactInfo.toString());
            

contactInfo.firstName = "Akash";
contactInfo.lastName = "Somwanshi";
contactInfo.address = "Anuvishwa Society";
contactInfo.city = "Solapur";
contactInfo.state = "Maharashtra";
contactInfo.zip = "413004";
contactInfo.phoneNumber = "8087364342";
contactInfo.email = "akash@gmail.com";

contactInfo.

console.log(contactInfo.toString());