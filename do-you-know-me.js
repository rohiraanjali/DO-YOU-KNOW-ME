var readlineSync = require('readline-sync');
var username = readlineSync.question("What's yo name  ? ");
var score = 0;
console.log("Welcome "+ username + " to DO YOU KNOW Anjali !")

function play(question,answer){

 var userAns = readlineSync.question(question);

 if(userAns.toLowerCase() === answer.toLowerCase()){
   console.log("You're right !!!")
   score = score + 2;
   console.log("Your current score is ",score)
   console.log("-----------")
 } else {
   console.log("You're wrong !!!")
   score = score - 1;
   console.log("The correct answer is",answer)
   console.log("Your current score is ",score)
   console.log("-----------")
 }
}
 console.log("Your score is ",score)
  console.log("-------------")


var questions = [{
  question : "Where do i live? ",
  answer : "kanpur"
}, {
  question : "what's my favourite color ",
  answer : "red"
},{
  question : "what's my favourite dish? ",
  answer : "sandwiches"
}
];

for(i=0; i < questions.length;i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
};

var mcqset = [
  {
   array : ["cricket","football","tennis","chess"],
  question : "What's anjali's favorite game ",
  answer : "football"
}, {
  array : ["mother","father","brother","all"],
  question : "whom anjali loves the most ?",
  answer : "all"
}
];

function quizMcq(question,array,answer){
  var userans = readlineSync.keyInSelect(array,question);
  console.log('\n')
  if(array[userans] === answer){
    console.log("You are right !!");
    score = score + 2;
    console.log("Your current score is ",score)
    console.log("-----------")
  }else{
    console.log("You are wrong !!")
    console.log("The correct answer is : ",answer)
    score = score - 1
    console.log("Your current score is ",score)
    console.log("-----------")
  }
};

for(i=0;i<mcqset.length;i++){
currque = mcqset[i]
quizMcq(currque.question,currque.array,currque.answer)
}

var highscore = [{
  name : 'Anjali',
  score: '7',
}, {
  name : 'Adarsh',
  score: '5'
}, {
  name : 'Aman',
  score: '4'
}, {
  name: 'Kartik',
  score: '3'
}]




for(i=0;i<highscore.length;i++){
  var currenthigh = highscore[i];
    if(score > currenthigh.score){
      currenthigh[i].name = username;
      currenthigh[i].score = score
    console.log(currenthigh.name +"       "+ currenthigh.score)
  }
}