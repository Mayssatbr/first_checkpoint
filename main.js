function bolde(){
    var getText=document.getElementById("mytext");
    if(getText.style.fontWeight=="bold")
    {
        getText.style.fontWeight="normal"   ;
    }
    else{
        getText.style.fontWeight="bold"   ;

    }
}

function italic(){
    var getText=document.getElementById("mytext");
    if(getText.style.fontStyle=="italic")
    {
        getText.style.fontStyle="normal"  ;
    }
    else{
        getText.style.fontStyle="italic";
    }
}
function souligne(){
 var getText=document.getElementById("mytext");
 if(getText.style.textDecoration=="underline")
 {
    getText.style.textDecoration="none";
 }

 else{
    getText.style.textDecoration="underline";
 }
}

function sizee(){
    var getText=document.getElementById("mytext");
    getText.style.fontSize=document.getElementById("fs").value;
}

function fontt(){
    var getText=document.getElementById("mytext");
    getText.style.fontFamily=document.getElementById("fm").value;
}

    
     $ (document).ready(function(){
         $(".bt").css("opacity","0");
$(".jq").mouseenter(function(){
    $(this).css("opacity","0.4");
    $(this).find(".bt").css("opacity","1");

})
$(".jq").mouseleave(function(){
    $(this).css("opacity","1");
    $(".bt").css("opacity","0");

})
    });

    $ (document).ready(function(){
        $(".bt1").css("opacity","0");
$(".jq1").mouseenter(function(){
   $(this).css("opacity","0.4");
   $(this).find(".bt1").css("opacity","1");

})
$(".jq1").mouseleave(function(){
   $(this).css("opacity","1");
   $(".bt1").css("opacity","0");

})
   });


   var firebaseConfig = {
    apiKey: "AIzaSyCT_FcUaS4gIQzwQ1jReC8TIoHz2NTdJIc",
    authDomain: "projet-872af.firebaseapp.com",
    databaseURL: "https://projet-872af.firebaseio.com",
    projectId: "projet-872af",
    storageBucket: "",
    messagingSenderId: "213003457682",
    appId: "1:213003457682:web:6d14f97b0189bc6c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  var messagesRef =firebase.database().ref('projet');// Setting the name of your database
  function submitForm(){
      event.preventDefault();
      // Get values
      var name=document.getElementById('name').value;
      var track=document.getElementById('track').value;
      var email=document.getElementById('email').value;
      var number=document.getElementById('number').value;
      saveMessage(name,track,email,number); //sending data to our database
 }
      //save message to firebase
      function saveMessage(name,track,email,number){
          var newMessageRef = messagesRef.push();
          newMessageRef.set({
          name:name,
          track:track,
          email:email,
          number:number,
          
      });
    }
 
  