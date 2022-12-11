const firebaseConfig = {
    apiKey: "AIzaSyA_sYNn8HQeJ8jh54E7JsagwVLl1PB-OFY",
    authDomain: "let-s-chat-dc5cc.firebaseapp.com",
    databaseURL: "https://let-s-chat-dc5cc-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-dc5cc",
    storageBucket: "let-s-chat-dc5cc.appspot.com",
    messagingSenderId: "154179672227",
    appId: "1:154179672227:web:e028c3744a82c98d0d4716",
    measurementId: "G-FHP7RFH8EV"
  };
  firebase.initializeApp(firebaseConfig);
var userName = localStorage.getItem("userName")
var roomName = localStorage.getItem("roomName")

function send() {
    var message = document.getElementById("msg").value
    document.getElementById("msg").value = ""
    firebase.database().ref(roomName).push({
        name: userName,
        message: message,
        likes: 0
    })
}
function getData() {
    firebase.database().ref("/" + roomName).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebaseMessageID = childKey;
                messageData = childData;

                var name = messageData["name"];
                var message = messageData["message"];
                var like = messageData["like"];
                nameWithTag = "<h4>"+name+"<img src = 'm2.png' class = 'user_tick'></img></h4>"
                    messageWithTag ="<h4 class = 'message_h4'>"+message+"</h4>"
                    likeButton ="<button class = 'btn-btn warning' id = '"+firebaseMessageID+"' value = '"+like+"' onclick = 'updateLike(this.value)'>"
                    spanWithTag ="<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>"

                    row = nameWithTag+messageWithTag+likeButton+spanWithTag
                    document.getElementById("output").innerHTML += row
                ;

            }
        });
    });
}

getData();


function updateLike(messageID) {



}

function logout() {
    localStorage.removeItem("userName");
    localStorage.removeItem("roomName");
    window.location.replace("kwitter.html");
}