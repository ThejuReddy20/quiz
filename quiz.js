var para;
var paravalue;
var query=window.location.search.substring(1).split("?");
for (var i in query){
  para=query[i].split("=");
  paravalue=parseInt(para[1]);
}
var idb=window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.wibkitIndexedDB ;
if(!idb in window)
{
  console.log("indexedDB is not supported");
}
//indexedDB creation
var request;
var store;
var open=idb.open("storeData",1);
console.log("IndexedDB is created");
//window.open("index.html");
open.onupgradeneeded=function (e) {
  request=e.target.result;
  request.createObjectStore("formdata",{keyPath:"id",autoIncrement:true});
console.log("store is created");
  }
open.onerror=function (error) {
  console.log("error is occured");
  }
open.onsuccess=function(e){
  request=e.target.result;
  var transaction=request.transaction("formdata","readwrite");
  store=transaction.objectStore("formdata");
  var info=store.get(paravalue);
  info.onsuccess=function (data) {
    console.log(data);
    quest(data.target.result);
      }
}
var form=document.querySelector(".form");
function quest(q){
  var q1=document.createElement("h2");
  q1.textContent=q.q1+"?";
  form.append(q1);
  var q1o1=document.createElement("h4");
  q1o1.textContent=q.q1o1;
  form.append(q1o1);
  var q1o2=document.createElement("h4");
  q1o2.textContent=q.q1o2;
  form.append(q1o2);
  var q1o3=document.createElement("h4");
  q1o3.textContent=q.q1o3;
  form.append(q1o3);
  var q1o4=document.createElement("h4");
  q1o4.textContent=q.q1o4;
  form.append(q1o4);
  var q2=document.createElement("h2");
  q2.textContent=q.q2+"?";
  form.append(q2);
  var q2o1=document.createElement("h4");
  q2o1.textContent=q.q2o1;
  form.append(q2o1);
  var q2o2=document.createElement("h4");
  q2o2.textContent=q.q2o2;
  form.append(q2o2);
  var q2o3=document.createElement("h4");
  q2o3.textContent=q.q2o3;
  form.append(q2o3);
  var q2o4=document.createElement("h4");
  q2o4.textContent=q.q2o4;
  form.append(q2o4);
  var q3=document.createElement("h2");
  q3.textContent=q.q3+"?";
  form.append(q3);
  var q3o1=document.createElement("h4");
  q3o1.textContent=q.q3o1;
  form.append(q3o1);
  var q3o2=document.createElement("h4");
  q3o2.textContent=q.q3o2;
  form.append(q3o2);
  var q3o3=document.createElement("h4");
  q3o3.textContent=q.q3o3;
  form.append(q3o3);
  var q3o4=document.createElement("h4");
  q3o4.textContent=q.q3o4;
  form.append(q3o4);
  var q4=document.createElement("h2");
  q4.textContent=q.q4+"?";
  form.append(q4);
  var q4o1=document.createElement("h4");
  q4o1.textContent=q.q4o1;
  form.append(q4o1);
  var q4o2=document.createElement("h4");
  q4o2.textContent=q.q4o2;
  form.append(q4o2);
  var q4o3=document.createElement("h4");
  q4o3.textContent=q.q4o3;
  form.append(q4o3);
  var q4o4=document.createElement("h4");
  q4o4.textContent=q.q4o4;
  form.append(q4o4);
  var q5=document.createElement("h2");
  q5.textContent=q.q5+"?";
  form.append(q5);
  var q5o1=document.createElement("h4");
  q5o1.textContent=q.q5o1;
  form.append(q5o1);
  var q5o2=document.createElement("h4");
  q5o2.textContent=q.q5o2;
  form.append(q5o2);
  var q5o3=document.createElement("h4");
  q5o3.textContent=q.q5o3;
  form.append(q5o3);
  var q5o4=document.createElement("h4");
  q5o4.textContent=q.q5o4;
  form.append(q5o4);
  var q6=document.createElement("h2");
  q6.textContent=q.q6+"?";
  form.append(q6);
  var q6o1=document.createElement("h4");
  q6o1.textContent=q.q6o1;
  form.append(q6o1);
  var q6o2=document.createElement("h4");
  q6o2.textContent=q.q6o2;
  form.append(q6o2);
  var q6o3=document.createElement("h4");
  q6o3.textContent=q.q6o3;
  form.append(q6o3);
  var q6o4=document.createElement("h4");
  q6o4.textContent=q.q6o4;
  form.append(q6o4);
  var q7=document.createElement("h2");
  q7.textContent=q.q7+"?";
  form.append(q7);
  var q7o1=document.createElement("h4");
  q7o1.textContent=q.q7o1;
  form.append(q7o1);
  var q7o2=document.createElement("h4");
  q7o2.textContent=q.q7o2;
  form.append(q7o2);
  var q7o3=document.createElement("h4");
  q7o3.textContent=q.q7o3;
  form.append(q7o3);
  var q7o4=document.createElement("h4");
  q7o4.textContent=q.q7o4;
  form.append(q7o4);
  var q8=document.createElement("h2");
  q8.textContent=q.q8+"?";
  form.append(q8);
  var q8o1=document.createElement("h4");
  q8o1.textContent=q.q8o1;
  form.append(q8o1);
  var q8o2=document.createElement("h4");
  q8o2.textContent=q.q8o2;
  form.append(q8o2);
  var q8o3=document.createElement("h4");
  q8o3.textContent=q.q8o3;
  form.append(q8o3);
  var q8o4=document.createElement("h4");
  q8o4.textContent=q.q8o4;
  form.append(q8o4);
  var q9=document.createElement("h2");
  q9.textContent=q.q9+"?";
  form.append(q9);
  var q9o1=document.createElement("h4");
  q9o1.textContent=q.q9o1;
  form.append(q9o1);
  var q9o2=document.createElement("h4");
  q9o2.textContent=q.q9o2;
  form.append(q9o2);
  var q9o3=document.createElement("h4");
  q9o3.textContent=q.q9o3;
  form.append(q9o3);
  var q9o4=document.createElement("h4");
  q9o4.textContent=q.q9o4;
  form.append(q9o4);
  var q10=document.createElement("h2");
  q10.textContent=q.q10+"?";
  form.append(q10);
  var q10o1=document.createElement("h4");
  q10o1.textContent=q.q10o1;
  form.append(q10o1);
  var q10o2=document.createElement("h4");
  q10o2.textContent=q.q10o2;
  form.append(q10o2);
  var q10o3=document.createElement("h4");
  q10o3.textContent=q.q10o3;
  form.append(q10o3);
  var q10o4=document.createElement("h4");
  q10o4.textContent=q.q10o4;
  form.append(q10o4);
}
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;

    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }

    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz right away
  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
