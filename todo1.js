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
    document.getElementById('right').innerHTML='<h2>Inbox</h2><button onclick="addTask()"><div>Add task</div></button>';
}
leftSide();
function addText(){
    console.log(toDoBody)
    
}
function addTask(){
    var task=document.getElementById('right');
    var newTask=document.createElement('button')
    var name=prompt('enter the task name');
    newTask.innerHTML="<div>"+name+"</div>";
    
    task.append(newTask);
    console.log(task);
}