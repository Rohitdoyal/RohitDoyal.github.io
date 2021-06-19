

const typedtextspan= document.querySelector(".dynemicname");
const textarray= [ "Student.", "Web-Developer.", "Game-Developer", "AI-ML Enthusiast.","AR-VR Enthusiast." ];
const typingdelay = 200;
const erasingdelay = 100;
const newtextdelay = 3000;

let textarrayindex=0;
let charIndex=0;

function type(){
  if(charIndex<textarray[textarrayindex].length){
    typedtextspan.textContent=typedtextspan.textContent+textarray[textarrayindex].charAt(charIndex);
    charIndex++;
    setTimeout(type,typingdelay);

  }
  else{
    //for erase
    setTimeout(erase,newtextdelay);
   
}

function erase(){
  if (charIndex>0) {
    typedtextspan.textContent= textarray[textarrayindex].substring(0,charIndex-1);
    charIndex--;
    setTimeout(erase,erasingdelay);
    
  }
  else{
    textarrayindex++;
    if(textarrayindex>=textarray.length){
      textarrayindex =0;
    }
    setTimeout(type,typingdelay+1100);
  }


}
}


document.addEventListener("DOMContentLoaded",function(){
  setTimeout(type,newtextdelay+250);
});
type();