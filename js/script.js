var objPeople = [
	{
		username: "Adisa",
		password: "whatitdew22"
	},
	{
		username: "William",
		password: "icarusjr420"
	},
	{
		username: "Erika",
		password: "weepystudent23"
	}
]

// login functionality
function login() {
	// retrieve data input from form
	var username = document.getElementById("username").value
	var password = document.getElementById("password").value

	// loop through user objects and confirm if username & password correct
	for(i = 0; i < objPeople.length; i++) {
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + " is logged in!")
			return
		}
	}
	// error message if user and password don't match
	console.log("incorrect username or password")
}

function registerUser() {
	var registerUser = document.getElementById("newUser").value
	var registerPassword = document.getElementById("newPassword").value
	var newUser = {
		username: registerUser,
		password: registerPassword
	}

	for(i=0; i < objPeople.length; i++) {
		if(registerUser == objPeople[i].username) {
			alert("that username is already in use, please choose another")
			return
		} else if(registerPassword.length < 8) {
			alert("that password is too short, include 8 or more characters")
			return
		}
	}

	objPeople.push(newUser)
	console.log(objPeople)
}



















