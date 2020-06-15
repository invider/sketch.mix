// [class, constructor]
class Ghost {

    constructor(st) {
        augment(this, st)

        // grow hair
        // [arrays, math, random]
        this.hair = []

        for (let i = 0; i < 20 + RND(10); i++) {
            this.hair.push({
                x: RND(160)-80,
                y: 10-RND(20),
                w: 20,
                h: 20 + RND(20),
            })
        }

        // grow teeth
        // ...
    }

    drawEye(x, y, r) {
        fill('#ffffff')
        circle(x, y, r)

        fill('#000000')
        //circle(x, y, .2*r)

        // calculate direction on the mouse
        const dir = bearing(this.x+x, this.y+y, mouse.x, mouse.y)
        const d = dist(this.x+x, this.y+y, mouse.x, mouse.y)

        const pshift = .3 * r
        circle( x + pshift * sin(dir), y + pshift * cos(dir), .3*r)
        /*
        // iris
        fill(iris.color)
        const ishift = min(hr * iris.shift, d)
        ellipse( x + ishift * sin(dir), y + ishift * cos(dir),
                    hr * iris.size, vr * iris.size )

        // pupil
        fill(pupil.color)
        const pshift = min(hr * pupil.shift, d)
        ellipse( x + pshift * sin(dir), y + pshift * cos(dir),
                hr * pupil.size, vr * pupil.size )
        */
    }

    drawHair(h) {
        fill('#504040')
        rect(h.x-h.w/2, -40-h.h-h.y, h.w, h.h)
    }

    drawTeeth(x, w, h) {
        fill('#ffffb0')
        rect(x-w/2, 40, w, h)
    }

    draw() {
        save()
        translate(this.x, this.y)

        this.drawTeeth(-20, 20, 20)
        this.drawTeeth( 20, 20, 20)

        // body
        fill('#404050')
        rect(-80, -40, 160, 80)
        // bandage
        rect(-50, 80, 100, 40)
        // jaw
        fill('#804040')
        rect(-80, -20, 160, 40)

        // eyes
        this.drawEye(-40, 0, 30)
        this.drawEye( 40, 0, 20)

        // [loops]
        for (let h of this.hair) {
            this.drawHair(h)
        }

        restore()
    }

    ask() {
    }

    say() {
    }
}

