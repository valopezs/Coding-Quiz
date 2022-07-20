// When user clicks the start button, then a timer starts and user is presented with a question

// Declare global variables 
var startBtn = document.getElementById("startBtn");
var time = 75;
var time_remaining = true;
var time_start= false;
var countdownTimer = document.getElementById("countdownTimer");
var homeContainer =  document.getElementById("homeContainer");
var quizContainer = document.getElementById("quizContainer");
var questionHeading = document.getElementById("questionHeading");
var answerChoiceA = document.getElementById("answerChoiceA");
var answerChoiceB = document.getElementById("answerChoiceB");
var answerChoiceC = document.getElementById("answerChoiceC");
var answerChoiceD = document.getElementById("answerChoiceD");
var correctAnswer = document.getElementById("#orrectAnswer");    
var high_scores= [];
var output="";

// Set score = 0 at the start of the game 
var score = 0;
// question index
let i = 0;

// QUESTIONS ARRAY:
var questionsArray = [
{
    question: "Question: How to write an IF statement in JavaScript?",
    imageSrc: "",
    answerChoice: ["A) if (i == 5)", "B) if i == 5 then", "C) if i = 5", "D) if i = 5 then"],
    correctAnswer: 0
},
{
    question: "Question: What is the HTML tag under which you can write the JavaScript code?",
    imageSrc: "",
    answerChoice: ["A) <javascript>", "B) <scripted>", "C) <script>", "D) <js>"],
    correctAnswer: 2
},
{
    question: "Question: What are variables used for in JavaScript Programs?",
    imageSrc: "",
    answerChoice: ["A) Storing numbers, dates, or other values", "B) Varying randomly", "D) Causing high-school algebra flashbacks", "D) None of the above"],
    correctAnswer: 0
},
{
    question: "Question: Which event occurs when the user clicks on an HTML element?",
    imageSrc: "",
    answerChoice: ["A) onmouseclick", "B) onchange", "C) onclick", "D) onmouseover"],
    correctAnswer: 2
},
{
    question: "Question: Which method adds a new item to the end of an array and returns the new length?",
    imageSrc: "",
    answerChoice: ["A) shift()", "B) return() ", "C) push() ", "D) pop()"],
    correctAnswer: 2
}, 
{
    question: "Question: How do you find the number with the highest value of x and y?",
    imageSrc: "",
    answerChoice: ["A) Math.max(x, y)", "B) Math.ceil(x, y)", "C) ceil(x, y)", "D) top(x, y)"],
    correctAnswer: 0
},
{
    question: "Question: Which of the following are capabilities of functions in JavaScript?",
    answerChoice: ["A) Return a value", "B) Accept parameters", "C) Accept parameters and Return a value", "D) All of the above"],
    correctAnswer: 1
}];

//Coundown Timer Function: set countdown timer and interval. Set time-related valiables.

//change the seconds variable every second.
var countdownTimerInterval = setInterval(setCountdownTimer, 1000);

//function that changes the time var
function setCountdownTimer() {
        if (time_start)
        time--;
        if(time <= 0) {
        end_quiz();
        time = 0;    
        // clearInterval(countdownTimerInterval);
        //alert user and stop quiz
        }
        document.getElementById("timer").innerHTML = time;
    }

// Start Event Listener: When user clicks Start button, start the countdown timer and quiz questions. Add an event listener to each button.
startBtn.addEventListener("click", function() {
    quizContainer.style.display = "block";
    homeContainer.style.display ="none";
    countdownTimer.style.display= "block";
    document.getElementById("score_keeper").style.display= "block";
    document.getElementById("score").innerHTML = score;
    setCountdownTimer();
    setQuizQuestions();
    time_start= true;
});

// Question function: display questions and multiple-choice answers

function setQuizQuestions() {
        questionHeading.textContent = questionsArray[i].question;
        answerChoiceA.textContent = questionsArray[i].answerChoice[0]; 
        answerChoiceB.textContent = questionsArray[i].answerChoice[1]; 
        answerChoiceC.textContent = questionsArray[i].answerChoice[2]; 
        answerChoiceD.textContent = questionsArray[i].answerChoice[3]; 
        };


// Change to next question
answerChoiceA.addEventListener('click', function(event) {
        event.stopPropagation();
        correctAnswer= questionsArray[i].correctAnswer;
        console.log("correctAnswer " + correctAnswer);
        // check answer
        if (0 === correctAnswer) { 
            // display message to user for 1  second stating if the answer is correct or incorrect
            document.getElementById("AnswerResponse").innerHTML = "Yay, correct!";
            setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
            // when user answers a question correctly, increase the score
            score++;    
            // display updated score progress
            document.getElementById("score").innerHTML = score;
        } else {
            time_remaining -= 3;
            // when user answers a question inccorrectly, subtract from the time
            document.getElementById("AnswerResponse").innerHTML = "Boo, incorrect!";
            setTimeout(function() {
                document.getElementById("AnswerResponse").innerHTML = "";
                    },
                    1000
                );
        }
        if (i >= questionsArray.length -1) {
        end_quiz();
        } else {
            i++ 
            setQuizQuestions();
        };
});

answerChoiceB.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer = questionsArray[i].correctAnswer;
    console.log(correctAnswer);
        if (1 === correctAnswer) { 
            document.getElementById("AnswerResponse").innerHTML = "Yay, correct it!";
            setTimeout(function() {
                document.getElementById("AnswerResponse").innerHTML = "";
                    },
                    1000
                );
            score++;
            document.getElementById("score").innerHTML = score;
        } else {
            time_remaining -= 3;
            document.getElementById("AnswerResponse").innerHTML = "Boo, incorrect!";
            setTimeout(function() {
                document.getElementById("AnswerResponse").innerHTML = "";
                    },
                    1000
                );
        }
        if (i >= questionsArray.length -1) {
        end_quiz();
        } else {
         i++ 
        setQuizQuestions();
        };
});

answerChoiceC.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer = questionsArray[i].correctAnswer;
    console.log(correctAnswer);
    if (2 === correctAnswer) { 
        document.getElementById("AnswerResponse").innerHTML = "Yay, correct!";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
        score++;
        document.getElementById("score").innerHTML = score;
    } else {
        time_remaining -= 3;
        document.getElementById("AnswerResponse").innerHTML = "Boo, incorrect!";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
    }
    if (i >= questionsArray.length -1) {
    end_quiz();
    } else {
        i++ 
        setQuizQuestions();
    };
});

answerChoiceD.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer= questionsArray[i].correctAnswer.value;
    console.log(correctAnswer);
    if (3 === correctAnswer) { 
        document.getElementById("AnswerResponse").innerHTML = "Yay, correct";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
        score++;
        document.getElementById("score").innerHTML = score;
    } else {
        time_remaining -= 3;
        document.getElementById("AnswerResponse").innerHTML = "Boo, incorrect";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
    }
    if (i >= questionsArray.length -1) {
       end_quiz();
    } else {
        i++ 
        setQuizQuestions();
    };
});

//end quiz
function end_quiz(){
    document.getElementById("game_over").style.display= "block";
    document.getElementById("quizContainer").style.display="none";
    document.getElementById("countdownTimer").style.display= "none";
    document.getElementById("score_keeper").style.display= "none";
    document.getElementById("AnswerResponse").innerHTML="";
    document.getElementById("end_score").innerHTML= score;
}

//submit score and initals
    function submit_score() {
    high_scores.push(document.getElementById("initials").value + " " + score);
    view_high_scores();
}

function view_high_scores(){
        
// changing the screen output
    document.getElementById("quizContainer").style.display="none";
    document.getElementById("game_over").style.display= "none";
    document.getElementById("high_scores_page").style.display="block";
        
    output="";
    for(let k=0; k<high_scores.length; k++){
    output = output + "  " + high_scores[k];
    }
    document.getElementById("high_scores").innerHTML= output;                
    clear_up();
}

// refresh the site to the home container page
function go_home(){	
    document.getElementById("high_scores_page").style.display= "none";
    document.getElementById("homeContainer").style.display= "block";
    clear_up();
}
        
// clear the highscore
function clear_hs(){
    high_scores = [];
}

// refresh the site 
function clear_up(){
    time=75;
    time_remaining=true;
    time_start=false;
    i=0;
    score=0;
}