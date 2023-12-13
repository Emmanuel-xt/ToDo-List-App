// document.addEventListener("click", () => {

//     console.log(event.target)

// })

let wow = document.getElementById("wow");
text = "Hello, Plan your day with My ToDo list website \n  Credit:Emmanuel"
let i = 0;
let  auto = () => {
if(i > text.length - 1) return;
  wow.innerHTML += text[i];
  i ++
}

window.addEventListener("click", () => {
  // alert("hi")
  setInterval(auto, 50);
  
})


let add = document.getElementById("add");
let output = document.getElementById("output");

add.addEventListener("click", (event) => {
  let todo = document.getElementById("todo");
  if (todo.value.length !== 0) {
    let output = document.getElementById("output");
    let listItem = document.createElement("div");
    listItem.classList.add("displayer");
    listItem.innerHTML = `
      <li class="check">
        ${document.getElementById("todo").value}
        <button class="del">
          <i class="fa-solid fa-trash-can"></i>
        </button>
        <input type="checkbox" class="radio">
      </li>
    `;
    output.appendChild(listItem);

    let tasks = document.querySelectorAll(".del");
 
    tasks.forEach((task) => {
      task.addEventListener("click", function () {
        this.parentElement.parentElement.remove();
      });
    });

    let radios = document.querySelectorAll(".radio");
    radios.forEach((radio) => {
      radio.addEventListener("change", function () {
        this.parentElement.classList.toggle("checked");
      });
    });
  } else {
    alert("Input a value");
  }
  document.getElementById("todo").value = "";
});

// function save() {
//   localStorage.setItem("data", div.innerHTML);
// }
// function show() {
//   div.innerHTML.innerHTML = localStorage.getItem("data");
// }
// show();
