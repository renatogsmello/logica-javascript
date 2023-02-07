// let reactVue = document.getElementById("reactVue")
// reactVue.style.display = "none"
// let cJava = document.getElementById("cJava")
// cJava.style.display = "none"
// let fullstack = document.getElementById("fullstack")
// fullstack.style.display = "none"

// let fronEndInput = document.getElementById("frontEnd")
// let backEndInput = document.getElementById("backEnd")

// fronEndInput.addEventListener("click", () => {
// 	if (fronEndInput.checked) {
// 		reactVue.style.display = "block"
// 	} else {
// 		reactVue.style.display = "none"
// 	}
// })

// backEndInput.addEventListener("click", () => {
// 	if (backEndInput.checked) {
// 		cJava.style.display = "block"
// 	} else {
// 		cJava.style.display = "none"
// 	}
// })

// let reactInput = document.getElementById("react")
// let vueInput = document.getElementById("vue")
// let cSharpInput = document.getElementById("cSharp")
// let javaInput = document.getElementById("java")

// let inputCollection = document.getElementsByTagName("input")
// let inputArray = Array.from(inputCollection)

// inputArray.map((input) => {
// 	input.addEventListener("click", () => {
// 		checkCount()
// 	})
// })

// function checkCount() {
// 	let checkeds = 0

// 	for (let i = 0; i < inputArray.length; i++) {
// 		if (inputArray[i].checked) {
// 			checkeds++
// 		}
// 		if (checkeds == inputArray.length) {
// 			fullstack.style.display = "block"
// 		} else {
// 			fullstack.style.display = "none"
// 		}
// 	}
// }

const area = prompt("Escolha uma área para iniciar os estudos? Front-End ou Back-End. Digite abaixo: ")
let linguagem = ""

if (area === "Front-End") {
	linguagem = prompt("Bem vindo ao curso de Front-End, qual framework você quer estudar? React ou Vue.")
} else if (area === "Back-End") {
	linguagem = prompt("Bem vindo ao curso de Back-End, qual framework você quer estudar? C# ou Java.")
} else {
	alert("Você não selecionou uma área válida")
}

const especialidadeOuFullstack = prompt("Digite 1 se deseja especializar mais ou 2 caso queira continuar se desenvolvendo para Fullstack")

if (especialidadeOuFullstack == 1) {
	alert(`Continue se especializando em ${linguagem} para dominar ${area}`)
} else if (especialidadeOuFullstack == 2) {
	alert(`Está na hora de partir pra outras linguagens além da ${linguagem} se quiser ser Fullstack`)
}

let msg = prompt("Você gostaria de conhecer mais alguma tecnologia?")
while (msg === "sim") {
	let novaTecnologia = prompt("Qual?")
	if (novaTecnologia != "") {
		alert(`Essa tecnologia ${novaTecnologia} é bem maneira`)
	}
	msg = prompt("tem alguma outra tecnologia?")
}
