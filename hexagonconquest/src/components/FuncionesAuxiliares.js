
const anguloHex = Math.PI/3

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

export default {drawHexagon}