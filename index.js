const container = document.querySelector(".container");
container.setAttribute("class", "container");

const sketch = document.createElement("div");
sketch.setAttribute("class", "sketch");

const input = prompt("Input number between 1-100");
const total = input * input;
const sketchSize = 960 / input;
for (let i = 1; i <= total; i++) {
  const sketch = document.createElement("div");
  sketch.setAttribute("class", "sketch");

  sketch.style.width = `${sketchSize}px`;
  sketch.style.height = `${sketchSize}px`;

  sketch.addEventListener("mouseenter", () => {
    sketch.classList.add("hovered");
  });
  container.appendChild(sketch);
}
