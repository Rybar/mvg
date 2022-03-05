var titleScreen = {

    box: {
        x: 0,
        y: 0,
    },

    draw: function () {

        //fill background
        canvasContext.fillStyle = 'black';
        canvasContext.fillRect(0, 0, canvas.width, canvas.height);

        //fun polygon background
        canvasContext.save();
        for(let i = 0; i < 20; i++){
            canvasContext.strokeStyle = `
            rgb(
                ${Math.floor(255*Math.sin(ticker/300*i))},
                ${Math.floor(255*Math.cos(ticker/100*i/20))},
                ${Math.floor(255*Math.sin(ticker/60))})`;
                polygon()

            polygon(canvas.width/2, canvas.height/2, 10*i, 7, false, ticker/100*i/2);
        }
        
        //title text
        canvasContext.fillStyle = 'white';
        canvasContext.fillRect(this.box.x, this.box.y, 10, 10);
        gameFont.drawText("A HomeTeam Gamedev JS Game", { x: 10, y: 10 }, 0, 0);
        gameFont.drawText("Press Enter to Start", { x: 10, y: 30 }, 0, 0);
        tinyFont.drawText(`BOX X: ${this.box.x}`, { x: 10, y: 160 }, 0, 0);
        tinyFont.drawText(`BOX Y: ${this.box.y}`, { x: 10, y: 170 }, 0, 0);

    },

    update: function () {

        if(Key.isDown(Key.KEY_ENTER)) { signal.dispatch('startGame'); }

        this.box.x = canvas.width/2 - 5;
        this.box.y = canvas.height/2 - 5;
        this.box.x += Math.sin(ticker/10) * 100;
        this.box.y += Math.cos(ticker/10) * 100;
        
    }
}


