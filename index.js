const input = document.querySelector(".input");
const button = document.querySelector(".button");

const container = document.querySelector(".container");
container.setAttribute("class", "container");

function createGrid(size) {
  container.innerHTML = "";
  const sketchSize = 480 / size;
  for (let i = 1; i <= size * size; i++) {
    const sketch = document.createElement("div");
    sketch.setAttribute("class", "sketch");

    sketch.style.width = `${sketchSize}px`;
    sketch.style.height = `${sketchSize}px`;

    sketch.addEventListener("mouseenter", () => {
      sketch.classList.add("hovered");
    });
    container.appendChild(sketch);
  }
}

function createNewGrid() {
  const UserInput = input.value;

  if (UserInput === null) {
    return alert("Please fill with a number");
  }

  const size = parseInt(UserInput);

  if (isNaN(size)) {
    alert("Please input a correct number");
    return;
  }

  if (size < 1 || size > 100) {
    alert("number must between 1-100");
    return;
  }

  createGrid(size);
}

button.addEventListener("click", createNewGrid);

createGrid(16);
