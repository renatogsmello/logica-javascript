let addButton = document.getElementById("addButton")
let finishButton = document.getElementById("finishButton")
let listaCompras = []

addButton.addEventListener("click", () => {
	let nome = document.getElementById("nome")
	let categoria = document.getElementById("categoria").value
	let listItem = [
		{
			nome: nome.value,
			categoria: categoria,
		},
	]

	listaCompras.push(...listItem)
	nome.value = ""
})

finishButton.addEventListener("click", () => {
	let lista = document.getElementById("lista")

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
				let itemLi = document.createElement("li")
				itemLi.innerText = item.nome

				itemUl.appendChild(itemLi)
				lista.appendChild(itemUl)
			}
		})
	})
})
