const INITIAL_VELOCITY = 0.025;

export default class Ball {
constructor(ballelem) {
this.ballelem = ballelem
this.reset()
}

get x() {
    return parseFloat (getComputedStyle(this.ballelem).getPropertyValue("--x"))
}

set x(value) {
    this.ballelem.style.setProperty("--x", value)
}

get y() {
    return parseFloat (getComputedStyle(this.ballelem).getPropertyValue("--y"))
}

set y(value) {
    this.ballelem.style.setProperty("--y", value)
}

rect() {
    return this.ballelem.getBoundingClientRect()
}

reset() {
    this.x = 50;
    this.y = 50;
    this.direction = {x: 0 };
    while (Math.abs(this.direction.x) <= 0.2 || Math.abs(this.direction.x) >= 0.9) {
        const heading = randomNumberBetween (0, 2* Math.PI);
        this.direction = {x: Math.cos(heading), y: Math.sin(heading) }
    }
    this.velocity = INITIAL_VELOCITY
}

update (delta) {
this.x += this.direction.x * this.velocity * delta;
this.y += this.direction.y * this.velocity * delta;
const rect = this.rect()

if(rect.bottom >= window.innerHeight || rect.top <= 0) {
    this.direction.y *= -1

}

}

}

function randomNumberBetween (min, max) {
    return Math.random() * (max - min) + min
}