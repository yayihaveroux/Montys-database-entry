const AdminUsername = "test";
const AdminPassword = "testtwo";

var username = "";
var password = "";

var correctDetails =  0;

document.getElementById('submit').addEventListener('click', function() {

var correctDetails =  0;
            // Get the values from the input fields
            var username = document.getElementById('uname').value;
            var password = document.getElementById('pass').value;

            if (AdminUsername == username) {
		if (AdminPassword == password) {
		window.location.href = 'database_home.html';
		var correctDetails = 1;
			}
		}
console.log(correctDetails)
	if (correctDetails == 0) {
alert("incorrect username or password");
	} 
        });