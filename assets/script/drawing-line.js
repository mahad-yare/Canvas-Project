
class DrawingLine extends PaintFunction {
    constructor(contextReal) {
        super();
        this.context = contextReal;
    }



    onMouseDown(coord, event) {
        this.context.strokeStyle = "black";
        this.context.lineJoin = "round";
        this.context.lineWidth = 5;
        this.context.beginPath();
        this.context.moveTo(coord[0], coord[1]);
        this.draw(coord[0], coord[1]);

    }



    onDragging(coord, event) {
        this.draw(coord[0], coord[1]);

    }

    onMouseMove() { }
    onMouseUp() {
    }
    onMouseLeave() { }
    onMouseEnter() { }

    draw(x, y) {
        this.context.lineTo(x, y);
        this.context.moveTo(x, y);
        this.context.closePath();
        this.context.stroke();
    }
}

// var canvasWidth = 180;
// var canvasHeight = 160;
// var canvas = null;
// var bounds = null;
// var ctx = null;
// var hasLoaded = false;

// var startX = 0;
// var startY = 0;
// var mouseX = 0;
// var mouseY = 0;
// var isDrawing = false;
// var existingLines = [];

// function draw() {
//     ctx.fillStyle = "#333333";
//     ctx.fillRect(0, 0, canvasWidth, canvasHeight);

//     ctx.strokeStyle = "black";
//     ctx.lineWidth = 2;
//     ctx.beginPath();

//     for (var i = 0; i < existingLines.length; ++i) {
//         var line = existingLines[i];
//         ctx.moveTo(line.startX, line.startY);
//         ctx.lineTo(line.endX, line.endY);
//     }

//     ctx.stroke();

//     if (isDrawing) {
//         ctx.strokeStyle = "darkred";
//         ctx.lineWidth = 3;
//         ctx.beginPath();
//         ctx.moveTo(startX, startY);
//         ctx.lineTo(mouseX, mouseY);
//         ctx.stroke();
//     }
// }

// function onmousedown(e) {
//     if (hasLoaded && e.button === 0) {
//         if (!isDrawing) {
//             startX = e.clientX - bounds.left;
//             startY = e.clientY - bounds.top;

//             isDrawing = true;
//         }

//         draw();
//     }
// }

// function onmouseup(e) {
//     if (hasLoaded && e.button === 0) {
//         if (isDrawing) {
//             existingLines.push({
//                 startX: startX,
//                 startY: startY,
//                 endX: mouseX,
//                 endY: mouseY
//             });

//             isDrawing = false;
//         }

//         draw();
//     }
// }

// function onmousemove(e) {
//     if (hasLoaded) {
//         mouseX = e.clientX - bounds.left;
//         mouseY = e.clientY - bounds.top;

//         if (isDrawing) {
//             draw();
//         }
//     }
// }

// window.onload = function () {
//     canvas = document.getElementById("canvas");
//     canvas.width = canvasWidth;
//     canvas.height = canvasHeight;
//     canvas.onmousedown = onmousedown;
//     canvas.onmouseup = onmouseup;
//     canvas.onmousemove = onmousemove;

//     bounds = canvas.getBoundingClientRect();
//     ctx = canvas.getContext("2d");
//     hasLoaded = true;

//     draw();
// }