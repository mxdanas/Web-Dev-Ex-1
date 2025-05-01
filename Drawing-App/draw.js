const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
const shapeSelector = document.getElementById('shapeSelector');
const fillColor = document.getElementById('fillColor');

let isDrawing = false;
let startX = 0;
let startY = 0;
let snapshot;

function takeSnapshot() {
  snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
}

function restoreSnapshot() {
  ctx.putImageData(snapshot, 0, 0);
}

canvas.addEventListener('mousedown', (e) => {
  startX = e.offsetX;
  startY = e.offsetY;
  isDrawing = true;
  takeSnapshot();
});

canvas.addEventListener('mousemove', (e) => {
  if (!isDrawing) return;
  restoreSnapshot();
  const shape = shapeSelector.value;
  drawShape(startX, startY, e.offsetX, e.offsetY, shape);
});

canvas.addEventListener('mouseup', (e) => {
  if (!isDrawing) return;
  isDrawing = false;
  const shape = shapeSelector.value;
  drawShape(startX, startY, e.offsetX, e.offsetY, shape);
});

function drawShape(x1, y1, x2, y2, shape) {
  ctx.beginPath();
  ctx.fillStyle = fillColor.value;
  if (shape === 'line') {
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
  } else if (shape === 'rectangle') {
    ctx.fillRect(x1, y1, x2 - x1, y2 - y1);
    
  } else if (shape === 'circle') {
    const radius = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);
    ctx.arc(x1, y1, radius, 0, 2 * Math.PI);
    ctx.fill();  
  }
  ctx.stroke();
}
