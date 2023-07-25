const canvas = document.getElementById("Canvas");
const ctx = canvas.getContext("2d");

const HEIGHT = 500,
  WIDTH = 500,
  XCENTER = WIDTH / 2,
  YCENTER = HEIGHT / 2;

let deg = 0;
setInterval(frame, 1000/60);

function frame() {
  if (deg == 360) {
    deg = 0;
  } else {
    deg+=5;
    canvas.style.rotate = `${deg}deg`;
  }
}

ctx.lineWidth = 3;

//BLADE CIRCLE 1
ctx.beginPath();
ctx.arc(
  XCENTER,
  YCENTER,
  152.5,
  (256 * Math.PI) / 180,
  (276.7 * Math.PI) / 180
);
ctx.stroke();
ctx.closePath();

//BLADE CIRCLE 2
ctx.beginPath();
ctx.arc(
  XCENTER + (140 - 152.5),
  YCENTER + (160 - 152.5),
  117 / 2,
  (242 / 180) * Math.PI,
  (271 / 180) * Math.PI
);
ctx.stroke();
ctx.closePath();

//BLADE CIRCLE 3
ctx.beginPath();
ctx.arc(
  XCENTER + (104 - 152.5),
  YCENTER + (62 - 152.5),
  117 / 2,
  (280 / 180) * Math.PI,
  (293 / 180) * Math.PI
);
ctx.stroke();
ctx.closePath();

//BLADE CIRCLE 4
ctx.beginPath();
ctx.arc(
  XCENTER + (158 - 152.5),
  YCENTER + (145 - 152.5),
  117 / 2,
  (220 / 180) * Math.PI,
  (238 / 180) * Math.PI
);
ctx.stroke();
ctx.closePath();

//BLADE LINE 1
ctx.beginPath();
ctx.moveTo(XCENTER + (169.5 - 152.5), YCENTER + (121 - 152.5));
ctx.lineTo(XCENTER + (169.5 - 152.5), YCENTER + (2 - 152.5));
ctx.stroke();

//BLADE LINE 2
ctx.moveTo(XCENTER + (141 - 152.5), YCENTER + (119 - 152.5));
ctx.lineTo(XCENTER + (141 - 152.5), YCENTER + (101 - 152.5));
ctx.stroke();
ctx.closePath();

//BLADE LINE 3
ctx.beginPath();
ctx.moveTo(XCENTER + (127 - 152.5), YCENTER + (96 - 152.5));
ctx.lineTo(XCENTER + (127 - 152.5), YCENTER + (8 - 152.5));
ctx.stroke();
ctx.closePath();

//OUTER HANDLE CIRCLE 1
ctx.beginPath();
ctx.arc(
  XCENTER,
  YCENTER,
  36,
  ((223 - 180) / 180) * Math.PI,
  ((137 - 180) / 180) * Math.PI
);
ctx.stroke();
ctx.closePath();

//OUTER HANDLE CIRCLE 2
ctx.beginPath();
ctx.arc(
  XCENTER,
  YCENTER,
  33,
  ((137 - 180) / 180) * Math.PI,
  ((223 - 180) / 180) * Math.PI
);
ctx.stroke();
ctx.closePath();

//INNER HANDLE CIRCLE
ctx.beginPath();
ctx.arc(XCENTER, YCENTER, 23.5, 0, 2 * Math.PI);
ctx.stroke();
ctx.closePath();

//HANDLE LINE 1
ctx.beginPath();
ctx.moveTo(XCENTER + (147.5 - 152.5), YCENTER + (175 - 152.5));
ctx.lineTo(XCENTER + (147.5 - 152.5), YCENTER + (129 - 152.5));
ctx.stroke();

//HANDLE LINE 2
ctx.moveTo(XCENTER + (158 - 152.5), YCENTER + (175 - 152.5));
ctx.lineTo(XCENTER + (157 - 152.5), YCENTER + (129 - 152.5));
ctx.stroke();
ctx.closePath();

//HANDLE lINE 3
ctx.beginPath();
ctx.moveTo(XCENTER - (127 - 152.5), YCENTER - (127 - 152.5));
ctx.lineTo(XCENTER - (135 - 152.5), YCENTER - (135 - 152.5));
ctx.stroke();

//HANDLE LINE 4
ctx.moveTo(XCENTER - (127 - 152.5), YCENTER - (177 - 152.5));
ctx.lineTo(XCENTER - (135 - 152.5), YCENTER - (169 - 152.5));
ctx.stroke();
ctx.closePath();

//BLADE CIRCLE 1
ctx.beginPath();
ctx.arc(
  XCENTER,
  YCENTER,
  152.5,
  ((256 - 180) * Math.PI) / 180,
  ((276.7 - 180) * Math.PI) / 180
);
ctx.stroke();
ctx.closePath();

//BLADE CIRCLE 2
ctx.beginPath();
ctx.arc(
  XCENTER - (140 - 152.5),
  YCENTER - (160 - 152.5),
  117 / 2,
  ((242 - 180) / 180) * Math.PI,
  ((271 - 180) / 180) * Math.PI
);
ctx.stroke();
ctx.closePath();

//BLADE CIRCLE 3
ctx.beginPath();
ctx.arc(
  XCENTER - (104 - 152.5),
  YCENTER - (62 - 152.5),
  117 / 2,
  ((280 - 180) / 180) * Math.PI,
  ((293 - 180) / 180) * Math.PI
);
ctx.stroke();
ctx.closePath();

//BLADE CIRCLE 4
ctx.beginPath();
ctx.arc(
  XCENTER - (158 - 152.5),
  YCENTER - (145 - 152.5),
  117 / 2,
  ((220 - 180) / 180) * Math.PI,
  ((238 - 180) / 180) * Math.PI
);
ctx.stroke();
ctx.closePath();

//BLADE LINE 1
ctx.beginPath();
ctx.moveTo(XCENTER - (169.5 - 152.5), YCENTER - (121 - 152.5));
ctx.lineTo(XCENTER - (169.5 - 152.5), YCENTER - (2 - 152.5));
ctx.stroke();

//BLADE LINE 2
ctx.moveTo(XCENTER - (141 - 152.5), YCENTER - (119 - 152.5));
ctx.lineTo(XCENTER - (141 - 152.5), YCENTER - (101 - 152.5));
ctx.stroke();
ctx.closePath();

//BLADE LINE 3
ctx.beginPath();
ctx.moveTo(XCENTER - (127 - 152.5), YCENTER - (96 - 152.5));
ctx.lineTo(XCENTER - (127 - 152.5), YCENTER - (8 - 152.5));
ctx.stroke();
ctx.closePath();
