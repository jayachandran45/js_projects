// seleting dipaly field and input field
const displayEle = document.querySelector(".display-section");
const inputEle = document.querySelector("[input-field]");
const enterbtnEle = document.querySelector("[enter-btn]");

// code for click add task btn
enterbtnEle.addEventListener("click", createDisplayComponent);

// code for keyboard event

document.addEventListener("keydown", (e) => {
  console.log("key is pressed");
  if (e.key === "Enter") {
    createDisplayComponent();
  }
});

// Normal function declarations Created on bottom because do not mess with the functional js code (Note: It will hoisted )

function createDisplayComponent() {
  // Execute this only if input file has some value
  if (inputEle.value.trim()) {
    // creating all elements that we goning to append
    const rowEle = document.createElement("div");
    const checkboxEle = document.createElement("input");
    const pEle = document.createElement("p");
    const deleteBtnEle = document.createElement("button");

    // set attributes if the element has
    rowEle.setAttribute("class", "row");
    checkboxEle.setAttribute("type", "checkbox");

    // setting input value to pEle innertext
    pEle.innerText = inputEle.value;

    // setting innerText for delete btn
    deleteBtnEle.innerText = "Delete";

    // append to an nodeList element
    displayEle.appendChild(rowEle);
    rowEle.appendChild(checkboxEle);
    rowEle.appendChild(pEle);
    rowEle.appendChild(deleteBtnEle);

    // clearing the input field after all operation happend
    inputEle.value = null;
  }
  // code to make a functional delete btn
  const deleteBtnEle = document.querySelectorAll(".row > button");
  const rowEle = document.querySelectorAll(".row");
  function cbFunc(a, b, c) {
    a.addEventListener("click", () => {
      rowEle[b].remove();
    });
  }
  deleteBtnEle.forEach(cbFunc);
}
