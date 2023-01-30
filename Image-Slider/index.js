const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const imgContainerEl = document.querySelector(".image-container");
const imgsEl = document.querySelectorAll("img");


let currentImg = 1;
let timeout;

nextEl.addEventListener("click", ()=>{
  currentImg++;
  updateImg();
  clearTimeout(timeout);
});

prevEl.addEventListener("click", ()=>{
  currentImg--;
  updateImg();
  clearTimeout(timeout);

});

updateImg();

function updateImg(){
  if(currentImg > imgsEl.length){
    currentImg = 1;
  } else if(currentImg < 1) {
    currentImg = imgsEl.length;
  }
  imgContainerEl.style.transform = `translateX(-${500*(currentImg-1)}px)`;

  timeout = setTimeout(()=>{
    currentImg++;
    updateImg();
  }, 3000);
}