var homescore = 0
var visitorscore = 0
var period = 0
let penalty1
let penalty2
function addhomescore(){
    homescore = homescore + 1
    document.querySelector(".home-score").innerHTML = homescore
   }
function deducthomescore(){ if(homescore > 0)
    {homescore = homescore- 1}
    document.querySelector(".home-score").innerHTML = homescore
   }
   function addvisitorscore(){
    visitorscore = visitorscore + 1
    document.querySelector(".guest-score").innerHTML = visitorscore
   }
function deductvisitorscore(){if(visitorscore > 0)
    {visitorscore = visitorscore - 1}
    document.querySelector(".guest-score").innerHTML = visitorscore
   }
function addhomepenalty(){
    penalty1 = prompt("Who is going to jail?")
    document.querySelector(".player-1").innerHTML = penalty1
}
function deletehomepenalty(){
    document.querySelector(".player-1").innerHTML = ""
}
function addvisitorpenalty(){
    penalty2 = prompt("Who is going to jail?")
    document.querySelector(".player-2").innerHTML = penalty2
}
function deletevisitorpenalty(){
    document.querySelector(".player-2").innerHTML = ""
}
function addperiod(){if(period < 3)
    {period = period + 1}
    document.querySelector(".period-block").innerHTML = period
}
function deductperiod(){if(period > 1)
    {period = period - 1}
    document.querySelector(".period-block").innerHTML = period
}
