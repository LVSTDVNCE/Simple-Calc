let result = document.querySelector('.result-window')
result.innerHTML = '0'

const clearBtn = document.querySelector('.btn-clear')
let clearAll = () => {
	result.innerHTML = '0'
}
clearBtn.addEventListener('click', clearAll)
// const moduleBtn = document.querySelector('.btn-mod')
// const percentBtn = document.querySelector('.btn-percent')
// const divideBtn = document.querySelector('.btn-divide')
// const multiplyBtn = document.querySelector('.btn-multiply')
// const minusBtn = document.querySelector('.btn-multiply')
// const plusBtn = document.querySelector('.btn-plus')
// const pointBtn = document.querySelector('.btn-point')
// const equallyBtn = document.querySelector('.btn-equally')

// const oneBtn = document.querySelector('.btn-one')
// const twoBtn = document.querySelector('.btn-two')
// const threeBtn = document.querySelector('.btn-three')
// const fourBtn = document.querySelector('.btn-four')
// const fiveBtn = document.querySelector('.btn-five')
// const sixBtn = document.querySelector('.btn-six')
// const sevenBtn = document.querySelector('.btn-seven')
// const eightBtn = document.querySelector('.btn-eight')
// const nineBtn = document.querySelector('.btn-nine')
// const nullBtn = document.querySelector('.btn-null')

let operators = ['/', 'X', '-', '+', '=']

let btn = document.querySelectorAll('.btn')
