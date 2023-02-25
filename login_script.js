
function login(){
    let username  = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if(username==localStorage.getItem("username") && (password==localStorage.getItem("password"))){
        
        window.location.href = "FirstQuestion.html";
        
    
    }
    else{
        alert("Authentication failed , please check your username and password")
    }
    
}
