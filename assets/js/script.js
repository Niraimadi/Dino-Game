const UP_KEY_CODE = 38;
const DOWN_KEY_CODE = 40;

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function bindRunner() {
  $(document).keydown(function (e) {
    let runner = $("#runner");
    let currentTop = runner.position().top;
    if (e.keyCode == UP_KEY_CODE) {
      if (currentTop >= 0) {
        runner.css("top", currentTop - 100);
      }
    } else if (e.keyCode == DOWN_KEY_CODE) {
      if (currentTop <= 400) {
        runner.css("top", currentTop + 100);
      }
    }
    
  });
}

function setRunnerPosition() {
  let runner = $("#runner");
  runner.css("top", getRndInteger(100,500))
}


function setObstaclePosition(ID) {
    let runner = $(ID);

    var initialPos1 = getRndInteger(0, 500);

    runner.css("top", getRndInteger(50, 500));
    runner.css("right", -initialPos1);

    var pos1 = initialPos1
    
    start1 = true;

    let interval = setInterval(function () {
    
        console.log(pos1);
        pos1 = pos1 + 10;
         runner.css("right", pos1);
    
         if(pos1 > 1000){
             pos1 = initialPos1
         }


    }, 50);

}

function setObstacles() {
  setObstaclePosition("#obstacle1");
  setObstaclePosition("#obstacle2");
  setObstaclePosition("#obstacle3");
  setObstaclePosition("#obstacle4");
}

function initialize() {
  setRunnerPosition();
  bindRunner();
}



$(window).on("load", function () {
  initialize();
  setObstacles()
});
