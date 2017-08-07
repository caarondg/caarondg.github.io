fitCanvasToContainer(document.getElementById("tagCanvas"));

var tagCanvasOptions = {
  noSelect: true,
  shuffleTags: true,
  wheelZoom: false,
  animTiming: "Linear",
  textColour: "#EFE5D2",
  textHeight: 26,
  textFont: "Quicksand, sans-serif",
  weight: true
};

window.onload = function(){
  TagCanvas.Start("tagCanvas", "", tagCanvasOptions);
}

function fitCanvasToContainer(canvas){
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
