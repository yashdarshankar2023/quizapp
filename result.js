const correct = ["D","A","A","B","C","C","B","A","C","D"]
let answers = localStorage.getItem("selected_answers");
const answer = answers.split(",");
console.log(answer);

var correct_count = 0
var wrong_count = 0
var skip_count = 0
for(let i=0; i<10;i++){
    
    if(answer[i]==="Skipped"){
        skip_count +=1;
    }
    else if(answer[i]===correct[i]){
            correct_count +=1;
    }
    else{
            wrong_count +=1;
       }
    

}







let correct_answer = document.getElementById("correct-answer")
correct_answer.innerHTML = `<b>Correct answer : </b> ${correct_count}`

let wrong_answer = document.getElementById("wrong-answer")
wrong_answer.innerHTML = `<b>Wrong answer : </b> ${wrong_count}`

let skipped_answer = document.getElementById("skipped-answer")
skipped_answer.innerHTML = `<b>Skipped answer : </b> ${skip_count}`



let table = document.getElementById("table");
// Q = ["how are you ?","how are you ?","how are you ?","how are you ?","how are you ?","how are you ?","how are you ?","how are you ?","how are you ?","how are you ?"]
let questions = localStorage.getItem("questions");
const question = questions.split(",")
var str1 = ""

for(let i=0;i<10;i++){
    str1 += `
    <tr>
    
    <td>${i+1}.</td>
    <td>${answer[i]}</td>
    <td>${correct[i]}</td>
    
    
    
    </tr>   `

}
table.innerHTML += str1 

// <tr>
// <td>2.</td>
// <td>${Q[1]}</td>
// <td>${localStorage.getItem("answer2")}</td>
// <td>${correct[1]}</td>

// </tr>

// <tr>
// <td>3.</td>
// <td>${Q[2]}</td>
// <td>${localStorage.getItem("answer3")}</td>
// <td>${correct[2]}</td>

// </tr>

// <tr>
// <td>4.</td>
// <td>${Q[3]}</td>
// <td>${localStorage.getItem("answer4")}</td>
// <td>${correct[3]}</td>

// </tr>

// <tr>
// <td>5.</td>
// <td>${Q[4]}</td>
// <td>${localStorage.getItem("answer5")}</td>
// <td>${correct[4]}</td>

// </tr>

// <tr>
// <td>6.</td>
// <td>${Q[5]}</td>
// <td>${localStorage.getItem("answer6")}</td>
// <td>${correct[5]}</td>

// </tr>

// <tr>
// <td>7.</td>
// <td>${Q[6]}</td>
// <td>${localStorage.getItem("answer7")}</td>
// <td>${correct[6]}</td>

// </tr>

// <tr>
// <td>8.</td>
// <td>${Q[7]}</td>
// <td>${localStorage.getItem("answer8")}</td>
// <td>${correct[7]}</td>

// </tr>

// <tr>
// <td>9.</td>
// <td>${Q[8]}</td>
// <td>${localStorage.getItem("answer9")}</td>
// <td>${correct[8]}</td>

// </tr>

// <tr>
// <td>10.</td>
// <td>${Q[9]}</td>
// <td>${localStorage.getItem("answer10")}</td>
// <td>${correct[9]}</td>

// </tr>
// `;
