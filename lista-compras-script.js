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

			if (notInArray) {
				listaCompras.push(...listItem)
			}
		}
		nome.value = ""
		checkList(listaCompras)
	}
})

finishButton.addEventListener("click", () => {
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
		itemUl.classList.add("bg-amber-200", "rounded", "flex", "flex-col", "self-start", "shadow-lg", "shadow-amber-500/50")

		let span = document.createElement("span")
		span.classList.add("text-xl", "font-bold", "capitalize", "p-4", "text-center", "bg-amber-400", "text-amber-900", "rounded-t")
		span.innerText = category
		itemUl.appendChild(span)

		// Distribui os itens em suas respectivas categorias
		listaCompras.map((item, itemIndex) => {
			if (item.categoria == category) {
				item.item.map((i) => {
					let itemLi = document.createElement("li")
					itemLi.classList.add("flex", "items-center", "px-4", "py-2", "justify-between", "text-lg", "border-b", "border-amber-500", "last:rounded-b")
					itemLi.innerText = i
					let deleteButton = document.createElement("button")
					deleteButton.addEventListener("click", () => {
						itemLi.remove()
						let itemItemIndex = item.item.indexOf(i)

						item.item.splice(itemItemIndex, 1)

						if (item.item.length == 0) {
							listaCompras.splice(itemIndex, 1)
							checkListContent(category)
						}
					})
					deleteButton.innerHTML = '<img class="w-6 text-white" src="./images/trash.svg">'
					deleteButton.classList.add(
						"inline-flex",
						"justify-center",
						"rounded-md",
						"bg-red-600",
						"py-2",
						"px-3",
						"font-semibold",
						"text-white",
						"shadow-sm",
						"hover:bg-red-500",
						"focus-visible:outline",
						"focus-visible:outline-2",
						"focus-visible:outline-offset-2",
						"focus-visible:outline-red-500"
					)
					itemLi.appendChild(deleteButton)
					itemUl.appendChild(itemLi)
				})

				lista.appendChild(itemUl)
			}
		})
	})
}

function checkListContent(category) {
	let lista = document.getElementById(category)

	if (lista.childElementCount <= 1) {
		lista.remove()
	}
}
