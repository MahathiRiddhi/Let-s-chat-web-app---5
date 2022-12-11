function logIn() {
    userName = document.getElementById("userName").value; 
    localStorage.setItem("userName",userName);
     window.location = "Let's Chat.html";
}
