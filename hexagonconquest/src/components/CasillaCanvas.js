import React, { useEffect } from 'react'

import {useRef} from 'react'


//Dimensiones del elemento canvas
const width = window.innerWidth, height = 2*window.innerHeight/3
const xCenter = width/2, yCenter = height/2
const anguloHex = Math.PI/3

//conjunto de fichas
let conjuntoFichas = []
const conjuntoValores = ["madera", "desierto", "piedra", "arcilla", "trigo", "oveja"]
let animacionFichas = 0;
//Configuracion de propiedades del tablero
const tablero = {
    color1: "lightblue",
    color2: "blue"
}

//Configuracion de propiedades de las fichas
const fichas = {
    radio: height/11,
    offset: Math.PI/6
}

// Referencia a las posiciones de cada ficha.
const posiciones = [
    {x:1, y:0},{x:2, y:0},{x:3, y:0},
{x:0, y:1}, {x:1, y:1}, {x:2, y:1}, {x:3, y:1},
{x:0, y:2},{x:1, y:2},{x:2, y:2},{x:3, y:2},{x:4, y:2},
{x:0, y:3},{x:1, y:3},{x:2, y:3},{x:3, y:3},
  {x:1, y:4},{x:2, y:4},{x:3, y:4}
 ]

// La distancia necesaria entre las casillas para mantener la estructura del tablero
const distanciaX = 2*fichas.radio*Math.sin(anguloHex) 
const distanciaY = Math.sqrt(Math.pow(distanciaX, 2) - Math.pow(distanciaX/2, 2))
class Ficha {
    constructor(x, y,recurso, tieneLadron) {
        this.x = x  //0, 1, 2, 3, 4
        this.y = y  //0 ,1 ,2 ,3, 4
        this.recurso = recurso
        this.tieneLadron = tieneLadron
        switch(recurso) {
            case "piedra":
                this.color = "lavender"
                break;
            case "arcilla":
                this.color = "lightcoral"
                break;
            case "trigo":
                this.color = "lightyellow"
                break;
            case "oveja":
                this.color = "lightgreen"
                break;
            case "desierto":
                this.color = "navajowhite"
                break;
            case "madera":
                this.color = "green"
                break;
        }
    }
    
    draw(c, frameCount) {
        //      x   x   x
        //    x   x   x   x
        //  x   x   x   x   x
        //    x   x   x   x
        //      x   x   x
        if(this.y % 2 == 0){
            drawHexagon(xCenter + (this.x -2) * distanciaX, yCenter + (this.y - 2) * distanciaY, fichas.radio -5, fichas.offset, this.color, 1, true, c)
            drawHexagon(xCenter + (this.x -2) * distanciaX, yCenter + (this.y - 2) * distanciaY + this.y, fichas.radio, fichas.offset, tablero.color1, 5 + animacionFichas*(Math.sin(frameCount*0.05)), false, c)
        } else {
            drawHexagon(xCenter + (this.x + (1/2) - 2) * distanciaX, yCenter + (this.y - 2) * distanciaY, fichas.radio - 5, fichas.offset, this.color, 1, true, c)
            drawHexagon(xCenter + (this.x + (1/2) - 2) * distanciaX, yCenter + (this.y - 2) * distanciaY + this.y, fichas.radio, fichas.offset, tablero.color1, 5 + 5*(Math.sin(frameCount*0.05)), false, c)
        }      
    animacionFichas = (animacionFichas + 1) % 6; //ME MOLA PECHÁ ESTE EFECTO JAJAJA
    }

}



function drawHexagon(x, y, radio, offset, color, grosorLinea, relleno, c) {

    c.strokeStyle = color
    c.lineWidth = grosorLinea
    c.beginPath()
    for (let i = 0; i < 6; i++){
        c.lineTo(x + radio * Math.cos(anguloHex * i - offset), y + radio * Math.sin(anguloHex * i - offset))
    }
    c.closePath();
    c.stroke();
    if (relleno) {
        c.fillStyle = color
        c.fill()
    }
}

function draw(c, frameCount) {
    
    drawHexagon(xCenter, yCenter, yCenter, 0, tablero.color2, 5, true, c)
    drawHexagon(xCenter, yCenter, yCenter - 10, 0, tablero.color1, 5, true, c)

    posiciones.forEach((pos, index) => {
        conjuntoFichas.push(new Ficha(pos.x, pos.y, conjuntoValores[index%6], false))
        conjuntoFichas[index].draw(c, frameCount)
    })
    

}

export default function CasillaCanvas() {
    const canvasRef = useRef(null)
    useEffect(()=>{
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        canvas.width = width
        canvas.height = height
        let frameCount = 0
        let animationFrameId

        const animate = () => {         //FUNCIÓN DE ANIMACIÓN. Todo lo que ocurra aquí se repetirá por cada frame
            frameCount++
            draw(context, frameCount)
            animationFrameId = window.requestAnimationFrame(animate)
        }
        animate();
        
    }, [draw])

    
    return (
    <canvas ref={canvasRef}></canvas>
    )
}
