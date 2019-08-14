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