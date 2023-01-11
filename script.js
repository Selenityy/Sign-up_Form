let password = document.getElementById("password");
let confirm_password = document.getElementById("confirm_password");
let message = document.getElementById("error_message").innerHTML;

function check (input) {
	if (confirm_password.value != password.value) {
		console.log("password did not match");
        message.setCustomValidity("Password must be matching");
	} else {
        console.log("password matched");
		return;
	}
}