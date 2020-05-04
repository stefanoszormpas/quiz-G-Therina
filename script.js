

 const questionText=document.querySelector(".question-text");
 const optionBox=document.querySelector(".option-box");
 const currentQuestionNum=document.querySelector(".current-question-num");
 const answerDescription=document.querySelector(".answer-description");
 const nextQuestionBtn=document.querySelector(".next-question-btn");
 const correctAnswers=document.querySelector(".correct-answers");
 const seeResultBtn=document.querySelector(".see-result-btn");
 const remainingTime=document.querySelector(".remaining-time");
 const timeUpText=document.querySelector(".time-up-text");
 const quizHomeBox=document.querySelector(".quiz-home-box");
 const quizBox=document.querySelector(".quiz-box");
 const quizOverBox=document.querySelector(".quiz-over-box");
 const startAgainQuizBtn=document.querySelector(".start-again-quiz-btn");
 const goHomeBtn=document.querySelector(".go-home-btn");
 const startQuizBtn=document.querySelector(".start-quiz-btn");
 let attempt=0;
 let questionIndex=0;
 let score=0;
 let number=0;
 let myArray=[];
 let interval;

 // questions and options and  answer and answer description
 // array of objects
 myApp=[
        {
         question:" Να επιλέξετε τη διατύπωση που συμπληρώνει σωστά την   ημιτελή πρόταση.Σε κάθε  είδος κρούσης  ισχύει : ",
         options:[" η αρχή διατήρησης της µηχανικής ενέργειας","η αρχή διατήρησης της ορµής","η αρχή διατήρησης του ηλεκτρικού φορτίου","όλες οι παραπάνω αρχές"],
         answer:1,
        },
        {
        question:"Η κινητική ενέργεια Κ ενός σώματος μάζας m και ορμής P δίνεται από την σχέση \\(K = \\frac{{{P^2}}}{{2m}}\\)",
        options:["σωστό","λάθος"],
         answer:0,
         description:"Πράγματι \\(K = \\frac{1}{2}m{\\upsilon ^2} = \\frac{1}{2}\\frac{{{m^2}{\\upsilon ^2}}}{m} = \\frac{{{P^2}}}{{2m}}\\)"
        },
        {
         question:" Ένα σώμα  A έχει μάζα m και ταχύτητα  υ, ενώ ένα άλλο σώμα Β έχει μάζα  m/2 και ταχύτητα  2υ. Για  τις  ορμές  \\({\\vec p_A}\\)  και \\({\\vec p_B}\\)    κατά μέτρο των δυο σωμάτων θα ισχύει",
         options:[" \\({p_A} > {p_B}\\) ","\\({p_A} < {p_B}\\)","\\({p_A} = {p_B}\\)"],
         answer:2,
        },
        {
         question:" Ένα βλήμα μάζας  m =0,1 kg  κινείται οριζόντια με ταχύτητα υο= 100 m/sec και σφηνώνεται σε ακίνητο κιβώτιο μάζας  m1 =9,9 kg που ισορροπεί σε οριζόντιο επίπεδο. Η ορμή του συσσωματώματος που προκύπτει είναι 1000 \\(Kg.m/s\\)",
         options:["σωστό","λάθος"],
         answer:1,
         description:"Από την διατήρηση της ορμής , η ορμή του συσσωματώματος θα ισούται με την ορμή του m πριν την κρούση , δηλαδή με 10Kg.m/s"
        },
        {
         question:" Σε σώμα μάζας m που έχει ορμή Ρ με κατάλληλη δύναμη διπλασιάζουμε την ορμή του.  Με τον τρόπο αυτό η κινητική ενέργεια του σώματος,  θα έχει:",
         options:[" διπλασιαστεί","υποδιπλασιαστεί","τετραπλασιαστεί","υποτετραπλασιαστεί"],
         answer:2,
        },
  {
         question:"   Μια μπάλα μάζας m κινείται οριζόντια με ταχύτητα υ, οπότε ξαφνικά κτυπάει σε κατακόρυφο τοίχο, ανακλάται και επιστρέφει με αντίθετη ταχύτητα. Η μεταβολή της ορμής της μπάλας κατά μέτρο  είναι ίση με:",
         options:[" 2mυ","mυ","0"],
         answer:0,
        },
  {
         question:" Ένας άνθρωπος μάζας m βρίσκεται πάνω σε μια ακίνητη βάρκα μάζας Μ. Ο άνθρωπος πηδά στο νερό με οριζόντια ταχύτητα μέτρου . Προσδιορίστε την ταχύτητα της βάρκας. Αγνοείστε την αντίδραση του νερού.",
         options:[" \\(\\frac{{m{\\upsilon _1}}}{{M + m}}\\)","\\(\\frac{{m{\\upsilon _1}}}{M}\\) ","\\((m + M){\\upsilon _1}\\)","\\(M{\\upsilon _1}\\)"],
         answer:0,
        },
  {
         question:" Η ορμή ενός σώματος είναι ομόρροπη της ταχύτητας ",
         options:["σωστό","λάθος"],
         answer:0,
         description:"Από τον ορισμό της ορμής έχουμε \\(\\vec p = m\\vec \\upsilon \\) και επειδή m >0 θα είναι \\(\\vec p \\uparrow  \\uparrow \\vec \\upsilon \\)"
        },
  {
         question:" Ένα βλήμα που κινείται με ταχύτητα υ , εκρήγνυται και διασπάται σε δύο ίσα κομμάτια. Λίγο μετά την έκρηξη το ένα κομμάτι κινείται με ταχύτητα 3υ . Το άλλο κομμάτι έχει ταχύτητα -4υ;",
         options:["σωστό","λάθος"],
         answer:1,
         description:"Από την διατήρηση της ορμής έχουμε \\(m\\upsilon  = \\frac{m}{2}3\\upsilon  + \\frac{m}{2}\\upsilon ' \\Rightarrow \\upsilon ' =  - \\upsilon \\) "
        },
  {
         question:" Σε κάθε κρούση μεταξύ δύο σωμάτων διατηρείται η ",
         options:[" ορμή του κάθε σώματος ","η κινητική ενέργεια κάθε σώματος","η ορμή του συστήματος","η κινητική ενέργεια του συστήματος"],
         answer:2,
        }


       ]

  function load(){
  	number++;
    questionText.innerHTML=myApp[questionIndex].question;
    createOptions();
    scoreBoard();
    currentQuestionNum.innerHTML=number + " / " + myApp.length;
  }

  function createOptions(){
  	optionBox.innerHTML="";
  	let animationDelay=0.2;
  	 for(let i=0; i<myApp[questionIndex].options.length; i++){
  	   const option=document.createElement("div");
  	         option.innerHTML=myApp[questionIndex].options[i];
  	         option.classList.add("option");
  	         MathJax.Hub.Queue(["Typeset",MathJax.Hub,"option"]);
  	         option.id=i;
  	         option.style.animationDelay=animationDelay + "s";
  	         animationDelay=animationDelay+0.2;
  	         option.setAttribute("onclick","check(this)");
  	         optionBox.appendChild(option);
  	 }
  }

  function generateRandomQuestion(){
      const randomNumber=Math.floor(Math.random() * myApp.length);
      let hitDuplicate=0;
      if(myArray.length == 0){
      	questionIndex=randomNumber;
      }
      else{
         for(let i=0; i<myArray.length; i++){
         	if(randomNumber == myArray[i]){
         		// if duplicate found
         		hitDuplicate=1;
         	}
         }
         if(hitDuplicate == 1){
         	generateRandomQuestion();
         	return;
         }
         else{
           questionIndex=randomNumber;
         }
      }

      myArray.push(randomNumber);
      //console.log(myArray)
      load();
  }

 function check(ele){
 	  const id=ele.id;
 	  if(id==myApp[questionIndex].answer){
 	  	ele.classList.add("correct");
 	  	score++;
 	  	scoreBoard();
 	  }
 	  else{
 	  	ele.classList.add("wrong");
 	  	// show correct option when clicked answer is wrong
 	  	 for(let i=0; i<optionBox.children.length; i++){
            if(optionBox.children[i].id==myApp[questionIndex].answer){
            	optionBox.children[i].classList.add("show-correct");
            }
 	  	 }
 	  }
 	  attempt++;
 	  disableOptions()
 	  showAnswerDescription();
 	  showNextQuestionBtn();
 	  stopTimer();

 	  if(number == myApp.length){
 	  	quizOver();
 	  }
 }

 function timeIsUp(){
 	  showTimeUpText();
     // when time is up show correct answer
     for(let i=0; i<optionBox.children.length; i++){
            if(optionBox.children[i].id==myApp[questionIndex].answer){
            	optionBox.children[i].classList.add("show-correct");

            }
 	  	 }

 	  disableOptions()
 	  showAnswerDescription();
 	  showNextQuestionBtn();
	  if(number == myApp.length){
 	  	quizOver();
 	  }
 }

 function startTimer(){
      let timeLimit=20;
      remainingTime.innerHTML=timeLimit;
      remainingTime.classList.remove("less-time");
      interval=setInterval(()=>{
        timeLimit--;
        if(timeLimit < 10){
        	timeLimit="0"+timeLimit;
        }
        if(timeLimit < 6){
         remainingTime.classList.add("less-time");
        }
        remainingTime.innerHTML=timeLimit;
        if(timeLimit == 0){
        	clearInterval(interval);
        	timeIsUp();
        }
      },1000)
 }

function stopTimer(){
    clearInterval(interval);
}

 function disableOptions(){
 	for(let i=0; i<optionBox.children.length; i++){
 		optionBox.children[i].classList.add("already-answered");
 	}
 }

 function showAnswerDescription(){
 	if(typeof myApp[questionIndex].description !== 'undefined'){
 		 answerDescription.classList.add("show");
     
         answerDescription.innerHTML=myApp[questionIndex].description;
         MathJax.Hub.Queue(["Typeset",MathJax.Hub,"option"]);
 	}
 }
 function hideAnswerDescription(){
 	answerDescription.classList.remove("show");
    answerDescription.innerHTML="";
 }
 function showNextQuestionBtn(){
 	nextQuestionBtn.classList.add("show");
 }
 function hideNextQuestionBtn(){
 	nextQuestionBtn.classList.remove("show");
 }
 function showTimeUpText(){
 	timeUpText.classList.add("show");
 }
function hideTimeUpText(){
 	timeUpText.classList.remove("show");

 }
 function scoreBoard(){
 	correctAnswers.innerHTML=score;
 }

 nextQuestionBtn.addEventListener("click",nextQuestion);

 function nextQuestion(){
 	 generateRandomQuestion();
 	 hideNextQuestionBtn();
 	 hideAnswerDescription();
 	 hideTimeUpText();
 	 startTimer();
 }

 function quizResult(){
   document.querySelector(".total-questions").innerHTML=myApp.length;
   document.querySelector(".total-attemp").innerHTML=attempt;
   document.querySelector(".total-correct").innerHTML=score;
   document.querySelector(".total-wrong").innerHTML=attempt-score;
   const percentage=(score/myApp.length)*100;
   document.querySelector(".percentage").innerHTML=percentage.toFixed(2) + "%";
 }
 function resetQuiz(){
   attempt=0;
   // questionIndex=0;
   score=0;
   number=0;
   myArray=[];
 }

 function quizOver(){
     nextQuestionBtn.classList.remove("show");
     seeResultBtn.classList.add("show");
 }

  seeResultBtn.addEventListener("click",()=>{

  	  quizBox.classList.remove("show");
  	  seeResultBtn.classList.remove("show");
      quizOverBox.classList.add("show");
      quizResult();
  })

  startAgainQuizBtn.addEventListener("click",()=>{
  	quizBox.classList.add("show");
    quizOverBox.classList.remove("show");
    resetQuiz();
    nextQuestion();
  })

  goHomeBtn.addEventListener("click",()=>{
  	quizOverBox.classList.remove("show");
  	quizHomeBox.classList.add("show");
    resetQuiz();
  })
  startQuizBtn.addEventListener("click",()=>{
  	 quizHomeBox.classList.remove("show");
  	quizBox.classList.add("show");
     nextQuestion();

  })

  // window.onload=()=>{

  // }
