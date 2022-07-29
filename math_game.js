Player1_name=localStorage.getItem("name1");
Player2_name=localStorage.getItem("name2");

document.getElementById("player1_name").innerHTML=Player1_name.value;
document.getElementById("player2_name").innerHTML=Player2_name;


function Send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actual_answer=parseInt(number1) * parseInt(number2);

    question_number="<h4>"+number1+" X "+number2+"</h4>";
    input_box="<br>Answer: <input type='text' id='input_check'>"
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check<//button>";
    row=question_number+input_box+check_button;

    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}