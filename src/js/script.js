fitCanvasToContainer(document.getElementById("tagCanvas"));

var tagCanvasOptions = {
  noSelect: true,
  shuffleTags: true,
  wheelZoom: false,
  animTiming: "Linear",
  textColour: "#EFE5D2",
  textHeight: tagCanvasFontSize(),
  textFont: "Quicksand, sans-serif"
};

window.onload = function(){
  TagCanvas.Start("tagCanvas", "", tagCanvasOptions);
}

window.onresize = function(){
  TagCanvas.Delete("tagCanvas");
  tagCanvasOptions.textHeight = tagCanvasFontSize();
  fitCanvasToContainer(document.getElementById("tagCanvas"));
  TagCanvas.Start("tagCanvas", "", tagCanvasOptions);
}

function fitCanvasToContainer(canvas){
  var ctx = canvas.getContext('2d');
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  ctx.canvas.width = document.getElementById("canvascontainer").offsetWidth;
  ctx.canvas.height = document.getElementById("canvascontainer").offsetHeight;
}

function tagCanvasFontSize(){
  if(window.innerWidth < 768){
    return (window.innerWidth * window.innerHeight) / 14000;
  }else{
    return 30;
  }
}
