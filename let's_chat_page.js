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

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

    function send(){
msg=document.getElementById("input_message").value;
firebase.database().ref(room_name).push({
user_name:user_name,
message:msg,
like:0
});
document.getElementById("input_message").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}