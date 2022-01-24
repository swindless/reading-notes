let username = prompt("What is your name?");
let upname = username.toUpperCase();
if (username == null || username == "") {
//    console.log("User cancelled the login.");
   alert("User cancelled the login.");
} else {
//  console.log("Hi "+ upname + ", welcome to my website!");
 alert("Hi "+ upname + ", welcome to my website!");
}

let mylocation = prompt("Do you think I grew up in Memphis?");
if (mylocation == null || mylocation == "") {
//    console.log("User cancelled the login.");
  alert("User cancelled the login.");
} else if (mylocation == "yes" || mylocation == "Yes" || mylocation == "y" || mylocation == "Y") {
//  console.log("Hey, I'm from Memphis, very cool city.");
 alert("Hey, I'm from Memphis, very cool city.");
} else if
    (mylocation == "no" || mylocation == "No" || mylocation == "n" || mylocation == "N"){ 
//  console.log("That's ok " + upname + ", I did grow up in Memphis.");
 alert("That's ok " + upname + ", I did grow up in Memphis.");
}

let myhobby = prompt("Do you think I like to go bowling?");
if (myhobby == null || myhobby == "") {
//    console.log("User cancelled the login.");
   alert("User cancelled the login.");
} else if (myhobby == "yes" || myhobby == "Yes" || myhobby == "y" || myhobby == "Y") {
//  console.log("You are correct, I do enjoy bowling!");
 alert("You are correct, I do enjoy bowling!");
} else if
    (myhobby == "no" || myhobby == "No" || myhobby == "n" || myhobby == "N"){ 
//  console.log("Sorry, " + upname + " I do enjoy bowling");
 alert("Sorry, " + upname + " I do enjoy bowling");
}

let school = prompt("Have you heard of Code School?");
if (school == null || school == "") {
//    console.log("User cancelled the login.");
   alert("User cancelled the login.");
} else if (school == "yes" || school == "Yes" || school == "y" || school == "Y") {
//  console.log("That's great, I'm a student there.");
 alert("That's great, I'm a student there.");

} else if
    (school == "no" || school == "No" || school == "n" || school == "N"){ 
//  console.log("Really? You can learn to code at Code School");
 alert("Really? You can learn to code at Code School");
}

let studyjs= prompt("Do you think I want to learn about Javascript?");
// let upstudy = studyjs.toUpperCase();
if (studyjs == null || studyjs == "") {
//    console.log("User cancelled the login.");
   alert("User cancelled the login.");
} else if (studyjs == "yes" || studyjs == "Yes" || studyjs == "y" || studyjs == "Y") {
//  console.log("That's right, "+ upname + ", learning Javascript is a good programming skill");
 alert("That's right "+ upname + ", learning Javascript is a good programming skill");
} else if
    (studyjs == "no" || studyjs == "No" || studyjs == "n" || studyjs == "N"){ 
//  console.log("You should take Javascript " + upname + ", it's fun to code");
 alert("You should take Javascript " + upname + ", it's fun to code");
}
