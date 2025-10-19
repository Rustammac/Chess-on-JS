let layerCount = 5;
let starCount = 500;
let maxTime = 30;
let universe = document.getElementById("universe");
let w = window;
let d = document;
let e = d.documentElement;
let g = d.getElementsByTagName("body")[0];
let width = w.innerWidth || e.clientWidth || g.clientWidth;
let height = w.innerHeight || e.clientHeight || g.clientHeight;
for (let i = 0; i < starCount; ++i) {
  let ypos = Math.round(Math.random() * height);
  let star = document.createElement("div");
  let speed = 1000 * (Math.random() * maxTime + 1);
  star.setAttribute("class", "star" + (3 - Math.floor(speed / 1000 / 8)));
  star.style.backgroundColor = "white";

  universe.appendChild(star);
  star.animate(
    [
      {
        transform: "translate3d(" + width + "px, " + ypos + "px, 0)",
      },
      {
        transform:
          "translate3d(-" + Math.random() * 256 + "px, " + ypos + "px, 0)",
      },
    ],
    {
      delay: Math.random() * -speed,
      duration: speed,
      iterations: 1000,
    }
  );
}

let elem = document.querySelector(".pulse");
let animation = elem.animate(
  {
    opacity: [0.5, 1],
    transform: ["scale(0.5)", "scale(1)"],
  },
  {
    direction: "alternate",
    duration: 500,
    iterations: Infinity,
  }
);
