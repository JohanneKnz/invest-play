//getting all required elemets
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const quiz_box = document.querySelector(".quiz_box");
const continue_btn = document.querySelector(".buttons .continue");
const quit_btn = document.querySelector(".buttons .exit");
const restart_btn = document.querySelector(".buttons .restart");

// IF Start Quiz Button Clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); // show the info box
}

// IF Exit Button Clicked
quit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide the info box
}

// IF continue Button Clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide the info box
    quiz_box.classList.add("activeQuiz"); //show the quiz box
    showQuestions(4);
}

let que_count = 0;

//getting questions and options from array
function showQuestions(index){
    const que_text = document.querySelector(".que_text");
    const option_list = document.querySelector(".option_list");
    let que_tag = '<span>'+ questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
                    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
                    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
                    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
}