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
document.getElementById("userName").innerHTML = "Welcome " + userName

//ADD YOUR FIREBASE LINKS HERE

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  roomNames = childKey;
                  console.log(roomNames)
                  var row = "<div class = 'room_name' onclick = 'redirect(this.id)'id = '" + roomNames + "'>#" + roomNames + "</div><hr>"
                  document.getElementById("output").innerHTML += row
                  //Start code
                  //End code
            });
      });
}
getData();

function Addroom() {
      var roomName = document.getElementById("roomName").value
      window.location = "Let's Chat Room.html"
      firebase.database().ref("/").child(roomName).update({
            purpose: "Add Room Name",
      })
}

function redirect(roomName) {
localStorage.setItem("roomName", roomName)
window.location ="Let's Chat.html"
}