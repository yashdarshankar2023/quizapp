


function signup(){
    const username  = document.getElementById("username").value;
    const password1 = document.getElementById("password").value;
    const password2 = document.getElementById("password1").value;
    const security = document.getElementById("security").value;
    alert(username,password1,security)
    
    if(password1 == password2){
        
    localStorage.setItem("username", username);
    localStorage.setItem("password", password1);
    localStorage.setItem("security", security);
    console.log(username,password1,security)

    

    }
    else{
        alert("something is wrong")
    }

}

