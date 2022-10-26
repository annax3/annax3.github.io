var progressBars = document.querySelectorAll(".progress-parent > div");
var animationDone = false;
window.addEventListener("scroll", checkTarget);
initialise();
function initialise() {
  for (let i = 0; i < progressBars.length; i++) {
    console.log(i);
    progressBars[i].style.width = 0 + "%";
  }
}

function fillSkills() {
  for (let i = 0; i < progressBars.length; i++) {
    let maxValue = progressBars[i].getAttribute("data-maxValue");
    let counter = 0;
    let id = setInterval(function () {
      if (counter > maxValue) {
        clearInterval(id);
        return;
      }
      progressBars[i].style.width = counter + "%";
      counter++;
    }, 10);
  }
}
function checkTarget() {
  var skillId = document.getElementById("skills-names");
  var skillCord = skillId.getBoundingClientRect();

  if (!animationDone && skillCord.top <= window.innerHeight) {
    animationDone = true;
    fillSkills();
  } else if (skillCord.top > window.innerHeight) {
    animationDone = false;
  }
}
