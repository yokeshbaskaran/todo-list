const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask () {
    if(inputBox.value === '')
        alert("enter somethg....")
    else
    {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.append(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.append(span)
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function (e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask();


//to-dolist-2

// var listitems = document.getElementById("list-items");
// var uservalue = document.getElementById("uservalue");
// function add(){
//     var newli = document.createElement("li");
//     newli.innerHTML = uservalue.value + '<button onclick="deleteitem(event)">Delete</button>' ;
//     listitems.append(newli);
// }
// function deleteitem(event){
//     event.target.parentElement.remove();
// }








