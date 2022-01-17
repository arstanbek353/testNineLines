class Progress {
    constructor(slector) {
        this.element = document.querySelector(slector)
        this.setup()
    }
    setup() {
        if (!this.element) return;
        this.circle = this.element.querySelector('.circle')
        this.num = this.element.querySelector('.to-top__inner')
        this.radius = +this.circle.getAttribute('r')
        this.circumference = this.radius * 2 * Math.PI
        this.circle.style.strokeDashoffset = this.circumference
        this.circle.style.strokeDasharray = this.circumference
    }
    getPercent(current, total) {
        return Math.floor(current * 100 / total)
    }
    set(percent) {
        if (!this.element) return;
        this.num.textContent = percent + '%'
        this.circle.style.strokeDashoffset = this.circumference - (this.circumference * percent / 100)
    }
}

export default Progress