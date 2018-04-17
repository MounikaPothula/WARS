var submit = document.getElementById('login');
    submit.onclick = function () {

        
        // Create a request object
        var request = new XMLHttpRequest();
        
        // Capture the response and store it in a variable
        request.onreadystatechange = function () {
          console.log("Request",request);
          if (request.readyState === XMLHttpRequest.DONE) {
              // Take some action
              console.log("Request",request);
              
              if (request.status === 200)//standard response for http request {
                 alert("Sucess!");
                 window.location.href="./logindetails";
              } else if (request.status==401)//unauthorized {
                  console.log("Password or username incorrect");
                  alert("password or username incorrect");
              } else if (request.status === 500)//internal server error 
              {
                 alert('Please enter the credentials again');
                  
              } else {
                  alert('Something went wrong on the server ');
                  
              }
             
          }  
          
        };
        
        // Make the request
        var Email = document.getElementById('Email').value;
        var Password = document.getElementById('Password').value;
        
        request.open('POST', '/AddUser', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({Email:Email, Password: Password}));  
      
        
    };