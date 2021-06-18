
 var firebaseConfig = {
  apiKey: "AIzaSyDqqfF_7258-_Qo4FvD2Wig7Ln5Uj093YY",
  authDomain: "let-s-chat-c1172.firebaseapp.com",
  databaseURL: "https://let-s-chat-c1172-default-rtdb.firebaseio.com",
  projectId: "let-s-chat-c1172",
  storageBucket: "let-s-chat-c1172.appspot.com",
  messagingSenderId: "138880624337",
  appId: "1:138880624337:web:311596e94e99f5dcafc7f0",
  measurementId: "G-NLM8LKJM24"
};
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function add_room() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "Adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location="let's_chat_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("childkey", childKey);
      console.log("Room_names", Room_names);
      row = "<div class='room_name' id = " + Room_names + " onclick='redirect(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });
}
getData();

function redirect(name){
  localStorage.setItem("room_name", room_name);
  window.location="let's_chat_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}