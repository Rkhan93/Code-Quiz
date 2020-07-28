//VARIABLES

var header = document.querySelector(".header");
var score = document.getElementById("score");
var submitButton = document.getElementById("submitButton");

var quizQuestionHeader = document.getElementById("quizQuestionHeader");
var choice1 = document.getElementById("one");
var choice2 = document.getElementById("two");
var choice3 = document.getElementById("three");
var choice4 = document.getElementById("four");
var correct = document.getElementById("correct");
var answerResponse = document.getElementById("answerResponse");

var finalScoreIs = document.getElementById("finalScoreIs");
var quizQuestionsPage = document.getElementById("quizQuestionsPage");
var questionButton = document.querySelector(".questionButton");

var quizChallengePage = document.getElementById("quizChallengePage");
var finalScorePage = document.getElementById("finalScorePage");


var initialButton = document.getElementById("initialButton"); 
var initials = document.getElementById("initials"); 
var initialInput = document.getElementById("initialInput"); 

var allDone = document.getElementById("allDone");
var allDoneButtons = document.getElementById("form-inline");

var timer = document.getElementById("timer");  

// QUIZ QUESTION ARRAY
var quizQuestions = [
 {
"quizQuestionHeader" : "Who invented JacaScript",
"one" : "1. Brendan Frasier",
"two" : "2. Bill Gates",
"three" : "3. Brendan Eich",
"four" : "4. Steve Jobs",
"correct" : "3. Brendan Eich",
  },{
  "quizQuestionHeader" : "What are variables used for in JavaScript programs", 
  "one" : "1. storing numbers, dates, or other values",
  "two" : "2. varying randomly",
  "three" : "3. causing high school algebra flashbacks",
  "four" : "4. alerts",
  "correct" : "1. storing numbers, dates, or other values ",
  },{
  "quizQuestionHeader" : "Which of the following is NOT a correct JavaScript variable name.",
  "one" : "1. _first_and_last_names",
  "two" : "2. firstAndLast",
  "three" : "3. 2names",
  "four" : "4. none of the above",
  "correct" : "3. 2names",
  },{
   "quizQuestionHeader" : "Inside which HTML element do we put the JavaScript",
   "one" : "1. js",
   "two" : "2. javaScript",
   "three" : "3. script",
   "four" : "4. console.log",
   "correct" : "3. script",
  },
]

var startScore = 0; 
var questionIndex = 0;

// FIRST PAGE 
function codeQuizChallenge() {
  quizChallengePage.style.display = "block"; // Shows Rules 
  header.style.display = "block"; // Shows Header
  quizQuestionsPage.style.display = "none"; // Hide Quiz Questions Page
  finalScorePage.style.display = "none";   // Hide Final Core Page 

  var startScore = 0; // Start time 
  timer.textContent = "Time: " + startScore; // Holder text in nav bar 
}

// RESET VARIABLES WHEN RESTART QUIZ 
function resetVariables() {
  startScore = 0; 
  questionIndex = 0;
}

// START QUIZ 
function startQuiz() { 
quizChallengePage.style.display = "none"; 
quizQuestionsPage.style.display = "block"; 

secondsLeft = 60; // seconds in Timer 

  var timerInterval = setInterval(function() { 
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft;
    if (secondsLeft === 0 || quizQuestions.length === questionIndex) {
      clearInterval(timerInterval);
      showFinalScore();
    }
  }, 1000);
}

// SHOW QUESTIONS
function showQuestions() {
  var q = quizQuestions[questionIndex];

  quizQuestionHeader.innerHTML = q.quizQuestionHeader;
  choice1.innerHTML = q.one;
  choice1.setAttribute("data-answer", q.one);
  choice2.innerHTML = q.two;
  choice2.setAttribute("data-answer", q.two);
  choice3.innerHTML = q.three;
  choice3.setAttribute("data-answer", q.three);
  choice4.innerHTML = q.four;
  choice4.setAttribute("data-answer", q.four);
}

// EVENT LISTENERS  
showQuestions();
choice1.addEventListener("click", function (event) {
  checkAnswer(event);
})
choice2.addEventListener("click", function (event) {
  checkAnswer(event);
})
choice3.addEventListener("click", function (event) {
  checkAnswer(event);
})
choice4.addEventListener("click", function (event) {
  checkAnswer(event);
})

 // CHECK TO SEE IF ANSWER IS CORRECT
function checkAnswer(event) {
  event.preventDefault();

  var answer = event.currentTarget.dataset.answer;
  var correctAnswer = null;

  if (quizQuestions[questionIndex].correct === answer) {
      correctAnswer = answer;
  }
  if (answer === correctAnswer) {
  answerResponse.textContent = "Correct!"; // when correct, says correct
  } else {
  answerResponse.textContent = "Wrong!"; // when wrong deducts 10 points
      secondsLeft -= 10
      if (secondsLeft < 0) {
          secondsLeft = 0;
      }
  }
  if (quizQuestions.length === questionIndex+1) {
    showFinalScore(); 
    return; 
  }
  questionIndex++;
  showQuestions();
}

// GO TO "ALL DONE" PAGE AND SHOW FINAL SCORE
function showFinalScore() { //Function to go to page when time out or quiz complete 
  quizQuestionsPage.style.display = "none"; // Hide Questions Page
  
  finalScorePage.style.display = "block"; // Show Final Score Page 
  finalScoreIs.style.display = "block" // Show Final Score
  initials.style.display = "block" // Show initial input
  initialButton.style.display = "block" // Show initial button
  initialInput.style.display = "block" // Show initial input
  finalScoreIs.textContent = "Your final score is " + secondsLeft;
  initialButton.textContent = "Submit"; // Form button 
  initials.textContent = "Enter Your Initials: "; // Form text
} 

 //EVENT LISTENERS

// START QUIZ  
submitButton.addEventListener("click", function() { 
  startQuiz()
  console.log("start")
})

// GO BACK 
goBack.addEventListener("click", function() { // back to the home page
console.log("restart quiz")
})

// Page starts at home page 
codeQuizChallenge();
