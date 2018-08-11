import React, { Component } from 'react'

export default class Matrix extends Component {
    constructor(props) {
        super(props);
            this.state={
            speed: 35,
        }    

    }

    componentDidMount () {

        const c = document.getElementById("c");
        const ctx = c.getContext("2d");
        let speed = this.state.speed;

        c.height = window.innerHeight;
        c.width = window.innerWidth;
    
        let matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
        matrix = matrix.split("");
    
        const font_size = 10;
        const columns = c.width/font_size; //number of columns for the rain
        //an array of drops - one per column
        let drops = [];
        //x below is the x coordinate
        //1 = y co-ordinate of the drop(same for every drop initially)
        for(let x = 0; x < columns; x++)
            drops[x] = 1; 
    
        function draw()
        {

            //Black BG for the canvas
            //translucent BG to show trail
            ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
            ctx.fillRect(0, 0, c.width, c.height);
    
            ctx.fillStyle = "#0F0" ; //green text
            ctx.font = font_size + "px arial";
            //looping over drops
            for(let i = 0; i < drops.length; i++)
            {
                const text = matrix[Math.floor(Math.random()*matrix.length)];
                //x = i*font_size, y = value of drops[i]*font_size
                ctx.fillText(text, i*font_size, drops[i]*font_size);
    
                //sending the drop back to the top randomly after it has crossed the screen
                //adding a randomness to the reset to make the drops scattered on the Y axis
                if(drops[i]*font_size > c.height && Math.random() > 0.975)
                    drops[i] = 0;
    
                //incrementing Y coordinate
                drops[i]++;
            }
        }
        setInterval(draw, speed);
      }

    render() {

        return (
        <div>
            <header style={{color: "#0F0", textAlign: 'center'}} > WELCOME TO THE MATRIX </header>
            <canvas id="c"></canvas>
        </div>
        )
    }
}
