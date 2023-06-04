//getting all required elemets
const start_btn = document.querySelector(".start-btn button");
const info_box = document.querySelector(".info-box");
const quit_btn = document.querySelector(".buttons .quit");
const restart_btn = document.querySelector(".buttons .restart");

// IF Start Quiz Button Clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo");
}