let addButton = document.getElementById("addButton")
let finishButton = document.getElementById("finishButton")
let listaCompras = []
let lista = document.getElementById("lista")

function checkList(lista) {
	if (lista.length === 0) {
		finishButton.setAttribute("disabled", true)
	} else {
		finishButton.removeAttribute("disabled")
	}
}

checkList(listaCompras)

addButton.addEventListener("click", () => {
	let nome = document.getElementById("nome")
	let categoria = document.getElementById("categoria").value

	if (nome.value == "" || categoria == "0") {
		alert("preencha o formulario")
	} else {
		let listItem = [
			{
				categoria: categoria,
				item: [nome.value],
			},
		]
		// Verifica se a sacola de compra está vazia
		if (listaCompras.length == 0) {
			// Adiciona o primeiro item
			listaCompras.push(...listItem)
		} else {
			listaCompras.map((item) => {
				//Adiciona novo item a categoria existente
				if (listItem[0].categoria == item.categoria) {
					item.item.push(...listItem[0].item)
				}
			})

			// Cria categoria caso não exista e adiciona o item
			const notInArray = listaCompras.every((item) => item.categoria !== listItem[0].categoria)
			//console.log(notInArray)
			if (notInArray) {
				listaCompras.push(...listItem)
			}
		}
		nome.value = ""
		checkList(listaCompras)
	}
})

finishButton.addEventListener("click", () => {
	deleteButton.removeAttribute("disabled")
	let ulCollection = document.getElementsByTagName("ul")
	let ulArray = Array.from(ulCollection)

	// Verificar se já possui uma categoria cadastrada
	if (ulArray.length == 0) {
		renderList()
	} else {
		lista.innerHTML = ""
		renderList()
	}

	finishButton.setAttribute("disabled", true)
})

function renderList() {
	// pega todas as categorias
	let categories = listaCompras.map((item) => {
		return item.categoria
	})
	// Remover as categorias duplicadas
	let uniqueCategories = [...new Set(categories)]

	// Monta o corpo das listas
	uniqueCategories.map((category) => {
		let itemUl = document.createElement("ul")
		itemUl.id = category

		let span = document.createElement("span")
		span.innerText = category
		itemUl.appendChild(span)

		// Distribui os itens em suas respectivas categorias
		listaCompras.map((item) => {
			if (item.categoria == category) {
				item.item.map((i) => {
					let itemLi = document.createElement("li")
					itemLi.innerText = i
					let deleteButton = document.createElement("button")
					deleteButton.addEventListener("click", () => {
						itemLi.remove()
					})
					deleteButton.innerText = "x"
					itemLi.appendChild(deleteButton)
					itemUl.appendChild(itemLi)
				})

				lista.appendChild(itemUl)
			}
		})
	})
}
