/** @type {HTMLCanvasElement} */
var c = document.getElementById('myCanvas');
var c_WH = c.getBoundingClientRect();
var ca = c.getContext('2d');
const cw = c_WH.width;
const ch = c_WH.height;
ca.translate(cw / 2, ch / 2);
ca.scale(1, -1);
//-------------------------------------
ca.beginPath();
ca.ellipse(-300, 200, 100, 30, 0, 0, Math.PI * 2);
ca.stroke();

ca.beginPath();
ca.ellipse(-300, 193, 100, 30, 0, Math.PI, Math.PI * 2);
ca.stroke();

ca.beginPath();
ca.ellipse(-300, 172, 30, 9, 0, 0, Math.PI);//中小圆
ca.stroke();

ca.beginPath();
ca.ellipse(-300, 160, 37.5, 11.25, 0, Math.PI, Math.PI * 2);//下小圆
ca.stroke();

ca.beginPath();
ca.moveTo(-400, 200);
ca.lineTo(-400, 193);
ca.stroke();

ca.beginPath();
ca.moveTo(-200, 200);
ca.lineTo(-200, 193);
ca.stroke();

ca.beginPath();
ca.moveTo(-337.5, 160);
ca.lineTo(-337.5, 165);
ca.stroke();

ca.beginPath();
ca.moveTo(-262.5, 160);
ca.lineTo(-262.5, 165);
ca.stroke();
//-------------------------------------
ca.beginPath();
ca.ellipse(-100, 0, 100, 90, 0, Math.PI + 0.04 * Math.PI, Math.PI * 2 - 0.04 * Math.PI);
ca.stroke();

ca.beginPath();
ca.moveTo(-199, -14)
ca.bezierCurveTo(-210, 90, -150, 200, -100, 200);
ca.stroke();

ca.beginPath();
ca.moveTo(-1, -14)
ca.bezierCurveTo(10, 90, -50, 200, -100, 200);
ca.stroke();
//-------------------------------------
ca.beginPath();
ca.moveTo(150, 0);
ca.bezierCurveTo(140, 65, 55, 65, 50, -10);
ca.stroke();

ca.beginPath();
ca.moveTo(150, 0);
ca.bezierCurveTo(160, 65, 245, 65, 250, -10);
ca.stroke();

ca.beginPath();
ca.moveTo(150, -160);
ca.bezierCurveTo(190, -90, 250, -70, 250, -10);
ca.stroke();

ca.beginPath();
ca.moveTo(150, -160);
ca.bezierCurveTo(110, -90, 50, -70, 50, -10);
ca.stroke();
//-------------------------------------