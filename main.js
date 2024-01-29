let images = document.querySelectorAll(".img");
let arrayimg= Array.from(images);
let mainimg= document.getElementById("mainimg");
let body = document.body;

for(let i =0;i<arrayimg.length;i++) {
    arrayimg[i].addEventListener("click",()=>{
        mainimg.src=arrayimg[i].src;
       
    })
}



