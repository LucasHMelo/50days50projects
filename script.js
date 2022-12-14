const prev = document.getElementById("prev");
const next = document.getElementById("next");

const progressBall = document.querySelectorAll(".progress-ball");
const progressLine = document.querySelectorAll(".progress-line");

let counter = 1;

next.addEventListener("click", () => {
  counter++;
  if (counter > progressBall.length) counter = progressBall.length;

  addActiveClasses();
});

prev.addEventListener("click", () => {
  if (counter < 1) counter = 1;


  removeActiveClasses();
});

function removeActiveClasses() {
    

  progressBall.forEach((progressBall, idx) => {
    if (idx > counter) {
        console.log(progressBall.classList)
        progressBall.classList.remove("active");
        console.log(progressBall.classList)

    }
  });
  progressLine.forEach((progressLine, idx) => {
    if (idx > counter) progressLine.classList.remove("active");
  });
}

function addActiveClasses() {
  progressBall.forEach((progressBall, idx) => {
    if (idx < counter) {
        console.log(progressBall.classList)
        progressBall.classList.add("active");
    }
  });
  progressLine.forEach((progressLine, idx)  => {
    if (idx < counter) progressLine.classList.add("active");
  });
}
