//getting all required elemets
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const continue_btn = document.querySelector(".buttons .continue");
const quit_btn = document.querySelector(".buttons .exit");
const restart_btn = document.querySelector(".buttons .restart");
const que_text = document.querySelector(".que_text");
const option_list = document.querySelector(".option_list");

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

let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// if next button is clicked
next_btn.onclick = ()=> {
    if(que_count < questions.length - 1) { //if the question count is less than total questions availiable
        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCounter(que_numb);
        clearInterval(counter);
        clearInterval(counterLine);
        next_btn.classList.remove("show");
    } else {
        clearInterval(counter);
        clearInterval(counterline);
        showResult();
    }
}

//getting questions and options from array
function showQuestions(index){

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

// showing icons for options
let tickIconTag = '<div class="icon icon_tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon icon_cross"><i class="fas fa-times"></i></div>';

// when option is clicked
function optionSelected(answer) {
    clearIntreval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    const allOptions = option_list.children.length;

    if(userAns == correctAns) {
        userScore += 1;
        answer/classList.add("correct");
        answer.insertAdjacentHTML("beforeend", tickIconTag);
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    } else {
        answer.classList.add("incorrect");
        answer.insertAdjacentHTML("beforeend", crossIconTag);
        console.log("wrong Answer");

        for(i=0; i < allOptions; i++) {
            if(option_list.children[i].textContent == correctAns) {
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
                console.log("Auto selected correct answer.")
            }
        }
    }
    for(i=0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
    }
    next_btn.classList.add("show");
}

function showResult () {
    info_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");
    const scoreText = result_box.querySelector(".score_text");
    if(userScore > 4) {
        let scoreTag = '<span> Well done! You got <p>' + userScore + '<p> out of </p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    } else {
        let scoreTag = '<span> Tru again! You got <p>' + userScore + '<p> out of </p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function queCounter(index) {
    let totalQueCounTag = '<span><p>'+ index + '</p> of <p>' + questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;
}