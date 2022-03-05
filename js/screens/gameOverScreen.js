var gameOverScreen = {
    box: {
        x: 0,
        y: 0,
    },
    draw: function () {
        canvasContext.fillStyle = 'black';
        canvasContext.fillRect(0, 0, canvas.width, canvas.height);
        canvasContext.fillStyle = 'white';
        canvasContext.fillRect(this.box.x, this.box.y, 10, 10);
        gameFont.drawText("GAME OVER", { x: 10, y: 10 }, 0, 0);
    },
    update: function () {
        this.box.x = canvas.width/2 - 5;
        this.box.y = canvas.height/2 - 5;
        this.box.x += Math.sin(ticker/10) * 50;
        this.box.y += Math.cos(ticker/10) * 50;
    }
}