function say_name() {
    var fName = document.getElementById('first_name').value;
    var lName = document.getElementById('last_name').value;
    var eAddress = document.getElementById('email_address').value;
  
    var greeting = 'Hello ' + fName + ' ' + lName + '. ' + 'We will contact you at ' + eAddress ;
  
    document.getElementById('result').innerHTML = greeting;
    {
        return alert('Are you sure you want to submit?');
    }

}
document.getElementById('send').addEventListener('click', say_name);
 

		