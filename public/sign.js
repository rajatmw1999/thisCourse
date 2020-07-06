firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
  
      
      document.getElementById("login_div").style.display = "block";
  
      var user = firebase.auth().currentUser;
  
      if(user != null){
  
        var email_id = user.email;
        document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
  
      }
  
    } else {
      // No user is signed in.
  
      
      document.getElementById("login_div").style.display = "block";
  
    }
  });
  
  
  function signup(){
  
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
    
   
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).then(cred =>{
      console.log(cred);
          
      }).catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
      });
      
  
    // firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
  
    //   window.alert("Error : " + errorMessage);
  
    //   // ...
    // });
  
  }
  
  