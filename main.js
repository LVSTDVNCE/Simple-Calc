const resultWindow = document.querySelector('.result-window')
const resultHistory = document.querySelector('.result-history')
const clearButton = document.querySelector('.btn-clear')
const clearHistoryBtn = document.querySelector('.clear-history')
const equalsButton = document.querySelector('.btn-equally')
const buttons = document.querySelectorAll('.btn')

const operators = ['+', '-', '*', '/', '%']

function appendToResult(value) {
	const currentValue = resultWindow.value
	if (operators.includes(value) && operators.includes(currentValue.slice(-1))) {
		return
	}
	if (value === ',' && currentValue.endsWith(',')) {
		return
	}
	resultWindow.value += value
}

function clearResult() {
	resultWindow.value = ''
}

function clearHistory() {
	resultHistory.innerHTML = ''
}

function calculate() {
	const input = resultWindow.value.replace(',', '.')
	try {
		const result = eval(input)
		addToHistory(`${input} = ${result}`)
		resultWindow.value = result
	} catch (error) {
		alert('Ошибка в вычислении')
	}
}

function calcPercent(value) {
	return value / 100
}

function addToHistory(entry) {
	const historyEntry = document.createElement('div')
	historyEntry.style.padding = '20px'
	historyEntry.textContent = entry
	resultHistory.appendChild(historyEntry)
}

resultWindow.addEventListener('keydown', event => {
	if (event.key === 'Enter') {
		event.preventDefault()
		calculate()
	}
})

buttons.forEach(button => {
	button.addEventListener('click', () => {
		if (button.textContent === 'AC') {
			clearResult()
		} else if (button.textContent === '=') {
			calculate()
		} else if (button.textContent === '%') {
			const input = resultWindow.value.replace(',', '.')
			const result = calcPercent(eval(input))
			if (isNaN(result)) {
				resultWindow.value = ''
			} else {
				resultWindow.value = result
				addToHistory(`${input} % = ${result}`)
			}
		} else if (button.textContent === '+/-') {
			const input = resultWindow.value
			if (input.trim() === '') {
				return
			}
			resultWindow.value = -eval(input)
		} else {
			appendToResult(button.textContent)
		}
	})
})

clearHistoryBtn.addEventListener('click', clearHistory)
