class DrawingCircle extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }



    onMouseDown(coord, event) {
        this.contextReal.fillStyle = "blue";
        contextReal.setLineDash([]);
        contextDraft.setLineDash([]);
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord, event) {
        this.contextDraft.fillStyle = "blue";
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.fillRect(this.origX, this.origY, coord[0] - this.origX, coord[1] - this.origY)

        this.checkAndDraw(this.origX, this.origY, coord[0], coord[1], this.contextDraft);
    }

    onMouseMove() { }
    onMouseUp(coord) {
        // this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        // this.contextReal.fillRect(this.origX, this.origY, coord[0] - this.origX, coord[1] - this.origY)

        // this.checkAndDraw(this.origX, this.origY, coord[0], coord[1], this.contextReal);
    }
    onMouseLeave() { }
    onMouseEnter() { }
}




drawCircle(x1, y1, x2, y2, context) {
    context.beginPath();
    context.arc(x1, y1, Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2), 0, 2 * Math.PI);
    context.stroke();
    context.fill();
}

drawEllipse(x1, y1, x2, y2, context) {
    context.beginPath();
    context.ellipse(x1, y1, Math.abs(x2 - x1), Math.abs(y2 - y1), 0, 0, 2 * Math.PI);
    context.stroke();
    context.fill();
}
}



