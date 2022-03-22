
function displayFormula(){

    document.getElementById('id0077').style.display='block';
}

function cancelButton(){

    document.getElementById('id0077').style.display='none';
}

function checkSignUp(){

    let firstName= document.getElementById('firstName').value;
    let lastName  = document.getElementById('lastName').value;
    let dayOfBirth= document.getElementById('dob').value;
    let username = document.getElementById('username').value;
    let password=  document.getElementById('pwd').value;
    let re_enterPass= document.getElementById('re-enterpwd').value;

    let info = document.getElementById('info');


    if( firstName==="" || lastName==="" || dayOfBirth==="" || username==="" || password==="" ||re_enterPass==="" ){

     info.innerHTML="Fill Up all the boxes.";
    info.style.color = 'red'
    }
    
    else if (password!==re_enterPass){
  
      info.innerHTML="Your passwords did not match."
      info.style.color="blue";
    }

    else{

      alert("Your account was created succesfuly.");

        info.style.color="green";

         document.getElementById('id0077').style.display='none';
    }

}