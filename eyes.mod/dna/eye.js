const defaults = {
    x: rx(.5),
    y: ry(.5),
    hr: rx(.02),
    vr: rx(.03),

    color: hsl(.1, .9, .9),

    iris: {
        size: .5,
        shift: .4,
        color: hsl(.42, .4, .5),
    },
    pupil: {
        size: .2,
        shift: .55,
        color: hsl(.05, .3, .1),
    },
}

let id = 0
function onClone(settings) {
    this.name = 'eye' + (++id) // assign a unique name
    augment(this, defaults, settings)
}

function draw() {
    // declare local shortcuts to simplify calculations
    const { x, y, hr, vr, iris, pupil } = this

    // eye
    fill(this.color)
    ellipse(x, y, hr, vr)
    
    // calculate direction of the mouse cursor
    const dir = bearing(x, y, mouse.x, mouse.y)
    const d = dist(x, y, mouse.x, mouse.y)

    // iris
    fill(iris.color)
    const ishift = min(hr * iris.shift, d)
    ellipse( x + ishift * cos(dir), y + ishift * sin(dir),
                hr * iris.size, vr * iris.size )

    // pupil
    fill(pupil.color)
    const pshift = min(hr * pupil.shift, d)
    ellipse( x + pshift * cos(dir), y + pshift * sin(dir),
                hr * pupil.size, vr * pupil.size )
}
