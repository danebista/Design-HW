
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

