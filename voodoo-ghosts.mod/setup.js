function setup() {

    lab.spawn(dna.Ghost, {
        name: 'inky',
        x: 200,
        y: 200,
    })

    lab.spawn(dna.Ghost, {
        name: 'blinky',
        x: 400,
        y: 260,
    })

    lab.spawn(dna.Ghost, {
        name: 'monky',
        x: 700,
        y: 400,
    })
}
