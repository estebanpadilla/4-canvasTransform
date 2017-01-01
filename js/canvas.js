/*
Use transform.
*/

window.addEventListener('load', init, false);
function init() {

    var canvas = undefined;
    var context = undefined;

    canvas = createCanvas();
    context = canvas.getContext('2d');

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
    var t = 1.5;
    width = 100;
    height = 100;
    context.transform(t, 0, 0, t, -((t - 1) * width), -((t - 1) * height));
    context.fillRect(100, 100, width, height);

    //In case of not using restore use to reset the canvas position.
    context.setTransform(1, 0, 0, 1, 0, 0);

    //Show original shape
    //context.restore();

    context.strokeStyle = 'black';
    context.strokeRect(100, 100, width, height);
}

function createCanvas() {
    var canvas = document.createElement('canvas');
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight;
    canvas.style.left = '0px';
    canvas.style.top = '0px';
    canvas.style.position = 'absolute';
    canvas.style.backgroundColor = '#f6e6ca';
    document.body.appendChild(canvas);
    return canvas;
}