let hamburger=document.getElementsByClassName("hamburger")[0] 
let slider= document.getElementsByClassName("slider")[0]
let crossBtn=  document.getElementsByClassName("crossbtn")[0]
let crossBtnLine= document.getElementsByClassName("line")[3]
let crossBtnLine2= document.getElementsByClassName("line")[4]
hamburger.addEventListener("click",function(){

slider.style.width="80%"
hamburger.style.display= "none"
crossBtn.style.display="block"
slider.style.left="0px"
crossBtnLine.style.rotate="45deg"
crossBtnLine2.style.rotate="138deg"
crossBtnLine.style.width="24px"
crossBtnLine2.style.width="24px"

})
crossBtn.addEventListener("click",function(){
    slider.style.width="0px"
    slider.style.left="-200px"
    crossBtn.style.display="none"
    hamburger.style.display="block"

})


