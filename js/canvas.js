window.addEventListener('load', init, false);


function init() {
    var canvas = undefined;
    var context = undefined;
    const stats = new Stats();
    document.body.appendChild(stats.dom);

    canvas = createCanvas();
    context = canvas.getContext('2d');

    function update() {
        // stats.begin();

        context.save();

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
        //Apply transforms
        context.transform(1, 0, 0, 1, 0, 0);
        context.fillRect(100, 100, 100, 100);

        //Show original shape
        context.restore();
        context.strokeStyle = 'black';
        context.strokeRect(100, 100, 100, 100);

        // requestAnimationFrame(update);
        // stats.end();
    }
    update();
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