var Player1_name="";
var Player2_name="";



function addPlayers(){
    player1_name=document.getElementById("name1").value;
    player2_name=document.getElementById("name2").value;
  
    localStorage.setItem(" name1",Player1_name);
    localStorage.setItem(" name2 ",Player2_name);
  
    window.location="math_game.html";
  }