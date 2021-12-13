const slider = document.querySelector('.slider')
const sidebar = document.querySelector('.sidebar')
const preview = document.querySelector('.preview')
const up_button = document.querySelector('.up-button')
const down_button = document.querySelector('.down-button')

const slide_count = sidebar.querySelectorAll('div').length

console.log(slide_count)

let current_slide_index = 1

sidebar.style.top = `-${(slide_count - 1) * 100}vh`


const change_slide = (direction) => {
    const slider_height = slider.clientHeight
    if (direction === 'up') {
        current_slide_index++
        if (current_slide_index > slide_count - 1) {
            current_slide_index = 0
        }
    } else if (direction === 'down'){
        current_slide_index--
        if (current_slide_index < 0) {
            current_slide_index = slide_count - 1
        }
    }
    preview.style.transform = `translateY(-${current_slide_index * slider_height}px)`
    sidebar.style.transform = `translateY(${current_slide_index * slider_height}px)`
}

up_button.addEventListener('click', () => change_slide('up'))
down_button.addEventListener('click', () => change_slide('down'))
