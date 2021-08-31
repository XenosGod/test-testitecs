
import { canvas } from "./utils"
canvas.width = 300
canvas.height = 300

const ctx = canvas.getContext("2d")

const sun = new Image()
const moon = new Image()
const earth = new Image()

async function init() {
    sun.src = "https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations/canvas_sun.png"
    earth.src = "https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations/canvas_earth.png"
    moon.src = "https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations/canvas_moon.png"
    requestAnimationFrame(draw)
}

function draw() {
    // start
    ctx.globalCompositeOperation = 'destination-over';
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
  
    ctx.save();
    ctx.translate(150, 150);
  
    // Earth
    var time = new Date();
    ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
    ctx.translate(105, 0);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)'; // Shadow
    ctx.fillRect(0, -12, 40, 24); // Shadow
    ctx.drawImage(earth, -12, -12);
  
    // Moon
    ctx.save();
    ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
    ctx.translate(0, 28.5);
    ctx.drawImage(moon, -3.5, -3.5);
    ctx.restore();
  
    ctx.restore();
  
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)'; // Earth orbit
    ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
    ctx.stroke();
  
    ctx.drawImage(sun, 0, 0, canvas.width, canvas.height);
    // end 
    requestAnimationFrame(draw)
}

init()
