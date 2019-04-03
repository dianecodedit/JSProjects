const stickyNote1 = document.getElementById("toDoInput1")
const stickyNote2 = document.getElementById("toDoInput2")
const stickyNote3 = document.getElementById("toDoInput3")
const stickyNote4 = document.getElementById("toDoInput4")
const ul1 = document.getElementById("ul1")
const ul2 = document.getElementById("ul2")
const ul3 = document.getElementById("ul3")
const ul4 = document.getElementById("ul4")



let taskList1 = []
let taskList2 = []
let taskList3 = []
let taskList4 = []


stickyNote1.addEventListener("keypress", addItem1)
stickyNote2.addEventListener("keypress", addItem2)
stickyNote3.addEventListener("keypress", addItem3)
stickyNote4.addEventListener("keypress", addItem4)

function addItem1(e) {
  if (e.keyCode == 13) {
      let task = stickyNote1.value
    if (task.trim().length === 0){
      return false
    }

    if (taskList1.length < 5) {

      taskList1.push(task)
      let li = document.createElement("li");
      let text = document.createTextNode(task)
      li.appendChild(text)

      let checkMarkButton = document.createElement("button")
      checkMarkButton.innerHTML = "&check;"
      checkMarkButton.className="listitembutton"
      checkMarkButton.setAttribute("onclick", "checkMe(this)")
      li.appendChild(checkMarkButton);

      let crossMarkButton = document.createElement("button")
      crossMarkButton.innerHTML = "&#x2715;"
      crossMarkButton.className="listitembutton"
      crossMarkButton.setAttribute("onclick", "removeMe(this)")
      li.appendChild(crossMarkButton);


      ul1.appendChild(li)
      stickyNote1.value=""

    }
  }
}

function addItem2(e) {
  if (e.keyCode == 13) {
    let task = stickyNote2.value
    if (task.trim().length === 0){
      return false
    }else if (taskList2.length < 5) {
      taskList2.push(task)
      let li = document.createElement("li");
      let text = document.createTextNode(task)
      li.appendChild(text)

      let checkMarkButton = document.createElement("button")
      checkMarkButton.innerHTML = "&check;"
      checkMarkButton.className="listitembutton"
      checkMarkButton.setAttribute("onclick", "checkMe(this)")
      li.appendChild(checkMarkButton);

      let crossMarkButton = document.createElement("button")
      crossMarkButton.innerHTML = "&#x2715;"
      crossMarkButton.className="listitembutton"
      crossMarkButton.setAttribute("onclick", "removeMe(this)")
      li.appendChild(crossMarkButton);


      ul2.appendChild(li)
      stickyNote2.value=""
    }
  }
}
function addItem3(e) {
  if (e.keyCode == 13) {
    let task = stickyNote3.value
    if (task.trim().length === 0){
      return false
    }

    if (taskList3.length < 5) {
      taskList3.push(task)
      let li = document.createElement("li");
      let text = document.createTextNode(task)
      li.appendChild(text)

      let checkMarkButton = document.createElement("button")
      checkMarkButton.innerHTML = "&check;"
      checkMarkButton.className="listitembutton"
      checkMarkButton.setAttribute("onclick", "checkMe(this)")
      li.appendChild(checkMarkButton);

      let crossMarkButton = document.createElement("button")
      crossMarkButton.innerHTML = "&#x2715;"
      crossMarkButton.className="listitembutton"
      crossMarkButton.setAttribute("onclick", "removeMe(this)")
      li.appendChild(crossMarkButton);


      ul3.appendChild(li)
      stickyNote3.value=""

    }
  }
}
function addItem4(e) {
  if (e.keyCode == 13) {
    let task = stickyNote4.value
    if (task.trim().length === 0){
      return false
    }

    if (taskList4.length < 5) {
      taskList4.push(task)
      let li = document.createElement("li");
      let text = document.createTextNode(task)
      li.appendChild(text)

      let checkMarkButton = document.createElement("button")
      checkMarkButton.innerHTML = "&check;"
      checkMarkButton.className="listitembutton"
      checkMarkButton.setAttribute("onclick", "checkMe(this)")
      li.appendChild(checkMarkButton);

      let crossMarkButton = document.createElement("button")
      crossMarkButton.innerHTML = "&#x2715;"
      crossMarkButton.className="listitembutton"
      crossMarkButton.setAttribute("onclick", "removeMe(this)")
      li.appendChild(crossMarkButton);


      ul4.appendChild(li)
      stickyNote4.value=""

    }
  }
}
