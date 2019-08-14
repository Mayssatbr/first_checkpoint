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