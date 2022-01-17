if (document.querySelector('.education__icons')) {
    document.querySelectorAll('.education__icons').forEach(element => {
        const arr = element.querySelectorAll('.education__icon')
        if (arr.length === 0) {
            arr[0].classList.add('is-active')
        } else {
            arr[Math.floor(arr.length / 2)].classList.add('is-active')
        }
    })
}