window.sr = ScrollReveal();
sr.reveal('.my-background .dis-tcell h1', { duration: 1500, origin: 'bottom', scale: 1, easing: 'ease'});
sr.reveal('.my-testimonial .dis-tcell h1', { duration: 1500 });
sr.reveal('.my-testimonial .dis-tcell .grid-item', { duration: 1500 }, 200);
sr.reveal('.skillcopy', { scale: 1, duration: 1500, distance: '5em'});
sr.reveal('.canvascontainer', { scale: 1, duration: 1500, distance: '5em'});
sr.reveal('.my-works .dis-tcell h1', { duration: 1500 });
sr.reveal('.my-works .dis-tcell .workitem', { duration: 1600, scale: 1 }, 200);

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
