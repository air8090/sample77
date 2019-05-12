let inputElement = document.getElementById("input-todo")
let ls = window.localStorage
const container = document.getElementById("cards-container")

let addMemo = function() {

  if(!inputElement.value) return false;

  let list = getList()
  list.push(inputElement.value)
  setList(list)
  updateView()
}

let deleteTodo = function(key) {
  let list = getList()
  list.splice(key, 1)
  setList(list)
  updateView()
}
const getList = ()=>{
  const list = localStorage["list"] || "[]"
  return JSON.parse(list)
}

const setList = (list)=>{
  const json = JSON.stringify(list)
  localStorage["list"] = json
}

const updateView = () => {
  container.textContent = ""
  const list = getList()
  list.forEach((text,index) => {
    container.insertAdjacentHTML("beforeend",
    `<div class="card">
     <div class="todo">${text}</div>
     <div class="delete" onclick="deleteTodo(${index})"></div>
    </div>`
     )
  })
}

window.onload = function() {
  updateView()
  document.getElementById("add-button").addEventListener("click", addMemo)
}
