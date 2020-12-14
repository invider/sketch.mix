function setup() {
    // spawn two eyes
    lab.spawn(dna.eye, {
        x: rx(.69),
        y: rx(.25),
    })
    lab.spawn(dna.eye, {
        x: rx(.75),
        y: rx(.25),
    })
}
