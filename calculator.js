const numeros = []

document.addEventListener("click", (e) => {
	let value = e.target.value

	if (e.target.type == "button") {
		insert(value)

		if (value == "ac") {
			let display = document.getElementById("display")
			display.value = ""
		}

		if (value == "=") {
			let display = document.getElementById("display")
			// remove o simbolo de igual da string
			let expression = display.value.slice(0, -1)
			// separa os valores em variáveis
			expression = expression.split(/(\S+)\s(\D)\s(\S+)/)
			let expressionShift = expression.shift()
			let expressionPop = expression.pop()
			let [num1, eq, num2] = expression

			switch (eq) {
				case "+":
					display.value = sum(num1, num2)
					break
				case "-":
					display.value = subtract(num1, num2)
					break
				case "x":
					display.value = multiply(num1, num2)
					break
				case "/":
					display.value = divide(num1, num2)
					break
				default:
					break
			}
		}
	}
})

function insert(num) {
	if (num == "+" || num == "-" || num == "x" || num == "/") {
		let display = document.getElementById("display")
		display.value = `${display.value} ${num} `
	} else {
		let display = document.getElementById("display")
		display.value = display.value + num
	}
}

function sum(value1, value2) {
	let num1 = Number(value1)
	let num2 = Number(value2)
	return num1 + num2
}
function subtract(value1, value2) {
	let num1 = Number(value1)
	let num2 = Number(value2)
	return num1 - num2
}
function multiply(value1, value2) {
	let num1 = Number(value1)
	let num2 = Number(value2)
	return num1 * num2
}
function divide(value1, value2) {
	let num1 = Number(value1)
	let num2 = Number(value2)
	return num1 / num2
}
