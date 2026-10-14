const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

console.log(input, button, ul);

button.addEventListener("click", () => {
  console.log(input.value);
  if (input.value.trim()) {
    const newLi = document.createElement("li");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Supprimer";
    deleteBtn.addEventListener("click", () => {
      r;
    });
    newLi.innerText = input.value;
    newLi.appendChild(deleteBtn);
    ul.appendChild(newLi);
    input.value = "";
    input.focus();
  }
});
