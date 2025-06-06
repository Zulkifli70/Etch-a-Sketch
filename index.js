const container = document.querySelector(".container");
container.setAttribute("class", "container");

const sketch = document.createElement("div");
sketch.setAttribute("class", "sketch");
const total = 30;
container.appendChild(sketch);

for (let i = 1; i <= total; i++) {
  const clone = sketch.cloneNode(true);
  clone.id = "sketch-" + i;
  container.appendChild(clone);
}
