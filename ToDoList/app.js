const stickyNote1 = document.getElementById("toDoInput1")
const stickyNote2 = document.getElementById("toDoInput2")
const stickyNote3 = document.getElementById("toDoInput3")
const stickyNote4 = document.getElementById("toDoInput4")
const ul1 = document.getElementById("ul1")
const ul2 = document.getElementById("ul2")
const ul3 = document.getElementById("ul3")
const ul4 = document.getElementById("ul3")
const li = document.createElement("li");


let taskList1 = []
let tasklist2 = []
let tasklist3 = []
let tasklist4 = []


stickyNote1.addEventListener("keypress", addItem1)

function addItem1(e) {
  let task = stickyNote1.value
  if (e.keyCode == 13) {
    if (taskList1.length <= 6) {
      taskList1.push(task)
      let text = document.createTextNode(task)
      li.appendChild(text)
      ul1.appendChild(li)
    }
  }


}
