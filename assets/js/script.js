//getting all required elemets
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const quiz_box = document.querySelector(".quiz_box");
const continue_btn = document.querySelector(".buttons .continue");
const quit_btn = document.querySelector(".buttons .exit");
const restart_btn = document.querySelector(".buttons .restart");

// If Start Quiz Button Clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); // show the info box
}

// If Exit Button Clicked
quit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide the info box
}

// If continue Button Clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide the info box
    quiz_box.classList.add("activeQuiz"); //show the quiz box
    showQuestions(0); //show the questions
    queCounter(1) //setting que counter to 1
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer . total_que");

// if next button is clicked
next_btn.onclick = ()=> {
    if(que_count < questions.length - 1) { //if the question count is less than total questions availiable
        que_count++;
        que_numb++;
        showQuestions(que_count);
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer(timeValue);
        startTimerLine(widthValue);
        timeText.textContent = "Time Left";
        next_btn.classList.remove("show");
    } else {
        clearInterval(counter);
        clearInterval(counterline);
        showResult();
    }
}

//getting questions and options from array
function showQuestions(index){
    const que_text = document.querySelector(".que_text");

    //replacing the question and options span and div for values ussing array index
    let que_tag = '<span>'+ questions[index].numb +". "+ questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
                    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
                    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
                    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;

    const option = option_list.quesrySelectorAll(".option");

    //set click attribute to all availiable options
    for(i=0; i< option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this");
    }
}