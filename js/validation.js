//loads HTML document before js
document.addEventListener('DOMContentLoaded', function() {
  var invalid = getURLParameter('invalid');

	if(invalid == "mail"){
		var inpEmail = document.getElementById('eMailReg');
		inpEmail.style.backgroundColor = "red";			//if email is already registered, email field changes colour to red
		alert("This email is already registered.");		//and message pops up
	}

	if(invalid == 'login'){			//if login fails
		alert("Please check your log in details");
	}

});

function getURLParameter(name) {	//URL information
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}


function validateEmail(email) {		//validates new emails
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


function validateForm(){			//checks registration details
	var isValid = false;
	var name = document.forms["regForm"]["nameReg"].value;
  var email = document.forms["regForm"]["emailReg"].value;
  var pass = document.forms["regForm"]["passWordReg"].value;

	var mailVaild = validateEmail(email);
    if ((name == null || name == "")||(email == null || email == "")||(pass == null || pass == "")) {		//if any of the registration details
		alert("Fields must be filled out");																	//are not filled in, message pops up
		return false;
    }
	if(mailVaild == false){
		alert("Invalid email");
		return false;
	}
}
