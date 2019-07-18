
window.addEventListener('resize', (e) => {
   resizer();
   
    });
function resizer(){
    var articles = document.querySelectorAll(".grid-artices");
    articles.forEach((article) => {
    var left = article.querySelector(".grid-photo-left");
    var right = article.querySelector(".grid-info-right");
    left.style.height = right.clientHeight + "px";
    });
}
resizer();
var pictures=document.getElementsByClassName('image');

var i=0;
pictures[i].classList.add("show");
function move(){
    pictures[i].classList.remove("show");
        i++;
        i = i % pictures.length;
        pictures[i].classList.add("show");
}   
setInterval(move, 2000);

showImage(0);  
var index=0;   
function plusIndex(n){
    index+=n;
    showImage(index);
}

showImage1(0);
var index1=0;
function plusIndex1(n){
    index1+=n;
   
    showImage1(index1);
}


function showImage(n){
    var i=0
    var pictures=document.getElementsByClassName('image');
  
    if(n>pictures.length){index=1;}
    if(n<1){index= pictures.length;}
    for (i=0;i<pictures.length;i++){
        pictures[i].classList.remove("show");

    }
    pictures[index-1].classList.add("show");
}
function showImage1(n){
    var j=0;
    var picturesOne=document.querySelectorAll(".sidebar-slider-image img");
    if(n>picturesOne.length/2){index1=1}
    if(n<1){index1= picturesOne.length;}
    for (j=0;j<picturesOne.length/2;j++){
        picturesOne[j].classList.remove("show");

    }
    picturesOne[index1-1].classList.add("show");
}
var bool=false;
var footer_icon=document.getElementById('footer1');
var footer=document.querySelector(".info-accumulator")
footer_icon.addEventListener('click',function(){
  bool=!bool;
  if (bool){
  footer.style.display="none";
  }
  else if(!bool){
  footer.style.display="block";
  }
})
var picturesOne=document.querySelectorAll(".sidebar-slider-image img");
console.log(picturesOne);
var postSliderArrow=document.getElementById("left-arrow1");
var postSliderArrow1=document.getElementById("arrow1");
var postSliderArrow2=document.getElementById("arrow2");
var j=0;
picturesOne[0].classList.add('show');
function move1(){
    picturesOne[j].classList.remove("show");
        j++;
        j = j % ((picturesOne.length/2));
        picturesOne[j].classList.add("show");

}
setInterval(move1, 2000);  
var imageCanceler=document.querySelector('.close');
var sliderCanceler=document.querySelector(".slider-overlay"); 

var imageGetter=document.getElementById("menu-getter");
imageGetter.addEventListener('click',()=>{
  sliderCanceler.style.display="block";
})
imageCanceler.addEventListener('click',(e)=>{
    sliderCanceler.style.display="none";
    e.stopPropagation();
})