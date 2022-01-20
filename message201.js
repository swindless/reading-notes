function special() {
    var school_price;
    var school_program = confirm("Press a button!");
    if (school_program == true) { school_price = "Thank you for choosing the Harrison Afterschool Program ";
 } else {
    school_price = "You pressed Cancel!";
}
document.getElementById("demo").innerHTML = school_price;
}