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
    info_box.classList.add("activeQuiz"); //shows quiz box
}

