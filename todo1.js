var x='hello to do list'
var toDoBody=document.getElementsByTagName("body")[0];
toDoBody.innerHTML="<div>   <h1>//TO_DO List//</h1>    <div id='body'><div id='left'>left side  </div><div id='right'> right side</div></div>    <footer>footer text</footer>    </div>";
//need to add a left side and right side za da se zapamtat nekoi funkcii
//prvo ce napravime left side za all tasks
function leftSide(){ 
    var AllItems = document.getElementById('left');
    AllItems.innerHTML="<button class='nav_button'>TO DO</button></br>";
    AllItems.innerHTML+="<button class='nav_button'>Projects</button></br>";
    AllItems.innerHTML+="<button class='nav_button'>Notes</button></br>";
}
leftSide();
function addText(){
    console.log(toDoBody)
    
}