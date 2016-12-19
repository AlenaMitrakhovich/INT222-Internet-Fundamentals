// set a global httpRequest object

var httpRequest;
		
// TODO: when the page (window) has loaded, make a
// request for page 1


	window.onload = function(){
		makeRequest(1);
	}


function makeRequest(pageNum) {
	
    // TODO: create a variable "url" to store the request to 
	// the current pageNum, ie:
	//
	// "http://reqres.in/api/users?page=1" // for page 1
	// "http://reqres.in/api/users?page=2" // for page 2
	// etc...
	
	
	
	var url = "http://reqres.in/api/users?page=" + pageNum;
	
	
	// make an HTTP request object
	
	httpRequest = new XMLHttpRequest();
	
	// show an alert if we were unable to make an XMLHttpRequest object
	
	if (!httpRequest) {
		alert('Cannot create an XMLHTTP instance');
		return false;
	}

	// execute the "showContents" function when
	// the httprequest.onreadystatechange event is fired
	
	httpRequest.onreadystatechange = showContents;
	
	// open a asynchronous HTTP (GET) request with the specified url
	
	httpRequest.open('GET', url, true);
	
	// send the request
	
	httpRequest.send();
}

// the function that handles the server response

function showContents() {

//  check for response state
//  0      The request is not initialized
//  1      The request has been set up
//  2      The request has been sent
//  3      The request is in process
//  4      The request is complete

	if (httpRequest.readyState === 4) {
		// check the response code
		if (httpRequest.status === 200) { // The request has succeeded
		// Javascript function JSON.parse to parse JSON data
			var jsData = JSON.parse(httpRequest.responseText);
			
			// TODO: use the jsData object to populate the correct
			// table cells, ie <tr><td>...</td></tr>
			// in the <tbody> element with id="data"
			
			var body = document.querySelector("#data");
			
			body.innerHTML = "";
			
			for(var i = 0; i < jsData.data.length; i++){
				var row = document.createElement("tr");
				var td1 = document.createElement("td");
				var td2 = document.createElement("td");
				var td3 = document.createElement("td");
				var td4 = document.createElement("td");
				var id = document.createTextNode(jsData.data[i].id);
				td1.appendChild(id);
				row.appendChild(td1);
				body.appendChild(row);
				
				var name = document.createTextNode(jsData.data[i].first_name);
				td2.appendChild(name);
				row.appendChild(td2);
				body.appendChild(row);
				
				var lname = document.createTextNode(jsData.data[i].last_name);
				td3.appendChild(lname);
				row.appendChild(td3);
				body.appendChild(row);
				
				var avatar = document.createElement("img");
				avatar.setAttribute("src", jsData.data[i].avatar);
				td4.appendChild(avatar);
				row.appendChild(td4);
				body.appendChild(row);
				
			}
			
			// TODO: remove the class "active" from all elements with the class "pgbtn"
			
			var elem = document.querySelectorAll(".pgbtn");
			for(var x = 0; x < elem.length; x++){
				elem[x].classList.remove("active");
			}
			
			// TODO: add the class "active" to the button corresponding to the active page, ie:
			//
			// if jsData.page is 1, add the class "active" to button element with id pgbtn1
			// if jsData.page is 2, add the class "active" to button element with id pgbtn2
			// etc...
			
			if(jsData.page == '1'){
				active = document.getElementById("pgbtn1");
				active.classList.add("active");
			}
			else if(jsData.page == '2'){
				active = document.getElementById("pgbtn2");
				active.classList.add("active");
			}
			else if(jsData.page == '3'){
				active = document.getElementById("pgbtn3");
				active.classList.add("active");
			}
			else if(jsData.page == '4'){
				active = document.getElementById("pgbtn4");
				active.classList.add("active");
			}
			

		} else {
			alert('There was a problem with the request.');
		}
	}
}	