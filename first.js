const Question = ["Q.1) What is a capital of India ?","Q.2) Where is Rajgad fort located ?","Q.3) Which animal is known as the 'Ship of the Desert?","Q.4) How many days are there in a week?","Q.5) How many letters are there in the English alphabet?","Q.6) How many hours are there in a day?","Q.7) How many seconds make one hour?","Q.8) Baby frog is known as.......","Q.9) Name the National river of India?","Q.10) Name the biggest continent in the world?","Q.10) Name the biggest continent in the world?"]
const options = [["Chennai","Nanded","Mumbai","New Delhi"],["Pune","Nanded","Mumbai","New Delhi"],["Camel","Hippo","Lion","Tiger"],["4","7","8","9"],["24","13","26","32"],["26","23","24","25"],["4200","3600","1200","2400"],["Tadpole","cacoon","sheep","fish"],["Amazon","Godavari","Ganga","Yamuna"],["Antartica","Africa","Europe","Asia"],["Antartica","Africa","Europe","Asia"],["Antartica","Africa","Europe","Asia"],["Antartica","Africa","Europe","Asia"]]

var answer = []
var distinct = 0
function submit() {
    var ele = document.getElementsByName('question1');
    var count = 0;
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            answer.push(ele[i].value);
            distinct += 1;
        }
        else {
            count += 1;
        }
    }
    if (count == ele.length) {
        alert("please select a value before clicking on submit");
    }

    document.getElementById("question").innerText = Question[distinct];
    document.getElementById("option1").innerText = options[distinct][0];
    document.getElementById("option2").innerText = options[distinct][1];
    document.getElementById("option3").innerText = options[distinct][2];
    document.getElementById("option4").innerText = options[distinct][3];

    if(distinct == 10){
        
        localStorage.setItem("selected_answers",answer);
        localStorage.setItem("questions",Question);

        window.location.href = "result.html";

    }
    

}
function skip() {

    distinct += 1;
    document.getElementById("question").innerText = Question[distinct];
    document.getElementById("option1").innerText = options[distinct][0];
    document.getElementById("option2").innerText = options[distinct][1];
    document.getElementById("option3").innerText = options[distinct][2];
    document.getElementById("option4").innerText = options[distinct][3];
    answer.push("Skipped")
    if(distinct == 10){
        
        localStorage.setItem("selected_answers",answer);
        localStorage.setItem("questions",Question);
        window.location.href = "result.html";

    }

}


function logout(){
    var result = confirm("do you really want to log out ");
    if(result == true){
    window.location.href = "index.html";}

}
