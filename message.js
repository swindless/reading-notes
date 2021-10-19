function special() {
    var spring_price;
    var resort = confirm("Press a button!");
    if (resort == true) {
     spring_price = "You pressed OK, Save 30% off on king size bedroom suites on Sundays";
 } else {
    spring_price = "You pressed Cancel!";
}
document.getElementById("demo").innerHTML = spring_price;
}