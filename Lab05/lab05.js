/*
Alena Mitrakhovich
115 297 152
*/

//ONSUBMIT FORM VALIDATION
function validateForm(frm){
	var ret = true;
	var errorHTML = "";
	
	ret = validateEducationStatus(frm);
	
	if(ret == true){
	ret = validateName(frm.name.value);
	if (ret == true){
	ret = validateLname(frm.lname.value);
	if (ret == true){
	ret = validatePassword(frm.pass.value);
	if (ret == true){
	ret = validateRetypePassword(frm.pass2.value);
	if (ret == true){
	ret = validatePhoneNumber(frm.phone.value);
	}
	}
	}
	}
	}
	
	if (ret == false){
		errorHTML = "Please fix the errors as suggested above before submitting the form. Thank you."
		document.querySelector("#suberrors").innerHTML = errorHTML;
	}
	
	return ret;
}
//ONCHANGE VALIDATIONS:
//FIRST NAME
function validateName(name){
	var errorHTML = "";
	
	//check name is not empty
	if (name.trim().length != 0){
	
	//check name contains at least one alphabetic letter
	var pass = false;
	var str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var input = name.trim();
	
	var inputUpper = input.toUpperCase();
	for (var x = 0; x < inputUpper.length; x++){
		if(inputUpper.charAt(x) < "A" || inputUpper.charAt(x) > "Z"){
			pass = false;
		}	
	}
	
	if(!pass){
	for (var z = 0; z < inputUpper.length; z++){
		if(inputUpper.charAt(z) == "-" || inputUpper.charAt(z) == "'"){
			pass = true;	
		}
	}
	}
	
	for (var i = 0; i < input.length; i++) {
          //check at least one character is a letter
          if (str.indexOf(input.substr(i,1))>= 0)   { 
			pass = true;
		  }
		  else{
			  pass = false;
		  }
    }
	

    if (!pass){
		errorHTML = "<p>Name must contain alphabetical letters and - or '</p>";
	} 
	
	}
	else{
		errorHTML = "<p>Name cannot be empty</p>";
	}
	
	

	//printing error(s)
	if (errorHTML.length > 0){
		document.querySelector("#nameerror").innerHTML = errorHTML;
		return false;
	}else{
		document.querySelector("#nameerror").innerHTML = "";
		return true;
	}
}

//LAST NAME
function validateLname(lname){
	var errorHTML = "";
	
	//check name is not empty
	if (lname.trim().length != 0){
	
	//check name contains at least one alphabetic letter
	var pass = false;
	var str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var input = lname.trim(); 
	
	var inputUpper = input.toUpperCase();
	for (var x = 0; x < inputUpper.length; x++){
		if(inputUpper.charAt(x) < "A" || inputUpper.charAt(x) > "Z"){
			pass = false;
		}
	}
	
	
	if (!pass){
		for (var z = 0; z < inputUpper.length; z++){
			if(inputUpper.charAt(z) == "-" || inputUpper.charAt(z) == "'"){
			pass = true;
		}
		}
	}
	
	for (var i = 0; i < input.length; i++) {
          //check at least one character is a letter
          if (str.indexOf(input.substr(i,1))>= 0)   { 
			pass = true; 
		  }
		  else{
			pass = false;
		  }
    } 
	
    if (!pass){
		errorHTML = "<p>Last name must contain at least one alphabetic letter, -, or '</p>";
	} 
	
	}
	else{
		errorHTML = "<p>Last name cannot be empty</p>";
	}
	
	
	if (errorHTML.length > 0){
		document.querySelector("#lnameerror").innerHTML = errorHTML;
		return false;
	}else{
		document.querySelector("#lnameerror").innerHTML = "";
		return true;
	}
}

//PASSWORD
function validatePassword(password){
	var errorHTML = "";
	
	var pass = false;
	var pass2 = false;
	var pass3 = false;
	var str = "abcdefghijklmnopqrstuvwxyz"
	var str2= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var str3= "1234567890";
	var input = password.trim();
   
    for (var i = 0; i < input.length; i++) {
          //check at least one character is a lower case letter
          if (str.indexOf(input.substr(i,1))>= 0)   { 
			pass = true; 
		  }
    }
	
	for (var x = 0; x < input.length; x++) {
          //check at least one character is an upper case letter
          if (str2.indexOf(input.substr(x,1))>= 0)   { 
			pass2 = true; 
		  }
    }
	if (pass == false || pass2 == false){
		errorHTML = "<p>Password must contain both lower and upper case letters</p>";
	} 
	
	for (var y = 0; y < input.length; y++) {
          //check at least one number is present
          if (str3.indexOf(input.substr(y,1))>= 0)   { 
			pass3 = true; 
		  }
    }
	if (pass3 == false){
		errorHTML = "<p>Password must contain a number</p>";
	}
	
	if (input.length < 8){
		errorHTML = "<p>Password must be at least 8 characters long</p>";
	}
	
	if (errorHTML.length > 0){
		document.querySelector("#passerror").innerHTML = errorHTML;
		return false;
	}else{
		document.querySelector("#passerror").innerHTML = "";
		return true;
	}
}

//RETYPEPASSWORD
function validateRetypePassword(password){
	var errorHTML = "";
	
	var pass1 = document.getElementById('pass');
	var pass2 = document.getElementById('pass2');
	
	if(pass1.value != pass2.value){
		errorHTML = "<p>Passwords must match!</p>";
	}
	
	if (errorHTML.length > 0){
		document.querySelector("#retypepasserror").innerHTML = errorHTML;
		return false;
	}else{
		document.querySelector("#retypepasserror").innerHTML = "";
		return true;
	}
}

//PHONENUMBER
function validatePhoneNumber(phone){
	var errorHTML = "";
	var input = phone.trim();
	var str = "0123456789";
	
	if(input.length == 0){
		errorHTML = "<p>Phone number cannot be empty</p>";
	}
	
	if(input.length > 0){
	
	for (var i = 0; i < input.length; i++){
		if(str.indexOf(input.substr(i,1))>= 0){
			errorHTML = "";
		}
		else if(i != 3 && i != 7){
			errorHTML = "<p>Phone number must contain digits only</p>";
			i = input.length + 10;
		}
	}
	
	/*if (phone[3] != "-" || phone[7] != "-"){
		errorHTML = "<p>Phone number must be in the following format: 999-999-9999</p>";
	}*/
	if(input.charAt(3) != "-" || input.charAt(7) != "-"){
			errorHTML = "<p>Phone number must be in the following format: 999-999-9999</p>";
	}
	
	if (input[0] == '0' && input[1] == '0' && input[2] == '0'){
		errorHTML = "<p>First three digits cannot be all zeros</p>";
	}

	if (input[4] == '0' && input[5] == '0' && input[6] == '0' && input[8] == '0' && input[9] == '0' && input[10] == '0' && input[11] == '0'){
		errorHTML = "<p>Phone number cannot be all zeros</p>";
	}
	
	}
	
	if (errorHTML.length > 0){
		document.querySelector("#phoneerror").innerHTML = errorHTML;
		return false;
	}else{
		document.querySelector("#phoneerror").innerHTML = "";
		return true;
	}
}

//EDUCATION STATUS
function validateEducationStatus(form){
	var checked = false;
	
	for (var i = 0; i < 3; i++){
		if(form.status[i].checked){
			checked = true;
		}
	}

	if(!checked){
		document.querySelector("#educationerror").innerHTML = "Please select one of the menu options above";
		return false;
	}
	else{
		document.querySelector("#educationerror").innerHTML = "";
		return true;
	}
	
}