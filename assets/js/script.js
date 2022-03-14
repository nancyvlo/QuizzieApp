//required elements//
const start_btn = document.querySelector(".start-btn button");
const info_box = document.querySelector(".info-box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz-box");

//start quiz clicked//
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
}

//exit button clicked//
exit_btn.onclick  = ()=>{
    info_box.classList.remove("activeInfo"); //hides info box
}

//continue quiz//
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hides info box
    quiz_box.classList.add("activeQuiz"); //shows quiz box
    showQuestions(0);
}

let que_count = 0;

const next_btn = quiz_box.querySelector(".next-btn");

//if next btn clicked//
next_btn.onclick =()=>{
    que_count++;
    showQuestions(que_count);
    que_count = 1
}

//questions and options//
function showQuestions(index){
    const que_text = document.querySelector(".que-text");
    const option_list = document.querySelector(".option-list");
    let que_tag = '<span>'+ questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
                    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
                    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
                    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
}