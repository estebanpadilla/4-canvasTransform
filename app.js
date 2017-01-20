/*
Use transform.
*/

window.addEventListener('load', init, false);
function init() {

    let canvas = createCanvas();
    let context = canvas.getContext('2d');

    //context.save();
    context.fillStyle = '#ee3344';
    /*
        context.transform(a, b, c, d, e, f);
        a:  scale: width = value * width
            move: x = value * width
        b:  skewing right side value * height
            move y = value * height
        c:  skewing bottom side value * width
            move:  x = value * width
        d:  scale:  height = height * value
            move:   y = value * height
        e: move: x = value pixels
        f: move: y = value pixels
    */

    // //Apply transforms
    let t = 1.5;
    width = 100;
    height = 100;
    context.transform(t, 0, 0, t, -((t - 1) * width), -((t - 1) * height));
    context.fillRect(100, 100, width, height);

    //Use context restore to reset the canvas transformations.
    // context.setTransform(1, 0, 0, 1, 0, 0);
    context.resetTransform();

    //Show original shape
    //context.restore();

    context.strokeStyle = 'black';
    context.strokeRect(100, 100, width, height);
}

function createCanvas() {
    var canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight;
    return canvas;
}