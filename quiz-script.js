let guessButton = document.getElementById("guess")
let tries = 3
let luckyNum = Math.floor(Math.random() * 10)
guessButton.addEventListener("click", () => {
	let numValue = document.getElementById("numero").value
	guess(numValue)
})

function guess(value) {
	let msg = document.getElementById("mensagem")

	if (value == luckyNum) {
		msg.innerText = "Parabens, você acertou o número"
	} else {
		tries--
		// console.log(tries)
		msg.innerText = `Você tem ${tries} tentativas`
	}
	if (tries == 0) {
		msg.innerText = `O número era ${luckyNum}`
	}
}
