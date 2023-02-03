let form = document.getElementById("questionario")

form.addEventListener("submit", (e) => {
	e.preventDefault()

	let name = document.getElementById("nome").value
	let idade = document.getElementById("idade").value
	let linguagem = document.getElementById("linguagem-programacao").value

	let respostas = document.createElement("div")
	respostas.innerHTML = `
    
    <p>Olá ${name}, você tem ${idade} anos e já está aprendendo ${linguagem}!</p>
    
				<label for="estudo">Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO</label>
				<input type="number" id="estudo" name="estudo" required />
			</div>
            <button onClick="responder()">Responder</button>
            <div id='respostas'></div>
            
    `
	form.appendChild(respostas)
})

function responder() {
	let estudo = document.getElementById("estudo")
	let respostas = document.getElementById("respostas")
	if (estudo.value == 1) {
		respostas.innerText = ""
		respostas.innerText = "Muito bom! Continue estudando e você terá muito sucesso"
	}
	if (estudo.value == 2) {
		respostas.innerText = ""
		respostas.innerText = "Ahh que pena... Já tentou aprender outras linguagens?"
	}
	estudo.value = ""
}
